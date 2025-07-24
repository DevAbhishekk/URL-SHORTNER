# 🔗 URL Shortener

A simple and functional **URL Shortener** built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Enter a long URL and receive a short, shareable link that redirects to the original one.

---

## 🚀 Live Demo

> (Optional) Add your hosted URL here  
> Example: https://urlshortner-devabhishekk.vercel.app/

---

## 📁 Project Structure

URL-SHORTNER/
├── Controllers/ # Route handlers for creating and redirecting URLs
├── Models/ # Mongoose schema for storing URLs
├── Views/ # EJS templates for frontend UI
├── server.js # Entry point - sets up Express server
├── .env # Environment variables (MongoDB URI, PORT)
├── package.json # Project metadata and dependencies


---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Templating**: EJS  
- **Environment Management**: dotenv  

---

## ✨ Features

- 🔗 Shorten any long URL into a neat short one  
- 🚀 Auto-redirect from short URL to original URL  
- 💾 Persistent URL storage in MongoDB  
- 📐 Clean folder structure for scalability  
- 🌐 Simple web UI using EJS  

---

## 📦 Installation

### 1. Clone the Repository
git clone https://github.com/your-username/URL-SHORTNER.git
cd URL-SHORTNER

2. Install Dependencies
npm install

4. Create a .env File env
PORT=3000
MONGO_URI=mongodb://localhost:27017/urlshortner
BASE_URL=http://localhost:3000

6. Start the Server
node server.js
or for development:
npm run dev
Then open: http://localhost:3000

🧪 API Endpoints
POST /shorten – Shortens a URL
Request Body:

{
  "longUrl": "https://example.com/some/very/long/url"
}
Response:

json

{
  "shortUrl": "http://localhost:3000/abc123"
}

