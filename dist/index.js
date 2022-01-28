require("./index.css");
var $5oktP$reactjsxruntime = require("react/jsx-runtime");
require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $460cb45992652d96$exports = {};

$parcel$export($460cb45992652d96$exports, "Header", () => $460cb45992652d96$export$8b251419efc915eb);

var $3f45bf6f1cb39ed4$exports = {};

$parcel$export($3f45bf6f1cb39ed4$exports, "Button", () => $3f45bf6f1cb39ed4$export$353f5b6fc5456de1);



const $3f45bf6f1cb39ed4$export$353f5b6fc5456de1 = ({ primary: primary , backgroundColor: backgroundColor , size: size , label: label , ...props })=>{
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return(/*#__PURE__*/ $5oktP$reactjsxruntime.jsx("button", {
        type: "button",
        className: [
            'storybook-button',
            `storybook-button--${size}`,
            mode
        ].join(' '),
        style: backgroundColor && {
            backgroundColor: backgroundColor
        },
        ...props,
        children: label
    }));
};
$3f45bf6f1cb39ed4$export$353f5b6fc5456de1.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined
};



const $460cb45992652d96$export$8b251419efc915eb = ({ user: user , onLogin: onLogin , onLogout: onLogout , onCreateAccount: onCreateAccount  })=>/*#__PURE__*/ $5oktP$reactjsxruntime.jsx("header", {
        children: /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("div", {
                    children: [
                        /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [
                                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("path", {
                                        d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                                        fill: "#FFF"
                                    }),
                                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("path", {
                                        d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                                        fill: "#555AB9"
                                    }),
                                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("path", {
                                        d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                                        fill: "#91BAF8"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("h1", {
                            children: "Acme"
                        })
                    ]
                }),
                /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("div", {
                    children: user ? /*#__PURE__*/ $5oktP$reactjsxruntime.jsx($3f45bf6f1cb39ed4$export$353f5b6fc5456de1, {
                        size: "small",
                        onClick: onLogout,
                        label: "Log out"
                    }) : /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs($5oktP$reactjsxruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx($3f45bf6f1cb39ed4$export$353f5b6fc5456de1, {
                                size: "small",
                                onClick: onLogin,
                                label: "Log in"
                            }),
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx($3f45bf6f1cb39ed4$export$353f5b6fc5456de1, {
                                primary: true,
                                size: "small",
                                onClick: onCreateAccount,
                                label: "Sign up"
                            })
                        ]
                    })
                })
            ]
        })
    })
;
$460cb45992652d96$export$8b251419efc915eb.defaultProps = {
    user: null
};



var $4d90196adf9dfa17$exports = {};

$parcel$export($4d90196adf9dfa17$exports, "Page", () => $4d90196adf9dfa17$export$6955bcca4cd3539f);




const $4d90196adf9dfa17$export$6955bcca4cd3539f = ({ user: user , onLogin: onLogin , onLogout: onLogout , onCreateAccount: onCreateAccount  })=>/*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("article", {
        children: [
            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx($460cb45992652d96$export$8b251419efc915eb, {
                user: user,
                onLogin: onLogin,
                onLogout: onLogout,
                onCreateAccount: onCreateAccount
            }),
            /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("section", {
                children: [
                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("h2", {
                        children: "Pages in Storybook"
                    }),
                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("p", {
                        children: [
                            "We recommend building UIs with a",
                            ' ',
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("a", {
                                href: "https://componentdriven.org",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("strong", {
                                    children: "component-driven"
                                })
                            }),
                            ' ',
                            "process starting with atomic components and ending with pages."
                        ]
                    }),
                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("p", {
                        children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"
                    }),
                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("ul", {
                        children: [
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("li", {
                                children: "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"
                            }),
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("li", {
                                children: "Assemble data in the page component from your services. You can mock these services out using Storybook."
                            })
                        ]
                    }),
                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("p", {
                        children: [
                            "Get a guided tutorial on component-driven development at",
                            ' ',
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("a", {
                                href: "https://storybook.js.org/tutorials/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Storybook tutorials"
                            }),
                            ". Read more in the",
                            ' ',
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("a", {
                                href: "https://storybook.js.org/docs",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "docs"
                            }),
                            "."
                        ]
                    }),
                    /*#__PURE__*/ $5oktP$reactjsxruntime.jsxs("div", {
                        className: "tip-wrapper",
                        children: [
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("span", {
                                className: "tip",
                                children: "Tip"
                            }),
                            " Adjust the width of the canvas with the",
                            ' ',
                            /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("svg", {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 12 12",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    children: /*#__PURE__*/ $5oktP$reactjsxruntime.jsx("path", {
                                        d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",
                                        id: "a",
                                        fill: "#999"
                                    })
                                })
                            }),
                            "Viewports addon in the toolbar"
                        ]
                    })
                ]
            })
        ]
    })
;
$4d90196adf9dfa17$export$6955bcca4cd3539f.defaultProps = {
    user: null
};


$parcel$exportWildcard(module.exports, $460cb45992652d96$exports);
$parcel$exportWildcard(module.exports, $3f45bf6f1cb39ed4$exports);
$parcel$exportWildcard(module.exports, $4d90196adf9dfa17$exports);


//# sourceMappingURL=index.js.map
