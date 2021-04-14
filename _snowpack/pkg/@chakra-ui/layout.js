import { u as useStyleConfig } from '../common/text-aa154159.js';
export { B as Box, H as Heading, L as Link, S as Stack, T as Text } from '../common/text-aa154159.js';
import { r as react } from '../common/index-210ebed7.js';
import { f as forwardRef, b as omitThemingProps, a as chakra, c as cx } from '../common/forward-ref-7c7cf6af.js';
import '../common/extends-7477639a.js';

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * React component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://chakra-ui.com/docs/data-display/badge
 */
var Badge = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyleConfig("Badge", props);

  var _omitThemingProps = omitThemingProps(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/react.createElement(chakra.span, _extends({
    ref: ref,
    className: cx("chakra-badge", props.className)
  }, rest, {
    __css: _extends({
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle"
    }, styles)
  }));
});

export { Badge };
