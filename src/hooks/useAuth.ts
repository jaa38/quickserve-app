import { useEffect, useState } from "react";
import { getToken } from "../services/auth";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = await getToken();
      setToken(storedToken);
      setLoading(false);
    };

    checkAuth();
  }, []);

  return { token, loading };
};