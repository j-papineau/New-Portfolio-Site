import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const Skills = (props: Props) => {
  return (
    <div className=' flex h-[120vh] relative flex-col text-center md:text-left xl:flex-row max-w-[1000px]
    min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
       <h3 className='top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>Other Skills and Knowledge</h3>
    
        <h3 className='top-36 uppercase tracking-[3px] text-slate-400 text-sm pb-10'>Technologies Used and Practical Skills</h3>
    <div className='text-xl'>
        <ul className='list-disc text-gray-300'>
            <li className='tracking-widest'>Machine Learning w/ Python
            <ul className='list-disc text-sm ml-10'>
                <li>Building models with YOLOv8</li>
                <li>Using RoboFlow and Similar Annotation tools to create data sets (YAML)</li>
                <li>Data Validation and Testing with data suites</li>
            </ul>
            </li>
            <li>Python App Development</li>
            <ul className='list-disc text-sm ml-10'>
                <li>TKinter</li>
                <li>PyQt5 and 6</li>
            </ul>
            <li className='tracking-widest'>Computer Vision w/ Python and C++</li>
            <ul className='list-disc text-sm ml-10'>
                <li>Libraries used: Mediapipe, OpenCV (1.0 and 2.0), MUL-CV, PyCV</li>
            </ul>
            <li className='tracking-widest'>Embedded Programs</li>
            <ul className='list-disc text-sm ml-10'>
                <li>Arduino (Mega, Uno R3, Nano)</li>
                <li>Espressif (ESP32s, ESP32-Feather, ESP8266)</li>
            </ul>
            <li className='tracking-widest'>IoT Projects</li>
            <ul className='list-disc text-sm ml-10'>
                <li>MQTT Broker Use (HiveMQ, AWS Core, Azure IoT)</li>
                <li>Web Server/Socket Command and Control over HTTP/HTTPS</li>
            </ul>
            <li className='tracking-widest'>Hobbyist Level Robotics</li>
            <li className='tracking-widest'>Apple Swift Development</li>
            <li className='tracking-widest'>Android SDK Development</li>
            <li className='tracking-widest'>Version Control Systems</li>
            <ul className='list-disc text-sm ml-10'>
                <li>git (public [github] and private)</li>
                <li>Apache</li>
            </ul>
            <li className='tracking-widest'>Electronics</li>
            <ul className='list-disc text-sm ml-10'>
                <li>Use of Electronics Tools (multimeters, oscilloscopes)</li>
                <li>Advanced Soldering</li>
                <li>PCB design and Gerber Files</li>
                <li>Perfboard and Breadboard Prototyping</li>
                <li>Circuit Design</li>
                <li>Basic IC's (Like Shift Registers and Motor Controllers)</li>
            </ul>
            <li className='tracking-widest'>Software Design Principles</li>
            <ul className='list-disc text-sm ml-10'>
                <li>SCRUM</li>
                <li>XP</li>
                <li>Diagramming and UML</li>
                <li>Professional Documentation</li>
            </ul>
            <li className='tracking-widest'>Strong Teamworking</li>
            <li className='tracking-widest'>Effective Git Scheduling</li>
            <li className='tracking-widest'>Constant Ability to Learn and Implement New Technologies</li>
        </ul>
        
    </div>
    </div>
  )
}

export default Skills