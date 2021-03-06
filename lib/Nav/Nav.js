'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: ', ';\n  img {\n    height: ', ';\n    margin-left: 5px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ', ';\n  height: ', ';\n  img {\n    height: ', ';\n    margin-left: 5px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _NavLarge = require('./NavLarge/NavLarge');

var _NavLarge2 = _interopRequireDefault(_NavLarge);

var _NavSmall = require('./NavSmall/NavSmall');

var _NavSmall2 = _interopRequireDefault(_NavSmall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledNav = _styledComponents2.default.nav(_templateObject, function (props) {
  return props.theme.background;
}, function (props) {
  return props.theme.navbarHeight;
}, function (props) {
  return props.theme.logoHeight;
});

var Nav = function Nav(_ref) {
  var children = _ref.children,
      logo = _ref.logo,
      title = _ref.title,
      languages = _ref.languages;
  return _react2.default.createElement(
    StyledNav,
    null,
    _react2.default.createElement('img', { src: logo, alt: title }),
    _react2.default.createElement(
      _NavSmall2.default,
      { languages: languages },
      children
    ),
    _react2.default.createElement(
      _NavLarge2.default,
      null,
      children
    )
  );
};

Nav.propTypes = {
  children: _react.PropTypes.node.isRequired,
  title: _react.PropTypes.string.isRequired,
  logo: _react.PropTypes.string.isRequired,
  languages: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string,
    name: _react.PropTypes.string
  })).isRequired
};

exports.default = Nav;