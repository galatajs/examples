import { createApp, App } from "@galatajs/app";
import { createWsApp, WsApp, Socket, Request, Response } from "@galatajs/ws";

const app: App = createApp();
const ws: WsApp = createWsApp();
app.register(ws);

type Post = {
  id: number;
  title: string;
};

const posts: Post[] = [];

ws.listen("blogs_list", (socket: Socket, req: Request, res: Response) => {
  res.successData<Post[]>("Posts successfully fetched", posts);
});

ws.listen("blogs_create", (socket: Socket, req: Request, res: Response) => {
  const post: Post = {
    id: Math.trunc(Math.random() * 1000),
    title: req.body.body.title,
  };
  posts.push(post);
  res.successData<Post>("Post created successfully", post);
});

ws.listen("blogs_detail", (socket: Socket, req: Request, res: Response) => {
  const post = posts.find((post) => post.id === +req.body.body.id);
  if (post) {
    res.successData<Post>("Post fetched successfully", post);
  } else {
    res.notFound("Post not found");
  }
});

app.start().then(() => {
  console.log(`Server started on http://localhost:${ws.config.port}`);
});
