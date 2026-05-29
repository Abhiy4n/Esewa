import "./HeaderCss.css"
import { Link } from '@inertiajs/react'

export default function Header() {
  return (
    <header>
      <div className="header-inner">

        <div className="header-left">
          <img className="h-8 w-31" src="/assets/logo.png" alt="eSewa Logo" />
          <div className="search-wrap">
            <img className="sch-icon" src="/assets/icons/searchIcon.png" alt="Search icon" />
            <input className="esewa-search" type="text" placeholder="Search services/merchant by tags (e.g. adsl)" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-right-top">
            <div className="user-auth">
              <div className="user-id-container">
                <img className="user-id-icon" src="/assets/icons/user.png" alt="User icon" />
                <input className="user-id" type="text" placeholder="eSewa ID" />
              </div>
              <div className="user-pass-container">
                <img className="user-pass-icon" src="/assets/icons/padlock.png" alt="Password icon" />
                <input className="user-pass" type="text" placeholder="Password" />
              </div>
            </div>

            <div className="buttons">
              <button className="btn-login">Login</button>
              <Link href={route('registerpage')} className="btn-register">Register</Link>
            </div>
          </div>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </header>
  )
}
