import { Routes, Route } from "react-router-dom";

import UsersPage from "./Pages/UsersPage/UsersPage";
import { HomePage } from "./Pages/HomePage/HomePage";
const App = () => {
  return (
    <>
      <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/users-search" element={<UsersPage />} />
      </Routes>
    </>
  );
};

export default App;
