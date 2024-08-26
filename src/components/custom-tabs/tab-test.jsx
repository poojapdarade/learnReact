import { Tabs } from "./tabs";

function RandomComponent() {
  return <div>Some Random Content</div>;
}

export function TabTest() {
  const tabs = [
    { label: "Tab 1", content: <div>This is content for Tab 1</div> },
    { label: "Tab 2", content: <div>"This is content for Tab 2</div> },
    { label: "Tab 3", content: <div>This is content for Tab 3</div> },
    { label: "Tab 4", content: <RandomComponent /> },
  ];

  return <Tabs tabsContent={tabs} />;
}
