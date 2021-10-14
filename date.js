// module.exports = getDate; jb sirf 1 hi kaam ho tbhi use karna chaiye

// module.exports = getDate();  jb activate karna ho tabhi small brackets lagana hai
// for example app.js  file m activate hai isliye wha p small bracket lga hua hai


module.exports.getDate = getDate;
// jb jyada functions ho tb specific use k liye
function getDate(){
    let today = new Date();
   
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
    
}

// the above declaration of function and this is below both are correct
// below declaration is called anonomous function declaration

exports.getDay = function() {
    let today = new Date();
   
    let options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
    
}