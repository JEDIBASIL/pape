import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyle from "../../styles/global.style";
import { QuickActionCard } from "../../components";

function Pay() {
  const styles = StyleSheet.create({
    quickActionCardContainer: {
      ...globalStyle.quickActionCardContainer,
    },
    space: {
      flex: 1,
      padding: 10,
    },
  });
  return (
    <>
      <SafeAreaView style={{ paddingTop: 15 }}>
        <ScrollView style={globalStyle.container}>
          <View style={{ paddingBottom: 30 }}>
            <View style={globalStyle.spaceBetween}>
              <View>
                <Text style={globalStyle.greeting}>Pay</Text>
              </View>
            </View>

            <View style={globalStyle.quickActionContainer}>
              <Text style={globalStyle.text_1}>Essential</Text>
              <View style={globalStyle.quickActionCardContainer}>
                <QuickActionCard
                  label="Airtime"
                  iconName="phone"
                  color="lightgreen"
                />
                <QuickActionCard label="Data" iconName="feed" color="orange" />
                <QuickActionCard
                  label="Tv"
                  iconName="screen-desktop"
                  color="crimson"
                />
              </View>
              <View style={globalStyle.quickActionCardContainer}>
                <QuickActionCard
                  label="Electricity"
                  iconName="energy"
                  color="royalblue  "
                />
                <View style={styles.space}></View>
                <View style={styles.space}></View>
              </View>
            </View>

            <View style={globalStyle.quickActionContainer}>
              <Text style={globalStyle.text_1}>Life style</Text>
              <View style={globalStyle.quickActionCardContainer}>
                <QuickActionCard
                  label="Transport"
                  iconName="location-pin"
                  color="lightgreen"
                />
                <QuickActionCard
                  label="Gift card"
                  iconName="present"
                  color="orange"
                />
                <QuickActionCard
                  label="Betting"
                  iconName="social-dribbble"
                  color="crimson"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Pay;
