import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';

function App() {

  const [themeToggle, setThemeToggle] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const handleThemeToggle = () => {
    setThemeToggle(!themeToggle);
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeToggle));
  }, [themeToggle]);

  return (
    <div className={`min-h-screen flex flex-col items-center transition-color duration-700 ease-in-out ${themeToggle ? "bg-light text-dark" : "bg-dark text-white"}`}>
      <Navbar themeToggle={themeToggle} handleThemeToggle={handleThemeToggle} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
