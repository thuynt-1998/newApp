import React from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import HealthItem from '../components/HealthItem';
import Ionicons from 'react-native-vector-icons/Ionicons';

const item = {
  bloodGlucose: 0,
  bloodPressure: {systolic: 130, diastolic: 80},
  diastolic: 0,
  systolic: 0,
  bmi: 0,
  height: 155,
  heightInCm: 155,
  oxygenLevel: 0,
  pulse: 0,
  respiration: 0,
  temperature: 0,
  temperatureInCelcius: 0,
  updatedAt: 'string',
  updatedBy: 'string',
  weight: 'number',
  weightInKg: '40',
  heartrate: 40,
  _id: 'string',
};

const dataArray = [
  [
    {id: 'bloodPressure', title: 'Blood Pressure', unit: 'mmHg'},
    {id: 'heartrate', title: 'Heartrate', unit: 'bpm'},
  ],
  //   [
  //     {id: 'bloodGlucose', title: 'Blood Glucose', unit: ''},

  //     {id: 'bmi', title: 'Bmi', unit: ''},
  //   ],
  //   [
  //     {id: 'oxygenLevel', title: 'Oxygen Level', unit: ''},
  //     {id: 'pulse', title: 'pulse', unit: ''},
  //   ],
  [
    {id: 'respiration', title: 'Respiration', unit: ''},
    {id: 'temperatureInCelcius', title: 'temperature', unit: 'Celcius'},
  ],
  [
    {id: 'weightInKg', title: 'Weight', unit: 'kg'},
    {id: 'heightInCm', title: 'Height', unit: 'cm'},
  ],
];

const Home = () => {
  return (
    <View>
      <Swiper
        style={styles.container}
        showsButtons={true}
        showsPagination={false}
        nextButton={<Ionicons name="arrow-forward-circle-outline" size={30} />}
        prevButton={<Ionicons name="arrow-back-circle-outline" size={30} />}
        loop={false}>
        {dataArray?.map((array, i) => (
          <View style={styles.itemContainer} key={i}>
            {array?.map((obj, index) => (
              <HealthItem {...obj} item={item} key={index} />
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 40,
  },
});
export default Home;
