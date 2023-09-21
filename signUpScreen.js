import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput,StyleSheet, View, Button, Text } from "react-native";
// import  signUp, { setText }  from "./DataFuntion";

const signUp = async(email, password) =>{
    try {
        const userData = { email, password };
        await AsyncStorage.setItem('key_userData', JSON.stringify(userData));
        console.log('Đăng ký thành công!');
        alert("Đăng kí thành công")
        console.log(email, password)
    } catch (error) {
        console.error('Lỗi khi đăng ký:', error);
    }
};
export default function SignUpScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create new accout</Text>
            <TextInput style={styles.input} placeholder="Full Name"/>
            <TextInput style={styles.input} placeholder="Phone Number"/>
            <TextInput style={styles.input} placeholder="Email Address" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <View style={styles.btn1}>
                <Button title="Sign Up" color={"blue"} onPress={()=>{signUp("hieu", "hieu")}}/>
            </View>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "white",
    },
    title:{
        fontSize:20,
        marginLeft:20,
        color:'#5EA33A'
    },
    input:{
        color:'gray',
        fontSize:17,
        backgroundColor: "white",
        paddingVertical:7, 
        paddingLeft:10,
        marginHorizontal: 30,
        marginTop:20,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius: 999
    },
    btn1:{
        // paddingVertical: 20, 
        marginTop: 40,
        marginHorizontal: 60,
        borderRadius: 80,
        overflow: "hidden"
    },
});