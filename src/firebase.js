import { initializeApp, ServerValue } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  onValue,
  push,
  set,
  update,
  increment,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXoG7IOUwaaRobWJGrR3u1-1cZl68QGfY",
  authDomain: "like-counter-df95f.firebaseapp.com",
  projectId: "like-counter-df95f",
  storageBucket: "like-counter-df95f.appspot.com",
  messagingSenderId: "597105951232",
  appId: "1:597105951232:web:4fb62efeaec8f2caf8cee5",
  measurementId: "G-N1P79EQMYK",
  databaseURL:
    "https://like-counter-df95f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

initializeApp(firebaseConfig);

export const incrementLikes = () => {
  console.log("update");
  const db = getDatabase();

  const LikesCountRef = ref(db, "blue-period");
  update(LikesCountRef, {
    page_likes: increment(1),
  });
};

export const incrementViews = () => {
  console.log("update");
  const db = getDatabase();

  const LikesCountRef = ref(db, "blue-period");
  update(LikesCountRef, {
    page_views: increment(1),
  });
};
