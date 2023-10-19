const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 6868;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

// autobrands
// 5cFzQb9FzkikvOlV

// middle were
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${user}:${pass}@cluster0.yhpfxjc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const hondaCollections = client.db("brandsDB").collection("honda");
    const teslaCollections = client.db("brandsDB").collection("tesla");
    const bmwCollections = client.db("brandsDB").collection("bmw");
    const mercedesMenzCollections = client
      .db("brandsDB")
      .collection("mercedes");
    const fordCollections = client.db("brandsDB").collection("ford");
    const toyotaCollections = client.db("brandsDB").collection("toyota");

    // Add Product To Database
    app.post("/honda", async (req, res) => {
      const addData = req.body;
      const result = await hondaCollections.insertOne(addData);
      res.send(result);
    });
    app.post("/tesla", async (req, res) => {
      const addData = req.body;
      const result = await teslaCollections.insertOne(addData);
      res.send(result);
    });
    app.post("/bmw", async (req, res) => {
      const addData = req.body;
      const result = await bmwCollections.insertOne(addData);
      res.send(result);
    });
    app.post("/mercedes", async (req, res) => {
      const addData = req.body;
      const result = await mercedesMenzCollections.insertOne(addData);
      res.send(result);
    });
    app.post("/ford", async (req, res) => {
      const addData = req.body;
      const result = await fordCollections.insertOne(addData);
      res.send(result);
    });
    app.post("/toyota", async (req, res) => {
      const addData = req.body;
      const result = await toyotaCollections.insertOne(addData);
      res.send(result);
    });
    // Get Product to client side
    app.get("/honda", async (req, res) => {
      const filter = hondaCollections.find();
      const result = await filter.toArray();
      res.send(result);
    });
    app.get("/bmw", async (req, res) => {
      const filter = bmwCollections.find();
      const result = await filter.toArray();
      res.send(result);
    });
    app.get("/tesla", async (req, res) => {
      const filter = teslaCollections.find();
      const result = await filter.toArray();
      res.send(result);
    });
    app.get("/mercedes", async (req, res) => {
      const filter = mercedesMenzCollections.find();
      const result = await filter.toArray();
      res.send(result);
    });
    app.get("/ford", async (req, res) => {
      const filter = fordCollections.find();
      const result = await filter.toArray();
      res.send(result);
    });
    app.get("/toyota", async (req, res) => {
      const filter = toyotaCollections.find();
      const result = await filter.toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Brand Server Is Running......");
});

app.listen(port, () => {
  console.log(`Server Is Running On localhost:${port}`);
});
