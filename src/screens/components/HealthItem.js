import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HealthItem = ({id, title, unit, item}) => {
  return (
    <View style={styles.itemStyle}>
      <View style={styles.bage}>
        <Ionicons name="alert" color="#E25358" />
      </View>
      <Text style={[styles.text, styles.bold, styles.fs14]}>{title}</Text>
      <Text style={[styles.text, styles.bold, styles.fs26]}>
        {id === 'bloodPressure'
          ? `${item[id].systolic}/ ${item[id].diastolic}`
          : item[id]}
      </Text>
      <Text style={[styles.text, styles.fs12]}>{unit}</Text>
      <Text style={[styles.text, styles.fs12, styles.marginT8]}>
        {item.updatedAt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  fs26: {
    fontSize: 26,
  },
  fs14: {
    fontSize: 14,
  },
  fs12: {
    fontSize: 12,
  },
  marginT8: {
    marginTop: 8,
  },
  itemStyle: {
    height: 100,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: 150,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0058B7',
    borderRadius: 8,
    marginTop: 10,
  },
  bage: {
    width: 15,
    height: 15,
    borderRadius: 9,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E25358',
    position: 'absolute',
    right: -5,
    top: -5,
  },
});
export default HealthItem;
