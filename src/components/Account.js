import React from 'react'
import style from '../Styles/Account.module.css'
import { Link } from 'react-router-dom'

const Account = () => {
    return (
        <div className={style.account}>
        <scpan className="material-icons-outlined" title="Account">
          account_circle
        </scpan>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        {/* <!-- <span class="material-icons-outlined" title="Logout"> logout </span> --> */}
      </div>
    )
}

export default Account
