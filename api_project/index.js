const anyName = async () => {
// async function anyName(){
  const apiurl="https://api.covid19api.com/summary";
  let response = await fetch(apiurl);

  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    console.log('json', json);
    return json
  } else {
    console.error("HTTP-Error: " + response.status);
  }
}
anyName().then((json) => displayResults(json)).catch(err => console.log(err));

const displayResults = (json) => {
  //json.Global.NewConfirmed
  document.getElementById("new-case").innerHTML = json.Global.NewConfirmed
  document.getElementById("total-case").innerHTML = json.Global.TotalConfirmed
  document.getElementById("new-death").innerHTML = json.Global.NewDeaths
  document.getElementById("total-deaths").innerHTML = json.Global.TotalDeaths
  document.getElementById("new-recov").innerHTML = json.Global.NewRecovered
}



// function fetch(url) {
//   const result = callsTheApi(url);
//   let returnObject = {};
//   if (result.status_code >= 200 && result.status_code < 300) {
//     returnObject.ok = true;
//   } else {
//     returnObject.ok = false;
//   }
//   returnObject.json = function() {
//     return result.json;
//   }
//   return returnObject;
// }