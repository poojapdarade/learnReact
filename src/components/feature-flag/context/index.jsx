import { createContext, useEffect, useState } from "react";
import { featureFlagsDataServiceCall } from "../data";

export const FeatureFlagContext = createContext(null);

export function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      const response = await featureFlagsDataServiceCall();
      console.log(response);
      setEnabledFlags(response);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ enabledFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
