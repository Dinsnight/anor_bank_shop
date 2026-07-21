import {
  Button,
  NumberInput,
  Select,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { useCategories } from '../../hooks/useProducts.ts'
import {
  useCreateProduct,
  useUpdateProduct,
} from '../../hooks/useProductMutations.ts'
import type { IProduct, IProductForm } from '../../types/product.ts'


interface ICreateProductFormProps {
  product?: IProduct
  onSuccess?: () => void
}

export const CreateProductForm = ({ product, onSuccess }: ICreateProductFormProps) => {
  const { data: categories } = useCategories()
  const createMutation = useCreateProduct()
  const updateMutation = useUpdateProduct()

  const form = useForm<IProductForm>({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      categoryId: 0,
      images: ['https://placehold.co/600x400'],
    },

    validate: {
      title: (value) => (value.trim().length < 3 ? 'At least 3 signs' : null),
      price: (value) => (value <= 0 ? 'price should be more than 0' : null),
      description: (value) =>
        value.trim().length < 10 ? 'At least 10 sign' : null,
      categoryId: (value) => (value ? null : 'Choose category'),
    },
  })

  const handleSubmit = (values: IProductForm) => {
    if (product) {
      updateMutation.mutate(
        {
          id: product.id,
          data: values,
        },
        {
          onSuccess: () => {
            notifications.show({
              color: 'green',
              message: 'Product was uptated',
            })

            onSuccess?.()
          },

          onError: (error) => {
            notifications.show({
              color: 'red',
              message: error.message,
            })
          },
        }
      )

      return
    }

    createMutation.mutate(values, {
      onSuccess: () => {
        notifications.show({
          color: 'green',
          message: 'Product was created',
        })

        form.reset()
        onSuccess?.()
      },

      onError: (error) => {
        notifications.show({
          color: 'red',
          message: error.message,
        })
      },
    })
  }
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Name of the product"
          placeholder="e.g. Badriddin phone"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <NumberInput
          label="Price"
          placeholder="0"
          min={0}
          withAsterisk
          {...form.getInputProps('price')}
        />

        <Textarea
          label="Description"
          placeholder="Tell me more about product"
          minRows={3}
          withAsterisk
          {...form.getInputProps('description')}
        />

        <Select
          label="Category"
          placeholder="Choose"
          withAsterisk
          data={
            categories?.map((c) => ({
              value: String(c.id),
              label: c.name,
            })) ?? []
          }
          value={form.values.categoryId ? String(form.values.categoryId) : null}
          onChange={(value) => form.setFieldValue('categoryId', Number(value))}
          error={form.errors.categoryId}
        />

        <Button
          type="submit"
          loading={createMutation.isPending || updateMutation.isPending}
        >
          Create Product
        </Button>
      </Stack>
    </form>
  )
}
