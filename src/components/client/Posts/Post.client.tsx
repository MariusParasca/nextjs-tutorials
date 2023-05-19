'use client';

import { Post as PostType } from '@/types';
import React from 'react';

interface Props {
  post: PostType;
}

export const Post = ({ post }: Props) => {
  return (
    <div className='py-4'>
      <p className='text-2xl font-semibold'>{post.title}</p>
      <p className='mt-2 text-gray-200'>{post.body}</p>
    </div>
  );
};
