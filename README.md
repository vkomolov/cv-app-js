This cv app is made as a demonstration of re-rendering the HTMLElements
dynamically from the JSON file, which is fetched from the server,
 when the empty page is rendered.

## Task: 
- 'Using vanilla JS, without libraries, to realize the CV App which will dynamically construct ' +
  'the HTMLElements from the fetched JSON file, and re-render the HTMLElements on changing the value/state of the ' +
  'data or filters. Resembling React, to implement Classes/Components, which shall comprise the logic and the ' +
  'markup/styles of the App. The link to the code is available in the section "Experience"... ';
- The Class/Component can return the HTMLElement and has the methods to handle the corresponding data;
- Finally, bundled in the App container, it will be appended to the '#root' DOM Element of the initial empty page;
- No hardcoded names and elements UI: <br>
All the UI elements (lists, paragraphs, filters, etc) should be rendered according to the JSON data;
- The initial render of the App is empty with the only 'loading' icon;
- to set the LocalStorage with the fetched JSON data for the future sessions;
- to set the LocalStorage with the image, fetched from the JSON data url and read with FileReader;
- to renew the LocalStorage, if the creation date of the LocalStorage is more than 1 day;  
- to equalize the heights of the page`s columns, according to the content,
 rendered in the columns: <br> 
 if one column is higher, then to make another column of the same height;
- if the fetched JSON data contains refs on pdf files to be downloaded,  
then to create downloadable <a> links with href to the fetched pdf files; <br>
The pdf files for the <a> links should be fetched and stored separately;
- Fetched pdf files should be stored in the LocalStorage for the next sessions;
The files should be also validated with the creation date and restored if
necessary;
- to make adoptive html on desktop and mobile screens;
- to imitate the loading time, showing the loading icon, when fetching the data;
- on choosing the filter, the components must be re-rendered with the new data;
- to visually demonstrate the level of knowledge and skills with the indicating
bar from 0 to 100%;
- on scrolling the page down, the filter`s bar must emerge on the top of the page
in the fixed position in order to be accessible;
- on re-rendering the data to scroll up the page to zero position;
/////////////////////////////////////////////////////////////////

### Available Scripts
In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

#### `npm run watch`
Runs the app in the development mode.<br>
It re-renders the page on changing the code;

#### `npm run dev`
Runs the app in the development mode.<br>
The Bundler will create the 'dist' directory without hash names and optimizations;

#### `npm run build`
Builds the app for production to the `build` directory.<br>
The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

#### `npm run clean`
It cleans the 'dist' directory; <br>
**Note: this is a one-way operation. Once you `clean`, you can’t go back!**

