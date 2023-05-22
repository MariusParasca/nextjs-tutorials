'use client';

import { getPostsQueryFn } from '@/queryFns/postsQueryFns';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { Fragment } from 'react';
import { Post as PostType } from '@/types';
import { Post } from './Post.client';

export const Posts = () => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: getPostsQueryFn,
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  if (!data) return <div>Not found</div>;

  return (
    <div className='divide-y'>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Fragment>
      ))}
      {isFetchingNextPage ? (
        <div>Loading more...</div>
      ) : hasNextPage ? (
        <button onClick={() => fetchNextPage()}>Load More</button>
      ) : null}
    </div>
  );
};
