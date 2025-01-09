### Social_Login

A Node.js-based backend application that supports social login functionality using Google, GitHub, and Facebook. This project leverages **Passport.js** for OAuth authentication and integrates seamlessly with frontend applications via CORS.

---

### Features

- **Social Login Options:**
  - Google Authentication
  - GitHub Authentication
  - Facebook Authentication
- **Session Management:**
  - Uses `express-session` for storing session data.
  - Sessions persist for 24 hours.
- **Secure Configuration:**
  - Environment variables for client IDs, secrets, and session keys.
- **CORS Support:**
  - Configured for cross-origin requests from `http://localhost:3000`.

---

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Environment variables:
  - `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`
  - `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`
  - `FACEBOOK_CLIENT_ID` & `FACEBOOK_CLIENT_SECRET`
  - `SECRET_SESSION`

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamed-osamaaa/Social_Login.git
   cd Social_Login
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the required environment variables:
   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   FACEBOOK_CLIENT_ID=your-facebook-app-id
   FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
   SECRET_SESSION=your-secret-session-key
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Server will run at `http://localhost:5000`.

---

### API Endpoints

#### **Authentication Routes**

| Route                        | Method | Description                                    |
|------------------------------|--------|------------------------------------------------|
| `/auth/login/success`        | GET    | Returns user details if authenticated.         |
| `/auth/login/failed`         | GET    | Indicates authentication failure.              |
| `/auth/logout`               | GET    | Logs out the user and redirects to client URL. |
| `/auth/google`               | GET    | Initiates Google login.                        |
| `/auth/google/callback`      | GET    | Handles Google login callback.                 |
| `/auth/github`               | GET    | Initiates GitHub login.                        |
| `/auth/github/callback`      | GET    | Handles GitHub login callback.                 |
| `/auth/facebook`             | GET    | Initiates Facebook login.                      |
| `/auth/facebook/callback`    | GET    | Handles Facebook login callback.               |

---

### Tech Stack

- **Backend Framework:** Express.js
- **Authentication:** Passport.js
- **OAuth Strategies:**
  - Google (`passport-google-oauth20`)
  - GitHub (`passport-github2`)
  - Facebook (`passport-facebook`)
- **Session Management:** express-session
- **CORS Support:** cors

---

### Configuration Notes

- Ensure all OAuth credentials (client IDs and secrets) are correctly set in the `.env` file.
- The `CLIENT_URL` in the `auth` routes should match your frontend's URL (default: `http://localhost:3000`).

---

### Acknowledgments

- [Passport.js Documentation](http://www.passportjs.org/docs/)
- OAuth Providers: Google, GitHub, and Facebook
