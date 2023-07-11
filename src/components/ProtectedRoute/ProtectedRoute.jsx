import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ components, isLoggedIn }) {
  return <Route>{isLoggedIn ? components : <Redirect to="/login" />}</Route>;
}

export default ProtectedRoute;
