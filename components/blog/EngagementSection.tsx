'use client';

import { useEffect, useMemo, useState, useId } from 'react';
import { Timestamp, addDoc, collection, doc, increment, onSnapshot, query, serverTimestamp, setDoc, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Comment {
  id: string;
  name: string;
  message: string;
  createdAt?: Timestamp | null;
}

interface EngagementSectionProps {
  slug: string;
}

function formatDate(timestamp?: Timestamp | null) {
  if (!timestamp) return '';
  const date = timestamp.toDate();
  return date.toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function EngagementSection({ slug }: EngagementSectionProps) {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const nameFieldId = useId();
  const messageFieldId = useId();

  const likeDocRef = useMemo(() => doc(db, 'blogLikes', slug), [slug]);
  const commentsQuery = useMemo(() => query(collection(db, 'blogComments'), where('slug', '==', slug)), [slug]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedPreference = localStorage.getItem(`blog-liked-${slug}`);
    setLiked(storedPreference === 'true');
  }, [slug]);

  useEffect(() => {
    if (!feedback) return;
    const timeout = setTimeout(() => setFeedback(null), 5000);
    return () => clearTimeout(timeout);
  }, [feedback]);

  useEffect(() => {
    const unsubscribeLikes = onSnapshot(likeDocRef, (snapshot) => {
      setLikeCount((snapshot.data()?.count as number) || 0);
    });

    return () => unsubscribeLikes();
  }, [likeDocRef]);

  useEffect(() => {
    const unsubscribeComments = onSnapshot(commentsQuery, (snapshot) => {
      const commentList = snapshot.docs
        .map((docSnapshot) => {
          const data = docSnapshot.data() as Omit<Comment, 'id'>;
          return {
            id: docSnapshot.id,
            name: data.name,
            message: data.message,
            createdAt: data.createdAt ?? null,
          };
        })
        .sort((a, b) => {
          const aTime = a.createdAt ? a.createdAt.toMillis() : 0;
          const bTime = b.createdAt ? b.createdAt.toMillis() : 0;
          return bTime - aTime;
        });

      setComments(commentList);
    });

    return () => unsubscribeComments();
  }, [commentsQuery]);

  const toggleLike = async () => {
    try {
      if (typeof window === 'undefined') {
        return;
      }
      if (liked) {
        if (likeCount > 0) {
          await setDoc(likeDocRef, { count: increment(-1) }, { merge: true });
        }
        localStorage.removeItem(`blog-liked-${slug}`);
        setLiked(false);
        setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));
      } else {
        await setDoc(likeDocRef, { count: increment(1) }, { merge: true });
        localStorage.setItem(`blog-liked-${slug}`, 'true');
        setLiked(true);
        setLikeCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error(error);
      setFeedback('Terjadi kesalahan saat memperbarui suka.');
    }
  };

  const handleSubmitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const trimmedName = name.trim();
      const trimmedMessage = message.trim();

      if (!trimmedName || !trimmedMessage) {
        throw new Error('Nama dan komentar wajib diisi.');
      }

      await addDoc(collection(db, 'blogComments'), {
        slug,
        name: trimmedName,
        message: trimmedMessage,
        createdAt: serverTimestamp(),
      });

      setName('');
      setMessage('');
      setFeedback('Komentar berhasil dikirim.');
    } catch (error: any) {
      console.error(error);
      setFeedback(error.message || 'Gagal mengirim komentar.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-12 rounded-2xl border border-primary/10 bg-primary/5 p-6 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-primary">Bagikan Apresiasi Anda</h2>
          <p className="text-sm text-text-muted">Berikan tanda suka atau tinggalkan komentar tentang kegiatan ini.</p>
        </div>
        <button
          onClick={toggleLike}
          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            liked
              ? 'border-primary bg-primary text-white hover:bg-primary/90'
              : 'border-primary text-primary hover:bg-primary/10'
          }`}
          type="button"
        >
          <span>{liked ? 'Terima kasih!' : 'Suka'}</span>
          <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-white px-2 text-primary shadow">
            {likeCount}
          </span>
        </button>
      </div>

      {feedback && <p className="mt-4 text-sm text-primary">{feedback}</p>}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Komentar Wali Murid</h3>
          {comments.length === 0 ? (
            <p className="text-sm text-text-muted">Belum ada komentar. Jadilah yang pertama memberikan dukungan!</p>
          ) : (
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="rounded-xl bg-white/70 p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-text">{comment.name}</span>
                    <span className="text-xs text-text-muted">{formatDate(comment.createdAt)}</span>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{comment.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-text">Tinggalkan Komentar</h3>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-text" htmlFor={nameFieldId}>
                Nama*
              </label>
              <input
                type="text"
                id={nameFieldId}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nama Anda"
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-text" htmlFor={messageFieldId}>
                Komentar*
              </label>
              <textarea
                value={message}
                id={messageFieldId}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Bagikan pengalaman atau dukungan Anda"
                className="min-h-[120px] w-full rounded-md border border-gray-300 p-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-primary/50"
            >
              {submitting ? 'Mengirim...' : 'Kirim Komentar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
