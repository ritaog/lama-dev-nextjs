import Image from 'next/image';
import { Suspense } from 'react';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('something went wrong!');
//   }

//   const data = await res.json();
//   return data;
// };

const SinglePostPage = async ({ params }) => {
  // FETCH DATA WITH AN API
  //const post = await getData(params.slug);

  //const { userId, title, body } = post;

  // FETCH DATA WITHOUT AN API
  const { title, body, userId } = await getPost(params.slug);

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
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/23653089/pexels-photo-23653089/free-photo-of-view-from-the-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<p>Loading...</p>}>
            <PostUser userId={userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
