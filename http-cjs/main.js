const { createApp } = require("@galatajs/app");
const { createHttpServer, createRouter } = require("@galatajs/http");

const app = createApp();
const server = createHttpServer();
app.register(server);

const router = createRouter({ prefix: "blog" });

const posts = [];

router.get("", (req, res) => {
  res.successData("Posts fetched successfully", posts);
});

router.get(":id", (req, res) => {
  const post = posts.find((post) => post.id === +req.params.id);
  if (post) {
    res.successData("Post fetched successfully", post);
  } else {
    res.notFound("Post not found");
  }
});

router.post("", (req, res) => {
  const post = {
    id: Math.trunc(Math.random() * 1000),
    title: req.body.title,
  };
  posts.push(post);
  res.successData("Post created successfully", post);
});

app.start().then(() => {
  console.log(
    `Server started on http://${server.config.host}:${server.config.port}`
  );
});
