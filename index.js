const express = require('express')
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
require("dotenv").config();
// =========== middleware =======//
app.use(express.json());
app.use(cors());




const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@all-crud.h4nnk.mongodb.net/?retryWrites=true&w=majority&appName=All-Crud`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Server successfully connected to MongoDB!");

    const userCollection= client.db('userDB').collection('allUsers');
    
// ==============  Get Users =========//
app.get('/users',async(req,res)=>{
  const users= userCollection.find();
  const result = await users.toArray();
  res.send(result)
})

// ========= post api ============//
app.post('/users', async(req,res)=>{
  const user = req.body;
  const result = await userCollection.insertOne(user)
  res.send(result)
})



  } finally {
    
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Connected!!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})