const express = require('express');
const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
// app.use('/api', apiRoutes);

// start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    // run start function after connection is made
    // userPrompt();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})

