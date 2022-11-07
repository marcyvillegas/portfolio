import Header from '../components/Header.jsx';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


function Home() {

    // STATE
    const [buttonText, setButtonText] = useState(false);

    // FUNCTION
    const copyText = () => {

        navigator.clipboard.writeText("marcyvillegas17@gmail.com")
        setButtonText(true);
    }

    useEffect(() => {

        if (!buttonText) return

        const timer = setTimeout(() => {
            setButtonText(false);
        }, 2000);

        return () => clearTimeout(timer);

    }, [buttonText]);

    return (
        <>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center">

                <img src="/src/assets/portrait.svg" className="w-72 lg:w-auto"></img>

                <div className="flex flex-col w-3/4 lg:w-2/4 items-center lg:items-start lg:justify-center mt-5 lg:mt-0">
                    <div>
                        <Header>Marcy Claire Villegas</Header>
                    </div>

                    <div className="lg:break-words mt-6">
                        <p className="text-base sm:text-xl lg:text-2xl font-bold text-white text-center lg:text-left">I am a <span className="text-[#FFD500]">front-end developer</span> based in  Batangas, Phillipines. I have also developed fullstack web apps using MERN.</p>
                    </div>

                    <div className="lg:break-words mt-6">
                        <p className="text-base sm:text-xl lg:text-2xl font-bold text-white text-center lg:text-left">I am passionate about responsive web design and UX. I also love creating music and learning about web game development.</p>
                    </div>

                    <div className="mt-6 mb-6 flex  justify-center lg:justify-end">

                        <motion.button className="bg-[#5C0099] w-52 mr-4 p-3 rounded-md text-white font-bold"
                            whileTap={{ scale: 0.95 }}
                            onClick={copyText}>{buttonText ? "Copied!" : "Copy my email address"}</motion.button>

                        <motion.button className="outline outline-white outline-1 p-3 rounded-md text-white font-bold"
                            whileTap={{ scale: 0.95 }}>Resume</motion.button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home