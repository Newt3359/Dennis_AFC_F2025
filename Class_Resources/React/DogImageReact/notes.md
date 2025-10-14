User comes to page
User clicks a button
    HTTP request
    We CAN use fetch!!!!
    However, we are going to use axios - why?
    they expect a random dog image to appear


fetch(endpoint)  //  utilize the endpoint
.then()  //if ok, parse the data
.then()  // we do something with data
.catch()   // error handling

AXIOS
axios.verb(endpoint)  //  utilize the endpoint
.then()  // if ok, parse the data, we do something with data
.catch()   // error handling
.finally()  // runs no matter what!!!!!