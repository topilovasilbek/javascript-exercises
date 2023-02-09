let request = indexedDB.open("storage", 2);

let db = null;

request.onsuccess = () => {
  db = request.result;
  drawData();
};

request.onupgradeneeded = () => {
  db = request.result;
  if (!db.objectStoreNames.contains("videos"))
    db.createObjectStore("videos", { keyPath: "id" });
};

request.onerror = (err) => {
  console.log("error", err);
};

video.onchange = (e) => {
  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = (e) => {
    let obj = {
      id: identifier.value,
      value: reader.result,
    };

    let transaction = db.transaction("videos", "readwrite");
    let videos = transaction.objectStore("videos");
    videos.add(obj);
    drawData();
  };
};

function drawData() {
  let transaction = db.transaction("videos", "readwrite");
  let videos = transaction.objectStore("videos");
  videos.getAll().onsuccess = (e) => {
    storageVideos.innerHTML = null;
    e.target.result.forEach((element) => {
      let div = document.createElement("div");
      div.classList.add("row");
      let a = document.createElement("a");
      a.download = element.id;
      a.href = element.value;
      a.innerHTML = "Download it";
      let video = document.createElement("video");
      video.src = element.value;
      video.controls = true;
      video.width = "300";
      div.append(video, a);
      storageVideos.append(div);
    });
  };
  /* data.onsuccess = () => {
    data.forEach((element) => {
      console.log(element);
    });
  }; */
}
