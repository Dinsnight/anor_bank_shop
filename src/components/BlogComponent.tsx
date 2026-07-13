import { Card, Container, Grid, Image, Stack, Title, Text } from '@mantine/core'

const blogs = [
  {
    image:
      'https://admin-api.bankers.uz/uploads/9e1808484ec9e01034f1b81130809020.png',
    title: 'How to choose the right product',
    date: '12 September 2026',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtOhrtIW5TQsOJG48_Xruc_oAuz9FuGECcbX0g4ZmX3vmLQJOZEYqpaUs&s=10',
    title: 'Which plan is right for me?',
    date: '23 September 2023',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4xxcAXs5upUi1AQDfhc15j2fOK630mZEfULR8P9PTGeOV_YS3YEKWDU&s=10',
    title: 'Enjoy Speed, Choice & Total Control',
    date: '30 September 2345',
  },
]

export default function BlogComponent() {
  return (
    <Container>
      <Grid>
        {blogs.map((blog, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" h={300}>
              <Card.Section>
                <Image src={blog.image} alt="blog post" />
              </Card.Section>

              <Stack p="md" gap={6}>
                <Title order={6} fw={700}>
                  {blog.title}
                </Title>

                <Text size="xs" c="dimmed">
                  News/ {blog.date}
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
