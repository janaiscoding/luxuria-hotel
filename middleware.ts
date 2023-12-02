export { default } from "next-auth/middleware";

// Protecting routes client side

export const config = { matcher: ["/dashboard"] };
