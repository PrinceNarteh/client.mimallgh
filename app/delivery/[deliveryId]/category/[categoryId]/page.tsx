import { Container } from "@/components";
import ShopCard from "@/components/client/Delivery/ShopCard";
import Header from "@/components/client/Header";

const ProductByCategory = () => {
  return (
    <Container>
      <div className="bg-gray-300 bg-opacity-30">
        <div className="md:w-11/12 mx-auto p-3 md:p-5">
          <div className="grid grid-cols-1 gap-5">
            <div className="col-span-12 xl:col-span-9 space-y-5">
              <Header value="categoryId" />
              <ShopCard />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductByCategory;
