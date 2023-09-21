"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { firstlinks } from "./navLinks";
import styles from "./styles/navbar.module.css";
import { colors } from "@/app/styles";
import CustomButton from "../CustomButton";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="md:py-[4.1875rem] md:px-[8rem] md:flex md:flex-row md:items-center md:justify-between" style={{background:colors.mainBground}}>
      <span className={styles.logo}>
        get<span className={styles.logo2}>linked</span>
      </span>
      <div className="flex flex-row items-center gap-[3.5rem]">
        {firstlinks.map((nav, index) => (
          <Link href={nav.link} key={index} className="px-[30px]">
            <p
              className={`${
                router.pathname === nav.link ? styles.gradient : colors.white
              } ${styles.navLink}`}
            >
              {nav.text}
            </p>
          </Link>
        ))}
        <CustomButton text={'Register'} color={colors.white} fontSize={16} className={styles.buttonStyles}/>
      </div>
    </div>
  );
};

export default NavBar;
