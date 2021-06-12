const stripe = require("stripe")(process.env.STRIPE_TEST);

const router = require("express").Router();

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 2000;
};

router.post("/gear-and-season", async (req, res) => {
  const { info } = req.body;
  try {
    const session = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(info),
      currency: "usd",
    });
    res.status(200).send(session.client_secret);
  } catch (err) {
    res.status(500).json({ statuscode: 500, message: err.message });
  }
});

module.exports = router;
