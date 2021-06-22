import React from 'react'
import {Link, useLocation} from "react-router-dom";

const AdminBreadcrumb = () => {
  
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin">HOME</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{useLocation().pathname.substring(7).toUpperCase()}</li>
        </ol>
      </nav>
    </div>
  )
}

export default AdminBreadcrumb;
