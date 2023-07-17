import { FC } from 'react';
import { Tab } from '../../../@types';
import { useTranslation } from 'react-i18next';
type Props = {
  activeTab: Tab;
  handleTabChange: (tab: Tab) => void;
};
export const TodoTab: FC<Props> = ({ activeTab, handleTabChange }) => {
  const { t } = useTranslation();

  return (
    <ul className="tabs">
      <li
        className={`tab ${activeTab === Tab.All ? 'active' : ''}`}
        onClick={() => handleTabChange(Tab.All)}>
        {t('tab.all')}
      </li>
      <li
        className={`tab ${activeTab === Tab.Daily ? 'active' : ''}`}
        onClick={() => handleTabChange(Tab.Daily)}>
        {t('tab.thisWeek')}
      </li>
    </ul>
  );
};
