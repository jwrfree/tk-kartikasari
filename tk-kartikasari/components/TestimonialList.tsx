'use client'
import data from '@/data/testimonials.json'
import { motion } from 'framer-motion'

export default function TestimonialList() {
  return (
    <section className="container mt-8">
      <div className="card p-4">
        <h2 className="text-xl font-semibold">Apa Kata Orang Tua</h2>
        <ul className="mt-3 grid gap-4 sm:grid-cols-2">
          {data.map((t) => (
            <motion.li key={t.id} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="p-4 rounded-xl border border-border">
              <blockquote className="italic text-text-muted">“{t.quote}”</blockquote>
              <p className="mt-1 font-medium">– {t.author}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
