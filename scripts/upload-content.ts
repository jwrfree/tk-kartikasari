
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import 'dotenv/config'; // Make sure to install dotenv: npm install dotenv

// Import your content data
import { 
    homeHeroDescription, 
    homeStats, 
    homeHighlights, 
    homePrograms, 
    homeJourney, 
    homeFaqs, 
    homeCredentials, 
    homeCurriculumPillars,
    homeTimeline 
} from '../content/home';
// Correctly import the legal content
import { kebijakanPrivasi, syaratDanKetentuan, disklaimer } from '../content/legal';

// Check for environment variables
if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) {
  throw new Error("Firebase environment variables are not set. Please check your .env.local file.");
}

// Construct the service account object from environment variables
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // Replace escaped newlines in the private key
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

// Initialize Firebase Admin SDK
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function uploadContent() {
  console.log('Starting content upload to Firestore...');

  try {
    const batch = db.batch();

    // 1. Home Page Content
    const homeRef = db.collection('pages').doc('home');
    batch.set(homeRef, {
        heroDescription: homeHeroDescription,
        stats: homeStats,
        highlights: homeHighlights,
        programs: homePrograms,
        journey: homeJourney,
        faqs: homeFaqs,
        credentials: homeCredentials,
        curriculumPillars: homeCurriculumPillars,
        timeline: homeTimeline
    });
    console.log('Prepared home page content for batch write.');

    // 2. Legal Page Content (with corrected structure)
    const legalRef = db.collection('pages').doc('legal');
    batch.set(legalRef, {
        privacyPolicy: kebijakanPrivasi,
        termsAndConditions: syaratDanKetentuan,
        disclaimer: disklaimer
    });
    console.log('Prepared legal page content for batch write.');

    // Commit the batch
    await batch.commit();
    console.log('✅ Successfully uploaded all content to Firestore!');

  } catch (error) {
    console.error('❌ Error uploading content to Firestore:', error);
    process.exit(1); // Exit with an error code
  }
}

uploadContent();
