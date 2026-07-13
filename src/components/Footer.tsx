import {
  ActionIcon,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
      }}
    >
      <Flex justify="space-between" wrap="wrap" gap={40} mb={50}>
        <Group>
          <MdOutlineProductionQuantityLimits size={28} />
          <div>
            <Text fw={700}>Products</Text>
          </div>
        </Group>

        <Group gap="xl">
          <Group gap="xs">
            <FaMapMarkerAlt color="darkred" />
            <div>
              <Text fw={600} size="sm">
                Address
              </Text>
              <Text size="sm" c="dimmed">
                Mani uyim
              </Text>
            </div>
          </Group>

          <Group gap="xs">
            <FaEnvelope color="darkred" />
            <div>
              <Text fw={600} size="sm">
                Email
              </Text>
              <Text size="sm" c="dimmed">
                Badriddin@yahoo.com
              </Text>
            </div>
          </Group>

          <Group gap="xs">
            <FaPhoneAlt color="darkred" />
            <div>
              <Text fw={600} size="sm">
                Phone
              </Text>
              <Text size="sm" c="dimmed">
                +998 88 1234567
              </Text>
            </div>
          </Group>
        </Group>
      </Flex>

      <Divider mb={40} />

      <Flex justify="space-between" wrap="wrap" gap={40}>
        <Stack maw={260}>
          <Title order={4}>Car Rental</Title>

          <Text size="sm" c="dimmed">
            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis
            massa a id iaculis lorem.
          </Text>

          <Group>
            <ActionIcon variant="light" radius="xl">
              <FaFacebookF color="darkred" />
            </ActionIcon>

            <ActionIcon variant="light" radius="xl">
              <FaInstagram color="darkred" />
            </ActionIcon>

            <ActionIcon variant="light" radius="xl">
              <FaLinkedinIn color="darkred" />
            </ActionIcon>

            <ActionIcon variant="light" radius="xl">
              <FaTelegramPlane color="darkred" />
            </ActionIcon>
          </Group>
        </Stack>

        <Stack gap={8}>
          <Title order={4}>Useful Links</Title>

          <Text size="sm">About us</Text>
          <Text size="sm">Contact us</Text>
          <Text size="sm">Gallery</Text>
          <Text size="sm">Blog</Text>
          <Text size="sm">FAQ</Text>
        </Stack>

        <Stack gap={8}>
          <Title order={4}>Products</Title>

          <Text size="sm">Shoes</Text>
          <Text size="sm">T-shirt</Text>
          <Text size="sm">Shirt</Text>
          <Text size="sm">Skirt</Text>
          <Text size="sm">SUV</Text>
        </Stack>

        <Stack>
          <Title order={4}>Download App</Title>

          <Image src="/appstore.jpg" w={150} fit="contain" />

          <Image src="/goog.jpg" w={150} fit="contain" />
        </Stack>
      </Flex>

      <Divider my={40} />

      <Text ta="center" size="sm" c="dimmed">
        © Copyright Product shop 2026. Design by Badriddin.
      </Text>
    </footer>
  )
}
