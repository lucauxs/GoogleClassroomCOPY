import React from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, FlexAlignType } from "react-native";

interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    alignItems: FlexAlignType;
    justifyContent: FlexAlignType;
    texts: string[];
    animationType: 'none' | 'slide' | 'fade';
    width: string | number; 
}

const CustomModal = ({ visible, onClose, alignItems, justifyContent, texts, animationType, width }: CustomModalProps) => {
    return (
        <Modal
            animationType={animationType}
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <TouchableOpacity style={[styles.modalContainer, { alignItems, justifyContent }]} activeOpacity={1} onPressOut={onClose}>
                <TouchableWithoutFeedback>
                    <View style={[styles.modalContent, { width }]}>
                        {texts.map((text, index) => (
                            <Text style={styles.text} key={index}>{text}</Text>
                        ))}
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end', 
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius:10,
    },
    text: {
        fontSize: 16,
        textAlign: "left",
        margin:10,
    }
});

export default CustomModal;