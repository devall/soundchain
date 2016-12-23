import React, { Component, PropTypes } from 'react';

//TODO move styles to it's own .styl

export function ButtonNextSong() {
  return (<svg className="hoverButton" id="Next" xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 76 76">
      <defs>
        <style>
        {"\
        \
        .backgroundCircle {\
          fill: #fff;\
          opacity: 0.1;\
          transition: opacity 0.5s;\
        }\
        \
        .hoverButton:hover > .backgroundCircle {\
          opacity: 0.2;\
        }\
        .cls-2, .cls-3 {\
          fill: #acacac;\
        }\
        \
        .cls-2 {\
          stroke: #acacac;\
          stroke-linejoin: round;\
          stroke-width: 3px;\
          fill-rule: evenodd;\
        }"}
        </style>
      </defs>
      <circle className="backgroundCircle" cx="38" cy="38" r="38"/>
      <path className="cls-2" d="M539.666,1373.5l-9.342,6.19v-12.37Z" transform="translate(-502 -1336)"/>
      <rect className="cls-3" x="45" y="28" width="3" height="18" rx="1" ry="1"/>
    </svg>

  );
}

export function ButtonPrevSong() {
  return (<svg className="hoverButton" id="Previous" xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 76 76">
      <defs>
        <style>
        {"\
        .cls-2, .cls-3 {\
          fill: #acacac;\
          fill-rule: evenodd;\
        }\
        \
        .cls-2 {\
          stroke: #acacac;\
          stroke-linejoin: round;\
          stroke-width: 3px;\
        }"}
        </style>
      </defs>
      <circle className="backgroundCircle" cx="38" cy="38" r="38"/>
      <path className="cls-2" d="M306.476,1373.66l9.471,6.29v-12.57Z" transform="translate(-274 -1336)"/>
      <path className="cls-3" d="M297,1364h1.041a1,1,0,0,1,1,1v16.3a1,1,0,0,1-1,1H297a1,1,0,0,1-1-1V1365A1,1,0,0,1,297,1364Z" transform="translate(-274 -1336)"/>
    </svg>

  );
}

export function ButtonPlay() {
  return (<svg className="hoverButton" id="Play" xmlns="http://www.w3.org/2000/svg" width="76" viewBox="0 0 95 95">
      <defs>
        <style>
        {"\
        .cls-1 {\
          fill: #fff;\
          opacity: 0.1;\
        }\
        \
        .cls-2 {\
          fill: #acacac;\
          stroke: #acacac;\
          stroke-linejoin: round;\
          stroke-width: 3px;\
          fill-rule: evenodd;\
        }"}
        </style>
      </defs>
      <circle className="backgroundCircle" cx="47.5" cy="47.5" r="47.5"/>
      <path className="cls-2" d="M439.547,1373.5l-21.117,14.07v-28.15Z" transform="translate(-379 -1326)"/>
    </svg>
  );
}