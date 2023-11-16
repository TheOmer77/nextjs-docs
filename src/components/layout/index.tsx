'use client';

import { useState } from 'react';

import { Nav } from './Nav';
import { Sidebar } from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <Nav onMenuClick={() => setSidebarOpen(true)} />
    </>
  );
};

export default Layout;
