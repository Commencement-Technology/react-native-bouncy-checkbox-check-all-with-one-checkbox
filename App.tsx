import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import FilterCheckbox from './src/FilterCheckbox.tsx';

interface AppProps {}

const data = [
  {
    id: 0,
    label: 'All',
    isChecked: false,
    value: '',
  },
  {
    id: 1,
    label: 'Pre-Listing',
    isChecked: false,
    value: 'PreListing',
  },
  {
    id: 2,
    label: 'Offer Exclusive',
    isChecked: false,
    value: 'OfferExclusive',
  },
  {
    id: 3,
    label: 'Coming Soon',
    isChecked: false,
    value: 'ComingSoon',
  },
  {
    id: 4,
    label: 'Active Listings',
    isChecked: false,
    value: 'ActiveListing',
  },
  {
    id: 5,
    label: 'TNAS',
    isChecked: false,
    value: 'TNAS',
  },
  {
    id: 6,
    label: 'Under Contract',
    isChecked: false,
    value: 'Under contract',
  },
  {
    id: 7,
    label: 'Clear to Close',
    isChecked: false,
    value: 'Clear to close',
  },
  {
    id: 8,
    label: 'Closed',
    isChecked: false,
    value: 'Closed',
  },
  {
    id: 9,
    label: 'Cancelled',
    isChecked: false,
    value: 'Cancelled',
  },
];

const App: React.FC<AppProps> = () => {
  const [checkBoxes, setCheckBoxes] = useState(data);

  const handleCheckboxPress = (checked: boolean, id: number) => {
    if (id === 0) {
      setCheckBoxes(
        checkBoxes.map(item => ({
          ...item,
          isChecked: checked,
        })),
      );
      return;
    }

    setCheckBoxes(
      checkBoxes.map(item =>
        item.id === id ? {...item, isChecked: checked} : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      {checkBoxes.map(item => (
        <FilterCheckbox
          id={item.id}
          key={`${item.id}`}
          isChecked={item.isChecked}
          onCheckboxPress={handleCheckboxPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 35,
    height: 35,
  },
});

export default App;
