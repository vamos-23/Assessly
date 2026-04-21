# Assessly – Exam Portal

## 📌 Overview
Assessly is a full-stack exam management platform that enables secure user authentication, role-based access control, and real-time exam participation. It is designed with a scalable backend architecture and a modern frontend to simulate real-world assessment systems.

---

## 🌐 Live Demo
**Frontend (Vercel):**  
https://assessly-mu.vercel.app  

---

## 🚀 Features

### 🔐 Authentication & Security
- Secure login and registration using JWT  
- Stateless authentication with role-based access (Admin / Student)  
- Protected routes using custom JWT filter  

### 👨‍💼 Admin Features
- Admin dashboard for managing exams  
- Create and manage exam content  
- Role-based access control for administrative operations  

### 🎓 Student Features
- Student dashboard for accessing exams  
- Attempt exams with real-time countdown timer  
- Secure access to authorized resources only  

### ⚙️ System Features
- RESTful API architecture (Spring Boot)  
- Cloud-hosted PostgreSQL database (Neon)  
- Full frontend-backend integration  
- Deployed and accessible in production  

---

## 🛠️ Tech Stack

### 🧑‍💻 Frontend
- **Language:** TypeScript  
- **Framework:** React (Vite)  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **HTTP Client:** Axios  
- **State Management:** React Hooks (useState, useEffect)  
- **Build Tool:** Vite  
- **Deployment:** Vercel  

---

### ⚙️ Backend
- **Language:** Java (JDK 17)  
- **Framework:** Spring Boot  
- **Architecture:** Layered Architecture (Controller → Service → Repository)  
- **Security:** Spring Security + JWT Authentication  
- **API Design:** RESTful APIs  
- **Build Tool:** Maven  
- **Deployment:** Render (Dockerized)  

---

### 🗄️ Database
- **Database:** PostgreSQL  
- **Cloud Provider:** Neon  
- **ORM:** Spring Data JPA (Hibernate)  

---

### 🔐 Authentication & Authorization
- JSON Web Tokens (JWT)  
- Role-Based Access Control (RBAC)  
- Stateless authentication system  

---

### ☁️ DevOps & Deployment
- **Containerization:** Docker  
- **Version Control:** Git + GitHub  
- **CI/CD:** Render auto-deploy from GitHub  
- **Environment Variables:** Secure configuration for DB & JWT  

---

### 🧰 Tools & Development
- VS Code / IntelliJ IDEA  
- Postman (API testing)  
- pgAdmin (database management)  
- GitHub (repository hosting)  

---

## ⚙️ Setup Instructions

### Backend
1. Navigate to `assessly-backend`
2. Add environment variables:
   ```
   DB_URL=your_database_url
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   JWT_SECRET=your_secret_key
   ```
3. Run:
   ```bash
   ./mvnw spring-boot:run
   ```

---

### Frontend
1. Navigate to `assessly-frontend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   npm start
   ```

---

## 🧩 Project Structure
```
Assessly/
├── assessly-backend/
└── assessly-frontend/
```

---

## 🌟 Key Highlights
- Full-stack production deployment (Frontend + Backend + DB)  
- JWT-based stateless authentication system  
- Role-based authorization (Admin / Student)  
- Real-time exam experience with countdown timer  
- Clean layered backend architecture (Controller → Service → Repository)  
- Cloud integration with Neon + Render + Vercel  

---

## 🔮 Future Improvements
- Detailed analytics and exam performance tracking  
- Email notifications and password recovery  
- Question randomization and anti-cheating measures  
- Multi-exam scheduling system  
- Improved UI/UX and accessibility  
- AI-based question recommendation system  

---

## 👤 Author
Adrij Samanta
