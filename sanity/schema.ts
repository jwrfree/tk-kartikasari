import { type SchemaTypeDefinition } from 'sanity'

// Impor semua skema yang kita miliki
import { news } from './schemas/news'
import { virtualTour, facility } from './schemas/facilities'
import author from './schemas/author'
import { siteContent } from './schemas/siteContent'
import { post } from './schemas/post'

// Definisikan tipe block content
const blockContent = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image',
      options: { hotspot: true }
    }
  ]
};

// Gabungkan semua skema menjadi satu
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [news, virtualTour, facility, author, post, siteContent, blockContent],
}
