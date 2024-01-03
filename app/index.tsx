import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button1, CheckBox, TextInput1 } from "../components";
import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import NoTransactionSvg from "../assets/img/bg2.png";
import AntDesign from "react-native-vector-icons/AntDesign";

function SignUp() {
  const navigation = useNavigation();
  const navigateTo = (path: string) => {
    navigation.navigate(path as never);
  };

  const styles = StyleSheet.create({
    heading: {
      fontSize: 30,
      fontFamily: "RethinkSans-Bold",
      marginTop: 120,
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
    termsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingRight: 10,
      gap: 5,
      marginTop: 10,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: "center",
      borderRadius: 10,
      resizeMode: "cover", // or 'stretch' or 'contain'
    },
    back_arrow_container:{
      display:'flex',
      alignItems:"center",
      flexDirection:"row",
      gap:5,
    },
    back_arrow_container_text:{
      fontFamily: "RethinkSans-Regular",
      fontSize:18
    }
  });
  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={NoTransactionSvg}>
        <SafeAreaView>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigateTo("(tabs)")} style={styles.back_arrow_container}>
              <AntDesign size={20} name="left" />
              <Text style={styles.back_arrow_container_text}>Home</Text>
            </TouchableOpacity>
            
            <Text style={styles.heading}>Hi Welcome to Pape</Text>
            <View style={styles.inputContainer}>
              <TextInput1
                keyboardType="number-pad"
                style={{ fontSize: 16, height: 50, borderRadius:20 }}
                placeholder="Enter phone Number"
              />
              <Button1 onPress={() => navigateTo("otp")} label="Sign up" style={{ marginTop: 10, borderRadius:20 }} />
              <View style={styles.termsContainer}>
                <CheckBox checked={false} />
                <Text style={styles.termsText}>
                  I have read, understand and agreed to{" "}
                  <Text style={styles.span}>Terms and Condition</Text> &{" "}
                  <Text style={styles.span}>Privacy Policy</Text>
                </Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <Text
                  style={{
                    ...styles.termsText,
                    fontSize: 18,
                    textAlign: "center",
                  }}
                >
                  Already registered?{" "}
                  <Text
                    onPress={() => navigateTo("sign-in")}
                    style={styles.span}
                  >
                    Login
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

export default SignUp;
