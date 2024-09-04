import { LightDarkMode } from "..light-dark mode";

export function FeatureFlags() {
  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <LightDarkMode /> },
  ];
  return (
    <div>
      <h1>Feature Flags</h1>
    </div>
  );
}
