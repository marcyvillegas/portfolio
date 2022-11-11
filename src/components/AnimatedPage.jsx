import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react'

function AnimatedPage({ children }) {

    const location = useLocation()

    const [show, setShow] = useState(true)

    useEffect(() => {

        if (location.pathname === "/") {

            setTimeout(() => {

                setShow(false)
            }, 2000)
        }

    }, []);


    return (
        <AnimatePresence>
            {
                show &&
                <motion.div className="overflow-hidden flex justify-center mt-1 lg:mt-10"
                    exit={{ opacity: 0, x: 100, scale: 10, transition: { delay: 5 } }}>

                    {children}
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default AnimatedPage