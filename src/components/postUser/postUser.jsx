import styles from './postUser.module.css';
import { getUser } from '@/lib/data';

//  FETCH DATA WITH AN API
// const getUser = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('something went wrong!');
//   }

//   const user = await res.json();
//   return user;
// };

const PostUser = async ({ userId }) => {
  //FETCH DATA WITH AN API
  //const { name } = await getUser(userId);

  //FETCH DATA WITHOUT AN API
  const { name } = await getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{name}</span>
    </div>
  );
};

export default PostUser;
