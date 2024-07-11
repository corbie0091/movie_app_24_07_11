import { HashRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./pages/detail/Detail";
import { Home } from "./pages/home/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Search } from "./pages/search/Search";

const Router= () => {
    return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/*" element={<PageNotFound/>} />
        </Routes>
    </HashRouter>
    );
};

export default Router;