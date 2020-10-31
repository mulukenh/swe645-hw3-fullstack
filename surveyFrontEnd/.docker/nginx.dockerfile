FROM nginx:alpine

LABEL author="Muluken Taye" 

COPY ./.docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]