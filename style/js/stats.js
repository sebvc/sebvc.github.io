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

function run_stats() {

/*     var stats = document.getElementById("stats");
     */    MyFunction().then(result => {
	return csv().fromString(result);
	/* return csvToJSON(result); */
}).then(function (csv) {
	var icons = document.querySelectorAll(".icon-part");
	var values = document.querySelectorAll(".stat-count");
	var titles = document.querySelectorAll(".stat-title");
	const num = icons.length;
	const num2 = values.length;
	const num3 = titles.length;
	// console.log(num)

	for (let i = 0; i < num; i++) {
		/* console.log(values[i].innerHTML); */
		// console.log(icons[i].innerHTML);
		// console.log(csv[i].IconHTML);
		// console.log(values[i].innerHTML);
		// console.log(titles[i].innerHTML);
		icons[i].innerHTML = csv[i].IconHTML;
		values[i].innerHTML = csv[i].Amount;
		titles[i].innerHTML = csv[i].Name;
	}
	// return Promise.resolve("stat_table Updated");
	/* csv.forEach(function (row) {
		// console.log(row.Name);
		// stat_table.innerHTML += "<div class=\"stat col-12 col-sm-6 col-md-4 col-lg-2\">"
		//     + "<div class=\"icon-part mt-4 pt-2 mb-2\">" + "<i class=\"" + row.IconClass + "\"></i>" + "</div>"
		//     + "<p class=\"stat-count h1 fw-bolder\">" + row.Amount + "</p>"
		//     + "<p class=\"stat-title h5 fw-bolder\">" + row.Name + "</p>"
		//     + "</div>";
	}); */
	// Do something with the result
}).catch(function (error) {
	// Handle the error
	console.log("HEY SEB you have caught an error:")
	console.log(error)
});

}

// <div id="quotes" class="d-block container py-2">
// <div id="stats" class="d-none count-up container py-2">
// SWAP d-block and d-none in stats and quotes elements
function toggleStats() {
	var stats_block = document.querySelector("#stats");
	// if (stats_block == null) {
	//   setTimout( () => {
	//     stats_block = document.querySelector("#stats");
	//     console.log("inside timeout");
	//     console.log(stats_block)

	//   }, 1000) 
	// }
	// console.log(stats_block)
	stats_block.classList.toggle("d-none");
	stats_block.classList.toggle("d-block");
}
