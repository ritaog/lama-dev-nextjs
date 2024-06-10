'use server';

import { connectToDb } from './utils';
import { Post } from './models';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addPost = async (formData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  try {
    connectToDb();
    const newPost = new Post(rawFormData);
    await newPost.save();
    console.log('saved to DB!');
    revalidatePath('/blog');
  } catch (e) {
    console.log(e);
    throw new Error('Something went wrong!');
  } finally {
    redirect('/blog');
  }

  //   const rawFormData2 = {
  //     title: formData.get('title'),
  //     desc: formData.get('desc'),
  //     slug: formData.get('slug'),
  //     userId: formData.get('userId'),
  //   };
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData.entries());

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log('deleted from DB!');
    revalidatePath('/blog');
  } catch (e) {
    console.log(e);
    throw new Error('Something went wrong!');
  } finally {
    redirect('/blog');
  }

  //   const rawFormData2 = {
  //     title: formData.get('title'),
  //     desc: formData.get('desc'),
  //     slug: formData.get('slug'),
  //     userId: formData.get('userId'),
  //   };
};
