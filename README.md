# My resume project 

Welcome!

***

[Direct link to GitHub] (https://github.com/Spagettileg/resume)

[Direct link to live project] (https://spagettileg.github.io/resume/)

***

### Introduction
This project is designed to showcase my technology capability and experience through a professional
web design built upon HTML, CSS and JavaScript. The web design is important to demonstrate my serious
committment to a career change from a Business Operations Management Consultant to a Full Stack Developer.

My resume has been constructed upon the following pillars.

###### About Me
What do i do? How do i do it? and Why hire me?

###### My Skills
Competency overview of my Front and Back End skills, together with a chronology of my work history. 

###### Contact Me
Enable users, vendors, etc to contact me with new software project proposals or support on existing software projects. 
Create links to communicate by email and social media.

***

### Prerequisite

This software has been designed to run on Chrome, Edge, Firefox, Safari, Opera & Internet Explorer browsers.

***

### Design

HMTL, CSS and Bootstrap v3.3.7 were used to set a framework and the latter used for professional styling. Four pages were created (Home, Resume, Contact & DownloadCV) and all pages containing header, section and footer elements. A consistent 'look & feel'
is set within the heart of the design.

The user experience centres upon ease of navigation, clear narrative, clear description of my experience / capability and adopting a mobile 1st approach. 

Social media links and the ability to access a PDF copy of my CV are included too. 

##### Colour palette used:

I enjoy the colours purple and green and wanted my resume to exist
within a visual arrangement that leveraged these colours. A palette
of x4 colours was created via https://mycolor.space/
***  
- 'Home' Menu > #765EC2 - Purple
- 'Resume' Menu > #205E6B - Dark Green
- 'Contact' Menu > #2794A9 - Teal
- 'DownloadCV' Menu > #A7C2C9 - Medium Grey

*** 
- 'Heading' > #676767 Charcoal Grey
- 'Footer' > #525252 Dark Grey 
- Text > #fafafa = Off white

#### UXD Considerations

- Mobile 1st design applied to allow user quality experience when using Mobile/Tablet/Desktop
- <meta name="viewport" allows for Mobile 1st design. Add to <head>
- Bootstrap v3.3.7 & Clearfix used for styling saving valuable development time
- Font Awesome / Bootstrap used to create graphical fonts and help increase user intuition
- .hover class was supported by CDN JavaScript and improved the animation experience on all affected hover buttons
- Created ability for user to view and download my CV
- Visual work history setting out work deployment and chronology
- Progress bar - new span class 'sr-only' (screen reader) to provide help for visually impaired user
- Contact process made simple through requesting user name, email and project description information only
- Bootstrap styled button created to allow user to send their project request

#### Wireframes

I intend to use Balsamiq to create my wireframes in the future.
No wireframe was created for this project.
 
*** 

### Features

<Header> and <Footer> for all pages are the same and this is a deliberate
design to provide a consistent 'look & feel' for the user.

#### index.html

- Add profile image, split header on 1/3 - 2/3 ratio
- Logo picture added with anchor to take user to home page 
- Include resume owner name and title
- Add menu > Home, Resume, Contact and DownloadCV options with page links
- Add .hover effect to navigation menu items
- Add <Footer> to display copyright data and social media links
- Fill the <Footer> with information on resume owner
- Create a <section> class thats positioned in middle of page setting out 3 reasons to hire
- <section> class follows a 1/3 - 2/3 ratio design 
- Left side (1/3) = Personal information i.e. Name, address, etc
- Right side (2/3) - Summary narrative to support 3 reasons to hire

#### resume.html

- Copy <header> and <footer> from the index.html page
- Create a work history timeline and a skill set summary
- Create a <section> class thats positioned in middle of page setting out 3 reasons to hire
- <section> class follows a 1/3 - 2/3 ratio design 
- Left side (1/3) = work history timeline i.e. Dates, Employer name & role title
- Right side (2/3) - Skiils Set Summary narrative to cover both Front & Back End capability
- Adding resume skills (HTML / CSS / JS / Python / Django / MySQL / MongoDB)
- resume skiils to be shown graphically as % competence
- 'SR only' span class to be used to help visually impaired users 

#### contact.html

- Copy <header> and <footer> from the index.html page
- Create a <section> class thats positioned in middle of page
- Add a <Form> class with preset snippet to include following:
- User name / Email / Project Description
- Add button to allow user to send project request, fire off to server & return information 

#### DownloadCV

- Provide a resume in PDF format
- Create new folder under 'assets' > 'cv'
- Upload latest cv in pdf format
- Update all links on all html pages
- Add targte="_blank" to ensure the cv opens up in a different browsers
- <Footer> links in all html pages to be updated for correct access to cv 

***

### Technologies Used

- HTML 5 used to create the framework for the project

- CSS3 used to create a style sheet and support aesthetic design 
 
- JavaScript > cdnjs.cloudflare.com used to animate .hover function on navigation menu elements   

- Font Awesome - Use of social media fonts

- Git used to support version control

- GitHub used as a safe area for storing project files

 
***

### Testing

Placeholder for future testing.

#### Test Matrix

User acceptance testing control document created in MS Excel. Key tests created to ensure
the software performs consistently on different browser platforms. Any deviation from the intended
design will be captured in the test matrix.

#### Compatability

All major browser platforms were tested in Mobile, Tablet & Desktop configurations

- Chrome
- Edge
- Firefox
- Safari
- Opera
- Internet Explorer

***

### Deployment

I've deployed the site using GitHub Pages, and is available here: https://github.com/Spagettileg/resume

***

### Credits

#### Content
All content was provided by the Code Institute

#### Media
All media was provided by the Code Institute

***

### Acknowledgements
Thanks to Matt Rudge, Timmy O'Mahony & Brian O'Grady (all Code Institute) for their time, suggestions, and constructive feedback!

Big thanks to my mentor Theo Despoudis on ongoing technical guidance.
