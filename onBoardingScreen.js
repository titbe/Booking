import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
  } from 'react-native';
export const OnboardingScreen = () => {
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        setShowRealApp(true);
    };

    const onSkip = () => {
        setShowRealApp(true);
    };
    const RenderItem = ({item}) =>{
        return(
            <View style={{
                flex:1,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                justifyContent:'center',
                
            }}>
                <Image style={styles.introImageStyle} source={item.image} />
                <Text style={styles.introTitleStyle}>{item.title}</Text>
                <Text style={styles.introTextStyle}>{item.text}</Text>

            </View>
        );
    };
    return(
        <>
            {showRealApp ?(
                <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                  <Text style={styles.titleStyle}>
                    React Native App Intro Slider using AppIntroSlider
                  </Text>
                  <Text style={styles.paragraphStyle}>
                    This will be your screen when you click Skip from any slide or
                    Done button at last
                  </Text>
                  <Button
                    title="Show Intro Slider again"
                    onPress={() => setShowRealApp(false)}
                  />
                </View>
              </SafeAreaView>
            ) :(
                <AppIntroSlider
                    data={slides}
                    renderItem={RenderItem}
                    onDone={onDone}
                    showSkipButton={true}
                    onSkip={onSkip}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 100,
    height: 100,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    paddingTop: 20,
  },
});

const slides =[
    {
        key: 's1',
        text: 'Welcome to our restaurant app! Log in and check  out our delicious food.',
        title: 'Browse  Food',
        image: require('./iconOnboarding/icons8-restaurant-menu-101.png'),
        backgroundColor: '#5EA33A',
      },
      {
        key: 's2',
        text: 'Hungry? Order food in just a few clicks and we’ll take care of you..',
        title: 'Order Food',
        image: require('./iconOnboarding/icons8-delivery-500.png'),

        backgroundColor: '#5EA33A',
      },
      {
        key: 's3',
        text: 'Book a table in advance to avoid waiting in line',
        title: 'Make Reservations',
        image: require('./iconOnboarding/noun_Calendar_2442157.png'),

        backgroundColor: '#5EA33A',
      },
      {
        key: 's4',
        text: 'Quickly find food items you like the most',
        title: 'Quick Search',
        image: require('./iconOnboarding/noun_Binoculars_1107295.png'),

        backgroundColor: '#5EA33A',
      },
      {
        key: 's5',
        text: 'We know you’re busy, so you can pay with your phone in just one click',
        title: 'Apple Pay',
        image: require('./iconOnboarding/noun_mac_2076879.png'),
        backgroundColor: '#5EA33A',
      },     
];