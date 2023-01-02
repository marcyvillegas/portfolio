import AnimatedPage from '../components/AnimatedPage';
import Header from '../components/Header';
import BackToTopButton from '../components/BackToTopButton';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Contacts() {

    // STATE
    const [showToolTip, setShowToolTip] = useState(false)

    // FUNCTION
    function copyText() {

        navigator.clipboard.writeText("marcyvillegas17@gmail.com")
        setShowToolTip(true);
    }

    function redirectToLink(handler) {

        if (handler == "LinkedIn") window.open("https://www.linkedin.com/in/marcyvillegas/");
        if (handler == "Facebook") window.open("https://www.facebook.com/marcyvillegas17");
        if (handler == "Twitter") window.open("https://twitter.com/dev_maashii");
        if (handler == "Github") window.open("https://github.com/marcyvillegas");
        if (handler == "Discord") window.open("https://discord.com/users/582396919654121472");
    }

    // USE EFFECT
    useEffect(() => {

        if (!showToolTip) return

        const timer = setTimeout(() => {
            setShowToolTip(false);
        }, 2000);

        return () => clearTimeout(timer);

    }, [showToolTip]);

    return (
        <AnimatedPage>

            <BackToTopButton />
            
            <div className="flex flex-col justify-center font-inter px-10">

                <div className="overflow-hidden mb-5 lg:mb-8 w-full flex justify-center lg:justify-start">
                    <motion.div className="py-1"
                        initial={{ x: -400 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <Header>Contacts</Header>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row text-white text-center lg:text-start justify-center lg:justify-start">

                    <motion.div
                        className="flex flex-col mb-7 lg:mr-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.6,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>

                        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Email</h1>
                        <p className="cursor-pointer relative inline-block" onClick={copyText}>

                            marcyvillegas17@gmail.com
                            <AnimatePresence>
                                {showToolTip && <motion.span
                                    className="bg-[#5C0099] text-center w-28 h-full px-1 inset-9 absolute z-10 m-auto rounded-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ ease: [0, 0.71, 0.2, 1.01] }}
                                    exit={{ scale: 0 }}>

                                    Copied!</motion.span>}
                            </AnimatePresence>
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col mb-7 lg:mr-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>

                        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Social Medias</h1>
                        <p className="mb-1 cursor-pointer" onClick={() => redirectToLink("LinkedIn")}>LinkedIn</p>
                        <p className="mb-1 cursor-pointer" onClick={() => redirectToLink("Facebook")}>Facebook</p>
                        <p className="cursor-pointer" onClick={() => redirectToLink("Twitter")}>Twitter</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col mb-7 lg:mr-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 1,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>

                        <h1 className="text-2xl lg:text-3xl font-bold mb-2 cursor-pointer">Others</h1>
                        <p className="mb-1 cursor-pointer" onClick={() => redirectToLink("Github")}>Github</p>
                        <p className="cursor-pointer" onClick={() => redirectToLink("Discord")}>Discord</p>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Contacts