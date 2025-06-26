/**
 * Auth configuration for Convex backend.
 * Integrate with Clerk or custom provider.
 *
 * To connect authentication from frontend,
 * - Set up Clerk/public keys in your Convex environment.
 * - Refer to Convex docs: https://docs.convex.dev/auth/clerk
 * 
 * Add logic for session validation in user-facing mutations/queries.
 */

module.exports = {
  providers: [
    // Example: "clerk" or "none"
    "clerk",
  ],
  // Add session validation helpers in your server functions.
};
