# Offline Web Applications

## Why Offline?
  + Many applications are not only viewed on the traditional browser
    + Mobile Web Applications (Including native and native-looking)
    + Desktop Applications (Electron)

## Why Offline-First?
  + Like "mobile-first" it is much easier to add offline functionality while app is being built/designed
  + Is likely to influence overall architectural decisions

## What does "Offline" really mean?
  + You have an IP?
  + You can reach "the internet"?

## Detecting connection state
  + `Navigator.onLine`


## Creating an Offline Web Application
  1. Identify required resources
    + Static Artifacts
    + Data from services
  2. Identify a offline-mitigation strategy for each resource identified

### Identifying required resources
  + JS/HTML/CSS Files needed to render application
  + Mostly static small reference data
    + Available options for a select
  + Mostly static large reference data
    + Locale message bundles
  + Dynamic data that application relies on
  + Data that the user is permitted to modify or delete
  + Sensitive data

## Strategy 1 : Storage First; Server Second
  + Reading
    + Read from storage and call server afterwards
  + Writing
    + Write updates to storage and wait for connection to send to server
  + Fast (Even when online!)

## Strategy 2 : Server First; Storage Second
  + Always try to use the server and fall back to cache only when server is not available.
  + Slow when server is unavailable

## Strategy 3 : Server Only
  + Remove features from the application when server is not available.
  + Display message with a "retry" countdown timer

## We don't need a stinking server
  + Apps distributed through app store.  Have no need to contact a server. (Ex. Calculator)
  + Not really what we are here to talk about.
  
## Technologies Available

### Knowing Connection State
### Storing Application Artifacts (AppCache)
### Storing Data from Server
### Authentication
### Sensitive Data



## Caution
  + Making a Offline Web Application introduces a lot of state that needs to be managed

### Links
  + https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine (And the links at the bottom of this page.)
