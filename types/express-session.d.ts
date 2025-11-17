import "express-session";

declare module "express-session" {
  interface SessionData {
    tokenCache?: string;
    accessToken?: string;
    idToken?: string;
    account?: any;
    isAuthenticated?: boolean;
    pkceCodes?: {
      challengeMethod: string;
      verifier: string;
      challenge: string;
    };
    authCodeUrlRequest?: any;
    authCodeRequest?: any;
  }
}
