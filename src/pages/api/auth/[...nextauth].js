import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    }), 
    DiscordProvider({
      clientId: process.env.DISCORD_AUTH_CLIENT_ID, 
      clientSecret: process.env.DISCORD_AUTH_CLIENT_SECRET,
    })
  ], 
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }, 
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.provider = account.provider 
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.provider = token.provider
      
      return session
    },
  }, 
});

// fuck signIn() callback, đã thử fetch(), axios, và những cách khác đều không được, không gọi hoặc gọi thì gặp lỗi next-auth
// accessToken
// : 
// "mmRoJSicFV2GYHmbRR9ujwYxpPzA0a"
// expires
// : 
// "2023-09-07T02:39:01.399Z"
// provider
// : 
// "discord"
// user
// : 
// email
// : 
// "nguyenthanhnam9396@gmail.com"
// image
// : 
// "https://cdn.discordapp.com/embed/avatars/0.png"
// name
// : 
// "nam9396"