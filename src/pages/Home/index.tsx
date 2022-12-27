import CommonProPageContainer from '@/components/CommonProPageContainer';
import { useState } from 'react';
// import styles from './index.less';

const tabList = [
  {
    key: 'user-set',
    tab: '用户设置',
  },
  {
    key: 'role-set',
    tab: '权限设置',
  },
  {
    key: 'address-set',
    tab: '地址设置',
  },
];

const HomePage: React.FC = () => {
  // Tab 切换，无权限时；  有权限时
  const [activeTab, setActiveTab] = useState(() => {
    return tabList?.[0].key;
  });

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };
  return (
    <CommonProPageContainer
      title="title"
      content={<div>content</div>}
      extraContent={<div>extraContent</div>}
      tabList={tabList}
      tabActiveKey={activeTab}
      onTabChange={handleTabChange}
      tabBarExtraContent={<div>tabBarExtraContent额外的元素</div>}
      footer={['1', '2']}
    >
      首页1
    </CommonProPageContainer>
  );
};

export default HomePage;
