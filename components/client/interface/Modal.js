import { motion } from 'framer-motion';

const Modal = () => {
    return (
        <motion.div 
        style={{
            background: 'black',
            width: 200,
            height: 200,
            color: 'white',
            padding: 20,
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer',
            borderRadius: '2%',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        >
            <h1>This is my modal</h1>
        </motion.div>
    );
};

export default Modal;