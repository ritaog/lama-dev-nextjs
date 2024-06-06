import Image from 'next/image';
import Link from 'next/link';
import styles from './postcard.module.css';

const PostCard = ({ post }) => {
  const { title, desc, img, slug } = post;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>{img && <Image src={img} alt="" fill className={styles.img} />}</div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{desc}</p>
        <Link className={styles.link} href={`/blog/${slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
