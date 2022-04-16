const fetch = require("isomorphic-unfetch");

const projects = [
  {
    "id": "1",
    "name": "Meta Bot",
    "image": "https://i.ibb.co/WVdvKBr/metabot-tk.png",
    "description": "The most advanced Discord giveaway bot. Giveaway requirements, boost system and more!",
    "color": "#2358DC",
    "link": "https://metabot.tk"
  },
  {
    "id": "2",
    "name": "Emirhan İnce",
    "image": "https://i.ibb.co/kDfmL1V/emirhanince-tk.png",
    "description": "own personal site",
    "color": "#7232DF",
    "link": "https://emirhanince.tk"
  },
];

const quotes = {
  "text": "To be genius has an absolute limit, stupidity never.",
  "say": "Albert Einstein"
}

const spotifyTopSong = [
  {
    "number": "1",
    "name": "Endless Ride",
    "dec": "HKTN, Gidbeats"
  },
  {
    "number": "2",
    "name": "Toxic",
    "dec": "BoyWithUke"
  },
  {
    "number": "3",
    "name": "lovely",
    "dec": "Bleedingxheart"
  },
  {
    "number": "4",
    "name": "Forever In My Mind",
    "dec": "LiLucifer"
  }
]

const bookmarks = [
  {
    "id": "1",
    "image": "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
    "link": "https://vercel.com"
  },
  {
    "id": "2",
    "image": "https://www.markdownguide.org/assets/images/markdown-guide-og.jpg",
    "link": "https://www.markdownguide.org/"
  },
  {
    "id": "3",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV42ikr2UR7zq-EYqyFoUuKGdhM0_1d7s68g&usqp=CAU",
    "link": "https://github.com/emmabostian/developer-portfolios"
  },
  {
    "id": "4",
    "image": "https://api.roxza.me/v1/capture?link=convertio.co",
    "link": "https://convertio.co/tr/"
  },
  {
    "id": "5",
    "image": "https://pbs.twimg.com/profile_images/1366808543773384704/8qFXRmFc_400x400.png",
    "link": "https://fonts.google.com/"
  },
  {
    "id": "6",
    "image": "https://api.roxza.me/v1/capture?link=linkcord.swoth.xyz",
    "link": "https://linkcord.swoth.xyz/"
  },
  {
    "id": "7",
    "image": "https://chakra-ui.com/twitter-og-image.png",
    "link": "https://chakra-ui.com/"
  },
  {
    "id": "8",
    "image": "https://api.roxza.me/v1/capture?link=checklist.design",
    "link": "https://www.checklist.design/"
  },
  {
    "id": "9",
    "image": "https://simpleicons.org/images/og.png",
    "link": "https://simpleicons.org/"
  },
  {
    "id": "10",
    "image": "https://mui.com/static/social-previews/default-preview.jpg",
    "link": "https://mui.com/"
  },
  {
    "id": "11",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV42ikr2UR7zq-EYqyFoUuKGdhM0_1d7s68g&usqp=CAU",
    "link": "https://github.com/js-org/js.org"
  }
]

export default async function handler(req, res) {
  let user = await (await fetch("https://api.lanyard.rest/v1/users/783416346544832512")).json();
  try {
    res.send({
      status: true,
      data: {
        user: {
          username: user.data.discord_user.username,
          public_flags: user.data.discord_user.public_flags,
          id: user.data.discord_user.id,
          discriminator: user.data.discord_user.discriminator,
          avatar: user.data.discord_user.avatar,
          status: user.data.discord_status,
          spotify: user.data.spotify,
          vsc: user.data.activities.find(d=> d.name === "Visual Studio Code") ? true : null

        },
        projects: projects,
        spotifyTopSong: spotifyTopSong,
        quotes: quotes,
        bookmarks: bookmarks
      },
    });
  } catch (e) {
    res.send({ status: false, data: null });
  }
}
