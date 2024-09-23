import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking,Alert,TouchableOpacity,ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {fetchFarmerDetails} from '../api/FarmerProfile';


const FarmerProfile = () => {
  const [farmerData, setFarmerData] = useState(null);
  const route = useRoute();
  const { mobileNumber } = route.params;

  useEffect(() => {
    const getFarmerData = async () => {
        try {
          const data = await fetchFarmerDetails(mobileNumber);
          setFarmerData(data);
        } catch (error) {
          Alert.alert('Error', error.message);
        }
      };
  
      getFarmerData();
  }, [mobileNumber]);

  if (!farmerData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#4CAF50" />
      </View>
  );
  }

  const {
    personalIdentification: { photo, aadhaarNumber },
    personalInfo: { firstName, lastName, email, gender, age, dob },
    locationInfo: { state, district, pincode, longitude, latitude, address },
    landDetails: { farmSize, yearsOfExperience, farmingMethods, irrigation, pesticide, lands },
  } = farmerData;

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>Farmer Profile</Text>
    <View style={styles.profileHeader}>
      <Image source={{ uri: photo }} style={styles.profileImage} />
    </View>
    <View style={styles.profileHeader}>
      <View>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.mobile}><Text style={styles.bold}>Mobile Number:</Text> {mobileNumber}</Text>
      </View>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <Text><Text style={styles.bold}>Gender:</Text> {gender}</Text>
      <Text><Text style={styles.bold}>Age:</Text> {age}</Text>
      <Text><Text style={styles.bold}>Date of Birth:</Text> {dob}</Text>
      <Text><Text style={styles.bold}>Aadhaar Number:</Text> {aadhaarNumber}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Location Information</Text>
      <Text><Text style={styles.bold}>State:</Text> {state}</Text>
      <Text><Text style={styles.bold}>District:</Text> {district}</Text>
      <Text><Text style={styles.bold}>Pincode:</Text> {pincode}</Text>
      <Text><Text style={styles.bold}>Address:</Text> {address}</Text>
      <Text><Text style={styles.bold}>Longitude:</Text> {longitude}</Text>
      <Text><Text style={styles.bold}>Latitude:</Text> {latitude}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(`https://www.google.com/maps?q=${latitude},${longitude}`)}>
    <Text style={styles.linkText}>
      <Text style={styles.bold}>View Location:</Text> Click Here
    </Text>
  </TouchableOpacity>
    </View>
    <View style={[styles.section,styles.LastSection]}>
      <Text style={styles.sectionTitle}>Land Details</Text>
      <Text><Text style={styles.bold}>Farm Size:</Text> {farmSize} acres</Text>
      <Text><Text style={styles.bold}>Years of Experience:</Text> {yearsOfExperience} years</Text>
      <Text><Text style={styles.bold}>Farming Methods:</Text> {farmingMethods}</Text>
      <Text><Text style={styles.bold}>Irrigation:</Text> {irrigation}</Text>
      <Text><Text style={styles.bold}>Pesticide Use:</Text> {pesticide}</Text>
      {lands.map((land, index) => (
        <View key={index} style={styles.landDetails}>
          <Text><Text style={styles.bold}>Survey Number:</Text> {land.surveyNumber}</Text>
          <Text><Text style={styles.bold}>Subdivision Number:</Text> {land.subdivisionNumber}</Text>
          <Text><Text style={styles.bold}>Soil Type:</Text> {land.soilType}</Text>
          <Text><Text style={styles.bold}>Land Size:</Text> {land.landSize}</Text>
          <Text><Text style={styles.bold}>Land Location:</Text> {land.landLocation}</Text>
        </View>
      ))}
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#4CAF50',
  },
  name: {
    fontSize: 25, 
    fontWeight: 'bold',
    color: '#388E3C',
  },
  email: {
    color: '#666',
    fontSize: 17, 
  },
  mobile: {
    fontSize: 18, 
    color: '#333',
  },
  section: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 8,
  },
  landDetails: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  LastSection:{
    marginBottom:30,
  }
});

export default FarmerProfile;
