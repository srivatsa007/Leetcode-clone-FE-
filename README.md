# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  ////

---

# React LeetCode Clone

## Description

This project is a clone of LeetCode built using React. It allows users to solve coding problems and test their solutions against provided test cases.

## React Concepts Used

### 1. Context API

The Context API is used for managing authentication state across components. `AuthProvider` wraps the entire application to provide authentication context.

```javascript
// AuthProvider.js
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // Authentication state management logic
};

export default AuthProvider;
```

### 2. Firebase Authentication

Firebase Authentication is used for user authentication. useAuthState hook is used to track authentication state.

```javascript
// CodeEditor.js
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const [user] = useAuthState(auth);
```

### 3. React Router DOM

React Router DOM is used for routing within the application. Different routes are defined using Routes and Route components.

```javascript
/// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
```

### 4. Destructuring

Destructuring is used extensively to extract values from objects and arrays.

```javascript
// CodeEditor.js
const { examples, id, starterCode, handlerFunction } = Problem;
```

### 5. Dark/Light Mode using Daisy UI

Dark and Light mode functionality is implemented using Daisy UI components and CSS classes toggling.

```javascript
// ThemeToggle.js
import { useColorMode } from "daisyui";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <button onClick={toggleColorMode}>
      {colorMode === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
```

---

## Installation and Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.
4. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Credits

This project was built by D S Srivatsa, and Susheel K as part of Geekster's React Module Project. </br>
Our front end React project was made using Project resources and referance taken from the fullstack nextjs proj :- <br/>
[FCC Build and deploy Leetcode clone using Next.js]("https://www.youtube.com/watch?v=GnodscC2p-A")

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
