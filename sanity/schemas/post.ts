import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Artikel Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Tanggal Publikasi",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Konten (Markdown)",
      type: "text",
      rows: 20,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Gambar Utama",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "mainImage",
    },
  },
});
