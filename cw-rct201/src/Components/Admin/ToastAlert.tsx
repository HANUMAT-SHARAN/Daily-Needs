import { toast } from "react-toastify";
export const nameSuccess = () => {
    toast.success(" Name Updated Successfully", { theme: "colored" });
  };
  export const categorySuccess = () => {
    toast.success(" Category Updated Successfully", { theme: "colored" });
  };
  export  const priceSuccess = () => {
    toast.success("Price Updated Successfully", { theme: "colored" });
  };
  export const deleteSuccess = () => {
    toast.error("Product Deleted Successfully", { theme: "colored" });
  };
  export const imageUpdate = () => {
    toast.success("Image Updated Successfully", { theme: "colored" });
  };