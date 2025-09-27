
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

function initializeFirebaseAdmin() {
  if (getApps().length) {
    return getApps()[0];
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
    throw error;
  }
}

const adminApp = initializeFirebaseAdmin();
const adminDb = getFirestore(adminApp);
const adminAuth = getAuth(adminApp);

export { adminDb, adminAuth };
