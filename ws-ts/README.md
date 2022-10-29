<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/108695351?s=200&v=4" width="128" height="128">
</p>
<h3 align="center">@istanbul/examples ws-ts</h3>
<p align="center">
  Websocket and TypeScript example of <code>istanbul</code> framework. 
</p>

## Install

for server:

```bash
npm install
```

for client:

```bash
cd client
npm install
```

## Usage

for server:

```bash
npm start
```

for client:

```bash
cd client
npm run dev
```

## Listeners

This example offers 3 different api

### List

With this listener you can view all blogs.

| Event | Description | Params |
|------|-------------|--------|
| `blogs_list` | View all blogs | |

Example Request:

```javascript
socket.emit("blogs_list", null, (res) => {
    console.log('list response: ', res);
})
```

Example Response:

```json
{
    "success": true,
    "message": "Posts fetched successfully",
    "data": [
        {
            "id": 542,
            "title": "Hello World!"
        }
    ]
}
```

### Detail

With this endpoint you can view blog detail.

| Event | Description | Params |
|------|-------------|--------|
| `blogs_detail` | View all blogs | `id` |

Example Request:

```javascript
socket.emit("blogs_detail", { id: 123 }, (res) => {
console.log("detail response: ", res);
});
```

Example Response:

```json
{
    "success": true,
    "message": "Post fetched successfully",
    "data": {
        "id": 123,
        "title": "Hello World!"
    }
}
```

### Create

With this listener you can create a blog.

| Event | Description |
|------|-------------|
| `blogs_create` | Create a blogs |

Request Body:

| Field | Type | Example |
|-------|------|---------|
| `title` | string | 'Hello World' |

Example Request:

```javascript
socket.emit("blogs_create", { title: "Hello World!" }, (res) => {
    console.log("create response: ", res);
});
```

Example Response:

```json
{
    "success": true,
    "message": "Post created successfully",
    "data": {
        "id": 542,
        "title": "Hello World!"
    }
}
```