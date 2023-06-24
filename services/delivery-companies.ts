export const getDeliveryCompanies = async () => {
  try {
    const companies = await fetch(`${process.env.BASE_URL}/delivery-companies`);
    return await companies.json();
  } catch (error) {
    return null;
  }
};

export const getDeliveryCompany = async (slug: string) => {
  try {
    const companies = await fetch(
      `${process.env.BASE_URL}/delivery-companies/slug/${slug}`
    );
    return await companies.json();
  } catch (error) {
    return null;
  }
};
