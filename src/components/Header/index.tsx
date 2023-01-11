import * as S from './styles';

export function Header({ session }) {
  return (
    <S.Container>
      {session?.user?.image && (
        <img src={session.user.image} alt="foto de perfil" />
      )}

      <button type="submit" onClick={() => {}}>
        sair
      </button>
    </S.Container>
  );
}
