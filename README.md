MERN Job Portal 🚀

A full-stack Job Portal application built using the MERN stack where recruiters can post jobs and job seekers can browse and apply for jobs.
The project focuses on real-world authentication, role-based access, protected routes, and clean UI using Tailwind CSS.

🔥 Features
👤 Authentication & Authorization

User registration & login using JWT

Role-based accounts:

Recruiter

Job Seeker

Persistent login using protected routes

Secure API using auth middleware

💼 Jobs

Create job (Recruiter only)

Fetch all jobs on home page

Dynamic job listing UI

Clean job cards with title, company, location & description

🧭 Routing

Public & protected routes

Role-based navigation in Navbar

Auto redirect on logout / refresh

🎨 UI & UX

Fully responsive UI

Built with Tailwind CSS

Sticky Navbar

Clean, minimal design

🛠 Tech Stack

Frontend

React

React Router DOM

Context API

Axios (with interceptor)

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

⚙️ Environment Variables

Create a .env file in the server folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

🚀 Installation & Setup
1️⃣ Clone the repository 
git clone https://github.com/burhan-mushtaq/mern-job-portal.git

2️⃣ Backend setup
cd server
npm install
npm run dev

3️⃣ Frontend setup
cd client
npm install
npm run dev

🌐 API Endpoints (Sample)
Method	Route	Description
POST	/api/auth/login	User login
POST	/api/auth/register	User registration
GET	/api/jobs	Fetch all jobs
POST	/api/jobs	Create job (Recruiter)
GET	/api/me	Get logged-in user


📌 Learning Outcome
This project helped me understand:

How frontend and backend connect in real projects

JWT authentication flow

Protected & role-based routes

Writing scalable React code

Debugging real-world issues

🙌 Future Improvements

Apply job feature

Recruiter dashboard

Job filters & search

Pagination

Resume upload

🧑‍💻 Author : 
Burhan Mushtaq :
(MERN STACK Developer || Programmer )
