import { useState } from "react";
import Ricky from "@/public/images/ricky.jpg";
import Image from "next/image";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import styles from "./about.module.css";

export default function About() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>
            Hi, I&#39;m Meng-Ju Kuo.
            <br />I love to build apps and learn new technologies.
          </h1>
          <p>App is the only thing I can try to make perfect.</p>
          <div className={styles.pastWorkBtn}>
            <a href="#projects">See My Past Work</a>
          </div>
          <div className={styles.socialContainer}>
            <a
              href="https://www.linkedin.com/in/ricky-kuo/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://github.com/RickyUomo"
              target="_blank"
              rel="noreferrer"
              className={styles.socialItem}
            >
              <AiFillGithub />
            </a>

            <a
              href="assets/MengJuKuoCV.pdf"
              target="_blank"
              download="MengJuKuoCV.pdf"
              className={styles.socialItem}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              <BiArchiveIn />
            </a>
            {isHovering ? <span className={styles.cvHover}>CV</span> : ""}
          </div>
        </div>
        <div className={styles.myImgContainer}>
          <Image
            className={styles.myImg}
            alt="Rikcy's photo"
            src={Ricky}
            fill
          />
        </div>
      </div>
    </section>
  );
}
