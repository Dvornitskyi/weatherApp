import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const weatherOptions = {
    Rain:{
        iconName: "rainy",
        gradient: ['#4c669f','#3b5998'],
        subtitle: "Take an umbrella",
    },
    Thunderstorm:{
        iconName: "thunderstorm",
        gradient: ['#314755','#26a0da'],
        subtitle: "Umbrella and rubber boots to help you",
    },
    Drizzle:{
        iconName: "rainy-outline",
        gradient: ['#2193b0','#6dd5ed'],
        subtitle: "Hot tea is waiting for you at home",
    },
    Snow:{
        iconName: "snow",
        gradient: ['#076585','#fff'],
        subtitle: "The more snow...",
    },
    Mist:{
        iconName: "md-cloudy-outline",
        gradient: ['#076585','#fff'],
        subtitle: "Limited visibility",
    },
    Smoke:{
        iconName: "cloudy-sharp",
        gradient: ['#00467F','#A5CC82'],
        subtitle: "Mask, respirator to help you",
    },
    Dust:{
        iconName: "cloudy-sharp",
        gradient: ['#603813','#b29f94'],
        subtitle: "Who forgot to turn off the grinder?",
    },
    Ash:{
        iconName: "ios-partly-sunny-outline",
        gradient: ['#BBD2C5','#BBD2C5'],
        subtitle: "Vesuvius?",
    },
    Squall:{
        iconName: "md-rainy-sharp",
        gradient: ['#536976','#292E49'],
        subtitle: "Don't leave home",
    },
    Tornado:{
        iconName: "cloud-upload-outline",
        gradient: ['#2B32B2','#1488CC'],
        subtitle: "If you don't want to go to Oz, stay as low to the ground as possible.",
    },
    Clear:{
        iconName: "sunny-outline",
        gradient: ['#EDE574','#E1F5C4'],
        subtitle: "sun cream?",
    },
    Clouds:{
        iconName: "cloud-outline",
        gradient: ['#FFF','#3b5998'],
        subtitle: "You ride across the sky",
    },
    Sand:{
        iconName: "expand",
        gradient: ['#e65c00','#F9D423'],
        subtitle: "Sahara?",
    },
}

export default function Weather({temp, condition}){
    return (
        <View style={styles.all}>
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar style="light"/>
                <View style={styles.halfContainer}> 
                    <Ionicons name={weatherOptions[condition].iconName} size={96}  color="white"/>
                    <Text style={styles.temp}>{temp}°</Text>
                </View>
            
                <View style={{...styles.halfContainer, ...styles.textContainer}}> 
                    <Text style={styles.title}>{condition}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </LinearGradient>
        </View>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf('Thunderstorm', "Drizzle", "Rain", "Snow", "Mist", 
    "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado", "Clear", "Clouds").isRequired,
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    title: {
        fontSize: 44,
        color: "white",
        fontWeight: "300",
    },
    subtitle: {
        marginTop: 20,
        fontSize: 24,
        color: "white",
        fontWeight: "600",
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
})