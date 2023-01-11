import { Header } from 'components/Header';
import { useSession } from 'next-auth/react';
import * as S from './styles';

export function TemplateHome() {
  const { data: session } = useSession();

  return (
    <S.Container>
      <Header session={session} />
    </S.Container>
  );
}
