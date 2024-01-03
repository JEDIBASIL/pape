// Otp.js
import { useState, useRef } from "react";
import {
  View,
  Dimensions,
  TextInput,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import NoTransactionSvg from "../assets/img/bg2.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const Otp = () => {
  const navigation = useNavigation();
  const navigateTo = (path: string) => {
    navigation.navigate(path as never);
  };
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = {
    input1: useRef(null),
    input2: useRef(null),
    input3: useRef(null),
    input4: useRef(null),
  };

  const handleOTPChange = (index: number, value: string) => {
    if (index < 3 && value !== "") {
      refs[`input${index + 2}`].current.focus();
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <ImageBackground style={styles.backgroundImage} source={NoTransactionSvg}>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigateTo("index")}
            style={styles.back_arrow_container}
          >
            <AntDesign size={20} name="left" />
            <Text style={styles.back_arrow_container_text}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.heading_text}>Enter OTP</Text>
          <Text style={styles.sub_text}>and otp has been sent to 0709842345 via sms</Text>

          <View style={styles.input_container}>
            <TextInput
              style={styles.input}
              maxLength={1}
              value={otp[0]}
              onChangeText={(text) => handleOTPChange(0, text)}
              ref={refs.input1}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              value={otp[1]}
              onChangeText={(text) => handleOTPChange(1, text)}
              ref={refs.input2}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              value={otp[2]}
              onChangeText={(text) => handleOTPChange(2, text)}
              ref={refs.input3}
            />
            <TextInput
              style={styles.input}
              maxLength={1}
              value={otp[3]}
              onChangeText={(text) => handleOTPChange(3, text)}
              ref={refs.input4}
            />
          </View>
          <Text style={styles.resend_text}>Resend OTP</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heading_text: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
    fontFamily: "RethinkSans-SemiBold",
  },
  sub_text:{
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
    fontFamily: "RethinkSans-Regular",
    color:"rgb(114, 114, 114)"
  },

  resend_text:{
    textAlign: "center",
    fontSize: 15,
    marginTop: 40,
    fontFamily: "RethinkSans-Bold",
    color:"royalblue"
  },
  input_container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 15,
  },
  container: {
    padding: 22,
    minHeight: height,
  },
  input: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "gainsboro",
    textAlign: "center",
    fontSize: 20,
    borderRadius: 8,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    resizeMode: "cover", // or 'stretch' or 'contain'
  },
  back_arrow_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  back_arrow_container_text: {
    fontFamily: "RethinkSans-Regular",
    fontSize: 18,
  },
});

export default Otp;
