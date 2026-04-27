import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";
import { theme } from "../themes";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const { token, loading } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (!loading && !token) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" as never }],
      });
    }
  }, [token, loading]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.background.primary,
        }}
      >
        <ActivityIndicator />
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;