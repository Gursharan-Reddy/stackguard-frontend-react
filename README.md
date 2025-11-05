# StackGuard Frontend (React)

A frontend application for the StackGuard assignment, built with React. This project implements a complete, multi-step user authentication flow with protected routes.

**Deployment:**[https://stackguard-frontend-react.vercel.app/](https://stackguard-frontend-react.vercel.app/)

---

## Features

* **Authentication:** A tabbed form for user sign-in and sign-up. User session state is simulated using `localStorage`.
* **Protected Routes:** Internal pages (`/configure` and `/dashboard`) are inaccessible until the user is authenticated.
* **Two-Step Verification:** The `/configure` page is protected and requires a valid "public key" (a string between 100-1000 characters) before granting access to the main dashboard.
* **Dashboard:** The final, protected dashboard page (`/dashboard`) is accessible only after both authentication and configuration are complete.

---

## Core Technologies

* **React:** Built using Create React App.
* **React Router (`react-router-dom`):** Used for client-side routing and managing protected route logic.
* **Ant Design (`antd`):** The component library used for all UI elements, including forms, tabs, buttons, and inputs.

---

## Local Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Gursharan-Reddy/stackguard-frontend-react.git](https://github.com/Gursharan-Reddy/stackguard-frontend-react.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd stackguard-frontend-react
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:3000`.

---

## Usage and Testing

To test the complete user flow:

1.  **Authentication:**
    * On the homepage, complete either the "Sign In" or "Sign Up" form.
    * Upon successful submission, you will be redirected to the `/configure` page.

2.  **Configuration:**
    * On the configuration page, you must enter a valid key.
    * **Sample Key:** Any random string between 100 and 1000 characters will pass validation.
    * Upon verification, you will be redirected to the `/dashboard`.

3.  **Dashboard:**
    * This is the final protected page.
    * Clicking **Sign Out** will clear the `localStorage` session and redirect you to the homepage.