import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Detailsscreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Details for the user {id}
      </Text>
    </View>
  );
};

export default Detailsscreen;
