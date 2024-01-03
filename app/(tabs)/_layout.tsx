import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import globalStyle from "../../styles/global.style";




export default function TabLayout() {

    const styles = StyleSheet.create({
    });

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "royalblue",
                tabBarLabelStyle:globalStyle.tabBarLabelStyle1,
                tabBarStyle:globalStyle.tabBarStyle1
            }}
            
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color }) => (
                        <BarIcon
                            focused={focused}
                            activeColor={color}
                            color="rgb(114, 114, 114)"
                            name="home"
                            size={20}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="send"
                options={{
                    title: "Send",

                    tabBarIcon: ({ focused, color }) => (
                        <BarIcon
                            focused={focused}
                            activeColor={color}
                            color="rgb(114, 114, 114)"
                            name="paper-plane"
                            size={20}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="pay"
                options={{
                    title: "Pay",
                    tabBarIcon: ({ focused, color }) => (
                        <BarIcon
                            focused={focused}
                            activeColor={color}
                            color="rgb(114, 114, 114)"
                            name="rocket"
                            size={20}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="card"
                options={{
                    title: "Card",
                    tabBarIcon: ({ focused, color }) => (
                        <BarIcon
                            focused={focused}
                            activeColor={color}
                            color="rgb(114, 114, 114)"
                            name="credit-card"
                            size={20}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="more"
                options={{
                    title: "More",
                    tabBarIcon: ({ focused, color }) => (
                        <BarIcon
                            focused={focused}
                            activeColor={color}
                            color="rgb(114, 114, 114)"
                            name="menu"
                            size={20}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

function BarIcon({
    focused,
    color,
    activeColor,
    name,
    size,
}: {
    size: number;
    name: string;
    activeColor?: string;
    color?: string;
    focused: boolean;
}) {
    return (
        <SimpleLineIcons
            color={focused ? activeColor : color}
            name={name}
            size={size}
        />
    );
}
