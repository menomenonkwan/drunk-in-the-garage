export default {
  // Computer Name
  name: 'albums',
  // visible title
  title: 'Albums',
  type: 'document',
  icon: () => `💿`,
  fields: [
    {
      name: 'name',
      title: 'Album name',
      type: 'string',
      description: 'What is the name of the album?',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the album',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'itunesUrl',
      title: 'iTunes URL',
      type: 'url'
    },
    {
      name: 'amazonUrl',
      title: 'Amazon URL',
      type: 'url'
    },
    {
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url'
    },
  ],
}