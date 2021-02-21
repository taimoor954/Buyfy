import { connect } from 'react-redux';
import {googleSignin} from '../../Redux/Authentication/authActions'
const GooglesigninBtn = ({googleSignin}) => {

    return (
        <div>
            <h1>Google sign in </h1>
            <button onClick={googleSignin}>Sign In with Google</button>
        </div>
    )
}
var actions = {
googleSignin
}
export default connect(null, actions)(GooglesigninBtn)
