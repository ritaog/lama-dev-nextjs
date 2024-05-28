import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/23653089/pexels-photo-23653089/free-photo-of-view-from-the-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Title</h2>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/23653089/pexels-photo-23653089/free-photo-of-view-from-the-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, fuga. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit, voluptatum!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
