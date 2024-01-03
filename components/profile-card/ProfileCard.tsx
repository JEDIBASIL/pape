import { StyleSheet } from "react-native"
import { View, Text, Image } from "react-native"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

function ProfileCard() {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "white",
            padding: 20,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        left_section: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
        },
        img: {
            width: 65,
            height: 65,
            objectFit: "cover",
            borderRadius: 200
        },
        nameLabel: {
            fontFamily: "RethinkSans-Bold",
            fontSize: 20,
        },
        subText: {
            fontFamily: "RethinkSans-Regular",
            fontSize: 14,
            color: "rgb(114, 114, 114)",
        },
        arrowIcon: {
            color: "rgb(114, 114, 114)",
            fontSize: 20,
        },
    })
    return (
        <View style={styles.container}>
            <View style={styles.left_section}>
                <Image style={styles.img} source={{ uri: "https://img.freepik.com/free-photo/young-successful-african-businessman-posing-dark_176420-4965.jpg?size=626&ext=jpg" }} />
                <View>
                    <Text style={styles.nameLabel}>James Doe</Text>
                    <Text style={styles.subText}>Account Details</Text>
                </View>
            </View>
            <SimpleLineIcons style={styles.arrowIcon} size={20} name="arrow-right" />
        </View>
    )
}

export default ProfileCard