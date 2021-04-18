FROM node:15.11.0-alpine3.10

WORKDIR /usr/restapi
COPY ./package.json  ./
COPY ./package-lock.json  ./
RUN npm install

COPY ./index.js ./.
COPY ./api-routes.js ./.
COPY ./default-route.js ./.
COPY ./postController.js ./.
COPY ./postModel.js ./.

CMD ["npm", "start", "--no-update-notifier"]
