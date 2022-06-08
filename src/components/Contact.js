import { motion } from "framer-motion";
import "../styles/Contact.css";
function Contact(){

    return(
    <motion.div className="contact-container" 
        initial={{x:300, opacity:0}} 
        animate={{x:0, opacity:1}} 
        exit={{x: window.innerWidth, opacity:1, transition:{duration: 0.3}}}>
        <div>Email:</div>
        <div className="info">freenut12345@gmail.com</div>
        <div>Phone Number:</div>
        <div className="info">111-111-5555</div>
        <div>Address:</div>
        <div className="info">11111 onetoone Dr. onetoone ON 11111</div>
        <iframe  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.978607233969!2d-95.69154216633612!3d29.69275971707631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640dfb34c496cc1%3A0x292afa42b355cebe!2sTaco%20Bell!5e0!3m2!1sen!2sus!4v1649058829451!5m2!1sen!2sus"></iframe>

    </motion.div>
    )
};

export default Contact;