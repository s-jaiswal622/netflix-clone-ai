import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/Firebase';
import { addUser, removeUser } from './utils/userSlice';
import AppRouter from './routes/AppRouter';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
      if(user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
        <AppRouter/>
    </div>
  );
}

export default App;
