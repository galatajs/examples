import { App, createApp } from "@istanbul/app";
import {
  createHttpServer,
  createRouter,
  Request,
  Response,
} from "@istanbul/http";

const app: App = createApp();
const server = createHttpServer();
app.register(server);

const router = createRouter({ prefix: "blog" });

type Post = {
  id: number;
  title: string;
};

const posts: Post[] = [];

router.get("", (req: Request, res: Response) => {
  res.successData<Post[]>("Posts fetched successfully", posts);
});

router.get(":id", (req: Request, res: Response) => {
  const post = posts.find((post) => post.id === +req.params.id);
  if (post) {
    res.successData<Post>("Post fetched successfully", post);
  } else {
    res.notFound("Post not found");
  }
});

router.post("", (req: Request, res: Response) => {
  const post: Post = {
    id: Math.trunc(Math.random() * 1000),
    title: req.body.title,
  };
  posts.push(post);
  res.successData<Post>("Post created successfully", post);
});

app.start().then(() => {
  console.log(
    `Server started on http://${server.config.host}:${server.config.port}`
  );
});
