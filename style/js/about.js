// Boostrap Tooltip
// Quote Selector
function showTooltip() {

//Default Tooltip enable
/*
*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Persistent Tooltips for Progress bars
const persistentTooltipElmtList = document.querySelectorAll('.persistentTooltip')
const myPersistentTooltipList = [...persistentTooltipElmtList].map(tooltipElmt => new bootstrap.Tooltip(tooltipElmt))
myPersistentTooltipList.forEach(function(tooltipElmt) { tooltipElmt.show()});

/* 
var persistentTooltipElmt = document.getElementById('persistentTooltipElmt')
var myUniquetooltip = new bootstrap.Tooltip(persistentTooltipElmt)
myUniquetooltip.show()
*/
}