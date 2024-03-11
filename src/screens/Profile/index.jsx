import { View } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";

export default function Profile() {
  return (
    <View>
      <Title styles={styles.container} title="Perfil" />
    </View>
  );
}
