import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacityProps,
  StyleProp,
} from "react-native";

interface Button1Props extends TouchableOpacityProps{
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Button1 = ({ label, onPress, ...props }: Button1Props) => {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#4169e1", // Royal blue
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      ...props.style as StyleProp<any>,
    },
    text: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "RethinkSans-Bold",
    },
  });

  return (
    <TouchableOpacity {...props} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};



export default Button1;
