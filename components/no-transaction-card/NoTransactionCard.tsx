import { StyleSheet, View, Text, Image } from 'react-native'
import NoTransactionSvg from '../../assets/img/Receipt-rafiki.png';
 
function NoTransactionCard() {
    const styles = StyleSheet.create({
        emptyTransactionContainer: {
            alignItems: "center",
            justifyContent: "center",
          },

          emptyTransactionLabel: {
            fontSize: 18,
            fontFamily: "RethinkSans-Medium",
            color: "royalblue"
          },
        
          emptyTransactionLabel2: {
            fontSize: 14,
            fontFamily: "RethinkSans-Regular",
            color: "rgb(114, 114, 114)",
          },
    })
    return (
        <>
            <View style={styles.emptyTransactionContainer}>
                <Image style={{ width: 200, height: 200 }} source={NoTransactionSvg} />
                <Text style={styles.emptyTransactionLabel}>No Transactions</Text>
                <Text style={styles.emptyTransactionLabel2}>Your recent transactions will appear here</Text>

            </View>
        </>
    )
}

export default NoTransactionCard