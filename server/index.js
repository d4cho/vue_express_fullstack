const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/keys');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err));

// api
const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public'));

  //Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(_dirname + '/public/index.html');
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
