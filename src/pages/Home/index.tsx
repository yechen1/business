import Guide from '@/components/Guide';
import PageHeader from '@/components/PageHeader';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    // <PageContainer ghost>
      
    // </PageContainer>
    <PageHeader />
  );
};

export default HomePage;
