import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { createTheme, MantineProvider, Notification } from '@mantine/core'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import { router } from './router/router.tsx'
import { ModalsProvider } from '@mantine/modals'

const theme = createTheme({
  primaryColor: 'red',
})

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <Notification/>
        <ModalsProvider/>
        <RouterProvider router={router} />
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
