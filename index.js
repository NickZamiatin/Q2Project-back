require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const recipeRoutes = require('./routes/cookings')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (request, response) => {
    response.send('Works')
})
app.use('/cooking', recipeRoutes);

app.listen(process.env.PORT, () => {
    console.log(`library-express: Express application is listening on port ${process.env.PORT}...`);
});