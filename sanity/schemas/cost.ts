import { defineField, defineType } from 'sanity';

export const costStructure = defineType({
  name: 'costStructure',
  title: 'Struktur Biaya',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Komponen',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'amount',
      title: 'Jumlah',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'includedInCalculator',
      title: 'Termasuk di Kalkulator',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: ['sekali bayar', 'bulanan', 'tahunan', 'opsional'],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'amount',
      category: 'category',
    },
    prepare({ title, subtitle, category }) {
      return {
        title,
        subtitle: `${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(subtitle)} - ${category}`,
      };
    },
  },
});

export const installmentProgram = defineType({
  name: 'installmentProgram',
  title: 'Program Cicilan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      initialValue: 'Kemudahan Pembayaran',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi',
      type: 'text',
    }),
    defineField({
      name: 'options',
      title: 'Opsi Pembayaran',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'note',
      title: 'Catatan',
      type: 'string',
    }),
  ],
});

export const refundPolicy = defineType({
  name: 'refundPolicy',
  title: 'Kebijakan Refund',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Kebijakan',
      type: 'string',
      initialValue: 'Kebijakan Transparansi & Refund',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'points',
      title: 'Poin-Poin Kebijakan',
      type: 'array',
      of: [
        defineType({
          name: 'policyPoint',
          title: 'Poin Kebijakan',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Judul Poin', type: 'string' }),
            defineField({ name: 'content', title: 'Isi Poin', type: 'text', rows: 3 }),
          ],
        }),
      ],
    }),
  ],
});
