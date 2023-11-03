import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found-page cyan">
      <h1 className="not-found">Not Found</h1>
      <Link to="/">Go to the Home Page</Link>
    </section>
  );
}
