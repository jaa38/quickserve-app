import React from "react";
import { View } from "react-native";
import AppText from "../../components/AppText";

const VerifyCode = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText variant="heading-lg">Verify Code</AppText>
    </View>
  );
};

export default VerifyCode;