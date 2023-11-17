import React from "react";
import './BestProperties.css'
import { motion } from "framer-motion";
const BestProperties = ({ imgUrl, name, price, path }) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <motion.h1 className="mx-auto text-center"
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.2 }}>
      <a href={`/property/${path}`}>
        <h1
          className="font-poppins-500 text-center text-4xl p-4"
          style={{ color: "#1f1f1f", fontSize: "42px" }}
        >
          {name}
        </h1>
      </a>
      <a href={`/property/${path}`}>
        <img src={imgUrl} alt="img of property" className="img-best"/>
      </a>
      <button
        className="w-full font-poppins-400 text-lg h-10 mt-4"
        style={{ backgroundColor: "#1f1f1f", color: "#FFFFFF" }}
      >
        Unidades desde {price}
      </button>
    </motion.h1>
  );
};

export default BestProperties;
