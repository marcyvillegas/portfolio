import { motion } from 'framer-motion';

function ProjectCard({ data }) {

    return (
        <motion.div key={data.id} className="text-white flex flex-col lg:flex-row items-center lg:items-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 0.7,
                delay: 0.5 * data.id,
                ease: [0, 0.71, 0.2, 1.01]
            }}>

            <img src={data.img} className="w-3/5 lg:w-2/4" />

            <div className="break-words px-5 text-center lg:text-start">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 underline decoration-[#8E2CCE] decoration-4 lg:text-left">{data.name}</h2>
                <p className="mb-3 px-10 lg:px-0">{data.description}</p>
                <p className="mb-3"><span>Tech stack: </span>
                    <span>{data.tech_stack}</span>
                </p>
                <div className="flex justify-center lg:justify-start">
                    {data?.live_site &&
                        <button className="cursor-pointer outline outline-white outline-1 mb-2 p-1 px-2 rounded-lg mr-3" onClick={() => window.open(data?.live_site)}>Live Site</button>}
                    {data?.source_code &&
                        <button className="cursor-pointer outline outline-white outline-1 mb-2 p-1 px-2 rounded-lg" onClick={() => window.open(data?.source_code)}>Github Repo</button>}
                    {data?.video_demo &&
                        <button className="cursor-pointer outline outline-white outline-1 mb-2 p-1 px-2 rounded-lg" onClick={() => window.open(data?.video_demo)}>Video Demo</button>}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard