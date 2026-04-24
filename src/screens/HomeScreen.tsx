import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>QuickServe</Text>

      {/* Wallet Section */}
      <View style={styles.walletCard}>
        <Text style={styles.walletTitle}>Wallet Balance</Text>
        <Text style={styles.walletAmount}>₦50,000</Text>
      </View>

      {/* Services Section */}
      <Text style={styles.sectionTitle}>Services</Text>

      <View style={styles.servicesGrid}>
        {/* We’ll plug ServiceCard here */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F7FA",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  walletCard: {
    backgroundColor: "#1E90FF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  walletTitle: {
    color: "#fff",
    fontSize: 14,
  },
  walletAmount: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});