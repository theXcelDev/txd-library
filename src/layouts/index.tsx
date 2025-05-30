import { Outlet } from 'react-router-dom';
import Navbar from 'txd-library/components/Navbar';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
