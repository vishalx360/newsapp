import { r as react } from '../common/index-210ebed7.js';
import { f as forwardRef, c as cx, a as chakra } from '../common/forward-ref-10d42b89.js';
import '../common/extends-7477639a.js';

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var fallbackIcon = {
  path: /*#__PURE__*/react.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/react.createElement("path", {
    strokeLinecap: "round",
    fill: "none",
    d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    strokeLinecap: "round",
    d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "none",
    strokeMiterlimit: "10",
    cx: "12",
    cy: "12",
    r: "11.25"
  })),
  viewBox: "0 0 24 24"
};
var Icon = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    as: element,
    viewBox,
    color = "currentColor",
    focusable = false,
    children,
    className,
    __css
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["as", "viewBox", "color", "focusable", "children", "className", "__css"]);

  var _className = cx("chakra-icon", className);

  var styles = _extends$1({
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color
  }, __css);

  var shared = {
    ref,
    focusable,
    className: _className,
    __css: styles
  };

  var _viewBox = viewBox != null ? viewBox : fallbackIcon.viewBox;
  /**
   * If you're using an icon library like `react-icons`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */


  if (element && typeof element !== "string") {
    return /*#__PURE__*/react.createElement(chakra.svg, _extends$1({
      as: element
    }, shared, rest));
  }

  var _path = children != null ? children : fallbackIcon.path;

  return /*#__PURE__*/react.createElement(chakra.svg, _extends$1({
    verticalAlign: "middle",
    viewBox: _viewBox
  }, shared, rest), _path);
});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function createIcon(options) {
  var {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    displayName,
    defaultProps = {}
  } = options;
  var Comp = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/react.createElement(Icon, _extends({
    ref: ref,
    viewBox: viewBox
  }, defaultProps, props), path != null ? path : /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: pathDefinition
  })));

  return Comp;
}

var ExternalLinkIcon = createIcon({
  displayName: "ExternalLinkIcon",
  path: /*#__PURE__*/react.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M15 3h6v6"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M10 14L21 3"
  }))
});

export { ExternalLinkIcon };
