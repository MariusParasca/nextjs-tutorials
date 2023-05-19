'use client';

import { getPostsQueryFn } from '@/queryFns/postsQueryFns';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Post as PostType } from '@/types';
import { Post } from './Post.client';

export const Posts = () => {
  const { data } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: getPostsQueryFn,
  });

  if (!data) return <div>Not found</div>;

  return (
    <div className='divide-y'>
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
