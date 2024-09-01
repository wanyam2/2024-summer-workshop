const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      const html = `
    <h2>한밭대학교 무선통신연구실</h2>
    <h3>이은채</h3>
    <h4>너무재밋 당!!!!!!!!!!!!!!!!!</h4>
`;
      return new Response(html, {
        headers: {
          "content-type": "text/html",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listening on ${server.url}`);
