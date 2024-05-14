import React from 'react';
import {StyleProp, ViewStyle, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface FilterCheckboxProps {
  id: number;
  isChecked: boolean;
  style?: StyleProp<ViewStyle>;
  onCheckboxPress: (checked: boolean, id: number) => void;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  id,
  style,
  isChecked,
  onCheckboxPress,
}) => {
  const handleCheckboxPress = () => {
    onCheckboxPress(!isChecked, id);
  };

  return (
    <BouncyCheckbox
      style={[styles.checkbox, style]}
      isChecked={isChecked}
      onPress={handleCheckboxPress}
    />
  );
};
const styles = StyleSheet.create({
  checkbox: {
    width: 35,
    height: 35,
  },
});

export default FilterCheckbox;
