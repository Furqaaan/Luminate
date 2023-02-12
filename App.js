import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Torch from 'react-native-torch';

export default function App() {
    const [isTorchOn, setIsTorchOn] = useState(false);

	const handleTouch = () => {
		Torch.switchState(!isTorchOn);
		setIsTorchOn(!isTorchOn);
	}

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleTouch}>
                <View style={styles.button}>
                    <Text style={styles.text}>{isTorchOn ? "OFF" : "ON"}</Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#26272B",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        borderWidth: 10,
        borderColor: "#8cad06",
        backgroundColor: "#AFD808",
        padding: 30,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 50,
    },
});
