import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput,StyleSheet, View, Button, Text } from "react-native";
import { useState } from "react";


export default function LoginScreen ({navigation}) {
    const [email, setEmail] = useState('');
    const[password,setPassword] = useState('');
    const login = async () => {
        try {
      
            const emailData = JSON.parse(await AsyncStorage.getItem('key_email'));
            const passwordData = JSON.parse(await AsyncStorage.getItem('key_password'));

            if (emailData === email && passwordData === password) {
              console.log('Đăng nhập thành công!');
              alert("Đăng nhập thành công!")
            } else {
              console.log('Email hoặc mật khẩu không đúng.');
              alert( "Email hoặc mật khẩu không đúng.")
            }
        } catch (error) {
          console.error('Lỗi khi đăng nhập:', error);
        }
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Email or phone number" onChangeText={(text)=>setEmail(text)}/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
            <View style={styles.btn1}>
                <Button title="Login" color={"#5EA33A"} onPress={login}/>
            </View>
            <Text style={styles.text}>OR</Text>
            <View style={styles.btn2}>
                <Button title="FAcebook Login" color={"blue"} onPress={()=> navigation.navigate('Success')}/>
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
        paddingVertical: 20, 
        paddingHorizontal: 60,
        marginHorizontal: 30,
        marginTop:20,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius: 999
    },
    btn1:{
        // paddingVertical: 20, 
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 80,
        overflow: "hidden"
    },
    text:{
        textAlign: "center",
        marginVertical:40,
        fontSize:17
    },
    btn2:{
        // paddingVertical: 20, 
        marginTop: 20,
        marginHorizontal: 60,
        borderRadius: 80,
        overflow: "hidden"
    },
});