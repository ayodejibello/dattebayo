import { BrowserRouter, Routes, Route } from "react-router-dom";
import Villages from "../pages/Villages";
import Nav from "../Nav";
import Home from "../pages/Home";
import CharactersPage from "../pages/CharactersPage";
import Akatsuki from "../pages/Akatsuki";
import KekkeiGenkai from "../pages/KekkeiGenkai";
const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/villages" element={<Villages />}></Route>
        <Route path="/" element={<Nav />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/characters" element={<CharactersPage />}></Route>
        <Route path="/akatsuki" element={<Akatsuki />}></Route>
        <Route path="/kekkei-genkai" element={<KekkeiGenkai />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default PageRouter;
