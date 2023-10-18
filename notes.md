Here's the link to the readme: https://github.com/JoshuaJiraffe/startup-kyles-cycles/blob/main/README.md
Here's my public IP address: 3.222.97.239

Things I learned from starting my first github repo:
  - Work in the source control bar on VScode in order to commit and push changes
  - Only try to edit in one area at once: on the repo or on the Development side
  - I need to learn much

## Using VI:
 - Many things
 - To change permissions of file use command: chmod 600 <filename>

## Markdown:
 - In order to put in an image you use !(somename)[imagefile]. Make sure there are no spaces

# Week 3

## HTTPS: 
 - To shell into production environment from console use the command: ssh -i [key pair file] ubuntu@[yourdomainnamehere]
 - To edit caddy use the command: vi Caddyfile
 - Port 80 goes to HTTP whereas port 443 goes to HTTPS so you have to replace the :80 in the caddy with the domain name

## Domain Names:
 - To get IP address use command: dig <url>
 - Root domains have a secondary level domain and a top level domain. Top level domain is the .com part
 - Infinite subdomains can be made from root domains
 - To see contact info about owners of the domain use command: whois <url>
 - A records maps domain name to IP address
 - CNAME record maps domain name to other domain name

## AWS Route 53:
 - You can't have a secure connection with just IP address, you need domain name
 - Route 53 handles everything DNS
 - NS (name service) record contains the names of the authoritative name servers that authorize you to place DNS records in this DNS server
 - SOA (start of authority) record provide contact info about owner of the Domain Name

## Caddy:
 - Caddy is a web service, also a gateway, that handles incoming HTTP requests
 - It can route different things all under one header which is great and cool

## AWS EC2:
 - When renting a web server, it's stored in a massive data center somewhere. Who knows where
 - Basically a giant warehouse with tons of computers. Such fun
 - The AMI (Amazon Machine Image) made for this course already has Ubuntu, Node.js, NVM, Caddy Server, and PM2, so no need to worry about that
 - t3.nano, t3.micro, t2.micro are all good for this class. One is free though
 - A key pair is needed to secure shell (ssh) into the production environment (the server). Should be saved somehwere private
 - You have to enable which IP addresses you can ssh in from. To do so, go to EC2, click on the instance, click on the security group, and edit inbound rules
 - If you try to access from a port without permissions, you'll get a timeout error
 - ~. will close out of the ssh


You can stop your server so you don't have to pay for it when it's not running but that will mean you have to get a new IP address each time you launch it. To get around this, you can assign an elastic IP address to your server. How to do so:
 - Open the AWS console in your browser and log in.
 - Navigate to the EC2 service.
 - From the menu on the left select Network & Security|Elastic IPs.
 - Press the Allocate Elastic IP address button.
 - Press the Allocate button.
 - Select the newly displayed allocated address and press the Actions button.
 - Select the Associate Elastic IP address option.
 - Click on the Instance box and select your server instance.
 - Press Associate.

Elastic IP is only free while your server is running. Good to have in case you need to reboot server

## The Internet:
 - The internet is really just a collection of wires to connect everything
 - Files travel across the internet in little parts called packets


# Week 4

## HTML:
HTML elements are represented with enclosing tags. Elements can contain text and/or other elements inside of them
 - Just plain text is valid HTML
 - <p> tag will have words in default text font and size
 - index.html is the default page for web browsers to show

 Always include this at beginning of HTML file:
 <!DOCTYPE html>
 <html lang="en">

### Attributes:
 - Attributes describe details of elements
 - id attribute gives unique id to an element
 - class attribute gives element a class
 - Attributes go inside element tags
 - Attributes use single or double quotes to be defined
Example:
  <p id="hello" class="greeting">Hello world</p>

### Hyperlinks:
 - Uses anchor element and href attribute
 - <a href="<url>"><whatever you want the link to say></a>

 
 ### Common elements

Modern HTML contains over 100 different elements. Here is a short list of HTML elements that you will commonly see.

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

 
### Special Characters:
 Certain characters can only be accessed by using entity syntax, which uses the ampersand. Also used to show emojis:

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

### HTML Structure:
 - There are block and inline elements
 - Block elements are distinct blocks/sections in the content flow
 - Inline elements go within blocks and do not disrupt their flow


### HTML Input Elements:
Here are some elements for accepting user input:

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

 - Form element is used a lot as a container. It's not as needed nowadays that we have fancy JavaScript to do things to the inputs
 - Specify input as required with required attribute to make people put in something before they can submit it
 - Pattern attribute gives a regex that must be satisfied in order for the input to be accepted. Works on text, search, url, tel, email, and password, input types
 - You can also use JavaScript for validation. Make sure to tell user if/why their input isn't accepted
 - In a selection, in the options, you can preselect an option by opening the tag as <option selected>. For others change it in value using checked
 - Use value attribute to change starting value

