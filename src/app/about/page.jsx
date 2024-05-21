import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver, and better.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae
          sequi corrupti cupiditate eos iste ipsam voluptatum hic incidunt.
          Perspiciatis eveniet similique reprehenderit voluptas doloribus est
          dolorem iure voluptatem nulla.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2>234K+</h2>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h2>5K+</h2>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;

//How to add Image in NextJS
{
  /* <div className={styles.imgContainer}>

 //////**This is how to image from public folder//////
        <Image src="/about.png" alt="about page image" fill />

        //////**This is how to add a remote image//////

        <Image
          src="https://images.pexels.com/photos/17395579/pexels-photo-17395579/free-photo-of-shiny-water-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
        />
      </div> */
}
