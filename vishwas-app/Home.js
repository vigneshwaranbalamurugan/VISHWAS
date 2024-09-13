import React  from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Home = () => {

  
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('./assets/crop.jpg')} // Make sure the image is in your project's assets folder
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Welcome</Text>
          <Text style={styles.headerSubtitle}>Your one-stop solution for connecting farmers and buyers.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>தமிழ்</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>हिंदी</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.demoButton} >
            <Text style={styles.buttonText}>Demo Video</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* What is Vishwas Section */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Image
          source={require('./assets/crop2.jpg')} // Make sure the image is in your project's assets folder
          style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>What is Vishwas?</Text>
            <Text style={styles.sectionText}>
              Vishwas is a trusted platform that connects farmers and buyers, providing reliable services to ensure secure transactions, contract management, and collaboration opportunities. It empowers farmers to reach a wider market while giving buyers access to quality products directly from the source.
            </Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>✅Building trust between farmers and buyers</Text>
              <Text style={styles.listItem}>✅Ensuring fair and secure deals</Text>
              <Text style={styles.listItem}>✅Providing a transparent platform for agricultural transactions</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Content Sections */}
      <View style={styles.section}>
        <View style={styles.row}>
          
          <View style={styles.card}>
          <Image
          source={require('./assets/f2.jpg.jpg')} // Make sure the image is in your project's assets folder
          style={styles.image}
          />
            <Text style={styles.cardTitle}>For Farmers</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>✔Connect with buyers</Text>
              <Text style={styles.listItem}>✔Manage contracts</Text>
              <Text style={styles.listItem}>✔Secure payments</Text>
              <Text style={styles.listItem}>✔Collaborate</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
        <Image
          source={require('./assets/b2.jpg')} // Make sure the image is in your project's assets folder
          style={styles.image}
          />
            <Text style={styles.cardTitle}>For Buyers</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>✔Find reliable farmers</Text>
              <Text style={styles.listItem}>✔Purchase products</Text>
              <Text style={styles.listItem}>✔Secure options</Text>
              <Text style={styles.listItem}>✔Track order</Text>
            </View>
          </View>
         
        </View>
      </View>

      {/* Central Section with Two Cards */}
      <View style={styles.cardSection}>
        <TouchableOpacity style={styles.card} >
          <Text style={styles.cardTitle}>Demo Video</Text>
          <Text>Click to navigate to a video page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} >
          <Text style={styles.cardTitle}>About</Text>
          <Text>Click to navigate to another page</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Text</Text>
        <TouchableOpacity >
          <Text style={styles.footerLink}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    height: 500,
  },
  headerImage: {
    width: width,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  headerTitle: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    alignItems:'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  demoButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  section: {
    padding: 20,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#d4edda',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width:'90%',
    flex: 1,
    alignItems: 'center',
  },
  cardTitle: {
    color:'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footer: {
    backgroundColor: '#343a40',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  footerLink: {
    color: '#28a745',
    marginTop: 10,
    fontSize: 16,
  },
});

export default Home;
