export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email id required" });
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({
          email,
          tags: ["nelsonmurungi.com"],
        }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      const text = await response.text();

      if (text.includes("already subscribed")) {
        return res.status(400).json({
          error: `OOPS! You're already subscribed to my mailing list.`,
        });
      }
      if (
        text.includes(
          "Sorry, our system has previously detected this email to be invalid or spammy."
        ) |
        text.includes(
          `Buttondown's email provider has marked this email as undeliverable`
        )
      ) {
        return res.status(400).json({
          error: `OOPS! This email has been marked as undeliverable or spammy. Try to use an active email.`,
        });
      }

      return res.status(400).json({
        error: text,
      });
    }

    return res
      .status(201)
      .json({ message: `You're successfully subscribed to my mailing list.` });
  } catch (err) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
