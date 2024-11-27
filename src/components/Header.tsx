import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomModal from './CustomModal';
import professorBacana from '../../assets/professorBacana.jpg';

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const [imageModalVisible, setImageModalVisible] = useState(false);

    const openModal = (text: string) => {
        setModalText(text);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const openImageModal = () => {
        setImageModalVisible(true);
    };

    const closeImageModal = () => {
        setImageModalVisible(false);
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Icon name="menu" size={30} color="white" style={styles.menuIcon} />
            </TouchableOpacity>
            <Text style={styles.cabecalho}>
                <Text style={styles.bold}>Google</Text> classroom
            </Text>
            <TouchableOpacity onPress={openImageModal}>
                <Image
                    source={professorBacana}
                    style={styles.perfil}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openModal('Send Google feedback')}>
                <Icon name="more-vert" size={30} color="white" style={styles.moreIcon} />
            </TouchableOpacity>
            <CustomModal
                visible={modalVisible}
                onClose={closeModal}
                alignItems={"flex-end"}
                justifyContent={"flex-start"}
                texts={[modalText]}
                animationType='fade'
                width={"60%"}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={imageModalVisible}
                onRequestClose={closeImageModal}
            >
                <TouchableOpacity style={styles.imageModalContainer} activeOpacity={1} onPressOut={closeImageModal}>
                    <View style={styles.imageModalContent}>
                        <Image
                            source={professorBacana}
                            style={styles.imageModal}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: "7%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1a1a1a",
        padding: 10,
    },
    menuIcon: {
        marginRight: 10,
    },
    cabecalho: {
        color: "white",
        textAlign: "center",
        fontSize: 24,
        flex: 1,
    },
    bold: {
        fontWeight: "bold"
    },
    perfil: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    moreIcon: {
        marginLeft: 10,
    },
    imageModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    imageModalContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageModal: {
        width: 400,
        height: 400,
        borderRadius:200,
    },
});

export default Header;