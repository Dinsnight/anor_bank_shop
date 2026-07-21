import { Button } from '@mantine/core'
import { modals } from '@mantine/modals'
import { CreateProductForm } from './CreateProductForm.tsx'

export const CreateProductButton = () => {
  const openModal = () => {
    const id = modals.open({
      title: 'New Product',
      children: <CreateProductForm onSuccess={() => modals.close(id)} />,
    })
  }

  return <Button onClick={openModal}>Add product</Button>
}