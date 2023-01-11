import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { TemplateHome } from 'template/TemplateHome';

export default function Home() {
  return <TemplateHome />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
