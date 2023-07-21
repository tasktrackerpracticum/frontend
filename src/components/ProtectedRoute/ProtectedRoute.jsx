import { Route, Redirect } from "react-router-dom";
import { SIGN_IN } from '../../constatnts/constants.js';
import { reactElement, boolType } from '../../constatnts/prop-types';

function ProtectedRoute({ components, isLoggedIn }) {
  return <Route>{isLoggedIn ? components : <Redirect to={SIGN_IN} />}</Route>;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  components: reactElement,
  isLoggedIn: boolType
}
