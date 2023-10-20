const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 6868;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;


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
    // await client.connect();

    const hondaCollections = client.db("brandsDB").collection("honda");
    const teslaCollections = client.db("brandsDB").collection("tesla");
    const bmwCollections = client.db("brandsDB").collection("bmw");
    const mercedesMenzCollections = client
      .db("brandsDB")
      .collection("mercedes");
    const fordCollections = client.db("brandsDB").collection("ford");
    const toyotaCollections = client.db("brandsDB").collection("toyota");
    const mycartCollections = client.db("brandsDB").collection("mycart");

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
    // Get Data By Id

    app.get("/toyota/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await toyotaCollections.findOne(query);
      res.send(result);
    });
    app.get("/ford/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await fordCollections.findOne(query);
      res.send(result);
    });
    app.get("/mercedes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await mercedesMenzCollections.findOne(query);
      res.send(result);
    });
    app.get("/tesla/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await teslaCollections.findOne(query);
      res.send(result);
    });
    app.get("/bmw/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bmwCollections.findOne(query);
      res.send(result);
    });
    app.get("/honda/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await hondaCollections.findOne(query);
      res.send(result);
    });

    // update by id
    app.put("/bmw/:id", async (req, res) => {
      const id = req.params.id;
      const itemData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateItem = {
        $set: {
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          rating: itemData.rating,
          des: itemData.des,
          photo: itemData.photo,
        },
      };

      const result = await bmwCollections.updateOne(query, updateItem, options);
      res.send(result);
    });
    app.put("/tesla/:id", async (req, res) => {
      const id = req.params.id;
      const itemData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateItem = {
        $set: {
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          rating: itemData.rating,
          des: itemData.des,
          photo: itemData.photo,
        },
      };

      const result = await teslaCollections.updateOne(
        query,
        updateItem,
        options
      );
      res.send(result);
    });
    app.put("/mercedes/:id", async (req, res) => {
      const id = req.params.id;
      const itemData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateItem = {
        $set: {
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          rating: itemData.rating,
          des: itemData.des,
          photo: itemData.photo,
        },
      };

      const result = await mercedesMenzCollections.updateOne(
        query,
        updateItem,
        options
      );
      res.send(result);
    });
    app.put("/ford/:id", async (req, res) => {
      const id = req.params.id;
      const itemData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateItem = {
        $set: {
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          rating: itemData.rating,
          des: itemData.des,
          photo: itemData.photo,
        },
      };

      const result = await fordCollections.updateOne(
        query,
        updateItem,
        options
      );
      res.send(result);
    });
    app.put("/toyota/:id", async (req, res) => {
      const id = req.params.id;
      const itemData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateItem = {
        $set: {
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          rating: itemData.rating,
          des: itemData.des,
          photo: itemData.photo,
        },
      };

      const result = await toyotaCollections.updateOne(
        query,
        updateItem,
        options
      );
      res.send(result);
    });
    app.put("/honda/:id", async (req, res) => {
      const id = req.params.id;
      const itemData = req.body;
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateItem = {
        $set: {
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          rating: itemData.rating,
          des: itemData.des,
          photo: itemData.photo,
        },
      };

      const result = await hondaCollections.updateOne(
        query,
        updateItem,
        options
      );
      res.send(result);
    });

    //Post Add to cart
    app.post("/mycart", async (req, res) => {
      const addData = req.body;
      const result = await mycartCollections.insertOne(addData);
      res.send(result);
    });
// Get Add To cart
app.get("/mycart", async (req, res) => {
  const filter = mycartCollections.find();
  const result = await filter.toArray();
  res.send(result);
});

// Delete item From Add To Cart

app.delete("/mycart/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await mycartCollections.deleteOne(query);
  res.send(result);
});
    // Send a ping to confirm a successful connection
    await client.db("admin")
    .command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
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
