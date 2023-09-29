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
