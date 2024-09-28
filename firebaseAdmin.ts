import { initializeApp, getApp, App, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceKey = require(`@/service_key.json`);

let app: App;

if (getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApp();
}

const adminDb = getFirestore(app);
const adminStorage = getStorage(app);

export {app as adminApp, adminDb, adminStorage };