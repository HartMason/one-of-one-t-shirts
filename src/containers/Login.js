import { connect } from "react-redux";
import Login from "../components/Login";
import { login, fetchLogin } from "../redux/actions"

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = (dispatch) => {
  return { 
    login: (user) => dispatch(login(user)), 
    fetchLogin: (newUser) => dispatch(fetchLogin(newUser))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);