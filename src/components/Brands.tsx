import { Group, Paper, ThemeIcon } from '@mantine/core'
import { SiJeep, SiBmw, SiAudi, SiBitcoinsv, SiDiscourse } from 'react-icons/si'

const brands = [SiJeep, SiBmw, SiAudi, SiBitcoinsv, SiDiscourse]

export default function Brands() {
  return (
    <Paper radius="xl" p="xl" shadow="sm" m={15} withBorder bg="#fafafa">
      <Group justify="space-around" gap="90">
        {brands.map((Icon, index) => (
          <ThemeIcon
            key={index}
            variant="transparent"
            size={70}
            color="dark"
            style={{
              transition: '0.3s',
              cursor: 'pointer',
            }}
          >
            <Icon size={65} />
          </ThemeIcon>
        ))}
      </Group>
    </Paper>
  )
}
