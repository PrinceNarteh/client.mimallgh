import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "@/lib/axios";
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";
import { Product } from "@/types/product";
import { categories } from "@/utils/menus";
import { convertBase64, parseImageUrl } from "@/utils/utilities";
import { omit } from "lodash";
import Image from "next/image";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ICreateProduct } from "../../utils/validations";
import { Button, Card, InputField, Modal, SelectOption } from "./index";

const initialValues: ICreateProduct = {
  brand: "",
  category: "food",
  description: "",
  discountPercentage: 0,
  price: 0,
  stock: 0,
  title: "",
  images: [],
  pickedImages: [],
};

export const AddProductForm = ({ product }: { product?: Product }) => {
  const data = omit(product, ["shop", "createdAt", "updatedAt"]);
  const {
    query: { productId },
    push,
  } = useRouter();

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICreateProduct>({
    defaultValues: product ? data : initialValues,
  });
  const [productImages, setProductImages] = useState(product?.images || []);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [pickedImages, setPickedImages] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [publicId, setPublicId] = useState("");
  const axiosAuth = useAxiosAuth();

  const selectedImages = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    let pickedImages: File[] = [];
    if (files !== null) {
      pickedImages = Array.from(files);
    }
    setPickedImages([...images, ...pickedImages]);
  };

  function deleteSelectedImage(index: number) {
    const imageCopy = [...pickedImages];
    if (imageCopy.length === 1) {
      setPickedImages([]);
      setPreviewImages([]);
    } else {
      imageCopy.splice(index, 1);
      setPickedImages([...imageCopy]);
    }
  }

  useEffect(() => {
    const getImages = () => {
      const imagesArray: string[] = [];
      pickedImages?.map((file) => {
        convertBase64(file)
          .then((res) => {
            imagesArray.push(res);
          })
          .finally(() => {
            setPreviewImages(imagesArray);
          });
      });
    };
    getImages();
  }, [pickedImages]);

  const deleteImage = (imageId: string) => {
    setPublicId(imageId);
    setOpenDialog(true);
  };

  async function confirmDelete(choose: boolean) {
    if (choose) {
      const toastId = toast.loading("Loading...");

      try {
        const res = await axios.delete(
          `/products/${product?.id}/image/${publicId}`
        );
        reset(res.data);
        setProductImages(res.data.images);
        toast.dismiss(toastId);
        toast.success("Image deleted successfully");
      } catch (error) {
        toast.dismiss(toastId);
      } finally {
        setOpenDialog(false);
      }
    } else {
      setOpenDialog(false);
    }
  }

  const submitHandler: SubmitHandler<ICreateProduct> = async (data) => {
    const toastId = toast.loading("Loading");

    const formData: any = new FormData();
    formData.append("title", data.title);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("discountPercentage", data.discountPercentage);
    formData.append("price", data.price);
    formData.append("stock", data.stock);

    try {
      if (productId) {
        formData.append("images", JSON.stringify(data.images));

        pickedImages.forEach((image) => {
          formData.append("newImages", image);
        });

        const res = await axiosAuth.patch(`/products/${productId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.status === 200) {
          toast.success("Product updated successfully");
          push(`/shop/products/${productId}`);
        } else {
          toast.error("Error updating product");
        }
      } else {
        Array.from(pickedImages).forEach((image) => {
          formData.append("images", image);
        });
        const res = await axiosAuth.post("/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.status === 201) {
          toast.success("Product created successfully");
          push(`/shop/products/${res.data.id}`);
        } else {
          toast.error("Error updating product");
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="mx-auto max-w-4xl pb-5">
      <Card heading={"Add Product"}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-4">
            <InputField
              label="Title"
              name="title"
              register={register}
              errors={errors}
            />
            <div className="flex flex-col gap-5 md:flex-row">
              <InputField
                label="Price"
                name="price"
                type="number"
                register={register}
                errors={errors}
                validationSchema={{ valueAsNumber: true }}
              />
              <InputField
                label="Discount"
                name="discountPercentage"
                type="number"
                register={register}
                errors={errors}
                validationSchema={{ valueAsNumber: true }}
              />
            </div>
            <InputField
              label="Stock"
              name="stock"
              type="number"
              register={register}
              errors={errors}
              validationSchema={{ valueAsNumber: true }}
            />
            <div className="flex flex-col gap-5 md:flex-row">
              <InputField
                label="Brand"
                name="brand"
                register={register}
                errors={errors}
              />
              <div className="my-2 w-full">
                <label
                  htmlFor=""
                  className="mb-1.5 block pl-2 capitalize tracking-widest"
                >
                  Category
                </label>
                <select
                  className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
                  {...register("category")}
                >
                  <option value="" className="bg-light-gray">
                    Select Category
                  </option>
                  {categories.map((category, idx) => (
                    <SelectOption
                      key={idx}
                      label={category.label}
                      value={category.value}
                    />
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor=""
                className="mb-2 inline-block text-xl capitalize"
              >
                Description
              </label>
              <textarea
                className="w-full rounded border border-gray-600 bg-transparent p-2 outline-none"
                rows={5}
                {...register("description")}
              />
            </div>
            {/* Product Images */}
            {productImages.length > 0 ? (
              <div className="">
                <label
                  className="mb-2 block bg-light-gray pl-2 capitalize tracking-widest"
                  htmlFor="user_avatar"
                >
                  Product Images
                </label>
                <div className="flex gap-5 overflow-x-auto py-3">
                  {productImages?.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-32 w-32 shrink-0 rounded-md bg-slate-500"
                    >
                      <AiOutlineCloseCircle
                        onClick={() => deleteImage(image.id)}
                        className="absolute -right-2 -top-2 cursor-pointer rounded-full bg-white text-2xl text-orange-500 z-20"
                      />
                      <Image
                        src={parseImageUrl(image.name, "products")}
                        style={{ objectFit: "cover" }}
                        alt=""
                        fill
                        sizes="300px,300px"
                        className="rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {/* Selected Images */}
            <div className="">
              <label
                className="mb-2 block bg-light-gray pl-2 capitalize tracking-widest"
                htmlFor="user_avatar"
              >
                Selected Image(s)
              </label>
              <input
                className="block w-full cursor-pointer rounded-lg border bg-dark-gray file:border-none file:bg-light-gray file:px-5 file:py-3 file:text-white"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                multiple
                accept=".png, .jpg, .jpeg"
                {...register("pickedImages")}
                onChange={(e) => selectedImages(e)}
              ></input>
            </div>
            <div className="flex gap-5 overflow-x-auto py-3">
              {previewImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 w-32 shrink-0 rounded-md bg-slate-500"
                >
                  <AiOutlineCloseCircle
                    onClick={() => deleteSelectedImage(index)}
                    className="absolute -right-2 -top-2 z-10 cursor-pointer rounded-full bg-white text-2xl text-orange-500"
                  />
                  <div className="overflow-hidden">
                    <Image
                      src={image}
                      fill
                      sizes="128px"
                      style={{ objectFit: "cover" }}
                      alt=""
                      className="rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-5">
            <label
              className="mb-2 block bg-light-gray pl-2 capitalize tracking-widest"
              htmlFor="user_avatar"
            >
              Product Video
            </label>
            <input
              className="block w-full cursor-pointer rounded-lg border bg-dark-gray file:border-none file:bg-light-gray file:px-5 file:py-3 file:text-white"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              multiple
              accept=".png, .jpg, .jpeg"
            ></input>
          </div>
          <Button type="submit">{productId ? "Edit" : "Add"} Product</Button>
        </form>
      </Card>
      {openDialog ? (
        <Modal
          onDialog={confirmDelete}
          message={
            openDialog
              ? `Are you sure you want to delete this product image?`
              : ""
          }
        />
      ) : null}
    </div>
  );
};
