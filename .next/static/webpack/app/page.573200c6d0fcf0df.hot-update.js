"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/AboutSection.jsx":
/*!*****************************************!*\
  !*** ./app/components/AboutSection.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _TabButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabButton */ \"(app-pages-browser)/./app/components/TabButton.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst TAB_DATA = [\n    {\n        title: \"Skills\",\n        id: \"skills\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"list-disc pl-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Adobe Premiere\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Photography\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Videography\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    },\n    {\n        title: \"Education\",\n        id: \"education\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"list-disc pl-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"MAN 4 Jakarta\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"Bandung Institute of Technology\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    },\n    {\n        title: \"Organization & Experience\",\n        id: \"organization\",\n        content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"list-disc pl-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"ITB Jazz\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: \"TEC ITB\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }\n];\nconst AboutSection = ()=>{\n    _s();\n    const [tab, setTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"skills\");\n    const [isPending, startTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useTransition)();\n    const handleTabChange = (id)=>{\n        startTransition(()=>{\n            setTab(id);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"/Images/foto-about.png\",\n                    width: 400,\n                    height: 400,\n                    className: \"rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl font-bold text-white mb-4\",\n                            children: \"About Me\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-base lg:text-lg\",\n                            children: \"Hi! I’m Farrel, a second year student at , majoring in Informatics Engineering. I’m passionate about Software Engineering, and I’m excited about the journey I’m on as I work towards a future in big tech industries such as IBM, Google and Apple. When I’m not studying or participating in campus activities, I enjoy Gym, playing Tennis, and Videography, which helps me stay balanced and inspired. I find that these moments recharge me and keep my creativity flowing. I’m always eager to learn, grow, and connect with others who share my interests. Feel free to reach out if you’d like to collaborate on a project, discuss ideas, or just chat about anything. Looking forward to what the future holds!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    selectTab: ()=>handleTabChange(\"skills\"),\n                                    active: tab === \"skills\",\n                                    children: [\n                                        \" \",\n                                        \"Skills\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    selectTab: ()=>handleTabChange(\"education\"),\n                                    active: tab === \"education\",\n                                    children: [\n                                        \" \",\n                                        \"Education\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TabButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    selectTab: ()=>handleTabChange(\"organization\"),\n                                    active: tab === \"organization\",\n                                    children: [\n                                        \" \",\n                                        \"Organization\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-8\",\n                            children: TAB_DATA.find((t)=>t.id === tab).content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\faawi\\\\portfolio-webstie\\\\app\\\\components\\\\AboutSection.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutSection, \"wd759i+ZuDCpxKdokTPhN756AKQ=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_1__.useTransition\n    ];\n});\n_c = AboutSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutSection);\nvar _c;\n$RefreshReg$(_c, \"AboutSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Fib3V0U2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDcEI7QUFDSztBQUVwQyxNQUFNSyxXQUFXO0lBQ2Y7UUFDRUMsT0FBTztRQUNQQyxJQUFJO1FBQ0pDLHVCQUNFLDhEQUFDQztZQUFHQyxXQUFVOzs4QkFDWiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0E7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0E7OEJBQUc7Ozs7Ozs7Ozs7OztJQUdWO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxJQUFJO1FBQ0pDLHVCQUNFLDhEQUFDQztZQUFHQyxXQUFVOzs4QkFDWiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0E7OEJBQUc7Ozs7Ozs7Ozs7OztJQUdWO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxJQUFJO1FBQ0pDLHVCQUNFLDhEQUFDQztZQUFHQyxXQUFVOzs4QkFDWiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0E7OEJBQUc7Ozs7Ozs7Ozs7OztJQUdWO0NBQ0Q7QUFFRCxNQUFNQyxlQUFlOztJQUNuQixNQUFLLENBQUNDLEtBQUtDLE9BQU8sR0FBR1osK0NBQVFBLENBQUM7SUFDOUIsTUFBSyxDQUFDYSxXQUFXQyxnQkFBZ0IsR0FBR2Ysb0RBQWFBO0lBRWpELE1BQU1nQixrQkFBa0IsQ0FBQ1Y7UUFDdkJTLGdCQUFnQjtZQUNkRixPQUFPUDtRQUNYO0lBQ0Y7SUFFRSxxQkFDRSw4REFBQ1c7UUFBUVIsV0FBVTtrQkFDakIsNEVBQUNTO1lBQUlULFdBQVU7OzhCQUNiLDhEQUFDUCxrREFBS0E7b0JBQ0ZpQixLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSWixXQUFVOzs7Ozs7OEJBRWQsOERBQUNTOztzQ0FDQyw4REFBQ0k7NEJBQUdiLFdBQVU7c0NBQXFDOzs7Ozs7c0NBQ25ELDhEQUFDYzs0QkFBRWQsV0FBVTtzQ0FBdUI7Ozs7OztzQ0FPcEMsOERBQUNTOzRCQUFJVCxXQUFVOzs4Q0FDYiw4REFBQ04sa0RBQVNBO29DQUNScUIsV0FBVyxJQUFNUixnQkFBZ0I7b0NBQ2pDUyxRQUFRYixRQUFROzt3Q0FFZjt3Q0FBSTt3Q0FDRTs7Ozs7Ozs4Q0FFVCw4REFBQ1Qsa0RBQVNBO29DQUNScUIsV0FBVyxJQUFNUixnQkFBZ0I7b0NBQ2pDUyxRQUFRYixRQUFROzt3Q0FFZjt3Q0FBSTt3Q0FDSzs7Ozs7Ozs4Q0FFWiw4REFBQ1Qsa0RBQVNBO29DQUNScUIsV0FBVyxJQUFNUixnQkFBZ0I7b0NBQ2pDUyxRQUFRYixRQUFROzt3Q0FFZjt3Q0FBSTt3Q0FDUTs7Ozs7Ozs7Ozs7OztzQ0FHakIsOERBQUNNOzRCQUFJVCxXQUFVO3NDQUNaTCxTQUFTc0IsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVyQixFQUFFLEtBQUtNLEtBQUtMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZEO0dBMURNSTs7UUFFZ0NYLGdEQUFhQTs7O0tBRjdDVztBQTRETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9BYm91dFNlY3Rpb24uanN4Pzg1MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCx7dXNlVHJhbnNpdGlvbix1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBUYWJCdXR0b24gZnJvbSAnLi9UYWJCdXR0b24nO1xyXG5cclxuY29uc3QgVEFCX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU2tpbGxzXCIsXHJcbiAgICBpZDogXCJza2lsbHNcIixcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBwbC0yXCI+XHJcbiAgICAgICAgPGxpPkFkb2JlIFByZW1pZXJlPC9saT5cclxuICAgICAgICA8bGk+UGhvdG9ncmFwaHk8L2xpPlxyXG4gICAgICAgIDxsaT5WaWRlb2dyYXBoeTwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRWR1Y2F0aW9uXCIsXHJcbiAgICBpZDogXCJlZHVjYXRpb25cIixcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBwbC0yXCI+XHJcbiAgICAgICAgPGxpPk1BTiA0IEpha2FydGE8L2xpPlxyXG4gICAgICAgIDxsaT5CYW5kdW5nIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPcmdhbml6YXRpb24gJiBFeHBlcmllbmNlXCIsXHJcbiAgICBpZDogXCJvcmdhbml6YXRpb25cIixcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBwbC0yXCI+XHJcbiAgICAgICAgPGxpPklUQiBKYXp6PC9saT5cclxuICAgICAgICA8bGk+VEVDIElUQjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBBYm91dFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgY29uc3RbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoXCJza2lsbHNcIik7XHJcbiAgY29uc3RbaXNQZW5kaW5nLCBzdGFydFRyYW5zaXRpb25dID0gdXNlVHJhbnNpdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSAoaWQpID0+IHtcclxuICAgIHN0YXJ0VHJhbnNpdGlvbigoKSA9PntcclxuICAgICAgc2V0VGFiKGlkKTtcclxuICB9KTtcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpncmlkIG1kOmdyaWQtY29scy0yIGdhcC04IGl0ZW1zLWNlbnRlciBweS04IHB4LTQgeGw6Z2FwLTE2IHNtOnB5LTE2XCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9JbWFnZXMvZm90by1hYm91dC5wbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLWxnJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi00Jz5BYm91dCBNZTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSBsZzp0ZXh0LWxnJz5cclxuICAgICAgICAgIEhpISBJ4oCZbSBGYXJyZWwsIGEgc2Vjb25kIHllYXIgc3R1ZGVudCBhdCAsIG1ham9yaW5nIGluIEluZm9ybWF0aWNzIEVuZ2luZWVyaW5nLiBJ4oCZbSBwYXNzaW9uYXRlIGFib3V0IFNvZnR3YXJlIEVuZ2luZWVyaW5nLCBhbmQgSeKAmW0gZXhjaXRlZCBhYm91dCB0aGUgam91cm5leSBJ4oCZbSBvbiBhcyBJIHdvcmsgdG93YXJkcyBhIGZ1dHVyZSBpbiBiaWcgdGVjaCBpbmR1c3RyaWVzIHN1Y2ggYXMgSUJNLCBHb29nbGUgYW5kIEFwcGxlLlxyXG4gICAgICAgICAgV2hlbiBJ4oCZbSBub3Qgc3R1ZHlpbmcgb3IgcGFydGljaXBhdGluZyBpbiBjYW1wdXMgYWN0aXZpdGllcywgSSBlbmpveSBHeW0sIHBsYXlpbmcgVGVubmlzLCBhbmQgVmlkZW9ncmFwaHksIHdoaWNoIGhlbHBzIG1lIHN0YXkgYmFsYW5jZWQgYW5kIGluc3BpcmVkLiBJIGZpbmQgdGhhdCB0aGVzZSBtb21lbnRzIHJlY2hhcmdlIG1lIGFuZCBrZWVwIG15IGNyZWF0aXZpdHkgZmxvd2luZy4gXHJcbiAgICAgICAgICBJ4oCZbSBhbHdheXMgZWFnZXIgdG8gbGVhcm4sIGdyb3csIGFuZCBjb25uZWN0IHdpdGggb3RoZXJzIHdobyBzaGFyZSBteSBpbnRlcmVzdHMuIFxyXG4gICAgICAgICAgRmVlbCBmcmVlIHRvIHJlYWNoIG91dCBpZiB5b3XigJlkIGxpa2UgdG8gY29sbGFib3JhdGUgb24gYSBwcm9qZWN0LCBkaXNjdXNzIGlkZWFzLCBvciBqdXN0IGNoYXQgYWJvdXQgYW55dGhpbmcuIFxyXG4gICAgICAgICAgTG9va2luZyBmb3J3YXJkIHRvIHdoYXQgdGhlIGZ1dHVyZSBob2xkcyFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtdC04XCI+XHJcbiAgICAgICAgICAgIDxUYWJCdXR0b25cclxuICAgICAgICAgICAgICBzZWxlY3RUYWI9eygpID0+IGhhbmRsZVRhYkNoYW5nZShcInNraWxsc1wiKX1cclxuICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gXCJza2lsbHNcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICBTa2lsbHN7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvVGFiQnV0dG9uPlxyXG4gICAgICAgICAgICA8VGFiQnV0dG9uXHJcbiAgICAgICAgICAgICAgc2VsZWN0VGFiPXsoKSA9PiBoYW5kbGVUYWJDaGFuZ2UoXCJlZHVjYXRpb25cIil9XHJcbiAgICAgICAgICAgICAgYWN0aXZlPXt0YWIgPT09IFwiZWR1Y2F0aW9uXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgRWR1Y2F0aW9ue1wiIFwifVxyXG4gICAgICAgICAgICA8L1RhYkJ1dHRvbj5cclxuICAgICAgICAgICAgPFRhYkJ1dHRvblxyXG4gICAgICAgICAgICAgIHNlbGVjdFRhYj17KCkgPT4gaGFuZGxlVGFiQ2hhbmdlKFwib3JnYW5pemF0aW9uXCIpfVxyXG4gICAgICAgICAgICAgIGFjdGl2ZT17dGFiID09PSBcIm9yZ2FuaXphdGlvblwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIE9yZ2FuaXphdGlvbntcIiBcIn1cclxuICAgICAgICAgICAgPC9UYWJCdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICB7VEFCX0RBVEEuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFiKS5jb250ZW50fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRTZWN0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2l0aW9uIiwidXNlU3RhdGUiLCJJbWFnZSIsIlRhYkJ1dHRvbiIsIlRBQl9EQVRBIiwidGl0bGUiLCJpZCIsImNvbnRlbnQiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwiQWJvdXRTZWN0aW9uIiwidGFiIiwic2V0VGFiIiwiaXNQZW5kaW5nIiwic3RhcnRUcmFuc2l0aW9uIiwiaGFuZGxlVGFiQ2hhbmdlIiwic2VjdGlvbiIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJwIiwic2VsZWN0VGFiIiwiYWN0aXZlIiwiZmluZCIsInQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AboutSection.jsx\n"));

/***/ })

});