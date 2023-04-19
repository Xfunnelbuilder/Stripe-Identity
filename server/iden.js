// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('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');

// In the route handler for /create-verification-session:
// Authenticate your user.

// Create the session.
const verificationSession = await stripe.identity.verificationSessions.create({
  type: 'document',
  metadata: {
    user_id: '{{USER_ID}}',
  },
});

// Return only the session URL to the frontend.
const url = verificationSession.url;
