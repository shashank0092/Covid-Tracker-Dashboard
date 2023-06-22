import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider  from "next-auth/providers/linkedin"
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId:"1060767105174-j2r8jticvjt5dmodkb89pi9gfr7lbk3n.apps.googleusercontent.com",
            clientSecret:"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"
        })
        ,
        LinkedInProvider({
            clientId:"771zxxwm05phw4",
            clientSecret:'aYV0s4tdHV1ZPIpF'
        })
      ],
      secret:"shukla"
};
