"use client";

import { FormEvent, useState } from "react";
import { waLink } from "@/lib/utils";

type FormState = {
  childName: string;
  birthDate: string;
  parentName: string;
  contact: string;
  notes: string;
};

const initialState: FormState = {
  childName: "",
  birthDate: "",
  parentName: "",
  contact: "",
  notes: "",
};

export default function PpdbForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Halo Bu Mintarsih, saya ingin mendaftarkan anak ke TK Kartikasari.",
      `Nama anak: ${form.childName || "-"}`,
      `Tanggal lahir: ${form.birthDate || "-"}`,
      `Orang tua/wali: ${form.parentName || "-"}`,
      `Kontak yang bisa dihubungi: ${form.contact || "-"}`,
      form.notes ? `Catatan tambahan: ${form.notes}` : undefined,
    ]
      .filter(Boolean)
      .join("\n");

    const url = waLink(message);
    window.open(url, "_blank", "noopener");
    setForm(initialState);
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-text">Nama Anak</span>
          <input
            type="text"
            value={form.childName}
            onChange={(event) => handleChange("childName", event.target.value)}
            className="input"
            placeholder="Contoh: Zahra Aulia"
            required
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-text">Tanggal Lahir</span>
          <input
            type="date"
            value={form.birthDate}
            onChange={(event) => handleChange("birthDate", event.target.value)}
            className="input"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm">
          <span className="font-medium text-text">Nama Orang Tua/Wali</span>
          <input
            type="text"
            value={form.parentName}
            onChange={(event) => handleChange("parentName", event.target.value)}
            className="input"
            placeholder="Contoh: Bapak/Ibu"
            required
          />
        </label>
        <label className="space-y-1 text-sm">
          <span className="font-medium text-text">Kontak Aktif</span>
          <input
            type="tel"
            value={form.contact}
            onChange={(event) => handleChange("contact", event.target.value)}
            className="input"
            placeholder="No. WhatsApp atau telepon"
            required
          />
        </label>
      </div>
      <label className="space-y-1 text-sm">
        <span className="font-medium text-text">Catatan Tambahan</span>
        <textarea
          value={form.notes}
          onChange={(event) => handleChange("notes", event.target.value)}
          className="input min-h-[120px]"
          placeholder="Riwayat kesehatan, kebiasaan anak, atau pertanyaan untuk guru"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Kirim via WhatsApp
        </button>
        {submitted && (
          <p className="text-sm text-secondary">
            Terima kasih! WhatsApp baru akan terbuka di tab baru untuk melanjutkan percakapan dengan sekolah.
          </p>
        )}
      </div>
    </form>
  );
}
