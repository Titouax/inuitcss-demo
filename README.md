#Inuitcss for noobs

<p class="lede"><a href="http://desgnl.github.io/inuitcss-demo">Inuitcss for noobs</a> just does the following: </p>

 1. Installs all the Inuitcss modules from their offical Github repo using Bower.</li>
 2. Provides a default Sass file loading all the Inuitcss modules and activating several variables which are off by default. </li>
 3. Compiles this Sass file into CSS with Grunt. </li>
 4. Provides a preview HTML template using the compiled CSS.
 
[Inuitcss](https://github.com/inuitcss) is a CSS framework made by [Harry Roberts](http://csswizardry.com). There is a [getting started](https://github.com/inuitcss/getting-started) section on the official project Github, but it doesn't give a clear overview of what the framework can do. I made this small project to learn more about it. 

The CSS file compiled here is not intended to be re-used like this. The authors made it clear that the philosophy of Inuitcss is to be "off" by default and each modules has to be included depending on the need of a specific project. </p>


## How to use

Clone the repo 

    $ git clone https://github.com/desgnl/inuitcss-demo.git

Install grunt and grunt-contrib-sass 

    $ npm install

Install all the inuitcss modules from their original git-repo with Bower

    $ bower install

Compile the Sass file into a css with Grunt 

    $ grunt 
    
## Prerequisite 

To make this work you need to install: 

 - [Sass](http://sass-lang.com/)
 - [Grunt](http://gruntjs.com/) 
 - [Bower](http://bower.io/)

  
    

