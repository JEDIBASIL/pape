import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default function Layout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 2000);
  }, []);

  const [fontsLoaded] = useFonts({
    "RethinkSans-Bold": require("../assets/fonts/RethinkSans-Bold.ttf"),
    "RethinkSans-ExtraBold": require("../assets/fonts/RethinkSans-ExtraBold.ttf"),
    "RethinkSans-BoldItalic": require("../assets/fonts/RethinkSans-BoldItalic.ttf"),
    "RethinkSans-ExtraBoldItalic": require("../assets/fonts/RethinkSans-ExtraBoldItalic.ttf"),
    "RethinkSans-Regular": require("../assets/fonts/RethinkSans-Regular.ttf"),
    "RethinkSans-SemiBold": require("../assets/fonts/RethinkSans-SemiBold.ttf"),
    "RethinkSans-SemiBoldItalic": require("../assets/fonts/RethinkSans-SemiBoldItalic.ttf"),
    "RethinkSans-Medium": require("../assets/fonts/RethinkSans-Medium.ttf"),
    "RethinkSans-MediumItalic": require("../assets/fonts/RethinkSans-MediumItalic.ttf"),
    "RethinkSans-Italic": require("../assets/fonts/RethinkSans-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return <Text> Loading...</Text>;
  }

  if (!mounted) {
    return <SplashScreen />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="deposit" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerShown: false }} />
      <Stack.Screen
        name="select-bank-modal"
        options={{
          animation: "slide_from_right",
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

function SplashScreen() {
  // Your splash screen UI elements
  return (
    <View
      style={{
        backgroundColor: "royalblue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          textDecorationLine: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "white",
          padding: 10,
          color: "white",
          fontSize: 70,
          fontFamily: "RethinkSans-Bold",
        }}
      >
        Pape.
      </Text>
      <Text
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          color: "white",
          fontSize: 18,
          fontFamily: "RethinkSans-Bold",
        }}
      >
        Finance Made easy
      </Text>
      <SimpleLineIcons
        style={{ marginTop: 10, color: "white" }}
        size={22}
        name="rocket"
      />
    </View>
  );
}
