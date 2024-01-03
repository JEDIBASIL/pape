import { StyleSheet } from "react-native"
import { View, Text } from "react-native"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

function QuickActionCard({label, color, iconName}:{label:string, color:string, iconName:string}) {
    return (
        <>
            <View style={styles.quickActionCard}>
                <View style={{ ...styles.quickActionCardIconContainer }}>
                    <SimpleLineIcons style={{ ...styles.quickActionCardIcon, color }} name={iconName} />
                </View>
                <Text style={styles.quickActionCardLabel}>{label}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    quickActionCard: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 10,
        gap: 8,
        width:2000
      },
    
      quickActionCardIconContainer: {
        borderRadius: 10
      },
    
      // quickActionCardIconContainer1: {
      //   backgroundColor: "rgba(255, 166, 0, 0.274)"
      // },
      // quickActionCardIconContainer2: {
      //   backgroundColor: "rgba(144, 238, 144, 0.274)"
      // },
      // quickActionCardIconContainer3: {
      //   backgroundColor: "rgba(128, 0, 128, 0.274)"
      // },
      // quickActionCardIconContainer4: {
      //   backgroundColor: "rgba(220, 20, 60,0.274)"
      // },
    
      quickActionCardIcon: {
        fontSize: 20,
        color: "white"
      },
    
      quickActionCardLabel: {
        fontSize: 14,
        fontFamily: "RethinkSans-Medium",
        alignItems: "center",
        color: "rgb(58, 58, 58)",
      },
    
})

export default QuickActionCard