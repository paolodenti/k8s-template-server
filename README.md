# Test REST API for K8s template

REST API backend template for [https://github.com/paolodenti/k8s-template](https://github.com/paolodenti/k8s-template)

* Node
* Express
* Mongoose

## Environment variables

`PORT`: http post, default to `8080`
`MONGO_HOST`: mongo host name, defaults to `localhost`
`MONGO_DB`: mongo database name, defaults to test
`MONGO_USERNAME`: optional mongo database username
`MONGO_PASSWORD`: optional mongo database password
`CORS_ON`: if `"true"`, cors is enabled and the api can be used in development. Defaults to false

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
    "body": "the post body"
}
```
