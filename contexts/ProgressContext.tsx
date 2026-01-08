import React, { createContext, useContext, useState, useEffect } from 'react';
import { GUIDE_STEPS } from '../constants';

interface ProgressContextType {
  visitedSteps: string[];
  markAsVisited: (id: string) => void;
  isComplete: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visitedSteps, setVisitedSteps] = useState<string[]>([]);

  const markAsVisited = (id: string) => {
    setVisitedSteps(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const isComplete = GUIDE_STEPS.every(step => visitedSteps.includes(step.id));

  return (
    <ProgressContext.Provider value={{ visitedSteps, markAsVisited, isComplete }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
