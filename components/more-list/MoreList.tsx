import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

function MoreList(
    { icon, label, path }: { icon: string, label: string, path?: string }
) {

    const styles = StyleSheet.create({
        iconContainer: {
            width: 40,
            height: 40,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:"rgba(65, 105, 225, 0.090)"
        },
        icon: {
            color: "royalblue",
            fontSize: 18,
        },
        arrowIcon: {
            color: "rgb(133, 133, 133)",
            fontSize: 15,
        },
        list: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 15,
            paddingRight: 10,
            marginBottom: 10,
            paddingTop: 5,
            borderTopWidth: 1,
            borderColor: "whitesmoke",
            borderStyle: "solid"
        },
        listLabel:{
            fontFamily: "RethinkSans-Medium",
            fontSize:16
        },
        left_section:{
            flexDirection:'row',
            alignItems:'center',
            gap:10
        },
    })

    return (
        <View style={styles.list}>
            <View style={styles.left_section}>
                <View style={styles.iconContainer}>
                    <SimpleLineIcons style={styles.icon} size={20} name={icon} />
                </View>
                <Text style={styles.listLabel}>{label}</Text>
            </View>
            <SimpleLineIcons style={styles.arrowIcon} name="arrow-right" />
        </View>
    )
}

export default MoreList