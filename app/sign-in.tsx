import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button1, CheckBox, TextInput1 } from "../components";
import { StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get("window");
import NoTransactionSvg from "../assets/img/bg2.png";



function SignIn() {
  const navigation = useNavigation();
  const navigateTo = (path: string) => {
    navigation.navigate(path as never);
  };
  const styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      fontFamily: "RethinkSans-Bold",
      marginTop: 80,
      marginBottom: 20,
      textAlign: "center",
    },
    container: {
      padding: 22,
      minHeight: height,
    },
    inputContainer: {
      marginTop: 20,
    },
    termsText: {
      fontFamily: "RethinkSans-Regular",
      marginTop: 5,
      fontSize: 14,
    },
    span: {
      color: "royalblue",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 10,
        resizeMode: "cover", // or 'stretch' or 'contain'
      },
    termsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingRight: 10,
      gap: 5,
      marginTop: 10,
    },
  });
  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={NoTransactionSvg}>
        <View style={styles.container}>
          <Text style={styles.heading}>Login Pape</Text>
          <View style={styles.inputContainer}>
            <TextInput1
              keyboardType="number-pad"
              style={{ fontSize: 18, height: 50 }}
              placeholder="Enter phone Number"
            />
            <Button1 label="Sign in" style={{ marginTop: 10 }} />

            <View style={{ marginTop: 30 }}>
              <Text
                style={{
                  ...styles.termsText,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Don't have an account?{" "}
                <Text onPress={() => navigateTo("index")} style={styles.span}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
        </ImageBackground>
    </>
  );
}

export default SignIn;
