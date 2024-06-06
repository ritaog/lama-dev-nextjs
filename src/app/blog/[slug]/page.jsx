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
  const post = await getPost(params.slug);
  const { title, desc, userId, img, createdAt } = post;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={img} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<p>Loading...</p>}>
              <PostUser userId={userId} img={img} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{createdAt.toString().slice(0, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
