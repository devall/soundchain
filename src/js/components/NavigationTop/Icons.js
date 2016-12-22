import React, { Component, PropTypes } from 'react';

export function LeftArrow() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 29">
      <path id="previous" style={{fill: "#bebebe", fillRule: "evenodd"}} d="M702,198.941L700.091,197,685,211.5l15.09,14.5L702,224.058,688.933,211.5Z" transform="translate(-685 -197)"/>
    </svg>
  );
}

export function RightArrow() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 17 29">
      <path id="next" style={{fill: "#bebebe", fillRule: "evenodd"}} d="M749,224.059L750.909,226,766,211.5,750.909,197,749,198.942,762.067,211.5Z" transform="translate(-749 -197)"/>
    </svg>
  );
}

export function MinificationGlass() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="29" viewBox="0 0 29 29">
    <path id="ico_search" style={{fill: "#36373c", fillRule: "evenodd"}} d="M873.611,222.909l-6.964-6.964a12.2,12.2,0,1,0-1.708,1.708l6.964,6.958A1.206,1.206,0,1,0,873.611,222.909Zm-16.4-4.925a9.78,9.78,0,1,1,9.783-9.777A9.789,9.789,0,0,1,857.207,217.984Z" transform="translate(-845 -196)"/>
  </svg>);
}