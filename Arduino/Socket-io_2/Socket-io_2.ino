#include <Arduino.h>
#include <NTPClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <WiFiUdp.h>
#include <SocketIoClient.h>
#include <ArduinoJson.h>

#define USE_SERIAL Serial
#define relayPin 12
#define buttonPin 0

const long utcOffsetInSeconds = 3600;
char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", utcOffsetInSeconds);

const String deviceId = "light_1";

unsigned int lastInterrupt = millis();
bool hasReleased = true;

ESP8266WiFiMulti WiFiMulti;
SocketIoClient webSocket;

DynamicJsonDocument doc(2048);
bool relayState = false;

void ICACHE_RAM_ATTR ISRoutine();

void onSwitchOn(const char * payload, size_t length) {
  deserializeJson(doc, payload);
  USE_SERIAL.printf("got message: %s\n", payload);
  
  const String id = doc["deviceId"];
  if(id == deviceId){
    relayState = true;
    emitStatusChange();
    digitalWrite(relayPin, relayState);
  }
}

void onSwitchOff(const char * payload, size_t length) {
  deserializeJson(doc, payload);
  USE_SERIAL.printf("got message: %s\n", payload);
  
  const String id = doc["deviceId"];
  if(id == deviceId){
    relayState = false;
    emitStatusChange();
    digitalWrite(relayPin, relayState);
  }
}

void emitStatusChange(){
  webSocket.emit("statusChange", (String("{\"deviceId\": \"") + deviceId + "\", \"status\": \"" + (relayState ? "on" : "off") + "\"}").c_str());
}

void emitControllerConnect(const char * payload, size_t length){
  webSocket.emit("controllerConnection", (String("\"") + deviceId + "\"").c_str());  
}

void onControllerDisconnect(const char * payload, size_t length) {
  deserializeJson(doc, payload);
  USE_SERIAL.printf("got message: %s\n", payload);
  
  const String id = doc["deviceId"];
  if(id == deviceId){
    emitControllerConnect("", 0);
  }
}

void onInitialize(const char * payload, size_t length){
  USE_SERIAL.printf("got message: %s\n", payload);
  DeserializationError error = deserializeJson(doc, payload);
  if (error) {
    USE_SERIAL.print(F("deserializeJson() failed: "));
    USE_SERIAL.println(error.c_str());
    return;
  }
  int index;
  bool found = false;
  for(int i=0; i< doc.size(); i++){
    if(doc[i]["deviceId"] == deviceId){
      found = true;
      index = i;
      break;
    }
  }
  if(not found){
    return;
  }
  const String status = doc[index]["status"];
  relayState = (status=="on");
  digitalWrite(relayPin, relayState);
  
}

void ISRoutine(){
  if(millis()-lastInterrupt > 100){
    USE_SERIAL.println("Toggle");
    relayState = !relayState;
    emitStatusChange();
    digitalWrite(relayPin, relayState);
  }
  lastInterrupt = millis();
}

void setup() {
  pinMode(relayPin, OUTPUT);
  USE_SERIAL.begin(115200);
  USE_SERIAL.setDebugOutput(true);
  USE_SERIAL.println();
  USE_SERIAL.println();
  USE_SERIAL.println();
  for(uint8_t t = 4; t > 0; t--) {
    USE_SERIAL.printf("[SETUP] BOOT WAIT %d...\n", t);
    USE_SERIAL.flush();
    delay(1000);
  }

  WiFiMulti.addAP("Molagnies WiFi", "molagnies");
  while(WiFiMulti.run() != WL_CONNECTED){delay(100);}

  webSocket.begin("molagnies.hd.free.fr", 4000);
  webSocket.on("onConnect", emitControllerConnect);
  webSocket.on("onControllerDisconnect", onControllerDisconnect);
  webSocket.on("onInitialize", onInitialize);
  webSocket.on("onSwitchOn", onSwitchOn);
  webSocket.on("onSwitchOn", onSwitchOff);

  timeClient.begin();
  attachInterrupt(digitalPinToInterrupt(buttonPin), ISRoutine, FALLING);
}

void loop() {
  timeClient.update();
  webSocket.loop();
  if(!digitalRead(buttonPin)){
    lastInterrupt = millis();
  }
  return;
  Serial.print(daysOfTheWeek[timeClient.getDay()]);
  Serial.print(", ");
  Serial.print(timeClient.getHours());
  Serial.print(":");
  Serial.print(timeClient.getMinutes());
  Serial.print(":");
  Serial.println(timeClient.getSeconds());
}
