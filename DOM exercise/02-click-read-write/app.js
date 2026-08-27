
// Intro DOM Exercise
// ==================
// 1. When #showBtn is clicked trigger handleShowClick
// 2. Retrieve all paragraphs with class "msg" and id "message".
// 3. Show the combined (concatenated) text content of all these elements in #output.

window.addEventListener("DOMContentLoaded", initApp);

function initApp() {
	// TODO: Add event listener to #showBtn
	const button = document.getElementById("showBtn");
	button.addEventListener("click", handleShowClick);
}

function handleShowClick() {
	// TODO: Read and show the combined text in #output
	const paragraphsWithClassMsg = document.getElementsByClassName("msg");
	const paragraphsWithId = document.getElementById("message");
	// const paragraphsWithClassMsg = document.querySelectorAll("#msg")
	// const paragraphsWithId = document.querySelector("#message"); query selector can be used instead, but instead of giving an htmlcollection it will give a Nodelist?

	let paragraphCollection = [...paragraphsWithClassMsg, paragraphsWithId];
	console.log(paragraphCollection);

	let combinedTextParagraph = ""; // if not initialized with = ""; it will say "undefined" at the beginning of the string. 

	for (const paragraph of paragraphCollection) {
		if (paragraph.textContent) {
			combinedTextParagraph += `${paragraph.textContent} `;
		}
	}
	console.log(combinedTextParagraph)

	const outputTextbox = document.getElementById("output");
	outputTextbox.textContent = combinedTextParagraph;
}
