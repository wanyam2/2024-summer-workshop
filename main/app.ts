const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      const html = `
      <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>한밭대학교 무선통신연구실</h2>
    <h3>이은채</h3>
    <h4>너무재밋 당!!!!!!!!!!!!!!!!!</h4>

</body>
</html>`;
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
