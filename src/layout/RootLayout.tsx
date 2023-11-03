import { Outlet } from 'react-router-dom';
import NavBar from '../features/NavBar';

export default function RootLayout() {
  return (
    <div className="flex flex-col containt-fluid align-center justify-center w-full">
      <NavBar />
      <Outlet />
    </div>
  );
}
