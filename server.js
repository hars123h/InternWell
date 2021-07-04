  
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()



const app = express();

// connect to DB
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION ERROR: ', err));

//import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
//app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(cors()); //allows all origins

// if ((process.env.NODE_ENV = 'development')) {
//     app.use(cors({ origin: `http://localhost:3000` }));
//   }
 



// Middlewares
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// if(process.env.NODE_ENV == "production") {
//     const path=require("path");
//     app.use(express.static(path.join(__dirname, 'client', 'build')));
//     app.get("*",(req, res)=> {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//     })
// }


// app.use(cors()); //allows all origins
// if (process.env.NODE_ENV === 'production') {
//     // // Exprees will serve up production assets
//     // app.use('/', express.static('/client/build'));
  
//     // // Express serve up index.html file if it doesn't recognize route
//     // const path = require('path');
//     // app.get('*', (req, res) => {
//     //   res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
//     // });




if (process.env.NODE_ENV === 'production') {
    const root = require('path').join(__dirname, 'client', 'build')
    app.use(express.static(root));
    console.log(root);
    app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
} else {
    app.use(cors({ origin: `http://localhost:3000` }));
}
  

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
 