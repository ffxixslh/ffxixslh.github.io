import type { ReactNode } from 'react';

type PageMainProps = {
  children: ReactNode
}

export function PageMain({ children }: PageMainProps) {
  return (
    <main className="mx-auto flex min-h-full min-w-0 w-[calc(100%-2.5rem)] max-w-5xl flex-col py-16 sm:w-[calc(100%-3rem)] sm:py-24">
      {children}
    </main>
  );
}
