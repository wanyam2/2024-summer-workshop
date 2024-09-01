const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      return new Response("경 2024 신한 SOL 뱅크 KBO리그 챔피언 LG TWINS 축");
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listening on ${server.url}`);
