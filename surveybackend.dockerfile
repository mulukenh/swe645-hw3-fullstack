FROM    maven:3.6.3-jdk-11 as build
LABEL   author="Muluken Taye"
WORKDIR /app
ADD     surveyBackEnd/src ./src
ADD     surveyBackEnd/pom.xml .
RUN     mvn -f ./pom.xml clean package

FROM tomcat:8.5.43-jdk8
COPY --from=build /app/target/surveyBackEnd.war /usr/local/tomcat/webapps

# FROM tomcat:8.5.43-jdk8
# COPY surveyBackEnd/target/surveyBackEnd.war /usr/local/tomcat/webapps

