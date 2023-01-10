import Counter from "pages/Counter";
import AboutPage from "pages/About";
import HomePage from "pages/Home";
import { Route, Routes } from "react-router-dom";
import Users from "pages/Users";
import Service from "pages/Service";
import Countries from "pages/Countries";
import NameFilterPage from "pages/NameFilter";
import PostsPage from "pages/Posts";
import UsersWithReducer from "pages/UsersWithReducer";
import UsersWithRedux from "pages/UsersWithRedux";
import CounterRedux from "pages/CounterRedux";
import MuiPage from "pages/Mui";

const WebsiteRouting = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/counter-redux" element={<CounterRedux />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/service" element={<Service />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/namefilter" element={<NameFilterPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/users-reducer" element={<UsersWithReducer />} />
                <Route path="/users-redux" element={<UsersWithRedux />} />
                <Route path="/mui" element={<MuiPage />} />
            </Routes>
        </>
    )
}

export default WebsiteRouting;