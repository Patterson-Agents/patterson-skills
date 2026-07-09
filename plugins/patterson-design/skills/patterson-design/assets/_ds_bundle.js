/* @ds-bundle: {"format":3,"namespace":"PattersonCompaniesDesignSystem_1f7cbe","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7e214be36871","components/core/Button.jsx":"98fae79ef8f0","components/core/Card.jsx":"11a14798d6f8","components/core/IconButton.jsx":"b941fece5662","components/core/Stat.jsx":"e0e1d164ae78","components/feedback/Alert.jsx":"60554ac14775","components/feedback/Tabs.jsx":"579ba456e9bc","components/forms/Checkbox.jsx":"4f93f0dc4f95","components/forms/Input.jsx":"148131ac223c","components/forms/Radio.jsx":"04b993d678a7","components/forms/Select.jsx":"6768c7548eef","components/forms/Switch.jsx":"a2ba3bcb1dc7","ui_kits/corporate-website/Footer.jsx":"e51e8a5802ba","ui_kits/corporate-website/Header.jsx":"b42dc70d80a6","ui_kits/corporate-website/HomeScreen.jsx":"463d00545e6c","ui_kits/corporate-website/NewsroomScreen.jsx":"dd9870234621","ui_kits/corporate-website/WhatWeDoScreen.jsx":"62567e688a9b","ui_kits/corporate-website/icons.jsx":"f651fab378d8","ui_kits/storefront/StoreFooter.jsx":"aaadd2c29f92","ui_kits/storefront/StoreHeader.jsx":"3f7d7fc99d45","ui_kits/storefront/StoreHome.jsx":"ad879c060145","ui_kits/storefront/brands.js":"b19ed7531720","ui_kits/storefront/icons.jsx":"d018132f2076","uploads/theme-scripts.min.js":"dd5dce0f1ac7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PattersonCompaniesDesignSystem_1f7cbe = window.PattersonCompaniesDesignSystem_1f7cbe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/label badge. Tone draws from the brand + semantic palette.
 */
function Badge({
  children,
  tone = 'navy',
  solid = false,
  style,
  ...rest
}) {
  const tones = {
    navy: {
      fg: 'var(--pat-navy)',
      bg: 'var(--pat-navy-10)',
      solidBg: 'var(--pat-navy)'
    },
    sky: {
      fg: 'var(--pat-blue)',
      bg: 'var(--pat-sky-10)',
      solidBg: 'var(--pat-sky)'
    },
    green: {
      fg: '#3d7a1f',
      bg: '#eef6e6',
      solidBg: 'var(--pat-green)'
    },
    teal: {
      fg: 'var(--pat-teal)',
      bg: 'var(--pat-success-bg)',
      solidBg: 'var(--pat-teal)'
    },
    purple: {
      fg: 'var(--pat-purple)',
      bg: '#efe9f6',
      solidBg: 'var(--pat-purple)'
    },
    gray: {
      fg: 'var(--pat-gray-600)',
      bg: 'var(--pat-gray-100)',
      solidBg: 'var(--pat-gray-600)'
    },
    warning: {
      fg: 'var(--pat-warning)',
      bg: 'var(--pat-warning-bg)',
      solidBg: 'var(--pat-warning)'
    },
    danger: {
      fg: 'var(--pat-danger)',
      bg: 'var(--pat-danger-bg)',
      solidBg: 'var(--pat-danger)'
    }
  };
  const t = tones[tone] || tones.navy;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-xs)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      color: solid ? '#fff' : t.fg,
      background: solid ? t.solidBg : t.bg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Patterson primary action button.
 * Variants map to brand intent: solid navy/sky for primary actions,
 * outline & ghost for secondary, on-dark for use over navy surfaces.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 16px',
      font: 'var(--fs-sm)'
    },
    md: {
      height: 'var(--control-h-md)',
      padding: '0 22px',
      font: 'var(--fs-body)'
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 30px',
      font: 'var(--fs-h5)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--pat-navy)',
      color: '#fff',
      border: '2px solid var(--pat-navy)'
    },
    sky: {
      background: 'var(--pat-sky)',
      color: '#fff',
      border: '2px solid var(--pat-sky)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--pat-navy)',
      border: '2px solid var(--pat-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--pat-navy)',
      border: '2px solid transparent'
    },
    onDark: {
      background: '#fff',
      color: 'var(--pat-navy)',
      border: '2px solid #fff'
    }
  };
  const v = variants[variant] || variants.primary;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    const el = e.currentTarget;
    if (variant === 'primary') el.style.background = 'var(--pat-sky)', el.style.borderColor = 'var(--pat-sky)';else if (variant === 'sky') el.style.background = 'var(--pat-navy)', el.style.borderColor = 'var(--pat-navy)';else if (variant === 'outline') el.style.background = 'var(--pat-navy)', el.style.color = '#fff';else if (variant === 'ghost') el.style.background = 'var(--pat-navy-10)';else if (variant === 'onDark') el.style.background = 'var(--pat-sky)', el.style.color = '#fff', el.style.borderColor = 'var(--pat-sky)';
  };
  const hoverOut = e => {
    const el = e.currentTarget;
    Object.assign(el.style, {
      background: v.background,
      color: v.color,
      borderColor: v.border.split(' ').pop()
    });
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'translateY(1px)'),
    onMouseUp: e => e.currentTarget.style.transform = 'translateY(0)'
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Clean white card with soft navy-tinted shadow and a
 * subtle border. Optional accent stripe along the top in a brand color.
 */
