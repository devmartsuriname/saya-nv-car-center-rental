import React from 'react';
import { Outlet } from 'react-router';
import useGorentContext from './components/context/useGorentContext';
import CustomCursor from './components/elements/CustomCursor';
import VideoPopup from './components/elements/VideoPopup';
import SearchProp from './components/elements/SearchProp';
import SideBar from './components/elements/SideBar';
import MobileNav from './components/elements/MobileNav';
import ScrollToTop from './components/elements/ScrollToTop';

const App: React.FC = () => {
  const { isMobileManu, isSearch } = useGorentContext();

  return (
    <div className={`custom-cursor ${isMobileManu || isSearch ? 'locked' : ''}`}>
      <CustomCursor />
      <Outlet />
      <SearchProp />
      <SideBar />
      <MobileNav />
      <ScrollToTop />
      <VideoPopup />
    </div>
  );
};

export default App;