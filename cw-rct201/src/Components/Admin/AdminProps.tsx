export type SingleAdminPropsType = {
  id: number;
  image1: string;
  name: string;
  category: string;
  cost: number;
  setUpdateOpen: (value: boolean) => void;
  setDeleteOpen: (value: boolean) => void;
};

export type AccordianPropsType = {
  id: number;
  updateName: (id: number, text: string) => void;
  updateCategory: (id: number, text: string) => void;
  updatePrice: (id: number, text: string) => void;
  updateImage: (id: number, text: string) => void;
};
