const openMenu = document.querySelector(`#show-menu`);
const hideMenuIcon = document.querySelector(`#hide-menu`);
const sideMenu = document.querySelector(`#nav-menu`);

openMenu.addEventListener(`click`, () => {
  sideMenu.classList.add(`active`);
});

hideMenuIcon.addEventListener(`click`, () => {
  sideMenu.classList.remove(`active`);
});

// https://youtube.googleapis.com/youtube/v3/search?order=viewCount&regionCode=in&key=AIzaSyBdXe5uB4AZ3-tUWvlRayH4rvgNgMbY1cg

async function trendInIndia() {
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?order=viewCount&regionCode=in&key=AIzaSyBdXe5uB4AZ3-tUWvlRayH4rvgNgMbY1cg&maxResults=55`
  );
  let data = await res.json();
  console.log(data);
  let videos_div = document.getElementById("videos");

  let { items } = data;
  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });
  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");
    div.innerHTML = `<iframe width="420" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videos_div.appendChild(div);
  });
}
trendInIndia();
async function findVideos() {
  let q = document.getElementById("query").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyBdXe5uB4AZ3-tUWvlRayH4rvgNgMbY1cg&maxResults=22`
  );
  let data = await res.json();

  let videos_div = document.getElementById("videos");
  videos_div.innerHTML = null;

  let { items } = data;
  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });
  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");

    div.innerHTML = `<iframe width="420" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videos_div.appendChild(div);
  });
}
