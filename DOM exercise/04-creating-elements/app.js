"use strict";

window.addEventListener("load", initApp);

// INSTRUCTIONS
//
// Exercise: Create the following DOM structure using only JavaScript (do NOT add any HTML to index.html except the script tag):
//
/* <div id="profile-container">
  <section id="profile-section">
    <h1>Profile</h1>
    <article class="profile-card">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile picture" />
      <h2>John Doe</h2>
      <p>Web developer and coffee enthusiast.</p>
      <ul>
        <li>Location: Copenhagen</li>
        <li>Favorite Language: JavaScript</li>
        <li>Hobby: Cycling</li>
      </ul>
    </article>
  </section>
</div> */
//
// Steps:
// 1. When the page loads, use JavaScript to create the above structure and add it to the <body>.
// 2. Do not add any HTML in index.html.
// 3. Use document.createElement, setAttribute, textContent, appendChild, etc.
// 4. Do NOT add any event listeners or interactivity yet—just build the DOM tree.



function initApp() {
  // Hide instructions when done
  document.querySelector("#instructions").classList.add("hidden");
  // TODO: Create the above DOM Structure and add it to the <body>

  const profileContainer = document.createElement("div");
  profileContainer.id = "profile-container";

  const profileSection = createProfileSection();

  profileContainer.appendChild(profileSection);
  document.body.appendChild(profileContainer);

  const button = document.querySelector("#toggleBtn");
  button.addEventListener("click", function () {
    profileContainer.classList.toggle("hidden");

    if (profileContainer.classList.contains("hidden")) {
      button.textContent = "Show profile";
    }
    else {
      button.textContent = "Hide profile";
    }
  });
}


function createProfileSection() {
    const profileSection = document.createElement("section");
    profileSection.id = "profile-section";

    const profileHeader = document.createElement("h1");
    profileHeader.textContent = "Profile"

    const article = document.createElement("article");
    article.classList.add("profile-card");

    profileSection.appendChild(profileHeader);
    profileSection.appendChild(article);
    
    const profileImg = document.createElement("img");
    profileImg.src = "https://i.quotev.com/m2kmozgnlysa.jpg";
    profileImg.alt = "Profile picture";

    const profileHeader2 = document.createElement("h2");
    profileHeader2.textContent = "Natsuki";

    const profileParagraph = document.createElement("p");
    profileParagraph.textContent = "A tough little manga lover who definitely does NOT want you to call her cute! B-baka!"

    const profileUl = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.textContent = "Location: Doki Doki Literature Club";
    profileUl.appendChild(li1);
    const li2 = document.createElement("li");
    li2.textContent = "Favorite Language: JavaScript — It's not like I enjoy programming with you or anything!";
    profileUl.appendChild(li2);
    const li3 = document.createElement("li");
    li3.textContent = "Hobby: Reading manga — I-I just happen to have a huge collection, okay?!";
    profileUl.appendChild(li3);

    article.appendChild(profileImg);
    article.appendChild(profileHeader2);
    article.appendChild(profileParagraph);
    article.appendChild(profileUl);

    return profileSection;
}

function toggleProfileSection() {
  profileContainer.classList.toggle("hidden");
}