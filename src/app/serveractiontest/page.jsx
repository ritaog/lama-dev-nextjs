import { addPost, deletePost } from '@/lib/action';

export const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="desc" name="desc"></input>
        <input type="text" placeholder="slug" name="slug"></input>
        <input type="text" placeholder="userId" name="userId"></input>
        <button>Create Post</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="PostId" name="id"></input>
        <button>Delete Post</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
