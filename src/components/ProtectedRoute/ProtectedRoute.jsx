import { Navigate } from "react-router-dom";
import { SIGN_IN } from '../../constatnts/constants.js';
import { reactElement, stringType } from '../../constatnts/prop-types';

function ProtectedRoute({ components, isLoggedIn }) {
  return isLoggedIn ? components : <Navigate to={SIGN_IN} />;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  components: reactElement,
  isLoggedIn: stringType
}
