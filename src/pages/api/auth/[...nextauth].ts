import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'NextAuthCredential',
      credentials: {},
      async authorize(credentials) {
        console.log('Data Credential: ', credentials);

        return {
          name: 'Rafael Souza',
          email: 'rpsouza.dev@gmail.com',
          image: 'https://github.com/muglly.png',
        } as any;
      },
    }),
  ],
  secret: process.env.SECRET,
});
