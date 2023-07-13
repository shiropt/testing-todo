import { FC } from "react";
import { Tab } from "../../../types";
type Props = {
  activeTab: Tab;
  handleTabChange: (tab: Tab) => void;
};
export const TodoTab: FC<Props> = ({ activeTab, handleTabChange }) => {
  return (
    <ul className="tabs">
      <li className={`tab ${activeTab === Tab.All ? "active" : ""}`} onClick={() => handleTabChange(Tab.All)}>
        全てのTodoリスト
      </li>
      <li className={`tab ${activeTab === Tab.Daily ? "active" : ""}`} onClick={() => handleTabChange(Tab.Daily)}>
        今週のTodoリスト
      </li>
    </ul>
  );
};
