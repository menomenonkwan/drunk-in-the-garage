export default {
  // Computer Name
  name: 'lyrics',
  // visible title
  title: 'Lyrics',
  type: 'document',
  icon: () => `🎼`,
  fields: [
    {
      name: 'name',
      title: 'Song name',
      type: 'string',
      description: 'What is the name of the song?',
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
      name: 'writer',
      title: 'Song writer',
      type: 'string',
      description: 'Who wrote the song?',
    },
    {
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{type: 'albums'}]
    },
    {
      name: "lyric",
      title: "Lyric",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}