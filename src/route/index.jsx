import Counter from "pages/Counter";
import AboutPage from "pages/About";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";
import Users from "pages/Users";
import Service from "pages/Service";
import Countries from "pages/Countries";
import NameFilterPage from "pages/NameFilter";
import PostsPage from "pages/Posts";

const WebsiteRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<Service />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/namefilter" element={<NameFilterPage />} />
                <Route path="/posts" element={<PostsPage />} />
            </Routes>
        </>
    )
}

export default WebsiteRouting;