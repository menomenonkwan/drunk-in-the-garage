export default {
  // Computer Name
  name: 'images',
  // visible title
  title: 'Images',
  type: 'document',
  icon: () => `👀`,
  fields: [
    {
      name: 'name',
      title: 'Image name',
      type: 'string',
      description: 'What is the title of this image?',
    },
    {
      name: 'description',
      title: 'Image description',
      type: 'string',
      description: 'Describe the image',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
}