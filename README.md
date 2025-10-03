# SaaScribe.ai

**SaaScribe** is a **production-ready AI-powered SaaS platform** delivering **content generation, intelligent image editing, and resume analysis** — all in a scalable, subscription-based model. Built with **React, Node.js, Express, TailwindCSS**, a **serverless PostgreSQL backend (Neon)**, **secure authentication & billing via Clerk**, and **multi-modal AI capabilities powered by Gemini, Cloudinary, and ClipDrop**.
- Both frontend and backend are deployed on **Vercel** for low-latency, globally distributed performance.

## 🌐 Live Demo

🔗 **[View Live Demo](https://saas-scribe-ai.vercel.app/)** 

👉 **[Clerk](https://go.clerk.com/GHwC6Yp/)**

👉 **[Neon](https://get.neon.com/XZ88lhE/)**

👉 **[Gemini](https://aistudio.google.com/apikey?_gl=1*16hhxge*_up*MQ..&gclid=CjwKCAjwhuHEBhBHEiwAZrvdcrPDtgPJ-dQhQAYenC63CxRmvIyws1zw5OoVxyctSGcrS3X2cAYcHxoCLJMQAvD_BwE&gclsrc=aw.ds)**

*Experience the full SaaS platform with real-time AI generation capabilities*
---

## ✨ Core Features

### 🔐 User Authentication & Billing
- Secure sign-up, sign-in, and profile management with **Clerk**
- Integrated **subscription-based billing** to unlock premium AI features
- Role-based access control and user session management

### 🗄️ Serverless Database
- **PostgreSQL** powered by **Neon** — cost-efficient, scalable, and low-latency
- Automatic connection pooling and query optimization
- Real-time data synchronization across all user sessions

---

## 🤖 AI Modules

1. **Article Generator** – Generate detailed, structured articles by specifying title & length
2. **Blog Title Generator** – Produce SEO-optimized blog titles from keywords & categories  
3. **Image Generator** – Create original images from natural language prompts via **Gemini API**
4. **Background Remover** – Remove image backgrounds instantly using **ClipDrop API**
5. **Image Object Remover** – Erase unwanted objects from images by name via **ClipDrop API**
6. **Resume Analyzer** – Upload a resume and receive a detailed AI-powered analysis for improvements

---

## 🛠️ Tech Stack

**Frontend:** React, TailwindCSS, React Router, Axios  
**Backend:** Node.js, Express.js, CORS 
**Database:** PostgreSQL (Neon - serverless)  
**Authentication & Billing:** Clerk  
**AI Services:**
- **Gemini API** – Text & image generation
- **Cloudinary** – Image storage & optimization  
- **ClipDrop API** – Background & object removal

**Hosting:** Vercel (frontend & backend)

---

## 📂 Project Structure

```
saascribe/
├── client/                 # Frontend (React + TailwindCSS)
│   ├── public/
|   |──node_modules/
│   ├── src/
│   │   ├── assets/
|   |   |── components/
│   │   ├── pages/
│   │   ├── main.jsx
│   │   |── App.jsx
│   │   └── index.css
│   └── .env
│
├── server/                 # Backend (Node.js + Express)
│   ├── configs/
│   ├── controllers/
│   ├── middleware/
│   ├── node_modules/
│   ├── routes/
│   └── .env
│
|
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in both `client` and `server` directories:

**Client (.env)**
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

**Server (.env)**
```env
DATABASE_URL=your_neon_database_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_key
```

---

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Sotejaswini/SaaScribe.git
cd SaaScribe

# Install dependencies
cd client && npm install
cd ../server && npm install
```

---

## 🚀 Running Locally

**Start Backend**
```bash
cd server
npm run dev
```

**Start Frontend**
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

---
## License

This project is licensed under the MIT License.
