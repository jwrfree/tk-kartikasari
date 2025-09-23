'use client'
import { waLink } from '@/lib/utils'

type Props = { label?: string; message?: string }
export default function CTAButton({ label = 'Chat via WhatsApp', message = 'Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.' }: Props) {
  return (
    <a href={waLink(message)} className="btn btn-primary w-full sm:w-auto">
      {label}
    </a>
  )
}
