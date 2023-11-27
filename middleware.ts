export { default } from "next-auth/middleware";

// Not sure if I want to use this yet but this will be useful for protecting routes.

export const config = { matcher: ["/profile"] };
