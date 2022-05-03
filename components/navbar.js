let navbar = () => {
  return `
    <div id="category">
        <h3 id="nature">Nature</h3>
        <h3 id="car">Cars</h3>
        <h3 id="music">Music</h3>
        <h3 id="cartoon">Cartoons</h3>
        <h3 id="technology">Technology</h3>
        <h3 id="marvel">Marvel</h3>
        <h3 id="Architecture">Architecture</h3>
        <h3 id="fashion">Fashion</h3>
        <h3 id="food">Food</h3>
    </div>
    <div id="search_bar">
        <img src="../images/background.jpg"/>
        <h1 id="title">Unsplash</h1>
        <span class="material-symbols-outlined">search</span>
        <input type="text" id="query" placeholder="Search free high-resolution photos"/>
    </div>
    `;
};

export { navbar };
