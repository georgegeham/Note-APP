import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Goal({ item, deleteGoal }) {
    return (
        <View style={styles.Goal}>
            <Pressable android_ripple={{ color: '#ddddd' }} style={({ pressed }) => pressed && { opacity: 0.5 }} onPress={() => deleteGoal(item.id)}>
                < Text key={item.id} style={styles.GoalText}> {item.Goal}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    Goal: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        // alignItems: 'center'
    },
    GoalText: {
        marginHorizontal: 'auto',
        color: 'white',
        padding: 12,
    }
})