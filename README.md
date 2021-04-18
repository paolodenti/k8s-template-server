# Test REST API for K8s template

Test REST API, Node, Mongo, Express

## Environment variables

`PORT`: http post, default to `8080`
`MONGO_HOST`: mongo host name, defaults to `localhost`
`MONGO_DB`: mongo database name, defaults to test
`MONGO_USERNAME`: optional mongo database username
`MONGO_PASSWORD`: optional mongo database password

* GET `/api/posts`
* POST `/api/posts`
* GET `/api/posts/:id`
* PUT `/api/posts/:id`
* PATCH `/api/posts/:id`
* DELETE `/api/posts/:id`

A post is

```json
{
    "title": "the post title",
    "content": "the post content"
}
```
