import { r as react } from '../common/index-210ebed7.js';
import { i as isBrowser, f as forwardRef, o as omit, a as chakra } from '../common/forward-ref-7c7cf6af.js';
import '../common/extends-7477639a.js';

/**
 * useSafeLayoutEffect enables us to safely call `useLayoutEffect` on the browser
 * (for SSR reasons)
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */

var useSafeLayoutEffect = isBrowser ? react.useLayoutEffect : react.useEffect;

/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it is still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
function useImage(props) {
  var {
    src,
    srcSet,
    onLoad,
    onError,
    crossOrigin,
    sizes,
    ignoreFallback
  } = props;
  var [status, setStatus] = react.useState("pending");
  react.useEffect(() => {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  var imageRef = react.useRef();
  var load = react.useCallback(() => {
    if (!src) return;
    flush();
    var img = new Image();
    img.src = src;

    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }

    if (srcSet) {
      img.srcset = srcSet;
    }

    if (sizes) {
      img.sizes = sizes;
    }

    img.onload = event => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };

    img.onerror = error => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };

    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError]);

  var flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };

  useSafeLayoutEffect(() => {
    /**
     * If user opts out of the fallback/placeholder
     * logic, let's bail out.
     */
    if (ignoreFallback) return undefined;

    if (status === "loading") {
      load();
    }

    return () => {
      flush();
    };
  }, [status, load, ignoreFallback]);
  /**
   * If user opts out of the fallback/placeholder
   * logic, let's just return 'loaded'
   */

  return ignoreFallback ? "loaded" : status;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var NativeImage = /*#__PURE__*/react.forwardRef((props, ref) => {
  var {
    htmlWidth,
    htmlHeight,
    alt
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["htmlWidth", "htmlHeight", "alt"]);

  return /*#__PURE__*/react.createElement("img", _extends({
    width: htmlWidth,
    height: htmlHeight,
    ref: ref,
    alt: alt
  }, rest));
});

/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://chakra-ui.com/docs/data-display/image
 */
var Image$1 = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    fallbackSrc,
    fallback,
    src,
    align,
    fit,
    loading,
    ignoreFallback,
    crossOrigin
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["fallbackSrc", "fallback", "src", "align", "fit", "loading", "ignoreFallback", "crossOrigin"]);
  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/chakra-ui/chakra-ui/issues/1027
   */


  var shouldIgnore = loading != null || ignoreFallback;
  var status = useImage(_extends({}, props, {
    ignoreFallback: shouldIgnore
  }));

  var shared = _extends({
    ref,
    objectFit: fit,
    objectPosition: align
  }, shouldIgnore ? rest : omit(rest, ["onError", "onLoad"]));

  if (status !== "loaded") {
    /**
     * If user passed a custom fallback component,
     * let's render it here.
     */
    if (fallback) return fallback;
    return /*#__PURE__*/react.createElement(chakra.img, _extends({
      as: NativeImage,
      className: "chakra-image__placeholder",
      src: fallbackSrc
    }, shared));
  }

  return /*#__PURE__*/react.createElement(chakra.img, _extends({
    as: NativeImage,
    src: src,
    crossOrigin: crossOrigin,
    loading: loading,
    className: "chakra-image"
  }, shared));
});

export { Image$1 as Image };
