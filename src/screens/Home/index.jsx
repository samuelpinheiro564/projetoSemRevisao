import { View } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View styles={styles.container}>
      <Title title="Home" />
      <TouchableOpacity
        styles={styles.container}
        onPress={() => navigation.navigate("Categories")}
      ></TouchableOpacity>
      <TouchableOpacity
        styles={styles.container}
        onPress={() => navigation.navigate("Categories")}
      ></TouchableOpacity>
    </View>
  );
}
