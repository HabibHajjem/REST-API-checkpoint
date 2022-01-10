const express = require('express');
const connectDB = require('./Config/connect');
const router = require('./Routes/ContactRoute');
const app = express();

app.use(express.json());
app.use('/api/contacts', router);

connectDB();




const PORT = 8080;
app.listen(PORT,console.log(`Server is running on port ${PORT}`));