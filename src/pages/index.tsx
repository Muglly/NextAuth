import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import TemplateLogin from 'template/TemplateLogin';

export default function Login() {
  return <TemplateLogin />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: '/home',
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
