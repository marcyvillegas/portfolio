import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useAtom } from 'jotai';
import { navigationAtom } from "../pages/NavBar"
import { useState, useEffect } from 'react';


function AnimatedPage({ children }) {

    // ATOM
    const [activeNavigation] = useAtom(navigationAtom);

    return (
        <AnimatePresence>
            {activeNavigation &&
                <motion.div className="overflow-hidden flex justify-center mt-1 lg:mt-10"
                    exit={{ y: 500, transition: { duration: 0.6, delay: 0.2 }}}>

                    {children}
                </motion.div>}
        </AnimatePresence>
    )
}

export default AnimatedPage