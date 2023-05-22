import Customers from '@/components/client/Customers/Customers.client';
import { ReactQueryHydrate } from '@/components/client/ReactQueryHydrate/ReactQueryHydrate';
import getQueryClient from '@/lib/getQueryClient';
import { getCustomersQueryFn } from '@/queryFns/customersQueryFns';
import { dehydrate } from '@tanstack/react-query';

export default async function CustomerPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['customers'], getCustomersQueryFn);
  const dehydratedState = dehydrate(queryClient);

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Customers />
    </ReactQueryHydrate>
  );
}
