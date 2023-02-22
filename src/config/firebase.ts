import { initializeApp } from 'firebase/app'
import { getAnalytics, setAnalyticsCollectionEnabled, logEvent } from 'firebase/analytics'
import { getAuth, signInWithEmailAndPassword, signOut, type UserCredential } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

if (process.env.NODE_ENV === 'development') {
  setAnalyticsCollectionEnabled(analytics, false)
}

export const authSignIn = async (email: string, password: string): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const authSignOut = async (): Promise<void> => {
  await signOut(auth)
}

export const analyticsLogEvent = (eventName: string, eventParams: Record<string, any> | undefined = undefined): void => {
  logEvent(analytics, eventName, eventParams)
}
