// Load environment variables at the very top
const dotenv = require("dotenv");
dotenv.config(); // ensure this runs before anything else

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_KEY); // Stripe key from .env

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Verify Stripe key is present
if (!process.env.STRIPE_KEY) {
  console.error("Stripe key is missing");
  throw new Error("Stripe key is missing");
}

const app = express();

// Middleware
app.use(cors({ origin: true })); // fixed typo from 'origion'
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// Stripe payment - POST for production
app.post("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total);
    if (!total || total <= 0) {
      return res.status(400).json({
        message: "Payment amount must be greater than zero (0).",
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });

    return res.status(200).json({
      clientPaymentSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error("Stripe payment error:", error);
    return res
      .status(500)
      .json({ message: "Payment failed", error: error.message });
  }
});

// Stripe payment - GET for testing (optional)
app.get("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total);
    if (!total || total <= 0) {
      return res.status(400).json({
        message: "Payment amount must be greater than zero (0).",
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "USD",
    });

    return res.status(200).json({
      clientPaymentSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error("Stripe payment error:", error);
    return res
      .status(500)
      .json({ message: "Payment failed", error: error.message });
  }
});

// Export the app as a Firebase Function
exports.api = onRequest(app);
