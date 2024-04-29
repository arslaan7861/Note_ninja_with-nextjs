"use server";
const test = async (formData: FormData) => {
  console.log("working");
  const file = formData.get("file");
  console.log(file);

  return;
};
export default test;
