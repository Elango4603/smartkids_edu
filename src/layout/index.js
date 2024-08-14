import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavSection from './NavSection';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full fixed top-0 z-50">
        <NavSection />
      </header>

      <main className="flex-grow mt-[90px] w-full">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-900 w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
