FROM    maven:3.6.3-jdk-11 as build
LABEL   author="Muluken Taye"
WORKDIR /app
ADD     surveyBackEnd/src ./src
ADD     surveyBackEnd/pom.xml .
RUN     mvn -f ./pom.xml clean package