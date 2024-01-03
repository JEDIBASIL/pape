import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import globalStyle from "../styles/global.style";
import { BankList, TextInput1 } from "../components";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

function SelectBankModal() {
    const nigerianBanks = [
        // Traditional Banks
        {
            id: 1,
            name: "Access Bank Plc",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1112785493341757441/kPhlt5ad_400x400.png",
        },
        {
            id: 2,
            name: "Guaranty Trust Bank Plc",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1420088013841965059/mawEI-xl_400x400.jpg",
        },
        {
            id: 3,
            name: "Zenith Bank Plc",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/996787263236395009/-eJ2WQUi_400x400.jpg",
        },
        {
            id: 4,
            name: "First Bank of Nigeria Plc",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/996787263236395009/-eJ2WQUi_400x400.jpg",
        },
        {
            id: 5,
            name: "United Bank for Africa Plc",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1214190075086430210/Gbu6vPAm_400x400.jpg",
        },

        // Online-Only Banks
        {
            id: 6,
            name: "Kuda Bank",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1580600303132577792/YA-Nsaa5_400x400.jpg",
        },
        {
            id: 7,
            name: "ALAT by Wema Bank",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/842058470274805761/hoD3z6jZ_400x400.jpg",
        },
        {
            id: 8,
            name: "VBank by VFD Microfinance Bank",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1617478900908544000/EM-EKenR_400x400.jpg",
        },
        {
            id: 9,
            name: "Stanbic IBTC Bank (Digital Banking)",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1104278638239932421/lhxAa-Lg_400x400.jpg",
        },
        {
            id: 10,
            name: "Sterling Bank (OneBank Digital)",
            onlineBanking: true,
            logo: "https://pbs.twimg.com/profile_images/1646799494355247104/ZbpPILUz_400x400.jpg",
        },

        // DUPLICATE
    ];

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        modalContainer: {
            backgroundColor: "white",
            width,
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            ...globalStyle.input,
            marginTop: 10,
        },
        container: {
            ...globalStyle.container,
            backgroundColor: "white",
            flexDirection: "column",
            maxWidth:width
        },
        banksContainer: {
            width,
            marginTop: 10,
            flex: 1, // Set to 1 to take up available space
        },
    });

    return (
        <>
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.container}>
                    <View style={globalStyle.spaceBetween}>
                        <Octicons
                            style={globalStyle.closeIcon}
                            onPress={() => navigation.goBack()}
                            size={20}
                            name="x"
                        />
                        <View>
                            <Text style={globalStyle.greeting}>Select Bank</Text>
                        </View>
                        <View></View>
                    </View>
                    <TextInput1 icon='magnifier' placeholder='Search Banks' />
                    <ScrollView style={styles.banksContainer}>
                        {nigerianBanks
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map(({ id, logo, name }) => (
                                <BankList name={name} logo={logo} key={id} />
                            ))}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
}

export default SelectBankModal;
