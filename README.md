This cv app is made as a trial version to render the page
dynamically on the Client from the simple JSON file, which is fetched 
from the server, when the empty page is already rendered.
<br>We`ll try to do without React, but follow some of the principles 
and features of the page formation and operations with the data.
<br>Resembling React, we`ll use Classes, which shall comprise
the logic and the markup/styles of the App.
<br>Each Class can return the HTMLElement as a component | container.
<br>Finally, bundled in the App container, which will be appended in to 
the '#root' DOM Element;


## Task: 
- No hardcoded names and elements UI: 
All UI elements (lists, paragraphs, filters) and the content 
should be rendered according to the JSON data;
The initial render of the App is empty with the only 'loading' icon;
- to temporary avoid real server fetching operations;
- to set the localStorage with JSON data for the future sessions;
- to renew the localStorage, if the creation date of the localStorage
 is more than 1 day;  
- to fix the height of the App with the scroll ability, if 
the inside data is overflows the fixed height.
- on the Component mount of the App - to check for the localStorage data 
or, if not, to fetch/axios the JSON data for rendering of the Components;
- if rendering JSON data contains refs on pdf files to be downloaded - 
then to create downloadable <a> links with href to the fetched pdf files;
The pdf files for the <a> links should be fetched and stored separately;
- Fetched pdf files should be stored in the localStorage for the next sessions;
The files should be also validated with the creation date and restored if
necessary;
- to imitate the loading time, showing the loading icon;

/////////////////////////////////////////////////////////////////


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run dev`



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run clean`

**Note: this is a one-way operation. Once you `clean`, you can’t go back!**

