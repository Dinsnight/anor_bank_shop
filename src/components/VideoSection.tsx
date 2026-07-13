import { AspectRatio, Box } from '@mantine/core'

export default function VideoSection() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Box
        pos="relative"
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          paddingTop: 60,
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rw38UxUoCVI?si=5l32WGb3M6agBvzk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 0,
          }}
        ></iframe>
      </Box>
    </AspectRatio>
  )
}
