const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('database'); // Replace 'yourDatabaseName' with your actual database name
        const collection = database.collection('cap_rates'); // Assuming 'home_values' is your collection name

        const documents = await collection.find({}).toArray(); // Fetches all documents in the collection
        console.log(documents); // Logs all documents to the console
    } finally {
        await client.close();
    }
}

run().catch(console.error);
