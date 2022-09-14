---
layout: post
author: jays1ngh
categories: jekyll
date: 2022-09-14
thumbnail:
image:
---
## Why this is documented
Well! I am installing Jekyll locally on my freshly built Windows OS, it is a great opportunity for me to document the steps.

## Prerequisites
Checkout the official [Jekyll](https://jekyllrb.com/) website and prerequisites should be listed on top of the [docs page](https://jekyllrb.com/docs/).
1. Ruby version 2.5.0 or higher (at the time of writing this blog)
2. RubyGems
3. GCC and Make

## Install the prerequisites
1. Alright, let's go and download Ruby for Windows. Go to [RubyInstaller website](https://rubyinstaller.org/) and hit the big red *Download* button. This will take you to the next page where you select the installer. Go with the *WITH DEVKIT* as this will have the most compatible Gems. I downloaded the top one from the list from *WITH DEVKIT*, version 3.1.2-1(64). 
2. Run the downloaded exwe file. Keep everything default checked and leave MSYS2 checked as well.

![image](https://user-images.githubusercontent.com/72841224/190127486-79a57e23-f67c-4327-a905-856f8db5a373.png)

3. Finish it off, by pressing the finish button on the final screen by keeping *Run ridk install* checked.

![image](https://user-images.githubusercontent.com/72841224/190129586-6d4c39d8-281f-420d-904a-15cd4028b6ca.png)

4. Installation is nearly done (nearly hehe), in the command windows select option 3 to complete it.

![image](https://user-images.githubusercontent.com/72841224/190130148-a47e835a-aa2f-4711-8826-0a94dfab472d.png)

5. Let's confirm what we installed so far.
- Ruby: Run below in CMD or PowerShell, and you should see the Ruby version number
```powershell
Ruby -v updated
```
- Gems: Check version of Gems in CMD or PowerShell
```powershell
gem -v
```
Move forward if you have successfully checked Ruby and Gems version.

6. Finally, install Jekyll and Bundler from a CMD. CMD is recommended but I ran from PowerShell and it worked just fine.
```powershell
gem install jekyll bundler
```

7. We are done and check the Jekyll version in CMD or PowerShell
```powershell
jekyll -v
````
