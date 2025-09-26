'use client'

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'react-bootstrap-icons';

const STEPS = [
  { id: '01', name: 'Data Anak', fields: ['fullName', 'nickname', 'birthDate', 'gender'] },
  { id: '02', name: 'Data Orang Tua', fields: ['parentName', 'phone', 'address'] },
  { id: '03', name: 'Konfirmasi', fields: [] },
];

type FormData = {
  fullName: string;
  nickname: string;
  birthDate: string;
  gender: string;
  parentName: string;
  phone: string;
  address: string;
  confirmation: boolean;
};

type FormErrors = { [key in keyof FormData]?: string };

export default function PpdbFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    nickname: '',
    birthDate: '',
    gender: '',
    parentName: '',
    phone: '',
    address: '',
    confirmation: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldName = name as keyof FormData;

    setFormData(prev => ({
      ...prev,
      [fieldName]: type === 'checkbox' ? checked : value,
    }));

    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const validateStep = () => {
    const currentFields = STEPS[currentStep].fields as (keyof FormData)[];
    const newErrors: FormErrors = {};
    let isValid = true;

    for (const field of currentFields) {
      if (!formData[field]) {
        newErrors[field] = 'Wajib diisi';
        isValid = false;
      }
    }
    
    if (currentStep === 2 && !formData.confirmation) {
        newErrors.confirmation = 'Anda harus menyetujui pernyataan ini.';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/ppdb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal mengirim data. Silakan coba lagi.');
      }

      setCurrentStep(STEPS.length); // Go to success state
    } catch (error: any) {
      setSubmitError(error.message || 'Terjadi kesalahan yang tidak diketahui.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (currentStep === STEPS.length) {
    return <SuccessMessage />;
  }

  return (
    <div className="bg-surfaceAlt">
      <div className="content-container py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-3xl font-bold tracking-tight text-text sm:text-4xl">Formulir Pendaftaran</h1>
          <p className="mt-2 text-center text-lg text-text-muted">
            Lengkapi data berikut untuk mendaftarkan putra/putri Anda.
          </p>

          <div className="mt-10">
            <nav aria-label="Progress">
              <ol className="flex items-center">
                {STEPS.map((step, stepIdx) => (
                  <li key={step.name} className={`relative ${stepIdx !== STEPS.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                    {stepIdx < currentStep ? (
                      <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="h-0.5 w-full bg-primary" />
                        </div>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(stepIdx)}
                          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/80"
                          aria-label={`Kembali ke langkah ${stepIdx + 1}: ${step.name}`}
                        >
                          <CheckCircle className="h-5 w-5 text-white" />
                        </button>
                      </>
                    ) : stepIdx === currentStep ? (
                      <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="h-0.5 w-full bg-border" />
                        </div>
                        <div
                          className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-surface"
                          aria-current="step"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                           <span className="sr-only">Langkah {step.id} dari {STEPS.length}, {step.name}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="h-0.5 w-full bg-border" />
                        </div>
                        <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-surface transition-colors hover:border-text-muted">
                           <span className="sr-only">Langkah {step.id} dari {STEPS.length}, {step.name}</span>
                           <span className="h-2.5 w-2.5 rounded-full bg-transparent transition-colors group-hover:bg-gray-300" />
                        </div>
                      </>
                    )}
                     <span className="hidden sm:block absolute top-10 -left-4 text-sm font-medium text-text">{step.name}</span>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <form className="mt-12 space-y-6" onSubmit={handleSubmit} noValidate>
            {currentStep === 0 && <Step1 formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 1 && <Step2 formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 2 && <Step3 formData={formData} handleChange={handleChange} errors={errors} />}

            {submitError && (
              <div role="alert" className="rounded-md bg-red-50 p-4">
                <p className="text-sm font-medium text-red-700">{submitError}</p>
              </div>
            )}

            <div className={`flex ${currentStep > 0 ? 'justify-between' : 'justify-end'} pt-6`}>
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text-muted transition-colors hover:bg-surface disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Kembali
                </button>
              )}
              {currentStep < STEPS.length - 1 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Lanjut
                  <ArrowRight className="h-5 w-5" />
                </button>
              )}
              {currentStep === STEPS.length - 1 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
                  {!isSubmitting && <CheckCircle className="h-5 w-5" />}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


type StepProps = {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  errors: FormErrors;
};

const Step1 = ({ formData, handleChange, errors }: StepProps) => (
  <fieldset className="space-y-6">
    <legend className="text-xl font-semibold text-text">Data Calon Peserta Didik</legend>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="fullName" className="form-label">Nama Lengkap</label>
        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required aria-describedby="fullName-error" className="input mt-1" />
        {errors.fullName && <p id="fullName-error" className="form-error">{errors.fullName}</p>}
      </div>
      <div>
        <label htmlFor="nickname" className="form-label">Nama Panggilan</label>
        <input type="text" name="nickname" id="nickname" value={formData.nickname} onChange={handleChange} required aria-describedby="nickname-error" className="input mt-1" />
        {errors.nickname && <p id="nickname-error" className="form-error">{errors.nickname}</p>}
      </div>
      <div>
        <label htmlFor="birthDate" className="form-label">Tanggal Lahir</label>
        <input type="date" name="birthDate" id="birthDate" value={formData.birthDate} onChange={handleChange} required aria-describedby="birthDate-error" className="input mt-1" />
        {errors.birthDate && <p id="birthDate-error" className="form-error">{errors.birthDate}</p>}
      </div>
      <div>
        <label htmlFor="gender" className="form-label">Jenis Kelamin</label>
        <select name="gender" id="gender" value={formData.gender} onChange={handleChange} required aria-describedby="gender-error" className="input mt-1">
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        {errors.gender && <p id="gender-error" className="form-error">{errors.gender}</p>}
      </div>
    </div>
  </fieldset>
);

const Step2 = ({ formData, handleChange, errors }: StepProps) => (
  <fieldset className="space-y-6">
     <legend className="text-xl font-semibold text-text">Data Orang Tua / Wali</legend>
    <div>
      <label htmlFor="parentName" className="form-label">Nama Orang Tua / Wali</label>
      <input type="text" name="parentName" id="parentName" value={formData.parentName} onChange={handleChange} required aria-describedby="parentName-error" className="input mt-1" />
      {errors.parentName && <p id="parentName-error" className="form-error">{errors.parentName}</p>}
    </div>
    <div>
      <label htmlFor="phone" className="form-label">Nomor Telepon (WhatsApp)</label>
      <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required aria-describedby="phone-error" className="input mt-1" />
      {errors.phone && <p id="phone-error" className="form-error">{errors.phone}</p>}
    </div>
    <div>
      <label htmlFor="address" className="form-label">Alamat Lengkap</label>
      <textarea name="address" id="address" value={formData.address} onChange={handleChange} rows={3} required aria-describedby="address-error" className="input mt-1" />
      {errors.address && <p id="address-error" className="form-error">{errors.address}</p>}
    </div>
  </fieldset>
);

const Step3 = ({ formData, handleChange, errors }: StepProps) => (
  <fieldset className="space-y-6">
     <legend className="text-xl font-semibold text-text">Konfirmasi Data</legend>
     <div className="space-y-4 rounded-lg border border-border bg-surface p-6">
        <div>
            <h3 className="text-lg font-medium text-text">Data Anak</h3>
            <dl className="mt-2 divide-y divide-border">
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="form-label-read-only">Nama Lengkap</dt>
                    <dd className="form-data-read-only sm:col-span-2">{formData.fullName || '-'}</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="form-label-read-only">Tanggal Lahir</dt>
                    <dd className="form-data-read-only sm:col-span-2">{formData.birthDate || '-'}</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="form-label-read-only">Jenis Kelamin</dt>
                    <dd className="form-data-read-only sm:col-span-2">{formData.gender || '-'}</dd>
                </div>
            </dl>
        </div>
         <div className="pt-4">
             <h3 className="text-lg font-medium text-text">Data Orang Tua</h3>
             <dl className="mt-2 divide-y divide-border">
                 <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="form-label-read-only">Nama Orang Tua</dt>
                     <dd className="form-data-read-only sm:col-span-2">{formData.parentName || '-'}</dd>
                 </div>
                 <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="form-label-read-only">Nomor Telepon</dt>
                     <dd className="form-data-read-only sm:col-span-2">{formData.phone || '-'}</dd>
                 </div>
                 <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="form-label-read-only">Alamat</dt>
                     <dd className="form-data-read-only sm:col-span-2">{formData.address || '-'}</dd>
                 </div>
             </dl>
         </div>
     </div>
      <div className="relative flex items-start pt-4">
          <div className="flex h-6 items-center">
              <input
                  id="confirmation"
                  name="confirmation"
                  type="checkbox"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  aria-describedby="confirmation-description confirmation-error"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
              />
          </div>
          <div className="ml-3 text-sm leading-6">
              <label htmlFor="confirmation" className="font-medium text-text">Konfirmasi</label>
              <p id="confirmation-description" className="text-text-muted">
                  Saya menyatakan bahwa data yang saya masukkan adalah benar dan dapat dipertanggungjawabkan.
              </p>
          </div>
      </div>
      {errors.confirmation && <p id="confirmation-error" className="form-error mt-1 ml-9">{errors.confirmation}</p>}
  </fieldset>
);

const SuccessMessage = () => (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center" role="alert">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">Pendaftaran Berhasil!</h1>
        <p className="mt-2 text-lg text-text-muted">
            Terima kasih telah mendaftar di TK Kartikasari. Kami akan segera menghubungi Anda melalui WhatsApp untuk langkah selanjutnya.
        </p>
        <div className="mt-6">
            <Link href="/" className="btn-primary">
                Kembali ke Beranda
            </Link>
        </div>
    </div>
);
