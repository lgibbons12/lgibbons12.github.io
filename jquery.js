$(document).ready(function() {
    // Get the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var text = urlParams.get('text');

    if (text == "war") {
      changeWords("War", 
      "This is the first big coding project I put my hands on. I was a junior trying to get into a senior only class, so I had to prove myself by creating a card game. I chose war, and used a package in python called pygame to run it. It is 99% functional, only including a couple bugs when there are multiple wars in a row, and includes a title and end screen with restarting possible. I spent a lot of time on it and am really proud of it as my first venture into coding.", "", "",
      "", "images/war.png", "https://github.com/lgibbons12/War", "Github Link");    
}
    else if (text == "ip") {
        changeWords("Intellectual Property Presentation",
        "This is a website that uses jquery that was presented to my AP Computer Science Class as my summer project. While it was one of my earlier coding projects, I am happy with the visuals and how it turned out.", "", "",
        "", "images/ip.png", "https://github.com/lgibbons12/Intellectual-Property-Presentation", "Github Link");
    }
    else if (text == "warV2") {
        changeWords("Summer Assignment V2",
        "This project was a redo of the summer assignment of the War game. I did my summer assignment using pygame, a framework I was familiar with, so transferring that code to javascript would be a new challenge. As a class, we learned how to draw the cards using class systems. This was a major learning moment for me as to that point I did not understand javascript classes. In the end, I was very proud of the final result, and unlike the python game, I could put it on a globally hosted server so my friends could actually play the game I created which was really cool.", "", "",
        "","images/warV2.png", "https://github.com/lgibbons12/Summer-Assignment-V2-War", "Github Link");
    }
    else if (text == "discord") {
        changeWords("Discord Bot",
        "This app connects to Discord in order to send and recieve commands between the code I wrote to Discord itself. At the start, it loads everything necessary to function, and resets all stored scores, values, etc. The bot uses a style of commands where it searches each message in the channel for commands. The first function the bot can run is a simple madlibs game, where it will tell you parts of speech to write, and then will output a funny story edited by you! The commands can prompt the user with madlibs, and then ml is the command used to input the words. After the words are inputted, the bot will return the completed madlibs",
        "The second function the bot can do is play rock paper scissors, and after one person wins 3 rounds it will declare a winner The bot also has a command to update the user on scores whenever they want. They user types rps and then r, p, or s to call the bot, and it will run the game. At any time, the user can write RPS Scores to display the scores.",
        "The biggest portion of the bot is its quizzing abilities. The bot can add terms to a list similar to quizlet, and then can quiz the user through multiple choice, written answers, and true and false! This bot can also update the user giving the number correct and percentage correct. It can display the terms, give the user multiple choice questions, writing questions, and true and false questions. At any point, the user can also get their stats of number and percentage of questions answered correctly.",
        "","images/discord.png", "https://github.com/lgibbons12/Liam-PyBot", "Github Link");
    }
    else if (text == "flik") {
        changeWords("FlikisDining Webscraping",
        "I hate waiting in lines at school for lunch, so I thought about ways to fix that. I landed on creating a pre-order service where students could have their lunches pre-packaged and able to be picked up. This would decrease lines and make getting food much more efficient. From that issue, I had the idea to create my own application that ran a possible pre-order system for school lunches. For me, being successful was taking the data from the website and being able to display it on a web browser so that people could submit pre-orders. In simple terms, this application uses a robot to: log into a menu website, store what the menu for the day is, display it on a form in a website",
        "Selenium Part! In this program, a python application using Selenium logs into a menu service called Nutrislice. The python library selenium allows me to code a robot to navigate the web browser. I pass through HTML identifiers like h1 or id = hello in order to point the robot in the right direction. Then, the robot performs whatever actions I tell it to on that element such as typing in Cannon School or clicking on a button. Once it has navigated to the main page, the robot uses selenium to extract all of the text on the web page with the menu.",
        "RegEx Part! Then, using a python library called Regular Expression, I divide the long string from the web page text into a digestible file. To do this, the code splits the string based on keywords inside of it. The meals are broken up into categories like Soup or Entrees/Sides, and I use these keywords to break the string into five categories: Soup, Entrees/Sides, Innovations, Vegetarian (I include an edge case in the code because sometimes the menu does not include a vegetarian option), Gluten Free. Once that is accomplished, I use line breaks in the strings to create lists of all of the foods in the different categories and push all of that to the file (flik.json)",
        "JSON Pulling! This part was the hardest to figure out, but I got it in the end. Using AJAX (Asynchronous Javascript and XML), I submit a request to pull the data from flik.json to the website. Displaying on Screen! Then, I display all of the foods on the screen using JQuery, a Javascript library that makes it easier to use Javascript to add HTML elements to the webpage. In conclusion, this project was a success and I am very satisfied with the result. Additionally, I could have the code run once daily using Windows Task Scheduler, I could get my computer to: Use Windows PowerShell to run the python script once to get the menu for the day, Use Windows PowerShell to commit the new JSON file to this repository so the website updates",
        "images/flik.png", "https://github.com/lgibbons12/Flik-WebScrape", "Github Link"
        );
    }
    else if (text == "cloud") {
        changeWords("The Cloud Presentation",
        "This website was used as a visual aid in a presentation about the implementation of the cloud. This included different types of services, tradeoffs, security issues, and the how the cloud actually functions. It used the javascript canvas function to create animations and make the website more interactive and not just a bunch of html elements", "", "", "",
        "images/cloud.png", "https://github.com/lgibbons12/The-Cloud", "Github Link");
    }
    else if (text == "stats") {
        changeWords("Statistics Web Application",
        "This simple web application takes in any .csv file provided by the user, and give quick summary, relationship, and graphing summaries that are understandable by a non-statistics savvy person. I decided to do this project because I really wanted to learn how to do statistics in python, and this allowed me to learn it and create a useful application that I could use to get ideas of datafiles quickly",
        "I learned how to do statistical analyses in python with the pandas and numpy libraries through FreeCodeCamp. It is similar to coding in R, a language that I already know, and I now understand how to create and manipulate dataframes to get information.Then, I learned how to create applications with the Python Web Framework called flask. I learned this in a tutorial by TechWithTim, where I could use python to run webpages.",
        "The flask webpage, with help from a SQLAlchemy database, stores user information, and can register whether the login information is correct. Additionally, if it is a new user, there is a webpage to create a new account which is then saved in the SQLAlchemy database. Flask operates on the back end and handles form submissions and movement between pages. As part of the flask tutorials, I learned about how to create HTML templates. Jinja is a script where you can write python code in html files, which allows me to display different things on webpages based on data sent to the page by flask. Additionally, I can use jinja to create a base html template that all the rest of the pages use.",
        "Then, on the statistics pages, the application gets a csv file from a form, and saves it into a JSON file. This file allows any webpage to access the data if need be. Then, based on user selections in the form, pandas will perform statistical analyses of the numerical data, or MatPlotLib can make simple scatterplots of the data. For me, being successful was creating a web application that did statistical analyses on data inputted by the user, and I accomplished my goal!!!!!",
        "images/stats.png", "https://github.com/lgibbons12/Statistics-Web-Application", "Github Link");
    }
    else if (text == "gpt") {
        changeWords("ChatGPT Presentation",
        "This is an interactive video series website that teaches you about the innerworkings of ChatGPT, Large Language Models, and Artificial Intelligence training as a whole. I hope you enjoy! Additionally, gpt.py is a simple python script that allows the user to input text from ChatGPT. The script changes some of the words using a thesaurus API, and with those changes it is undetectable as being written by ChatGPT to the new program GPTZero which can identify text written by the Large Language Model.", "", "", "", 
        "images/gpt.png", "https://github.com/lgibbons12/GPT-Presentation", "Github Link"); 
    }
    else {
        changeWords("Zava's Space Shuffle",
        "I originally began with wanting to create a half RPG/half platformer videogame in Unity, so I first watched a tutorial to get myself acquainted with the platform. Then, I used the knowledge gained from that tutorial to make a mock-RPG game. It had player and enemy healths, with each entity being able to attack, heal, and raise their abilities.",
        "Next, I started learning how to make platforming using a tutorial. However, halfway through the tutorial I realized I wanted to switch to just a platformer. From there, I used unity documentation and my previous knowledge from videos to create a fun video game complete with artwork, free sounds, and a story.",
        "Tilemapping! When I was first learning to code, I made a platformer using pygame with a tutorial. It was really fun and helped me learn python, but level creation was really hard as I had to create each level making a grid in a csv file and then loading that into the game. The coolest thing I learned about Unity in my creation process was tilemaps, which allow you to preset functions and variables to grids and then place whatever assets wherever you want on the screen using that grid and they automatically inherit the traits of that tilemap.",
        "C#! Before this project, I had never coded in C# before, so I learned a lot about how it is a component based OOP language, and how to use the interface of PlayerPrefs in Unity to pass variables and information across scripts and scenes.",
        "images/zava.png", "https://defensetothelax.itch.io/space-shuffle", "Link to Video Game!");
        
    }
    
  });

  function changeWords(name, p, p2, p3, p4, imgsrc, a, atext) {
    $('h1').html(name);
    $('#firstp').text(p);
    $('#secondp').text(p2);
    $('#thirdp').text(p3);
    $('#fourthp').text(p4);
    $("img").attr("src", imgsrc);
    $('#linkinfo').attr("href", a);
    $('#linkinfo').html(atext);
  }
