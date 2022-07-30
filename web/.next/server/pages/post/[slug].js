"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"yler2cdu\",\n    dataset: \"production\",\n    useCdn: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsWUFBWTtBQUM4QjtBQUUxQyxpRUFBZUEscURBQVksQ0FBQztJQUMxQkMsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2NsaWVudC5qcz85NzE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcclxuICBwcm9qZWN0SWQ6IFwieWxlcjJjZHVcIiwgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cclxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxyXG4gIHVzZUNkbjogdHJ1ZSwgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxyXG59KTtcclxuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// [slug].js\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[] ,  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\16264\\\\Desktop\\\\Coding\\\\React Projects\\\\sanity-blog\\\\web\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\n  title,\r\n  \"name\": author->name,\r\n  \"categories\": categories[]->title,\r\n  \"authorImage\": author->image,\r\n  body\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgcHRDb21wb25lbnRzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoXCJtYXhcIikuYXV0byhcImZvcm1hdFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXHJcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICAgIGNhdGVnb3JpZXMsXHJcbiAgICBhdXRob3JJbWFnZSxcclxuICAgIGJvZHkgPSBbXSxcclxuICB9ID0gcG9zdDtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGU+XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgUG9zdGVkIGluXHJcbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICl9XHJcbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDUwKS51cmwoKX1cclxuICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17Ym9keX0gY29tcG9uZW50cz17cHRDb21wb25lbnRzfSAvPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHlcclxufWA7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcclxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3QsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbImdyb3EiLCJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJjbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsInVybCIsImNvbXBvbmVudHMiLCJxdWVyeSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();