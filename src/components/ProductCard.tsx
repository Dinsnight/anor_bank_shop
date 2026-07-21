import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

import { useDeleteProduct } from "../hooks/useProductMutations";
import type { IProduct } from "../types/product";
import { EditProductButton } from "./products/EditProductButton";

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const { mutate, isPending } = useDeleteProduct();

  const handleDelete = () => {
    modals.openConfirmModal({
      title: "Delete product",
      children: (
        <Text size="sm">
          Are you sure that you want to delete this product{" "}
          <b>{product.title}</b>?
        </Text>
      ),

      labels: {
        confirm: "Delete",
        cancel: "Cencel",
      },

      confirmProps: {
        color: "red",
      },

      onConfirm: () => {
        mutate(product.id, {
          onSuccess: () => {
            notifications.show({
              color: "green",
              message: "Product was succc deleted",
            });
          },

          onError: (error) => {
            notifications.show({
              color: "red",
              message: error.message,
            });
          },
        });
      },
    });
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.images?.[0]}
          h={180}
          alt={product.title}
          fallbackSrc="https://placehold.co/600x400?text=No+image"
        />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <Text fw={600} lineClamp={1}>
          {product.title}
        </Text>

        <Badge color="orange">
          ${product.price}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2} mt="xs">
        {product.description}
      </Text>

      <Stack mt="md">
        <Button
          color="red"
          loading={isPending}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Stack>
      <Stack mt="md">
    <EditProductButton product={product} />
</Stack>
    </Card>
  );
};