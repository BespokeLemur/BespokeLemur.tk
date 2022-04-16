const { Webhook, EmbedBuilder } = require("discohook");
const webhook = new Webhook("https://discord.com/api/webhooks/964244072132927540/hpcZ59U64-cv5R-QqliZVPhE4bmqvT4yKiEx7MWb213c5W82vzauOy1DaMlf-vkJ667q");
export default function handler(req, res) {
  const body = req.body;
  if (!body.name || !body.email || !body.message)
    return res.status(400).json({ status: false, error: "401" });

  let name = body.name,
    email = body.email,
    message = body.message;
  /* Discord Webhook Sender */

  webhook.setUsername("Postacı Güvercin");

  const embed = new EmbedBuilder()
    .setTitle("Emirhan | Contact | ")
    .setAuthor("BespokeLemur", "https://i.ibb.co/hKhbzdk/IMG-20220107-WA0037.jpg", "https://emirhanince.tk")
    .addField("Name", name, true)
    .addField("Email", email, true)
    .addField("Message", message, true)
    .setColor("pink")
    .setTimestamp();

  webhook.send({ embeds: [embed] })
  .catch((error) => {
    res.status(400).json({status: false , error: "400"});
  })
  .then((response) => {
    res.status(200).json({status: true});
  })
}