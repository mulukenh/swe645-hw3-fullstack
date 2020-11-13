# FROM    node:14.1-alpine AS builder
# WORKDIR /app
# COPY    surveyFrontEnd/package.json surveyFrontEnd/package-lock.json ./
# RUN     npm install
# ENV     PATH="./node_modules/.bin:$PATH"
# COPY    ./surveyFrontEnd/ ./
# RUN     ng build --prod

# FROM    nginx:1.17-alpine
# COPY    --from=builder /app/dist/swe645-assignment3 /usr/share/nginx/html

FROM    nginx:1.17-alpine
COPY    surveyFrontEnd/dist/swe645-assignment3 /usr/share/nginx/html