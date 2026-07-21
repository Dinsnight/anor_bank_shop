import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";

import type { IProduct } from "../../types/product";
import { CreateProductForm } from "./CreateProductForm";

interface Props {
  product: IProduct;
}

export const EditProductButton = ({ product }: Props) => {
  const openModal = () => {
    const id = modals.open({
      title: "Edit product",

      children: (
        <CreateProductForm
          product={product}
          onSuccess={() => modals.close(id)}
        />
      ),
    });
  };

  return (
    <Button onClick={openModal}>
      Edit my bro
    </Button>
  );
};