import NextAuth from "next-auth";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

// const config = {
//   credentials: {
//     accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY,
//   },
//   region: process.env.NEXT_AUTH_AWS_REGION,
// };

// const client = DynamoDBDocument.from(new DynamoDB(config), {
//   marshallOptions: {
//     convertEmptyValues: true,
//     removeUndefinedValues: true,
//     convertClassInstanceToMap: true,
//     tableName: "Auth",
//   },
// });

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  // adapter: DynamoDBAdapter(client),
};

export default NextAuth(authOptions);
