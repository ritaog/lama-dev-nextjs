import Image from 'next/image';
import Link from 'next/link';
import styles from './postcard.module.css';

const PostCard = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/23653089/pexels-photo-23653089/free-photo-of-view-from-the-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{body}</p>
        <Link className={styles.link} href={`/blog/${id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
