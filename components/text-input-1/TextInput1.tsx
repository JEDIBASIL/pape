import React, { useState } from "react";
import { StyleSheet, StyleProp, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { View, TextInput, TextInputProps } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

interface TextInput1Props extends TextInputProps {
    icon?: string;
    iconColor?: string
    iconSize?: number,
    onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
}

const TextInput1 = ({ onFocus, onBlur, icon, iconColor = "rgb(114, 114, 114)", iconSize = 20, ...props }: TextInput1Props) => {

    const [isFocused, setIsFocused] = useState(false)

    function onFocusEvent(e: NativeSyntheticEvent<TextInputFocusEventData>) {
        setIsFocused(true)
        if (onFocus) {
            onFocus(e)
        }
    }

    function onBlurEvent(e: NativeSyntheticEvent<TextInputFocusEventData>) {
        setIsFocused(false)
        if (onBlur) {
            onBlur(e)
        }
    }

    const focusedStyle = StyleSheet.create({
        focused: isFocused ? {
            borderColor: "royalblue",
        } : {}
    })

    const defaultStyles = StyleSheet.create({
        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            // flex: 1,
            height: 40,
            borderColor: "gainsboro",
            borderWidth: 1,
            backgroundColor: "whitesmoke",
            borderRadius: 5,
            fontFamily: "RethinkSans-Medium",
            ...props.style as StyleProp<any>,
            ...focusedStyle.focused
        },
        input: {
            fontFamily: "RethinkSans-Medium",
            paddingRight: 10,
            flex: 1,
            height: (props.style && props.style.height as number)  || 40,
            fontSize: (props.style && props.style.fontSize as number)  || 14,

        },
        iconStyle: {
            fontSize: iconSize,
            color: iconColor,
            marginRight: 10
        }
    });

    return (
        <View style={defaultStyles.inputContainer}>
            {icon && (
                <SimpleLineIcons name={icon} style={defaultStyles.iconStyle} />
            )}
            <TextInput onBlur={onBlurEvent} onFocus={onFocusEvent} {...props} style={defaultStyles.input} />
        </View>
    );
};

export default TextInput1;
