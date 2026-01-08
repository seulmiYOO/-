import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { GuideCard } from './components/GuideCard';
import { ProgressProvider } from './contexts/ProgressContext';

function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <div className="antialiased text-gray-800">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/guide/:stepId" element={<GuideCard />} />
          </Routes>
        </div>
      </HashRouter>
    </ProgressProvider>
  );
}

export default App;