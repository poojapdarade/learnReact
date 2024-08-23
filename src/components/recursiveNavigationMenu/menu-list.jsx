import { menus } from "./data";
import { MenuItem } from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <div className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} key={} />)
        : null}
    </div>
  );
}
