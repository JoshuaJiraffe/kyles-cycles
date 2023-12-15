# kyles-cycles
**The amazing website for all of Kyle's cycles**

## Description Deliverable:

### Elevator Pitch:

Have you ever wanted to start a company where you fix and sell motorcycles but you're held back because you don't have a website to post all of the motorcycles you're selling. Kyle's Cycles (or different website if your name happens to not be Kyle) is a phenomenal website where potential buyers can quickly see all motorcycles currently for sale at a glance and schedule appointments to come and check out and buy the motorcycle of their dreams. You'll never have to worry about posting to KSL again!

### Design:

The first sample screens shows what the landing screen for the website will look like and the second shows the screen that will appear when a user selects a specific motorcyle to look at to see more details.
![samplepictures](IMG_4555.jpg)

### Key Features:

 - Display of all motorcycles available for sale on one screen in addition to individual splash screens for each bike
 - Ability to sort motorcycles by price/year
 - Admin can upload motorcycles/mark them as sold as needed
 - Appointment scheduler where buyers can see all available times to come look at bikes
 - Ability to have secure login
 - Ability to save motorcycles to look at later

### Technologies:

I am going to use the required technologies in the following ways.

- **HTML** - I will use HTML to design the basic structure of the different pages. Home, contact, and about pages, in addition to individual pages for each motorcycle. Links between each page to the main pages.
- **CSS** - I will use CSS to add styling to the webpages. Consistency across different pages in heading and colors. Good principles of design choice and design elements will be implemented.
- **JavaScript** - I will use JS to provide login, mark a motorcycle as 'favorite' and save it for later, schedule appointments.
- **Service** - Backend service with endpoints for:
  - login
  - scheduling appointments
  - canceling appointments
  - marking favorite bikes
- **DB** - Store users credentials, bikes they've chosen to save, choices, and votes in database.
- **Login** - Users will be able to login in order to favorite bikes they like and schedule appointments.
- **WebSocket** - The number of views each bike receives will be recorded and reported as a way to show 'popular' motorcycles.
- **React** - Application ported to use the React web framework.


## HTML Deliverable:

For this deliverable I built out the structure of my application using HTML.

**HTML pages** - Built 6 HTML pages for the following tasks:
 - Main page that displays motorcycles for sale
 - About page that shows info for the company
 - Contact info page
 - Motorcycle page that shows more detailed info for a motorcycle
 - Appointment scheduler page where people can fill out a form to schedule a time to check out a motorcycle
 - Appointment schedule success page that pops up when the form has been successfully completed

**Links** - Most of the pages have a menu at the top to connect to the main, about, and contact pages. The main page has motorcycle pics/names that link to the motorcycle page. The motorcycle page has a link to fill out an appoint.

**Text** - There is a sample text description for motorcycle details as well as text on the about page that describes the business

**Placeholder for 3rd Party Service Calls** - The info on the forms will eventually sync up with google calendar and automatically put appointments in and update which times are free

**Images** - Included placeholder images on the main, about, and motorcycle pages. These images show which motorcycles are for sale

**Login** - Input box for username and password for the admin to log in and gain admin priveleges

**Database** - The different motorcycles for sale will be pulled from a database

**WebSocket** - The views section shows where the views of the motorcycle will be displayed



## CSS Deliverable:

For this deliverable I properly styled the webpage into its final appearance.

**Header, footer, and main content body** - Added proper color and spacing

**Navigation elements** - I formatted the navigation menu into a menu at the top

**Responsive to window resizing** - The webpage properly adjusts to display well on phones or small browsers. Main changes being the shifting of table elements to be in one portrait-style table as the browser shifts sizes.

**Application elements** - Used good contrast and whitespace

**Application text content** - Consistent fonts and styling

**Application images** - Adjusted the styling of the images and their place on the page



## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application responds to the user input and I put in placeholder code to represent future technologies.

- **login** - When you login your information is saved in local storage and it takes you back to the home page
  
- **database** - Here's where the meat of my JavaScript is at. Local Storage is currently simulating the future database. Motorcycle objects with all their relevant info are stored there and that information is called to form the cards on the homepage, fill the info on the motorcycle page, and create the customized scheduling form. Fun thing I learned, it's really annoying to try to go to JSON and back if you have private data fields. Eventually I gave up on privacy. Mostly.
  
- **WebSocket** - The number of views currently "works" but only using local storage. If you look closely when you click on a bike, you'll see the view count increase by 1 before it takes you to the next page. Unfortunately this view count will reset (it's currently randomly assigned) if you go back to the home page but that is because of how the current database javascript implementation works. Because I don't have access to an actual database, I have some hard-coded motorcycles that are automatically generated each time you go to the home page and then passed into local storage where they are then called from in other parts of the webpage. This is all to simulate future database action. However, it also means that each time you go to the main page the view count resets because new Motorcycle objects are being created in the JavaScript.
 
- **application logic** - There is added functionality to sort the motorcycles based on their price, age, all that fun stuff. Also you can scroll through the 'different' images on the individual motorcycle page. So yeah, that's fun.


## Service deliverable

For this deliverable I added backend endpoints that get the different motorcycles for the main page as well as details about them on their subpages, endpoints for scheduling appointments and getting appointment details.

- **Node.js/Express HTTP service** - I did it
- **Static middleware for frontend** - I did it
- **Calls to third party endpoints** - I used an endpoint for creating unique IDs for both motorcycles and the appointments
- **Backend service endpoints** - Endpoints for all the things described above.
- **Frontend calls service endpoints** - I did this using the fetch function.


## Database Deliverable
For this deliverable I implemented MongoDB into my website and stored Motorcycle information in the database

 - MongoDB Atlas database created - I did it
 - Endpoints for data - My pertinent endpoints send information to MongoDB
 - Stores data in MongoDB - All the motorcycles and their information are stored in MongoDB


## Login deliverable

For this deliverable I added user login/authentication and tied that to their appointment svcheduling.

- **User registration** - If the username is new it creates a new account in the database.
- **Existing user** - If the user already exists it logs them in and gives them their delicious authentication cookie
- **Use MongoDB to store credentials** - Stores both username and password.
- **Restricts functionality** - You cannot schedule an appointment until you have logged in.


## WebSocket Deliverable
For this deliverable I used websocket to update views of the bikes in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All motoryclce views update whenever someone goes to the page. Yay


## React deliverable

For this deliverable I converted the application over to use React

- **Bundled and transpiled** - done!
- **Components** - Login, motorcycle list, motorcycle card, scheduler, motorcycle details are all components.
- **Router** - Routing between motorcycle list and motorcycle detail components
- **Hooks** - I used hooks to handle form submission and motorcycle detail data
