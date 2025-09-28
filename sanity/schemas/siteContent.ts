import { defineArrayMember, defineField, defineType } from "sanity";

const stringListField = defineField({
  name: "points",
  title: "Poin",
  type: "array",
  of: [defineArrayMember({ type: "string" })],
});

export const siteContent = defineType({
  name: "siteContent",
  title: "Konten Situs",
  type: "document",
  fields: [
    defineField({
      name: "siteSettings",
      title: "Pengaturan Situs",
      type: "object",
      fields: [
        defineField({
          name: "schoolName",
          title: "Nama Sekolah",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "siteUrl",
          title: "URL Situs",
          type: "url",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "tagline",
          title: "Tagline",
          type: "string",
          description: "Singkatkan maksimal 80 karakter agar terbaca di header.",
          validation: (rule) => rule.required().max(80),
        }),
        defineField({
          name: "address",
          title: "Alamat",
          type: "text",
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "whatsapp",
          title: "Nomor WhatsApp",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "headmaster",
          title: "Kepala Sekolah",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "openingHours",
          title: "Jam Operasional",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "mapsUrl",
          title: "URL Google Maps",
          type: "url",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "logo",
          title: "Logo",
          type: "image",
          options: { hotspot: true },
        }),
        defineField({
          name: "logoUrl",
          title: "URL Logo (Cadangan)",
          type: "url",
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
        }),
        defineField({
          name: "socialLinks",
          title: "Tautan Sosial Media",
          type: "array",
          of: [
            defineArrayMember({
              name: "socialLink",
              title: "Tautan",
              type: "object",
              fields: [
                defineField({
                  name: "platform",
                  title: "Platform",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "url",
                  title: "URL",
                  type: "url",
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "ctaButtons",
      title: "Tombol CTA",
      type: "array",
      of: [
        defineArrayMember({
          name: "ctaButton",
          type: "object",
          fields: [
            defineField({
              name: "key",
              title: "Key",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "message",
              title: "Pesan",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "variant",
              title: "Varian",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                  { title: "Outline", value: "outline" },
                  { title: "Ghost", value: "ghost" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Nama Ikon",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "navigation",
      title: "Navigasi Utama",
      type: "array",
      of: [
        defineArrayMember({
          name: "navItem",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "Tautan",
              type: "string",
            }),
            defineField({
              name: "children",
              title: "Submenu",
              type: "array",
              of: [
                defineArrayMember({
                  name: "navChild",
                  type: "object",
                  fields: [
                    defineField({
                      name: "label",
                      title: "Label",
                      type: "string",
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: "href",
                      title: "Tautan",
                      type: "string",
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: "description",
                      title: "Deskripsi",
                      type: "text",
                      rows: 2,
                    }),
                  ],
                }),
              ],
            }),
          ],
          validation: (rule) =>
            rule.custom((value) => {
              if (!value) return true;
              const navValue = value as { href?: string; children?: unknown };
              const hasHref = typeof navValue.href === "string" && navValue.href.length > 0;
              const hasChildren = Array.isArray(navValue.children) && navValue.children.length > 0;

              if (!hasHref && !hasChildren) {
                return "Isi tautan atau tambahkan submenu.";
              }

              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: "home",
      title: "Beranda",
      type: "object",
      fields: [
        defineField({ name: "heroDescription", title: "Deskripsi Hero", type: "text", rows: 3 }),
        defineField({
          name: "stats",
          title: "Statistik",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "value", title: "Nilai", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
              ],
            }),
          ],
        }),
        defineField({
          name: "highlights",
          title: "Highlight",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "icon", title: "Ikon", type: "string" }),
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
              ],
            }),
          ],
        }),
        defineField({
          name: "programs",
          title: "Program Unggulan",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "name", title: "Nama", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "age", title: "Rentang Usia", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
                stringListField,
              ],
            }),
          ],
        }),
        defineField({
          name: "journey",
          title: "Perjalanan Anak",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "time", title: "Waktu", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
                defineField({ name: "icon", title: "Ikon", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "faqs",
          title: "FAQ",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "question", title: "Pertanyaan", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "answer", title: "Jawaban", type: "text", rows: 3 }),
              ],
            }),
          ],
        }),
        defineField({
          name: "credentials",
          title: "Pencapaian",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "value", title: "Nilai", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
              ],
            }),
          ],
        }),
        defineField({
          name: "curriculumPillars",
          title: "Pilar Kurikulum",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "subtitle", title: "Subjudul", type: "string" }),
                stringListField,
              ],
            }),
          ],
        }),
        defineField({
          name: "timeline",
          title: "Linimasa",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "year", title: "Tahun", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "Tentang",
      type: "object",
      fields: [
        defineField({ name: "mission", title: "Misi", type: "array", of: [defineArrayMember({ type: "string" })] }),
        defineField({
          name: "officialProfile",
          title: "Profil Resmi",
          type: "object",
          fields: [
            defineField({ name: "npsn", title: "NPSN", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "establishmentDate", title: "Tanggal Berdiri", type: "date" }),
            defineField({ name: "establishmentYear", title: "Tahun Berdiri", type: "number" }),
            defineField({ name: "yearsOperating", title: "Tahun Beroperasi", type: "number" }),
            defineField({ name: "operationalLicense", title: "Izin Operasional", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "landArea", title: "Luas Lahan", type: "string" }),
            defineField({ name: "curriculum", title: "Kurikulum", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "email", title: "Email", type: "string" }),
            defineField({ name: "locationArea", title: "Wilayah", type: "string" }),
          ],
        }),
        defineField({
          name: "milestones",
          title: "Tonggak Sejarah",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "year", title: "Tahun", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "teachers",
      title: "Guru",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Nama", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "position", title: "Jabatan", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
            defineField({ name: "image", title: "Foto", type: "image", options: { hotspot: true } }),
          ],
        }),
      ],
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "object",
      fields: [
        defineField({
          name: "classes",
          title: "Kelas",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "name", title: "Nama", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "age", title: "Usia", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
                stringListField,
              ],
            }),
          ],
        }),
        defineField({
          name: "learningMethods",
          title: "Metode Belajar",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
              ],
            }),
          ],
        }),
        defineField({
          name: "weeklySchedule",
          title: "Jadwal Mingguan",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "day", title: "Hari", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "theme", title: "Tema", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "highlight", title: "Highlight", type: "string", validation: (rule) => rule.required() }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "ppdb",
      title: "PPDB",
      type: "object",
      fields: [
        defineField({
          name: "faqs",
          title: "FAQ",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "question", title: "Pertanyaan", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "answer", title: "Jawaban", type: "text", rows: 3 }),
              ],
            }),
          ],
        }),
        defineField({
          name: "requirements",
          title: "Persyaratan",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
              ],
            }),
          ],
        }),
        defineField({
          name: "timeline",
          title: "Timeline",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "date", title: "Tanggal", type: "date", validation: (rule) => rule.required() }),
                defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
              ],
            }),
          ],
        }),
        defineField({ name: "deadline", title: "Batas Waktu", type: "datetime" }),
      ],
    }),
    defineField({
      name: "biaya",
      title: "Biaya",
      type: "object",
      fields: [
        defineField({
          name: "costStructure",
          title: "Struktur Biaya",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "id", title: "ID", type: "string" }),
                defineField({ name: "name", title: "Nama Biaya", type: "string", validation: (rule) => rule.required() }),
                defineField({ name: "amount", title: "Jumlah", type: "number", validation: (rule) => rule.required() }),
                defineField({ name: "category", title: "Kategori", type: "string" }),
                defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
                defineField({ name: "includedInCalculator", title: "Tampilkan di Simulasi", type: "boolean" }),
                defineField({ name: "type", title: "Jenis Pembayaran", type: "string" }),
              ],
            }),
          ],
        }),
        defineField({
          name: "installmentProgram",
          title: "Program Cicilan",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string" }),
            defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
            defineField({ name: "options", title: "Opsi", type: "array", of: [defineArrayMember({ type: "string" })] }),
            defineField({ name: "note", title: "Catatan", type: "text", rows: 2 }),
          ],
        }),
        defineField({
          name: "refundPolicy",
          title: "Kebijakan Pengembalian",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string" }),
            defineField({
              name: "points",
              title: "Poin Kebijakan",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Judul", type: "string" }),
                    defineField({ name: "content", title: "Konten", type: "text", rows: 3 }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "legal",
      title: "Halaman Legal",
      type: "object",
      fields: [
        defineField({
          name: "privacyPolicy",
          title: "Kebijakan Privasi",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "effectiveDate", title: "Tanggal Berlaku", type: "date", validation: (rule) => rule.required() }),
            defineField({ name: "body", title: "Konten (HTML)", type: "text", rows: 20, validation: (rule) => rule.required() }),
          ],
        }),
        defineField({
          name: "terms",
          title: "Syarat dan Ketentuan",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "effectiveDate", title: "Tanggal Berlaku", type: "date", validation: (rule) => rule.required() }),
            defineField({ name: "body", title: "Konten (HTML)", type: "text", rows: 20, validation: (rule) => rule.required() }),
          ],
        }),
        defineField({
          name: "disclaimer",
          title: "Disklaimer",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "effectiveDate", title: "Tanggal Berlaku", type: "date", validation: (rule) => rule.required() }),
            defineField({ name: "body", title: "Konten (HTML)", type: "text", rows: 20, validation: (rule) => rule.required() }),
          ],
        }),
      ],
    }),
    defineField({
      name: "agenda",
      title: "Agenda",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", title: "ID", type: "string" }),
            defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "date", title: "Tanggal", type: "date", validation: (rule) => rule.required() }),
            defineField({ name: "time", title: "Waktu", type: "string" }),
            defineField({ name: "location", title: "Lokasi", type: "string" }),
            defineField({ name: "description", title: "Deskripsi", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Galeri",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", title: "ID", type: "string" }),
            defineField({ name: "title", title: "Judul", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Deskripsi", type: "text", rows: 2 }),
            defineField({ name: "category", title: "Kategori", type: "string" }),
            defineField({ name: "image", title: "Gambar", type: "image", options: { hotspot: true } }),
            defineField({ name: "imageUrl", title: "URL Gambar Cadangan", type: "url" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "testimonials",
      title: "Testimoni",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", title: "ID", type: "string" }),
            defineField({ name: "author", title: "Nama", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "quote", title: "Testimoni", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({ name: "rating", title: "Rating", type: "number" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteSettings.schoolName",
      subtitle: "siteSettings.siteUrl",
    },
  },
});
