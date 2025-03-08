
# User List Project

This is a **React** project built with **Vite**, featuring **Redux Toolkit, RTK Query, Redux Persist, Material UI, and Docker**. The project fetches and displays a list of users with real-time updates and error handling using an Error Boundary.

----------

## Features

-   **React 19 + Vite** for fast development
    
-   **Redux Toolkit (RTK Query)** for state management
    
-   **Redux Persist** for persisting user data
    
-   **Material UI** for UI components
    
-   **Alias Paths** for cleaner imports (`@/components` → `src/components`)
    
-   **Error Boundary** for error handling
    
-   **Docker Support** for containerized deployment
    
-   **Prettier + ESLint** for code formatting
    
-   **Option to run in Dev or Production mode**
    

----------

## Installation

1.  **Clone the repository:**
    
    ```
    git clone https://github.com/javadkh76/user-list
    cd user-list
    ```
    
2.  **Install dependencies:**
    
    ```
    yarn install
    ```
    
----------

## Running the Project

### **Run with Docker**

### **Development Mode**

```
docker compose --profile dev up --build
```

### **Production Mode**

```
docker compose --profile prod up --build
```
