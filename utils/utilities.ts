export const capitalize = (word: string, split: string = "-") => {
  if (!word) return;
  if (word === "knh_valco") return "KNH/Valco";

  return word
    .split(split)
    .map((word) => `${String(word[0]?.toUpperCase())}${word.slice(1)}`)
    .join(" ");
};

export const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const slugify = (url: string) => url.split("_").join("-");

export const convertBase64 = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
  });
};

export const parseDeliveryImageUrl = (imageName: string) => {
  return `https://api.mimallgh.com/delivery-companies/image/${imageName}`;
};

export const parseProductImageUrl = (imageName: string) => {
  return `https://api.mimallgh.com/products/image/${imageName}`;
};

export const parseShopImageUrl = (imageName: string) => {
  return `https://api.mimallgh.com/shops/image/${imageName}`;
};
