'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nfont-size: 1.25em;\npadding: 0.5em;\nmargin: 0.5em;\ncolor: #222222;\nbackground: #FFFFFF;\nborder: 1px solid #dbdbdb;\nborder-radius: 5px;\nfont-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n\n&::-webkit-input-placeholder {\n\n}\n\n&:-moz-placeholder { /* Firefox 18- */\n\n}\n\n&::-moz-placeholder {  /* Firefox 19+ */\n\n}\n\n&:-ms-input-placeholder {\n\n}\n'], ['\nfont-size: 1.25em;\npadding: 0.5em;\nmargin: 0.5em;\ncolor: #222222;\nbackground: #FFFFFF;\nborder: 1px solid #dbdbdb;\nborder-radius: 5px;\nfont-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;\n\n&::-webkit-input-placeholder {\n\n}\n\n&:-moz-placeholder { /* Firefox 18- */\n\n}\n\n&::-moz-placeholder {  /* Firefox 19+ */\n\n}\n\n&:-ms-input-placeholder {\n\n}\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.input(_templateObject);

exports.default = Input;