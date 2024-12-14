const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// =========== middleware =======//
app.use(express.json());
app.use(cors());


// ========= post api ============//
app.post('/users', async(req,res)=>{
    const user = req.body;
    console.log(user);
    res.send(user)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})