function Card({
  children,
  elevation = 'sm',
  accent = null,
  padding = 'var(--space-5)',
  interactive = false,
  style,
  ...rest
}) {
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const accents = {
    navy: 'var(--pat-navy)',
    sky: 'var(--pat-sky)',
    green: 'var(--pat-green)',
    teal: 'var(--pat-teal)',
    purple: 'var(--pat-purple)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.boxShadow = shadows[elevation];
        e.currentTarget.style.transform = 'translateY(0)';
      }
    },
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadows[elevation] || shadows.sm,
      borderTop: accent ? `4px solid ${accents[accent] || accent}` : undefined,
      padding,
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon-only button. Pass an icon (SVG / glyph) as children.
 * Sized to meet the 44px hit-target minimum at md.
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 44,
    lg: 54
  };
  const d = dims[size] || dims.md;
  const variants = {
    solid: {
      background: 'var(--pat-navy)',
      color: '#fff'
    },
    sky: {
      background: 'var(--pat-sky)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--pat-navy)'
    },
    subtle: {
      background: 'var(--pat-navy-10)',
      color: 'var(--pat-navy)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: e => {
      if (!disabled && variant === 'ghost') e.currentTarget.style.background = 'var(--pat-navy-10)';
    },
    onMouseLeave: e => {
      if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number statistic, as used across Patterson marketing ("86,000,000
 * U.S. households have pets"). Number in sky or navy, label beneath.
 */
function Stat({
  value,
  label,
  tone = 'sky',
  align = 'left',
  style,
  ...rest
}) {
  const colors = {
    sky: 'var(--pat-sky)',
    navy: 'var(--pat-navy)',
    teal: 'var(--pat-teal)',
    green: 'var(--pat-green)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-stat)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 1,
      color: colors[tone] || colors.sky
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-body)',
      maxWidth: '22ch',
      marginInline: align === 'center' ? 'auto' : undefined
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline message banner. Tone sets accent + tint; optional title & dismiss. */
function Alert({
  children,
  tone = 'info',
  title,
  onClose,
  icon,
  style,
  ...rest
}) {
  const tones = {
    info: {
      fg: 'var(--pat-info)',
      bg: 'var(--pat-info-bg)',
      bar: 'var(--pat-info)'
    },
    success: {
      fg: 'var(--pat-success)',
      bg: 'var(--pat-success-bg)',
      bar: 'var(--pat-success)'
    },
    warning: {
      fg: 'var(--pat-warning)',
      bg: 'var(--pat-warning-bg)',
      bar: 'var(--pat-warning)'
    },
    danger: {
      fg: 'var(--pat-danger)',
      bg: 'var(--pat-danger-bg)',
      bar: 'var(--pat-danger)'
    },
    brand: {
      fg: 'var(--pat-navy)',
      bg: 'var(--pat-navy-10)',
      bar: 'var(--pat-sky)'
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start',
      background: t.bg,
      borderLeft: `4px solid ${t.bar}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      display: 'flex',
      flex: 'none',
      marginTop: '1px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--fs-body)',
      marginBottom: children ? '2px' : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      padding: 0,
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
/**
 * Horizontal tabs with a sky underline indicator. Controlled via `value`
 * or uncontrolled via `defaultValue`.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value)));
  const active = isControlled ? value : internal;
  const select = val => {
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const val = typeof t === 'string' ? t : t.value;
    const lbl = typeof t === 'string' ? t : t.label;
    const on = active === val;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      onClick: () => select(val),
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--pat-navy)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-muted)';
      },
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-body)',
        fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: on ? 'var(--pat-navy)' : 'var(--text-muted)',
        borderBottom: `3px solid ${on ? 'var(--pat-sky)' : 'transparent'}`,
        marginBottom: '-1px',
        transition: 'color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
      }
    }, lbl);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with brand sky fill when checked. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const cbId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: !isControlled ? defaultChecked : undefined,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--pat-sky)' : 'var(--border-strong)'}`,
      background: on ? 'var(--pat-sky)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label, optional helper/error text and sky focus ring.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  helper,
  error,
  disabled = false,
  required = false,
  iconLeft = null,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--pat-danger)' : focused ? 'var(--pat-sky)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14px',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: 'var(--control-h-md)',
      padding: iconLeft ? '0 14px 0 42px' : '0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-muted)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused && !error ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      boxSizing: 'border-box'
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--pat-danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button in a RadioGroup. Use within Radio.Group for selection state. */
function Radio({
  label,
  value,
  checked,
  onChange,
  name,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const rId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--pat-sky)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--pat-sky)',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}

/** Convenience group: renders radios from options and manages selection. */
Radio.Group = function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  direction = 'column',
  gap = '12px',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap,
      ...style
    }
  }, options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: val,
      name: name,
      value: val,
      label: lbl,
      checked: value === val,
      onChange: () => onChange && onChange(val)
    });
  }));
};
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with brand chevron and focus ring. */
function Select({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const selId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: disabled ? 'var(--surface-muted)' : 'var(--surface-card)',
      border: `1.5px solid ${focused ? 'var(--pat-sky)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch; sky track when on. Controlled or uncontrolled. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const swId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: !isControlled ? defaultChecked : undefined,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--pat-sky)' : 'var(--border-strong)',
      padding: 3,
      boxSizing: 'border-box',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/Footer.jsx
try { (() => {
/* Footer: visit-our-sites, connect, contact, brand-promise lockup, legal. */
function Footer() {
  const {
    IconPin,
    IconExternal
  } = window;
  const sites = ['Patterson Dental', 'Patterson Veterinary', 'Animal Health International', 'Kane Veterinary Supplies', 'NVS Group', 'Patterson Foundation', 'Investor Relations'];
  const legal = ['Home', 'Terms', 'Privacy', 'Cookies Policy', 'Site Map', 'ACA Notice', 'Careers'];
  const linkStyle = {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 'var(--fs-sm)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Visit our websites"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 22px',
      marginTop: 14,
      maxWidth: 460
    }
  }, sites.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'
  }, s, /*#__PURE__*/React.createElement(IconExternal, {
    size: 12,
    stroke: 2.2
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Connect with us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, "Facebook"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, "YouTube"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: linkStyle
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Contact us"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconPin, {
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "1031 Mendota Heights Road"), /*#__PURE__*/React.createElement("br", null), "Saint Paul, MN 55120")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, "1.800.328.5536", /*#__PURE__*/React.createElement("br", null), "info@pattersoncompanies.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      paddingTop: 20,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px'
    }
  }, legal.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 'var(--fs-xs)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, "\xA9 2026 Patterson Companies, Inc. All rights reserved."))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/Header.jsx
try { (() => {
/* Sticky brand header: product-switch bar + main nav. */
function Header({
  route,
  onNavigate
}) {
  const {
    IconSearch,
    IconMenu,
    IconExternal
  } = window;
  const nav = ['Our Company', 'What We Do', 'How We Do It', 'Community Strong', 'Join Us', 'Newsroom'];
  const products = ['Patterson Dental', 'Patterson Veterinary', 'Animal Health International', 'Patterson Logistics'];
  const routeOf = label => label.toLowerCase().replace(/\s+/g, '-');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '26px',
      height: 40,
      alignItems: 'center'
    }
  }, products.map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
  }, p, /*#__PURE__*/React.createElement(IconExternal, {
    size: 13,
    stroke: 2.2
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/patterson-logo-navy.svg",
    alt: "Patterson",
    style: {
      height: 26,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, nav.map(label => {
    const r = routeOf(label);
    const active = route === r;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(r);
      },
      style: {
        fontSize: 'var(--fs-sm)',
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--pat-navy)' : 'var(--text-body)',
        padding: '8px 12px',
        borderRadius: 'var(--radius-sm)',
        borderBottom: `2px solid ${active ? 'var(--pat-sky)' : 'transparent'}`
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--pat-navy)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-body)';
      }
    }, label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: 'var(--border-default)',
      margin: '0 8px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--pat-navy)',
      display: 'flex',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 20
  })))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/HomeScreen.jsx
try { (() => {
/* Home: hero, four-pillar cards, We-Are-Patterson stats, capabilities, news, CTA. */
function HomeScreen({
  onNavigate
}) {
  const DS = window.PattersonCompaniesDesignSystem_1f7cbe;
  const {
    Button,
    Card,
    Stat,
    Tabs,
    Badge
  } = DS;
  const {
    IconArrow,
    IconTooth,
    IconPaw,
    IconTruck,
    IconLeaf
  } = window;
  const [cap, setCap] = React.useState('Service');
  const pillars = [{
    icon: IconTooth,
    color: 'var(--pat-sky)',
    title: 'Dental',
    body: 'Across North America, we supply dentists with everyday essentials and software to run their business.'
  }, {
    icon: IconPaw,
    color: 'var(--pat-teal)',
    title: 'Animal Health',
    body: 'Internationally, we supply veterinarians and producers with the essentials and software to run their operations.'
  }, {
    icon: IconTruck,
    color: 'var(--pat-navy)',
    title: 'Logistics',
    body: 'We reach 98% of customers with 1-to-2-day shipping from 60 state-of-the-art fulfillment centers.'
  }, {
    icon: IconLeaf,
    color: 'var(--pat-green)',
    title: 'Sustainability',
    body: 'Solar-powered fulfillment centers fuel our delivery system and minimize our footprint.'
  }];
  const capabilities = {
    Service: 'Generations of quality customer service define our business operations and our personal interactions. We are an indispensable partner — not just a distributor.',
    Logistics: 'We reach 98% of our customers with 1-to-2-day shipping from 60 state-of-the-art fulfillment centers strategically located internationally.',
    Products: 'From everyday essentials to advanced technology and practice-management software, we provide everything practices need to run productively.'
  };
  const news = [{
    tag: 'Leadership',
    date: 'Jan 20, 2026',
    title: 'Patterson announces Senior Vice President of Dental Software'
  }, {
    tag: 'Corporate',
    date: 'Jan 12, 2026',
    title: 'Patterson Companies completes acquisition by Patient Square Capital'
  }, {
    tag: 'Veterinary',
    date: 'Dec 18, 2025',
    title: 'Patterson Veterinary and dvmGRO join forces to support independent practices'
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 120% at 85% 10%, rgba(0,168,225,0.35), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      position: 'relative',
      paddingTop: 'var(--space-11)',
      paddingBottom: 'var(--space-11)',
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Trusted Expertise \xB7 Unrivaled Support"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-display)',
      margin: '14px 0 18px',
      maxWidth: '14ch',
      lineHeight: 1.04
    }
  }, "We strengthen the people who keep us and our animals ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-sky)'
    }
  }, "healthy"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 620
    }
  }, "Bold solutions and a personal touch for the oral and animal health industries \u2014 supporting practices and operations since 1877."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => onNavigate('what-we-do')
  }, "What we do"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => onNavigate('our-company')
  }, "Our company")))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, pillars.map(p => {
    const I = p.icon;
    return /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      interactive: true,
      accent: "sky",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--pat-navy-10)',
        color: p.color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-h4)'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--fs-sm)',
        flex: 1
      }
    }, p.body), /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate('what-we-do');
      },
      style: {
        fontWeight: 600,
        fontSize: 'var(--fs-sm)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, "Learn more ", /*#__PURE__*/React.createElement(IconArrow, {
      size: 15
    })));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "We are Patterson"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 14px'
    }
  }, "Much more than a distributor \u2014 an indispensable partner."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, "Patterson strengthens the oral and animal health markets in North America and the United Kingdom. From small private practices to large group networks and production operations, we guide our customers with bold solutions and a personal touch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "86M",
    label: "U.S. households have pets",
    tone: "sky"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "90%",
    label: "of adults value keeping their mouth healthy",
    tone: "navy"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "250M",
    label: "tons of protein needed by 2050",
    tone: "teal"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '5 / 6',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(160deg, var(--pat-navy), var(--pat-blue))',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,0.92)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 700,
      color: '#fff'
    }
  }, "Trusted Expertise.", /*#__PURE__*/React.createElement("br", null), "Unrivaled Support."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      marginTop: 10,
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'var(--font-mono)'
    }
  }, "[ brand photography placeholder ]")))))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginInline: 'auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '10px 0 22px'
    }
  }, "We deliver every day across three capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Service', 'Logistics', 'Products'],
    value: cap,
    onChange: setCap,
    style: {
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      textAlign: 'center',
      marginTop: 'var(--space-6)',
      color: 'var(--text-body)'
    }
  }, capabilities[cap]))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "In the news"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: () => onNavigate('newsroom')
  }, "More content")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, news.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    interactive: true,
    onClick: () => onNavigate('newsroom'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sky"
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h4)',
      lineHeight: 1.25
    }
  }, n.title), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('newsroom');
    },
    style: {
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'auto'
    }
  }, "Read more ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 15
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-sky)',
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 6px',
      color: 'var(--pat-navy)'
    }
  }, "Work with us"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--pat-navy)',
      opacity: 0.85,
      maxWidth: 560
    }
  }, "Together, we are transforming the way care is delivered to people and animals.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => onNavigate('join-us')
  }, "Join us"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/NewsroomScreen.jsx
try { (() => {
/* Newsroom: filterable list of press releases. */
function NewsroomScreen() {
  const DS = window.PattersonCompaniesDesignSystem_1f7cbe;
  const {
    Card,
    Badge,
    Tabs,
    Button
  } = DS;
  const {
    IconArrow
  } = window;
  const [filter, setFilter] = React.useState('All');
  const items = [{
    tag: 'Leadership',
    date: 'Jan 20, 2026',
    title: 'Patterson announces Senior Vice President of Dental Software'
  }, {
    tag: 'Leadership',
    date: 'Jan 14, 2026',
    title: 'Patterson announces Dental President'
  }, {
    tag: 'Corporate',
    date: 'Jan 12, 2026',
    title: 'Patterson Companies completes acquisition by Patient Square Capital'
  }, {
    tag: 'Corporate',
    date: 'Dec 20, 2025',
    title: 'Shareholders approve acquisition by Patient Square Capital for $31.35 per share in cash'
  }, {
    tag: 'Veterinary',
    date: 'Dec 18, 2025',
    title: 'Patterson Veterinary and dvmGRO join forces to support independently owned practices'
  }, {
    tag: 'Dental',
    date: 'Dec 02, 2025',
    title: 'Patterson Dental extends strategic relationship with PDS Health'
  }, {
    tag: 'Dental',
    date: 'Nov 19, 2025',
    title: 'Patterson Dental announces Eaglesoft and Pearl Second Opinion integration'
  }, {
    tag: 'Corporate',
    date: 'Nov 05, 2025',
    title: 'Patterson Companies releases 2024 Corporate Responsibility Report'
  }, {
    tag: 'Veterinary',
    date: 'Oct 22, 2025',
    title: 'Patterson Veterinary puts customers first by connecting with new IT service'
  }];
  const tones = {
    Leadership: 'purple',
    Corporate: 'navy',
    Veterinary: 'teal',
    Dental: 'sky'
  };
  const filters = ['All', 'Corporate', 'Dental', 'Veterinary', 'Leadership'];
  const shown = filter === 'All' ? items : items.filter(i => i.tag === filter);
  const [feature, ...rest] = shown;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "Newsroom"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '12px 0 0'
    }
  }, "In the news"))), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: filters,
    value: filter,
    onChange: setFilter
  })), feature && /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 0,
      overflow: 'hidden',
      padding: 0,
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(150deg, var(--pat-navy), var(--pat-blue))',
      minHeight: 240,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.8)'
    }
  }, "[ featured image placeholder ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tones[feature.tag]
  }, feature.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, feature.date)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h3)'
    }
  }, feature.title), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Read the release ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, rest.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tones[n.tag]
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, n.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h5)',
      lineHeight: 1.3,
      flex: 1
    }
  }, n.title), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600,
      fontSize: 'var(--fs-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, "Read more ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Load more news"))));
}
window.NewsroomScreen = NewsroomScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/NewsroomScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/WhatWeDoScreen.jsx
try { (() => {
/* What We Do: page header + three capability sections. */
function WhatWeDoScreen({
  onNavigate
}) {
  const DS = window.PattersonCompaniesDesignSystem_1f7cbe;
  const {
    Button,
    Card,
    Stat,
    Badge
  } = DS;
  const {
    IconArrow,
    IconUsers,
    IconTruck,
    IconTooth
  } = window;
  const sections = [{
    id: 'service',
    eyebrow: 'Service',
    icon: IconUsers,
    title: 'A personal touch, backed by generations of expertise',
    body: 'Generations of quality customer service define our business operations and our personal interactions. Our representatives know their customers and their markets — guiding practices of every size as an indispensable partner.',
    points: ['Dedicated territory representatives', 'Practice-management software & training', 'Equipment service & technology support']
  }, {
    id: 'logistics',
    eyebrow: 'Logistics',
    icon: IconTruck,
    title: 'We reach 98% of customers in 1–2 days',
    body: 'From 60 state-of-the-art fulfillment centers located strategically across North America and the United Kingdom, we deliver the everyday essentials practices depend on — quickly, reliably and sustainably.',
    points: ['60 fulfillment centers', 'Solar-powered facilities', '1-to-2-day standard shipping']
  }, {
    id: 'products',
    eyebrow: 'Products',
    icon: IconTooth,
    title: 'Everything a practice needs to run productively',
    body: 'From consumable essentials to advanced equipment and software, we provide the technology, products, expertise and solutions needed to deliver exceptional care and drive profitability.',
    points: ['Everyday consumables & essentials', 'Diagnostic & imaging technology', 'Business & clinical software']
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      margin: '12px 0 12px',
      maxWidth: '18ch'
    }
  }, "Service, logistics and products \u2014 delivered every day."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 640
    }
  }, "We are an international distributor of products, technologies, services and business solutions for the animal and oral health industries."))), sections.map((s, i) => {
    const I = s.icon;
    const reversed = i % 2 === 1;
    return /*#__PURE__*/React.createElement("section", {
      key: s.id,
      style: {
        background: reversed ? 'var(--surface-subtle)' : '#fff',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pat-container",
      style: {
        paddingTop: 'var(--space-10)',
        paddingBottom: 'var(--space-10)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--space-9)',
        alignItems: 'center',
        direction: reversed ? 'rtl' : 'ltr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        direction: 'ltr'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-md)',
        background: 'var(--pat-sky-10)',
        color: 'var(--pat-sky)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 26
    })), /*#__PURE__*/React.createElement("span", {
      className: "pat-eyebrow"
    }, s.eyebrow)), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: '0 0 14px'
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body)'
      }
    }, s.body), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: '18px 0 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, s.points.map(pt => /*#__PURE__*/React.createElement("li", {
      key: pt,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 'var(--fs-body)',
        color: 'var(--text-heading)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--pat-sky)',
        flex: 'none'
      }
    }), pt)))), /*#__PURE__*/React.createElement("div", {
      style: {
        direction: 'ltr',
        aspectRatio: '4 / 3',
        borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(150deg, var(--pat-blue), var(--pat-sky))',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: 'var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        color: 'rgba(255,255,255,0.85)'
      }
    }, "[ ", s.eyebrow.toLowerCase(), " photography placeholder ]"))));
  }), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px'
    }
  }, "Ready to partner with Patterson?"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(IconArrow, {
      size: 18
    }),
    onClick: () => onNavigate('join-us')
  }, "Join us")));
}
window.WhatWeDoScreen = WhatWeDoScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/WhatWeDoScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide-style inline icons (2px rounded stroke), shared across the kit. */
function Icon({
  path,
  size = 22,
  stroke = 2,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
}
const IconArrow = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
}));
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))
}));
const IconMenu = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  }))
}));
const IconTooth = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M12 5.5C10.5 4 8.5 3.5 7 4.2 5.2 5 4.5 7 5 9.5c.3 1.5.4 2 .5 3.5.2 2 .3 4.5 1.5 6 .9 1.1 1.8.4 2.2-1 .4-1.3.5-3 1.8-3s1.4 1.7 1.8 3c.4 1.4 1.3 2.1 2.2 1 1.2-1.5 1.3-4 1.5-6 .1-1.5.2-2 .5-3.5.5-2.5-.2-4.5-2-5.3-1.5-.7-3.5-.2-5 1.3Z"
  })
}));
const IconPaw = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "10",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "6.5",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "6.5",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "10",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 15.5c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5c0 1.7-1.3 3-3 3.2-.7.1-1.3.1-2 0-1.7-.2-3-1.5-3-3.2Z"
  }))
}));
const IconTruck = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 7h-9a1 1 0 0 0-1 1v8h10V7Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11h4l3 3v2h-7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "1.6"
  }))
}));
const IconLeaf = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 4 13c0-4 3-8 8-9 1 5-1 9-5 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c3-3 6-4 9-4"
  }))
}));
const IconHeart = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M19 7.5c-1.5-2-4.5-2-6 .3C11.5 5.5 8.5 5.5 7 7.5c-1.7 2.2-.8 5 1 7l4 3.8 4-3.8c1.8-2 2.7-4.8 1-7Z"
  })
}));
const IconGlobe = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3c2.5 2.4 2.5 15.6 0 18M12 3c-2.5 2.4-2.5 15.6 0 18"
  }))
}));
const IconUsers = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 19c0-3 2.7-5 6-5s6 2 6 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 6a3 3 0 0 1 0 5.6M21 19c0-2.3-1.4-4-3.5-4.6"
  }))
}));
const IconExternal = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 5h5v5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 5l-8 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"
  }))
}));
const IconPin = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  }))
}));
Object.assign(window, {
  Icon,
  IconArrow,
  IconSearch,
  IconMenu,
  IconTooth,
  IconPaw,
  IconTruck,
  IconLeaf,
  IconHeart,
  IconGlobe,
  IconUsers,
  IconExternal,
  IconPin
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreFooter.jsx
try { (() => {
/* Storefront footer — multi-column link groups + HQ + legal. */
function StoreFooter({
  brand
}) {
  const cols = [{
    h: 'About Us',
    items: ['Patterson Companies', 'Patterson Foundation', 'Careers', 'Data Security', 'Contact Us']
  }, {
    h: 'Get Help',
    items: ['Locate a Branch', 'Subscribe to Newsletters', 'Request Service', 'Reset Password']
  }, {
    h: 'Quick Links',
    items: ['Open an Account', 'Track an Order', 'Search SDS', 'Start a Return', 'FAQs']
  }, {
    h: 'Services',
    items: ['Repair and Support', 'Office Design', 'Financial Services', 'Practice Transitions']
  }];
  const link = {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 'var(--fs-sm)',
    display: 'block',
    padding: '4px 0'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr) 1.1fr',
      gap: 'var(--space-6)'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)',
      marginBottom: 10
    }
  }, c.h), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: link,
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'
  }, it)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)',
      marginBottom: 10
    }
  }, "Connect"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "Headquarters"), /*#__PURE__*/React.createElement("br", null), "1031 Mendota Heights Rd", /*#__PURE__*/React.createElement("br", null), "Saint Paul, MN 55120"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/patterson-logo-white.svg",
    alt: "Patterson",
    style: {
      height: 24,
      width: 'auto',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      paddingTop: 18,
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 18px'
    }
  }, ['Terms of Use', 'Privacy Policy', 'Sunshine Act', 'Returns', 'Payment Options'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 'var(--fs-xs)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.6)'
    }
  }, brand.legal))));
}
window.StoreFooter = StoreFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreHeader.jsx
try { (() => {
/* Patterson storefront header: navy utility bar + white main bar
   (logo, Algolia-style search, account, cart) + category nav with flyout. */
function StoreHeader({
  brand,
  cartCount,
  onAddDemo
}) {
  const DS = window.PattersonCompaniesDesignSystem_1f7cbe;
  const {
    Button
  } = DS;
  const {
    SSearch,
    SUser,
    SCart,
    SChevron,
    SPhone
  } = window;
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)'
    },
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 38
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--fs-sm)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, /*#__PURE__*/React.createElement(SPhone, {
    size: 15,
    stroke: 2.2
  }), " ", brand.phone), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22
    }
  }, brand.utility.map(u => /*#__PURE__*/React.createElement("a", {
    key: u,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.85)',
      fontSize: 'var(--fs-sm)',
      fontWeight: 500
    },
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
  }, u))))), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 84
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/patterson-logo-navy.svg",
    alt: "Patterson",
    style: {
      height: 28,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--pat-sky)',
      borderLeft: '1px solid var(--border-default)',
      paddingLeft: 12
    }
  }, brand.sub)), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(SSearch, {
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: `Search ${brand.sub.toLowerCase()} products, brands and supplies`,
    style: {
      width: '100%',
      height: 46,
      padding: '0 16px 0 46px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: 'var(--surface-subtle)',
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--pat-sky)';
      e.target.style.background = '#fff';
      e.target.style.boxShadow = 'var(--ring-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-default)';
      e.target.style.background = 'var(--surface-subtle)';
      e.target.style.boxShadow = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--pat-navy)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement(SUser, {
    size: 22
  }), /*#__PURE__*/React.createElement("span", null, "Sign In", /*#__PURE__*/React.createElement("br", null), "or Register")), /*#__PURE__*/React.createElement("button", {
    onClick: onAddDemo,
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--pat-navy)',
      fontWeight: 600,
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(SCart, {
    size: 24
  }), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      right: -10,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--pat-sky)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), /*#__PURE__*/React.createElement("span", null, "Cart")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Open an Account"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      gap: 4,
      height: 48,
      alignItems: 'stretch'
    }
  }, brand.nav.map(n => {
    const active = open === n;
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      onMouseEnter: () => setOpen(n),
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: '100%',
        padding: '0 16px',
        fontSize: 'var(--fs-body)',
        fontWeight: 600,
        color: active ? 'var(--pat-navy)' : 'var(--text-body)',
        borderBottom: `3px solid ${active ? 'var(--pat-sky)' : 'transparent'}`
      }
    }, n, /*#__PURE__*/React.createElement(SChevron, {
      size: 15,
      stroke: 2.4
    })));
  })), open && brand.flyout[open] && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      background: '#fff',
      boxShadow: 'var(--shadow-lg)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px 32px'
    }
  }, brand.flyout[open].map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--fs-body)',
      color: 'var(--text-body)',
      padding: '6px 0'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--pat-sky)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-body)'
  }, item)))))));
}
window.StoreHeader = StoreHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/StoreHome.jsx
try { (() => {
/* Storefront homepage body — hero, quick links, support, products,
   manufacturers, Advantage Rewards, testimonial, account CTA. */
function StoreHome({
  brand,
  onAdd
}) {
  const DS = window.PattersonCompaniesDesignSystem_1f7cbe;
  const {
    Button,
    Card,
    Badge
  } = DS;
  const {
    SArrow,
    SBox,
    SHeadset,
    SAward,
    STag,
    SSparkle
  } = window;
  const quickIcons = [SBox, SSparkle, SSparkle, SBox, SHeadset, SAward];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 130% at 88% 0%, rgba(0,168,225,0.4), transparent 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-8)',
      alignItems: 'center',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow",
    style: {
      color: 'var(--pat-sky)'
    }
  }, brand.heroEyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'var(--fs-h1)',
      margin: '12px 0 14px',
      maxWidth: '16ch'
    }
  }, brand.heroTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'rgba(255,255,255,0.84)',
      maxWidth: 520
    }
  }, brand.heroBody), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "sky",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Shop now"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg"
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(150deg, var(--pat-blue), var(--pat-sky))',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "[ ", brand.sub.toLowerCase(), " hero photography placeholder ]")))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 640,
      marginInline: 'auto',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "Here to support your success"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0'
    }
  }, "Where do you want to start?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, brand.quickLinks.map((q, i) => {
    const I = quickIcons[i % quickIcons.length];
    return /*#__PURE__*/React.createElement(Card, {
      key: q,
      interactive: true,
      onClick: onAdd,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        flex: 'none',
        borderRadius: 'var(--radius-md)',
        background: 'var(--pat-sky-10)',
        color: 'var(--pat-sky)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 24
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--text-heading)',
        fontSize: 'var(--fs-body)'
      }
    }, q), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        color: 'var(--pat-sky)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-sky)',
      color: 'var(--pat-navy)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(0,55,103,0.12)',
      color: 'var(--pat-navy)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(SHeadset, {
    size: 30
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 2px',
      color: 'var(--pat-navy)'
    }
  }, "Need service or equipment repair?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--pat-navy)',
      opacity: 0.85,
      maxWidth: 620
    }
  }, "Installation, training, repair or preventive maintenance \u2014 our highly-skilled techs are ready to help in person, over the phone or online."))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Learn about support"))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pat-eyebrow"
  }, "Products"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0'
    }
  }, "New & featured products")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 16
    })
  }, "Shop all products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, brand.products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--surface-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.tone,
    solid: true
  }, p.tag)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      color: 'var(--text-muted)'
    }
  }, "[ product image ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-h5)',
      lineHeight: 1.3
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      flex: 1
    }
  }, p.note), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    fullWidth: true,
    onClick: onAdd,
    style: {
      marginTop: 6
    }
  }, "Add to cart")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-5)',
      textAlign: 'center'
    }
  }, "Shop featured manufacturers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-4)'
    }
  }, brand.manufacturers.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m,
    interactive: true,
    style: {
      height: 96,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 'var(--fs-h4)',
      color: 'var(--pat-navy)',
      letterSpacing: '-0.01em'
    }
  }, m)))))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sky",
    solid: true
  }, "Advantage Rewards")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px'
    }
  }, "Get rewarded for what you already buy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body)'
    }
  }, "As a valued customer, you earn Advantage Dollars on everyday purchases \u2014 and apply them to equipment, software, support and more."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Enroll to start saving"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-4)'
    }
  }, [{
    t: 'Savings',
    icon: STag,
    items: ['Technical support savings', 'Exclusive promotions', 'Service discounts']
  }, {
    t: 'Rewards',
    icon: SAward,
    items: ['Earn Advantage Dollars', 'Apply to equipment', 'Apply to software & support']
  }, {
    t: 'Service',
    icon: SHeadset,
    items: ['Priority scheduling', 'Member-only support line', 'Superior response time']
  }].map(col => {
    const I = col.icon;
    return /*#__PURE__*/React.createElement(Card, {
      key: col.t,
      accent: "sky",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--pat-sky)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 26
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: 'var(--text-heading)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-wide)',
        fontSize: 'var(--fs-xs)'
      }
    }, col.t), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 7
      }
    }, col.items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it,
      style: {
        fontSize: 'var(--fs-sm)',
        color: 'var(--text-body)',
        display: 'flex',
        gap: 7,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--pat-sky)',
        marginTop: 7,
        flex: 'none'
      }
    }), it))));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pat-navy)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      textAlign: 'center',
      maxWidth: 860,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: '#fff',
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: 'var(--ls-snug)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-sky)'
    }
  }, "\u201C"), brand.testimonial.quote, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pat-sky)'
    }
  }, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, brand.testimonial.who), " \xB7 ", brand.testimonial.where))), /*#__PURE__*/React.createElement("section", {
    className: "pat-container",
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)',
      alignItems: 'center',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 10px'
    }
  }, "Create an online account for ease and convenience"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Shop thousands of products', 'Get exclusive online promotions and pricing', 'Create your own personalized dashboard', 'Access your account from anywhere'].map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--pat-sky)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(SArrow, {
      size: 18
    })
  }, "Create my account"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, "Already have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontWeight: 600
    }
  }, "Sign in"))))));
}
window.StoreHome = StoreHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/StoreHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/brands.js
try { (() => {
/* Brand configurations for the shared Patterson storefront shell.
   Dental and Veterinary run on the same pattern library (v5.7.2);
   only the brand label, categories, hero and catalog differ. */
window.STOREFRONT_BRANDS = {
  dental: {
    key: 'dental',
    name: 'Patterson Dental',
    sub: 'Dental',
    phone: '1.800.873.7683',
    utility: ['Support', 'Resources', 'Blog', 'Advantage Rewards', 'Education'],
    nav: ['Merchandise', 'Equipment & Technology', 'Services', 'Software'],
    flyout: {
      'Merchandise': ['New Arrivals', 'Deals & Promotions', 'Patterson Private Brand', 'Office Supplies', 'Browse by Manufacturer', 'Custom Products & Services'],
      'Equipment & Technology': ['CAD/CAM', '3D Printers', 'Digital Scanners', 'Imaging & X-ray', 'Infection Control', 'Operatory & Chairs'],
      'Services': ['Repair & Support', 'Office Design', 'Financial Services', 'Practice Transitions', 'Multilocation Solutions'],
      'Software': ['Eaglesoft', 'Fuse', 'Dolphin', 'Patient Engagement', 'Revenue Cycle Management', 'Clinical Excellence']
    },
    heroEyebrow: '150,000+ solutions · unmatched support',
    heroTitle: 'Everything your practice needs, from toothbrushes to technology',
    heroBody: 'Find the products, equipment, technology and services your practice needs — then count on our trusted, responsive teams for unwavering support.',
    quickLinks: ['Shop Patterson Brand products', 'Modernize with equipment & technology', 'Patterson software solutions', 'Patterson resource center', 'Connect with a local rep', 'Get Advantage Rewards'],
    products: [{
      name: 'Patterson Topical Anesthetic Gel – 1 oz',
      note: 'Now available in three dye-free flavors',
      tag: 'New',
      tone: 'sky'
    }, {
      name: 'Demi Pro Dental Curing Light – Complete Kit',
      note: 'Cordless, lightweight; built for comfort and control',
      tag: 'Featured',
      tone: 'navy'
    }, {
      name: 'ZenSeal Pro Bioceramic Root Canal Sealer',
      note: 'Less waste, more applications with ZenSave™ Tip',
      tag: 'New',
      tone: 'sky'
    }],
    manufacturers: ['Solventum', 'Dentsply', 'KAVO', 'CandidPro'],
    testimonial: {
      quote: 'Investing in technologies has re-energized our staff, increased referrals and case acceptance, and streamlined our treatment planning.',
      who: 'David Juliani, DDS',
      where: 'Rochester Hills, Michigan'
    },
    legal: '© 2026 Patterson Dental Supply, Inc. All rights reserved.'
  },
  vet: {
    key: 'vet',
    name: 'Patterson Veterinary',
    sub: 'Veterinary',
    phone: '1.800.225.7911',
    utility: ['Support', 'Production Animal', 'Equine', 'Blog', 'Resources', 'Pivetal'],
    nav: ['Merchandise', 'Equipment', 'Software', 'Services'],
    flyout: {
      'Merchandise': ['New Arrivals', 'Deals & Promotions', 'Pivetal Brand', 'Pharmaceuticals', 'Browse by Manufacturer', 'Production Animal'],
      'Equipment': ['Anesthesia', 'Dental', 'Diagnostic Imaging', 'In-House Lab', 'Monitoring', 'Surgical'],
      'Software': ['NaVetor', 'Patient Engagement', 'Practice Management', 'Payments', 'Reminders'],
      'Services': ['Repair & Support', 'Equipment Service', 'Financial Services', 'Practice Solutions', 'Technology']
    },
    heroEyebrow: 'Supplies, equipment & services for every practice',
    heroTitle: 'Helping you care for animals — and run a thriving practice',
    heroBody: 'From everyday essentials and pharmaceuticals to equipment, software and production-animal solutions, we supply veterinarians with the tools and support to deliver exceptional care.',
    quickLinks: ['Shop Pivetal products', 'Equipment & technology', 'Veterinary software solutions', 'Production animal solutions', 'Connect with a rep', 'Resource center'],
    products: [{
      name: 'Pivetal Exam Gloves – Nitrile, 200 ct',
      note: 'Powder-free, textured grip for everyday procedures',
      tag: 'New',
      tone: 'teal'
    }, {
      name: 'NaVetor Cloud Practice Software',
      note: 'Run your whole practice from anywhere',
      tag: 'Featured',
      tone: 'navy'
    }, {
      name: 'Pivetal Vet Wrap – Assorted Colors',
      note: 'Cohesive bandage, strong and breathable',
      tag: 'New',
      tone: 'teal'
    }],
    manufacturers: ['Zoetis', 'Boehringer Ingelheim', 'Merck', 'IDEXX'],
    testimonial: {
      quote: 'Patterson is more than a supplier — their team understands our practice and helps us deliver better care every day.',
      who: 'Dr. Marcus Lane, DVM',
      where: 'Bend, Oregon'
    },
    legal: '© 2026 Patterson Veterinary Supply, Inc. All rights reserved.'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/brands.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Storefront icons — Lucide-style, 2px rounded stroke. */
function SIcon({
  path,
  size = 22,
  stroke = 2,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
}
const SSearch = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))
}));
const SUser = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-4 3.5-6 8-6s8 2 8 6"
  }))
}));
const SCart = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "20",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3h3l2.4 12.4a1.6 1.6 0 0 0 1.6 1.3h8.2a1.6 1.6 0 0 0 1.6-1.3L22 7H6"
  }))
}));
const SChevron = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })
}));
const SArrow = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
}));
const SMenu = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  })
}));
const SPhone = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4a2 2 0 0 1-2 1.4A14 14 0 0 1 4.6 6 2 2 0 0 1 5 4Z"
  })
}));
const STag = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 11V5a2 2 0 0 1 2-2h6l9 9-8 8-9-9Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "1.4"
  }))
}));
const SAward = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 14.5 7 22l5-3 5 3-2-7.5"
  }))
}));
const SHeadset = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 13v-1a8 8 0 0 1 16 0v1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "13",
    width: "4",
    height: "6",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "17.5",
    y: "13",
    width: "4",
    height: "6",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19a4 4 0 0 1-4 3h-2"
  }))
}));
const SBox = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 7.5 8 4.5 8-4.5M12 12v9"
  }))
}));
const SSparkle = p => /*#__PURE__*/React.createElement(SIcon, _extends({}, p, {
  path: /*#__PURE__*/React.createElement("path", {
    d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
  })
}));
Object.assign(window, {
  SIcon,
  SSearch,
  SUser,
  SCart,
  SChevron,
  SArrow,
  SMenu,
  SPhone,
  STag,
  SAward,
  SHeadset,
  SBox,
  SSparkle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/icons.jsx", error: String((e && e.message) || e) }); }

// uploads/theme-scripts.min.js
try { (() => {
var Sc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ec(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var zo = {
  exports: {}
}; /*! UIkit 3.16.26 | https://www.getuikit.com | (c) 2014 - 2023 YOOtheme | MIT License */
(function (n, r) {
  (function (a, h) {
    n.exports = h();
  })(Sc, function () {
    const {
      hasOwnProperty: a,
      toString: h
    } = Object.prototype;
    function u(t, e) {
      return a.call(t, e);
    }
    const d = /\B([A-Z])/g,
      m = wt(t => t.replace(d, "-$1").toLowerCase()),
      $ = /-(\w)/g,
      k = wt(t => (t.charAt(0).toLowerCase() + t.slice(1)).replace($, (e, i) => i.toUpperCase())),
      x = wt(t => t.charAt(0).toUpperCase() + t.slice(1));
    function w(t, e) {
      var i;
      return (i = t == null ? void 0 : t.startsWith) == null ? void 0 : i.call(t, e);
    }
    function C(t, e) {
      var i;
      return (i = t == null ? void 0 : t.endsWith) == null ? void 0 : i.call(t, e);
    }
    function y(t, e) {
      var i;
      return (i = t == null ? void 0 : t.includes) == null ? void 0 : i.call(t, e);
    }
    function J(t, e) {
      var i;
      return (i = t == null ? void 0 : t.findIndex) == null ? void 0 : i.call(t, e);
    }
    const {
        isArray: P,
        from: M
      } = Array,
      {
        assign: Y
      } = Object;
    function K(t) {
      return typeof t == "function";
    }
    function kt(t) {
      return t !== null && typeof t == "object";
    }
    function St(t) {
      return h.call(t) === "[object Object]";
    }
    function Q(t) {
      return kt(t) && t === t.window;
    }
    function Tt(t) {
      return oe(t) === 9;
    }
    function Yt(t) {
      return oe(t) >= 1;
    }
    function Ft(t) {
      return oe(t) === 1;
    }
    function oe(t) {
      return !Q(t) && kt(t) && t.nodeType;
    }
    function re(t) {
      return typeof t == "boolean";
    }
    function N(t) {
      return typeof t == "string";
    }
    function zi(t) {
      return typeof t == "number";
    }
    function Xt(t) {
      return zi(t) || N(t) && !isNaN(t - parseFloat(t));
    }
    function Hi(t) {
      return !(P(t) ? t.length : kt(t) && Object.keys(t).length);
    }
    function dt(t) {
      return t === void 0;
    }
    function qi(t) {
      return re(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t;
    }
    function Ee(t) {
      const e = Number(t);
      return isNaN(e) ? !1 : e;
    }
    function O(t) {
      return parseFloat(t) || 0;
    }
    function F(t) {
      return _(t)[0];
    }
    function _(t) {
      return Yt(t) ? [t] : Array.from(t || []).filter(Yt);
    }
    function ae(t) {
      if (Q(t)) return t;
      t = F(t);
      const e = Tt(t) ? t : t == null ? void 0 : t.ownerDocument;
      return (e == null ? void 0 : e.defaultView) || window;
    }
    function es(t, e) {
      return t === e || kt(t) && kt(e) && Object.keys(t).length === Object.keys(e).length && le(t, (i, s) => i === e[s]);
    }
    function Fi(t, e, i) {
      return t.replace(new RegExp(`${e}|${i}`, "g"), s => s === e ? i : e);
    }
    function Ie(t) {
      return t[t.length - 1];
    }
    function le(t, e) {
      for (const i in t) if (e(t[i], i) === !1) return !1;
      return !0;
    }
    function Wi(t, e) {
      return t.slice().sort(({
        [e]: i = 0
      }, {
        [e]: s = 0
      }) => i > s ? 1 : s > i ? -1 : 0);
    }
    function Ce(t, e) {
      return t.reduce((i, s) => i + O(K(e) ? e(s) : s[e]), 0);
    }
    function hr(t, e) {
      const i = new Set();
      return t.filter(({
        [e]: s
      }) => i.has(s) ? !1 : i.add(s));
    }
    function Ri(t, e) {
      return e.reduce((i, s) => ({
        ...i,
        [s]: t[s]
      }), {});
    }
    function Dt(t, e = 0, i = 1) {
      return Math.min(Math.max(Ee(t) || 0, e), i);
    }
    function At() {}
    function ji(...t) {
      return [["bottom", "top"], ["right", "left"]].every(([e, i]) => Math.min(...t.map(({
        [e]: s
      }) => s)) - Math.max(...t.map(({
        [i]: s
      }) => s)) > 0);
    }
    function Ui(t, e) {
      return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
    }
    function Vi(t, e, i) {
      const s = e === "width" ? "height" : "width";
      return {
        [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s],
        [e]: i
      };
    }
    function is(t, e) {
      t = {
        ...t
      };
      for (const i in t) t = t[i] > e[i] ? Vi(t, i, e[i]) : t;
      return t;
    }
    function ur(t, e) {
      t = is(t, e);
      for (const i in t) t = t[i] < e[i] ? Vi(t, i, e[i]) : t;
      return t;
    }
    const Yi = {
      ratio: Vi,
      contain: is,
      cover: ur
    };
    function Wt(t, e, i = 0, s = !1) {
      e = _(e);
      const {
        length: o
      } = e;
      return o ? (t = Xt(t) ? Ee(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? o - 1 : e.indexOf(F(t)), s ? Dt(t, 0, o - 1) : (t %= o, t < 0 ? t + o : t)) : -1;
    }
    function wt(t) {
      const e = Object.create(null);
      return i => e[i] || (e[i] = t(i));
    }
    function S(t, e, i) {
      var s;
      if (kt(e)) {
        for (const o in e) S(t, o, e[o]);
        return;
      }
      if (dt(i)) return (s = F(t)) == null ? void 0 : s.getAttribute(e);
      for (const o of _(t)) K(i) && (i = i.call(o, S(o, e))), i === null ? _e(o, e) : o.setAttribute(e, i);
    }
    function Lt(t, e) {
      return _(t).some(i => i.hasAttribute(e));
    }
    function _e(t, e) {
      _(t).forEach(i => i.removeAttribute(e));
    }
    function ce(t, e) {
      for (const i of [e, `data-${e}`]) if (Lt(t, i)) return S(t, i);
    }
    function D(t, ...e) {
      ns(t, e, "add");
    }
    function lt(t, ...e) {
      ns(t, e, "remove");
    }
    function Xi(t, e) {
      S(t, "class", i => (i || "").replace(new RegExp(`\\b${e}\\b\\s?`, "g"), ""));
    }
    function Gi(t, ...e) {
      e[0] && lt(t, e[0]), e[1] && D(t, e[1]);
    }
    function z(t, e) {
      return [e] = Ji(e), !!e && _(t).some(i => i.classList.contains(e));
    }
    function gt(t, e, i) {
      const s = Ji(e);
      dt(i) || (i = !!i);
      for (const o of _(t)) for (const l of s) o.classList.toggle(l, i);
    }
    function ns(t, e, i) {
      e = e.reduce((s, o) => s.concat(Ji(o)), []);
      for (const s of _(t)) s.classList[i](...e);
    }
    function Ji(t) {
      return String(t).split(/[ ,]/).filter(Boolean);
    }
    const fr = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    };
    function Ki(t) {
      return _(t).some(e => fr[e.tagName.toLowerCase()]);
    }
    function ct(t) {
      return _(t).some(e => e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }
    const si = "input,select,textarea,button";
    function ss(t) {
      return _(t).some(e => q(e, si));
    }
    const oi = `${si},a[href],[tabindex]`;
    function Zi(t) {
      return q(t, oi);
    }
    function X(t) {
      var e;
      return (e = F(t)) == null ? void 0 : e.parentElement;
    }
    function Te(t, e) {
      return _(t).filter(i => q(i, e));
    }
    function q(t, e) {
      return _(t).some(i => i.matches(e));
    }
    function ht(t, e) {
      return Ft(t) ? t.closest(w(e, ">") ? e.slice(1) : e) : _(t).map(i => ht(i, e)).filter(Boolean);
    }
    function j(t, e) {
      return N(e) ? !!ht(t, e) : F(e).contains(F(t));
    }
    function he(t, e) {
      const i = [];
      for (; t = X(t);) (!e || q(t, e)) && i.push(t);
      return i;
    }
    function Et(t, e) {
      t = F(t);
      const i = t ? M(t.children) : [];
      return e ? Te(i, e) : i;
    }
    function Qi(t, e) {
      return e ? _(t).indexOf(F(e)) : Et(X(t)).indexOf(t);
    }
    function ue(t) {
      return t = F(t), t && ["origin", "pathname", "search"].every(e => t[e] === location[e]);
    }
    function tn(t) {
      if (ue(t)) {
        t = F(t);
        const e = decodeURIComponent(t.hash).substring(1);
        return document.getElementById(e) || document.getElementsByName(e)[0];
      }
    }
    function It(t, e) {
      return en(t, rs(t, e));
    }
    function Ae(t, e) {
      return Pe(t, rs(t, e));
    }
    function en(t, e) {
      return F(as(t, F(e), "querySelector"));
    }
    function Pe(t, e) {
      return _(as(t, F(e), "querySelectorAll"));
    }
    const dr = /(^|[^\\],)\s*[!>+~-]/,
      os = wt(t => t.match(dr));
    function rs(t, e = document) {
      return N(t) && os(t) || Tt(e) ? e : e.ownerDocument;
    }
    const pr = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
      gr = wt(t => t.replace(pr, "$1 *"));
    function as(t, e = document, i) {
      if (!t || !N(t)) return t;
      if (t = gr(t), os(t)) {
        const s = vr(t);
        t = "";
        for (let o of s) {
          let l = e;
          if (o[0] === "!") {
            const c = o.substr(1).trim().split(" ");
            if (l = ht(X(e), c[0]), o = c.slice(1).join(" ").trim(), !o.length && s.length === 1) return l;
          }
          if (o[0] === "-") {
            const c = o.substr(1).trim().split(" "),
              f = (l || e).previousElementSibling;
            l = q(f, o.substr(1)) ? f : null, o = c.slice(1).join(" ");
          }
          l && (t += `${t ? "," : ""}${wr(l)} ${o}`);
        }
        e = document;
      }
      try {
        return e[i](t);
      } catch {
        return null;
      }
    }
    const mr = /.*?[^\\](?:,|$)/g,
      vr = wt(t => t.match(mr).map(e => e.replace(/,$/, "").trim()));
    function wr(t) {
      const e = [];
      for (; t.parentNode;) {
        const i = S(t, "id");
        if (i) {
          e.unshift(`#${nn(i)}`);
          break;
        } else {
          let {
            tagName: s
          } = t;
          s !== "HTML" && (s += `:nth-child(${Qi(t) + 1})`), e.unshift(s), t = t.parentNode;
        }
      }
      return e.join(" > ");
    }
    function nn(t) {
      return N(t) ? CSS.escape(t) : "";
    }
    function W(...t) {
      let [e, i, s, o, l = !1] = on(t);
      o.length > 1 && (o = yr(o)), l != null && l.self && (o = xr(o)), s && (o = br(s, o));
      for (const c of i) for (const f of e) f.addEventListener(c, o, l);
      return () => sn(e, i, o, l);
    }
    function sn(...t) {
      let [e, i,, s, o = !1] = on(t);
      for (const l of i) for (const c of e) c.removeEventListener(l, s, o);
    }
    function tt(...t) {
      const [e, i, s, o, l = !1, c] = on(t),
        f = W(e, i, s, p => {
          const v = !c || c(p);
          v && (f(), o(p, v));
        }, l);
      return f;
    }
    function H(t, e, i) {
      return rn(t).every(s => s.dispatchEvent(ri(e, !0, !0, i)));
    }
    function ri(t, e = !0, i = !1, s) {
      return N(t) && (t = new CustomEvent(t, {
        bubbles: e,
        cancelable: i,
        detail: s
      })), t;
    }
    function on(t) {
      return t[0] = rn(t[0]), N(t[1]) && (t[1] = t[1].split(" ")), K(t[2]) && t.splice(2, 0, !1), t;
    }
    function br(t, e) {
      return i => {
        const s = t[0] === ">" ? Pe(t, i.currentTarget).reverse().filter(o => j(i.target, o))[0] : ht(i.target, t);
        s && (i.current = s, e.call(this, i), delete i.current);
      };
    }
    function yr(t) {
      return e => P(e.detail) ? t(e, ...e.detail) : t(e);
    }
    function xr(t) {
      return function (e) {
        if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e);
      };
    }
    function ls(t) {
      return t && "addEventListener" in t;
    }
    function $r(t) {
      return ls(t) ? t : F(t);
    }
    function rn(t) {
      return P(t) ? t.map($r).filter(Boolean) : N(t) ? Pe(t) : ls(t) ? [t] : _(t);
    }
    function fe(t) {
      return t.pointerType === "touch" || !!t.touches;
    }
    function ai(t) {
      var e, i;
      const {
        clientX: s,
        clientY: o
      } = ((e = t.touches) == null ? void 0 : e[0]) || ((i = t.changedTouches) == null ? void 0 : i[0]) || t;
      return {
        x: s,
        y: o
      };
    }
    const kr = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0
    };
    function g(t, e, i, s) {
      const o = _(t);
      for (const l of o) if (N(e)) {
        if (e = an(e), dt(i)) return getComputedStyle(l).getPropertyValue(e);
        l.style.setProperty(e, Xt(i) && !kr[e] ? `${i}px` : i || zi(i) ? i : "", s);
      } else if (P(e)) {
        const c = {};
        for (const f of e) c[f] = g(l, f);
        return c;
      } else kt(e) && (s = i, le(e, (c, f) => g(l, f, c, s)));
      return o[0];
    }
    const an = wt(t => Sr(t));
    function Sr(t) {
      if (w(t, "--")) return t;
      t = m(t);
      const {
        style: e
      } = document.documentElement;
      if (t in e) return t;
      for (const i of ["webkit", "moz"]) {
        const s = `-${i}-${t}`;
        if (s in e) return s;
      }
    }
    function Er(t, e, i = 400, s = "linear") {
      return i = Math.round(i), Promise.all(_(t).map(o => new Promise((l, c) => {
        for (const p in e) {
          const v = g(o, p);
          v === "" && g(o, p, v);
        }
        const f = setTimeout(() => H(o, "transitionend"), i);
        tt(o, "transitionend transitioncanceled", ({
          type: p
        }) => {
          clearTimeout(f), lt(o, "uk-transition"), g(o, {
            transitionProperty: "",
            transitionDuration: "",
            transitionTimingFunction: ""
          }), p === "transitioncanceled" ? c() : l(o);
        }, {
          self: !0
        }), D(o, "uk-transition"), g(o, {
          transitionProperty: Object.keys(e).map(an).join(","),
          transitionDuration: `${i}ms`,
          transitionTimingFunction: s,
          ...e
        });
      })));
    }
    const bt = {
        start: Er,
        async stop(t) {
          H(t, "transitionend"), await Promise.resolve();
        },
        async cancel(t) {
          H(t, "transitioncanceled"), await Promise.resolve();
        },
        inProgress(t) {
          return z(t, "uk-transition");
        }
      },
      Oe = "uk-animation-";
    function cs(t, e, i = 200, s, o) {
      return Promise.all(_(t).map(l => new Promise((c, f) => {
        H(l, "animationcanceled");
        const p = setTimeout(() => H(l, "animationend"), i);
        tt(l, "animationend animationcanceled", ({
          type: v
        }) => {
          clearTimeout(p), v === "animationcanceled" ? f() : c(l), g(l, "animationDuration", ""), Xi(l, `${Oe}\\S*`);
        }, {
          self: !0
        }), g(l, "animationDuration", `${i}ms`), D(l, e, Oe + (o ? "leave" : "enter")), w(e, Oe) && (s && D(l, `uk-transform-origin-${s}`), o && D(l, `${Oe}reverse`));
      })));
    }
    const Ir = new RegExp(`${Oe}(enter|leave)`),
      Ct = {
        in: cs,
        out(t, e, i, s) {
          return cs(t, e, i, s, !0);
        },
        inProgress(t) {
          return Ir.test(S(t, "class"));
        },
        cancel(t) {
          H(t, "animationcanceled");
        }
      };
    function Cr(t) {
      if (document.readyState !== "loading") {
        t();
        return;
      }
      tt(document, "DOMContentLoaded", t);
    }
    function ut(t, ...e) {
      return e.some(i => {
        var s;
        return ((s = t == null ? void 0 : t.tagName) == null ? void 0 : s.toLowerCase()) === i.toLowerCase();
      });
    }
    function hs(t) {
      return t = T(t), t.innerHTML = "", t;
    }
    function li(t, e) {
      return dt(e) ? T(t).innerHTML : _t(hs(t), e);
    }
    const _r = hi("prepend"),
      _t = hi("append"),
      ln = hi("before"),
      ci = hi("after");
    function hi(t) {
      return function (e, i) {
        var s;
        const o = _(N(i) ? de(i) : i);
        return (s = T(e)) == null || s[t](...o), us(o);
      };
    }
    function Gt(t) {
      _(t).forEach(e => e.remove());
    }
    function ui(t, e) {
      for (e = F(ln(t, e)); e.firstChild;) e = e.firstChild;
      return _t(e, t), e;
    }
    function cn(t, e) {
      return _(_(t).map(i => i.hasChildNodes() ? ui(M(i.childNodes), e) : _t(i, e)));
    }
    function Be(t) {
      _(t).map(X).filter((e, i, s) => s.indexOf(e) === i).forEach(e => e.replaceWith(...e.childNodes));
    }
    const Tr = /^\s*<(\w+|!)[^>]*>/,
      Ar = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    function de(t) {
      const e = Ar.exec(t);
      if (e) return document.createElement(e[1]);
      const i = document.createElement("div");
      return Tr.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, us(i.childNodes);
    }
    function us(t) {
      return t.length > 1 ? t : t[0];
    }
    function Rt(t, e) {
      if (Ft(t)) for (e(t), t = t.firstElementChild; t;) {
        const i = t.nextElementSibling;
        Rt(t, e), t = i;
      }
    }
    function T(t, e) {
      return fs(t) ? F(de(t)) : en(t, e);
    }
    function nt(t, e) {
      return fs(t) ? _(de(t)) : Pe(t, e);
    }
    function fs(t) {
      return N(t) && w(t.trim(), "<");
    }
    const Jt = {
      width: ["left", "right"],
      height: ["top", "bottom"]
    };
    function mt(t) {
      const e = Ft(t) ? F(t).getBoundingClientRect() : {
        height: Pt(t),
        width: Me(t),
        top: 0,
        left: 0
      };
      return {
        height: e.height,
        width: e.width,
        top: e.top,
        left: e.left,
        bottom: e.top + e.height,
        right: e.left + e.width
      };
    }
    function L(t, e) {
      e && g(t, {
        left: 0,
        top: 0
      });
      const i = mt(t);
      if (t) {
        const {
            scrollY: s,
            scrollX: o
          } = ae(t),
          l = {
            height: s,
            width: o
          };
        for (const c in Jt) for (const f of Jt[c]) i[f] += l[c];
      }
      if (!e) return i;
      for (const s of ["left", "top"]) g(t, s, e[s] - i[s]);
    }
    function Pr(t) {
      let {
        top: e,
        left: i
      } = L(t);
      const {
        ownerDocument: {
          body: s,
          documentElement: o
        },
        offsetParent: l
      } = F(t);
      let c = l || o;
      for (; c && (c === s || c === o) && g(c, "position") === "static";) c = c.parentNode;
      if (Ft(c)) {
        const f = L(c);
        e -= f.top + O(g(c, "borderTopWidth")), i -= f.left + O(g(c, "borderLeftWidth"));
      }
      return {
        top: e - O(g(t, "marginTop")),
        left: i - O(g(t, "marginLeft"))
      };
    }
    function Kt(t) {
      t = F(t);
      const e = [t.offsetTop, t.offsetLeft];
      for (; t = t.offsetParent;) if (e[0] += t.offsetTop + O(g(t, "borderTopWidth")), e[1] += t.offsetLeft + O(g(t, "borderLeftWidth")), g(t, "position") === "fixed") {
        const i = ae(t);
        return e[0] += i.scrollY, e[1] += i.scrollX, e;
      }
      return e;
    }
    const Pt = ds("height"),
      Me = ds("width");
    function ds(t) {
      const e = x(t);
      return (i, s) => {
        if (dt(s)) {
          if (Q(i)) return i[`inner${e}`];
          if (Tt(i)) {
            const o = i.documentElement;
            return Math.max(o[`offset${e}`], o[`scroll${e}`]);
          }
          return i = F(i), s = g(i, t), s = s === "auto" ? i[`offset${e}`] : O(s) || 0, s - Ne(i, t);
        } else return g(i, t, !s && s !== 0 ? "" : +s + Ne(i, t) + "px");
      };
    }
    function Ne(t, e, i = "border-box") {
      return g(t, "boxSizing") === i ? Ce(Jt[e].map(x), s => O(g(t, `padding${s}`)) + O(g(t, `border${s}Width`))) : 0;
    }
    function ps(t) {
      for (const e in Jt) for (const i in Jt[e]) if (Jt[e][i] === t) return Jt[e][1 - i];
      return t;
    }
    function zt(t, e = "width", i = window, s = !1) {
      return N(t) ? Ce(Br(t), o => {
        const l = Nr(o);
        return l ? Dr(l === "vh" ? Lr() : l === "vw" ? Me(ae(i)) : s ? i[`offset${x(e)}`] : mt(i)[e], o) : o;
      }) : O(t);
    }
    const Or = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
      Br = wt(t => t.toString().replace(/\s/g, "").match(Or) || []),
      Mr = /(?:v[hw]|%)$/,
      Nr = wt(t => (t.match(Mr) || [])[0]);
    function Dr(t, e) {
      return t * O(e) / 100;
    }
    let De, pe;
    function Lr() {
      return De || (pe || (pe = T("<div>"), g(pe, {
        height: "100vh",
        position: "fixed"
      }), W(window, "resize", () => De = null)), _t(document.body, pe), De = pe.clientHeight, Gt(pe), De);
    }
    const Zt = typeof window < "u",
      Le = Zt && document.dir === "rtl",
      ge = Zt && "ontouchstart" in window,
      me = Zt && window.PointerEvent,
      ve = me ? "pointerdown" : ge ? "touchstart" : "mousedown",
      zr = me ? "pointermove" : ge ? "touchmove" : "mousemove",
      we = me ? "pointerup" : ge ? "touchend" : "mouseup",
      fi = me ? "pointerenter" : ge ? "" : "mouseenter",
      hn = me ? "pointerleave" : ge ? "" : "mouseleave",
      di = me ? "pointercancel" : "touchcancel",
      Ot = {
        reads: [],
        writes: [],
        read(t) {
          return this.reads.push(t), fn(), t;
        },
        write(t) {
          return this.writes.push(t), fn(), t;
        },
        clear(t) {
          ms(this.reads, t), ms(this.writes, t);
        },
        flush: un
      };
    function un(t) {
      gs(Ot.reads), gs(Ot.writes.splice(0)), Ot.scheduled = !1, (Ot.reads.length || Ot.writes.length) && fn(t + 1);
    }
    const Hr = 4;
    function fn(t) {
      Ot.scheduled || (Ot.scheduled = !0, t && t < Hr ? Promise.resolve().then(() => un(t)) : requestAnimationFrame(() => un(1)));
    }
    function gs(t) {
      let e;
      for (; e = t.shift();) try {
        e();
      } catch (i) {
        console.error(i);
      }
    }
    function ms(t, e) {
      const i = t.indexOf(e);
      return ~i && t.splice(i, 1);
    }
    function dn() {}
    dn.prototype = {
      positions: [],
      init() {
        this.positions = [];
        let t;
        this.unbind = W(document, "mousemove", e => t = ai(e)), this.interval = setInterval(() => {
          t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift());
        }, 50);
      },
      cancel() {
        var t;
        (t = this.unbind) == null || t.call(this), clearInterval(this.interval);
      },
      movesTo(t) {
        if (this.positions.length < 2) return !1;
        const e = t.getBoundingClientRect(),
          {
            left: i,
            right: s,
            top: o,
            bottom: l
          } = e,
          [c] = this.positions,
          f = Ie(this.positions),
          p = [c, f];
        return Ui(f, e) ? !1 : [[{
          x: i,
          y: o
        }, {
          x: s,
          y: l
        }], [{
          x: i,
          y: l
        }, {
          x: s,
          y: o
        }]].some(b => {
          const E = qr(p, b);
          return E && Ui(E, e);
        });
      }
    };
    function qr([{
      x: t,
      y: e
    }, {
      x: i,
      y: s
    }], [{
      x: o,
      y: l
    }, {
      x: c,
      y: f
    }]) {
      const p = (f - l) * (i - t) - (c - o) * (s - e);
      if (p === 0) return !1;
      const v = ((c - o) * (e - l) - (f - l) * (t - o)) / p;
      return v < 0 ? !1 : {
        x: t + v * (i - t),
        y: e + v * (s - e)
      };
    }
    function vs(t, e, i = {}, {
      intersecting: s = !0
    } = {}) {
      const o = new IntersectionObserver(s ? (l, c) => {
        l.some(f => f.isIntersecting) && e(l, c);
      } : e, i);
      for (const l of _(t)) o.observe(l);
      return o;
    }
    const Fr = Zt && window.ResizeObserver;
    function pi(t, e, i = {
      box: "border-box"
    }) {
      if (Fr) return bs(ResizeObserver, t, e, i);
      const s = [W(window, "load resize", e), W(document, "loadedmetadata load", e, !0)];
      return {
        disconnect: () => s.map(o => o())
      };
    }
    function pn(t) {
      return {
        disconnect: W([window, window.visualViewport], "resize", t)
      };
    }
    function ws(t, e, i) {
      return bs(MutationObserver, t, e, i);
    }
    function bs(t, e, i, s) {
      const o = new t(i);
      for (const l of _(e)) o.observe(l, s);
      return o;
    }
    function ys(t) {
      if (mi(t) && gn(t, {
        func: "playVideo",
        method: "play"
      }), gi(t)) try {
        t.play().catch(At);
      } catch {}
    }
    function xs(t) {
      mi(t) && gn(t, {
        func: "pauseVideo",
        method: "pause"
      }), gi(t) && t.pause();
    }
    function $s(t) {
      mi(t) && gn(t, {
        func: "mute",
        method: "setVolume",
        value: 0
      }), gi(t) && (t.muted = !0);
    }
    function ks(t) {
      return gi(t) || mi(t);
    }
    function gi(t) {
      return ut(t, "video");
    }
    function mi(t) {
      return ut(t, "iframe") && (Ss(t) || Es(t));
    }
    function Ss(t) {
      return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }
    function Es(t) {
      return !!t.src.match(/vimeo\.com\/video\/.*/);
    }
    async function gn(t, e) {
      await Rr(t), Is(t, e);
    }
    function Is(t, e) {
      try {
        t.contentWindow.postMessage(JSON.stringify({
          event: "command",
          ...e
        }), "*");
      } catch {}
    }
    const mn = "_ukPlayer";
    let Wr = 0;
    function Rr(t) {
      if (t[mn]) return t[mn];
      const e = Ss(t),
        i = Es(t),
        s = ++Wr;
      let o;
      return t[mn] = new Promise(l => {
        e && tt(t, "load", () => {
          const c = () => Is(t, {
            event: "listening",
            id: s
          });
          o = setInterval(c, 100), c();
        }), tt(window, "message", l, !1, ({
          data: c
        }) => {
          try {
            return c = JSON.parse(c), e && (c == null ? void 0 : c.id) === s && c.event === "onReady" || i && Number(c == null ? void 0 : c.player_id) === s;
          } catch {}
        }), t.src = `${t.src}${y(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
      }).then(() => clearInterval(o));
    }
    function Cs(t, e = 0, i = 0) {
      return ct(t) ? ji(...be(t).map(s => {
        const {
          top: o,
          left: l,
          bottom: c,
          right: f
        } = yt(s);
        return {
          top: o - e,
          left: l - i,
          bottom: c + e,
          right: f + i
        };
      }).concat(L(t))) : !1;
    }
    function _s(t, {
      offset: e = 0
    } = {}) {
      const i = ct(t) ? ze(t, !1, ["hidden"]) : [];
      return i.reduce((c, f, p) => {
        const {
            scrollTop: v,
            scrollHeight: b,
            offsetHeight: E
          } = f,
          B = yt(f),
          R = b - B.height,
          {
            height: ft,
            top: et
          } = i[p - 1] ? yt(i[p - 1]) : L(t);
        let ot = Math.ceil(et - B.top - e + v);
        return e > 0 && E < ft + e ? ot += e : e = 0, ot > R ? (e -= ot - R, ot = R) : ot < 0 && (e -= ot, ot = 0), () => s(f, ot - v).then(c);
      }, () => Promise.resolve())();
      function s(c, f) {
        return new Promise(p => {
          const v = c.scrollTop,
            b = o(Math.abs(f)),
            E = Date.now();
          (function B() {
            const R = l(Dt((Date.now() - E) / b));
            c.scrollTop = v + f * R, R === 1 ? p() : requestAnimationFrame(B);
          })();
        });
      }
      function o(c) {
        return 40 * Math.pow(c, .375);
      }
      function l(c) {
        return .5 * (1 - Math.cos(Math.PI * c));
      }
    }
    function Ts(t, e = 0, i = 0) {
      if (!ct(t)) return 0;
      const s = jt(t, !0),
        {
          scrollHeight: o,
          scrollTop: l
        } = s,
        {
          height: c
        } = yt(s),
        f = o - c,
        p = Kt(t)[0] - Kt(s)[0],
        v = Math.max(0, p - c + e),
        b = Math.min(f, p + t.offsetHeight - i);
      return Dt((l - v) / (b - v));
    }
    function ze(t, e = !1, i = []) {
      const s = As(t);
      let o = he(t).reverse();
      o = o.slice(o.indexOf(s) + 1);
      const l = J(o, c => g(c, "position") === "fixed");
      return ~l && (o = o.slice(l)), [s].concat(o.filter(c => g(c, "overflow").split(" ").some(f => y(["auto", "scroll", ...i], f)) && (!e || c.scrollHeight > yt(c).height))).reverse();
    }
    function jt(...t) {
      return ze(...t)[0];
    }
    function be(t) {
      return ze(t, !1, ["hidden", "clip"]);
    }
    function yt(t) {
      const e = ae(t),
        {
          visualViewport: i,
          document: {
            documentElement: s
          }
        } = e;
      let o = t === As(t) ? e : t;
      if (Q(o) && i) {
        let {
          height: c,
          width: f,
          scale: p,
          pageTop: v,
          pageLeft: b
        } = i;
        return c = Math.round(c * p), f = Math.round(f * p), {
          height: c,
          width: f,
          top: v,
          left: b,
          bottom: v + c,
          right: b + f
        };
      }
      let l = L(o);
      if (g(o, "display") === "inline") return l;
      for (let [c, f, p, v] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
        Q(o) ? o = s : l[p] += O(g(o, `border-${p}-width`));
        const b = l[c] % 1;
        l[c] = l[f] = o[`client${x(c)}`] - (b ? b < .5 ? -b : 1 - b : 0), l[v] = l[c] + l[p];
      }
      return l;
    }
    function As(t) {
      return ae(t).document.scrollingElement;
    }
    const vt = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
    function Ps(t, e, i) {
      i = {
        attach: {
          element: ["left", "top"],
          target: ["left", "top"],
          ...i.attach
        },
        offset: [0, 0],
        placement: [],
        ...i
      }, P(e) || (e = [e, e]), L(t, Os(t, e, i));
    }
    function Os(t, e, i) {
      const s = Bs(t, e, i),
        {
          boundary: o,
          viewportOffset: l = 0,
          placement: c
        } = i;
      let f = s;
      for (const [p, [v,, b, E]] of Object.entries(vt)) {
        const B = jr(t, e[p], l, o, p);
        if (vi(s, B, p)) continue;
        let R = 0;
        if (c[p] === "flip") {
          const ft = i.attach.target[p];
          if (ft === E && s[E] <= B[E] || ft === b && s[b] >= B[b]) continue;
          R = Vr(t, e, i, p)[b] - s[b];
          const et = Ur(t, e[p], l, p);
          if (!vi(vn(s, R, p), et, p)) {
            if (vi(s, et, p)) continue;
            if (i.recursion) return !1;
            const ot = Yr(t, e, i);
            if (ot && vi(ot, et, 1 - p)) return ot;
            continue;
          }
        } else if (c[p] === "shift") {
          const ft = L(e[p]),
            {
              offset: et
            } = i;
          R = Dt(Dt(s[b], B[b], B[E] - s[v]), ft[b] - s[v] + et[p], ft[E] - et[p]) - s[b];
        }
        f = vn(f, R, p);
      }
      return f;
    }
    function Bs(t, e, i) {
      let {
          attach: s,
          offset: o
        } = {
          attach: {
            element: ["left", "top"],
            target: ["left", "top"],
            ...i.attach
          },
          offset: [0, 0],
          ...i
        },
        l = L(t);
      for (const [c, [f,, p, v]] of Object.entries(vt)) {
        const b = s.target[c] === s.element[c] ? yt(e[c]) : L(e[c]);
        l = vn(l, b[p] - l[p] + Ms(s.target[c], v, b[f]) - Ms(s.element[c], v, l[f]) + +o[c], c);
      }
      return l;
    }
    function vn(t, e, i) {
      const [, s, o, l] = vt[i],
        c = {
          ...t
        };
      return c[o] = t[s] = t[o] + e, c[l] += e, c;
    }
    function Ms(t, e, i) {
      return t === "center" ? i / 2 : t === e ? i : 0;
    }
    function jr(t, e, i, s, o) {
      let l = Ds(...Ns(t, e).map(yt));
      return i && (l[vt[o][2]] += i, l[vt[o][3]] -= i), s && (l = Ds(l, L(P(s) ? s[o] : s))), l;
    }
    function Ur(t, e, i, s) {
      const [o, l, c, f] = vt[s],
        [p] = Ns(t, e),
        v = yt(p);
      return ["auto", "scroll"].includes(g(p, `overflow-${l}`)) && (v[c] -= p[`scroll${x(c)}`], v[f] = v[c] + p[`scroll${x(o)}`]), v[c] += i, v[f] -= i, v;
    }
    function Ns(t, e) {
      return be(e).filter(i => j(t, i));
    }
    function Ds(...t) {
      let e = {};
      for (const i of t) for (const [,, s, o] of vt) e[s] = Math.max(e[s] || 0, i[s]), e[o] = Math.min(...[e[o], i[o]].filter(Boolean));
      return e;
    }
    function vi(t, e, i) {
      const [,, s, o] = vt[i];
      return t[s] >= e[s] && t[o] <= e[o];
    }
    function Vr(t, e, {
      offset: i,
      attach: s
    }, o) {
      return Bs(t, e, {
        attach: {
          element: Ls(s.element, o),
          target: Ls(s.target, o)
        },
        offset: Xr(i, o)
      });
    }
    function Yr(t, e, i) {
      return Os(t, e, {
        ...i,
        attach: {
          element: i.attach.element.map(zs).reverse(),
          target: i.attach.target.map(zs).reverse()
        },
        offset: i.offset.reverse(),
        placement: i.placement.reverse(),
        recursion: !0
      });
    }
    function Ls(t, e) {
      const i = [...t],
        s = vt[e].indexOf(t[e]);
      return ~s && (i[e] = vt[e][1 - s % 2 + 2]), i;
    }
    function zs(t) {
      for (let e = 0; e < vt.length; e++) {
        const i = vt[e].indexOf(t);
        if (~i) return vt[1 - e][i % 2 + 2];
      }
    }
    function Xr(t, e) {
      return t = [...t], t[e] *= -1, t;
    }
    var Gr = Object.freeze({
      __proto__: null,
      $: T,
      $$: nt,
      Animation: Ct,
      Dimensions: Yi,
      MouseTracker: dn,
      Transition: bt,
      addClass: D,
      after: ci,
      append: _t,
      apply: Rt,
      assign: Y,
      attr: S,
      before: ln,
      boxModelAdjust: Ne,
      camelize: k,
      children: Et,
      clamp: Dt,
      closest: ht,
      createEvent: ri,
      css: g,
      data: ce,
      dimensions: mt,
      each: le,
      empty: hs,
      endsWith: C,
      escape: nn,
      fastdom: Ot,
      filter: Te,
      find: en,
      findAll: Pe,
      findIndex: J,
      flipPosition: ps,
      fragment: de,
      getEventPos: ai,
      getIndex: Wt,
      getTargetedElement: tn,
      hasAttr: Lt,
      hasClass: z,
      hasOwn: u,
      hasTouch: ge,
      height: Pt,
      html: li,
      hyphenate: m,
      inBrowser: Zt,
      includes: y,
      index: Qi,
      intersectRect: ji,
      isArray: P,
      isBoolean: re,
      isDocument: Tt,
      isElement: Ft,
      isEmpty: Hi,
      isEqual: es,
      isFocusable: Zi,
      isFunction: K,
      isInView: Cs,
      isInput: ss,
      isNode: Yt,
      isNumber: zi,
      isNumeric: Xt,
      isObject: kt,
      isPlainObject: St,
      isRtl: Le,
      isSameSiteAnchor: ue,
      isString: N,
      isTag: ut,
      isTouch: fe,
      isUndefined: dt,
      isVideo: ks,
      isVisible: ct,
      isVoidElement: Ki,
      isWindow: Q,
      last: Ie,
      matches: q,
      memoize: wt,
      mute: $s,
      noop: At,
      observeIntersection: vs,
      observeMutation: ws,
      observeResize: pi,
      observeViewportResize: pn,
      off: sn,
      offset: L,
      offsetPosition: Kt,
      offsetViewport: yt,
      on: W,
      once: tt,
      overflowParents: be,
      parent: X,
      parents: he,
      pause: xs,
      pick: Ri,
      play: ys,
      pointInRect: Ui,
      pointerCancel: di,
      pointerDown: ve,
      pointerEnter: fi,
      pointerLeave: hn,
      pointerMove: zr,
      pointerUp: we,
      position: Pr,
      positionAt: Ps,
      prepend: _r,
      propName: an,
      query: It,
      queryAll: Ae,
      ready: Cr,
      remove: Gt,
      removeAttr: _e,
      removeClass: lt,
      removeClasses: Xi,
      replaceClass: Gi,
      scrollIntoView: _s,
      scrollParent: jt,
      scrollParents: ze,
      scrolledOver: Ts,
      selFocusable: oi,
      selInput: si,
      sortBy: Wi,
      startsWith: w,
      sumBy: Ce,
      swap: Fi,
      toArray: M,
      toBoolean: qi,
      toEventTargets: rn,
      toFloat: O,
      toNode: F,
      toNodes: _,
      toNumber: Ee,
      toPx: zt,
      toWindow: ae,
      toggleClass: gt,
      trigger: H,
      ucfirst: x,
      uniqueBy: hr,
      unwrap: Be,
      width: Me,
      within: j,
      wrapAll: ui,
      wrapInner: cn
    });
    function Jr(t) {
      t._data = {}, t._updates = [...(t.$options.update || [])];
    }
    function Kr(t, e) {
      t._updates.unshift(e);
    }
    function Zr(t) {
      delete t._data;
    }
    function wi(t, e = "update") {
      t._connected && t._updates.length && (t._queued || (t._queued = new Set(), Ot.read(() => {
        t._connected && Qr(t, t._queued), delete t._queued;
      })), t._queued.add(e.type || e));
    }
    function Qr(t, e) {
      for (const {
        read: i,
        write: s,
        events: o = []
      } of t._updates) {
        if (!e.has("update") && !o.some(c => e.has(c))) continue;
        let l;
        i && (l = i.call(t, t._data, e), l && St(l) && Y(t._data, l)), s && l !== !1 && Ot.write(() => {
          t._connected && s.call(t, t._data, e);
        });
      }
    }
    function ta(t) {
      t._watches = [];
      for (const e of t.$options.watch || []) for (const [i, s] of Object.entries(e)) Hs(t, s, i);
      t._initial = !0;
    }
    function Hs(t, e, i) {
      t._watches.push({
        name: i,
        ...(St(e) ? e : {
          handler: e
        })
      });
    }
    function ea(t, e) {
      for (const {
        name: i,
        handler: s,
        immediate: o = !0
      } of t._watches) (t._initial && o || u(e, i) && !es(e[i], t[i])) && s.call(t, t[i], e[i]);
      t._initial = !1;
    }
    function ia(t) {
      const {
        computed: e
      } = t.$options;
      if (t._computed = {}, e) for (const i in e) qs(t, i, e[i]);
    }
    function qs(t, e, i) {
      t._hasComputed = !0, Object.defineProperty(t, e, {
        enumerable: !0,
        get() {
          const {
            _computed: s,
            $props: o,
            $el: l
          } = t;
          return u(s, e) || (s[e] = (i.get || i).call(t, o, l)), s[e];
        },
        set(s) {
          const {
            _computed: o
          } = t;
          o[e] = i.set ? i.set.call(t, s) : s, dt(o[e]) && delete o[e];
        }
      });
    }
    function na(t) {
      t._hasComputed && (Kr(t, {
        read: () => ea(t, Fs(t)),
        events: ["resize", "computed"]
      }), oa(), He.add(t));
    }
    function sa(t) {
      He == null || He.delete(t), Fs(t);
    }
    function Fs(t) {
      const e = {
        ...t._computed
      };
      return t._computed = {}, e;
    }
    let wn, He;
    function oa() {
      wn || (He = new Set(), wn = new MutationObserver(() => {
        for (const t of He) wi(t, "computed");
      }), wn.observe(document, {
        childList: !0,
        subtree: !0
      }));
    }
    function ra(t) {
      t._events = [];
      for (const e of t.$options.events || []) if (u(e, "handler")) bn(t, e);else for (const i in e) bn(t, e[i], i);
    }
    function aa(t) {
      t._events.forEach(e => e()), delete t._events;
    }
    function bn(t, e, i) {
      let {
        name: s,
        el: o,
        handler: l,
        capture: c,
        passive: f,
        delegate: p,
        filter: v,
        self: b
      } = St(e) ? e : {
        name: i,
        handler: e
      };
      if (o = K(o) ? o.call(t, t) : o || t.$el, P(o)) {
        o.forEach(E => bn(t, {
          ...e,
          el: E
        }, i));
        return;
      }
      !o || v && !v.call(t) || t._events.push(W(o, s, p ? N(p) ? p : p.call(t, t) : null, N(l) ? t[l] : l.bind(t), {
        passive: f,
        capture: c,
        self: b
      }));
    }
    function la(t) {
      t._observers = [];
      for (const e of t.$options.observe || []) if (u(e, "handler")) Rs(t, e);else for (const i of e) Rs(t, i);
    }
    function Ws(t, ...e) {
      t._observers.push(...e);
    }
    function ca(t) {
      for (const e of t._observers) e.disconnect();
    }
    function Rs(t, e) {
      let {
        observe: i,
        target: s = t.$el,
        handler: o,
        options: l,
        filter: c,
        args: f
      } = e;
      if (c && !c.call(t, t)) return;
      const p = `_observe${t._observers.length}`;
      K(s) && !u(t, p) && qs(t, p, () => s.call(t, t)), o = N(o) ? t[o] : o.bind(t), K(l) && (l = l.call(t, t));
      const v = u(t, p) ? t[p] : s,
        b = i(v, o, l, f);
      K(s) && P(t[p]) && b.unobserve && Hs(t, {
        handler: ha(b),
        immediate: !1
      }, p), Ws(t, b);
    }
    function ha(t) {
      return (e, i) => {
        for (const s of i) !y(e, s) && t.unobserve(s);
        for (const s of e) !y(i, s) && t.observe(s);
      };
    }
    const Z = {};
    Z.events = Z.watch = Z.observe = Z.created = Z.beforeConnect = Z.connected = Z.beforeDisconnect = Z.disconnected = Z.destroy = yn, Z.args = function (t, e) {
      return e !== !1 && yn(e || t);
    }, Z.update = function (t, e) {
      return Wi(yn(t, K(e) ? {
        read: e
      } : e), "order");
    }, Z.props = function (t, e) {
      if (P(e)) {
        const i = {};
        for (const s of e) i[s] = String;
        e = i;
      }
      return Z.methods(t, e);
    }, Z.computed = Z.methods = function (t, e) {
      return e ? t ? {
        ...t,
        ...e
      } : e : t;
    }, Z.i18n = Z.data = function (t, e, i) {
      return i ? js(t, e, i) : e ? t ? function (s) {
        return js(t, e, s);
      } : e : t;
    };
    function js(t, e, i) {
      return Z.computed(K(t) ? t.call(i, i) : t, K(e) ? e.call(i, i) : e);
    }
    function yn(t, e) {
      return t = t && !P(t) ? [t] : t, e ? t ? t.concat(e) : P(e) ? e : [e] : t;
    }
    function ua(t, e) {
      return dt(e) ? t : e;
    }
    function qe(t, e, i) {
      const s = {};
      if (K(e) && (e = e.options), e.extends && (t = qe(t, e.extends, i)), e.mixins) for (const l of e.mixins) t = qe(t, l, i);
      for (const l in t) o(l);
      for (const l in e) u(t, l) || o(l);
      function o(l) {
        s[l] = (Z[l] || ua)(t[l], e[l], i);
      }
      return s;
    }
    function xn(t, e = []) {
      try {
        return t ? w(t, "{") ? JSON.parse(t) : e.length && !y(t, ":") ? {
          [e[0]]: t
        } : t.split(";").reduce((i, s) => {
          const [o, l] = s.split(/:(.*)/);
          return o && !dt(l) && (i[o.trim()] = l.trim()), i;
        }, {}) : {};
      } catch {
        return {};
      }
    }
    function $n(t, e) {
      return t === Boolean ? qi(e) : t === Number ? Ee(e) : t === "list" ? fa(e) : t === Object && N(e) ? xn(e) : t ? t(e) : e;
    }
    function fa(t) {
      return P(t) ? t : N(t) ? t.split(/,(?![^(]*\))/).map(e => Xt(e) ? Ee(e) : qi(e.trim())) : [t];
    }
    function da(t) {
      const e = Us(t.$options);
      for (let s in e) dt(e[s]) || (t.$props[s] = e[s]);
      const i = [t.$options.computed, t.$options.methods];
      for (let s in t.$props) s in e && pa(i, s) && (t[s] = t.$props[s]);
    }
    function Us(t) {
      const e = {},
        {
          args: i = [],
          props: s = {},
          el: o,
          id: l
        } = t;
      if (!s) return e;
      for (const f in s) {
        const p = m(f);
        let v = ce(o, p);
        dt(v) || (v = s[f] === Boolean && v === "" ? !0 : $n(s[f], v), !(p === "target" && w(v, "_")) && (e[f] = v));
      }
      const c = xn(ce(o, l), i);
      for (const f in c) {
        const p = k(f);
        dt(s[p]) || (e[p] = $n(s[p], c[f]));
      }
      return e;
    }
    function pa(t, e) {
      return t.every(i => !i || !u(i, e));
    }
    function ga(t) {
      const {
          $options: e,
          $props: i
        } = t,
        {
          id: s,
          props: o,
          el: l
        } = e;
      if (!o) return;
      const c = Object.keys(o),
        f = c.map(v => m(v)).concat(s),
        p = new MutationObserver(v => {
          const b = Us(e);
          v.some(({
            attributeName: E
          }) => {
            const B = E.replace("data-", "");
            return (B === s ? c : [k(B), k(E)]).some(R => !dt(b[R]) && b[R] !== i[R]);
          }) && t.$reset();
        });
      p.observe(l, {
        attributes: !0,
        attributeFilter: f.concat(f.map(v => `data-${v}`))
      }), Ws(t, p);
    }
    function ye(t, e) {
      var i;
      (i = t.$options[e]) == null || i.forEach(s => s.call(t));
    }
    function kn(t) {
      t._connected || (da(t), ye(t, "beforeConnect"), t._connected = !0, ra(t), Jr(t), ta(t), la(t), ga(t), na(t), ye(t, "connected"), wi(t));
    }
    function Sn(t) {
      t._connected && (ye(t, "beforeDisconnect"), aa(t), Zr(t), ca(t), sa(t), ye(t, "disconnected"), t._connected = !1);
    }
    let ma = 0;
    function Vs(t, e = {}) {
      e.data = ba(e, t.constructor.options), t.$options = qe(t.constructor.options, e, t), t.$props = {}, t._uid = ma++, va(t), wa(t), ia(t), ye(t, "created"), e.el && t.$mount(e.el);
    }
    function va(t) {
      const {
        data: e = {}
      } = t.$options;
      for (const i in e) t.$props[i] = t[i] = e[i];
    }
    function wa(t) {
      const {
        methods: e
      } = t.$options;
      if (e) for (const i in e) t[i] = e[i].bind(t);
    }
    function ba({
      data: t = {}
    }, {
      args: e = [],
      props: i = {}
    }) {
      P(t) && (t = t.slice(0, e.length).reduce((s, o, l) => (St(o) ? Y(s, o) : s[e[l]] = o, s), {}));
      for (const s in t) dt(t[s]) ? delete t[s] : i[s] && (t[s] = $n(i[s], t[s]));
      return t;
    }
    const xt = function (t) {
      Vs(this, t);
    };
    xt.util = Gr, xt.options = {}, xt.version = "3.16.26";
    const ya = "uk-",
      Qt = "__uikit__",
      xe = {};
    function Ys(t, e) {
      var i;
      const s = ya + m(t);
      if (!e) return St(xe[s]) && (xe[s] = xt.extend(xe[s])), xe[s];
      t = k(t), xt[t] = (l, c) => Fe(t, l, c);
      const o = St(e) ? {
        ...e
      } : e.options;
      return o.id = s, o.name = t, (i = o.install) == null || i.call(o, xt, o, t), xt._initialized && !o.functional && requestAnimationFrame(() => Fe(t, `[${s}],[data-${s}]`)), xe[s] = o;
    }
    function Fe(t, e, i, ...s) {
      const o = Ys(t);
      return o.options.functional ? new o({
        data: St(e) ? e : [e, i, ...s]
      }) : e ? nt(e).map(l)[0] : l();
      function l(c) {
        const f = bi(c, t);
        if (f) if (i) f.$destroy();else return f;
        return new o({
          el: c,
          data: i
        });
      }
    }
    function te(t) {
      return (t == null ? void 0 : t[Qt]) || {};
    }
    function bi(t, e) {
      return te(t)[e];
    }
    function xa(t, e) {
      t[Qt] || (t[Qt] = {}), t[Qt][e.$options.name] = e;
    }
    function $a(t, e) {
      var i;
      (i = t[Qt]) == null || delete i[e.$options.name], Hi(t[Qt]) || delete t[Qt];
    }
    function ka(t) {
      Zt && window.MutationObserver && (document.body ? requestAnimationFrame(() => Xs(t)) : new MutationObserver((e, i) => {
        document.body && (Xs(t), i.disconnect());
      }).observe(document.documentElement, {
        childList: !0
      }));
    }
    function Xs(t) {
      H(document, "uikit:init", t), document.body && Rt(document.body, Gs), new MutationObserver(e => e.forEach(Sa)).observe(document, {
        childList: !0,
        subtree: !0
      }), new MutationObserver(e => e.forEach(Ea)).observe(document, {
        attributes: !0,
        subtree: !0
      }), t._initialized = !0;
    }
    function Sa({
      addedNodes: t,
      removedNodes: e
    }) {
      for (const i of t) Rt(i, Gs);
      for (const i of e) Rt(i, Ia);
    }
    function Ea({
      target: t,
      attributeName: e
    }) {
      var i;
      const s = Js(e);
      if (s) {
        if (Lt(t, e)) {
          Fe(s, t);
          return;
        }
        (i = bi(t, s)) == null || i.$destroy();
      }
    }
    function Gs(t) {
      const e = te(t);
      for (const i in te(t)) kn(e[i]);
      for (const i of t.getAttributeNames()) {
        const s = Js(i);
        s && Fe(s, t);
      }
    }
    function Ia(t) {
      const e = te(t);
      for (const i in te(t)) Sn(e[i]);
    }
    function Js(t) {
      w(t, "data-") && (t = t.slice(5));
      const e = xe[t];
      return e && (St(e) ? e : e.options).name;
    }
    function Ca(t) {
      t.component = Ys, t.getComponents = te, t.getComponent = bi, t.update = Ks, t.use = function (i) {
        if (!i.installed) return i.call(null, this), i.installed = !0, this;
      }, t.mixin = function (i, s) {
        s = (N(s) ? this.component(s) : s) || this, s.options = qe(s.options, i);
      }, t.extend = function (i) {
        i || (i = {});
        const s = this,
          o = function (c) {
            Vs(this, c);
          };
        return o.prototype = Object.create(s.prototype), o.prototype.constructor = o, o.options = qe(s.options, i), o.super = s, o.extend = s.extend, o;
      };
      let e;
      Object.defineProperty(t, "container", {
        get() {
          return e || document.body;
        },
        set(i) {
          e = T(i);
        }
      });
    }
    function Ks(t, e) {
      t = t ? F(t) : document.body;
      for (const i of he(t).reverse()) Zs(i, e);
      Rt(t, i => Zs(i, e));
    }
    function Zs(t, e) {
      const i = te(t);
      for (const s in i) wi(i[s], e);
    }
    function _a(t) {
      t.prototype.$mount = function (e) {
        const i = this;
        xa(e, i), i.$options.el = e, j(e, document) && kn(i);
      }, t.prototype.$destroy = function (e = !1) {
        const i = this,
          {
            el: s
          } = i.$options;
        s && Sn(i), ye(i, "destroy"), $a(s, i), e && Gt(i.$el);
      }, t.prototype.$create = Fe, t.prototype.$emit = function (e) {
        wi(this, e);
      }, t.prototype.$update = function (e = this.$el, i) {
        Ks(e, i);
      }, t.prototype.$reset = function () {
        Sn(this), kn(this);
      }, t.prototype.$getComponent = bi, Object.defineProperties(t.prototype, {
        $el: {
          get() {
            return this.$options.el;
          }
        },
        $container: Object.getOwnPropertyDescriptor(t, "container")
      });
    }
    function We(t, e = t.$el, i = "") {
      if (e.id) return e.id;
      let s = `${t.$options.id}-${t._uid}${i}`;
      return T(`#${s}`) && (s = We(t, e, `${i}-2`)), s;
    }
    Ca(xt), _a(xt);
    function Ht(t) {
      return je(pi, t, "resize");
    }
    function Re(t) {
      return je(vs, t);
    }
    function Qs(t) {
      return je(ws, t);
    }
    function yi(t = {}) {
      return Re({
        handler: function (e, i) {
          const {
            targets: s = this.$el,
            preload: o = 5
          } = t;
          for (const l of _(K(s) ? s(this) : s)) nt('[loading="lazy"]', l).slice(0, o - 1).forEach(c => _e(c, "loading"));
          for (const l of e.filter(({
            isIntersecting: c
          }) => c).map(({
            target: c
          }) => c)) i.unobserve(l);
        },
        ...t
      });
    }
    function Ta() {
      return je((t, e) => pn(e));
    }
    function En(t) {
      return je((e, i) => ({
        disconnect: W(Pa(e), "scroll", i, {
          passive: !0,
          capture: !0
        })
      }), t, "scroll");
    }
    function to(t) {
      return {
        observe(e, i) {
          return {
            observe: At,
            unobserve: At,
            disconnect: W(e, ve, i, {
              passive: !0
            })
          };
        },
        handler(e) {
          if (!fe(e)) return;
          const i = ai(e),
            s = "tagName" in e.target ? e.target : X(e.target);
          tt(document, `${we} ${di} scroll`, o => {
            const {
              x: l,
              y: c
            } = ai(o);
            (o.type !== "scroll" && s && l && Math.abs(i.x - l) > 100 || c && Math.abs(i.y - c) > 100) && setTimeout(() => {
              H(s, "swipe"), H(s, `swipe${Aa(i.x, i.y, l, c)}`);
            });
          });
        },
        ...t
      };
    }
    function je(t, e, i) {
      return {
        observe: t,
        handler() {
          this.$emit(i);
        },
        ...e
      };
    }
    function Aa(t, e, i, s) {
      return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
    }
    function Pa(t) {
      return _(t).map(e => {
        const {
            ownerDocument: i
          } = e,
          s = jt(e, !0);
        return s === i.scrollingElement ? i : s;
      });
    }
    var Bt = {
        connected() {
          D(this.$el, this.$options.id);
        }
      },
      $e = {
        props: {
          cls: Boolean,
          animation: "list",
          duration: Number,
          velocity: Number,
          origin: String,
          transition: String
        },
        data: {
          cls: !1,
          animation: [!1],
          duration: 200,
          velocity: .2,
          origin: !1,
          transition: "ease",
          clsEnter: "uk-togglabe-enter",
          clsLeave: "uk-togglabe-leave"
        },
        computed: {
          hasAnimation({
            animation: t
          }) {
            return !!t[0];
          },
          hasTransition({
            animation: t
          }) {
            return ["slide", "reveal"].some(e => w(t[0], e));
          }
        },
        methods: {
          async toggleElement(t, e, i) {
            try {
              return await Promise.all(_(t).map(s => {
                const o = re(e) ? e : !this.isToggled(s);
                if (!H(s, `before${o ? "show" : "hide"}`, [this])) return Promise.reject();
                const l = (K(i) ? i : i === !1 || !this.hasAnimation ? Oa : this.hasTransition ? Ba : Ma)(s, o, this),
                  c = o ? this.clsEnter : this.clsLeave;
                D(s, c), H(s, o ? "show" : "hide", [this]);
                const f = () => {
                  lt(s, c), H(s, o ? "shown" : "hidden", [this]);
                };
                return l ? l.then(f, () => (lt(s, c), Promise.reject())) : f();
              })), !0;
            } catch {
              return !1;
            }
          },
          isToggled(t = this.$el) {
            return t = F(t), z(t, this.clsEnter) ? !0 : z(t, this.clsLeave) ? !1 : this.cls ? z(t, this.cls.split(" ")[0]) : ct(t);
          },
          _toggle(t, e) {
            if (!t) return;
            e = !!e;
            let i;
            this.cls ? (i = y(this.cls, " ") || e !== z(t, this.cls), i && gt(t, this.cls, y(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), nt("[autofocus]", t).some(s => ct(s) ? s.focus() || !0 : s.blur()), i && H(t, "toggled", [e, this]);
          }
        }
      };
    function Oa(t, e, {
      _toggle: i
    }) {
      return Ct.cancel(t), bt.cancel(t), i(t, e);
    }
    async function Ba(t, e, {
      animation: i,
      duration: s,
      velocity: o,
      transition: l,
      _toggle: c
    }) {
      var f;
      const [p = "reveal", v = "top"] = ((f = i[0]) == null ? void 0 : f.split("-")) || [],
        b = [["left", "right"], ["top", "bottom"]],
        E = b[y(b[0], v) ? 0 : 1],
        B = E[1] === v,
        ft = ["width", "height"][b.indexOf(E)],
        et = `margin-${E[0]}`,
        ot = `margin-${v}`;
      let Ve = mt(t)[ft];
      const $c = bt.inProgress(t);
      await bt.cancel(t), e && c(t, !0);
      const kc = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", et, ot].map(Po => [Po, t.style[Po]])),
        Ye = mt(t),
        Bn = O(g(t, et)),
        _o = O(g(t, ot)),
        ne = Ye[ft] + _o;
      !$c && !e && (Ve += _o);
      const [Ii] = cn(t, "<div>");
      g(Ii, {
        boxSizing: "border-box",
        height: Ye.height,
        width: Ye.width,
        ...g(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", ot])
      }), g(t, {
        padding: 0,
        border: 0,
        minWidth: 0,
        minHeight: 0,
        [ot]: 0,
        width: Ye.width,
        height: Ye.height,
        overflow: "hidden",
        [ft]: Ve
      });
      const To = Ve / ne;
      s = (o * ne + s) * (e ? 1 - To : To);
      const Ao = {
        [ft]: e ? ne : 0
      };
      B && (g(t, et, ne - Ve + Bn), Ao[et] = e ? Bn : ne + Bn), !B ^ p === "reveal" && (g(Ii, et, -ne + Ve), bt.start(Ii, {
        [et]: e ? 0 : -ne
      }, s, l));
      try {
        await bt.start(t, Ao, s, l);
      } finally {
        g(t, kc), Be(Ii.firstChild), e || c(t, !1);
      }
    }
    function Ma(t, e, i) {
      Ct.cancel(t);
      const {
        animation: s,
        duration: o,
        _toggle: l
      } = i;
      return e ? (l(t, !0), Ct.in(t, s[0], o, i.origin)) : Ct.out(t, s[1] || s[0], o, i.origin).then(() => l(t, !1));
    }
    const G = {
      TAB: 9,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };
    var eo = {
      mixins: [Bt, $e],
      props: {
        animation: Boolean,
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        offset: Number
      },
      data: {
        targets: "> *",
        active: !1,
        animation: !0,
        collapsible: !0,
        multiple: !1,
        clsOpen: "uk-open",
        toggle: "> .uk-accordion-title",
        content: "> .uk-accordion-content",
        offset: 0
      },
      computed: {
        items({
          targets: t
        }, e) {
          return nt(t, e);
        },
        toggles({
          toggle: t
        }) {
          return this.items.map(e => T(t, e));
        },
        contents({
          content: t
        }) {
          return this.items.map(e => {
            var i;
            return ((i = e._wrapper) == null ? void 0 : i.firstElementChild) || T(t, e);
          });
        }
      },
      watch: {
        items(t, e) {
          if (e || z(t, this.clsOpen)) return;
          const i = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
          i && this.toggle(i, !1);
        },
        toggles() {
          this.$emit();
        },
        contents(t) {
          for (const e of t) {
            const i = z(this.items.find(s => j(e, s)), this.clsOpen);
            xi(e, !i);
          }
          this.$emit();
        }
      },
      observe: yi(),
      events: [{
        name: "click keydown",
        delegate() {
          return `${this.targets} ${this.$props.toggle}`;
        },
        async handler(t) {
          var e;
          t.type === "keydown" && t.keyCode !== G.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Da(t.target), await this.toggle(Qi(this.toggles, t.current)), this._off());
        }
      }, {
        name: "shown hidden",
        self: !0,
        delegate() {
          return this.targets;
        },
        handler() {
          this.$emit();
        }
      }],
      update() {
        const t = Te(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e],
            s = this.contents[e];
          if (!i || !s) continue;
          i.id = We(this, i, `-title-${e}`), s.id = We(this, s, `-content-${e}`);
          const o = y(t, this.items[e]);
          S(i, {
            role: ut(i, "a") ? "button" : null,
            "aria-controls": s.id,
            "aria-expanded": o,
            "aria-disabled": !this.collapsible && t.length < 2 && o
          }), S(s, {
            role: "region",
            "aria-labelledby": i.id
          }), ut(s, "ul") && S(Et(s), "role", "presentation");
        }
      },
      methods: {
        toggle(t, e) {
          t = this.items[Wt(t, this.items)];
          let i = [t];
          const s = Te(this.items, `.${this.clsOpen}`);
          if (!this.multiple && !y(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && y(s, t))) return Promise.all(i.map(o => this.toggleElement(o, !y(s, o), (l, c) => {
            if (gt(l, this.clsOpen, c), e === !1 || !this.animation) {
              xi(T(this.content, l), !c);
              return;
            }
            return Na(l, c, this);
          })));
        }
      }
    };
    function xi(t, e) {
      t && (t.hidden = e);
    }
    async function Na(t, e, {
      content: i,
      duration: s,
      velocity: o,
      transition: l
    }) {
      var c;
      i = ((c = t._wrapper) == null ? void 0 : c.firstElementChild) || T(i, t), t._wrapper || (t._wrapper = ui(i, "<div>"));
      const f = t._wrapper;
      g(f, "overflow", "hidden");
      const p = O(g(f, "height"));
      await bt.cancel(f), xi(i, !1);
      const v = Ce(["marginTop", "marginBottom"], E => g(i, E)) + mt(i).height,
        b = p / v;
      s = (o * v + s) * (e ? 1 - b : b), g(f, "height", p), await bt.start(f, {
        height: e ? v : 0
      }, s, l), Be(i), delete t._wrapper, e || xi(i, !0);
    }
    function Da(t) {
      const e = jt(t, !0);
      let i;
      return function s() {
        i = requestAnimationFrame(() => {
          const {
            top: o
          } = t.getBoundingClientRect();
          o < 0 && (e.scrollTop += o), s();
        });
      }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
    }
    var La = {
      mixins: [Bt, $e],
      args: "animation",
      props: {
        animation: Boolean,
        close: String
      },
      data: {
        animation: !0,
        selClose: ".uk-alert-close",
        duration: 150
      },
      events: {
        name: "click",
        delegate() {
          return this.selClose;
        },
        handler(t) {
          t.preventDefault(), this.close();
        }
      },
      methods: {
        async close() {
          await this.toggleElement(this.$el, !1, za), this.$destroy(!0);
        }
      }
    };
    function za(t, e, {
      duration: i,
      transition: s,
      velocity: o
    }) {
      const l = O(g(t, "height"));
      return g(t, "height", l), bt.start(t, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        borderTop: 0,
        borderBottom: 0,
        opacity: 0
      }, o * l + i, s);
    }
    var io = {
        args: "autoplay",
        props: {
          automute: Boolean,
          autoplay: Boolean
        },
        data: {
          automute: !1,
          autoplay: !0
        },
        connected() {
          this.inView = this.autoplay === "inview", this.inView && !Lt(this.$el, "preload") && (this.$el.preload = "none"), ut(this.$el, "iframe") && !Lt(this.$el, "allow") && (this.$el.allow = "autoplay"), this.automute && $s(this.$el);
        },
        observe: [Re({
          args: {
            intersecting: !1
          }
        }), Ht()],
        update: {
          read({
            visible: t
          }) {
            return ks(this.$el) ? {
              prev: t,
              visible: ct(this.$el),
              inView: this.inView && Cs(this.$el)
            } : !1;
          },
          write({
            prev: t,
            visible: e,
            inView: i
          }) {
            !e || this.inView && !i ? xs(this.$el) : (this.autoplay === !0 && !t || i) && ys(this.$el);
          },
          events: ["resize"]
        }
      },
      Ha = {
        mixins: [io],
        props: {
          width: Number,
          height: Number
        },
        data: {
          automute: !0
        },
        events: {
          "load loadedmetadata"() {
            this.$emit("resize");
          }
        },
        observe: Ht({
          target: ({
            $el: t
          }) => [no(t) || X(t)]
        }),
        update: {
          read() {
            const {
                ratio: t,
                cover: e
              } = Yi,
              {
                $el: i,
                width: s,
                height: o
              } = this;
            let l = {
              width: s,
              height: o
            };
            if (!s || !o) {
              const v = {
                width: i.naturalWidth || i.videoWidth || i.clientWidth,
                height: i.naturalHeight || i.videoHeight || i.clientHeight
              };
              s ? l = t(v, "width", s) : o ? l = t(v, "height", o) : l = v;
            }
            const {
                offsetHeight: c,
                offsetWidth: f
              } = no(i) || X(i),
              p = e(l, {
                width: f + (f % 2 ? 1 : 0),
                height: c + (c % 2 ? 1 : 0)
              });
            return !p.width || !p.height ? !1 : p;
          },
          write({
            height: t,
            width: e
          }) {
            g(this.$el, {
              height: t,
              width: e
            });
          },
          events: ["resize"]
        }
      };
    function no(t) {
      for (; t = X(t);) if (g(t, "position") !== "static") return t;
    }
    var In = {
      props: {
        container: Boolean
      },
      data: {
        container: !0
      },
      computed: {
        container({
          container: t
        }) {
          return t === !0 && this.$container || t && T(t);
        }
      }
    };
    let Cn;
    function so(t) {
      const e = W(t, "touchmove", s => {
        if (s.targetTouches.length !== 1 || q(s.target, 'input[type="range"')) return;
        let {
          scrollHeight: o,
          clientHeight: l
        } = jt(s.target);
        l >= o && s.cancelable && s.preventDefault();
      }, {
        passive: !1
      });
      if (Cn) return e;
      Cn = !0;
      const {
        scrollingElement: i
      } = document;
      return g(i, {
        overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden",
        touchAction: "none",
        paddingRight: Me(window) - i.clientWidth || ""
      }), () => {
        Cn = !1, e(), g(i, {
          overflowY: "",
          touchAction: "",
          paddingRight: ""
        });
      };
    }
    var qa = {
      props: {
        pos: String,
        offset: null,
        flip: Boolean,
        shift: Boolean,
        inset: Boolean
      },
      data: {
        pos: `bottom-${Le ? "right" : "left"}`,
        offset: !1,
        flip: !0,
        shift: !0,
        inset: !1
      },
      connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = y(["top", "bottom"], this.dir) ? "y" : "x";
      },
      methods: {
        positionAt(t, e, i) {
          let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
          const o = [this.flip && "flip", this.shift && "shift"],
            l = {
              element: [this.inset ? this.dir : ps(this.dir), this.align],
              target: [this.dir, this.align]
            };
          if (this.axis === "y") {
            for (const p in l) l[p].reverse();
            s.reverse(), o.reverse();
          }
          const c = Fa(t),
            f = mt(t);
          g(t, {
            top: -f.height,
            left: -f.width
          }), Ps(t, e, {
            attach: l,
            offset: s,
            boundary: i,
            placement: o,
            viewportOffset: this.getViewportOffset(t)
          }), c();
        },
        getPositionOffset(t) {
          return zt(this.offset === !1 ? g(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (y(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
        },
        getShiftOffset(t) {
          return this.align === "center" ? 0 : zt(g(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (y(["left", "top"], this.align) ? 1 : -1);
        },
        getViewportOffset(t) {
          return zt(g(t, "--uk-position-viewport-offset"));
        }
      }
    };
    function Fa(t) {
      const e = jt(t),
        {
          scrollTop: i
        } = e;
      return () => {
        i !== e.scrollTop && (e.scrollTop = i);
      };
    }
    let st;
    var oo = {
      mixins: [In, qa, $e],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryX: Boolean,
        boundaryY: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        stretch: Boolean,
        delayShow: Number,
        delayHide: Number,
        autoUpdate: Boolean,
        clsDrop: String,
        animateOut: Boolean,
        bgScroll: Boolean
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: !1,
        boundaryX: !1,
        boundaryY: !1,
        target: !1,
        targetX: !1,
        targetY: !1,
        stretch: !1,
        delayShow: 0,
        delayHide: 800,
        autoUpdate: !0,
        clsDrop: !1,
        animateOut: !1,
        bgScroll: !0,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
        container: !1
      },
      computed: {
        boundary({
          boundary: t,
          boundaryX: e,
          boundaryY: i
        }, s) {
          return [It(e || t, s) || window, It(i || t, s) || window];
        },
        target({
          target: t,
          targetX: e,
          targetY: i
        }, s) {
          return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === !0 ? window : It(e, s), i === !0 ? window : It(i, s)];
        }
      },
      created() {
        this.tracker = new dn();
      },
      beforeConnect() {
        this.clsDrop = this.$props.clsDrop || `uk-${this.$options.name}`;
      },
      connected() {
        D(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = ja(this)), this._style = Ri(this.$el.style, ["width", "height"]);
      },
      disconnected() {
        this.isActive() && (this.hide(!1), st = null), g(this.$el, this._style);
      },
      observe: yi({
        target: ({
          toggle: t,
          $el: e
        }) => It(t, e),
        targets: ({
          $el: t
        }) => t
      }),
      events: [{
        name: "click",
        delegate() {
          return ".uk-drop-close";
        },
        handler(t) {
          t.preventDefault(), this.hide(!1);
        }
      }, {
        name: "click",
        delegate() {
          return 'a[href*="#"]';
        },
        handler({
          defaultPrevented: t,
          current: e
        }) {
          const {
            hash: i
          } = e;
          !t && i && ue(e) && !j(i, this.$el) && this.hide(!1);
        }
      }, {
        name: "beforescroll",
        handler() {
          this.hide(!1);
        }
      }, {
        name: "toggle",
        self: !0,
        handler(t, e) {
          t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e == null ? void 0 : e.$el, !1);
        }
      }, {
        name: "toggleshow",
        self: !0,
        handler(t, e) {
          t.preventDefault(), this.show(e == null ? void 0 : e.$el);
        }
      }, {
        name: "togglehide",
        self: !0,
        handler(t) {
          t.preventDefault(), q(this.$el, ":focus,:hover") || this.hide();
        }
      }, {
        name: `${fi} focusin`,
        filter() {
          return y(this.mode, "hover");
        },
        handler(t) {
          fe(t) || this.clearTimers();
        }
      }, {
        name: `${hn} focusout`,
        filter() {
          return y(this.mode, "hover");
        },
        handler(t) {
          !fe(t) && t.relatedTarget && this.hide();
        }
      }, {
        name: "toggled",
        self: !0,
        handler(t, e) {
          S(this.targetEl, "aria-expanded", e ? !0 : null), e && (this.clearTimers(), this.position());
        }
      }, {
        name: "show",
        self: !0,
        handler() {
          st = this, this.tracker.init();
          const t = [Ua(this), Ya(this), Xa(this), this.autoUpdate && Va(this), !this.bgScroll && so(this.$el)];
          tt(this.$el, "hide", () => t.forEach(e => e && e()), {
            self: !0
          });
        }
      }, {
        name: "beforehide",
        self: !0,
        handler() {
          this.clearTimers();
        }
      }, {
        name: "hide",
        handler({
          target: t
        }) {
          if (this.$el !== t) {
            st = st === null && j(t, this.$el) && this.isToggled() ? this : st;
            return;
          }
          st = this.isActive() ? null : st, this.tracker.cancel();
        }
      }],
      update: {
        write() {
          this.isToggled() && !z(this.$el, this.clsEnter) && this.position();
        }
      },
      methods: {
        show(t = this.targetEl, e = !0) {
          if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(!1, !1), this.targetEl = t, this.clearTimers(), !this.isActive()) {
            if (st) {
              if (e && st.isDelaying) {
                this.showTimer = setTimeout(() => q(t, ":hover") && this.show(), 10);
                return;
              }
              let i;
              for (; st && i !== st && !j(this.$el, st.$el);) i = st, st.hide(!1, !1);
            }
            this.container && X(this.$el) !== this.container && _t(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, !0), e && this.delayShow || 0);
          }
        },
        hide(t = !0, e = !0) {
          const i = () => this.toggleElement(this.$el, !1, this.animateOut && e);
          this.clearTimers(), this.isDelaying = Wa(this.$el).some(s => this.tracker.movesTo(s)), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
        },
        clearTimers() {
          clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1;
        },
        isActive() {
          return st === this;
        },
        position() {
          lt(this.$el, "uk-drop-stack"), g(this.$el, this._style), this.$el.hidden = !0;
          const t = this.target.map(o => Ra(this.$el, o)),
            e = this.getViewportOffset(this.$el),
            i = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
          for (const [o, [l, c]] of i) this.axis !== l && y([l, !0], this.stretch) && g(this.$el, {
            [c]: Math.min(L(this.boundary[o])[c], t[o][c] - 2 * e),
            [`overflow-${l}`]: "auto"
          });
          const s = t[0].width - 2 * e;
          this.$el.hidden = !1, g(this.$el, "maxWidth", ""), this.$el.offsetWidth > s && D(this.$el, "uk-drop-stack"), g(this.$el, "maxWidth", s), this.positionAt(this.$el, this.target, this.boundary);
          for (const [o, [l, c, f, p]] of i) if (this.axis === l && y([l, !0], this.stretch)) {
            const v = Math.abs(this.getPositionOffset(this.$el)),
              b = L(this.target[o]),
              E = L(this.$el);
            g(this.$el, {
              [c]: (b[f] > E[f] ? b[this.inset ? p : f] - Math.max(L(this.boundary[o])[f], t[o][f] + e) : Math.min(L(this.boundary[o])[p], t[o][p] - e) - b[this.inset ? f : p]) - v,
              [`overflow-${l}`]: "auto"
            }), this.positionAt(this.$el, this.target, this.boundary);
          }
        }
      }
    };
    function Wa(t) {
      const e = [];
      return Rt(t, i => g(i, "position") !== "static" && e.push(i)), e;
    }
    function Ra(t, e) {
      return yt(be(e).find(i => j(t, i)));
    }
    function ja(t) {
      const {
        $el: e
      } = t.$create("toggle", It(t.toggle, t.$el), {
        target: t.$el,
        mode: t.mode
      });
      return S(e, "aria-haspopup", !0), e;
    }
    function Ua(t) {
      const e = () => t.$emit(),
        i = [pn(e), pi(be(t.$el).concat(t.target), e)];
      return () => i.map(s => s.disconnect());
    }
    function Va(t) {
      return W([document, ...be(t.$el)], "scroll", () => t.$emit(), {
        passive: !0
      });
    }
    function Ya(t) {
      return W(document, "keydown", e => {
        e.keyCode === G.ESC && t.hide(!1);
      });
    }
    function Xa(t) {
      return W(document, ve, ({
        target: e
      }) => {
        j(e, t.$el) || tt(document, `${we} ${di} scroll`, ({
          defaultPrevented: i,
          type: s,
          target: o
        }) => {
          !i && s === we && e === o && !(t.targetEl && j(e, t.targetEl)) && t.hide(!1);
        }, !0);
      });
    }
    var ro = {
      mixins: [Bt, In],
      props: {
        align: String,
        clsDrop: String,
        boundary: Boolean,
        dropbar: Boolean,
        dropbarAnchor: Boolean,
        duration: Number,
        mode: Boolean,
        offset: Boolean,
        stretch: Boolean,
        delayShow: Boolean,
        delayHide: Boolean,
        target: Boolean,
        targetX: Boolean,
        targetY: Boolean,
        animation: Boolean,
        animateOut: Boolean
      },
      data: {
        align: Le ? "right" : "left",
        clsDrop: "uk-dropdown",
        clsDropbar: "uk-dropnav-dropbar",
        boundary: !0,
        dropbar: !1,
        dropbarAnchor: !1,
        duration: 200,
        container: !1,
        selNavItem: "> li > a, > ul > li > a"
      },
      computed: {
        dropbarAnchor({
          dropbarAnchor: t
        }, e) {
          return It(t, e) || e;
        },
        dropbar({
          dropbar: t
        }) {
          return t ? (t = this._dropbar || It(t, this.$el) || T(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = T("<div></div>"))) : null;
        },
        dropContainer(t, e) {
          return this.container || e;
        },
        dropdowns({
          clsDrop: t
        }, e) {
          var i;
          const s = nt(`.${t}`, e);
          if (this.dropContainer !== e) for (const o of nt(`.${t}`, this.dropContainer)) {
            const l = (i = this.getDropdown(o)) == null ? void 0 : i.targetEl;
            !y(s, o) && l && j(l, this.$el) && s.push(o);
          }
          return s;
        },
        items({
          selNavItem: t
        }, e) {
          return nt(t, e);
        }
      },
      watch: {
        dropbar(t) {
          D(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
        },
        dropdowns() {
          this.initializeDropdowns();
        }
      },
      connected() {
        this.initializeDropdowns();
      },
      disconnected() {
        Gt(this._dropbar), delete this._dropbar;
      },
      events: [{
        name: "mouseover focusin",
        delegate() {
          return this.selNavItem;
        },
        handler({
          current: t
        }) {
          const e = this.getActive();
          e && y(e.mode, "hover") && e.targetEl && !j(e.targetEl, t) && !e.isDelaying && e.hide(!1);
        }
      }, {
        name: "keydown",
        self: !0,
        delegate() {
          return this.selNavItem;
        },
        handler(t) {
          var e;
          const {
              current: i,
              keyCode: s
            } = t,
            o = this.getActive();
          s === G.DOWN && (o == null ? void 0 : o.targetEl) === i && (t.preventDefault(), (e = T(oi, o.$el)) == null || e.focus()), ao(t, this.items, o);
        }
      }, {
        name: "keydown",
        el() {
          return this.dropContainer;
        },
        delegate() {
          return `.${this.clsDrop}`;
        },
        handler(t) {
          var e;
          const {
            current: i,
            keyCode: s
          } = t;
          if (!y(this.dropdowns, i)) return;
          const o = this.getActive();
          let l = -1;
          if (s === G.HOME ? l = 0 : s === G.END ? l = "last" : s === G.UP ? l = "previous" : s === G.DOWN ? l = "next" : s === G.ESC && ((e = o.targetEl) == null || e.focus()), ~l) {
            t.preventDefault();
            const c = nt(oi, i);
            c[Wt(l, c, J(c, f => q(f, ":focus")))].focus();
          }
          ao(t, this.items, o);
        }
      }, {
        name: "mouseleave",
        el() {
          return this.dropbar;
        },
        filter() {
          return this.dropbar;
        },
        handler() {
          const t = this.getActive();
          t && y(t.mode, "hover") && !this.dropdowns.some(e => q(e, ":hover")) && t.hide();
        }
      }, {
        name: "beforeshow",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({
          target: t
        }) {
          this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && ci(this.dropbarAnchor, this.dropbar), D(t, `${this.clsDrop}-dropbar`));
        }
      }, {
        name: "show",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({
          target: t
        }) {
          if (!this.isDropbarDrop(t)) return;
          const e = this.getDropdown(t),
            i = () => {
              const s = he(t, `.${this.clsDrop}`).concat(t).map(f => L(f)),
                o = Math.min(...s.map(({
                  top: f
                }) => f)),
                l = Math.max(...s.map(({
                  bottom: f
                }) => f)),
                c = L(this.dropbar);
              g(this.dropbar, "top", this.dropbar.offsetTop - (c.top - o)), this.transitionTo(l - o + O(g(t, "marginBottom")), t);
            };
          this._observer = pi([e.$el, ...e.target], i), i();
        }
      }, {
        name: "beforehide",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler(t) {
          const e = this.getActive();
          q(this.dropbar, ":hover") && e.$el === t.target && !this.items.some(i => e.targetEl !== i && q(i, ":focus")) && t.preventDefault();
        }
      }, {
        name: "hide",
        el() {
          return this.dropContainer;
        },
        filter() {
          return this.dropbar;
        },
        handler({
          target: t
        }) {
          var e;
          if (!this.isDropbarDrop(t)) return;
          (e = this._observer) == null || e.disconnect();
          const i = this.getActive();
          (!i || i.$el === t) && this.transitionTo(0);
        }
      }],
      methods: {
        getActive() {
          var t;
          return y(this.dropdowns, (t = st) == null ? void 0 : t.$el) && st;
        },
        async transitionTo(t, e) {
          const {
              dropbar: i
            } = this,
            s = Pt(i);
          e = s < t && e, await bt.cancel([e, i]), g(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), Pt(i, s), await Promise.all([bt.start(i, {
            height: t
          }, this.duration), bt.start(e, {
            clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)`
          }, this.duration).finally(() => g(e, {
            clipPath: ""
          }))]).catch(At);
        },
        getDropdown(t) {
          return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
        },
        isDropbarDrop(t) {
          return this.getDropdown(t) && z(t, this.clsDrop);
        },
        initializeDropdowns() {
          this.$create("drop", this.dropdowns.filter(t => !this.getDropdown(t)), {
            ...this.$props,
            flip: !1,
            shift: !0,
            pos: `bottom-${this.align}`,
            boundary: this.boundary === !0 ? this.$el : this.boundary
          });
        }
      }
    };
    function ao(t, e, i) {
      var s, o, l;
      const {
        current: c,
        keyCode: f
      } = t;
      let p = -1;
      f === G.HOME ? p = 0 : f === G.END ? p = "last" : f === G.LEFT ? p = "previous" : f === G.RIGHT ? p = "next" : f === G.TAB && ((s = i.targetEl) == null || s.focus(), (o = i.hide) == null || o.call(i, !1)), ~p && (t.preventDefault(), (l = i.hide) == null || l.call(i, !1), e[Wt(p, e, e.indexOf(i.targetEl || c))].focus());
    }
    var Ga = {
        mixins: [Bt],
        args: "target",
        props: {
          target: Boolean
        },
        data: {
          target: !1
        },
        computed: {
          input(t, e) {
            return T(si, e);
          },
          state() {
            return this.input.nextElementSibling;
          },
          target({
            target: t
          }, e) {
            return t && (t === !0 && X(this.input) === e && this.input.nextElementSibling || T(t, e));
          }
        },
        update() {
          var t;
          const {
            target: e,
            input: i
          } = this;
          if (!e) return;
          let s;
          const o = ss(e) ? "value" : "textContent",
            l = e[o],
            c = (t = i.files) != null && t[0] ? i.files[0].name : q(i, "select") && (s = nt("option", i).filter(f => f.selected)[0]) ? s.textContent : i.value;
          l !== c && (e[o] = c);
        },
        events: [{
          name: "change",
          handler() {
            this.$emit();
          }
        }, {
          name: "reset",
          el() {
            return ht(this.$el, "form");
          },
          handler() {
            this.$emit();
          }
        }]
      },
      lo = {
        props: {
          margin: String,
          firstColumn: Boolean
        },
        data: {
          margin: "uk-margin-small-top",
          firstColumn: "uk-first-column"
        },
        observe: [Qs({
          options: {
            childList: !0,
            attributes: !0,
            attributeFilter: ["style"]
          }
        }), Ht({
          target: ({
            $el: t
          }) => [t, ...Et(t)]
        })],
        update: {
          read() {
            const t = co(this.$el.children);
            return {
              rows: t,
              columns: Ja(t)
            };
          },
          write({
            columns: t,
            rows: e
          }) {
            for (const i of e) for (const s of i) gt(s, this.margin, e[0] !== i), gt(s, this.firstColumn, t[0].includes(s));
          },
          events: ["resize"]
        }
      };
    function co(t) {
      return ho(t, "top", "bottom");
    }
    function Ja(t) {
      const e = [];
      for (const i of t) {
        const s = ho(i, "left", "right");
        for (let o = 0; o < s.length; o++) e[o] = e[o] ? e[o].concat(s[o]) : s[o];
      }
      return Le ? e.reverse() : e;
    }
    function ho(t, e, i) {
      const s = [[]];
      for (const o of t) {
        if (!ct(o)) continue;
        let l = $i(o);
        for (let c = s.length - 1; c >= 0; c--) {
          const f = s[c];
          if (!f[0]) {
            f.push(o);
            break;
          }
          let p;
          if (f[0].offsetParent === o.offsetParent ? p = $i(f[0]) : (l = $i(o, !0), p = $i(f[0], !0)), l[e] >= p[i] - 1 && l[e] !== p[e]) {
            s.push([o]);
            break;
          }
          if (l[i] - 1 > p[e] || l[e] === p[e]) {
            f.push(o);
            break;
          }
          if (c === 0) {
            s.unshift([o]);
            break;
          }
        }
      }
      return s;
    }
    function $i(t, e = !1) {
      let {
        offsetTop: i,
        offsetLeft: s,
        offsetHeight: o,
        offsetWidth: l
      } = t;
      return e && ([i, s] = Kt(t)), {
        top: i,
        left: s,
        bottom: i + o,
        right: s + l
      };
    }
    var Ka = {
      extends: lo,
      mixins: [Bt],
      name: "grid",
      props: {
        masonry: Boolean,
        parallax: Number
      },
      data: {
        margin: "uk-grid-margin",
        clsStack: "uk-grid-stack",
        masonry: !1,
        parallax: 0
      },
      connected() {
        this.masonry && D(this.$el, "uk-flex-top uk-flex-wrap-top");
      },
      observe: En({
        filter: ({
          parallax: t
        }) => t
      }),
      update: [{
        write({
          columns: t
        }) {
          gt(this.$el, this.clsStack, t.length < 2);
        },
        events: ["resize"]
      }, {
        read(t) {
          let {
            columns: e,
            rows: i
          } = t;
          if (!e.length || !this.masonry && !this.parallax || uo(this.$el)) return t.translates = !1, !1;
          let s = !1;
          const o = Et(this.$el),
            l = e.map(v => Ce(v, "offsetHeight")),
            c = Qa(o, this.margin) * (i.length - 1),
            f = Math.max(...l) + c;
          this.masonry && (e = e.map(v => Wi(v, "offsetTop")), s = Za(i, e));
          let p = Math.abs(this.parallax);
          return p && (p = l.reduce((v, b, E) => Math.max(v, b + c + (E % 2 ? p : p / 8) - f), 0)), {
            padding: p,
            columns: e,
            translates: s,
            height: s ? f : ""
          };
        },
        write({
          height: t,
          padding: e
        }) {
          g(this.$el, "paddingBottom", e || ""), t !== !1 && g(this.$el, "height", t);
        },
        events: ["resize"]
      }, {
        read() {
          return this.parallax && uo(this.$el) ? !1 : {
            scrolled: this.parallax ? Ts(this.$el) * Math.abs(this.parallax) : !1
          };
        },
        write({
          columns: t,
          scrolled: e,
          translates: i
        }) {
          e === !1 && !i || t.forEach((s, o) => s.forEach((l, c) => g(l, "transform", !e && !i ? "" : `translateY(${(i && -i[o][c]) + (e ? o % 2 ? e : e / 8 : 0)}px)`)));
        },
        events: ["scroll", "resize"]
      }]
    };
    function uo(t) {
      return Et(t).some(e => g(e, "position") === "absolute");
    }
    function Za(t, e) {
      const i = t.map(s => Math.max(...s.map(o => o.offsetHeight)));
      return e.map(s => {
        let o = 0;
        return s.map((l, c) => o += c ? i[c - 1] - s[c - 1].offsetHeight : 0);
      });
    }
    function Qa(t, e) {
      const [i] = t.filter(s => z(s, e));
      return O(i ? g(i, "marginTop") : g(t[0], "paddingLeft"));
    }
    var tl = {
      args: "target",
      props: {
        target: String,
        row: Boolean
      },
      data: {
        target: "> *",
        row: !0
      },
      computed: {
        elements({
          target: t
        }, e) {
          return nt(t, e);
        }
      },
      observe: Ht({
        target: ({
          $el: t,
          elements: e
        }) => [t, ...e]
      }),
      update: {
        read() {
          return {
            rows: (this.row ? co(this.elements) : [this.elements]).map(el)
          };
        },
        write({
          rows: t
        }) {
          for (const {
            heights: e,
            elements: i
          } of t) i.forEach((s, o) => g(s, "minHeight", e[o]));
        },
        events: ["resize"]
      }
    };
    function el(t) {
      if (t.length < 2) return {
        heights: [""],
        elements: t
      };
      let e = t.map(il);
      const i = Math.max(...e);
      return {
        heights: t.map((s, o) => e[o].toFixed(2) === i.toFixed(2) ? "" : i),
        elements: t
      };
    }
    function il(t) {
      const e = Ri(t.style, ["display", "minHeight"]);
      ct(t) || g(t, "display", "block", "important"), g(t, "minHeight", "");
      const i = mt(t).height - Ne(t, "height", "content-box");
      return g(t, e), i;
    }
    var nl = {
        props: {
          expand: Boolean,
          offsetTop: Boolean,
          offsetBottom: Boolean,
          minHeight: Number
        },
        data: {
          expand: !1,
          offsetTop: !1,
          offsetBottom: !1,
          minHeight: 0
        },
        observe: Ht({
          target: ({
            $el: t
          }) => [t, ...ze(t)]
        }),
        update: {
          read() {
            if (!ct(this.$el)) return !1;
            let t = "";
            const e = Ne(this.$el, "height", "content-box"),
              {
                body: i,
                scrollingElement: s
              } = document,
              o = jt(this.$el),
              {
                height: l
              } = yt(o === i ? s : o);
            if (this.expand) t = `${l - (mt(o).height - mt(this.$el).height) - e}px`;else {
              const c = s === o || i === o;
              if (t = `calc(${c ? "100vh" : `${l}px`}`, this.offsetTop) if (c) {
                const f = Kt(this.$el)[0] - Kt(o)[0];
                t += f > 0 && f < l / 2 ? ` - ${f}px` : "";
              } else t += ` - ${g(o, "paddingTop")}`;
              this.offsetBottom === !0 ? t += ` - ${mt(this.$el.nextElementSibling).height}px` : Xt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && C(this.offsetBottom, "px") ? t += ` - ${O(this.offsetBottom)}px` : N(this.offsetBottom) && (t += ` - ${mt(It(this.offsetBottom, this.$el)).height}px`), t += `${e ? ` - ${e}px` : ""})`;
            }
            return {
              minHeight: t
            };
          },
          write({
            minHeight: t
          }) {
            g(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
          },
          events: ["resize"]
        }
      },
      sl = '<svg width="14" height="14" viewBox="0 0 14 14"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
      ol = '<svg width="20" height="20" viewBox="0 0 20 20"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
      rl = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
      al = '<svg width="20" height="20" viewBox="0 0 20 20"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
      ll = '<svg width="14" height="14" viewBox="0 0 14 14"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>',
      cl = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
      hl = '<svg width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>',
      ul = '<svg width="20" height="20" viewBox="0 0 20 20"><style>.uk-navbar-toggle-animate svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>',
      fl = '<svg width="40" height="40" viewBox="0 0 40 40"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
      dl = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
      pl = '<svg width="7" height="12" viewBox="0 0 7 12"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
      gl = '<svg width="20" height="20" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      ml = '<svg width="40" height="40" viewBox="0 0 40 40"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
      vl = '<svg width="24" height="24" viewBox="0 0 24 24"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
      wl = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5"/></svg>',
      bl = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1"/></svg>',
      yl = '<svg width="25" height="40" viewBox="0 0 25 40"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547"/></svg>',
      xl = '<svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23"/></svg>',
      $l = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
      kl = '<svg width="18" height="10" viewBox="0 0 18 10"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9"/></svg>',
      fo = {
        props: {
          i18n: Object
        },
        data: {
          i18n: null
        },
        methods: {
          t(t, ...e) {
            var i, s, o;
            let l = 0;
            return ((o = ((i = this.i18n) == null ? void 0 : i[t]) || ((s = this.$options.i18n) == null ? void 0 : s[t])) == null ? void 0 : o.replace(/%s/g, () => e[l++] || "")) || "";
          }
        }
      },
      po = {
        args: "src",
        props: {
          width: Number,
          height: Number,
          ratio: Number
        },
        data: {
          ratio: 1
        },
        connected() {
          this.svg = this.getSvg().then(t => {
            if (!this._connected) return;
            const e = Sl(t, this.$el);
            return this.svgEl && e !== this.svgEl && Gt(this.svgEl), El.call(this, e, t), this.svgEl = e;
          }, At);
        },
        disconnected() {
          this.svg.then(t => {
            this._connected || (Ki(this.$el) && (this.$el.hidden = !1), Gt(t), this.svgEl = null);
          }), this.svg = null;
        },
        methods: {
          async getSvg() {}
        }
      };
    function Sl(t, e) {
      if (Ki(e) || ut(e, "canvas")) {
        e.hidden = !0;
        const s = e.nextElementSibling;
        return go(t, s) ? s : ci(e, t);
      }
      const i = e.lastElementChild;
      return go(t, i) ? i : _t(e, t);
    }
    function go(t, e) {
      return ut(t, "svg") && ut(e, "svg") && t.innerHTML === e.innerHTML;
    }
    function El(t, e) {
      const i = ["width", "height"];
      let s = i.map(l => this[l]);
      s.some(l => l) || (s = i.map(l => S(e, l)));
      const o = S(e, "viewBox");
      o && !s.some(l => l) && (s = o.split(" ").slice(2)), s.forEach((l, c) => S(t, i[c], O(l) * this.ratio || null));
    }
    const ki = {
        spinner: $l,
        totop: kl,
        marker: al,
        "close-icon": sl,
        "close-large": ol,
        "drop-parent-icon": rl,
        "nav-parent-icon": cl,
        "nav-parent-icon-large": ll,
        "navbar-parent-icon": hl,
        "navbar-toggle-icon": ul,
        "overlay-icon": fl,
        "pagination-next": dl,
        "pagination-previous": pl,
        "search-icon": gl,
        "search-large": ml,
        "search-navbar": vl,
        "slidenav-next": bl,
        "slidenav-next-large": wl,
        "slidenav-previous": xl,
        "slidenav-previous-large": yl
      },
      _n = {
        install: Nl,
        mixins: [po],
        args: "icon",
        props: {
          icon: String
        },
        isIcon: !0,
        beforeConnect() {
          D(this.$el, "uk-icon");
        },
        methods: {
          async getSvg() {
            const t = Dl(this.icon);
            if (!t) throw "Icon not found.";
            return t;
          }
        }
      },
      ee = {
        args: !1,
        extends: _n,
        data: t => ({
          icon: m(t.constructor.options.name)
        }),
        beforeConnect() {
          D(this.$el, this.$options.id);
        }
      },
      Il = {
        extends: ee,
        beforeConnect() {
          const t = this.$props.icon;
          this.icon = ht(this.$el, ".uk-nav-primary") ? `${t}-large` : t;
        }
      },
      Cl = {
        extends: ee,
        mixins: [fo],
        i18n: {
          toggle: "Open Search",
          submit: "Submit Search"
        },
        beforeConnect() {
          if (this.icon = z(this.$el, "uk-search-icon") && he(this.$el, ".uk-search-large").length ? "search-large" : he(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon, !Lt(this.$el, "aria-label")) if (z(this.$el, "uk-search-toggle") || z(this.$el, "uk-navbar-toggle")) {
            const t = this.t("toggle");
            S(this.$el, "aria-label", t);
          } else {
            const t = ht(this.$el, "a,button");
            if (t) {
              const e = this.t("submit");
              S(t, "aria-label", e);
            }
          }
        }
      },
      _l = {
        extends: ee,
        beforeConnect() {
          S(this.$el, "role", "status");
        },
        methods: {
          async getSvg() {
            const t = await _n.methods.getSvg.call(this);
            return this.ratio !== 1 && g(T("circle", t), "strokeWidth", 1 / this.ratio), t;
          }
        }
      },
      ie = {
        extends: ee,
        mixins: [fo],
        beforeConnect() {
          const t = ht(this.$el, "a,button");
          S(t, "role", this.role !== null && ut(t, "a") ? "button" : this.role);
          const e = this.t("label");
          e && !Lt(t, "aria-label") && S(t, "aria-label", e);
        }
      },
      mo = {
        extends: ie,
        beforeConnect() {
          D(this.$el, "uk-slidenav");
          const t = this.$props.icon;
          this.icon = z(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
        }
      },
      Tl = {
        extends: ie,
        i18n: {
          label: "Open menu"
        }
      },
      Al = {
        extends: ie,
        i18n: {
          label: "Close"
        },
        beforeConnect() {
          this.icon = `close-${z(this.$el, "uk-close-large") ? "large" : "icon"}`;
        }
      },
      Pl = {
        extends: ie,
        i18n: {
          label: "Open"
        }
      },
      Ol = {
        extends: ie,
        i18n: {
          label: "Back to top"
        }
      },
      Bl = {
        extends: ie,
        i18n: {
          label: "Next page"
        },
        data: {
          role: null
        }
      },
      Ml = {
        extends: ie,
        i18n: {
          label: "Previous page"
        },
        data: {
          role: null
        }
      },
      Si = {};
    function Nl(t) {
      t.icon.add = (e, i) => {
        const s = N(e) ? {
          [e]: i
        } : e;
        le(s, (o, l) => {
          ki[l] = o, delete Si[l];
        }), t._initialized && Rt(document.body, o => le(t.getComponents(o), l => {
          l.$options.isIcon && l.icon in s && l.$reset();
        }));
      };
    }
    function Dl(t) {
      return ki[t] ? (Si[t] || (Si[t] = T((ki[Ll(t)] || ki[t]).trim())), Si[t].cloneNode(!0)) : null;
    }
    function Ll(t) {
      return Le ? Fi(Fi(t, "left", "right"), "previous", "next") : t;
    }
    const zl = Zt && "loading" in HTMLImageElement.prototype;
    var Hl = {
      args: "dataSrc",
      props: {
        dataSrc: String,
        sources: String,
        margin: String,
        target: String,
        loading: String
      },
      data: {
        dataSrc: "",
        sources: !1,
        margin: "50%",
        target: !1,
        loading: "lazy"
      },
      connected() {
        if (this.loading !== "lazy") {
          this.load();
          return;
        }
        zl && Ei(this.$el) && (this.$el.loading = "lazy", Tn(this.$el)), jl(this.$el);
      },
      disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      },
      observe: Re({
        target: ({
          $el: t,
          $props: e
        }) => [t, ...Ae(e.target, t)],
        handler(t, e) {
          this.load(), e.disconnect();
        },
        options: ({
          margin: t
        }) => ({
          rootMargin: t
        }),
        filter: ({
          loading: t
        }) => t === "lazy"
      }),
      methods: {
        load() {
          if (this.img) return this.img;
          const t = Ei(this.$el) ? this.$el : Fl(this.$el, this.dataSrc, this.sources);
          return _e(t, "loading"), Tn(this.$el, t.currentSrc), this.img = t;
        }
      }
    };
    function Tn(t, e) {
      if (Ei(t)) {
        const i = X(t);
        (ut(i, "picture") ? Et(i) : [t]).forEach(o => vo(o, o));
      } else e && !y(t.style.backgroundImage, e) && (g(t, "backgroundImage", `url(${nn(e)})`), H(t, ri("load", !1)));
    }
    const ql = ["data-src", "data-srcset", "sizes"];
    function vo(t, e) {
      for (const i of ql) {
        const s = ce(t, i);
        s && S(e, i.replace(/^(data-)+/, ""), s);
      }
    }
    function Fl(t, e, i) {
      const s = new Image();
      return Wl(s, i), vo(t, s), s.onload = () => {
        Tn(t, s.currentSrc);
      }, S(s, "src", e), s;
    }
    function Wl(t, e) {
      if (e = Rl(e), e.length) {
        const i = de("<picture>");
        for (const s of e) {
          const o = de("<source>");
          S(o, s), _t(i, o);
        }
        _t(i, t);
      }
    }
    function Rl(t) {
      if (!t) return [];
      if (w(t, "[")) try {
        t = JSON.parse(t);
      } catch {
        t = [];
      } else t = xn(t);
      return P(t) || (t = [t]), t.filter(e => !Hi(e));
    }
    function jl(t) {
      Ei(t) && !Lt(t, "src") && S(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
    }
    function Ei(t) {
      return ut(t, "img");
    }
    var An = {
      props: {
        media: Boolean
      },
      data: {
        media: !1
      },
      connected() {
        const t = Ul(this.media, this.$el);
        if (this.matchMedia = !0, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, H(this.$el, ri("mediachange", !1, !0, [this.mediaObj]));
          };
          this.offMediaObj = W(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      },
      disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      }
    };
    function Ul(t, e) {
      if (N(t)) {
        if (w(t, "@")) t = O(g(e, `--uk-breakpoint-${t.substr(1)}`));else if (isNaN(t)) return t;
      }
      return t && Xt(t) ? `(min-width: ${t}px)` : "";
    }
    var Vl = {
      mixins: [Bt, An],
      props: {
        fill: String
      },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill"
      },
      computed: {
        fill({
          fill: t
        }) {
          return t || g(this.$el, "--uk-leader-fill-content");
        }
      },
      connected() {
        [this.wrapper] = cn(this.$el, `<span class="${this.clsWrapper}">`);
      },
      disconnected() {
        Be(this.wrapper.childNodes);
      },
      observe: Ht(),
      update: {
        read() {
          return {
            width: Math.trunc(this.$el.offsetWidth / 2),
            fill: this.fill,
            hide: !this.matchMedia
          };
        },
        write({
          width: t,
          fill: e,
          hide: i
        }) {
          gt(this.wrapper, this.clsHide, i), S(this.wrapper, this.attrFill, new Array(t).join(e));
        },
        events: ["resize"]
      }
    };
    const pt = [];
    var wo = {
      mixins: [Bt, In, $e],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
        role: String
      },
      data: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
        role: "dialog"
      },
      computed: {
        panel({
          selPanel: t
        }, e) {
          return T(t, e);
        },
        transitionElement() {
          return this.panel;
        },
        bgClose({
          bgClose: t
        }) {
          return t && this.panel;
        }
      },
      connected() {
        S(this.panel || this.$el, "role", this.role), this.overlay && S(this.panel || this.$el, "aria-modal", !0);
      },
      beforeDisconnect() {
        y(pt, this) && this.toggleElement(this.$el, !1, !1);
      },
      events: [{
        name: "click",
        delegate() {
          return `${this.selClose},a[href*="#"]`;
        },
        handler(t) {
          const {
              current: e,
              defaultPrevented: i
            } = t,
            {
              hash: s
            } = e;
          !i && s && ue(e) && !j(s, this.$el) && T(s, document.body) ? this.hide() : q(e, this.selClose) && (t.preventDefault(), this.hide());
        }
      }, {
        name: "toggle",
        self: !0,
        handler(t) {
          t.defaultPrevented || (t.preventDefault(), this.isToggled() === y(pt, this) && this.toggle());
        }
      }, {
        name: "beforeshow",
        self: !0,
        handler(t) {
          if (y(pt, this)) return !1;
          !this.stack && pt.length ? (Promise.all(pt.map(e => e.hide())).then(this.show), t.preventDefault()) : pt.push(this);
        }
      }, {
        name: "show",
        self: !0,
        handler() {
          this.stack && g(this.$el, "zIndex", O(g(this.$el, "zIndex")) + pt.length);
          const t = [this.overlay && Xl(this), this.overlay && so(this.$el), this.bgClose && Gl(this), this.escClose && Jl(this)];
          tt(this.$el, "hidden", () => t.forEach(e => e && e()), {
            self: !0
          }), D(document.documentElement, this.clsPage);
        }
      }, {
        name: "shown",
        self: !0,
        handler() {
          Zi(this.$el) || S(this.$el, "tabindex", "-1"), q(this.$el, ":focus-within") || this.$el.focus();
        }
      }, {
        name: "hidden",
        self: !0,
        handler() {
          y(pt, this) && pt.splice(pt.indexOf(this), 1), g(this.$el, "zIndex", ""), pt.some(t => t.clsPage === this.clsPage) || lt(document.documentElement, this.clsPage);
        }
      }],
      methods: {
        toggle() {
          return this.isToggled() ? this.hide() : this.show();
        },
        show() {
          return this.container && X(this.$el) !== this.container ? (_t(this.container, this.$el), new Promise(t => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, !0, bo);
        },
        hide() {
          return this.toggleElement(this.$el, !1, bo);
        }
      }
    };
    function bo(t, e, {
      transitionElement: i,
      _toggle: s
    }) {
      return new Promise((o, l) => tt(t, "show hide", () => {
        var c;
        (c = t._reject) == null || c.call(t), t._reject = l, s(t, e);
        const f = tt(i, "transitionstart", () => {
            tt(i, "transitionend transitioncancel", o, {
              self: !0
            }), clearTimeout(p);
          }, {
            self: !0
          }),
          p = setTimeout(() => {
            f(), o();
          }, Yl(g(i, "transitionDuration")));
      })).then(() => delete t._reject);
    }
    function Yl(t) {
      return t ? C(t, "ms") ? O(t) : O(t) * 1e3 : 0;
    }
    function Xl(t) {
      return W(document, "focusin", e => {
        Ie(pt) === t && !j(e.target, t.$el) && t.$el.focus();
      });
    }
    function Gl(t) {
      return W(document, ve, ({
        target: e
      }) => {
        Ie(pt) !== t || t.overlay && !j(e, t.$el) || j(e, t.panel) || tt(document, `${we} ${di} scroll`, ({
          defaultPrevented: i,
          type: s,
          target: o
        }) => {
          !i && s === we && e === o && t.hide();
        }, !0);
      });
    }
    function Jl(t) {
      return W(document, "keydown", e => {
        e.keyCode === 27 && Ie(pt) === t && t.hide();
      });
    }
    var Kl = {
      install: Zl,
      mixins: [wo],
      data: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
      },
      events: [{
        name: "show",
        self: !0,
        handler() {
          z(this.panel, "uk-margin-auto-vertical") ? D(this.$el, "uk-flex") : g(this.$el, "display", "block"), Pt(this.$el);
        }
      }, {
        name: "hidden",
        self: !0,
        handler() {
          g(this.$el, "display", ""), lt(this.$el, "uk-flex");
        }
      }]
    };
    function Zl({
      modal: t
    }) {
      t.dialog = function (i, s) {
        const o = t(`<div class="uk-modal"> <div class="uk-modal-dialog">${i}</div> </div>`, {
          stack: !0,
          role: "alertdialog",
          ...s
        });
        return o.show(), W(o.$el, "hidden", async () => {
          await Promise.resolve(), o.$destroy(!0);
        }, {
          self: !0
        }), o;
      }, t.alert = function (i, s) {
        return e(({
          i18n: o
        }) => `<div class="uk-modal-body">${N(i) ? i : li(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${o.ok}</button> </div>`, s);
      }, t.confirm = function (i, s) {
        return e(({
          i18n: o
        }) => `<form> <div class="uk-modal-body">${N(i) ? i : li(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${o.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${o.ok}</button> </div> </form>`, s, () => Promise.reject());
      }, t.prompt = function (i, s, o) {
        const l = e(({
            i18n: p
          }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${N(i) ? i : li(i)}</label> <input class="uk-input" value="${s || ""}" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${p.cancel}</button> <button class="uk-button uk-button-primary">${p.ok}</button> </div> </form>`, o, () => null, () => f.value),
          {
            $el: c
          } = l.dialog,
          f = T("input", c);
        return W(c, "show", () => f.select()), l;
      }, t.i18n = {
        ok: "Ok",
        cancel: "Cancel"
      };
      function e(i, s, o = At, l = At) {
        s = {
          bgClose: !1,
          escClose: !0,
          ...s,
          i18n: {
            ...t.i18n,
            ...(s == null ? void 0 : s.i18n)
          }
        };
        const c = t.dialog(i(s), s);
        return Y(new Promise(f => {
          const p = W(c.$el, "hide", () => f(o()));
          W(c.$el, "submit", "form", v => {
            v.preventDefault(), f(l(c)), p(), c.hide();
          });
        }), {
          dialog: c
        });
      }
    }
    var Ql = {
        extends: eo,
        data: {
          targets: "> .uk-parent",
          toggle: "> a",
          content: "> ul"
        }
      },
      tc = {
        extends: ro,
        data: {
          clsDrop: "uk-navbar-dropdown",
          selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle"
        },
        watch: {
          items() {
            const t = z(this.$el, "uk-navbar-justify");
            for (const e of nt(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el)) g(e, "flexGrow", t ? nt(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", e).length : "");
          }
        }
      },
      ec = {
        mixins: [wo],
        args: "mode",
        props: {
          mode: String,
          flip: Boolean,
          overlay: Boolean,
          swiping: Boolean
        },
        data: {
          mode: "slide",
          flip: !1,
          overlay: !1,
          clsPage: "uk-offcanvas-page",
          clsContainer: "uk-offcanvas-container",
          selPanel: ".uk-offcanvas-bar",
          clsFlip: "uk-offcanvas-flip",
          clsContainerAnimation: "uk-offcanvas-container-animation",
          clsSidebarAnimation: "uk-offcanvas-bar-animation",
          clsMode: "uk-offcanvas",
          clsOverlay: "uk-offcanvas-overlay",
          selClose: ".uk-offcanvas-close",
          container: !1,
          swiping: !0
        },
        computed: {
          clsFlip({
            flip: t,
            clsFlip: e
          }) {
            return t ? e : "";
          },
          clsOverlay({
            overlay: t,
            clsOverlay: e
          }) {
            return t ? e : "";
          },
          clsMode({
            mode: t,
            clsMode: e
          }) {
            return `${e}-${t}`;
          },
          clsSidebarAnimation({
            mode: t,
            clsSidebarAnimation: e
          }) {
            return t === "none" || t === "reveal" ? "" : e;
          },
          clsContainerAnimation({
            mode: t,
            clsContainerAnimation: e
          }) {
            return t !== "push" && t !== "reveal" ? "" : e;
          },
          transitionElement({
            mode: t
          }) {
            return t === "reveal" ? X(this.panel) : this.panel;
          }
        },
        observe: to({
          filter: ({
            swiping: t
          }) => t
        }),
        update: {
          read() {
            this.isToggled() && !ct(this.$el) && this.hide();
          },
          events: ["resize"]
        },
        events: [{
          name: "touchmove",
          self: !0,
          passive: !1,
          filter() {
            return this.overlay;
          },
          handler(t) {
            t.cancelable && t.preventDefault();
          }
        }, {
          name: "show",
          self: !0,
          handler() {
            this.mode === "reveal" && !z(X(this.panel), this.clsMode) && (ui(this.panel, "<div>"), D(X(this.panel), this.clsMode));
            const {
              body: t,
              scrollingElement: e
            } = document;
            D(t, this.clsContainer, this.clsFlip), g(t, "touch-action", "pan-y pinch-zoom"), g(this.$el, "display", "block"), g(this.panel, "maxWidth", e.clientWidth), D(this.$el, this.clsOverlay), D(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), Pt(t), D(t, this.clsContainerAnimation), this.clsContainerAnimation && ic();
          }
        }, {
          name: "hide",
          self: !0,
          handler() {
            lt(document.body, this.clsContainerAnimation), g(document.body, "touch-action", "");
          }
        }, {
          name: "hidden",
          self: !0,
          handler() {
            this.clsContainerAnimation && nc(), this.mode === "reveal" && Be(this.panel), lt(this.panel, this.clsSidebarAnimation, this.clsMode), lt(this.$el, this.clsOverlay), g(this.$el, "display", ""), g(this.panel, "maxWidth", ""), lt(document.body, this.clsContainer, this.clsFlip);
          }
        }, {
          name: "swipeLeft swipeRight",
          handler(t) {
            this.isToggled() && C(t.type, "Left") ^ this.flip && this.hide();
          }
        }]
      };
    function ic() {
      yo().content += ",user-scalable=0";
    }
    function nc() {
      const t = yo();
      t.content = t.content.replace(/,user-scalable=0$/, "");
    }
    function yo() {
      return T('meta[name="viewport"]', document.head) || _t(document.head, '<meta name="viewport">');
    }
    var sc = {
        mixins: [Bt],
        props: {
          selContainer: String,
          selContent: String,
          minHeight: Number
        },
        data: {
          selContainer: ".uk-modal",
          selContent: ".uk-modal-dialog",
          minHeight: 150
        },
        computed: {
          container({
            selContainer: t
          }, e) {
            return ht(e, t);
          },
          content({
            selContent: t
          }, e) {
            return ht(e, t);
          }
        },
        observe: Ht({
          target: ({
            container: t,
            content: e
          }) => [t, e]
        }),
        update: {
          read() {
            return !this.content || !this.container || !ct(this.$el) ? !1 : {
              max: Math.max(this.minHeight, Pt(this.container) - (mt(this.content).height - Pt(this.$el)))
            };
          },
          write({
            max: t
          }) {
            g(this.$el, {
              minHeight: this.minHeight,
              maxHeight: t
            });
          },
          events: ["resize"]
        }
      },
      oc = {
        props: ["width", "height"],
        connected() {
          D(this.$el, "uk-responsive-width");
        },
        observe: Ht({
          target: ({
            $el: t
          }) => [t, X(t)]
        }),
        update: {
          read() {
            return ct(this.$el) && this.width && this.height ? {
              width: Me(X(this.$el)),
              height: this.height
            } : !1;
          },
          write(t) {
            Pt(this.$el, Yi.contain({
              height: this.height,
              width: this.width
            }, t).height);
          },
          events: ["resize"]
        }
      },
      rc = {
        props: {
          offset: Number
        },
        data: {
          offset: 0
        },
        connected() {
          ac(this);
        },
        disconnected() {
          lc(this);
        },
        methods: {
          async scrollTo(t) {
            t = t && T(t) || document.body, H(this.$el, "beforescroll", [this, t]) && (await _s(t, {
              offset: this.offset
            }), H(this.$el, "scrolled", [this, t]));
          }
        }
      };
    const Ue = new Set();
    function ac(t) {
      Ue.size || W(document, "click", xo), Ue.add(t);
    }
    function lc(t) {
      Ue.delete(t), Ue.size || sn(document, "click", xo);
    }
    function xo(t) {
      if (!t.defaultPrevented) for (const e of Ue) j(t.target, e.$el) && ue(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(tn(e.$el)));
    }
    var cc = {
        args: "cls",
        props: {
          cls: String,
          target: String,
          hidden: Boolean,
          margin: String,
          repeat: Boolean,
          delay: Number
        },
        data: () => ({
          cls: "",
          target: !1,
          hidden: !0,
          margin: "-1px",
          repeat: !1,
          delay: 0,
          inViewClass: "uk-scrollspy-inview"
        }),
        computed: {
          elements({
            target: t
          }, e) {
            return t ? nt(t, e) : [e];
          }
        },
        watch: {
          elements(t) {
            this.hidden && g(Te(t, `:not(.${this.inViewClass})`), "opacity", 0);
          }
        },
        connected() {
          this.elementData = new Map();
        },
        disconnected() {
          for (const [t, e] of this.elementData.entries()) lt(t, this.inViewClass, (e == null ? void 0 : e.cls) || "");
          delete this.elementData;
        },
        observe: Re({
          target: ({
            elements: t
          }) => t,
          handler(t) {
            const e = this.elementData;
            for (const {
              target: i,
              isIntersecting: s
            } of t) {
              e.has(i) || e.set(i, {
                cls: ce(i, "uk-scrollspy-class") || this.cls
              });
              const o = e.get(i);
              !this.repeat && o.show || (o.show = s);
            }
            this.$emit();
          },
          options: t => ({
            rootMargin: t.margin
          }),
          args: {
            intersecting: !1
          }
        }),
        update: [{
          write(t) {
            for (const [e, i] of this.elementData.entries()) i.show && !i.inview && !i.queued ? (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then(() => new Promise(s => setTimeout(s, this.delay))).then(() => {
              this.toggle(e, !0), setTimeout(() => {
                i.queued = !1, this.$emit();
              }, 300);
            })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1);
          }
        }],
        methods: {
          toggle(t, e) {
            var i;
            const s = this.elementData.get(t);
            if (s) {
              if ((i = s.off) == null || i.call(s), g(t, "opacity", !e && this.hidden ? 0 : ""), gt(t, this.inViewClass, e), gt(t, s.cls), /\buk-animation-/.test(s.cls)) {
                const o = () => Xi(t, "uk-animation-[\\w-]+");
                e ? s.off = tt(t, "animationcancel animationend", o) : o();
              }
              H(t, e ? "inview" : "outview"), s.inview = e, this.$update(t);
            }
          }
        }
      },
      hc = {
        props: {
          cls: String,
          closest: String,
          scroll: Boolean,
          overflow: Boolean,
          offset: Number
        },
        data: {
          cls: "uk-active",
          closest: !1,
          scroll: !1,
          overflow: !0,
          offset: 0
        },
        computed: {
          links(t, e) {
            return nt('a[href*="#"]', e).filter(i => i.hash && ue(i));
          },
          elements({
            closest: t
          }) {
            return ht(this.links, t || "*");
          }
        },
        watch: {
          links(t) {
            this.scroll && this.$create("scroll", t, {
              offset: this.offset || 0
            });
          }
        },
        observe: [Re(), En()],
        update: [{
          read() {
            const t = this.links.map(tn).filter(Boolean),
              {
                length: e
              } = t;
            if (!e || !ct(this.$el)) return !1;
            const i = jt(t, !0),
              {
                scrollTop: s,
                scrollHeight: o
              } = i,
              l = yt(i),
              c = o - l.height;
            let f = !1;
            if (s === c) f = e - 1;else {
              for (let p = 0; p < t.length && !(L(t[p]).top - l.top - this.offset > 0); p++) f = +p;
              f === !1 && this.overflow && (f = 0);
            }
            return {
              active: f
            };
          },
          write({
            active: t
          }) {
            const e = t !== !1 && !z(this.elements[t], this.cls);
            this.links.forEach(i => i.blur());
            for (let i = 0; i < this.elements.length; i++) gt(this.elements[i], this.cls, +i === t);
            e && H(this.$el, "active", [t, this.elements[t]]);
          },
          events: ["scroll", "resize"]
        }]
      },
      uc = {
        mixins: [Bt, An],
        props: {
          position: String,
          top: null,
          bottom: null,
          start: null,
          end: null,
          offset: String,
          overflowFlip: Boolean,
          animation: String,
          clsActive: String,
          clsInactive: String,
          clsFixed: String,
          clsBelow: String,
          selTarget: String,
          showOnUp: Boolean,
          targetOffset: Number
        },
        data: {
          position: "top",
          top: !1,
          bottom: !1,
          start: !1,
          end: !1,
          offset: 0,
          overflowFlip: !1,
          animation: "",
          clsActive: "uk-active",
          clsInactive: "",
          clsFixed: "uk-sticky-fixed",
          clsBelow: "uk-sticky-below",
          selTarget: "",
          showOnUp: !1,
          targetOffset: !1
        },
        computed: {
          selTarget({
            selTarget: t
          }, e) {
            return t && T(t, e) || e;
          }
        },
        connected() {
          this.start = $o(this.start || this.top), this.end = $o(this.end || this.bottom), this.placeholder = T("+ .uk-sticky-placeholder", this.$el) || T('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1);
        },
        beforeDisconnect() {
          this.isFixed && (this.hide(), lt(this.selTarget, this.clsInactive)), ko(this.$el), Gt(this.placeholder), this.placeholder = null;
        },
        observe: [Ta(), En({
          target: () => document.scrollingElement
        }), Ht({
          target: ({
            $el: t
          }) => [t, document.scrollingElement]
        })],
        events: [{
          name: "load hashchange popstate",
          el() {
            return window;
          },
          filter() {
            return this.targetOffset !== !1;
          },
          handler() {
            const {
              scrollingElement: t
            } = document;
            !location.hash || t.scrollTop === 0 || setTimeout(() => {
              const e = L(T(location.hash)),
                i = L(this.$el);
              this.isFixed && ji(e, i) && (t.scrollTop = e.top - i.height - zt(this.targetOffset, "height", this.placeholder) - zt(this.offset, "height", this.placeholder));
            });
          }
        }, {
          name: "transitionstart",
          capture: !0,
          handler() {
            this.transitionInProgress = tt(this.$el, "transitionend transitioncancel", () => this.transitionInProgress = null);
          }
        }],
        update: [{
          read({
            height: t,
            width: e,
            margin: i,
            sticky: s
          }) {
            if (this.inactive = !this.matchMedia || !ct(this.$el), this.inactive) return;
            const o = this.isFixed && !this.transitionInProgress;
            o && (So(this.selTarget), this.hide()), this.active || ({
              height: t,
              width: e
            } = L(this.$el), i = g(this.$el, "margin")), o && this.show();
            const l = zt("100vh", "height"),
              c = Pt(window),
              f = document.scrollingElement.scrollHeight - l;
            let p = this.position;
            this.overflowFlip && t > l && (p = p === "top" ? "bottom" : "top");
            const v = this.isFixed ? this.placeholder : this.$el;
            let b = zt(this.offset, "height", s ? this.$el : v);
            p === "bottom" && (t < c || this.overflowFlip) && (b += c - t);
            const E = this.overflowFlip ? 0 : Math.max(0, t + b - l),
              B = L(v).top,
              R = L(this.$el).height,
              ft = (this.start === !1 ? B : Pn(this.start, this.$el, B)) - b,
              et = this.end === !1 ? f : Math.min(f, Pn(this.end, this.$el, B + t, !0) - R - b + E);
            return s = f && !this.showOnUp && ft + b === B && et === Math.min(f, Pn("!*", this.$el, 0, !0) - R - b + E) && g(X(this.$el), "overflowY") === "visible", {
              start: ft,
              end: et,
              offset: b,
              overflow: E,
              topOffset: B,
              height: t,
              elHeight: R,
              width: e,
              margin: i,
              top: Kt(v)[0],
              sticky: s
            };
          },
          write({
            height: t,
            width: e,
            margin: i,
            offset: s,
            sticky: o
          }) {
            if ((this.inactive || o || !this.isFixed) && ko(this.$el), this.inactive) return;
            o && (t = e = i = 0, g(this.$el, {
              position: "sticky",
              top: s
            }));
            const {
              placeholder: l
            } = this;
            g(l, {
              height: t,
              width: e,
              margin: i
            }), j(l, document) || (l.hidden = !0), (o ? ln : ci)(this.$el, l);
          },
          events: ["resize"]
        }, {
          read({
            scroll: t = 0,
            dir: e = "down",
            overflow: i,
            overflowScroll: s = 0,
            start: o,
            end: l
          }) {
            const c = document.scrollingElement.scrollTop;
            return {
              dir: t <= c ? "down" : "up",
              prevDir: e,
              scroll: c,
              prevScroll: t,
              offsetParentTop: L((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
              overflowScroll: Dt(s + Dt(c, o, l) - Dt(t, o, l), 0, i)
            };
          },
          write(t, e) {
            const i = e.has("scroll"),
              {
                initTimestamp: s = 0,
                dir: o,
                prevDir: l,
                scroll: c,
                prevScroll: f = 0,
                top: p,
                start: v,
                topOffset: b,
                height: E
              } = t;
            if (c < 0 || c === f && i || this.showOnUp && !i && !this.isFixed) return;
            const B = Date.now();
            if ((B - s > 300 || o !== l) && (t.initScroll = c, t.initTimestamp = B), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - c) <= 30 && Math.abs(f - c) <= 10)) if (this.inactive || c < v || this.showOnUp && (c <= v || o === "down" && i || o === "up" && !this.isFixed && c <= b + E)) {
              if (!this.isFixed) {
                Ct.inProgress(this.$el) && p > c && (Ct.cancel(this.$el), this.hide());
                return;
              }
              this.animation && c > b ? (Ct.cancel(this.$el), Ct.out(this.$el, this.animation).then(() => this.hide(), At)) : this.hide();
            } else this.isFixed ? this.update() : this.animation && c > b ? (Ct.cancel(this.$el), this.show(), Ct.in(this.$el, this.animation).catch(At)) : (So(this.selTarget), this.show());
          },
          events: ["resize", "resizeViewport", "scroll"]
        }],
        methods: {
          show() {
            this.isFixed = !0, this.update(), this.placeholder.hidden = !1;
          },
          hide() {
            const {
              offset: t,
              sticky: e
            } = this._data;
            this.setActive(!1), lt(this.$el, this.clsFixed, this.clsBelow), e ? g(this.$el, "top", t) : g(this.$el, {
              position: "",
              top: "",
              width: "",
              marginTop: ""
            }), this.placeholder.hidden = !0, this.isFixed = !1;
          },
          update() {
            let {
              width: t,
              scroll: e = 0,
              overflow: i,
              overflowScroll: s = 0,
              start: o,
              end: l,
              offset: c,
              topOffset: f,
              height: p,
              elHeight: v,
              offsetParentTop: b,
              sticky: E
            } = this._data;
            const B = o !== 0 || e > o;
            if (!E) {
              let R = "fixed";
              e > l && (c += l - b, R = "absolute"), g(this.$el, {
                position: R,
                width: t,
                marginTop: 0
              }, "important");
            }
            i && (c -= s), g(this.$el, "top", c), this.setActive(B), gt(this.$el, this.clsBelow, e > f + (E ? Math.min(p, v) : p)), D(this.$el, this.clsFixed);
          },
          setActive(t) {
            const e = this.active;
            this.active = t, t ? (Gi(this.selTarget, this.clsInactive, this.clsActive), e !== t && H(this.$el, "active")) : (Gi(this.selTarget, this.clsActive, this.clsInactive), e !== t && H(this.$el, "inactive"));
          }
        }
      };
    function Pn(t, e, i, s) {
      if (!t) return 0;
      if (Xt(t) || N(t) && t.match(/^-?\d/)) return i + zt(t, "height", e, !0);
      {
        const o = t === !0 ? X(e) : It(t, e);
        return L(o).bottom - (s && o && j(e, o) ? O(g(o, "paddingBottom")) : 0);
      }
    }
    function $o(t) {
      return t === "true" ? !0 : t === "false" ? !1 : t;
    }
    function ko(t) {
      g(t, {
        position: "",
        top: "",
        marginTop: "",
        width: ""
      });
    }
    function So(t) {
      g(t, "transition", "0s"), requestAnimationFrame(() => g(t, "transition", ""));
    }
    function fc(t) {
      return Math.ceil(Math.max(0, ...nt("[stroke]", t).map(e => {
        try {
          return e.getTotalLength();
        } catch {
          return 0;
        }
      })));
    }
    var dc = {
      mixins: [po],
      args: "src",
      props: {
        src: String,
        icon: String,
        attributes: "list",
        strokeAnimation: Boolean
      },
      data: {
        strokeAnimation: !1
      },
      observe: [Qs({
        async handler() {
          const t = await this.svg;
          t && Eo.call(this, t);
        },
        options: {
          attributes: !0,
          attributeFilter: ["id", "class", "style"]
        }
      })],
      async connected() {
        y(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (Eo.call(this, t), this.strokeAnimation && vc(t));
      },
      methods: {
        async getSvg() {
          return ut(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" ? new Promise(t => tt(this.$el, "load", () => t(this.getSvg()))) : gc(await pc(this.src), this.icon) || Promise.reject("SVG not found.");
        }
      }
    };
    function Eo(t) {
      const {
        $el: e
      } = this;
      D(t, S(e, "class"), "uk-svg");
      for (let i = 0; i < e.style.length; i++) {
        const s = e.style[i];
        g(t, s, g(e, s));
      }
      for (const i in this.attributes) {
        const [s, o] = this.attributes[i].split(":", 2);
        S(t, s, o);
      }
      this.$el.id || _e(t, "id");
    }
    const pc = wt(async t => t ? w(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
    function gc(t, e) {
      return e && y(t, "<symbol") && (t = mc(t)[e] || t), t = T(t.substr(t.indexOf("<svg"))), (t == null ? void 0 : t.hasChildNodes()) && t;
    }
    const Io = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
      mc = wt(function (t) {
        const e = {};
        Io.lastIndex = 0;
        let i;
        for (; i = Io.exec(t);) e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
      });
    function vc(t) {
      const e = fc(t);
      e && g(t, "--uk-animation-stroke", e);
    }
    const On = ".uk-disabled *, .uk-disabled, [disabled]";
    var Co = {
        mixins: [$e],
        args: "connect",
        props: {
          connect: String,
          toggle: String,
          itemNav: String,
          active: Number,
          followFocus: Boolean,
          swiping: Boolean
        },
        data: {
          connect: "~.uk-switcher",
          toggle: "> * > :first-child",
          itemNav: !1,
          active: 0,
          cls: "uk-active",
          attrItem: "uk-switcher-item",
          selVertical: ".uk-nav",
          followFocus: !1,
          swiping: !0
        },
        computed: {
          connects({
            connect: t
          }, e) {
            return Ae(t, e);
          },
          connectChildren() {
            return this.connects.map(t => Et(t)).flat();
          },
          toggles({
            toggle: t
          }, e) {
            return nt(t, e);
          },
          children() {
            return Et(this.$el).filter(t => this.toggles.some(e => j(e, t)));
          }
        },
        watch: {
          connects(t) {
            this.swiping && g(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
          },
          connectChildren() {
            let t = Math.max(0, this.index());
            for (const e of this.connects) Et(e).forEach((i, s) => gt(i, this.cls, s === t));
            this.$emit();
          },
          toggles(t) {
            this.$emit();
            const e = this.index();
            this.show(~e ? e : t[this.active] || t[0]);
          }
        },
        connected() {
          S(this.$el, "role", "tablist");
        },
        observe: [yi({
          targets: ({
            connectChildren: t
          }) => t
        }), to({
          target: ({
            connects: t
          }) => t,
          filter: ({
            swiping: t
          }) => t
        })],
        events: [{
          name: "click keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            !q(t.current, On) && (t.type === "click" || t.keyCode === G.SPACE) && (t.preventDefault(), this.show(t.current));
          }
        }, {
          name: "keydown",
          delegate() {
            return this.toggle;
          },
          handler(t) {
            const {
                current: e,
                keyCode: i
              } = t,
              s = q(this.$el, this.selVertical);
            let o = i === G.HOME ? 0 : i === G.END ? "last" : i === G.LEFT && !s || i === G.UP && s ? "previous" : i === G.RIGHT && !s || i === G.DOWN && s ? "next" : -1;
            if (~o) {
              t.preventDefault();
              const l = this.toggles.filter(f => !q(f, On)),
                c = l[Wt(o, l, l.indexOf(e))];
              c.focus(), this.followFocus && this.show(c);
            }
          }
        }, {
          name: "click",
          el() {
            return this.connects.concat(this.itemNav ? Ae(this.itemNav, this.$el) : []);
          },
          delegate() {
            return `[${this.attrItem}],[data-${this.attrItem}]`;
          },
          handler(t) {
            ht(t.target, "a,button") && (t.preventDefault(), this.show(ce(t.current, this.attrItem)));
          }
        }, {
          name: "swipeRight swipeLeft",
          filter() {
            return this.swiping;
          },
          el() {
            return this.connects;
          },
          handler({
            type: t
          }) {
            this.show(C(t, "Left") ? "next" : "previous");
          }
        }],
        update() {
          var t;
          S(this.connects, "role", "presentation"), S(Et(this.$el), "role", "presentation");
          for (const e in this.toggles) {
            const i = this.toggles[e],
              s = (t = this.connects[0]) == null ? void 0 : t.children[e];
            S(i, "role", "tab"), s && (i.id = We(this, i, `-tab-${e}`), s.id = We(this, s, `-tabpanel-${e}`), S(i, "aria-controls", s.id), S(s, {
              role: "tabpanel",
              "aria-labelledby": i.id
            }));
          }
          S(this.$el, "aria-orientation", q(this.$el, this.selVertical) ? "vertical" : null);
        },
        methods: {
          index() {
            return J(this.children, t => z(t, this.cls));
          },
          show(t) {
            const e = this.toggles.filter(c => !q(c, On)),
              i = this.index(),
              s = Wt(!Yt(t) || y(e, t) ? t : 0, e, Wt(this.toggles[i], e)),
              o = Wt(e[s], this.toggles);
            this.children.forEach((c, f) => {
              gt(c, this.cls, o === f), S(this.toggles[f], {
                "aria-selected": o === f,
                tabindex: o === f ? null : -1
              });
            });
            const l = i >= 0 && i !== s;
            this.connects.forEach(async ({
              children: c
            }) => {
              const f = M(c).filter((p, v) => v !== o && z(p, this.cls));
              await this.toggleElement(f, !1, l), await this.toggleElement(c[o], !0, l);
            });
          }
        }
      },
      wc = {
        mixins: [Bt],
        extends: Co,
        props: {
          media: Boolean
        },
        data: {
          media: 960,
          attrItem: "uk-tab-item",
          selVertical: ".uk-tab-left,.uk-tab-right"
        },
        connected() {
          const t = z(this.$el, "uk-tab-left") ? "uk-tab-left" : z(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
          t && this.$create("toggle", this.$el, {
            cls: t,
            mode: "media",
            media: this.media
          });
        }
      };
    const bc = 32;
    var yc = {
        mixins: [An, $e],
        args: "target",
        props: {
          href: String,
          target: null,
          mode: "list",
          queued: Boolean
        },
        data: {
          href: !1,
          target: !1,
          mode: "click",
          queued: !0
        },
        computed: {
          target({
            target: t
          }, e) {
            return t = Ae(t || e.hash, e), t.length && t || [e];
          }
        },
        connected() {
          y(this.mode, "media") || (Zi(this.$el) || S(this.$el, "tabindex", "0"), !this.cls && ut(this.$el, "a") && S(this.$el, "role", "button"));
        },
        observe: yi({
          target: ({
            target: t
          }) => t
        }),
        events: [{
          name: ve,
          filter() {
            return y(this.mode, "hover");
          },
          handler(t) {
            this._preventClick = null, !(!fe(t) || re(this._showState) || this.$el.disabled) && (H(this.$el, "focus"), tt(document, ve, () => H(this.$el, "blur"), !0, e => !j(e.target, this.$el)), y(this.mode, "click") && (this._preventClick = !0));
          }
        }, {
          name: `mouseenter mouseleave ${fi} ${hn} focus blur`,
          filter() {
            return y(this.mode, "hover");
          },
          handler(t) {
            if (fe(t) || this.$el.disabled) return;
            const e = y(["mouseenter", fi, "focus"], t.type),
              i = this.isToggled(this.target);
            if (!e && (!re(this._showState) || t.type !== "blur" && q(this.$el, ":focus") || t.type === "blur" && q(this.$el, ":hover"))) {
              i === this._showState && (this._showState = null);
              return;
            }
            e && re(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
          }
        }, {
          name: "keydown",
          filter() {
            return y(this.mode, "click") && !ut(this.$el, "input");
          },
          handler(t) {
            t.keyCode === bc && (t.preventDefault(), this.$el.click());
          }
        }, {
          name: "click",
          filter() {
            return ["click", "hover"].some(t => y(this.mode, t));
          },
          handler(t) {
            let e;
            (this._preventClick || ht(t.target, 'a[href="#"], a[href=""]') || (e = ht(t.target, "a[href]")) && (!this.isToggled(this.target) || e.hash && q(this.target, e.hash))) && t.preventDefault(), !this._preventClick && y(this.mode, "click") && this.toggle();
          }
        }, {
          name: "mediachange",
          filter() {
            return y(this.mode, "media");
          },
          el() {
            return this.target;
          },
          handler(t, e) {
            e.matches ^ this.isToggled(this.target) && this.toggle();
          }
        }],
        methods: {
          async toggle(t) {
            if (!H(this.target, t || "toggle", [this])) return;
            if (Lt(this.$el, "aria-expanded") && S(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued) return this.toggleElement(this.target);
            const e = this.target.filter(s => z(s, this.clsLeave));
            if (e.length) {
              for (const s of this.target) {
                const o = y(e, s);
                this.toggleElement(s, o, o);
              }
              return;
            }
            const i = this.target.filter(this.isToggled);
            (await this.toggleElement(i, !1)) && (await this.toggleElement(this.target.filter(s => !y(i, s)), !0));
          }
        }
      },
      xc = Object.freeze({
        __proto__: null,
        Accordion: eo,
        Alert: La,
        Close: Al,
        Cover: Ha,
        Drop: oo,
        DropParentIcon: ee,
        Dropdown: oo,
        Dropnav: ro,
        FormCustom: Ga,
        Grid: Ka,
        HeightMatch: tl,
        HeightViewport: nl,
        Icon: _n,
        Img: Hl,
        Leader: Vl,
        Margin: lo,
        Marker: Pl,
        Modal: Kl,
        Nav: Ql,
        NavParentIcon: Il,
        Navbar: tc,
        NavbarParentIcon: ee,
        NavbarToggleIcon: Tl,
        Offcanvas: ec,
        OverflowAuto: sc,
        OverlayIcon: ee,
        PaginationNext: Bl,
        PaginationPrevious: Ml,
        Responsive: oc,
        Scroll: rc,
        Scrollspy: cc,
        ScrollspyNav: hc,
        SearchIcon: Cl,
        SlidenavNext: mo,
        SlidenavPrevious: mo,
        Spinner: _l,
        Sticky: uc,
        Svg: dc,
        Switcher: Co,
        Tab: wc,
        Toggle: yc,
        Totop: Ol,
        Video: io
      });
    return le(xc, (t, e) => xt.component(e, t)), ka(xt), xt;
  });
})(zo);
var Ic = zo.exports;
const _i = Ec(Ic),
  Cc = () => {
    const n = document.querySelector(".bio__container--list");
    n && n.querySelectorAll(".icon-bio-button").forEach(a => {
      a.addEventListener("click", function (h) {
        const u = a.getAttribute("data-id"),
          d = document.querySelector('.bio-content[data-id="' + u + '"]');
        d.classList.toggle("bio-content--open"), d.classList.contains("bio-content--open") ? (document.querySelector('.bio__container--list-card[data-id="' + u + '"] .icon-open-bio').style.display = "none", document.querySelector('.bio__container--list-card[data-id="' + u + '"] .icon-close-bio').style.display = "block") : (document.querySelector('.bio__container--list-card[data-id="' + u + '"] .icon-open-bio').style.display = "block", document.querySelector('.bio__container--list-card[data-id="' + u + '"] .icon-close-bio').style.display = "none");
      });
    });
  },
  _c = () => {
    const n = document.querySelector(".view-link");
    if (n) {
      const r = document.querySelector(".footer__menu-list");
      n.addEventListener("click", function (a) {
        const h = r.scrollHeight;
        r.classList.toggle("footer__menu-list--open"), r.style.height = r.classList.contains("footer__menu-list--open") ? `${h}px` : "0", n.classList.toggle("view-link--open");
      }), window.addEventListener("resize", function (a) {
        this.window.innerWidth >= 960 ? (r.classList.remove("footer__menu-list--open"), r.style.height = "auto", n.classList.remove("view-link--open"), n.disabled = !0) : (n.disabled = !1, r.style.height = r.classList.contains("footer__menu-list--open") ? `${r.scrollHeight}px` : "0");
      }, !0);
    }
  },
  Tc = () => {
    const n = document.getElementById("go-back-container");
    n !== null && n.addEventListener("click", Ac);
  },
  Ac = n => {
    history.back();
  },
  Pc = () => {
    const n = document.querySelector(".navbar-toggler"),
      r = document.querySelector(".header__top-menu"),
      a = document.querySelector(".header__bottom-menu");
    n && r && a && n.addEventListener("click", function (h) {
      r.classList.toggle("menu-open"), a.classList.toggle("menu-open"), n.classList.toggle("navbar-toggler--open");
    });
  },
  Oc = () => {
    if (document.querySelector(".news-filtering")) {
      const a = new URL(window.location.href),
        h = document.querySelector(".choose-button"),
        u = document.querySelector(".category-search"),
        d = document.querySelectorAll(".filter-item button"),
        m = document.querySelector("#newsroom-results"),
        $ = document.querySelector("#search-news"),
        k = document.querySelectorAll(".module.news"),
        x = document.querySelector(".filtering-text");
      document.querySelectorAll(".remove-filter");
      const w = document.querySelector(".module.social-media");
      h.addEventListener("click", () => {
        u.classList.toggle("active");
      }), d.forEach(M => {
        M.addEventListener("click", () => {
          M.dataset.id;
          const Y = M.textContent;
          h.textContent = Y, u.classList.remove("active");
        });
      }), $.addEventListener("click", () => {
        const M = h.textContent,
          Y = document.querySelector(".search-input").value;
        x.innerHTML = "", r(M) || M !== "" && (a.searchParams.has("category") ? a.searchParams.set("category", M) : a.searchParams.append("category", M)), Y && (a.searchParams.has("search") ? a.searchParams.set("search", Y) : a.searchParams.append("search", Y)), history.pushState({}, "", a.href), P(M, Y);
      });
      const C = window.location.protocol,
        y = window.location.hostname,
        J = C + "//" + y + "/wp-json/newsroom-rest/v1",
        P = (M, Y) => {
          r(M) && (M = "");
          let K = {
            action: "newsroom_rest",
            category: M,
            search_input: Y
          };
          M && (x.innerHTML += `<button class="remove-filter" data-type="category" data-value="${M}">
          ${M} 
          <svg class="icon icon-filter-close" aria-hidden="true">
            <use xlink:href="#icon-filter-close"></use>
          </svg>
        </button>`), Y && (x.innerHTML += `<button class="remove-filter"" data-type="text" data-value="${Y}">
          ${Y} 
          <svg class="icon icon-filter-close" aria-hidden="true">
            <use xlink:href="#icon-filter-close"></use>
          </svg>
        </button>`), w.remove(), document.querySelectorAll(".remove-filter").forEach(Q => {
            Q.addEventListener("click", () => {
              let Tt = "",
                Yt = "";
              Q.remove();
              const Ft = document.querySelector('.remove-filter[data-type="category"]'),
                oe = document.querySelector('.remove-filter[data-type="text"]');
              Ft ? Tt = Ft.getAttribute("data-value") : (h.textContent = "", a.searchParams.has("category") && a.searchParams.delete("category")), oe ? Yt = oe.getAttribute("data-value") : (document.querySelector(".search-input").value = "", a.searchParams.has("search") && a.searchParams.delete("search")), history.pushState({}, "", a.href), x.innerHTML = "", P(Tt, Yt);
            });
          });
          const St = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-WP-Nonce": newsroom_rest.apiNonce
            },
            credentials: "same-origin",
            body: JSON.stringify({
              data: K
            })
          };
          fetch(J + "/search", St).then(Q => (Q.ok || console.log("Error getting Search from API", Q), Q.json())).then(Q => {
            Q.posts !== "" ? (k.forEach(Tt => {
              Tt.style.display = "none";
            }), m.classList.add("active-results"), m.innerHTML = Q.posts) : (m.classList.remove("active-results"), m.innerHTML = "");
          }).catch(Q => {
            console.log(Q);
          });
        };
      if (a.searchParams.has("search") || a.searchParams.has("category")) {
        const M = a.searchParams.get("category"),
          Y = a.searchParams.get("search");
        P(M, Y);
      }
    }
    function r(a) {
      if (a) return !a.replace(/\s/g, "").length;
    }
  },
  {
    hasOwnProperty: Bc,
    toString: Xh
  } = Object.prototype;
function Mc(n, r) {
  return Bc.call(n, r);
}
const Nc = /\B([A-Z])/g,
  Dc = ke(n => n.replace(Nc, "-$1").toLowerCase()),
  Ho = ke(n => n.charAt(0).toUpperCase() + n.slice(1));
function Fn(n, r) {
  var a;
  return (a = n == null ? void 0 : n.startsWith) == null ? void 0 : a.call(n, r);
}
function Ut(n, r) {
  var a;
  return (a = n == null ? void 0 : n.includes) == null ? void 0 : a.call(n, r);
}
function qo(n, r) {
  var a;
  return (a = n == null ? void 0 : n.findIndex) == null ? void 0 : a.call(n, r);
}
const {
  isArray: Wn,
  from: Fo
} = Array;
function Mi(n) {
  return typeof n == "function";
}
function Ni(n) {
  return n !== null && typeof n == "object";
}
function Rn(n) {
  return Ni(n) && n === n.window;
}
function Wo(n) {
  return Un(n) === 9;
}
function Oo(n) {
  return Un(n) >= 1;
}
function jn(n) {
  return Un(n) === 1;
}
function Un(n) {
  return !Rn(n) && Ni(n) && n.nodeType;
}
function Nt(n) {
  return typeof n == "string";
}
function Ti(n) {
  return typeof n == "number";
}
function Ze(n) {
  return Ti(n) || Nt(n) && !isNaN(n - parseFloat(n));
}
function Di(n) {
  return n === void 0;
}
function ti(n) {
  const r = Number(n);
  return isNaN(r) ? !1 : r;
}
function Mt(n) {
  return parseFloat(n) || 0;
}
function at(n) {
  return V(n)[0];
}
function V(n) {
  return Oo(n) ? [n] : Array.from(n || []).filter(Oo);
}
function Lc(n) {
  if (Rn(n)) return n;
  n = at(n);
  const r = Wo(n) ? n : n == null ? void 0 : n.ownerDocument;
  return (r == null ? void 0 : r.defaultView) || window;
}
function zc(n) {
  return n[n.length - 1];
}
function Hc(n, r) {
  for (const a in n) if (r(n[a], a) === !1) return !1;
  return !0;
}
function Vn(n, r) {
  return n.reduce((a, h) => a + Mt(Mi(r) ? r(h) : h[r]), 0);
}
function se(n, r = 0, a = 1) {
  return Math.min(Math.max(ti(n) || 0, r), a);
}
function Ai() {}
function Pi(n, r, a = 0, h = !1) {
  r = V(r);
  const {
    length: u
  } = r;
  return u ? (n = Ze(n) ? ti(n) : n === "next" ? a + 1 : n === "previous" ? a - 1 : n === "last" ? u - 1 : r.indexOf(at(n)), h ? se(n, 0, u - 1) : (n %= u, n < 0 ? n + u : n)) : -1;
}
function ke(n) {
  const r = Object.create(null);
  return a => r[a] || (r[a] = n(a));
}
function it(n, r, a) {
  var h;
  if (Ni(r)) {
    for (const u in r) it(n, u, r[u]);
    return;
  }
  if (Di(a)) return (h = at(n)) == null ? void 0 : h.getAttribute(r);
  for (const u of V(n)) Mi(a) && (a = a.call(u, it(u, r))), a === null ? Ro(u, r) : u.setAttribute(r, a);
}
function qc(n, r) {
  return V(n).some(a => a.hasAttribute(r));
}
function Ro(n, r) {
  V(n).forEach(a => a.removeAttribute(r));
}
function Je(n, r) {
  for (const a of [r, `data-${r}`]) if (qc(n, a)) return it(n, a);
}
function ei(n, ...r) {
  Uo(n, r, "add");
}
function Yn(n, ...r) {
  Uo(n, r, "remove");
}
function jo(n, r) {
  return [r] = Xn(r), !!r && V(n).some(a => a.classList.contains(r));
}
function Oi(n, r, a) {
  const h = Xn(r);
  Di(a) || (a = !!a);
  for (const u of V(n)) for (const d of h) u.classList.toggle(d, a);
}
function Uo(n, r, a) {
  r = r.reduce((h, u) => h.concat(Xn(u)), []);
  for (const h of V(n)) h.classList[a](...r);
}
function Xn(n) {
  return String(n).split(/[ ,]/).filter(Boolean);
}
function Fc(n) {
  return V(n).some(r => r.offsetWidth || r.offsetHeight || r.getClientRects().length);
}
const Vo = "input,select,textarea,button",
  Wc = `${Vo},a[href],[tabindex]`;
function Gn(n) {
  var r;
  return (r = at(n)) == null ? void 0 : r.parentElement;
}
function Rc(n, r) {
  return V(n).filter(a => ii(a, r));
}
function ii(n, r) {
  return V(n).some(a => a.matches(r));
}
function Se(n, r) {
  return jn(n) ? n.closest(Fn(r, ">") ? r.slice(1) : r) : V(n).map(a => Se(a, r)).filter(Boolean);
}
function jc(n, r) {
  return Nt(r) ? !!Se(n, r) : at(r).contains(at(n));
}
function qt(n, r) {
  n = at(n);
  const a = n ? Fo(n.children) : [];
  return r ? Rc(a, r) : a;
}
function Uc(n, r) {
  return r ? V(n).indexOf(at(r)) : qt(Gn(n)).indexOf(n);
}
function Vc(n, r) {
  return at(Yo(n, at(r), "querySelector"));
}
function Jn(n, r) {
  return V(Yo(n, at(r), "querySelectorAll"));
}
const Yc = /(^|[^\\],)\s*[!>+~-]/,
  Xc = ke(n => n.match(Yc)),
  Gc = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
  Jc = ke(n => n.replace(Gc, "$1 *"));
function Yo(n, r = document, a) {
  if (!n || !Nt(n)) return n;
  if (n = Jc(n), Xc(n)) {
    const h = Zc(n);
    n = "";
    for (let u of h) {
      let d = r;
      if (u[0] === "!") {
        const m = u.substr(1).trim().split(" ");
        if (d = Se(Gn(r), m[0]), u = m.slice(1).join(" ").trim(), !u.length && h.length === 1) return d;
      }
      if (u[0] === "-") {
        const m = u.substr(1).trim().split(" "),
          $ = (d || r).previousElementSibling;
        d = ii($, u.substr(1)) ? $ : null, u = m.slice(1).join(" ");
      }
      d && (n += `${n ? "," : ""}${Qc(d)} ${u}`);
    }
    r = document;
  }
  try {
    return r[a](n);
  } catch {
    return null;
  }
}
const Kc = /.*?[^\\](?:,|$)/g,
  Zc = ke(n => n.match(Kc).map(r => r.replace(/,$/, "").trim()));
function Qc(n) {
  const r = [];
  for (; n.parentNode;) {
    const a = it(n, "id");
    if (a) {
      r.unshift(`#${th(a)}`);
      break;
    } else {
      let {
        tagName: h
      } = n;
      h !== "HTML" && (h += `:nth-child(${Uc(n) + 1})`), r.unshift(h), n = n.parentNode;
    }
  }
  return r.join(" > ");
}
function th(n) {
  return Nt(n) ? CSS.escape(n) : "";
}
function ni(...n) {
  let [r, a, h, u, d = !1] = Zn(n);
  u.length > 1 && (u = nh(u)), d != null && d.self && (u = sh(u)), h && (u = ih(h, u));
  for (const m of a) for (const $ of r) $.addEventListener(m, u, d);
  return () => Ln(r, a, u, d);
}
function Ln(...n) {
  let [r, a,, h, u = !1] = Zn(n);
  for (const d of a) for (const m of r) m.removeEventListener(d, h, u);
}
function eh(...n) {
  const [r, a, h, u, d = !1, m] = Zn(n),
    $ = ni(r, a, h, k => {
      const x = !m || m(k);
      x && ($(), u(k, x));
    }, d);
  return $;
}
function rt(n, r, a) {
  return Go(n).every(h => h.dispatchEvent(Kn(r, !0, !0, a)));
}
function Kn(n, r = !0, a = !1, h) {
  return Nt(n) && (n = new CustomEvent(n, {
    bubbles: r,
    cancelable: a,
    detail: h
  })), n;
}
function Zn(n) {
  return n[0] = Go(n[0]), Nt(n[1]) && (n[1] = n[1].split(" ")), Mi(n[2]) && n.splice(2, 0, !1), n;
}
function ih(n, r) {
  return a => {
    const h = n[0] === ">" ? Jn(n, a.currentTarget).reverse().filter(u => jc(a.target, u))[0] : Se(a.target, n);
    h && (a.current = h, r.call(this, a), delete a.current);
  };
}
function nh(n) {
  return r => Wn(r.detail) ? n(r, ...r.detail) : n(r);
}
function sh(n) {
  return function (r) {
    if (r.target === r.currentTarget || r.target === r.current) return n.call(null, r);
  };
}
function Xo(n) {
  return n && "addEventListener" in n;
}
function oh(n) {
  return Xo(n) ? n : at(n);
}
function Go(n) {
  return Wn(n) ? n.map(oh).filter(Boolean) : Nt(n) ? Jn(n) : Xo(n) ? [n] : V(n);
}
function rh(n) {
  return n.pointerType === "touch" || !!n.touches;
}
function ah(n) {
  var h, u;
  const {
    clientX: r,
    clientY: a
  } = ((h = n.touches) == null ? void 0 : h[0]) || ((u = n.changedTouches) == null ? void 0 : u[0]) || n;
  return {
    x: r,
    y: a
  };
}
const lh = {
  "animation-iteration-count": !0,
  "column-count": !0,
  "fill-opacity": !0,
  "flex-grow": !0,
  "flex-shrink": !0,
  "font-weight": !0,
  "line-height": !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  "stroke-dasharray": !0,
  "stroke-dashoffset": !0,
  widows: !0,
  "z-index": !0,
  zoom: !0
};
function I(n, r, a, h) {
  const u = V(n);
  for (const d of u) if (Nt(r)) {
    if (r = Jo(r), Di(a)) return getComputedStyle(d).getPropertyValue(r);
    d.style.setProperty(r, Ze(a) && !lh[r] ? `${a}px` : a || Ti(a) ? a : "", h);
  } else if (Wn(r)) {
    const m = {};
    for (const $ of r) m[$] = I(d, $);
    return m;
  } else Ni(r) && (h = a, Hc(r, (m, $) => I(d, $, m, h)));
  return u[0];
}
const Jo = ke(n => ch(n));
function ch(n) {
  if (Fn(n, "--")) return n;
  n = Dc(n);
  const {
    style: r
  } = document.documentElement;
  if (n in r) return n;
  for (const a of ["webkit", "moz"]) {
    const h = `-${a}-${n}`;
    if (h in r) return h;
  }
}
function hh(n, r, a = 400, h = "linear") {
  return a = Math.round(a), Promise.all(V(n).map(u => new Promise((d, m) => {
    for (const k in r) {
      const x = I(u, k);
      x === "" && I(u, k, x);
    }
    const $ = setTimeout(() => rt(u, "transitionend"), a);
    eh(u, "transitionend transitioncanceled", ({
      type: k
    }) => {
      clearTimeout($), Yn(u, "uk-transition"), I(u, {
        transitionProperty: "",
        transitionDuration: "",
        transitionTimingFunction: ""
      }), k === "transitioncanceled" ? m() : d(u);
    }, {
      self: !0
    }), ei(u, "uk-transition"), I(u, {
      transitionProperty: Object.keys(r).map(Jo).join(","),
      transitionDuration: `${a}ms`,
      transitionTimingFunction: h,
      ...r
    });
  })));
}
const Qe = {
  start: hh,
  async stop(n) {
    rt(n, "transitionend"), await Promise.resolve();
  },
  async cancel(n) {
    rt(n, "transitioncanceled"), await Promise.resolve();
  },
  inProgress(n) {
    return jo(n, "uk-transition");
  }
};
function uh(n) {
  return n = Vt(n), n.innerHTML = "", n;
}
const fh = dh("append");
function dh(n) {
  return function (r, a) {
    var u;
    const h = V(Nt(a) ? Qn(a) : a);
    return (u = Vt(r)) == null || u[n](...h), Ko(h);
  };
}
const ph = /^\s*<(\w+|!)[^>]*>/,
  gh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
function Qn(n) {
  const r = gh.exec(n);
  if (r) return document.createElement(r[1]);
  const a = document.createElement("div");
  return ph.test(n) ? a.insertAdjacentHTML("beforeend", n.trim()) : a.textContent = n, Ko(a.childNodes);
}
function Ko(n) {
  return n.length > 1 ? n : n[0];
}
function Vt(n, r) {
  return Zo(n) ? at(Qn(n)) : Vc(n, r);
}
function ts(n, r) {
  return Zo(n) ? V(Qn(n)) : Jn(n, r);
}
function Zo(n) {
  return Nt(n) && Fn(n.trim(), "<");
}
const zn = {
  width: ["left", "right"],
  height: ["top", "bottom"]
};
function A(n) {
  const r = jn(n) ? at(n).getBoundingClientRect() : {
    height: vh(n),
    width: wh(n),
    top: 0,
    left: 0
  };
  return {
    height: r.height,
    width: r.width,
    top: r.top,
    left: r.left,
    bottom: r.top + r.height,
    right: r.left + r.width
  };
}
function Bo(n, r) {
  r && I(n, {
    left: 0,
    top: 0
  });
  const a = A(n);
  if (n) {
    const {
        scrollY: h,
        scrollX: u
      } = Lc(n),
      d = {
        height: h,
        width: u
      };
    for (const m in zn) for (const $ of zn[m]) a[$] += d[m];
  }
  if (!r) return a;
  for (const h of ["left", "top"]) I(n, h, r[h] - a[h]);
}
function mh(n) {
  let {
    top: r,
    left: a
  } = Bo(n);
  const {
    ownerDocument: {
      body: h,
      documentElement: u
    },
    offsetParent: d
  } = at(n);
  let m = d || u;
  for (; m && (m === h || m === u) && I(m, "position") === "static";) m = m.parentNode;
  if (jn(m)) {
    const $ = Bo(m);
    r -= $.top + Mt(I(m, "borderTopWidth")), a -= $.left + Mt(I(m, "borderLeftWidth"));
  }
  return {
    top: r - Mt(I(n, "marginTop")),
    left: a - Mt(I(n, "marginLeft"))
  };
}
const vh = Qo("height"),
  wh = Qo("width");
function Qo(n) {
  const r = Ho(n);
  return (a, h) => {
    if (Di(h)) {
      if (Rn(a)) return a[`inner${r}`];
      if (Wo(a)) {
        const u = a.documentElement;
        return Math.max(u[`offset${r}`], u[`scroll${r}`]);
      }
      return a = at(a), h = I(a, n), h = h === "auto" ? a[`offset${r}`] : Mt(h) || 0, h - Hn(a, n);
    } else return I(a, n, !h && h !== 0 ? "" : +h + Hn(a, n) + "px");
  };
}
function Hn(n, r, a = "border-box") {
  return I(n, "boxSizing") === a ? Vn(zn[r].map(Ho), h => Mt(I(n, `padding${h}`)) + Mt(I(n, `border${h}Width`))) : 0;
}
const tr = typeof window < "u",
  $t = tr && document.dir === "rtl";
function bh(n, r, a = {}, {
  intersecting: h = !0
} = {}) {
  const u = new IntersectionObserver(h ? (d, m) => {
    d.some($ => $.isIntersecting) && r(d, m);
  } : r, a);
  for (const d of V(n)) u.observe(d);
  return u;
}
const yh = tr && window.ResizeObserver;
function xh(n, r, a = {
  box: "border-box"
}) {
  if (yh) return $h(ResizeObserver, n, r, a);
  const h = [ni(window, "load resize", r), ni(document, "loadedmetadata load", r, !0)];
  return {
    disconnect: () => h.map(u => u())
  };
}
function $h(n, r, a, h) {
  const u = new n(a);
  for (const d of V(r)) u.observe(d, h);
  return u;
}
function er(n) {
  return ir(xh, n, "resize");
}
function kh(n) {
  return ir(bh, n);
}
function Sh(n = {}) {
  return kh({
    handler: function (r, a) {
      const {
        targets: h = this.$el,
        preload: u = 5
      } = n;
      for (const d of V(Mi(h) ? h(this) : h)) ts('[loading="lazy"]', d).slice(0, u - 1).forEach(m => Ro(m, "loading"));
      for (const d of r.filter(({
        isIntersecting: m
      }) => m).map(({
        target: m
      }) => m)) a.unobserve(d);
    },
    ...n
  });
}
function ir(n, r, a) {
  return {
    observe: n,
    handler() {
      this.$emit(a);
    },
    ...r
  };
}
const nr = {
    connected() {
      ei(this.$el, this.$options.id);
    }
  },
  Eh = {
    props: {
      i18n: Object
    },
    data: {
      i18n: null
    },
    methods: {
      t(n, ...r) {
        var h, u, d;
        let a = 0;
        return ((d = ((h = this.i18n) == null ? void 0 : h[n]) || ((u = this.$options.i18n) == null ? void 0 : u[n])) == null ? void 0 : d.replace(/%s/g, () => r[a++] || "")) || "";
      }
    }
  },
  Ih = {
    props: {
      autoplay: Boolean,
      autoplayInterval: Number,
      pauseOnHover: Boolean
    },
    data: {
      autoplay: !1,
      autoplayInterval: 7e3,
      pauseOnHover: !0
    },
    connected() {
      it(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
    },
    disconnected() {
      this.stopAutoplay();
    },
    update() {
      it(this.slides, "tabindex", "-1");
    },
    events: [{
      name: "visibilitychange",
      el() {
        return document;
      },
      filter() {
        return this.autoplay;
      },
      handler() {
        document.hidden ? this.stopAutoplay() : this.startAutoplay();
      }
    }],
    methods: {
      startAutoplay() {
        this.stopAutoplay(), this.interval = setInterval(() => {
          this.stack.length || this.draggable && ii(this.$el, ":focus-within") || this.pauseOnHover && ii(this.$el, ":hover") || this.show("next");
        }, this.autoplayInterval);
      },
      stopAutoplay() {
        clearInterval(this.interval);
      }
    }
  },
  Mn = {
    passive: !1,
    capture: !0
  },
  Mo = {
    passive: !0,
    capture: !0
  },
  Ch = "touchstart mousedown",
  Nn = "touchmove mousemove",
  No = "touchend touchcancel mouseup click input scroll",
  _h = {
    props: {
      draggable: Boolean
    },
    data: {
      draggable: !0,
      threshold: 10
    },
    created() {
      for (const n of ["start", "move", "end"]) {
        const r = this[n];
        this[n] = a => {
          const h = ah(a).x * ($t ? -1 : 1);
          this.prevPos = h === this.pos ? this.prevPos : this.pos, this.pos = h, r(a);
        };
      }
    },
    events: [{
      name: Ch,
      passive: !0,
      delegate() {
        return `${this.selList} > *`;
      },
      handler(n) {
        !this.draggable || !rh(n) && Th(n.target) || Se(n.target, Vo) || n.button > 0 || this.length < 2 || this.start(n);
      }
    }, {
      name: "dragstart",
      handler(n) {
        n.preventDefault();
      }
    }, {
      name: Nn,
      el() {
        return this.list;
      },
      handler: Ai,
      ...Mn
    }],
    methods: {
      start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, ni(document, Nn, this.move, Mn), ni(document, No, this.end, Mo), I(this.list, "userSelect", "none");
      },
      move(n) {
        const r = this.pos - this.drag;
        if (r === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(r) < this.threshold) return;
        I(this.list, "pointerEvents", "none"), n.cancelable && n.preventDefault(), this.dragging = !0, this.dir = r < 0 ? 1 : -1;
        let {
            slides: a,
            prevIndex: h
          } = this,
          u = Math.abs(r),
          d = this.getIndex(h + this.dir),
          m = this._getDistance(h, d);
        for (; d !== h && u > m;) this.drag -= m * this.dir, h = d, u -= m, d = this.getIndex(h + this.dir), m = this._getDistance(h, d);
        this.percent = u / m;
        const $ = a[h],
          k = a[d],
          x = this.index !== d,
          w = h === d;
        let C;
        for (const y of [this.index, this.prevIndex]) Ut([d, h], y) || (rt(a[y], "itemhidden", [this]), w && (C = !0, this.prevIndex = h));
        (this.index === h && this.prevIndex !== h || C) && rt(a[this.index], "itemshown", [this]), x && (this.prevIndex = h, this.index = d, !w && rt($, "beforeitemhide", [this]), rt(k, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), $, !w && k), x && (!w && rt($, "itemhide", [this]), rt(k, "itemshow", [this]));
      },
      end() {
        if (Ln(document, Nn, this.move, Mn), Ln(document, No, this.end, Mo), this.dragging) if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;else {
          const n = ($t ? this.dir * ($t ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
          this.index = n ? this.index : this.prevIndex, n && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !n || this.dir < 0 && n ? "next" : "previous", !0);
        }
        I(this.list, {
          userSelect: "",
          pointerEvents: ""
        }), this.drag = this.percent = null;
      },
      _getDistance(n, r) {
        return this._getTransitioner(n, n !== r && r).getDistance() || this.slides[n].offsetWidth;
      }
    }
  };
function Th(n) {
  return I(n, "userSelect") !== "none" && Fo(n.childNodes).some(r => r.nodeType === 3 && r.textContent.trim());
}
function qn(n, r = n.$el, a = "") {
  if (r.id) return r.id;
  let h = `${n.$options.id}-${n._uid}${a}`;
  return Vt(`#${h}`) && (h = qn(n, r, `${a}-2`)), h;
}
const Xe = {
    TAB: 9,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  },
  Ah = {
    i18n: {
      next: "Next slide",
      previous: "Previous slide",
      slideX: "Slide %s",
      slideLabel: "%s of %s",
      role: "String"
    },
    data: {
      selNav: !1,
      role: "region"
    },
    computed: {
      nav({
        selNav: n
      }, r) {
        return Vt(n, r);
      },
      navChildren() {
        return qt(this.nav);
      },
      selNavItem({
        attrItem: n
      }) {
        return `[${n}],[data-${n}]`;
      },
      navItems(n, r) {
        return ts(this.selNavItem, r);
      }
    },
    watch: {
      nav(n, r) {
        it(n, "role", "tablist"), r && this.$emit();
      },
      list(n) {
        it(n, "role", "presentation");
      },
      navChildren(n) {
        it(n, "role", "presentation");
      },
      navItems(n) {
        for (const r of n) {
          const a = Je(r, this.attrItem),
            h = Vt("a,button", r) || r;
          let u,
            d = null;
          if (Ze(a)) {
            const m = ti(a),
              $ = this.slides[m];
            $ && ($.id || ($.id = qn(this, $, `-item-${a}`)), d = $.id), u = this.t("slideX", Mt(a) + 1), it(h, "role", "tab");
          } else this.list && (this.list.id || (this.list.id = qn(this, this.list, "-items")), d = this.list.id), u = this.t(a);
          it(h, {
            "aria-controls": d,
            "aria-label": it(h, "aria-label") || u
          });
        }
      },
      slides(n) {
        n.forEach((r, a) => it(r, {
          role: this.nav ? "tabpanel" : "group",
          "aria-label": this.t("slideLabel", a + 1, this.length),
          "aria-roledescription": this.nav ? null : "slide"
        }));
      },
      length(n) {
        const r = this.navChildren.length;
        if (this.nav && n !== r) {
          uh(this.nav);
          for (let a = 0; a < n; a++) fh(this.nav, `<li ${this.attrItem}="${a}"><a href></a></li>`);
        }
      }
    },
    connected() {
      it(this.$el, {
        role: this.role,
        "aria-roledescription": "carousel"
      });
    },
    update: [{
      write() {
        this.navItems.concat(this.nav).forEach(n => n && (n.hidden = !this.maxIndex)), this.updateNav();
      },
      events: ["resize"]
    }],
    events: [{
      name: "click keydown",
      delegate() {
        return this.selNavItem;
      },
      handler(n) {
        Se(n.target, "a,button") && (n.type === "click" || n.keyCode === Xe.SPACE) && (n.preventDefault(), this.show(Je(n.current, this.attrItem)));
      }
    }, {
      name: "itemshow",
      handler: "updateNav"
    }, {
      name: "keydown",
      delegate() {
        return this.selNavItem;
      },
      handler(n) {
        const {
            current: r,
            keyCode: a
          } = n,
          h = Je(r, this.attrItem);
        if (!Ze(h)) return;
        let u = a === Xe.HOME ? 0 : a === Xe.END ? "last" : a === Xe.LEFT ? "previous" : a === Xe.RIGHT ? "next" : -1;
        ~u && (n.preventDefault(), this.show(u));
      }
    }],
    methods: {
      updateNav() {
        const n = this.getValidIndex();
        for (const r of this.navItems) {
          const a = Je(r, this.attrItem),
            h = Vt("a,button", r) || r;
          if (Ze(a)) {
            const d = ti(a) === n;
            Oi(r, this.clsActive, d), it(h, {
              "aria-selected": d,
              tabindex: d ? null : -1
            }), d && h && ii(Gn(r), ":focus-within") && h.focus();
          } else Oi(r, "uk-invisible", this.finite && (a === "previous" && n === 0 || a === "next" && n >= this.maxIndex));
        }
      }
    }
  },
  sr = {
    mixins: [Ih, _h, Ah, Eh],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number
    },
    data: () => ({
      easing: "ease",
      finite: !1,
      velocity: 1,
      index: 0,
      prevIndex: -1,
      stack: [],
      percent: 0,
      clsActive: "uk-active",
      clsActivated: !1,
      Transitioner: !1,
      transitionOptions: {}
    }),
    connected() {
      this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
    },
    disconnected() {
      Yn(this.slides, this.clsActive);
    },
    computed: {
      duration({
        velocity: n
      }, r) {
        return or(r.offsetWidth / n);
      },
      list({
        selList: n
      }, r) {
        return Vt(n, r);
      },
      maxIndex() {
        return this.length - 1;
      },
      slides() {
        return qt(this.list);
      },
      length() {
        return this.slides.length;
      }
    },
    watch: {
      slides(n, r) {
        r && this.$emit();
      }
    },
    observe: er(),
    methods: {
      show(n, r = !1) {
        var w;
        if (this.dragging || !this.length) return;
        const {
            stack: a
          } = this,
          h = r ? 0 : a.length,
          u = () => {
            a.splice(h, 1), a.length && this.show(a.shift(), !0);
          };
        if (a[r ? "unshift" : "push"](n), !r && a.length > 1) {
          a.length === 2 && ((w = this._transitioner) == null || w.forward(Math.min(this.duration, 200)));
          return;
        }
        const d = this.getIndex(this.index),
          m = jo(this.slides, this.clsActive) && this.slides[d],
          $ = this.getIndex(n, this.index),
          k = this.slides[$];
        if (m === k) {
          u();
          return;
        }
        if (this.dir = Ph(n, d), this.prevIndex = d, this.index = $, m && !rt(m, "beforeitemhide", [this]) || !rt(k, "beforeitemshow", [this, m])) {
          this.index = this.prevIndex, u();
          return;
        }
        const x = this._show(m, k, r).then(() => {
          m && rt(m, "itemhidden", [this]), rt(k, "itemshown", [this]), a.shift(), this._transitioner = null, requestAnimationFrame(() => a.length && this.show(a.shift(), !0));
        });
        return m && rt(m, "itemhide", [this]), rt(k, "itemshow", [this]), x;
      },
      getIndex(n = this.index, r = this.index) {
        return se(Pi(n, this.slides, r, this.finite), 0, Math.max(0, this.maxIndex));
      },
      getValidIndex(n = this.index, r = this.prevIndex) {
        return this.getIndex(n, r);
      },
      _show(n, r, a) {
        if (this._transitioner = this._getTransitioner(n, r, this.dir, {
          easing: a ? r.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
          ...this.transitionOptions
        }), !a && !n) return this._translate(1), Promise.resolve();
        const {
          length: h
        } = this.stack;
        return this._transitioner[h > 1 ? "forward" : "show"](h > 1 ? Math.min(this.duration, 75 + 75 / (h - 1)) : this.duration, this.percent);
      },
      _translate(n, r = this.prevIndex, a = this.index) {
        const h = this._getTransitioner(r === a ? !1 : r, a);
        return h.translate(n), h;
      },
      _getTransitioner(n = this.prevIndex, r = this.index, a = this.dir || 1, h = this.transitionOptions) {
        return new this.Transitioner(Ti(n) ? this.slides[n] : n, Ti(r) ? this.slides[r] : r, a * ($t ? -1 : 1), h);
      }
    }
  };
function Ph(n, r) {
  return n === "next" ? 1 : n === "previous" || n < r ? -1 : 1;
}
function or(n) {
  return .5 * n + 300;
}
const rr = {
    update: {
      write() {
        if (this.stack.length || this.dragging) return;
        const n = this.getValidIndex(this.index);
        !~this.prevIndex || this.index !== n ? this.show(n) : this._translate(1, this.prevIndex, this.index);
      },
      events: ["resize"]
    }
  },
  ar = {
    observe: Sh({
      target: ({
        slides: n
      }) => n,
      targets: n => n.getAdjacentSlides()
    })
  },
  lr = {
    slide: {
      show(n) {
        return [{
          transform: U(n * -100)
        }, {
          transform: U()
        }];
      },
      percent(n) {
        return Ke(n);
      },
      translate(n, r) {
        return [{
          transform: U(r * -100 * n)
        }, {
          transform: U(r * 100 * (1 - n))
        }];
      }
    }
  };
function Ke(n) {
  return Math.abs(I(n, "transform").split(",")[4] / n.offsetWidth) || 0;
}
function U(n = 0, r = "%") {
  return n += n ? r : "", `translate3d(${n}, 0, 0)`;
}
function Do(n) {
  return `scale3d(${n}, ${n}, 1)`;
}
function Oh(n, r, a, {
  center: h,
  easing: u,
  list: d
}) {
  const m = n ? Ge(n, d, h) : Ge(r, d, h) + A(r).width * a,
    $ = r ? Ge(r, d, h) : m + A(n).width * a * ($t ? -1 : 1);
  let k;
  return {
    dir: a,
    show(x, w = 0, C) {
      const y = C ? "linear" : u;
      return x -= Math.round(x * se(w, -1, 1)), this.translate(w), w = n ? w : se(w, 0, 1), Dn(this.getItemIn(), "itemin", {
        percent: w,
        duration: x,
        timing: y,
        dir: a
      }), n && Dn(this.getItemIn(!0), "itemout", {
        percent: 1 - w,
        duration: x,
        timing: y,
        dir: a
      }), new Promise(J => {
        k || (k = J), Qe.start(d, {
          transform: U(-$ * ($t ? -1 : 1), "px")
        }, x, y).then(k, Ai);
      });
    },
    cancel() {
      return Qe.cancel(d);
    },
    reset() {
      I(d, "transform", "");
    },
    async forward(x, w = this.percent()) {
      return await this.cancel(), this.show(x, w, !0);
    },
    translate(x) {
      const w = this.getDistance() * a * ($t ? -1 : 1);
      I(d, "transform", U(se(-$ + (w - w * x), -Li(d), A(d).width) * ($t ? -1 : 1), "px"));
      const C = this.getActives(),
        y = this.getItemIn(),
        J = this.getItemIn(!0);
      x = n ? se(x, -1, 1) : 0;
      for (const P of qt(d)) {
        const M = Ut(C, P),
          Y = P === y,
          K = P === J,
          kt = Y || !K && (M || a * ($t ? -1 : 1) === -1 ^ Bi(P, d) > Bi(n || r));
        Dn(P, `itemtranslate${kt ? "in" : "out"}`, {
          dir: a,
          percent: K ? 1 - x : Y ? x : M ? 1 : 0
        });
      }
    },
    percent() {
      return Math.abs((I(d, "transform").split(",")[4] * ($t ? -1 : 1) + m) / ($ - m));
    },
    getDistance() {
      return Math.abs($ - m);
    },
    getItemIn(x = !1) {
      let w = this.getActives(),
        C = Lo(d, Ge(r || n, d, h));
      if (x) {
        const y = w;
        w = C, C = y;
      }
      return C[qo(C, y => !Ut(w, y))];
    },
    getActives() {
      return Lo(d, Ge(n || r, d, h));
    }
  };
}
function Ge(n, r, a) {
  const h = Bi(n, r);
  return a ? h - Bh(n, r) : Math.min(h, cr(r));
}
function cr(n) {
  return Math.max(0, Li(n) - A(n).width);
}
function Li(n) {
  return Vn(qt(n), r => A(r).width);
}
function Bh(n, r) {
  return A(r).width / 2 - A(n).width / 2;
}
function Bi(n, r) {
  return n && (mh(n).left + ($t ? A(n).width - A(r).width : 0)) * ($t ? -1 : 1) || 0;
}
function Lo(n, r) {
  r -= 1;
  const a = A(n).width,
    h = r + a + 2;
  return qt(n).filter(u => {
    const d = Bi(u, n),
      m = d + Math.min(A(u).width, a);
    return d >= r && m <= h;
  });
}
function Dn(n, r, a) {
  rt(n, Kn(r, !1, !1, a));
}
const Mh = {
  mixins: [nr, sr, rr, ar],
  props: {
    center: Boolean,
    sets: Boolean
  },
  data: {
    center: !1,
    sets: !1,
    attrItem: "uk-slider-item",
    selList: ".uk-slider-items",
    selNav: ".uk-slider-nav",
    clsContainer: "uk-slider-container",
    Transitioner: Oh
  },
  computed: {
    avgWidth() {
      return Li(this.list) / this.length;
    },
    finite({
      finite: n
    }) {
      return n || Nh(this.list, this.center);
    },
    maxIndex() {
      if (!this.finite || this.center && !this.sets) return this.length - 1;
      if (this.center) return zc(this.sets);
      let n = 0;
      const r = cr(this.list),
        a = qo(this.slides, h => {
          if (n >= r) return !0;
          n += A(h).width;
        });
      return ~a ? a : this.length - 1;
    },
    sets({
      sets: n
    }) {
      if (!n) return;
      let r = 0;
      const a = [],
        h = A(this.list).width;
      for (let u = 0; u < this.length; u++) {
        const d = A(this.slides[u]).width;
        r + d > h && (r = 0), this.center ? r < h / 2 && r + d + A(Pi(+u + 1, this.slides)).width / 2 > h / 2 && (a.push(+u), r = h / 2 - d / 2) : r === 0 && a.push(Math.min(+u, this.maxIndex)), r += d;
      }
      if (a.length) return a;
    },
    transitionOptions() {
      return {
        center: this.center,
        list: this.list
      };
    },
    slides() {
      return qt(this.list).filter(Fc);
    }
  },
  connected() {
    Oi(this.$el, this.clsContainer, !Vt(`.${this.clsContainer}`, this.$el));
  },
  observe: er({
    target: ({
      slides: n
    }) => n
  }),
  update: {
    write() {
      for (const n of this.navItems) {
        const r = ti(Je(n, this.attrItem));
        r !== !1 && (n.hidden = !this.maxIndex || r > this.maxIndex || this.sets && !Ut(this.sets, r));
      }
      this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)), this.updateActiveClasses();
    },
    events: ["resize"]
  },
  events: {
    beforeitemshow(n) {
      !this.dragging && this.sets && this.stack.length < 2 && !Ut(this.sets, this.index) && (this.index = this.getValidIndex());
      const r = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
      if (!this.dragging && r > 1) {
        for (let h = 0; h < r; h++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
        n.preventDefault();
        return;
      }
      const a = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
      this.duration = or(this.avgWidth / this.velocity) * (A(this.slides[a]).width / this.avgWidth), this.reorder();
    },
    itemshow() {
      ~this.prevIndex && ei(this._getTransitioner().getItemIn(), this.clsActive);
    },
    itemshown() {
      this.updateActiveClasses();
    }
  },
  methods: {
    reorder() {
      if (this.finite) {
        I(this.slides, "order", "");
        return;
      }
      const n = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
      if (this.slides.forEach((u, d) => I(u, "order", this.dir > 0 && d < n ? 1 : this.dir < 0 && d >= this.index ? -1 : "")), !this.center) return;
      const r = this.slides[n];
      let a = A(this.list).width / 2 - A(r).width / 2,
        h = 0;
      for (; a > 0;) {
        const u = this.getIndex(--h + n, n),
          d = this.slides[u];
        I(d, "order", u > n ? -2 : -1), a -= A(d).width;
      }
    },
    updateActiveClasses() {
      const n = this._getTransitioner(this.index).getActives(),
        r = [this.clsActive, (!this.sets || Ut(this.sets, Mt(this.index))) && this.clsActivated || ""];
      for (const a of this.slides) {
        const h = Ut(n, a);
        Oi(a, r, h), it(a, "aria-hidden", !h);
        for (const u of ts(Wc, a)) Mc(u, "_tabindex") || (u._tabindex = it(u, "tabindex")), it(u, "tabindex", h ? u._tabindex : -1);
      }
    },
    getValidIndex(n = this.index, r = this.prevIndex) {
      if (n = this.getIndex(n, r), !this.sets) return n;
      let a;
      do {
        if (Ut(this.sets, n)) return n;
        a = n, n = this.getIndex(n + this.dir, r);
      } while (n !== a);
      return n;
    },
    getAdjacentSlides() {
      const {
          width: n
        } = A(this.list),
        r = -n,
        a = n * 2,
        h = A(this.slides[this.index]).width,
        u = this.center ? n / 2 - h / 2 : 0,
        d = new Set();
      for (const m of [-1, 1]) {
        let $ = u + (m > 0 ? h : 0),
          k = 0;
        do {
          const x = this.slides[this.getIndex(this.index + m + k++ * m)];
          $ += A(x).width * m, d.add(x);
        } while (this.length > k && $ > r && $ < a);
      }
      return Array.from(d);
    }
  }
};
function Nh(n, r) {
  if (!n || n.length < 2) return !0;
  const {
    width: a
  } = A(n);
  if (!r) return Math.ceil(Li(n)) < Math.trunc(a + Dh(n));
  const h = qt(n),
    u = Math.trunc(a / 2);
  for (const d in h) {
    const m = h[d],
      $ = A(m).width,
      k = new Set([m]);
    let x = 0;
    for (const w of [-1, 1]) {
      let C = $ / 2,
        y = 0;
      for (; C < u;) {
        const J = h[Pi(+d + w + y++ * w, h)];
        if (k.has(J)) return !0;
        C += A(J).width, k.add(J);
      }
      x = Math.max(x, $ / 2 + A(h[Pi(+d + w, h)]).width / 2 - (C - u));
    }
    if (x > Vn(h.filter(w => !k.has(w)), w => A(w).width)) return !0;
  }
  return !1;
}
function Dh(n) {
  return Math.max(0, ...qt(n).map(r => A(r).width));
}
function Lh(n, r, a, {
  animation: h,
  easing: u
}) {
  const {
      percent: d,
      translate: m,
      show: $ = Ai
    } = h,
    k = $(a);
  let x;
  return {
    dir: a,
    show(w, C = 0, y) {
      const J = y ? "linear" : u;
      return w -= Math.round(w * se(C, -1, 1)), this.translate(C), Ci(r, "itemin", {
        percent: C,
        duration: w,
        timing: J,
        dir: a
      }), Ci(n, "itemout", {
        percent: 1 - C,
        duration: w,
        timing: J,
        dir: a
      }), new Promise(P => {
        x || (x = P), Promise.all([Qe.start(r, k[1], w, J), Qe.start(n, k[0], w, J)]).then(() => {
          this.reset(), x();
        }, Ai);
      });
    },
    cancel() {
      return Qe.cancel([r, n]);
    },
    reset() {
      for (const w in k[0]) I([r, n], w, "");
    },
    async forward(w, C = this.percent()) {
      return await this.cancel(), this.show(w, C, !0);
    },
    translate(w) {
      this.reset();
      const C = m(w, a);
      I(r, C[1]), I(n, C[0]), Ci(r, "itemtranslatein", {
        percent: w,
        dir: a
      }), Ci(n, "itemtranslateout", {
        percent: 1 - w,
        dir: a
      });
    },
    percent() {
      return d(n || r, r, a);
    },
    getDistance() {
      return n == null ? void 0 : n.offsetWidth;
    }
  };
}
function Ci(n, r, a) {
  rt(n, Kn(r, !1, !1, a));
}
const zh = {
    mixins: [sr],
    props: {
      animation: String
    },
    data: {
      animation: "slide",
      clsActivated: "uk-transition-active",
      Animations: lr,
      Transitioner: Lh
    },
    computed: {
      animation({
        animation: n,
        Animations: r
      }) {
        return {
          ...(r[n] || r.slide),
          name: n
        };
      },
      transitionOptions() {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      beforeitemshow({
        target: n
      }) {
        ei(n, this.clsActive);
      },
      itemshown({
        target: n
      }) {
        ei(n, this.clsActivated);
      },
      itemhidden({
        target: n
      }) {
        Yn(n, this.clsActive, this.clsActivated);
      }
    }
  },
  Hh = {
    ...lr,
    fade: {
      show() {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent(n) {
        return 1 - I(n, "opacity");
      },
      translate(n) {
        return [{
          opacity: 1 - n,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show() {
        return [{
          opacity: 0,
          transform: Do(1 + .5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent(n) {
        return 1 - I(n, "opacity");
      },
      translate(n) {
        return [{
          opacity: 1 - n,
          transform: Do(1 + .5 * n),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show(n) {
        return n < 0 ? [{
          transform: U(30),
          zIndex: -1
        }, {
          transform: U(),
          zIndex: 0
        }] : [{
          transform: U(-100),
          zIndex: 0
        }, {
          transform: U(),
          zIndex: -1
        }];
      },
      percent(n, r, a) {
        return a < 0 ? 1 - Ke(r) : Ke(n);
      },
      translate(n, r) {
        return r < 0 ? [{
          transform: U(30 * n),
          zIndex: -1
        }, {
          transform: U(-100 * (1 - n)),
          zIndex: 0
        }] : [{
          transform: U(-n * 100),
          zIndex: 0
        }, {
          transform: U(30 * (1 - n)),
          zIndex: -1
        }];
      }
    },
    push: {
      show(n) {
        return n < 0 ? [{
          transform: U(100),
          zIndex: 0
        }, {
          transform: U(),
          zIndex: -1
        }] : [{
          transform: U(-30),
          zIndex: -1
        }, {
          transform: U(),
          zIndex: 0
        }];
      },
      percent(n, r, a) {
        return a > 0 ? 1 - Ke(r) : Ke(n);
      },
      translate(n, r) {
        return r < 0 ? [{
          transform: U(n * 100),
          zIndex: 0
        }, {
          transform: U(-30 * (1 - n)),
          zIndex: -1
        }] : [{
          transform: U(-30 * n),
          zIndex: -1
        }, {
          transform: U(100 * (1 - n)),
          zIndex: 0
        }];
      }
    }
  },
  qh = {
    mixins: [nr, zh, rr, ar],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: "16:9",
      minHeight: !1,
      maxHeight: !1,
      selList: ".uk-slideshow-items",
      attrItem: "uk-slideshow-item",
      selNav: ".uk-slideshow-nav",
      Animations: Hh
    },
    update: {
      read() {
        if (!this.list) return !1;
        let [n, r] = this.ratio.split(":").map(Number);
        return r = r * this.list.offsetWidth / n || 0, this.minHeight && (r = Math.max(this.minHeight, r)), this.maxHeight && (r = Math.min(this.maxHeight, r)), {
          height: r - Hn(this.list, "height", "content-box")
        };
      },
      write({
        height: n
      }) {
        n > 0 && I(this.list, "minHeight", n);
      },
      events: ["resize"]
    },
    methods: {
      getAdjacentSlides() {
        return [1, -1].map(n => this.slides[this.getIndex(this.index + n)]);
      }
    }
  },
  Fh = [{
    name: "slider",
    component: Mh
  }, {
    name: "slideshow",
    component: qh
  }];
Fh.forEach(({
  name: n,
  component: r
}) => {
  _i.component(n, r);
});
const Wh = () => {
    const n = document.querySelector(".stop-autplay");
    _i.util.on(".uk-slider-items", "beforeitemshow", function (r) {
      parseInt(r.target.dataset.slideIndex) + 1;
    }), n && n.addEventListener("click", function () {
      n.classList.toggle("paused"), n.classList.contains("paused") ? _i.slider(element).stopAutoplay() : _i.slider(element).startAutoplay();
    });
  },
  Rh = () => {
    const r = document.querySelectorAll(".timeline-item"),
      a = document.querySelectorAll(".show-timeline-item__content");
    a.length > 0 && r.length > 0 && (a.forEach(u => {
      u.addEventListener("click", function (d) {
        u.classList.toggle("timeline-open");
        const m = u.getAttribute("data-id");
        document.querySelector('.timeline-item__container[data-id="' + m + '"]').classList.toggle("timeline-item__container--open");
      });
    }), (() => {
      let u = 0;
      r.forEach((d, m) => {
        u < 5 ? (d.setAttribute("data-visible", !0), u++) : d.setAttribute("data-visible", !1);
      });
    })());
  },
  jh = () => {
    const n = document.querySelector(".sixty-forty");
    if (n) {
      let a = document.querySelector(".sixty-forty__groups.cell-1").offsetHeight,
        h = document.querySelector(".sixty-forty__groups.cell-2").offsetHeight;
      const u = document.createElement("div");
      u.className = "white-background";
      const d = document.createElement("div");
      d.className = "grey-background", n.appendChild(u), n.appendChild(d), document.querySelector(".white-background"), document.querySelector(".grey-background"), r(a, h), window.addEventListener("resize", () => {
        a = document.querySelector(".sixty-forty__groups.cell-1").offsetHeight, h = document.querySelector(".sixty-forty__groups.cell-2").offsetHeight, r(a, h);
      });
    }
    function r(a, h) {
      const u = document.querySelector(".white-background"),
        d = document.querySelector(".grey-background");
      window.innerWidth < 960 ? (u.style.height = parseInt(a) + 200 + "px", d.style.height = parseInt(h) + 30 + "px") : (u.style.height = parseInt(a) + 60 + "px", d.style.height = parseInt(h) + 20 + "px");
    }
  },
  Uh = () => {
    const n = document.querySelector(".header");
    if (!n) return;
    let r,
      a = 0,
      h = 10,
      u = n.offsetHeight;
    window.addEventListener("scroll", function () {
      r = !0;
    }), setInterval(function () {
      r && (d(), r = !1);
    }, 10);
    function d() {
      let m = window.scrollY;
      Math.abs(a - m) <= h || (m > a && m > u ? (n.classList.add("header--scrolling-up"), n.classList.remove("header--scrolling-down")) : m + window.innerHeight < document.body.offsetHeight && (n.classList.remove("header--scrolling-up"), n.classList.add("header--scrolling-down")), a = m);
    }
  },
  Vh = () => {
    (function () {
      var n = ["/home/default.aspx", "/who-we-are/default.aspx", "/who-we-are/default.aspx#section=map", "/who-we-are/default.aspx#section=history", "/who-we-are/default.aspx#section=values", "/who-we-are/default.aspx#section=community", "/who-we-are/default.aspx#section=executive", "/what-we-do/default.aspx", "/what-we-do/default.aspx#section=supply", "/what-we-do/default.aspx#section=technology", "/careers/default.aspx", "/careers/default.aspx#section=employees", "/careers/default.aspx#section=development", "/careers/default.aspx#section=diversity", "/careers/default.aspx#section=benefits", "/newsroom/default.aspx"],
        r = ["/", "/our-company/", "/our-company/", "/our-company/", "/our-company/", "/community-strong/", "/our-company/", "/what-we-do/", "/logistics/", "/what-we-do/", "/join-us/", "/join-us/", "/join-us/", "/join-us/", "/join-us/", "/newsroom/"];
      n.forEach(function (a, h) {
        window.location.hash === "" ? window.location.pathname === a && (window.location.href = r[h]) : window.location.pathname + window.location.hash === a && (window.location.href = r[h]);
      });
    })();
  },
  Yh = () => {
    document.addEventListener("DOMContentLoaded", function () {
      const n = document.querySelector("#secondary-menu .navbar-nav");
      if (!n) return;
      const r = n.querySelectorAll("li.menu-item-has-children");
      function a(h = null) {
        r.forEach(u => {
          if (u !== h) {
            u.classList.remove("is-open");
            const d = u.querySelector(".submenu-toggle"),
              m = u.querySelector(":scope > .dropdown-menu");
            d && d.setAttribute("aria-expanded", "false"), m && m.setAttribute("hidden", "");
          }
        });
      }
      r.forEach((h, u) => {
        const d = h.querySelector(":scope > a"),
          m = h.querySelector(":scope > .dropdown-menu");
        if (!d || !m) return;
        if (m.id || (m.id = `submenu-${d.textContent.trim().toLowerCase().replace(/\s+/g, "-")}-${u}`), !h.querySelector(":scope > .menu-item__header")) {
          const w = document.createElement("span");
          w.className = "menu-item__header", d.after(w), w.appendChild(d);
        }
        const $ = h.querySelector(":scope > .menu-item__header"),
          k = document.createElement("button");
        k.className = "submenu-toggle", k.type = "button", k.setAttribute("aria-expanded", "false"), k.setAttribute("aria-controls", m.id), k.setAttribute("aria-label", `Toggle submenu for ${d.textContent.trim()}`), $.appendChild(k), m.setAttribute("role", "menu"), m.setAttribute("hidden", "");
        function x(w) {
          (typeof w == "boolean" ? w : !h.classList.contains("is-open")) ? (a(h), h.classList.add("is-open"), k.setAttribute("aria-expanded", "true"), m.removeAttribute("hidden")) : (h.classList.remove("is-open"), k.setAttribute("aria-expanded", "false"), m.setAttribute("hidden", ""));
        }
        k.addEventListener("click", w => {
          w.stopPropagation(), x();
        }), d.addEventListener("click", w => {
          h.classList.contains("is-open") || (w.preventDefault(), x(!0));
        }), d.addEventListener("keydown", w => {
          (w.key === "Enter" || w.key === " ") && (h.classList.contains("is-open") ? (w.preventDefault(), window.location.href = d.href) : (w.preventDefault(), x(!0))), w.key === "Escape" && (w.preventDefault(), x(!1), d.focus());
        }), k.addEventListener("keydown", w => {
          (w.key === "Enter" || w.key === " ") && (w.preventDefault(), x()), w.key === "Escape" && (x(!1), d.focus());
        });
      }), document.addEventListener("click", h => {
        n.contains(h.target) || a();
      }), document.addEventListener("keydown", h => {
        h.key === "Escape" && a();
      });
    });
  };
Yh();
_c();
Pc();
Tc();
Oc();
Wh();
Rh();
Cc();
jh();
Uh();
Vh();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/theme-scripts.min.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
