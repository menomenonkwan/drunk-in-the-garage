export default {
  // Computer Name
  name: 'news',
  // visible title
  title: 'News',
  type: 'document',
  icon: () => `📰`,
  fields: [
    {
      name: 'name',
      title: 'News name',
      type: 'string',
      description: 'What is the news headline?',
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
      name: 'date',
      title: 'News date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: "news",
      title: "News",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}