import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyle from "../../styles/global.style";
import { MoreList, ProfileCard } from "../../components";

function More() {
  const styles = StyleSheet.create({
    moreContainer: {
      backgroundColor: "white",
      borderRadius: 15,
      marginTop: 10,
    },
  });
  return (
    <>
      <SafeAreaView style={{ paddingTop: 15 }}>
        <ScrollView style={globalStyle.container}>
          <View style={{ paddingBottom: 30 }}>
            <View style={globalStyle.spaceBetween}>
              <View style={{ marginBottom: 15 }}>
                <Text style={globalStyle.greeting}>More</Text>
              </View>
            </View>

            <ProfileCard />

            <View style={styles.moreContainer}>
              <MoreList label="History" icon="doc" />
              <MoreList label="Settings" icon="settings" />
              <MoreList label="Refer Friends" icon="cursor" />
              <MoreList label="Support" icon="earphones-alt" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default More;
