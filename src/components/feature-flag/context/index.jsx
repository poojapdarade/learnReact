import { createContext } from "react";

export const FeatureFlagContext = createContext(null);

export function FeatureFlagGlobalState({ children }) {

    return {<FeatureFlagContext.Provider value{{}}>{children}</FeatureFlagContext.povider>};
}
