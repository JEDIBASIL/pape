import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyle from "../../styles/global.style";

function Card() {
  return (
    <>
      <SafeAreaView style={{ paddingTop: 15 }}>
        <ScrollView style={globalStyle.container}>
          <View style={{ paddingBottom: 30 }}>
            <View style={globalStyle.spaceBetween}>
              <View>
                <Text style={globalStyle.greeting}>Card</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Card;
