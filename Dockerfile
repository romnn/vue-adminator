FROM node:latest AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:latest
EXPOSE 80
COPY --from=build /app/dist /serve
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
