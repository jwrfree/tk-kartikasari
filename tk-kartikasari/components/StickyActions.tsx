'use client'
import site from '@/data/site.json'
import { waLink } from '@/lib/utils'

export default function StickyActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white/90 backdrop-blur border-t border-border">
      <div className="container py-3 flex gap-3">
        <a href={waLink('Halo Bu Mintarsih, saya ingin info PPDB TK Kartikasari.')} className="btn btn-primary flex-1">Chat via WhatsApp</a>
        <a href={site.mapsUrl} target="_blank" className="btn flex-1 border border-border">Petunjuk Arah</a>
      </div>
    </div>
  )
}
