
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    // If no saved theme, check for system preference
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    
    return savedTheme;
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    
    // Update the HTML element classes for the theme
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = 'hsl(240, 10%, 3.9%)'; // Dark background
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      document.body.style.backgroundColor = 'hsl(0, 0%, 100%)'; // Light background
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
};
