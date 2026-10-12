## Authentication Flow

AuthFlow is a full-stack user authentication project built with React, Node.js, and Express.

### How it works

1. **Register:** The user submits registration details through the frontend.
2. **Backend validation:** Express receives the request and validates the input.
3. **Database:** The user information is stored in MongoDB.
4. **Login:** The backend verifies the user's credentials.
5. **JWT authentication:** The backend issues a JSON Web Token after successful authentication.
6. **Protected profile:** The frontend requests the profile endpoint, and the backend verifies the token before returning protected data.
7. **Logout:** The frontend clears the authentication state and follows the project's configured token-handling approach.
