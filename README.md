# 📰 News App (Full Stack Application)

This is a **full-stack News Application** built with **React** for the frontend and **Node.js + Express + MongoDB** for the backend.  
Users can register, log in, post news articles, edit or delete their own posts, and browse news posted by others.

---

## 📁 Project Structure

```
News-App/
│
├── app/            # Frontend (React)
├── server/         # Backend (Node.js, Express)
└── README.md       # Project documentation
```

---

## ✨ Features

### Frontend
- User-friendly UI for browsing news articles
- User authentication (login & signup)
- Create, edit, and delete news articles
- Protected routes for authenticated users
- API integration with backend

### Backend
- RESTful APIs for news and users
- JWT-based authentication & authorization
- MongoDB database integration
- CRUD operations for news articles
- Centralized error handling

---

## 🚀 Live Demo

🔗 **Frontend Live URL:**  
https://newsapp-ashishmisal.vercel.app

---

## 🛠️ Technologies Used

### Frontend
- React
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- Axios

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashishmisal23/News-App.git
cd News-App
```

---

## 🖥️ Frontend Setup (app/)

```bash
cd app
npm install
```

### Environment Variables

Create a `.env` file inside the `app` folder:

```plaintext
REACT_APP_API_URL=http://localhost:5000
```

### Run Frontend

```bash
npm start
```

Frontend will be available at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔧 Backend Setup (server/)

```bash
cd server
npm install
```

### Environment Variables

Create a `.env` file inside the `server` folder:

```plaintext
PORT=5000
MONGO_URL=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
```

### Run Backend

```bash
npm start
```

Backend API will be available at:
👉 [http://localhost:5000](http://localhost:5000)

---

## 📂 Folder Details

### Frontend (`app/`)

```
app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
```

### Backend (`server/`)

```
server/
│
├── models/          # MongoDB schemas
├── routes/          # API routes
├── dbConnect.js     # Database connection
└── server.js        # Express server
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ashish Misal**

* GitHub: [https://github.com/ashishmisal23](https://github.com/ashishmisal23)

---

⭐ If you like this project, don’t forget to star the repository!
