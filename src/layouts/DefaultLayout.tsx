import { Stack } from '@mantine/core'
import { HeaderComponent } from '../components/HeaderComponent'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function DefaultLayout() {
  return (
    <>
      <Stack mih="100vh" gap={0}>
        <HeaderComponent />

        <Stack gap={0} flex={1}>
          <Outlet />
        </Stack>

        <Footer />
      </Stack>
    </>
  )
}
