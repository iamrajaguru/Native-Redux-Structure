import React,{ Component } from "react";
import { View ,TextInput, Text,TouchableOpacity,ImageBackground} from "react-native";
import styles from '../styles/index'

class Login extends Component {
    render()
    {
        return(
            <View>
                <View>
                    <Text>Email</Text>
                    <TextInput 
                    style={styles.TextInputStyle}
                    value={this.props.username}
                    onChangeText={e=>this.props.updateUser('username',e)}/>
                    <Text>Password</Text>
                    <TextInput value={this.props.password}
                    onChangeText={e=>this.props.updateUser('password',e)}/>
                </View>
            </View>
        )
    }
}
export default Login;