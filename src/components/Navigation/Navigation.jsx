import { useLocation, Link } from 'react-router-dom';

export default function Navigation({ router, children }) {
  const location = useLocation();
  return (
    <>
      <Link to={{ pathname: `${router}`, state: { from: location } }}>
        <div>{children}</div>
      </Link>
    </>
  );
}