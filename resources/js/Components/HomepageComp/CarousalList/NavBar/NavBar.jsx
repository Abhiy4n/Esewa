import "./NavBar.css"

export default function NavBar(){
  return(
    <nav>
      <div className="ul-item">
        <ul className="nav-list text-white">
          <li><a href="#">Top Up</a></li>
          <li><a href="#">Airlines</a></li>
          <li><a href="#">Internet Bill</a></li>
          <li><a href="#">Load Fund</a></li>
        </ul>
      </div>
    </nav>
  )
}