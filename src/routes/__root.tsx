import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router';
import { SiteLayout } from '../layouts/SiteLayout';

const RootLayout = () => (
  <SiteLayout>
    <HeadContent />
    <Outlet />
  </SiteLayout>
);

export const Route = createRootRoute({
  component: RootLayout,
  head: () => ({
    meta: [
      {
        name: 'description',
        content: "ffxixslh's Blog",
      },
      {
        title: "ffxixslh's Blog",
      },
    ],
  }),
});
