import styles from './postUser.module.css';
import { getUser } from '@/lib/data';
import Image from 'next/image';

//  FETCH DATA WITH AN API
// const getUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('something went wrong!');
//   }

//   const user = await res.json();
//   return user;
// };

const PostUser = async ({ userId, img }) => {
  //FETCH DATA WITH AN API
  //   const { username } = await getUser(userId);

  //FETCH DATA WITHOUT AN API
  const { username } = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image src={img ? img : '/noavatar.png'} alt="" width={50} height={50} className={styles.avatar} />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{username}</span>
      </div>
    </div>
  );
};

export default PostUser;
