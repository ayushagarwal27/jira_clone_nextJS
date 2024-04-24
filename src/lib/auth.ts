import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { prisma } from "./prisma";

// import type {
//   GetServerSidePropsContext,
//   NextApiRequest,
//   NextApiResponse,
// } from "next";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  // callbacks: {
  //   async session({ session }) {
  //     if (session.user?.email) {
  //       const userId = await prisma.user.findUnique({
  //         where: {
  //           email: session.user?.email,
  //         },
  //         select: {
  //           id: true,
  //         },
  //       });
  //
  //       session.user.id = userId?.id;
  //     }
  //     return session;
  //   },
  // },
};

// Use it in server contexts
// export function auth(
//   ...args:
//     | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
//     | [NextApiRequest, NextApiResponse]
//     | []
// ) {
//   return getServerSession(...args, authOptions);
// }
