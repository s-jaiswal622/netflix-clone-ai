import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";

function App() {
  const isAuthReady = useAuth();

  if (!isAuthReady) {
    return <div className="text-center bg-black "/>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AppRouter />
    </div>
  );
}

export default App;
