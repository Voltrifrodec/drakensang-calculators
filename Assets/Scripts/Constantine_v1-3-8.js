const getID = (x) => document.getElementById(x);

const getCN = (x) => document.getElementsByClassName(x);

const getTN = (x) => document.getElementsByTagName(x);

const crtEL = (x) => document.createElement(x);

const appCH = (x,y) => x.appendChild(y);

const numFormatDE = (number) => Intl.NumberFormat('de-DE').format(number);