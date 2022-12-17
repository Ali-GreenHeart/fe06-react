import Counter from "components/Counter";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
