import Api from "../libaray/api";
export const getFaqs = async () => {
  const res = await Api.get("/faqs");
  return res.data.data;   
};