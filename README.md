<h1 align="center">Get Up & Go App</h1>

[View the live project here.](https://heyson.github.io/interactive-frontend-dev-milestone-project/)

This is an application that pulls info from three different API's: Maps, Weather. The information that is collected from these API's will 
be currated in accordance to the geo-location data received from the browser or from the user entering a location.

<h2 align="center"><img src="site-screen-shots/index.png"></h2>

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to know what the temperature and weather is for today .
        2. As a First Time Visitor, I want to see a map that can show me the nearest coffee shop and traffic status.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to reference weather to dress and plan appropriatley.
        2. As a Returning Visitor, I want to find a location where I can purchase coffee / meal.
        3. As a Returning Visitor, I want to be able to view a map to see traffic conditions.


-   ### Design
    -   #### Colour Scheme - Coolors Trending color palettes
        -   The main colors for the site were obtained from Coolors.co. https://coolors.co/palettes/trending 
    -   #### Typography
        -   The Rimouski fonts are the main fonts used throughout the whole website with Serif as the fallback font.
    -   #### Imagery
        -   Images: Font Awesome Icons https://fontawesome.com/ and Google Maps https://cloud.google.com/maps-platform/?hl=en
        

            
### Wireframes - Balsamiq

    -  Mobile, Tablet, and Desktop Wireframes - (PDF under /wireframe directory)


## Features

-   Responsive on all device sizes

-   Interactive elements

-   Searchable API's

-   Google Maps


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
2. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
3. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
4. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
5. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.
6. [Awesome Screenshots:](https://www.awesomescreenshot.com/)
    - Awesome Screenshots was used to create the screenshots during the documentation process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](/w3c-validator)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](/w3c-validator)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to know what the temperature and weather is for today .

        1. As a First Time Visitor, I want to get the weather.
        2. As a First Time Visitor, I want to find a coffee shop with and traffic conditions.


-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to reference the app for local weather conditions and traffic.

        1. As a Returning Visitor, I want to reference weather to dress and plan appropriatley.
        2. As a Returning Visitor, I want to find a location where I can purchase coffee / meal.
        4. As a Returning Visitor, I want to be able to view a map to see traffic conditions.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed with a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX with the use of Chrome [DevTools](https://developers.google.com/web/tools/chrome-devtools).
-   Lighthouse Auditor was used to review the site and provide documentation to point out any bugs and/or user experience issues. Results located in lighthouse-audit directory

### Known Bugs

- “Mixed content blocked” when running an HTTP AJAX operation in an HTTPS page.
    - Fix : <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
    - Source : https://stackoverflow.com/questions/33507566/mixed-content-blocked-when-running-an-http-ajax-operation-in-an-https-page

- “NEWS API. (Remove this section from original plan)
    - Fix : none found. 
    - Source : console.
    - Error: {status: "error", code: "corsNotAllowed",…} code: "corsNotAllowed" message: "Requests via the browser are not allowed on the Developer plan, except from localhost." status: "error"}

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Heyson/interactive-frontend-dev-milestone-project)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Heyson/interactive-frontend-dev-milestone-project)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/Heyson/interactive-frontend-dev-milestone-project
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Heyson/interactive-frontend-dev-milestone-project

```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code
-   [OpenWeatherMap](https://openweathermap.org/) : Weather forecast API 
-   [CodeExplaine](https://www.youtube.com/watch?v=KqZGuzrY9D4) : CodeExplaine Tutorial used to set weather API to function based on Geolocation

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.
