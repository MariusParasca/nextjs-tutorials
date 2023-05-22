'use client';

import { QueryClientInstanceProvider, useQueryClientInstance } from '@/context/QueryClientContext.client';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

const AppQueryClientInstanceWrapper = ({ children }: { children: ReactNode }) => {
  const { queryClient } = useQueryClientInstance();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

interface Props {
  children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <QueryClientInstanceProvider>
      <AppQueryClientInstanceWrapper>{children}</AppQueryClientInstanceWrapper>
    </QueryClientInstanceProvider>
  );
};
