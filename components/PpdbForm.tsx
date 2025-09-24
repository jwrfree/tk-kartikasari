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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage(null);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
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

    try {
      const newWindow = window.open(url, "_blank", "noopener");

      if (!newWindow) {
        throw new Error("Popup blocked");
      }

      setForm(initialState);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Tidak dapat membuka WhatsApp. Mohon izinkan pop-up pada browser Anda lalu coba lagi.",
      );
    }
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
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Membuka WhatsApp..." : "Kirim via WhatsApp"}
        </button>
        <div className="space-y-2" aria-live="polite">
          {status === "loading" && (
            <p className="text-sm text-text">Sedang membuka WhatsApp, mohon tunggu...</p>
          )}
          {status === "success" && (
            <p className="text-sm text-secondary">
              Terima kasih! WhatsApp baru akan terbuka di tab baru untuk melanjutkan percakapan dengan sekolah.
            </p>
          )}
        </div>
      </div>
      {status === "error" && (
        <div
          className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
}
