// TODO: Start from the documents body, and traverse the DOM until you
// find the <p>Target element</p> element

const tagElements = document.getElementsByTagName("p");

for (const element of tagElements) {
    if (element.textContent == "Target element") {
        console.log(`Bingo. I've found it: ${element.textContent}`)
    }
}