import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import * as Location from "expo-location";

const screenWidth = Dimensions.get("screen").width;

export const LandingScreen = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location>();

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcons}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>Waiting for Curret Location</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(242,242,242,1)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  deliveryIcons: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#707070",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
  },
  footer: {
    flex: 1,
  },
});
