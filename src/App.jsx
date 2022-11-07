import { useState } from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';

function App() {

  // STATES
  const [activeTabs, setActiveTabs] = useState({
    home: true,
    projects: false,
    contacts: false
  });
  const [activeMenuIcon, setActiveMenuIcon] = useState(false);

  // FUNCTIONS
  const changeActiveTab = (tab) => {

    if (tab == "home" && activeTabs.home) return

    setActiveTabs({
      home: false,
      [tab]: true
    });
  }

  return (
    <div>

      {/* Navbar for mobile view */}
      <div className="flex lg:hidden flex-col">

        <div className="flex justify-end mt-10 mr-10">

          <motion.button
            className="bg-[#3B3B48] p-2 rounded-md"
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveMenuIcon(!activeMenuIcon)}>
            <img src="/src/assets/menu-icon.svg" />
          </motion.button>
        </div>

        <div className="flex justify-end mr-10">
          <div className="relative mt-2">
            {activeMenuIcon &&
              <ul className="absolute bg-white right-0">
                <li>Home</li>
                <li>Projects</li>
                <li>Contacts</li>
              </ul>}
          </div>
        </div>
      </div>

      {/* Navigation tabs for desktop view */}
      <div className="hidden lg:flex justify-center gap-10 mt-14">
        <motion.button
          className={`${activeTabs.home ? "bg-[#5C0099]" : "bg-[#262633]"} p-3 rounded-md text-white font-bold font-inter`}
          whileTap={{ y: 5 }}
          onClick={() => changeActiveTab("home")}>
          Home</motion.button>

        <motion.button
          className={`${activeTabs.projects ? "bg-[#5C0099]" : "bg-[#262633]"} p-3 rounded-md text-white font-bold font-inter`}
          whileTap={{ y: 5 }}
          onClick={() => changeActiveTab("projects")}>
          Projects</motion.button>

        <motion.button className={`${activeTabs.contacts ? "bg-[#5C0099]" : "bg-[#262633]"} p-3 rounded-md text-white font-bold font-inter`}
          whileTap={{ y: 5 }}
          onClick={() => changeActiveTab("contacts")}>
          Contacts</motion.button>
      </div>

      {/* layouts here */}
      <div>

        <Header>try</Header>
      </div>

    </div>
  )
}

export default App
