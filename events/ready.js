module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("faire de la musique", {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
