const stripe = require("stripe")(process.env.STRIPE_TEST);

const router = require("express").Router();

router.post("/", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Stubborn Attachments",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/checkout?success=true",
    cancel_url: "http://localhost:3000/checkout?canceled=true",
  });

  res.json({ id: session.id });
});

module.exports = router;
