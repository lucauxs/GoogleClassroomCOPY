import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Card from '../../components/Card';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BotaoVoador from '../../components/BotaoVoador';

export const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.marginTop}/>
                <Header />
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Card materia="Desenvolvimento de Aplicativo Mobile"/>
                    <Card materia="Desenvolvimento WEB(React)"/>
                    <Card materia="Desenvolvimento API Restful"/>
                    <Card materia="FrontEnd Essencial"/>
                    <Card materia="Programação Orientada a Objetos"/>
                    <Card materia="Banco de Dados"/>
                    <Card materia='Lógica de Programação'/>
                </ScrollView>
                <BotaoVoador/> 
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242424"
    },
    marginTop:{
        height:"3%"
    },
    scrollViewContent: {
        paddingVertical: 10,
    },
});

export default Home;