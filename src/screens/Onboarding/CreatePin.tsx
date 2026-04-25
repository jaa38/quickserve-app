import React from "react";
import { View } from "react-native";
import AppText from "../../components/AppText";

const CreatePin = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText variant="heading-lg">Create PIN</AppText>
    </View>
  );
};

export default CreatePin;