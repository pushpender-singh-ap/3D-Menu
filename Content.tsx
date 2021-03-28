import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import StyleGuide from "./StyleGuide";

const d = Dimensions.get("window");
export const width = d.width * 0.75;
export const height = d.height * 0.5;
const styles = StyleSheet.create({
  container: {
    width,
    height,
    borderRadius: 24,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontWeight: "bold",
    marginTop: 16,
  },
  handle: {
    color: StyleGuide.palette.primary,
    textDecorationLine: "underline",
  },
  divider: {
    height: 1,
    backgroundColor: "#D8DAE0",
    width: "100%",
    marginVertical: 32,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
});

interface RowProps {
  icon: string;
  label: string;
}

const Row = ({ icon, label }: RowProps) => (
  <TouchableOpacity >
    <View style={styles.row}>
      <Icon name={icon} size={24} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  </TouchableOpacity>
);

export default () => (
  <View style={styles.container}>
    <LinearGradient style={styles.gradient} colors={["#FEFEFE", "#D2D6DE"]} />
    <Image source={require("./assets/avatar.jpg")} style={styles.avatar} />
    <Text style={styles.title}>Pushpender Singh</Text>
    <Text style={styles.handle}>pushpender-singh-ap</Text>
    <View style={styles.divider} />
    <View>
      <Row
        icon="award"
        label=""
      />
      <Row
        icon="cpu"
        label=""
      />
      <Row
        icon="edit"
        label=""
      />
    </View>
  </View>
);
