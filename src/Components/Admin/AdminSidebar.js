import React from 'react'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
  } from "@material-ui/icons";
  import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div>
       <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/adminhome" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Movies
              </li>
              </Link>
              <Link to="/theatres" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Theatres
              </li>
              </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">

          <Link to="/" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Logout
              </li>
              </Link>

          </ul>
        </div>
    
      </div>
    </div>
    </div>
  )
}

export default AdminSidebar