import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile-pic.jpeg"
          alt="profile-pic"
          width={300}
          height={300}
        />
      </div>
      <h1>Hey, I'm Keerty</h1>
      <p>
        Discover the world of web development with our tech blog. Stay updated
        on industry trends and unleash your potential.
      </p>
    </section>
  );
};

export default Hero;