Here are some different types for the input:

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |



### Media Elements:
Now we get to use fancy audio and visual things

 - img, audio, and video elements point to a file that contains what you need
 - svg and canvas have code to render an image that can be animated
 - You can use relative or absolute paths. As relative as possible is better
 - Width attributes will define how big on the page your element is. You can make that relative to the page size
   
#### img:
 - img elements should have an alt attribute that describes what the image is and a src attribute with path
 - 
#### audio:
 - audio elements should have a src attribute and a control attribute
 - controls attribute makes it so there will be visual representation of audio and user can control it
 - autoplay attribute makes it play immediately
 - loop attribute makes it automatically repeat

#### video:
 - video elements should also have src attribute
 - They also have access to controls, loop, and autoplay attributes
 - it's possible you need to include a crossorigin="anonymous" attribute just for fun to make it work

#### svg:
 - This and canvas are images created within the html
 - Can render graphics inline, que fancy

#### canvas:
 - Facilitates animation and 2d drawing
 - Requires JavaScript support to be able to draw on it


# Week 5

## CSS

 - CSS allows colors, style, and also responsiveness. Critical
 - Also allows for the view of the pagre to change based on the device and its sizes
 - Functionally, CSS is primarily concerned with defining rulesets, or simply rules. A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value.

Three ways to include CSS:
 - Use style attribute directly in the element
 - Use style attribute in head section of the html to define style rules for the whole document
 - Use link attribute to an external css file with rules: <link rel="stylesheet" href="styles.css" />
 - Properties are inherited but lower level ones override


### Box Model:
 - All styles are aplied to a box region of the display. The box has inner boxes of content, padding, border, and margin
 - You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border.


### Selectors:
 - Use body elements for defining font for the entire webpage (can also use * selector, which does everything)
 - You can use combinators to only identify certain elements that are inside other elements:

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |


 - Use a . to combine element names with class selectors, like: p.summary
 - You must use a . in front of class selectors
 - To use id selector use a # in front
 - Pseudo selectors are based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. Useful if you want something to happen when the mouse hovers over a place or other things with user input


### Declarations:
 - Here are some common ones:
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

 - When defining size you can use absolute measurements with pixels (px) or inches (in) or relative units like percentage of parent unit (50%), percentage of viewport (50vh), or multiplier of m (2rem)
 - Here's some examples:
| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

Color can be defined like this:
| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |




### Fonts:

 - font-family is the property to define your fonts. Use an @font-face to define a family you have to import
 - Here's an example of how to import amazing fonts from Google. They have many free ones: @import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');


### Animation:
 - We'll see if I actuallly do any of this
 - The basics is you use the animation property and define keyframes for how the element looks at different times in animation
 - In the normal element css declaration you must have animation-name property that will lead to the animation property and animation-duration as well
 - The header should be @key-frames <nameofanimation>
 - Use from and to to define beginning and end


### Responsive Design:
 - The display can change based on the screen size or device. Like so:

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.    

 - Mobile browsers will scale by default but we don't want that. To get around this we use this tag in the header:
  <meta name="viewport" content="width=device-width,initial-scale=1" />
 - Float property moves the element to left or right and makes text go around it
 - @media selector is very important. It detects size and orientation of viewport and we can change css rules to match

