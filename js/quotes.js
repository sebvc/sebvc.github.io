// Quote Selector
function selectQuote() {

    // let rand_idx = Math.floor((Math.random() * 5) + 1); /* Use if have heading */
    let rand_idx = Math.floor((Math.random() * 5));
    // console.log(rand_idx);
    //   let quote_block = document.querySelector("#quotes");
    let quote_block = document.getElementById("quotes");
    if (quote_block == null) {
        quote_block = document.querySelector("section#quotes_sec");
        // console.log("Hello1");
        if (quote_block == null) {
            quote_block = document.querySelector("div#quotes");
            // console.log("Hello2");
        }
        let kids = quote_block.childNodes;

        console.log(kids[2]);


        for (let index = 0; index < quote_block.childNodes.length; index++) {
            const element = array[index];
            // console.log(kids[index]);
        }
        // console.log("Bye");
        // console.log(quote_block.children);
        let quote_children = quote_block.childNodes.values();
        // console.log(quote_children);
        // quote_block = quote_block.classList
    } else {

    }
    // console.log("Bye2");
    // console.log(quote_block.children);
    // for (let i = 1; i < quote_block.children.length; i++) { /* use if have heading */
    for (let i = 0; i < quote_block.children.length; i++) {
        if (i == rand_idx) {
            // console.log(rand_idx);
            // Quote_Cards[i].className = Quote_Cards[i].className.add('d-none');
        } else {
            quote_block.children[i].classList.add("d-none");
        }
    }
    // console.log("Quote #^ shone");

}

function toggleQuotes() {
    var quote_block = document.getElementById("quotes");
    quote_block.classList.toggle("d-none");
    quote_block.classList.toggle("d-block");
}