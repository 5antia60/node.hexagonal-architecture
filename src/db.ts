import { Db, MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let db: Db;

export async function run(): Promise<void> {
  try {
    await client.connect();
    db = await client.db('MainCluster');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
}

export function getDb(): Db {
  if (!db) throw new Error('Banco de dados não conectado!');

  return db;
}

module.exports = { run, getDb };