#### Grid:
 - Grid is a display layout that is uweful in building responsive design.
 - To access it we use display: grid on the container element (that's the parent/heading element)
 - You can then use grid-gap, grid-auto-rows, grid-template-columns, all kinds of commands to control how the grid elements will resize

#### Flexbox:
 - Flex is used to partition the application into responsively moving areas that'll change as application size changes
 - Make sure to define flex-direction to say which way they should all flex in
 - Define the properties in the children like this:
  flex: 0 80px;
 - 0 means it won't grow and 80px is how tall it is. You can define flex values with numbers to determine the fraction of space they'll take up


## Debugging CSS:
 - Use the inspect element on your page to see why things are working how they're working and debug
 - Use the elements tab in the inspect space

## Frameworks: (our best friend)
 - Tailwind and Bootstrap are the most popular. Tailwind uses smaller definitions that go specifically with certain elements in the html
 - Add bootstrap into your html by using the following tag in the head:
  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
 - You also may want to use the jss functionality. Include this tag at the END of the body element:
 <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
 - To include bootstrap in your application use this command in the console to download it:
 npm install bootstrap@5.2.3
 - To use bootstrap you then just need to make the classes all line up with the right bootstrap classes




# Week 6


## JavaScript:

 - Javascript is usually executed using an interpreter at RunTime. Interesting
 - console.log(); puts whatever's inside out to the debugger console
 - Use single quotes
 - Line comments use // while block comments use /*
 - Use % for special things in your console.log output. For instance, putting in css declarations with %c and following up with the rules
 - console.time('demo time'); and console.timeEnd('demo time') can sandwich a bit of code and it will output how long it took to run
 - console.count(); counts how many times a piece of code is called


### Adding JS to HTML:
 - You can insert JS by putting it directly in HTML with <script> element or by using src attribute on said element to refer to external file


### Type:

Here are some of the primitive types in JS:
| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

Here are some common objects:
| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |


 - Declare variables in JS using let or const. Use let if you're going to be changing that variable in the future
 - Strict equality is checked with ===
 - Strict inequality is checked with !==
 - String concatenation is done with +
 - Default when you do silly things with two different data types is to concatenate strings
 - Ternary operator can be used to make an abbreviated if else. Like so:
       -   a === 1 ? console.log(1) : console.log('not 1');
       - <conditional> ? <if_true> : <if_false>
 - JavaScript supports many common programming language looping constructs. This includes `for`, `for in`, `for of`, `while`, `do while`, and `switch`
 - `do while` executes at least once cause it checks conditionality at the end. That's nice sometimes
 - `for in` iterates over an object's property names or array index
 - `for of` iterates over an object's values
 - break; and continue; are also allowed



### String:

 - Defining strings with '' or "" is equivalent. Defining with `` means it could be a string literal with js inside of it to evaluate
 - To put the code block into a string literal use ${} with the js you want to evaluate inside the braces
 - Theoretically we could internationalize thing. Let's see if we ever do that

Here are some useful string functions:
| Function      | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| length        | The number of characters in the string                       |
| indexOf()     | The starting index of a given substring                      |
| split()       | Split the string into an array on the given delimiter string |
| startsWith()  | True if the string has a given prefix                        |
| endsWith()    | True if the string has a given suffix                        |
| toLowerCase() | Converts all characters to lowercase                         |




### Functions:
oof

 - Functions can be treated like any variable. They can be given names, passed as parameters, serve as return values, etc.
 - You do not assign types to the parameters
 - If parameter is not provided when a function is called, the value will be set to undefined
 - You can set default values for parameters
 - You can also make an anonymous function and assign it to a variable
 - Functions can be declared inside other functions. This can be done to modularize code without exposing private details



### Arrow Function:

 - Instead of using function declaration we can use an arrow, like so:
   () => {<function_declaration>}; (curly braces can be optionally included
   
 - You don't have to include return keyword if you don't put curly braces and the function only has one expression:
   () => 3; (this will return 3)
   
 - Closure lets us access variables from functions that are parent when they should be out of scope
 - Closure basically remembers values of the function when it's created, instead of when it's executed


### Array:

Here are some fun static functions of JavaScript arrrays:
| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |



### JSON:

 - JSON stands for JavaScript Object Notation
 - It's a data format that makes sharing and storing data super easy, barely an inconvenience. Also compatible with JS which is great for web stuff


A JSON document contains one of the following data types, most commonly an object:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

 - Objects have key-value pairs, where the key is always a string
 - Strings are always double quotes
 - Convert to and from Javascript with JSON.parse and JSON.stringify functions



# Week 7:

## UX:
 - Always start off by thinking of user and how they interact, not on how cool your technology is
 - Think of User Experience as a story. We want to get them to applaud
 - The homepage should be simple. The fewer things there are for the user to process, the better they can engage with the page
 - Make the homepage something that immediately directs a user to focus on a single purpose
 - You want to be consistent enough with the general web that it's not hard for users to use your application, but also a little unique and fun
 - First step in building an application should be designing an application map of all the views and navigtion the users will deal with
 - If your application map starts looking like a governmental bureaucracy then you probably want to reconsider the interrelation of functionality
 - A breadcrumb control lists the path the user took
 - If you want international design with many languages, you need to consider that in the design from the beginning
 - Animation should be done in moderation

### Colors:
 - In making a color scheme, we should pick a primary, secondary, and focus color
 - Use Paletton or Adobe to help select colors
 - Stick with color scheme even with font color and images that are included

### Typography:
 - Four different groups of fonts:
     - Serif
     - Sans Serif
     - Monospace (all letters same size)
     - Handwriting
  
 - Restrict number of fonts you have to three or fewer
 - Sans serif is for buttons, navigation links, and body text
 - Serif is for paragraph headings
 - Monospace is for coding examples or text needing alignment

### Iconography and Text:
 - Use common, already established icons:
 - There are lots of standard icon packages that you can choose from. This includes packages such as [Font Awesome](https://fontawesome.com/), [Bootstrap Icons](https://icons.getbootstrap.com/), [Material Icons](http://google.github.io/material-design-icons/), [Flat Color Icons](https://github.com/icons8/flat-color-icons), and [Ant Design Icons](https://github.com/ant-design/ant-design-icons)

There are 5 different predetmined categories of text with predefined font size suggestions:
| Purpose        | Size     |
| -------------- | -------- |
| Page title     | 96 px    |
| Titles         | 48-20 px |
| Text           | 16 px    |
| Secondary text | 14 px    |
| Input          | 16 px    |

 - You can set a max width for paragraphs. 60-80 characters is best. 35em is a good guideline

### Whitespace:
 - Whitespace will control where a user looks. USE IT
 - Don't use images ase space fillers

### Decision Fatigue:
 - Time to make a decision increases logarithmically as number of choices increase
 - Limit the number of choices the user has to make. Especially the ones presented at the same time

### Performance:
 - Speed of application reaction to users greatly impacts how much users use the application. If it takes 5 seconds, 90% of users leave
 - The initial load can take a bit. Use a loading animation to simulate progress and entertain users
 - Make sure you have a bckup for your website to run even if it can't access third party things or some functionality is down

### Legal:
 - There are many laws and acts that could regulate your website. Some of that culd deal with making the site accessible for all those with disabilities or managing records and data confidentially

### Walls:
#### Payment:
 - Make sure they see the value of the application and can use it significantly before they have to pay
 - Entering payment information is best if done using associated credential like Google Wallet
#### Failure:
 - Eventually the application will fail. Make sure to present a message to tel the user what happened and offer a possible solution. Don't just break




## More JS

### RegEx:
 - You can create a regex using objreg = new RegExp(asdf); or using literalRegex = asdf;
 - The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`. For a quick test to see if there is a match you can use the regular expression object's `test` function.


### Rest and Spread:
 - You can use the rest parameter when you don't know how many parameters there will be. For example in defining a function. Precede the last parameter of a function to make it a rest parameter. Will turn all the rest of the things passed into an array
 - Spread is also called by ... but not as function parameters. It will take an iterable and separate it out into its individual elements


### Exceptions:
 - To catch an exception we use try catch syntax. You write try with what you want to do, then a catch block with what the system should do if it it throws an exception
 - You can add a finally block afterwards that will run after the catch block no matter what
 - You can use 'throw new Error();' syntax to make the system throw an exception. It'll execute the codee in the parentheses
 - Restrict exceptions to only really meaningful and significant exceptions
 - Fallbacks - basically when you put an alternate implementation in the catch block so your code always returns and does something, it doesn't just stop


### Destructuring:
 - This is not destructing!!
 - Process of pulling items out of a larger item, like an array or object
 - Process looks like this:
    ```js
    const a = [1, 2, 4, 5];
    
    // destructure the first two items from a, into the new variables b and c
    const [b, c] = a;
    
    console.log(b, c);
    // OUTPUT: 1, 2
    ```
 - destructured part goes on the left side of the equation
 - You can use rest syntax to combine the trailing end of items from the object. For instance:
    ```js
    const [b, c, ...others] = a;
    
    console.log(b, c, others);
    // OUTPUT: 1, 2, [4,5]
    ```
 - With objects you specify properties that you want to pull from the object. That's because every object is like a map. It has a collection of properties and values (or functions) associated with them
 - You can map the names of these object properties to new names:
 - You can also provide default values

   ```js
    const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
    
    const { a: count, b: type } = o;
    
    console.log(count, type);
    // OUTPUT 1, animals
    ```


### Objects and Classes:
 - A JS object represents a collection of name-value pairs. We call those pairs properties
 - Property name is either a string or a symbol, but the value can be whatever the heck you want it to be. Function, object, a tomato
 - You must define a constructor for the object so that you can make a new one
 - You can declare new properties directly from your file
 - You can access properties using obj.prop() or obj[prop]. Console.log() will also output all the properties
 - Javascript also has an object object. That's fun

#### Fun things:
 - You can declare a variable with object-literal syntax. That means you haven't defined that object class in another part of the code:
    ```js
    const obj = {
      a: 3,
      b: 'fish',
    };
    ```

Here are some static functions all objects have:
| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

 - A function that returns an object is called a constructor
 - Use the this pointer in the constructor to refer to the object
 - You can define a class for an object or you can just define the objects in one-off situations. Depends if you're gonna use it multiple times or not
 - Make class properties and functions private by prefixing them with a #. Like so: #name || this.#name = name
 - Use the extend keyword when making a class to use inheritance. Super function will pass to parent class. class Employee extends Person{}

 - 




