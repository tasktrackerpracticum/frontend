import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ components, isLoggedIn }) {
  return (
    <Route>
      {isLoggedIn ? components : <Redirect to='/' />}
    </Route>
  );
}

export default ProtectedRoute; 