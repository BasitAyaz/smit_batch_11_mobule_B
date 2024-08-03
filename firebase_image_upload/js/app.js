// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();

let imageUpload = document.getElementById("imageUpload");
let prog = document.getElementById("prog");
let displayImage = document.getElementById("displayImage");

let uploads = () => {
  return new Promise((resolve, reject) => {
    let files = imageUpload.files[0];
    console.log(files);
    const randomNum = Math.random().toString().slice(2);

    const storageRef = ref(storage, `images/${randomNum}`);
    const uploadTask = uploadBytesResumable(storageRef, files);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        prog.value = progress;

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        alert(error.message);
        reject(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          displayImage.src = downloadURL;
          resolve(downloadURL);
        });
      }
    );
  });
};

window.addProduct = () => {
  let product = {
    name: "ABC",
    price: 123,
  };
  console.log(product);

  //   check validation

  uploads()
    .then((url) => {
      product.imageUrl = url;
      console.log(product);

      // send to database
    })
    .catch((err) => {
      console.log(err);
    });
};
