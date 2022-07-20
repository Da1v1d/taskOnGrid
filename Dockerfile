FROM node:16 AS production

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN yarn

COPY . .

RUN yarn run build

FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=production /app/build /usr/share/nginx/html