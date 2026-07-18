/* @ds-bundle: {"format":4,"namespace":"JuliBrunoWeddingDesignSystem_ae1f24","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Button.jsx":"a7ef4e047651","components/core/Card.jsx":"d9319e71d012","components/core/Divider.jsx":"6fe55e0edc86","components/core/SectionHeading.jsx":"280d17f0d038","components/core/Tag.jsx":"87e9e24abb7a","ui_kits/wedding-site/EventDetails.jsx":"f72ddac5f919","ui_kits/wedding-site/Footer.jsx":"d17fe6f888ad","ui_kits/wedding-site/Gallery.jsx":"9d687c497c52","ui_kits/wedding-site/Hero.jsx":"477fde699a8b","ui_kits/wedding-site/OurStory.jsx":"c3264b683bef","ui_kits/wedding-site/RSVP.jsx":"42740e2f73a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JuliBrunoWeddingDesignSystem_ae1f24 = window.JuliBrunoWeddingDesignSystem_ae1f24 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button'
}) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `all var(--duration-fast) var(--ease-standard)`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    opacity: disabled ? 0.5 : 1
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '14px'
    },
    md: {
      padding: '12px 24px',
      fontSize: '16px'
    },
    lg: {
      padding: '16px 32px',
      fontSize: '18px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-moss-900)',
      color: 'var(--color-paper-50)'
    },
    secondary: {
      background: 'var(--color-coral-500)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1.5px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-heading)'
    }
  };
  return React.createElement('button', {
    type,
    onClick: disabled ? undefined : onClick,
    disabled,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--color-moss-700)';
      if (variant === 'secondary') e.currentTarget.style.background = 'var(--color-plum-500)';
      if (variant === 'outline' || variant === 'ghost') e.currentTarget.style.background = 'var(--color-sand-200)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = variants[variant].background;
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(1)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  footer
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-sans)',
      transition: `box-shadow var(--duration-normal) var(--ease-standard)`
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 'var(--weight-semibold)',
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow), title && React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-3)'
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  ornament = true
}) {
  if (!ornament) {
    return React.createElement('hr', {
      style: {
        border: 'none',
        borderTop: '1px solid var(--border-subtle)',
        margin: 'var(--space-6) 0'
      }
    });
  }
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      margin: 'var(--space-7) 0'
    }
  }, React.createElement('span', {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--border-subtle)'
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--color-moss-500)',
      fontSize: '20px'
    }
  }, '✦'), React.createElement('span', {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--border-subtle)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  inverse = false
}) {
  return React.createElement('div', {
    style: {
      textAlign: align,
      marginBottom: 'var(--space-6)'
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      fontWeight: 'var(--weight-semibold)',
      color: inverse ? 'var(--color-blush-400)' : 'var(--color-coral-500)',
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow), title && React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h1)',
      margin: 0,
      color: inverse ? 'var(--color-paper-50)' : 'var(--text-heading)',
      lineHeight: 'var(--leading-tight)'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--color-sand-200)',
      color: 'var(--text-heading)'
    },
    success: {
      background: 'var(--state-success)',
      color: '#fff'
    },
    hold: {
      background: 'var(--state-hold)',
      color: 'var(--color-moss-900)'
    },
    info: {
      background: 'var(--state-info)',
      color: '#fff'
    },
    accent: {
      background: 'var(--color-coral-500)',
      color: '#fff'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 14px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '13px',
      letterSpacing: 'var(--tracking-normal)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/EventDetails.jsx
try { (() => {
function EventDetails() {
  const {
    SectionHeading,
    Card,
    Tag
  } = window.JuliBrunoWeddingDesignSystem_ae1f24;
  return /*#__PURE__*/React.createElement("section", {
    id: "detalles",
    style: {
      background: 'var(--bg-page)',
      padding: '96px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Detalles",
    title: "D\xF3nde y cu\xE1ndo"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Ceremonia civil",
    title: "Registro Civil N\xB04",
    footer: /*#__PURE__*/React.createElement(Tag, {
      tone: "neutral"
    }, "16:00 hs")
  }, "Firma de papeles, testigos y un brindis r\xE1pido antes de pasar a la iglesia."), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Ceremonia religiosa",
    title: "Parroquia Santa Rosa",
    footer: /*#__PURE__*/React.createElement(Tag, {
      tone: "neutral"
    }, "18:00 hs")
  }, "Te pedimos puntualidad \u2014 el cura no espera a nadie, ni siquiera a la novia."), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Fiesta",
    title: "Quinta El Omb\xFA",
    footer: /*#__PURE__*/React.createElement(Tag, {
      tone: "accent"
    }, "20:00 hs en adelante")
  }, "Cena, baile y sorpresas. Hay transporte desde la iglesia para quien lo necesite.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "Elegante campestre"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "Sin ni\xF1os, por favor"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "Regalos: sobre o transferencia"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/EventDetails.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-moss-900)',
      color: 'var(--color-paper-50)',
      textAlign: 'center',
      padding: '48px 24px',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px'
    }
  }, "Juli & Bruno \xB7 1 de noviembre de 2026");
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Gallery.jsx
try { (() => {
function Gallery() {
  const {
    SectionHeading
  } = window.JuliBrunoWeddingDesignSystem_ae1f24;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: '96px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Un poema para arrancar",
    title: "Esto va a ser bien rom\xE1ntico"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-sand-200)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/poem-portrait-banner.png",
    alt: "Retrato ilustrado de Bruno",
    style: {
      width: '100%',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '28px',
      color: 'var(--color-plum-500)',
      marginTop: 'var(--space-5)'
    }
  }, "con cari\xF1o, Juli & Bruno")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button
  } = window.JuliBrunoWeddingDesignSystem_ae1f24;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'var(--bg-page)',
      padding: '80px 24px',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--color-coral-500)',
      fontWeight: 'var(--weight-semibold)',
      marginBottom: 'var(--space-4)'
    }
  }, "Nos casamos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'clamp(48px, 8vw, 96px)',
      color: 'var(--text-heading)',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, "Juli & Bruno"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-muted)',
      margin: 'var(--space-4) 0 var(--space-7)'
    }
  }, "1 de noviembre, 2026 \u2014 Domingo"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/couple-with-dogs-lineart.png",
    alt: "Ilustraci\xF3n de Juli y Bruno con sus perros",
    style: {
      width: 'min(320px, 60vw)',
      marginBottom: 'var(--space-7)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => document.getElementById('rsvp')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Confirmar asistencia"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => document.getElementById('detalles')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, "Ver detalles")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/OurStory.jsx
try { (() => {
function OurStory() {
  const {
    SectionHeading,
    Divider
  } = window.JuliBrunoWeddingDesignSystem_ae1f24;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-surface)',
      padding: '96px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nuestra historia",
    title: "C\xF3mo llegamos hasta ac\xE1"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-loose)',
      margin: 0
    }
  }, "Nos conocimos sin buscarlo, nos quedamos sin planearlo, y ahora vamos a firmar papeles para que sea medio oficial. Va a haber acto civil, va a haber cura, y va a haber mucho baile \u2014 en ese orden de importancia, m\xE1s o menos."), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-heading)',
      margin: 0,
      lineHeight: 'var(--leading-normal)'
    }
  }, "\u201CCastig\xE1is el amor y lo \xFAnico que consegu\xEDs son rebeldes con el coraz\xF3n por bandera\u201D.", /*#__PURE__*/React.createElement("footer", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'normal',
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-3)'
    }
  }, "\u2014 Elvira Sastre, ", /*#__PURE__*/React.createElement("cite", null, "Aquella orilla nuestra")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/OurStory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding-site/RSVP.jsx
