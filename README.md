
# Devontae Ferguson Portfolio

This app and website is a personal Portfolio for Devontae Ferguson. This portfolio will show case all basic information as well as showcase projects.
This is to show a calm progressive feel as you are navigating throughtout to learn more about Devontae and his learning/application of HTML, CSS. and JavaSCript.


## User Stories
As a user, I want to show my best possible image and content on my portfolio page

As a user, I want would like to easily navigate through the homepage
    -resume
    -projects
    -contact info
    -bio

As a user, I want to see a well constructed contrast of colors
    -design/layout

As a user, I want to quickly show that I am qualified and ready!

As a user, I want to be able to easily add new projects and images

As a user, I want visitors to see the progression of my talent

As a user, I want visitors to not forget who's portfolio

As a user, I want visitors to immediatly see my craetivity and personality.

## Installation

Clone this portfolio

```bash
  git clone git@github.com:MarkkayTavion/Portfolio.git

```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```

This portfolio can be visited at https://gleaming-rabanadas-c8fd16.netlify.app/
## Tech Stack

**Client:** Html, JavaScript, Css, Bootstrap 

**Server:** Node

## Frames

https://github.com/MarkkayTavion/Portfolio/issues/2#issue-1287875345

## Screenshots
https://github.com/MarkkayTavion/Portfolio/issues/1#issue-1287789180
MY APP SCREEN SHOTS
## Authors

- [@markkaytavion](https://github.com/MarkkayTavion)

## Special code
//Navigation
home = document.querySelector('#item-home')
let j = 0;
let i = document.getElementById('menu').childNodes;
let expan = document.querySelector('.toggle');
expan.addEventListener('click', expand)
function expand() {
    if (j==0){
        document.getElementById('add').style.transform='rotate(45deg)';
        document.getElementById('menu').style.transform='scale(1)';

        i[1].style.transform='translateY(-80px)';
        i[3].style.transform='translate(70px, -40px)';
        i[5].style.transform='translate(70px, 40px)';
        i[7].style.transform='translateY(75px)';
        // i[9].style.transform='translate(-70px, 40px)';
        // i[11].style.transform='translate(-70px, -40px)';
        j = 1;

    }
    else {
        document.getElementById('add').style.transform='rotate(0deg)';
        document.getElementById('menu').style.transform='scale(0.9)';
        i[1].style.transform='translateY(0)';
        i[3].style.transform='translate(0)';
        i[5].style.transform='translate(0)';
        i[7].style.transform='translateY(0)';
        // i[9].style.transform='translate(0)';
        // i[11].style.transform='translate(0)';
        j = 0;
    }
}


## Feedback

If you have any feedback, please reach out to us at ferguson.devontae@gmail.com

