// mongodb.ts

import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGO_URI;

let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Add Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    const client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  const client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
