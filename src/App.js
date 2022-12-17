import Counter from "components/Counter";
import AboutPage from "pages/About";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<AboutPage />}/>
      </Routes>
    </>
  );
}

export default App;
