export interface Category {
  id: string;
  name: string;
  billboard: BillBoard;
}

export interface BillBoard {
  id: string;
  label: string;
  imageUrl: string;
  createdAt: Date;
}

export type Image = { id: string; url: string };
export interface Product {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  price: string;
  size: string;
  isFeatured: boolean | null;
  isArchieved: boolean | null;
  sizeId: string;
  colourId: string;
  colourName: string;
  colour: string;
  category: string;
  images: Array<Image>;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Colour {
  id: string;
  name: string;
  value: string;
}
