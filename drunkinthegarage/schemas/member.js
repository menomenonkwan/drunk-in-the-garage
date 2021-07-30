export default {
  // Computer Name
  name: 'person',
  // visible title
  title: 'Bandmember',
  type: 'document',
  icon: () => `🥴`,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'instrument',
      title: 'Instrument',
      type: 'string',
      description: 'Tell us what this person does',
    },
    {
      name: 'social',
      title: 'Social',
      type: 'string',
      description: 'Give us a social media platform',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about this person',
    },
    {
      name: 'favorite',
      title: 'Favorite',
      type: 'string',
      description: 'What does this person like to drink',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
      description: 'Quote this person',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
