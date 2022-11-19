import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { navigationAtom } from "../pages/NavBar"

function AnimatedPage({ children }) {

    // ATOM
    const [activeNavigation] = useAtom(navigationAtom);

    return (
        <AnimatePresence>
            {activeNavigation &&
                <motion.div className="overflow-hidden flex justify-center mt-1 lg:mt-10"
                    exit={{ y: 500, transition: { duration: 0.4, delay: 0.2 }}}>

                    {children}
                </motion.div>}
        </AnimatePresence>
    )
}

export default AnimatedPage