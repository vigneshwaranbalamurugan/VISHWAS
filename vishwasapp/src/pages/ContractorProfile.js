import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { fetchContractorData } from '../api/ContractorProfile';

const ContractorProfile = () => {
    const [contractor, setContractor] = useState(null);
    const route = useRoute();
    const { mobileNumber } = route.params;

    useEffect(() => {
        const getContractor = async () => {
            try {
                const data = await fetchContractorData(mobileNumber);
                setContractor(data);
            } catch (error) {
                alert(error.message);
            }
        };

        getContractor();
    }, [mobileNumber]);

    if (!contractor) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
            <Text style={styles.title}>Contractor Profile</Text>
            <View style={styles.card}>
                <Image
                    style={styles.photo}
                    source={{ uri: contractor.personalIdentification.photo }}
                />
                <Text style={styles.name}>{contractor.personalInfo.firstName} {contractor.personalInfo.lastName}</Text>
                <Text style={styles.email}>{contractor.email}</Text>
                <Text style={{ fontSize:16}}><Text style={{ fontWeight: 'bold',fontSize:16}}>Mobile Number:</Text> {mobileNumber}</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Gender:</Text> {contractor.personalInfo.gender}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Age:</Text> {contractor.personalInfo.age}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Date of Birth:</Text> {contractor.personalInfo.dob}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Aadhaar Number:</Text> {contractor.personalIdentification.aadhaarNumber}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Location</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>State:</Text> {contractor.locationInfo.state}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>District:</Text> {contractor.locationInfo.district}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Pincode:</Text> {contractor.locationInfo.pincode}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Address:</Text> {contractor.locationInfo.address}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Coordinates:</Text> {contractor.locationInfo.latitude}, {contractor.locationInfo.longitude}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Company Details</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Name:</Text> {contractor.companyDetails.name}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Address:</Text> {contractor.companyDetails.address}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Established Year:</Text> {contractor.companyDetails.establishedYear}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>TIN Number:</Text> {contractor.companyDetails.tinNumber}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Phone Number:</Text> {contractor.companyDetails.phoneNumber}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Email:</Text> {contractor.companyDetails.email}</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(`https://${contractor.companyDetails.website}`)}>
                        <Text style={{ fontWeight: 'bold' }}>Website:</Text> {contractor.companyDetails.website}
                    </Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>CEO Name:</Text> {contractor.companyDetails.ceoName}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Headquarters:</Text> {contractor.companyDetails.headquartersLocation}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 16,
    },
    photo: {
        height: 200,
        width: 200,
        borderRadius: 30,
        borderColor: '#007BFF',
        borderWidth: 3,
        alignSelf: 'center',
        marginBottom: 16,
    },
    name: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007BFF',

    },
    email: {
        color: '#555',
        textAlign: 'center',
        marginBottom: 8,
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: 8,
    },
    link: {
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
});

export default ContractorProfile;
