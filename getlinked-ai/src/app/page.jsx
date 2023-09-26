import React from "react";
import styles from "./styles/rootCss.module.css";
import HeroSection from "./component/home/HeroSection";
import Image from "next/image";
import lensFlare1 from "../assets/images/lensFlare1.svg";
const page = () => {
  return (
    <div className={styles.mainBackground}>
      <div>
        <HeroSection />
        
      </div>
    </div>
  );
};

export default page;
