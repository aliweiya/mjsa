---
title: "Groovy, baby!"
author: Gaya
date: 2009-02-03
template: article.html
links:
  -
    title: Download
    desc: Getting Groovy in an SOA
    url: http://www.gayadesign.com/scripts/uploads/researchpaper.pdf
---
The last six months I've been researching a fairly new programming language with some of my classmates. In this period we've come to learn a lot about the language and the community surrounding it.  
 Our task was to investigate [Groovy](http://groovy.codehaus.org/), [Grails](http://grails.org/), and their position in a [SOA environment](http://en.wikipedia.org/wiki/Service-oriented_architecture).

After lots and lots of hours of work we managed to finally complete our research study and hold a course day for approx. 20 people at [HAN University of Applied Sciences](http://www.han.nl/start-en/).

<div class="border">[![Groovy, baby!](/articles/groovy-baby/grandeur.jpg "Groovy, baby!")](/articles/groovy-baby/)</div>I want to thank Bart van Zeeland, [Youssef El Messaoudi](http://koffieislekker.nl/), [Marco Kuiper](http://www.marcofolio.net/) and Jaap Mengers for being my colleagues during this study. I'd also like to thank Rody Middelkoop and Sander Leer for lecturing us.

<span class="more"></span>

Download it here:

[http://www.gayadesign.com/scripts/uploads/researchpaper.pdf](http://www.gayadesign.com/scripts/uploads/researchpaper.pdf)

This paper is aimed at answering the following question:

> *'What are the characteristics of Groovy (and Grails) and what impact do they have for an implementation in an SOA within enterprise applications?'*

Groovy is a dynamic language and utilizes the Java Virtual Machine. Its dynamic nature lies in the ability to alter its classes at runtime, thus allowing for constant change. Due to its foundation in Java, it can cooperate with and enrich the existing Java libraries. One of the more important features that Groovy provides, is the Meta-Object Protocol, which allows Groovy to perform its dynamic capabilities. In essence, each object has an accompanying Meta-Object which contains all properties in the form of a Map, thus allowing it to scale at runtime as needed.

When using Groovy for constructing webservices, some additional modules can be used. When using SOAP as the desired transport mechanism, the GroovyWS-module provides functionality that abstracts all of the low level transport operations through a simple interface. However, it is still in development and support is therefore minimal.Furthermore, only a very small part of the WS-Security stack is implemented which minimizes the developers choice for securing the webservices.

For RESTful webservices, Groovy's webframework Grails can be used. It has full support for all of the HTTP-request methods and provides url mapping. For exposing the SOA to its target audience, the Grails framework offers a quick start for developing a web interface that can interact with the SOA. Scaffolding allows Grails to generate both controllers and views based on the domain classes in the model, enabling rapid development. By default, all domain classes are persisted to a datastore through Grails Object Relational Mapping.

We believe that Groovy is mature enough to be used in a production environment, however Groovy's modules do not provide all needed functionality for SOA development, and therefor Java frameworks are still required.

*(Source*[* http://wiki.icaprojecten.nl/pages/viewpage.action?pageId=3571717*](http://wiki.icaprojecten.nl/pages/viewpage.action?pageId=3571717)*)*

All comments on the paper are welcome.