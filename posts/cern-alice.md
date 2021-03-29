---
title: Cern ALICE
dot1: Streamlining technical workflow
dot2: Dashboard design
dot3: UX Research
description: Onderzoek en UX redesign  managementtool ALICE reactor
author: Daniel van der Schuur
opdrachtgever: Cern ALICE
date: 2021-03-23T15:48:18.034Z
duration: 6 Weken
technology: UX
thumbnail: /images/cern2.png
mockup: /images/cern2.png
---
**Introduction**

CERN is using several detectors to require data from executed experiments, one of those detectors is ALICE (A Large Ion Collider). At the ALICE detector there are several groups active in making sure the data gathered is reliable and secure. One of these groups are ‘shifters’; phd-students who are working at CERN for a few month, making shifts of 8 hours a day. Their task is to control incoming data and writing logs about them. 

The Jiskefet web app is the environment used by the shifters, however due to ALICE being updated, upgraded and repaired the coming 2 years now is the time to improve on the old user unfriendly system. CERN reached out to the University of applied sciences of Amsterdam to make the web-app more modern by using NodeJS, and improving the user experience as well, which is where Bjorn and I came into play. 

The scale and complexity of the content and use cases required a special approach, we decided not to focus on the content as much as you’d want to, because you’re not going to understand it, instead we focussed on the tasks each user needs to complete. 

**Research**

During the research Bjorn and I divided ourself, Bjorn focussed more on interviews and integration of other platforms and application, while I focussed more on context, users en the current Jiskefet system.

One of the first problems we encountered was rooted deep in the project; we couldn’t get in contact with users of the old system due to CERN being closed at this time, so we reached out to out few contacts in the organisations and send some interviews to ex-shifters we found on LinkedIn.

One positive thing is that shifters are often proud of their work time at CERN, so there are a lot of blogs and transparency in their works, I’ll briefly talk about our biggest insights.

**Users**

Shifters are phd-student in physics coming from all over the world. Their age vary from 22-60 with the mean around 30. They work at CERN for approx. 3 month, so team is constantly shifting.

New Shifters have 3 days of training prior to using the application, after that they have a so called ‘shadow shift’ where they are supervised by another shifter. It does occur however that shifters are still clueless with their go abouts, despite the week of training.

The manager of the bunch is the shift leader. This person is making sure everyone is doing their job properly and is the person that makes and divides tasks.

**Current Bookkeeping System**

The current system is an ux nightmare. One of our challenges was to research how the user wanted/needed the data to be visualised.



![Logbook old](/images/logbook_old.png "Logbook old")

  Context

After reading a couple of blogs and interviews we concluded that the stress that comes with being in a control room is pretty significant. People reported they didn’t know where to look for which information since they are looking at 4 monitors at the same time.

Shifters work in groups of approx. 8 other shifters and a shift leader, the shift leader is the person who divides the tasks among the shifters. At the start of a new shift the old shifter and new shifter talk each other through the most important event during the last shift, this is done completely vocally.

**Tasks & Content**

We can’t/don’t understand the vast majority of the data from the previous system. But we do understand the tasks and responsibilities that a shifter must do.

* Create a new log.
* Check incoming runs.
* Controle others’ logs.

**Design Challenge**

  "HOW CAN WE MAKE A SHIFT EASIER FOR A CERN SHIFTER BY SUPPLYING HIM/HER WITH THE TOOLS NEEDED AT THE RIGHT TIME?”

**Data Clustering**

Our folks over at CERN decided it would be a good idea to load every run and log with an unlimited and no structure regarding what can be a tag and what can’t. Everyone could made any tag they desired.

I thought this could be done better. I started out with requesting actual log data which I spit through to look for similarities, connections and basic structure and I found out each log had 2 components: an action and an object which the action was related to. I set up to lists to bring these together for easy and logical clustering for shifters.

**Subject**

* Hardware
* Software
* Server
* Electricity
* Boards
* Other

**Action**

* Success
* Failed
* Error
* Movement (Digital)
* Movement (Physical)
* Installation
* Update
* Other

**Screens & New Implementations**

Apart from basic UX improvements such as icons, bringing the useful data forward, color coding and making the application more personal by using profile pictures and actual names, we also created a few new features which would improve the workflow of a shifter.

One of our key founding was that shifters have a transfer conversation when one shift ends and the other starts. This was done vocally and shifters wrote down the most important things. We concluded this could be beneficial in the workflow of the app, so we created an ‘start of shift’-wizard which the two shifters could go through important logs and runs. Afterwards these could be saved as To-Do tasks.

One of which is the dashboard home screen. This is the screen the Shifter will look at 80% of the time, so we wanted to let the user access all the ‘priority tasks’.

We also implemented a notification system which allows a shifter to keep track of changes, interactions or follow ups on his previous logs.

Below you can see how the application will be used by shifters, to see the entire concept [click here](https://invis.io/K4SP8RKVHFM#/370809877_Important_Shift_Previous)

   Prototype

[Invision Prototype](https://invis.io/K4SP8RKVHFM#/370809877_Important_Shift_Previous)

**MVP**

[Github Repository](https://github.com/dorusth/Jiskefet) created by our developers and will be used as a base for the new app at CERN.

**Conclusion**

What you read was a summary of the work we've done during 6 weeks. Due to the small timeframe we weren't able to fully work out the features as much as we wanted to. The concept has yet to be tested on shifters/ex-shifters.