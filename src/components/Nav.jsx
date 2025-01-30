import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="h-max p-5 border-b-2 border-black bg-slate-900 text-white">
        <ul className=" flex-col justify-around sm:flex sm:flex-row">
          <div className="sm:hidden block">
            <button className="border-2 p-2 rounded-sm">click</button>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to={"/villages"}>Villages</Link>
          </li>
          <li>
            <Link to={"/akatsuki"}>Akatsuki</Link>
          </li>
          <li>
            <Link to={"/kekkei-genkai"}>Kekkai Genkai</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
