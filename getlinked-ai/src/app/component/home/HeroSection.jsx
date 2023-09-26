import Image from "next/image";
import React from "react";
import styles from "./styles/heroSection.module.css";
import starGrey from "../../../assets/svg/starGrey.svg";
import underline from "../../../assets/svg/underline.svg";
import boyGlasses from "../../../assets/images/boyGlasses.png";
import lensFlare1 from "../../../assets/images/lensFlare1.svg";
import bulb from "../../../assets/images/bulb.png";
import { FONTFAMILY, colors } from "@/app/styles";

const HeroSection = () => {
  return (
    <main className={styles.mainWrap}>
      <section className="flex flex-row justify-between md:pr-[55px] md:pl-[185px]">
        <span>
          <Image src={starGrey} alt="star" />
        </span>
        <div className={styles.catchPhrase}>
          <span>Igniting a Revolution in HR Innovation </span>
          <span className={styles.underline}>
            <Image src={underline} />
          </span>
        </div>
      </section>
      <section className="flex flex-row md:pl-[8rem] ">
        <div className={styles.blur}>
        {/* <Image
          src={lensFlare1}
          alt="bacgroundBlur"
          className={styles.imageFit}
        /> */}
          <span className={styles.subTexts} style={{fontFamily:FONTFAMILY.bold, }}>
            <span>
              <Image src={bulb} alt="bulb" />
            </span>
            getlinked Tech Hackathon
            <span style={{ color: colors.purple }}> 1.0 </span>
          </span>
          <p className={styles.participate}>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
        <div className="w-6/12">
          <Image src={boyGlasses} alt="boy" />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
