<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/108695351?s=200&v=4" width="128" height="128">
</p>
<h3 align="center">@istanbul/examples http-ts</h3>
<p align="center">
  Http and TypeScript example of <code>istanbul</code> framework. 
</p>

## Install

```bash
npm install
```

## Usage

```bash
npm start
```

## Routes

This example offers 3 different api

### List

With this endpoint you can view all blogs.

| Path | Methods | Description | Params |
|------|---------|-------------|--------|
| `/blog` | `GET` | View all blogs | |

Example Request:

```http-request
GET http://localhost:3000/blog/
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

| Path | Methods | Description | Params |
|------|---------|-------------|--------|
| `/blog/:id` | `GET` | View all blogs | `id` |

Example Request:

```http-request
GET http://localhost:3000/blog/542
```

Example Response:

```json
{
    "success": true,
    "message": "Post fetched successfully",
    "data": {
        "id": 542,
        "title": "Hello World!"
    }
}
```

### Create

With this endpoint you can create a blog.

| Path | Methods | Description |
|------|---------|-------------|
| `/blog/` | `POST` | Create a blogs |

Request Body:

| Field | Type | Example |
|-------|------|---------|
| `title` | string | 'Hello World' |

Example Request:

```http-request
POST http://localhost:3000/blog/
Content-Type: application/json

{
    "title": "Hello World!"
}
```

Example Response:

```json
{
    "success": true,
    "message": "Post created successfully",
    "data": {
        "id": 542,
        "title": "abc"
    }
}
```