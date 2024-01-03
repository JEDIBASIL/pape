import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {
  BalanceCard,
  NoTransactionCard,
  QuickActionCard,
  TransactionList,
} from "../../components";
import { useNavigation } from "@react-navigation/native";

export default function Page() {
  const navigation = useNavigation();
  const navigateTo = (path: string) => {
    navigation.navigate(path as never);
  };
  return (
    <>
      <SafeAreaView style={{paddingTop:30}}>
        <ScrollView style={styles.container}>
          <View style={{ paddingBottom: 30 }}>
            <View style={styles.spaceBetween}>
              <View>
                <Text style={styles.greeting}>Hello James</Text>
                <Text style={styles.subGreeting}>
                  Good evening, drink water
                </Text>
              </View>
              <View>
              <Image style={styles.profileImgContainer} source={{ uri: "https://img.freepik.com/free-photo/young-successful-african-businessman-posing-dark_176420-4965.jpg?size=626&ext=jpg" }} />
              </View>
            </View>
            <View style={styles.balanceContainer}>
              {/* card */}
              <BalanceCard />
            </View>

            <View style={styles.transactionContainer}>
              <TouchableOpacity
                onPress={() => navigateTo("send")}
                style={styles.transactionCard}
              >
                <SimpleLineIcons
                  style={styles.transactionCardIcon}
                  name="rocket"
                />
                <Text
                  style={{ ...styles.text_1, ...styles.transactionCardLabel }}
                >
                  Transfer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigateTo("deposit")}
                style={{
                  ...styles.transactionCard,
                  ...styles.transactionCard2,
                }}
              >
                <SimpleLineIcons
                  style={styles.transactionCardIcon2}
                  name="plus"
                />
                <Text
                  style={{ ...styles.text_1, ...styles.transactionCardLabel2 }}
                >
                  Deposit
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ ...styles.transactionContainer, marginTop: 5 }}>
              <TouchableOpacity
                onPress={() => navigateTo("deposit")}
                style={{ ...styles.transactionCard, ...styles.transactionCard }}
              >
                <SimpleLineIcons
                  style={styles.transactionCardIcon}
                  name="wallet"
                />
                <Text
                  style={{ ...styles.text_1, ...styles.transactionCardLabel }}
                >
                  Save
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigateTo("send")}
                style={styles.transactionCard}
              >
                <SimpleLineIcons
                  style={styles.transactionCardIcon}
                  name="graph"
                />
                <Text
                  style={{ ...styles.text_1, ...styles.transactionCardLabel }}
                >
                  Invest
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.quickActionContainer}>
              <Text style={styles.text_1}>Quick actions</Text>
              <View style={styles.quickActionCardContainer}>
                <QuickActionCard
                  label="Airtime"
                  iconName="phone"
                  color="lightgreen"
                />
                <QuickActionCard label="Data" iconName="feed" color="orange" />
                <QuickActionCard
                  label="Betting"
                  iconName="social-dribbble"
                  color="crimson"
                />
              </View>
            </View>

            <View style={styles.historyContainer}>
              <Text style={styles.text_1}>Recent Transactions</Text>
              <View style={styles.historyContent}>
                <NoTransactionCard />

                {/* <>
                  <TransactionList />
                  <TransactionList />
                  <TransactionList />
                  <TransactionList />
                  <TransactionList />
                </> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },

  // HISTORY
  historyContainer: {
    marginTop: 20,
  },

  historyContent: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    minHeight: 300,
    marginTop: 10,
  },

  // TRANSACTION
  transactionContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  transactionCard: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
  },
  transactionCard2: {
    backgroundColor: "royalblue",
  },
  transactionCardLabel2: {
    color: "white",
  },
  transactionCardLabel: {
    color: "royalblue",
  },
  transactionCardIcon: {
    fontSize: 20,
    color: "royalblue",
  },
  transactionCardIcon2: {
    fontSize: 20,
    color: "white",
  },

  // QUICK ACTION

  quickActionContainer: {
    marginTop: 20,
  },

  quickActionCardContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },

  //

  spaceBetween: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text_1: {
    fontSize: 16,
    fontFamily: "RethinkSans-Medium",
    alignItems: "center",
  },

  profileImgContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "black",
  },

  greeting: {
    fontSize: 20,
    fontFamily: "RethinkSans-Bold",
    color: "rgb(58, 58, 58)",
  },
  subGreeting: {
    fontSize: 15,
    fontFamily: "RethinkSans-Regular",
    color: "rgb(114, 114, 114)",
  },
  balanceContainer: {
    marginTop: 20,
  },
});
