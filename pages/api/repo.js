const fetch = require("isomorphic-unfetch");

export default async function handler(req, res) {
  let bespokelemur = await (
    await fetch("https://api.github.com/users/BespokeLemur/repos", {
      headers: {
        Authorization: "token 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"
      },
    })
  ).json();
  try {
    res.send(bespokelemur);
  } catch (e) {
    res.send(null);
  }
}
