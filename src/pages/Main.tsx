import SideNav from '../features/SideNav';

export default function Main() {
  return (
    <main className="main">
      <div className="sidebar">
        <SideNav />
      </div>
      <div className="content">Some content</div>
    </main>
  );
}
