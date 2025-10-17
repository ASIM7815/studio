# 🔥 IMPORTANT: Firebase Console Setup Steps

## ⚠️ YOU MUST COMPLETE THESE STEPS FOR LOGIN TO WORK

Your login page is now fully coded and ready, but you need to enable authentication in Firebase Console first.

## Step-by-Step Instructions:

### 1️⃣ Go to Firebase Console
🔗 Open: https://console.firebase.google.com/

### 2️⃣ Select Your Project
- Click on: **video-calling-2097e**

### 3️⃣ Enable Authentication
1. In the left sidebar, click **"Build"** → **"Authentication"**
2. Click **"Get Started"** (if this is your first time)

### 4️⃣ Enable Email/Password Sign-In
1. Click on the **"Sign-in method"** tab
2. Find **"Email/Password"** in the list
3. Click on it
4. Toggle **"Enable"** to ON
5. Click **"Save"**

### 5️⃣ Enable Google Sign-In
1. Still in the **"Sign-in method"** tab
2. Find **"Google"** in the list
3. Click on it
4. Toggle **"Enable"** to ON
5. Select a **Project support email** (your email)
6. Click **"Save"**

### 6️⃣ Add Authorized Domains
1. In the **"Sign-in method"** tab, scroll down to **"Authorized domains"**
2. `localhost` should already be there
3. When you deploy, add your production domain here

### 7️⃣ Configure OAuth for Web (IMPORTANT!)
Since your Firebase project is configured for Android, you need to add web support:

1. Go to **Project Settings** (gear icon in sidebar)
2. Scroll down to **"Your apps"** section
3. Click the **Web icon** (`</>`) to add a web app
4. Register your web app:
   - **App nickname**: "INTERACTz Web"
   - Check: ✅ **"Also set up Firebase Hosting"** (optional)
   - Click **"Register app"**
5. You'll see a config object - you can skip this (already configured)

## ✅ Verification

After completing the above steps, test your login:

### Test Email/Password:
1. Go to: http://localhost:9002/login
2. Enter any email (e.g., test@gmail.com)
3. Enter any password (min 6 characters)
4. Click **"Login"**
5. First time: account will be created
6. Should redirect to dashboard

### Test Google Sign-In:
1. Go to: http://localhost:9002/login
2. Click **"Continue with Google"**
3. Select your Google account
4. Should redirect to dashboard

## 🔍 Monitor Users

To see all logged-in users:
1. Firebase Console → **Authentication** → **Users** tab
2. You'll see all registered users with their email and sign-in method

## 🚨 Common Issues

### Error: "auth/operation-not-allowed"
**Solution:** Email/Password or Google auth is not enabled in Firebase Console. Go back to Step 4 or 5.

### Error: "auth/unauthorized-domain"
**Solution:** Add your domain to authorized domains (Step 6)

### Google Sign-In shows error
**Solution:** Make sure you added the Web app configuration (Step 7)

## 📱 Current Status

✅ Code is fully implemented
✅ Firebase SDK is installed
✅ Environment variables are configured
✅ Login page UI is complete
⏳ **YOU NEED TO**: Enable auth methods in Firebase Console (Steps 1-7)

## 🎯 After Setup

Once authentication is working, you can:
- View users in Firebase Console
- Implement logout functionality
- Add protected routes
- Create user profiles
- Add password reset flow

---

**Need help?** Check the detailed guide in `docs/FIREBASE_AUTH_SETUP.md`
