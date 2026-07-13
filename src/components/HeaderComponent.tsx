import { Box, Button, Container, Flex, Group, Image } from '@mantine/core'
import { Link } from 'react-router'
import { menuLinks } from '../constants/menuLinks'

export const HeaderComponent = () => {
  return (
    <Box py="md">
      <Container size="lg">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Image src="https://www.anorbank.uz/images/logo.svg" w={60} />
          </Link>

          <Group gap={35}>
            {menuLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: '0.2s',
                  color: 'darkred',
                }}
              >
                {item.title}
              </Link>
            ))}
          </Group>

          <Button color="darkred" radius="xl">
            Contact
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
