import Header from '../components/Header.jsx';
import ProjectCard from '../components/ProjectCard';
import AnimatedPage from '../components/AnimatedPage';
import BackToTopButton from '../components/BackToTopButton';
import { motion } from 'framer-motion';
import projects from '../projects_info'

function Projects() {

    return (
        <AnimatedPage>

            <BackToTopButton />

            <div className="flex justify-center font-inter lg:px-40">

                <div className="flex justify-center flex-col items-center lg:items-start">

                    <div className="overflow-hidden justify-center mb-2 lg:mb-5">
                        <motion.div className="py-2 lg:ml-7"
                            initial={{ x: -400 }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                            <Header>Projects</Header>
                        </motion.div>
                    </div>

                    <div>
                        {projects
                            .map(item => (
                                <ProjectCard key={item.id} data={item} />
                            ))}
                    </div>

                </div>
            </div>
        </AnimatedPage>
    )
}

export default Projects