FROM    maven:3.6.3-jdk-11 as build
LABEL   author="Muluken Taye"
WORKDIR /app
COPY    surveyBackEnd/src ./src
COPY    surveyBackEnd/pom.xml .
RUN     mvn -f ./pom.xml clean package

From    tomcat:9.0-jdk15
COPY    --from=build /app/target/surveyBackEnd.war /usr/local/tomcat/webapps
