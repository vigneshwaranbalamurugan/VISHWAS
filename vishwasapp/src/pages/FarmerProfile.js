// FarmerProfile.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { fetchFarmerData } from './api';
import { useRoute } from '@react-navigation/native';

const FarmerProfile = () => {
  const [farmerData, setFarmerData] = useState(null);
  const route = useRoute();
  const { mobileNumber } = route.params;

  useEffect(() => {
    const getFarmerData = async () => {
      try {
        const data = await fetchFarmerData(mobileNumber);
        setFarmerData(data);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    getFarmerData();
  }, [mobileNumber]);

  if (!farmerData) {
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  const {
    personalIdentification: { photo, aadhaarNumber },
    personalInfo: { firstName, lastName, email, gender, age, dob },
    locationInfo: { state, district, pincode, address },
    landDetails: { farmSize, yearsOfExperience, farmingMethods, irrigation, pesticide, lands },
  } = farmerData;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farmer Profile</Text>
      
      <View style={styles.profileHeader}>
        <Image source={{ uri: photo }} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.mobile}>{`Mobile: ${mobileNumber}`}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.infoText}><strong>Gender:</strong> {gender}</Text>
        <Text style={styles.infoText}><strong>Age:</strong> {age}</Text>
        <Text style={styles.infoText}><strong>DOB:</strong> {dob}</Text>
        <Text style={styles.infoText}><strong>Aadhaar Number:</strong> {aadhaarNumber}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location Information</Text>
        <Text style={styles.infoText}><strong>State:</strong> {state}</Text>
        <Text style={styles.infoText}><strong>District:</strong> {district}</Text>
        <Text style={styles.infoText}><strong>Pincode:</strong> {pincode}</Text>
        <Text style={styles.infoText}><strong>Address:</strong> {address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Land Details</Text>
        <Text style={styles.infoText}><strong>Farm Size:</strong> {farmSize} acres</Text>
        <Text style={styles.infoText}><strong>Experience:</strong> {yearsOfExperience} years</Text>
        <Text style={styles.infoText}><strong>Farming Methods:</strong> {farmingMethods}</Text>
        <Text style={styles.infoText}><strong>Irrigation:</strong> {irrigation}</Text>
        <Text style={styles.infoText}><strong>Pesticide Use:</strong> {pesticide}</Text>

        {lands.map((land, index) => (
          <View key={index} style={styles.landDetails}>
            <Text style={styles.infoText}><strong>Survey Number:</strong> {land.surveyNumber}</Text>
            <Text style={styles.infoText}><strong>Subdivision Number:</strong> {land.subdivisionNumber}</Text>
            <Text style={styles.infoText}><strong>Soil Type:</strong> {land.soilType}</Text>
            <Text style={styles.infoText}><strong>Land Size:</strong> {land.landSize}</Text>
            <Text style={styles.infoText}><strong>Location:</strong> {land.landLocation}</Text>
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
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '#4caf50',
    borderWidth: 2,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  email: {
    color: '#555',
  },
  mobile: {
    color: '#555',
  },
  section: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  landDetails: {
    marginTop: 8,
    padding: 8,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
});

export default FarmerProfile;
