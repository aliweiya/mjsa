---
title: "Customize Eclipse to a webdeveloper’s IDE"
author: Gaya
date: 2009-01-02
template: article.html
---
There are a lot of ways to become a better, or at least faster, webdeveloper. For instance the use of a framework like [CakePHP](http://cakephp.org/) to make the developing process rapid.  
 One of the main things I found boosting my productivity is using a nice [IDE](http://en.wikipedia.org/wiki/Integrated_development_environment).

This article will describe how to create a PHP developer's IDE using Eclipse, Aptana and PDT.

[![Customize Eclipse to a webdeveloper's IDE](/articles/customize-eclipse-to-a-webdevelopers-ide/idepost.jpg "Customize Eclipse to a webdeveloper's IDE")](/articles/customize-eclipse-to-a-webdevelopers-ide/)

<span class="more"></span>

What should we do? Download the Aptana standalone or Eclipse? I my case, Eclipse was already installed. So I already  know how to work with it now.  
 I prefer having Aptana plugged into Eclipse because I also use Eclipse for other purposes than webdevelopment. This article will use the Aptana Eclipse plugin.

Follow the step by step guide to get a nice IDE for PHP developers.

**1. Download Eclipse**  
 An obvious step would be to download Eclipse. So get it at: [http://www.eclipse.org/downloads/](http://www.eclipse.org/downloads/)  
 Pick Eclipse IDE for Java EE Developers and choose your OS to the right.

<div class="border">![1](/articles/customize-eclipse-to-a-webdevelopers-ide/1.png "1")</div>**2. Extract Eclipse somewhere**  
 Eclipse will be downloaded as an archive. Pick a location you want to unzip the folder *eclipse*.  
 Startup *eclipse*.

<div class="border">![2](/articles/customize-eclipse-to-a-webdevelopers-ide/2.png "2")</div>**3. Get Aptana Eclipse Plugin**  
 Go to [http://www.aptana.com/studio/download](http://www.aptana.com/studio/download) and choose *Eclipse Plugin* as the installation type.  
 Click *download*, this will lead to an instructions page.

<div class="border">![3](/articles/customize-eclipse-to-a-webdevelopers-ide/3.png "3")</div>**4. Follow instructions**  
 Follow the instruction on the page. Or read the quick plugin install guide I wrote.

1. In Eclipse go to: *help* > *software updates*
2. Click on the tab *available software*
3. Click on the *+ add site* button to the right.
4. Enter the url from step 3 of the main guide *(http://update.aptana.com/update/studio/3.2/)*
5. Check the newly appeared box
6. Click *install*
7. *next* > *I accept* > *next*
8. wait... a while
9. restart eclipse

**5. Aptana will ask you to install SVN**  
 You'd probably want this! I tell you. SVN can save your projects.

**6. Time to install PHP functionality**  
 Go to: *help* > *software updates*

**7. Add DLTK site**  
 In the tab *available software* click on *add site*.  
 Enter the following url: *http://download.eclipse.org/technology/dltk/updates-dev/1.0/*

**8. Add PDT site**  
 Again, *add site* but now with this url: *http://download.eclipse.org/tools/pdt/updates/2.0/*

**9. Select Dynamic Languages Toolkit checkbox**  
 In the list to the left, two new sites should have appeared. Expand the Dynamic Languages site and check Dynamic Languages Tooltik (not the uncategorized).

<div class="border">![10](/articles/customize-eclipse-to-a-webdevelopers-ide/10.png "10")</div>**10. Select PDT update checkbox  
**Seach for *PDT* in the site list. Again do not check uncategorized.

<div class="border">![11](/articles/customize-eclipse-to-a-webdevelopers-ide/11.png "11")</div>**11. Install the plugins  
**Click *install*. Follow the instructions. Wait a while and restart Eclipse.

**12. Open the Aptana perspective**  
 Go to: *window *> *open perspective *> *other *> *aptana  
*

**13. Add an FTP site**  
 In the *file browser* (bottom left of the IDE) right click on *FTP *> *Add New FTP Site*.

<div class="border">![14](/articles/customize-eclipse-to-a-webdevelopers-ide/14.png "14")</div>**14. Fill in information**  
 Fill in your FTP account information. Preferably a test server for now, so you can mess around with the IDE a bit.

**15. Start browsing your FTP folders  
**You can now use the *file browser* to browse your PHP projects online. When you *open *a file it will be downloaded and when you *save* one it will be uploaded to your server. This is simple and quick if you have to adjust something in a PHP project.

Now you can start experiencing a rich IDE customized to your webdeveloping needs. If you have any tips on how to improve the work flow even more or if you miss something in this guide; Please comment on this article.

Happy developing!