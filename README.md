.

🎓 Career Guidance System

A Unified Mentor Internship Project

A smart, user-friendly web application designed to help students make better career decisions through aptitude-based evaluation. This system includes student & college login, aptitude test, score analysis, and career recommendations, built using Firebase and modern web technologies.

🧾 Table of Contents

Overview

Features

Technologies Used

Project Flow

Screenshots

Folder Structure

Firestore Structure

How to Run

Future Enhancements

Conclusion

📌 Overview

The Career Guidance System helps students identify the right career path based on their aptitude test performance.
It provides separate modules for:

Students → Take test, view results, get career suggestions

Colleges → Track student results

Admin (optional) → Manage users & data

All data is stored securely in Firebase Firestore, and authentication is handled using Firebase Auth.

🌟 Features
🔹 Student Features

Student login & signup

Aptitude test with 10 MCQs

Auto-calculated percentage score

Performance-based remarks

Personalized career recommendations

Student Dashboard (profile + history)

See previous test score

🔹 College Features

College login & signup

View all student test scores

Check student email, test date, and percentage

Download report as CSV

Monitor student progress

🔹 System Features

Firebase Authentication (Email/Password)

Firestore secure database

Indexed queries for fast performance

Fully Responsive UI

Gradient modern design

Smooth animations and buttons

🛠️ Technologies Used
Technology	Usage
HTML5	Page structure
CSS3	UI design + responsiveness
JavaScript	Logic / dynamic content
Firebase Auth	Login & signup
Firebase Firestore	Storing scores & users
GitHub Pages	Deployment
🔄 Project Flow
Student → Login → Start Aptitude Test → Submit Test → Score Saved in Firestore → 
Generate Percentage → Show Result Page → Dashboard + Recommendations

College → Login → View Students List → Download Results

🖼️ Screenshots

(Upload your screenshots in the GitHub repo and replace these dummy links)

🏠 Landing Page

🔐 Login Page

📝 Aptitude Test

📊 Result Page

🧑‍🎓 Student Dashboard

📂 Folder Structure
career-guidance/
│── index.html
│── login.html
│── signup_student.html
│── signup_college.html
│── student_dashboard.html
│── college_dashboard.html
│── aptitude_test.html
│── student_result.html
│── firebase.js
│── app.js
│── student_dashboard.js
│── college_dashboard.js
│── style.css
│── assets/
│     └── images/
└── README.md

🔥 Firestore Structure
Collection: students
{
  name: "Shaistha Banu",
  email: "...",
  createdAt: timestamp
}

Collection: colleges
{
  collegeName: "...",
  email: "...",
  createdAt: timestamp
}

Collection: aptitudeScores
{
  studentId: "uid",
  email: "student@example.com",
  score: 7,
  percentage: 70,
  answers: [...],
  createdAt: timestamp
}

▶️ How to Run Locally

Clone the repository

git clone https://github.com/yourname/career-guidance.git


Open the folder

cd career-guidance


Add your Firebase configuration inside firebase.js

Open any HTML file using Live Server

Right click → Open with Live Server
OR

Use local browser path like

127.0.0.1:5500/index.html

🚧 Future Enhancements

✔ Add Admin Panel
✔ Add Multiple Career Fields (Medical, Commerce, Arts, Engineering)
✔ Add AI-Based Career Suggestions
✔ Add Resume Builder for students
✔ Add PDF download for student results
✔ Add more detailed aptitude questions

🏁 Conclusion

The Career Guidance System is a complete internship-level project designed to help students take better career decisions based on aptitude evaluation.
With its clean UI, Firebase integration, responsive design, and role-based dashboards, it provides a practical and scalable solution suitable for real-time use in educational institutions.
