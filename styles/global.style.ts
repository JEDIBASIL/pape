import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
    text_1: {
        fontSize: 16,
        fontFamily: "RethinkSans-Medium",
        alignItems: "center",
    },

    container: {
        backgroundColor: "whitesmoke",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30,
    },
    spaceBetween: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },


    greeting: {
        fontSize: 20,
        fontFamily: "RethinkSans-Bold",
        color: "rgb(58, 58, 58)",
    },

    input: {
        padding: 12,
        borderColor: "gainsboro",
        backgroundColor: "whitesmoke",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: "RethinkSans-Medium",
        fontSize: 15,
    },

    btn: {
        flex: 1,
        padding: 12,
        backgroundColor: "royalblue",
        alignItems: "center",
        borderRadius: 10
    },

    btnText: {
        color: "white",
        fontSize: 16,
        fontFamily: "RethinkSans-Bold",
    },
    tabBarStyle1: {
        paddingBottom: 5,
        paddingTop: 5,
        height: 50,
    },
    tabBarLabelStyle1: {
        fontSize: 11,
        fontFamily: 'RethinkSans-Medium'
    },
    closeIcon:{
        padding:10
    },

    arrowIcon:{
        color: "rgb(114, 114, 114)",
        fontSize:20,
    },

    quickActionContainer: {
        marginTop: 20
      },
    
      quickActionCardContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
        flexWrap: 'wrap',
        flex:1
      },
})

export default globalStyle