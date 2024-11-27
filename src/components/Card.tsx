import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomModal from './CustomModal';

interface CardProps {
    materia: string;
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Card = ({ materia, }: CardProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const backgroundColor = getRandomColor();

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={[styles.cardContainer, { backgroundColor }]}>
            <View style={styles.header}>
                <Text style={styles.codigo}>QUA03052024U022</Text>
                <TouchableOpacity onPress={openModal}>
                    <Icon name="more-vert" size={30} color="white" style={styles.moreIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.materia}>{materia}</Text>
            <Text style={styles.instituicao}>Equipe SENAI FRI</Text>

            <CustomModal
                visible={modalVisible}
                onClose={closeModal}
                alignItems="center"
                justifyContent="flex-end"
                texts={["Unenroll", "Report Abuse"]} 
                animationType='slide'
                width={'100%'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginTop:5,
        marginBottom:5,
        padding: 10,
        borderRadius: 10,
        width: "98%",
        alignSelf: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    moreIcon: {
        marginLeft: 10,
    },
    codigo: {
        fontSize: 35,
        color: "white"
    },
    materia: {
        fontSize: 20,
        color: "white"
    },
    instituicao: {
        fontSize: 12,
        marginTop: 30,
        color: "white"
    },
});

export default Card;