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
    const company = await fetch(
      `${process.env.BASE_URL}/delivery-companies/slug/${slug}`
    );
    console.log(process.env.BASE_URL);
    return await company.json();
  } catch (error) {
    return null;
  }
};
