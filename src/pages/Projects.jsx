import Header from '../components/Header.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import AnimatedPage from '../components/AnimatedPage.jsx';
import { motion } from 'framer-motion';

function Projects() {

    return (
        <AnimatedPage>
            <div className="flex justify-center font-inter">


                <div className="flex justify-start">

                    <div className="overflow-hidden">
                        <motion.div className="py-2"
                            initial={{ x: -400 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            <Header>Projects</Header>
                        </motion.div>
                    </div>


                </div>
            </div>
        </AnimatedPage>
    )
}

export default Projects