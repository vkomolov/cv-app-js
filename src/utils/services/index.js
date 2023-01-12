///node_modules
import axios  from 'axios';

/**
 * It gets the LocalStorage by name, validating by the time limit in days;
 * If the time limit is expired, then to return false;
 * If the LocalStorage does not exist then to return false;
 * Else to return the data;
 * @param { string } name of the LocalStorage data;
 * @param { number } [timeLimit=1]: number of days;
 * @returns { object | false } the data, stored in the LocalStorage... or false, if its not found or expired by time
 * */
export function getLocalStorage( name, timeLimit=1 ) {
	const storage = localStorage.getItem( name );
	let innData;
	if ( storage ) {
		innData = JSON.parse( storage );
		const creationDate = new Date(innData.creationDate);
		const currentDate = new Date();
		if (((currentDate - creationDate)/1000/60/60/24) > 1) {
			return false;
		}
		return innData;
	}
	return false;
}

/**@description it receives the data and update it with the current Date
 * and sets the localStorage;
 * @param {string} name The name of the LocalStorage to be set
 * @param {Object} data which is fetched
 * */
export function setLocalStorage( name='localData', data ) {
	const dataWithDate = {
		data,
		creationDate: new Date()
	};
	localStorage.setItem(name, JSON.stringify( dataWithDate ));
}

/**@description It prepares the params and returns axios with url and expecting format of the the data (ext)
 * @param {string} url of the data source
 * @param {string} [ext='json'] by default is expected
 * */
export function getAxios(url, ext='json') {
	let params = {
		url,
		method: 'GET',
		responseType: ext,
	};
    /**
     * @function axios fetching data with outcoming Promise
     * @param {Object} params
     * @param {string} params.url url of the data source
     * @param {string} params.method using fixed 'GET' method
     * @param {string} params.responseType using 'json' by default
     * @returns {Promise} of the data from axios
     */
	return axios(params)
    /**
     * @function for processing the response fetched
     * @param {Object} resp
     * @param {Object} resp.data
     * @returns {Promise} if responseType === blob, then to use FileReader by the inner func: {@link readFileAsDataUrl}
     * else to return resp.data
     */
        .then(resp => {
			if (resp.responseType === 'blob') {
				return readFileAsDataUrl( resp.data );
			}
			return  resp.data;
		})
}

/**
 * @function: it fetches the data with from the source and params;
 * It contains the inner funcs for passing the Fetch Promise through
 * the response status to parsing the response with account to the Content-Type;
 * @param {string} source: url source of the requested data;
 * @param {Object} params: for fetch: method, mode, headers, etc...;
 * @returns {Promise} Promise.resolve, Promise.reject;
 * */
export function getFetch( source, params ) {
    return fetch( source, params )
        .then( status )
        .then( handle );
	
	function status( response ) {
		if ( response.ok ) {
			return Promise.resolve( response );
		} else {
			return Promise.reject(new Error( response.statusText ));
		}
	}
	
	function handle( response ) {
		if ( response.headers.get("Content-Type").includes('application/json') ) {
			return response.json();
		} else if ( response.headers.get("Content-Type").includes('text/html') ) {
			return response.text();
		}
		else {
			return URL.createObjectURL(response.blob());
		}
	}
}
//catch will be taken outer


/**@function it get data by axios with the given source and params...
 * it handles the response for 'application/json', 'text/html' and 'blob', by URL API *
 * @param {string} source URL
 * @param {Object} params
 * @returns {Promise<AxiosResponse<T>>}
 */
export function initAxios( source, params ) {
    return axios( source, params ).then( handle );
	
	function handle( response ) {
		if ( response.headers.get("Content-Type").includes('application/json') ) {
			return response.json();
		} else if ( response.headers.get("Content-Type").includes('text/html') ) {
			return response.text();
		}
		else {
			return URL.createObjectURL(response.blob());
		}
	}
}

/**@description it utilizes FileReader methods to read the file / blob as DataURL;
 * @async
 * @param {Object} file Blob or File
 * @returns {string} base64 encoded URL format
 * */
async function readFileAsDataUrl( file ) {
	const result_base64 = await new Promise( resolve => {

		let fileReader = new FileReader();
		fileReader.onload = () => resolve(fileReader.result);
	} );
	
	return result_base64;
}

/**@description Converts the Date format to yyyy-mm-dd String
 * @param {string} date to localString
 * @param {string} delimiter '-' for joining in String
 * @returns {string} Date with the delimiter
 * */
export function dateFormat(date, delimiter) {
	let innDate = new Date(date);
	let month = ("0" + (innDate.getMonth() + 1)).slice(-2); //if 2 digits then without 0
	let day = ("0" + innDate.getDate()).slice(-2);
	return [innDate.getFullYear(), month, day].join(delimiter);
}

/**@description: Rounds the Number to the necessary precision
 * @param: {number} num number to be rounded
 * @param: {number} decimal Number of decimals (100 - (2 decimals), 1000 (3 decimals) etc..
 * @returns: {number} Number rounded with necessary precision
 * */
export function numFormat(num, decimal) {
	return Math.round(num * decimal)/decimal;
}

/**
 * it receives the DOM elements, measure the heights of them and makes all the elements to be of the same height;
 * @param {...Object} elemsArr of the HTMLElements
 */
export function equalCols(...elemsArr) {   //for making DOM elems` height to be equal. Put them in array elemsArr
	let highestCal = 0;

	for (let i = 0; i < elemsArr.length; i++) {
	    /**resetting the heights of the elements to 'auto' after rerendering the elements**/
        elemsArr[i].style.height = 'auto';

		if (elemsArr[i].offsetHeight > highestCal) {
			highestCal = elemsArr[i].offsetHeight;
		}
	}
	for (let i = 0; i < elemsArr.length; i++) {
		elemsArr[i].style.height = highestCal + "px";
	}
}

///////////////// dev
function log(it, comments='value: ') {
	console.log(comments, it);
}