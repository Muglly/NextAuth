import { useSession } from 'next-auth/react';
import * as S from './styles';

export function UserInfo() {
  const { data: session } = useSession();
  return (
    <S.InfoContainer>
      <img
        src={session?.user?.image as string}
        alt={session?.user?.name as string}
      />
      <div className="infoContainer">
        <h4>Relatório de</h4>
        <h1>{session?.user?.name as string}</h1>
      </div>
    </S.InfoContainer>
  );
}
