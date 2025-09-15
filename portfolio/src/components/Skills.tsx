import React from 'react';
import { motion } from 'framer-motion'
import '@/styles/skills.scss'
import { skillsData } from '@/data/skillsData'
import { joinSkills } from '@/utils/formatSkills';

//imgs
import gradientSpot from '../assets/imgs/spot.png'
import vectorFigure1 from '../assets/imgs/vector1.svg'
import vectorFigure2 from '../assets/imgs/vector2.svg'
import vectorFigure3 from '../assets/imgs/vector3.svg'

export function Skills() {
    return (
        <motion.section
            className="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="skills__content">
                    <motion.div
                        className="skills__list"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 1 }}>
                        <motion.h2
                            className="skills__title"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            .../Skills...
                        </motion.h2>

                        {
                            skillsData.map((block, index) => (
                                <motion.div
                                    key={index + 1}
                                    className="skills__item"
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
                                >
                                    <h3 className="skills__type">{block.type}</h3>
                                    <p className="skills__text">{joinSkills(block.skills)}</p>
                                </motion.div>
                            )
                            )
                        }
                    </motion.div>

                    <motion.div
                        className="skills__visual visual"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}>
                        <img src={gradientSpot} alt="spot" className='visual__accent-spot' />
                        <img src={vectorFigure1} alt="vector1" className='visual__vector1' />
                        <img src={vectorFigure2} alt="vector2" className='visual__vector2' />
                        <img src={vectorFigure3} alt="vector3" className='visual__vector3' />
                    </motion.div>
                </div>
            </div>
        </motion.section >
    )
}