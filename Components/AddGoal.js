import { View, TextInput, StyleSheet, Modal, Button, Image, Platform } from "react-native";
import { useState } from "react";
export default function AddGoal({ addNewGoal, viewCurrentGoals, visible }) {
    const [text, setText] = useState('');
    function getText(newText) {
        setText(newText);
    }
    return (
        <Modal visible={visible} animationType="slide">
            <View style={style.Container}>
                <Image style={style.image} source={require('../assets/Images/goal.png')} />
                <TextInput style={style.Input} placeholder="Enter Your Goal" placeholderTextColor='white' onChangeText={getText} value={text} />
                <View style={style.BtnContainer}>
                    <View style={style.BtnAdd}>
                        <Button title="Add Goal" color={Platform.OS === 'ios' ? 'white' : 'green'} onPress={text ? () => {
                            addNewGoal(text);
                            setText('');
                        } : null
                        } />
                    </View>
                    <View style={style.BtnClose}>
                        <Button title="Close" color={Platform.OS === 'ios' ? 'white' : 'red'} onPress={viewCurrentGoals} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const style = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 20,
        backgroundColor: "#311b6b",
    },
    BtnContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    Input: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '90%',
        padding: 10,
        color: 'white',
        borderRadius: 6,
    },
    image: {
        width: 100,
        height: 100,

    },
    BtnAdd: {
        backgroundColor: 'green',
        borderRadius: 5,
        width: '35%'
    },
    BtnClose: {
        borderRadius: 5,
        width: '35%',
        backgroundColor: 'red'
    }
})