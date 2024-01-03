import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

function RecentTransferList() {

  const styles = StyleSheet.create({
    leftSectionImg: {
      width: 40,
      height: 40,
      borderRadius: 50
    },
    transactionTypeLabel: {
      fontFamily: "RethinkSans-Medium",
      fontSize: 16,
    },
    bankDetails: {
      fontFamily: "RethinkSans-Regular",
      fontSize: 14,
      color: "rgb(114, 114, 114)",
    },
    list: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: 15,
      paddingRight: 10,
      marginBottom:10,
      paddingTop:5,
      borderTopWidth: 1,
      borderColor: "whitesmoke",
      borderStyle: "solid"
    }
  })

  return (
    <>
      <View style={styles.list}>
        <View>
          <Text style={styles.transactionTypeLabel}>Ezeoha Chinoso Divine</Text>
          <Text style={styles.bankDetails}>2017276748 KUDA MFB</Text>
        </View>
        <Image style={styles.leftSectionImg} source={{ uri: "https://pbs.twimg.com/profile_images/1214190075086430210/Gbu6vPAm_400x400.jpg" }} />
      </View>
    </>
  )
}

export default RecentTransferList