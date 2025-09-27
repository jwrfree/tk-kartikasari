import { defineField, defineType } from 'sanity';

export const virtualTour = defineType({
  name: 'virtualTour',
  title: 'Virtual Tour',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
    }),
    defineField({
        name: 'videoUrl',
        title: 'URL Video Tour 360',
        type: 'url', 
      }),
  ],
});

export const facility = defineType({
    name: 'facility',
    title: 'Fasilitas Sekolah',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Nama Fasilitas',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'description',
        title: 'Deskripsi',
        type: 'text',
        rows: 3,
      }),
      defineField({
        name: 'icon',
        title: 'Ikon',
        type: 'string',
        description: 'Nama ikon dari React Bootstrap Icons (e.g., PencilSquare, PuzzleFill)'
      }),
      defineField({
        name: 'features',
        title: 'Fitur Unggulan',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'image',
        title: 'Gambar Fasilitas',
        type: 'image',
        options: {
          hotspot: true, // Memungkinkan cropping gambar yang lebih baik
        },
      }),
    ],
    preview: {
        select: {
          title: 'name',
          media: 'image',
        },
        prepare({ title, media }) {
            return {
              title,
              media,
            };
          },
      },  
  });
  