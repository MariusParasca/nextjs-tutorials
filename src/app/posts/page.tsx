import { Posts } from '@/components/client/Posts/Posts.client';
import { ReactQueryHydrate } from '@/components/client/ReactQueryHydrate/ReactQueryHydrate';
import getQueryClient from '@/lib/getQueryClient';
import { getPostsQueryFn } from '@/queryFns/postsQueryFns';
import { dehydrate } from '@tanstack/react-query';

export default async function PostsPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(['posts'], getPostsQueryFn);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Posts />
    </ReactQueryHydrate>
  );
}
