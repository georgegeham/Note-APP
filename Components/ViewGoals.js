import { View, Text, FlatList, StyleSheet } from "react-native"
import Goal from "./Goal"
export default function ViewGoals({ listOfGoals, deleteGoal }) {
    return (
        <View style={styles.cotainer}>
            <FlatList data={listOfGoals} renderItem={({ item }) => {
                return (
                    <Goal item={item} deleteGoal={deleteGoal} />
                )
            }
            } style={styles.List}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

})