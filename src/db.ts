import _ from '@google-cloud/firestore';

const db = new _.Firestore({
  projectId: 'life-dashboard-404917',
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  databaseId: 'food',
});
db.settings({ timestampsInSnapshots: true });
export default db;
