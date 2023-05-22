export const capitalize = (word: string, split: string = "-") => {
  if (!word) return;
  if (word === "knh") return word.toUpperCase();

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
