import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { urlShort, getOriginalUrl } from './Controllers/url.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env
config();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((error) => console.log(error));

// Routes
app.get('/', (req, res) => {
  res.render("server.ejs", { shortUrl: null });
});

app.post("/shorten", urlShort);
app.get("/:shortCode", getOriginalUrl);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3001/`);
});
