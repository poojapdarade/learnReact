import { LightDarkMode } from "./components/light-dark mode";

export function FeatureFlags() {
  const componentsToRender = [
    { key: "showLightDarkMode", component: <LightDarkMode /> },
  ];
  return (
    <div>
      <h1>Feature Flags</h1>
    </div>
  );
}
