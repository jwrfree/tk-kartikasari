export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Judul', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Tanggal Terbit', type: 'datetime' },
    {
      name: 'author',
      title: 'Penulis',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'body',
      title: 'Isi',
      type: 'blockContent'
    }
  ]
}