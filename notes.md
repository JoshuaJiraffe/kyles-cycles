Here's the link to the readme: https://github.com/JoshuaJiraffe/startup-kyles-cycles/blob/main/README.md

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
