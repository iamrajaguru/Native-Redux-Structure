import { connect } from 'react-redux';
import Login from '../components/Login';
import {updateUser} from '../actions/Login';


const mapStateToProps = state =>({

    username:state.Login.username,
    password:state.Login.password,
});

const mapDispatchToProps = dispatch => ({
    updateUser:(username,value)=> dispatch(updateUser(username,value)),

});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);