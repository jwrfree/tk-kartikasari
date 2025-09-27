
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import type { App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import type { Auth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import type { Firestore } from 'firebase-admin/firestore';

function hasValidAdminConfig(): boolean {
  return Boolean(
    process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
  );
}

function initializeFirebaseAdmin(): App | null {
  if (getApps().length) {
    return getApps()[0];
  }

  if (!hasValidAdminConfig()) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Firebase Admin configuration is incomplete. Admin features are disabled.');
    }
    return null;
  }

  try {
    return initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
    return null;
  }
}

const adminApp = initializeFirebaseAdmin();
const adminDb: Firestore | null = adminApp ? getFirestore(adminApp) : null;
const adminAuth: Auth | null = adminApp ? getAuth(adminApp) : null;

export { adminDb, adminAuth };
export const isFirebaseAdminConfigured = () => Boolean(adminApp);
