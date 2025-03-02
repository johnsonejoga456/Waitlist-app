
### Waitlist Landing Page Documentation

#  Waitlist Landing Page  

A Next.js-based landing page for course enrollment, allowing users to join a waitlist for upcoming courses. The system automatically sends a confirmation email upon successful registration.

## Features  

Modern UI with Next.js and Tailwind CSS  
Dynamic course listing  
Waitlist form with smooth modal popup  
API endpoint for handling waitlist submissions  
Email confirmation system for successful signups  
Deployed with Vercel & Firebase Functions  

## Technology Stack  

- Frontend:** Next.js, TypeScript, Tailwind CSS  
- Backend & Database:** Firebase Firestore  
- API & Mailer:** Firebase Functions, Nodemailer/SendGrid  

Installation & Setup  

Clone the Repository  

git clone https://github.com/yourusername/waitlist-app.git
cd waitlist-app

Install Dependencies  

npm install

Run the Development Server 

npm run dev

http://localhost:3000

API Endpoints  

POST /api/waitlist- Register a user to the waitlist  
Request Body  
json
{
  "name": "John Doe",
  "email": "john@example.com",
  "course": "Web Development"
}
 Response  
json
{
  "message": "Successfully added to the waitlist!"
}

Email Notification System  

After a user joins the waitlist, they receive a confirmation email via Nodemailer. The email template is located in:  

firebase/functions/mailer.js

Email Example  
Subject: Welcome to the Waitlist!
Hello
You've successfully joined the waitlist for. We'll notify you when spots open up.  

Deployment Guide  

Frontend (Vercel Deployment)
1. Push your code to GitHub.  
2. Connect the repository to [Vercel](https://vercel.com).  
3. Add the environment variables in Vercel settings.  
4. Deploy!

### **Backend (Firebase Functions Deployment)**
1. Install Firebase CLI:  
   ```sh
   npm install -g firebase-tools
   ```
2. Login to Firebase:  
   ```sh
   firebase login
   ```
3. Deploy Firebase Functions:  
   ```sh
   firebase deploy --only functions
   ```

---

## ❓ Troubleshooting  

❌ *Next.js not found?*  
   - Run `npm install next react react-dom`  

❌ *Deployment taking too long?*  
   - Ensure dependencies are installed correctly.  
   - Restart Vercel build.  

❌ *Emails not being sent?*  
   - Check SendGrid API key.  
   - Verify Firebase Function logs.  

---

## 📜 License  
This project is open-source under the [MIT License](LICENSE).

---
```

---

### **Next Steps**
- I'll save this as a `README.md` file for you.  
- Do you need any modifications before I finalize it? 🚀
