import MenuList from "./menu-list";

export function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
