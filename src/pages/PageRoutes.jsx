import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import Contacts from './Contacts';

function PageRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    );
}

export default PageRoutes