
import { initializeApp, getApps, getApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import type { Auth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import type { FirebaseStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function hasValidConfig(): boolean {
  return Object.values(firebaseConfig).every((value) => typeof value === "string" && value.length > 0);
}

let firebaseApp: FirebaseApp | null = null;
let firestoreInstance: Firestore | null = null;
let authInstance: Auth | null = null;
let storageInstance: FirebaseStorage | null = null;

export function isFirebaseConfigured(): boolean {
  return hasValidConfig();
}

export function getFirebaseApp(): FirebaseApp | null {
  if (!hasValidConfig()) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Firebase configuration is incomplete. Firebase services are disabled.");
    }
    return null;
  }

  if (firebaseApp) {
    return firebaseApp;
  }

  firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return firebaseApp;
}

export function getFirestoreDb(): Firestore | null {
  if (firestoreInstance) {
    return firestoreInstance;
  }

  const app = getFirebaseApp();
  if (!app) {
    return null;
  }

  firestoreInstance = getFirestore(app);
  return firestoreInstance;
}

export function getFirebaseAuth(): Auth | null {
  if (authInstance) {
    return authInstance;
  }

  const app = getFirebaseApp();
  if (!app) {
    return null;
  }

  authInstance = getAuth(app);
  return authInstance;
}

export function getFirebaseStorage(): FirebaseStorage | null {
  if (storageInstance) {
    return storageInstance;
  }

  const app = getFirebaseApp();
  if (!app) {
    return null;
  }

  storageInstance = getStorage(app);
  return storageInstance;
}
