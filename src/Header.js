import React from "react";


function Header() {
  return (
    <div className="header d-flex allign-items-center justify-content-space-between">
      <div className="header-left-items d-flex allign-items-center mxy-30">
        <div className="menu-bar">
        <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
        />
        <svg>
            <g className="style-scope yt-icon">
              <path
                d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                className="style-scope yt-icon"
              ></path>
            </g>
        </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
