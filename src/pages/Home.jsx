import Header from '../components/Header';
import AnimatedPage from '../components/AnimatedPage';
import BackToTopButton from '../components/BackToTopButton';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {

    // STATE
    const [buttonText, setButtonText] = useState(false);

    // FUNCTION
    const copyText = () => {

        navigator.clipboard.writeText("marcyvillegas17@gmail.com")
        setButtonText(true);
    }

    // USE EFFECTS
    useEffect(() => {

        if (!buttonText) return

        const timer = setTimeout(() => {
            setButtonText(false);
        }, 2000);

        return () => clearTimeout(timer);

    }, [buttonText]);

    return (
        <AnimatedPage>
            
            <BackToTopButton />

            <div className="flex flex-col lg:flex-row-reverse items-center justify-center font-inter">

                <>
                    <motion.img src="/portrait.svg"
                        className="w-72 lg:w-auto"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}></motion.img>

                    <div className="flex flex-col w-3/4 lg:w-2/4 items-center lg:items-start lg:justify-center mt-5 lg:mt-0">

                        <div className="overflow-hidden">
                            <motion.div className="py-2"
                                initial={{ x: -800 }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.4,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <Header>Marcy Claire Villegas</Header>
                            </motion.div>
                        </div>

                        <div className="lg:break-words mt-5 overflow-hidden">
                            <motion.div
                                initial={{ x: -800 }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.6,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <p className="text-base sm:text-xl lg:text-2xl font-bold text-white text-center lg:text-left">I am a <span className="text-[#FFD500]">front-end developer</span> based in  Batangas, Phillipines. I am currently studying more about MERN stack and NextJS.</p>
                            </motion.div>
                        </div>

                        <div className="lg:break-words mt-5 overflow-hidden">
                            <motion.div
                                initial={{ x: -800 }}
                                animate={{ x: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.8,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <p className="text-base sm:text-xl lg:text-2xl font-bold text-white text-center lg:text-left">I am passionate about responsive web design and UX. I also love creating music and learning about web game development.</p>
                            </motion.div>
                        </div>

                        <div className="mt-5 pl-0 p-2 mb-6 flex  justify-center lg:justify-end overflow-hidden">

                            <motion.div
                                initial={{ y: -500 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 1,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                                <motion.button className="bg-[#5C0099] w-52 mr-4 p-3 rounded-md text-white font-bold"
                                    whileTap={{ scale: 0.95 }}
                                    onClick={copyText}>{buttonText ? "Copied!" : "Copy my email address"}</motion.button>
                            </motion.div>

                            <motion.div
                                initial={{ y: -500 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 1.2,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>

                                <Link to="/Marcy_Claire_Villegas_Resume.pdf"  target="_blank" download>
                                    <motion.button className="outline outline-white outline-1 p-3 rounded-md text-white font-bold"
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => console.log}>
                                        Resume</motion.button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </>

            </div>
        </AnimatedPage >
    )
}

export default Home