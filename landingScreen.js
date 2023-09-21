import { Image, Text, View ,Button, StyleSheet} from "react-native";
export default function LandingScreen ({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.ImageStyle}>
                <Image  source={require('./iconOnboarding/icons8-restaurant-menu-101.png')}/>
            </View>
            <Text style={styles.TitleStyle}>Welcome to our restaurant</Text>
            <Text style={styles.TextStyle}>Order food and make reservations with one click.</Text>
            <View style={styles.btn1}>
                <Button title="Log In" color= {"#5EA33A"} onPress={()=> navigation.navigate('Log In')}/>
            </View>
            <View style={styles.btn2}>
                <Button title="Sign Up" color={"blue"} onPress={()=> navigation.navigate('Sign Up')}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor:'skyblue'
    },
    ImageStyle:{
        alignItems:'center'
    },
    TitleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        color:'green'
    },
    TextStyle: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 50
    },
    btn1:{
        marginTop: 50,
        marginHorizontal: 50,
        borderRadius: 80,
        overflow: "hidden"
    },
    btn2:{
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 80,
        overflow: "hidden"
    }
})