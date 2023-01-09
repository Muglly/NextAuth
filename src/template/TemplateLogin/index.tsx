import { FiGithub, FiLock, FiUser } from 'react-icons/fi';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

import * as S from './styles';

export function TemplateLogin() {
  return (
    <S.Flex>
      <form onSubmit={() => {}}>
        <S.Box>
          <p>Faça login com sua conta</p>
          <div className="icon">
            <FiUser />
            <input type="email" placeholder="email" />
          </div>
          <div className="icon">
            <FiLock />
            <input placeholder="Senha" type="password" />
          </div>
          <S.FlexColumn>
            <button type="submit">Entrar</button>
            <Link href="#">
              Não tem uma conta?
              <span> Registre-se</span>
            </Link>
          </S.FlexColumn>

          <S.FlexGit>
            <p>Ou entre com</p>
            <button onClick={() => signIn('github')}>
              <FiGithub /> Github
            </button>
          </S.FlexGit>
        </S.Box>
      </form>
    </S.Flex>
  );
}
