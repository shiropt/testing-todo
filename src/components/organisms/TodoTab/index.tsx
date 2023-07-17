import { FC } from 'react';
import { Tab } from '../../../@types';
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
type Props = {
  activeTab: Tab;
  handleTabChange: (tab: Tab) => void;
};
export const TodoTab: FC<Props> = ({ activeTab, handleTabChange }) => {
  const { t } = useTranslation();

  return (
    <TabsWrapper className="tabs">
      <TabWrapper
        $isActive={activeTab === Tab.All}
        className={`tab ${activeTab === Tab.All ? 'active' : ''}`}
        onClick={() => handleTabChange(Tab.All)}>
        {t('tab.all')}
      </TabWrapper>
      <TabWrapper
        $isActive={activeTab === Tab.Daily}
        className={`tab ${activeTab === Tab.Daily ? 'active' : ''}`}
        onClick={() => handleTabChange(Tab.Daily)}>
        {t('tab.thisWeek')}
      </TabWrapper>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;
const TabWrapper = styled.li<{ $isActive: boolean }>`
  flex: 1;
  padding: 10px;
  background-color: #f2f2f2;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    `
  background-color: #4caf50;
  color: #fff;`}
`;
