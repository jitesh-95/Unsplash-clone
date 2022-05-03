// access key = o9LdvZDMA9gka41NZhnsTpNIGw2sUnOvwOrpFIFU4oQ
// secter key = ejZx8wZJ6Jg4Y3Pc1knVhHpM0ugbDwPIdGoKRXb_efk

// link = https://api.unsplash.com/search/photos?query=(value)&per_page=20&client_id=YOUR_ACCESS_KEY

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

import { search_images, appendData } from "../components/fetch.js";

const access_key = `o9LdvZDMA9gka41NZhnsTpNIGw2sUnOvwOrpFIFU4oQ`;

let search = (e) => {
  if (e.key === "Enter") {
    let query = document.querySelector("#query").value;
    
    search_images(query, access_key).then((data) => {
      // console.log(data.results);

      let container = document.querySelector("#container");
      container.innerHTML = null;
      appendData(data.results, container);
    });
  }
};

document.querySelector("#query").addEventListener("keydown", search);

//for menu
let categories = document.querySelector("#category").children;
// console.log(categories)

function ctgSearch() {
  //   console.log(this.id);
  search_images(this.id, access_key).then((data) => {
    let container = document.querySelector("#container");
    container.innerHTML = null;
    appendData(data.results, container);
  });
}

for (let el of categories) {
  el.addEventListener("click", ctgSearch);
}
