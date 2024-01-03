import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import NoTransactionSvg from "../../assets/img/bg.jpg";

function BalanceCard() {
  return (
    <View style={styles.balanceCard}>
      <ImageBackground
        source={NoTransactionSvg}
        style={styles.backgroundImage}
      >
        <View style={{padding:20, paddingTop:30, paddingBottom:30}}>
        <View style={styles.spaceBetween}>
          <View style={styles.totalLabelContainer}>
            <Text style={{ ...styles.text_1, color: "white" }}>🇳🇬 NGN</Text>
            <SimpleLineIcons name="eye" style={styles.totalLabelEye} />
          </View>
          <View style={styles.viewTransactionHistoryLabel}>
            <Text
              style={{ ...styles.text_1, fontSize: 13, color: "royalblue" }}
            >
              Transaction History <SimpleLineIcons name="arrow-right" />
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.balanceLabel}>₦17,000.54</Text>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
  text_1: {
    fontSize: 16,
    fontFamily: "RethinkSans-Medium",
  },
  viewTransactionHistoryLabel: {
    fontSize: 13,
    fontFamily: "RethinkSans-Regular",
    color: "royalblue",
    marginBottom: 5,
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
  },
  totalLabelContainer: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  totalLabelEye: { color: "white", fontSize: 18 },
  balanceCard: {
    borderRadius: 10,
    color: "white",
    // padding: 20,
    overflow: "hidden",
    flex: 1,

  },
  balanceLabel: {
    fontSize: 32,
    fontFamily: "RethinkSans-ExtraBold",
    color: "white",
  },
});

export default BalanceCard;
