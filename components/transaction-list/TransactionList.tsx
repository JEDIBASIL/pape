import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

function TransactionList() {
    const styles = StyleSheet.create({
        rightSectionTextContainer:{
            alignItems:"flex-end"
        },
        leftSection:{
            flexDirection:"row",
            alignItems:"center",
            gap:10
        },
        leftSectionImg:{
            width:40,
            height:40,
            borderRadius:50
        },
        leftSectionTextContainer:{
            gap:5
        },
        transactionTypeLabel:{
            fontFamily: "RethinkSans-Medium",
            fontSize:16,
        },
        statusLabel:{
            fontFamily: "RethinkSans-Medium",
            fontSize:13,
            color:"lightgreen"
        },
        amountLabel:{
            fontFamily: "RethinkSans-Bold",
            fontSize:20,
        },
        dateLabel:{
            fontFamily: "RethinkSans-Regular",
            fontSize:14,
            color: "rgb(114, 114, 114)",
        },
        list:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            padding:10,
            paddingLeft:5,
            borderBottomWidth:1,
            borderColor:"whitesmoke",
            borderStyle:"solid"
        }
    })
    return (
        <View style={styles.list}>
            <View style={styles.leftSection}>
                <Image style={styles.leftSectionImg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aJX1Z4agG_zXM485aqDNoyl_Y1Vz1NxHeaWstsY7HhYgLqAntWWt&usqp=CAE&s"}} />
                <View style={styles.leftSectionTextContainer}>
                    <Text style={styles.transactionTypeLabel}>Mtn/Airtime</Text>
                    <Text style={styles.dateLabel}>Dec 19th,2023 20:56:47</Text>
                </View>
            </View>
            <View style={styles.rightSectionTextContainer}>
                <Text style={styles.amountLabel}>-500</Text>
                <Text style={styles.statusLabel}>Successful</Text>
            </View>
        </View>
    )
}

export default TransactionList