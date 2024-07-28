import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to={`./admin`}>
        <div>admin</div>
      </Link>
      <Link to={`./artocle/1`}>
        <div>article 1</div>
      </Link>
      <Link to={`./artocle/2`}>
        <div>article 2</div>
      </Link>
      <Link to={`./artocle/3`}>
        <div>article 3</div>
      </Link>
    </div>
  );
}

export default App;
