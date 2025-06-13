import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";

const useAuth = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }));
      } else {
        dispatch(removeUser());
      }
      setIsReady(true); // ✅ Firebase responded
    });

    return () => unsubscribe();
  }, [dispatch]);

  return isReady;
};

export default useAuth;
