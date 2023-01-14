import TabContent from 'components/TabContent';
import Time from 'components/Time';
import { UserInfo } from 'components/UserInfo';
import * as S from './styles';

export default function Dashboard() {
  return (
    <S.DashContainer>
      <S.TimeList>
        <UserInfo />
        <Time />
      </S.TimeList>

      <div className="tracker tabContainer">
        <TabContent tab="daily" className="tabContent active" />
      </div>
    </S.DashContainer>
  );
}
