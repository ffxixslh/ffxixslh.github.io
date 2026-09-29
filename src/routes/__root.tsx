import { createRootRoute, Outlet } from '@tanstack/react-router'
import { SiteLayout } from '../layouts/SiteLayout'

const RootLayout = () => (
  <SiteLayout>
    <Outlet />
  </SiteLayout>
)

export const Route = createRootRoute({ component: RootLayout })