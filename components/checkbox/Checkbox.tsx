import { TouchableOpacity, View, Text, GestureResponderEvent } from 'react-native';

const CheckBox = ({ checked, onPress }:{checked:boolean, onPress?: ((event: GestureResponderEvent) => void) | undefined}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderRadius: 3,
          borderWidth: 1,
          borderColor: checked ? 'blue' : 'gray',
          display:'flex',
          alignItems:"center",
          justifyContent:"center",
          maxHeight:20,
          maxWidth:20,
          minHeight:20,
          minWidth:20,
        }}
      >
        {checked && <Text style={{ color: 'blue' }}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox