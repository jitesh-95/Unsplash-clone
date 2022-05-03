let search_images = async (query, access_key) => {
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=21&client_id=${access_key}`
    );
    let data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log("err;", err);
  }
};

let appendData = (data, container) => {
  data.map(({ urls: { small } }) => {
    let div = document.createElement("div");
    div.setAttribute("class", "details");

    let img = document.createElement("img");

    img.src = small;

    div.append(img);
    container.append(div);
  });
};

export { search_images, appendData };
