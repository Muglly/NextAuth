import { GetServerSideProps } from 'next';
import { TemplateLogin } from 'template/TemplateLogin';

export default function Login() {
  return <TemplateLogin />;
}

export const getServerSideProps: GetServerSideProps = (context) => {
  return {
    props: {},
  };
};
