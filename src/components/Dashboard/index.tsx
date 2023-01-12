import { UserInfo } from 'components/UserInfo';
import * as S from './styles';

export default function Dashboard() {
  return (
    <S.DashContainer>
      <S.TimeList>
        <UserInfo />
      </S.TimeList>
    </S.DashContainer>
  );
}