try { (() => {
function RSVP() {
  const {
    SectionHeading,
    Button,
    Tag
  } = window.JuliBrunoWeddingDesignSystem_ae1f24;
  const {
    useState
  } = React;
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState('si');
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: '16px',
    color: 'var(--text-heading)',
    background: 'var(--bg-surface)',
    border: '1.5px solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    marginBottom: 'var(--space-4)'
  };
  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-small)',
    fontWeight: 'var(--weight-semibold)',
    color: 'var(--text-heading)',
    display: 'block',
    marginBottom: 'var(--space-2)'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "rsvp",
    style: {
      background: 'var(--bg-surface-accent)',
      padding: '96px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "RSVP",
    title: "Confirm\xE1 tu lugar",
    inverse: true
  }), submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--color-paper-50)',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h3)',
      padding: 'var(--space-7) 0'
    }
  }, "\xA1Gracias! Ya te anotamos en la lista. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Tag, {
    tone: "success"
  }, "Confirmado")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      background: 'var(--bg-surface)',
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Nombre y apellido"), /*#__PURE__*/React.createElement("input", {
    required: true,
    style: inputStyle,
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\xBFVas a venir?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-4)'
    }
  }, ['si', 'no'].map(v => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: v,
    onClick: () => setAttending(v),
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 'var(--radius-md)',
      border: '1.5px solid var(--border-subtle)',
      background: attending === v ? 'var(--color-moss-500)' : 'transparent',
      color: attending === v ? '#fff' : 'var(--text-heading)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      cursor: 'pointer'
    }
  }, v === 'si' ? 'Sí, ahí voy a estar' : 'No puedo :('))), /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\xBFAlgo que debamos saber? (alergias, +1, canciones)"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      minHeight: 80,
      resize: 'vertical'
    },
    placeholder: "Opcional"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "secondary",
    size: "lg"
  }, "Enviar confirmaci\xF3n"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding-site/RSVP.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

})();
