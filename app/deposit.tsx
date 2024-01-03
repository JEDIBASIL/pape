import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyle from "../styles/global.style";
import { MoreList } from "../components";

function Page() {
  const styles = StyleSheet.create({
    moreContainer: {
      backgroundColor: "white",
      borderRadius: 15,
    },
  });
  return (
    <>
      <SafeAreaView style={{ paddingTop: 30 }}>
        <ScrollView style={globalStyle.container}>
          <View style={{ paddingBottom: 30 }}>
            <View style={globalStyle.spaceBetween}>
              <View style={{ marginBottom: 15 }}>
                <Text style={globalStyle.greeting}>Deposit</Text>
              </View>
            </View>

            <View style={styles.moreContainer}>
              <MoreList label="Bank transfer" icon="cursor" />
              <MoreList label="Card" icon="credit-card" />

              {/* <MoreList label='Settings' icon='settings' />
                            <MoreList label='Refer Friends' icon='cursor' />
                            <MoreList label='Support' icon='earphones-alt' /> */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Page;
