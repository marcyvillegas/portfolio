import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './layouts/Home.jsx'

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

        <div className="flex justify-end mt-10 mr-4">
          <motion.button
            className="bg-[#3B3B48] p-2 rounded-md"
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveMenuIcon(!activeMenuIcon)}>
            <img src="/src/assets/menu-icon.svg" />
          </motion.button>
        </div>

        <div className="flex justify-end mr-4">
          <div className="relative mt-2">

            <AnimatePresence>
              {activeMenuIcon &&
                <motion.ul className="absolute px-2 p-4 bg-[#3B3B48] text-white right-0 rounded-md object-center"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.2 } }}>

                  <motion.li className="hover:bg-[#5B5B60] duration-300 cursor-pointer py-1 px-6 rounded-md font-bold"
                    whileTap={{ scale: 0.9 }}>Home
                  </motion.li>

                  <motion.li className="hover:bg-[#5B5B60] duration-300 cursor-pointer py-1 px-6 rounded-md font-bold"
                    whileTap={{ scale: 0.9 }}>Projects
                  </motion.li>

                  <motion.li className="hover:bg-[#5B5B60] duration-300 cursor-pointer py-1 px-6 rounded-md font-bold"
                    whileTap={{ scale: 0.9 }}>Contacts
                  </motion.li>
                </motion.ul>}
            </AnimatePresence>
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
      <div className="flex justify-center mt-1 lg:mt-10">
        <Home />
      </div>

    </div>
  )
}

export default App
