# Firebase Authentication Setup

## Overview
This application uses Firebase Authentication with two login methods:
1. **Email/Password Authentication** - Manual login with Gmail and password
2. **Google Sign-In** - One-click authentication with Google account

## Setup Instructions

### 1. Firebase Console Configuration

#### Enable Authentication Methods:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `video-calling-2097e`
3. Navigate to **Authentication** → **Sign-in method**
4. Enable the following providers:
   - ✅ **Email/Password**
   - ✅ **Google**

#### Configure Google Sign-In:
1. In Google sign-in settings, add your authorized domains:
   - `localhost` (for development)
   - Your production domain (e.g., `your-app.vercel.app`)

#### Add OAuth Redirect URIs:
For web application, add these redirect URIs:
- `http://localhost:9002` (development)
- `http://localhost:9002/__/auth/handler`
- Your production URL + `/__/auth/handler`

### 2. Environment Variables
The Firebase configuration is stored in `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyArRM8Uhm6ec-lPL97qFQCUAHFhcqmtEBg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=video-calling-2097e.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=video-calling-2097e
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=video-calling-2097e.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=104517837705
NEXT_PUBLIC_FIREBASE_APP_ID=1:104517837705:android:725903c041e73b2743f758
```

## Features Implemented

### 1. Email/Password Login
- ✅ Sign in with existing account
- ✅ Auto-create account if user doesn't exist
- ✅ Password reset via email
- ✅ Error handling for invalid credentials

### 2. Google Sign-In
- ✅ One-click authentication
- ✅ Account selection prompt
- ✅ Popup-based authentication
- ✅ Error handling for popup blocks/cancellations

### 3. User Experience
- ✅ Loading states during authentication
- ✅ Success/error message display
- ✅ Auto-redirect to dashboard after login
- ✅ Password visibility toggle
- ✅ Forgot password functionality

## Usage

### Manual Email/Password Login:
1. Enter your Gmail address
2. Enter your password
3. Click "Login" button
4. If account doesn't exist, it will be created automatically

### Google Sign-In:
1. Click "Continue with Google" button
2. Select your Google account
3. Automatically logged in and redirected

### Forgot Password:
1. Enter your email address
2. Click "Forgot Password?"
3. Check your email for reset link

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit `.env.local`** to version control
2. Add `.env.local` to your `.gitignore` file
3. For production, set environment variables in your hosting platform
4. Firebase API keys are safe to expose in client-side code (they're public)
5. Security is enforced through Firebase Security Rules

## Troubleshooting

### Issue: "Popup blocked" error
**Solution:** Allow popups in your browser for this site

### Issue: "Invalid credentials" error
**Solution:** 
- Check if Email/Password auth is enabled in Firebase Console
- Verify email format is correct
- Try password reset if you forgot your password

### Issue: Google Sign-In not working
**Solution:**
- Verify Google provider is enabled in Firebase Console
- Check if localhost is added to authorized domains
- Clear browser cache and cookies

### Issue: Redirect not working after login
**Solution:** 
- Ensure you're running the app on the correct port (9002)
- Check browser console for errors

## Testing

### Test Accounts:
You can create test accounts directly through the login page by entering any valid email and password combination.

### Firebase Console:
Monitor authentication in real-time:
1. Go to Firebase Console
2. Navigate to **Authentication** → **Users**
3. View all registered users and their login methods

## Next Steps

After successful authentication, users are redirected to the main dashboard (`/`). You can:
1. Access user info via Firebase Auth
2. Implement protected routes
3. Add user profile management
4. Implement logout functionality

## Support

For Firebase Authentication documentation:
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Next.js + Firebase Guide](https://firebase.google.com/docs/auth/web/start)
