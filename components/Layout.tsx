import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showHomeButton?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showHomeButton = true }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen overflow-hidden relative flex flex-col font-sans">
      {/* Clean White Background */}
      <div className="fixed inset-0 z-[-1] bg-white"></div>

      <header className="px-6 py-6 flex items-center justify-between sticky top-0 z-10 bg-white/90 backdrop-blur-md">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">슬미네 사용법</h1>
        {showHomeButton && (
          <Link to="/" className="p-2.5 rounded-full bg-gray-50 shadow-sm border border-gray-100 hover:bg-gray-100 transition-all text-gray-700">
            <Home size={20} />
          </Link>
        )}
      </header>
      <main className="flex-1 flex flex-col relative px-4">
        {children}
      </main>
    </div>
  );
};