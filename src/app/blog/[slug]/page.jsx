import Image from 'next/image';
import { Suspense } from 'react';
import styles from './singlePost.module.css';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

//FETCH DATA WITH A THIRD PARTY  API
// const getData = async (slug) => {
//   const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`, { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('something went wrong!');
//   }

//   const data = await res.json();
//   return data;
// };

//DELETE DATA WITH AN API FROM MONGODB
// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: 'no-store' }, { METHOD: 'DELETE' });

//   if (!res.ok) {
//     throw new Error('something went wrong!');
//   }

//   const data = await res.json();
//   return data;
// };

//FETCH DATA WITH AN API FROM MONGODB
const getData = async (slug) => {
  // const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${slug}`, { cache: 'no-store' });
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('something went wrong!');
  }

  const data = await res.json();
  return data;
};

//Generate MetaData dynamically
export const generateMetadata = async ({ params }) => {
  const { title, desc } = await getPost(params.slug);

  return {
    title,
    description: desc,
  };
};

const SinglePostPage = async ({ params }) => {
  // FETCH DATA WITHOUT AN API (Check data.js file)
  //const post = await getPost(params.slug);

  // FETCH DATA WITH AN API (Use data from a third party API or from MongoDB set up.)
  const post = await getData(params.slug);

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
