import PostCard from '@/components/postcard/postCard';
import styles from './blog.module.css';
//import { getPosts } from '@/lib/data';

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' }, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('something went wrong!');
  }

  const data = await res.json();
  return data;
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API (Use data from a third party API or from MongoDB set up.)
  const posts = await getData();

  // FETCH DATA WITHOUT AN API (Checkout data.js file )
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
