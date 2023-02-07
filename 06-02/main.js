let openRequest = indexedDB.open("my storage", 4);

let db = null;

openRequest.onsuccess = () => {
  db = openRequest.result;
  db.onversionchange = () => {
    db.close();
    alert("Database is outdated, please reload the page.");
  };
};

openRequest.onupgradeneeded = (event) => {
  console.log("old version ", event.oldVersion);
  console.log("new version ", event.newVersion);
  db = openRequest.result;
  if (!db.objectStoreNames.contains("books"))
    db.createObjectStore("books", { keyPath: "id" });
  // db.deleteObjectStore('books');
};

openRequest.onerror = () => {
  console.log("Error", openRequest.error);
};

// let deleteRequest = indexedDB.deleteDatabase('my storage');

const addBook = (e) => {
  e.preventDefault();
  let book = {
    id: bookNumber.value,
    bookNumber: bookNumber.value,
    bookName: bookName.value,
  };

  let transaction = db.transaction("books", "readwrite");
  let books = transaction.objectStore("books");
  books.add(book);
  
  //   Should create seperate transaction and objectStore to update and delete methods
  //   books.put(book);
  //   books.delete(5);
};
