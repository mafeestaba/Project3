const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');

// Set EJS as the view engine for your Express application
app.set('view engine', 'ejs');

// Optional: Serve static files - useful if you have css, images, or JavaScript files
app.use(express.static('public'));

// Your existing API endpoint for serving map data
app.get('/data', async (req, res) => {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('database');
        const collection = database.collection('cap_rates');

        const documents = await collection.find({}).toArray();
        
        const locations = documents.map(doc => {
            return { lat: doc.latitude, lng: doc.longitude, label: doc.label };
        });

        res.json(locations);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching data");
    } finally {
        await client.close();
    }
});

// Route for rendering your EJS view
app.get('/', (req, res) => {
    res.render('index'); // This will look for `index.ejs` inside the `views` folder
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
