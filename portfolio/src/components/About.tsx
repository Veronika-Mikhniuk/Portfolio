import React from 'react'
import { motion } from 'framer-motion';
import '@/styles/about.scss'

export function About() {
    return (
        <motion.section
            className="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
        >
            <div className='container'>
                <motion.p
                    className="about__greeting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0, duration: 0.5 }}
                >
                    Hello, I’m <span className="about__name">Veronika</span>
                </motion.p>
                <motion.div
                    className="about__role"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.2 }}
                >
                    <motion.h1
                        className="about__role-part1"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0 }}
                    >
                        Frontend
                    </motion.h1>
                    <motion.h1
                        className="about__role-part2"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0 }}
                    >
                        Developer
                    </motion.h1>
                </motion.div>
                <motion.div

                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.button
                        className="about__projects-button"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3, ease: "easeInOut", delay: 0 }}
                    >
                        <span className="about__projects-button-text">Projects</span>
                        <div className="about__projects-button-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" stroke="currentColor" stroke-width="1" data-name="Right" /></svg>
                        </div>
                    </motion.button>
                </motion.div>
                <motion.div
                    className="about__content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <motion.p
                        className="about__content-part1"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                    >
                        I’m a beginner developer just starting my journey in the world of coding. I’m passionate about <span className="about__content_italic">web development</span> and enjoy exploring <span className="about__content_italic">creative solutions</span>.
                    </motion.p>
                    <motion.p
                        className="about__content-part2"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                    >
                        I’m currently diving into tools like <span className="about__content_italic">React and SCSS</span>, learning how to build <span className="about__content_italic">
                            responsive layouts</span> and clean code. Though I’m new, I’m dedicated to improving my skills every day,
                        experimenting with new ideas, and creating <span className="about__content_italic">simple yet effective</span> web experiences.
                        My goal is to grow into a confident developer, collaborating on projects and contributing to the tech community.
                    </motion.p>
                </motion.div>
            </div>

        </motion.section >
    )
}