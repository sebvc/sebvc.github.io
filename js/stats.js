var stats = document.getElementById("stats");
function MyFunction() {
    var URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsfAXl5a5hyjA4Fuo0kt4s7vjvFr6PwbeAUJsyhObEKvciz9l1Gu-urb_9rDzAzQqaqzWAr1GDTk6O/pub?gid=1228600978&single=true&output=csv";

    return new Promise(function (resolve, reject) {
        $.ajax({ url: URL, async: false })
            .done(function (result) {
                // document.getElementById("demo").innerHTML = result + '<br>';
                resolve(result);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                reject(errorThrown);
            });
    });
}
// function MyFunction() {
//     var URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsfAXl5a5hyjA4Fuo0kt4s7vjvFr6PwbeAUJsyhObEKvciz9l1Gu-urb_9rDzAzQqaqzWAr1GDTk6O/pub?gid=1228600978&single=true&output=csv";

//     var stringvar = "test";

//     $.ajax({ url: URL, async: false }).done(function (result) { stringvar = result; });
//     console.log(stringvar)
//     /*
//     Name,Amount,IconHTML
//     PLACES LIVED,6,"<i class=""fa-solid fa-map-location-dot""></i>"
//     LIVES CHANGED,684,"<i class=""fa-solid fa-users""></i>"
//     DOORS OPENED,79205,"<i class=""fa-solid fa-door-open""></i>"
//     CONTRIES VISITED,13,"<i class=""fa-solid fa-earth-americas""></i>"
//     BURRITOS EATEN,1356,"<img type=""image/png"" src=""images/burrito.png""></img>"
//     CREDIT HOURS,182,"<i class=""icon-clock""></i>"
//     */
//     return stringvar;

// }
MyFunction().then(result => {
    return csv().fromString(result);
}).then(function (csv) {
    // console.log("HELLOOOOOOOOO")
    // console.log(csv)
    // stats.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
    
    /*
    stats.innerHTML += "<div id='stat_table' class=\"stats-list d-flex gap-1 flex-wrap align-content-center justify-content-center pt-2 pb-4\">";
    var stat_table = document.getElementById("stat_table");
    csv.forEach(function (row) {
        stat_table.innerHTML += "<div class=\"border w-25 flex-fill bgrid stat p-2\">"
            + "<div style=\"font-size: 5em\" class=\"icon-part text-black\">" + "<i class=\"" + row.IconClass + "\"></i>" + "</div>"
            + "<p style=\"font-size: 3em\" class=\"stat-count fw-bolder\">" + row.Amount + "</p>"
            + "<p class=\"stat-title h5 text-uppercase fw-bolder\">" + row.Name + "</p>"
            + "</div>";
    });
    */
    /*
    stats.innerHTML += "<div id='stat_table' class=\"stats-list row align-content-center justify-content-center pt-2 pb-4\">";
    var stat_table = document.getElementById("stat_table");
    csv.forEach(function (row) {
        stat_table.innerHTML += "<div class=\"col-sm-6 col-md-4 col-lg-2 border stat\">"
            + "<div style=\"font-size: 4.5em\" class=\"icon-part text-black\">" + "<i class=\"" + row.IconClass + "\"></i>" + "</div>"
            + "<p style=\"font-size: 2.5em\" class=\"h1 stat-count fw-bolder\">" + row.Amount + "</p>"
            + "<p class=\"stat-title h5 text-uppercase fw-bolder\">" + row.Name + "</p>"
            + "</div>";
    });
    */
    stats.innerHTML += "<div id='stat_table' class=\"stats-list row align-content-center justify-content-center py-4 mb-3\">";
    var stat_table = document.getElementById("stat_table");
    csv.forEach(function (row) {
        stat_table.innerHTML += "<div class=\"stat col-12 col-sm-6 col-md-4 col-lg-2\">"
            + "<div class=\"icon-part mt-4 pt-2 mb-2\">" + "<i class=\"" + row.IconClass + "\"></i>" + "</div>"
            + "<p class=\"stat-count h1 fw-bolder\">" + row.Amount + "</p>"
            + "<p class=\"stat-title h5 fw-bolder\">" + row.Name + "</p>"
            + "</div>";
    });
    // Do something with the result
}).catch(function (error) {
    // Handle the error
    console.log("HEY SEB you have caught an error:")
    console.log(error)
});