FROM    node:14.1-alpine AS builder
WORKDIR /app
COPY    angularApp/package.json angularApp/package-lock.json ./
RUN     npm install
ENV     PATH="./node_modules/.bin:$PATH"
COPY    ./angularApp/ ./
RUN     ng build --prod

FROM    nginx:1.17-alpine
COPY    --from=builder /app/dist/swe645-assignment3 /usr/share/nginx/html