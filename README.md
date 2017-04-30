# Ask NASA
### Making NASA data accessible to anyone at anytime and anywhere.

Presentation: https://docs.google.com/presentation/d/1T8YvBAZVBxI0xmD8nu6K7NUw_h3TgHr1sgtt-XlMvzY
Access: Facebook search for page "Ask NASA", send an inquiry!

## The NASA SpaceApps Challenge 2017: Data Concierge

Develop an artificial intelligence tool to help Earth science data users and enthusiasts find datasets and resources of interest!

## The Problem

Have you ever wondered "What is the second longest lasting wildfire during last year?" or the "details of the biggest asteroid that landed on Earth during last decade?"
Your first intuition would tell you to ask Google, and it would provide somewhat relevant results.
**The difficult part** is to dig through search results then do data analysis if no one else did it first.

## The Solution

By providing a more organic interface for data enthusiasts and researchers alike in the form of a Specialized Personal Assistance easily accessible by anyone who has Facebook Messenger installed on their phone or opened online, the aforementioned **difficult part** will be bypassed, as the bot will query the user inquiry and provide straight answers and along the source.

## Target Audience

1. "I am an environmental science professor. I want to find a dataset of wildfire intensity for my students to work with. I would Ask NASA 
  * 'How much has the ice cap volume decreased over the past 10 years?' 
  * 'The ice cap volume has decreased ARBITRARY_AMOUNT% over the past 10 years.' 
  * 'What is the source?' 
  * 'My main source right now is "EXAMPLE ICE CAP DATASET" from NASA, which includes information on ice cap volume of the last 7 days globally. You can obtain this information in the following link: https://sampleurl.nasa.com/example_dataset.csv'

2. "I am a reporter who wants to write a story about a recent devastating forest fire and compare it to recent relevant data. I would Ask NASA
  * 'What is the second strongest fire during the last month in Palo Alto?'
  * 'The strongest fire during the last month in Palo Alto occurred on DATE, spanning over AREA square meters and took HOURS hours to be suppressed.'

3. "I am a second grader who is fascinated by space. I would ask NASA
  * 'What is the biggest asteroid that hit Earth during the last 10 years?'
  * 'The biggest asteroid in diameter that landed on Earth during the last 10 years is rock ROCK_NUMBER with a diameter of DIAMETER.'

## Working prototype limitations

Due to time constraints, we only incorporated one sample dataset: "Active Fire Data." 
The dataset in use is scaled down because it's limited by Google geocode query limit.
Slight imprecision on the neighboring State long-lat.
Although the Assistance is powered by API.AI, which supports native machine learning and constantly improves itself, the Assistance is still in its infancy and might not reply as well as a trained Assistance.

## Down the road

* Short-Term Goals
  1. Incorporate all available NASA datasets on the official site and data.world into the server.
  2. Crowdsource or write the data analysis algorithm for each respective dataset
  3. Transition from a local server to a web server.
  4. Train API.AI so it could recognize the inquiry for every available dataset.
* Long-Term Goal
  1. Marketing
  2. Make the barebone structure commercially available for other services other than just NASA (on a separate Assistance)
