import Api from "../libaray/api";

export const getRealWeddings = async () => {
  const res = await Api.get("/real-weddings");
  return res.data.data;
};

export const getRealWeddingById = async (slug: string) => {
  const res = await Api.get(`/real-weddings/${slug}`);
  return res.data.data;
};