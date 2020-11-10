From    tomcat:9.0-jdk15
LABEL   author="Muluken Taye"
#COPY    /app/target/surveyBackEnd.war /usr/local/tomcat/webapps
#CMD     ["catalina.sh", "run"]
EXPOSE  8080
