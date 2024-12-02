const express = require('express');
const config = require('./config/config');
const app = express();
const cors = require('cors')
require('dotenv').config();
const dbConn = require('./config/dbconfig');
dbConn()

app.use(express.json());

const allRoutes = require('./routes');
const corsOptions = {
    origin: '*',
    credentials: true,
}
app.use(cors(corsOptions))

app.use('/', allRoutes)

app.post('/ping', (req, res)=>{
    res.send('pong');
})

const port = config.PORT || 4747;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})