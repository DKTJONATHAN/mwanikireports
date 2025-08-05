import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (
          credentials.username === adminUsername &&
          credentials.password === adminPassword
        ) {
          return { id: '1', name: 'Admin', email: 'admin@jonathanmwaniki.co.ke' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/admin/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);