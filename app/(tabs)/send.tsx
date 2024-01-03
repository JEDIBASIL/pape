import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RecentTransferList, TextInput1 } from "../../components";
import globalStyle from "../../styles/global.style";

function Send() {
  const navigation = useNavigation();
  const navigateTo = (path: string) => {
    navigation.navigate(path as never);
  };
  return (
    <>
      <SafeAreaView style={{ paddingTop: 15 }}>
        <ScrollView style={styles.container}>
          <View style={{ paddingBottom: 30 }}>
            <View style={styles.spaceBetween}>
              <View>
                <Text style={styles.greeting}>Transfer</Text>
              </View>
            </View>

            <View style={styles.transferContainerP}>
              <Text style={globalStyle.text_1}>Recipient Account</Text>
              <TextInput1
                style={styles.input}
                placeholder="Enter 10 digit account number"
                maxLength={10}
                keyboardType="number-pad"
              />
              <TextInput1
                style={styles.input}
                onFocus={(e) => {
                  const target = e.currentTarget as unknown as TextInput;
                  target.blur();
                  navigateTo("select-bank-modal");
                }}
                style={styles.input}
                placeholder="Select Bank"
                maxLength={10}
                keyboardType="decimal-pad"
              />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.transferContainer}>
              <Text style={styles.text_1}>Recent</Text>
              <View>
                <RecentTransferList />
                <RecentTransferList />
                <RecentTransferList />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  text_1: {
    ...globalStyle.text_1,
    padding: 15,
    paddingBottom: 0,
  },

  container: {
    backgroundColor: "whitesmoke",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  spaceBetween: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: 20,
    fontFamily: "RethinkSans-Bold",
    color: "rgb(58, 58, 58)",
  },

  // send
  transferContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    gap: 10,
    marginTop: 10,
  },

  transferContainerP: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    gap: 10,
    marginTop: 10,
  },

  input: {
    height: 45,
  },

  btn: {
    flex: 1,
    padding: 12,
    backgroundColor: "royalblue",
    alignItems: "center",
    borderRadius: 10,
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontFamily: "RethinkSans-Bold",
  },
});

export default Send;
