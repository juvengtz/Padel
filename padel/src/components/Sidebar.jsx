import React from 'react';

const Sidebar = ({ user, links }) => {
  return (
    <aside className="sidebar">
      <div className="user-info">
        <img src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}><a href={link.href}>{link.text}</a></li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;