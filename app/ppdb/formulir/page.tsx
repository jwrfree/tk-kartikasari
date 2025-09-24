'use client'

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'react-bootstrap-icons';

const STEPS = [
  { id: '01', name: 'Data Anak', fields: ['fullName', 'nickname', 'birthDate', 'gender'] },
  { id: '02', name: 'Data Orang Tua', fields: ['parentName', 'phone', 'address'] },
  { id: '03', name: 'Konfirmasi', fields: [] },
];

export default function PpdbFormPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    nickname: '',
    birthDate: '',
    gender: '',
    parentName: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = () => {
    const currentFields = STEPS[currentStep].fields;
    const newErrors: Partial<typeof formData> = {};
    let isValid = true;

    for (const field of currentFields) {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field as keyof typeof formData] = 'Wajib diisi';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      // Submit form data
      console.log('Form submitted:', formData);
      alert('Pendaftaran berhasil! Terima kasih telah mendaftar.');
      setCurrentStep(STEPS.length); // Go to success state
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
              <ol role="list" className="flex items-center">
                {STEPS.map((step, stepIdx) => (
                  <li key={step.name} className={`relative ${stepIdx !== STEPS.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                    {stepIdx < currentStep ? (
                      <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="h-0.5 w-full bg-primary" />
                        </div>
                        <button
                          onClick={() => setCurrentStep(stepIdx)}
                          className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-primary/80"
                        >
                          <CheckCircle className="h-5 w-5 text-white" />
                        </button>
                      </>
                    ) : stepIdx === currentStep ? (
                      <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="h-0.5 w-full bg-gray-200" />
                        </div>
                        <div
                          className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-white"
                          aria-current="step"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="h-0.5 w-full bg-gray-200" />
                        </div>
                        <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                          <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                        </div>
                      </>
                    )}
                     <span className="hidden sm:block absolute top-10 -left-4 text-sm font-medium text-gray-900">{step.name}</span>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
            {currentStep === 0 && <Step1 formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 1 && <Step2 formData={formData} handleChange={handleChange} errors={errors} />}
            {currentStep === 2 && <Step3 formData={formData} />}

            <div className={`flex ${currentStep > 0 ? 'justify-between' : 'justify-end'} pt-6`}>
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-text-muted hover:bg-gray-100"
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
                <button type="submit" className="btn-primary inline-flex items-center gap-2">
                  Kirim Pendaftaran
                  <CheckCircle className="h-5 w-5" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


const Step1 = ({ formData, handleChange, errors }: { formData: any, handleChange: any, errors: any }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-text">Data Calon Peserta Didik</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className="input mt-1" />
        {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
      </div>
      <div>
        <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">Nama Panggilan</label>
        <input type="text" name="nickname" id="nickname" value={formData.nickname} onChange={handleChange} className="input mt-1" />
        {errors.nickname && <p className="mt-1 text-sm text-red-600">{errors.nickname}</p>}
      </div>
      <div>
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
        <input type="date" name="birthDate" id="birthDate" value={formData.birthDate} onChange={handleChange} className="input mt-1" />
        {errors.birthDate && <p className="mt-1 text-sm text-red-600">{errors.birthDate}</p>}
      </div>
      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
        <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className="input mt-1">
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
      </div>
    </div>
  </div>
);

const Step2 = ({ formData, handleChange, errors }: { formData: any, handleChange: any, errors: any }) => (
  <div className="space-y-6">
     <h2 className="text-xl font-semibold text-text">Data Orang Tua / Wali</h2>
    <div>
      <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Nama Orang Tua / Wali</label>
      <input type="text" name="parentName" id="parentName" value={formData.parentName} onChange={handleChange} className="input mt-1" />
      {errors.parentName && <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>}
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor Telepon (WhatsApp)</label>
      <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="input mt-1" />
      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
    </div>
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat Lengkap</label>
      <textarea name="address" id="address" value={formData.address} onChange={handleChange} rows={3} className="input mt-1" />
      {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
    </div>
  </div>
);

const Step3 = ({ formData }: { formData: any }) => (
  <div className="space-y-6">
     <h2 className="text-xl font-semibold text-text">Konfirmasi Data</h2>
     <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6">
        <div>
            <h3 className="text-lg font-medium text-gray-900">Data Anak</h3>
            <dl className="mt-2 divide-y divide-gray-200">
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Nama Lengkap</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formData.fullName}</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Tanggal Lahir</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formData.birthDate}</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Jenis Kelamin</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formData.gender}</dd>
                </div>
            </dl>
        </div>
         <div className="pt-4">
             <h3 className="text-lg font-medium text-gray-900">Data Orang Tua</h3>
             <dl className="mt-2 divide-y divide-gray-200">
                 <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="text-sm font-medium text-gray-500">Nama Orang Tua</dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formData.parentName}</dd>
                 </div>
                 <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="text-sm font-medium text-gray-500">Nomor Telepon</dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formData.phone}</dd>
                 </div>
                 <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                     <dt className="text-sm font-medium text-gray-500">Alamat</dt>
                     <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{formData.address}</dd>
                 </div>
             </dl>
         </div>
     </div>
      <div className="relative flex items-start pt-4">
          <div className="flex h-6 items-center">
              <input
                  id="confirmation"
                  aria-describedby="confirmation-description"
                  name="confirmation"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  required
              />
          </div>
          <div className="ml-3 text-sm leading-6">
              <label htmlFor="confirmation" className="font-medium text-gray-900">Konfirmasi</label>
              <p id="confirmation-description" className="text-gray-500">
                  Saya menyatakan bahwa data yang saya masukkan adalah benar dan dapat dipertanggungjawabkan.
              </p>
          </div>
      </div>
  </div>
);

const SuccessMessage = () => (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">Pendaftaran Berhasil!</h1>
        <p className="mt-2 text-lg text-text-muted">
            Terima kasih telah mendaftar di TK Kartikasari. Kami akan segera menghubungi Anda melalui WhatsApp untuk langkah selanjutnya.
        </p>
        <div className="mt-6">
            <a href="/" className="btn-primary">
                Kembali ke Beranda
            </a>
        </div>
    </div>
);

