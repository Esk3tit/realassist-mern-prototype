import app from './server';
import mongodb from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 5000;

MongoClient.connect(process.env.MONGODB_URI!).catch(err => {
  console.error(err.stack);
  process.exit(1);
}).then(async client => {
  app.listen(port, () => {
    console.log(`⚡️[server]: Listening on port ${port}`);
  });
});