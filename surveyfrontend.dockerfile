FROM    nginx:alpine
LABEL   author="Muluken Taye"
COPY    angularApp/dist/surveyFrontEnd /usr/share/nginx/html
EXPOSE  80 443