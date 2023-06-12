import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="" />
      </div>
    </div>
  );
};

export default Home;
