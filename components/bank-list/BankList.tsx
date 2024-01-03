import { StyleSheet, View, Image, Text } from "react-native"
import globalStyle from "../../styles/global.style"

function BankList({ name, logo }: { name: string, logo: string }) {
    const styles = StyleSheet.create({
        card: {
            flexDirection: 'row',
            alignItems: "center",
            gap: 10,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 10,
            marginBottom:5,
        },
        img: {
            width: 40,
            height: 40,
            borderRadius: 50
        },
    })
    return (
        <>
            <View style={styles.card}>
                <Image style={styles.img} source={{ uri: logo }} />
                <Text style={globalStyle.text_1}>{name}</Text>
            </View>
        </>
    )
}

export default BankList