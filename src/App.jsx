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

  // FUNCTIONS
  const changeActiveTab = (tab) => {

    setActiveTabs({

    });
  }

  return (
    <div className="App">

      <div className="flex justify-center gap-10 my-14">
        <motion.button
          className={`${activeTabs.home ? "bg-[#5C0099]" : "bg-[#262633]"} p-3 rounded-md text-white font-bold font-inter`}
          whileTap={{ y: 5 }}>
          Home</motion.button>

        <motion.button
          className={`${activeTabs.projects ? "bg-[#5C0099]" : "bg-[#262633]"} p-3 rounded-md text-white font-bold font-inter`}
          whileTap={{ y: 5 }}>
          Projects</motion.button>

        <motion.button className={`${activeTabs.contacts ? "bg-[#5C0099]" : "bg-[#262633]"} p-3 rounded-md text-white font-bold font-inter`}
          whileTap={{ y: 5 }}>
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
