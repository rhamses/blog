const description = 'Artigos e Tutoriais do mundo do desenvolvimento'
const type = 'website'
const url = 'https://blog.rhams.es'
const title = 'Rhamses Blog'
const mainImage =
  'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=630&fit=crop'
const creator = '@rhamses'
const card = 'summary_large_image'

export default (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: (meta && meta.type) || type,
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: (meta && meta.url) || url,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || url,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: (meta && meta.creator) || creator,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: (meta && meta.card) || card,
    },
  ]
}
