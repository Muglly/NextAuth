import { signOut } from 'next-auth/react';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <img src="https://github.com/muglly.png" alt="foto de perfil" />
      <button type="submit" onClick={() => signOut()}>
        sair
      </button>
    </S.Container>
  );
}
