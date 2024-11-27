import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomModal from './CustomModal';

const BotaoVoador = () => {

    const [modalVisible, setModalVisible] = useState(false);
    
    const openModal = (text: string) => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    
    return (
        <>
            <TouchableOpacity style={styles.BotaoVoador} onPress={()=> openModal ("aa")}>
                <Icon name="add" size={30} color="#2578c7" />
            </TouchableOpacity>
            <CustomModal
            visible={modalVisible}
            onClose={closeModal}
            alignItems={"center"}
            justifyContent={"flex-end"}
            texts={["Join class", "Create Class"]}
            animationType='fade'
            width={"100%"}
            />
        </>
    );
};

const styles = StyleSheet.create({
    BotaoVoador: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 20,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
});

export default BotaoVoador;