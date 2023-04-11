const express = require ('express') ;
const port = 4000 (process.env.PORT || 5000 )
const app = express();
const dotenv = require ('dotenv').config();
const {urlencoded} = require ('express') ;
const (connectDB) = require ('./config') ;
connectDB()
app.use('express.json')
app.use(express.urlencoded);
app.use(express.static('public'))
app.use('/api/goals',) = require ()
aoo.listen(port,( => {console.log(`sever
listening on port ${port}`
)}));


