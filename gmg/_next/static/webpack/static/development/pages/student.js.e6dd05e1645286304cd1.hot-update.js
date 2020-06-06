webpackHotUpdate("static\\development\\pages\\student.js",{

/***/ "./components/student/student-write.js":
/*!*********************************************!*\
  !*** ./components/student/student-write.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _edit_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-student */ "./components/student/edit-student.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\components\\student\\student-write.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var StudentReadWrite = function StudentReadWrite(_ref) {
  _s();

  var studentData = _ref.studentData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editRow = _useState2[0],
      setEditRow = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      itemRow = _useState3[0],
      setItemRow = _useState3[1]; // const [itemRow, setItemRow] = useState(studentData);
  // useEffect(() => {
  //   setItemRow(studentData);
  // }, []);
  // if (!itemRow) {
  //   return <div>Loading...</div>;
  // }


  var showDroplist = function showDroplist(item) {
    setIsOpen(true);
    setItemRow(item);
  };

  var closeDroplist = function closeDroplist() {
    if (isOpen) {
      setIsOpen(false);
      setItemRow(null);
    }
  }; // const editStudentData = (item) => {
  //   // setEditRow(true);
  //   // setItemRow(item);
  // };
  // const editGradeData = (item) => {
  // setEditRow(true);
  // setItemRow(item);
  // };


  var droplist = itemRow && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "#",
    className: "block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "1ere Semestre"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "#",
    className: "block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "2eme Semestre"));
  var editView = itemRow && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_edit_student__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: itemRow,
    showModal: function showModal() {
      return setEditRow(false);
    },
    onDataChange: setItemRow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }); // useEffect(() => {
  //   if (itemRow && itemRow.modified) {
  //     //TODO: for API
  //     const { modified, ...allRest } = itemRow;
  //     console.log("Row Item changed: ", new Date().toString());
  //     console.log(itemRow);
  //     console.log(allRest);
  //   } else {
  //     console.log("just view");
  //   }
  // }, [editRow]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "",
    onClick: function onClick() {
      return closeDroplist();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "rounded-lg overflow-hidden shadow-lg bg-white min-h-64 sm:w-1/2 md:w-1/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    className: "px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, "Eleve/Etudiants"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "px-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "absolute z-50 m-1 text-blue-400",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z",
    fill: "black",
    "fill-opacity": "0.54",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "text",
    className: "pl-8 p-1 bg-gray-200 w-full rounded relative",
    placeholder: "Search teams or members",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "py-5 px-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, studentData.map(function (item) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      key: item.id,
      className: "flex justify-between px-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "flex flex-col flex-grow px-2 py-2 hover:bg-blue-100 hover:rounded",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
      className: "flex text-gray-700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
      className: "w-2 text-gray-500 mx-2",
      viewBox: "0 0 8 8",
      fill: "currentColor",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("circle", {
      cx: "4",
      cy: "4",
      r: "3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 23
      }
    })), item.firstname + " " + item.lastname), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
      className: "ml-5 text-gray-500 text-base font-thin",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, item["class"])), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      className: "flex items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      className: "text-gray-500 font-semibold mx-2 p-2 border rounded-md hover:text-white hover:bg-blue-200 cursor-pointer" // onClick={() => editStudentData(item)}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
      className: "fill-current h-4 w-4",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
      d: "M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 23
      }
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      className: "block text-green-500 font-semibold p-2 border rounded-md hover:bg-green-200 cursor-pointer",
      onClick: function onClick() {
        return showDroplist(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
      className: "fill-current h-4 w-4",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
      d: "M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 23
      }
    }))), isOpen && item.id === itemRow.id && droplist));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "bg-gray-300 flex flex-row-reverse px-2 py-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: "bg-blue-500 py-2 px-4 rounded text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "Actualiser"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: "py-2 px-4 rounded text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "Ajouter Eleve")))));
};

_s(StudentReadWrite, "gbrt4AcNf4Vko6V8UPYr/vmWLyc=");

_c = StudentReadWrite;
/* harmony default export */ __webpack_exports__["default"] = (StudentReadWrite);

var _c;

$RefreshReg$(_c, "StudentReadWrite");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC13cml0ZS5qcyJdLCJuYW1lcyI6WyJTdHVkZW50UmVhZFdyaXRlIiwic3R1ZGVudERhdGEiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImVkaXRSb3ciLCJzZXRFZGl0Um93IiwiaXRlbVJvdyIsInNldEl0ZW1Sb3ciLCJzaG93RHJvcGxpc3QiLCJpdGVtIiwiY2xvc2VEcm9wbGlzdCIsImRyb3BsaXN0IiwiZWRpdFZpZXciLCJtYXAiLCJpZCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsS0FBRCxDQURRO0FBQUEsTUFDckNDLE1BRHFDO0FBQUEsTUFDN0JDLFNBRDZCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLEtBQUQsQ0FGTTtBQUFBLE1BRXJDRyxPQUZxQztBQUFBLE1BRTVCQyxVQUY0Qjs7QUFBQSxtQkFHZEosc0RBQVEsQ0FBQyxJQUFELENBSE07QUFBQSxNQUdyQ0ssT0FIcUM7QUFBQSxNQUc1QkMsVUFINEIsa0JBSTVDO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDN0JOLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUksY0FBVSxDQUFDRSxJQUFELENBQVY7QUFDRCxHQUhEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJUixNQUFKLEVBQVk7QUFDVkMsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSSxnQkFBVSxDQUFDLElBQUQsQ0FB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Q0FESCxDQXpCRixFQXFGRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsMENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJRTtBQUFRLGFBQVMsRUFBQyxpQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixDQXJGRixDQURGLENBREYsQ0FERjtBQTRHRCxDQXRMRDs7R0FBTVosZ0I7O0tBQUFBLGdCO0FBd0xTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc3R1ZGVudC5qcy5lNmRkMDVlMTY0NTI4NjMwNGNkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCBTdHVkZW50Um93RWRpdCBmcm9tIFwiLi9lZGl0LXN0dWRlbnRcIjtcclxuXHJcbmNvbnN0IFN0dWRlbnRSZWFkV3JpdGUgPSAoeyBzdHVkZW50RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZWRpdFJvdywgc2V0RWRpdFJvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2l0ZW1Sb3csIHNldEl0ZW1Sb3ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc3QgW2l0ZW1Sb3csIHNldEl0ZW1Sb3ddID0gdXNlU3RhdGUoc3R1ZGVudERhdGEpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgc2V0SXRlbVJvdyhzdHVkZW50RGF0YSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICAvLyBpZiAoIWl0ZW1Sb3cpIHtcclxuICAvLyAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBzaG93RHJvcGxpc3QgPSAoaXRlbSkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgc2V0SXRlbVJvdyhpdGVtKTtcclxuICB9O1xyXG5cclxuICBcclxuICBjb25zdCBjbG9zZURyb3BsaXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzT3Blbikge1xyXG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICBzZXRJdGVtUm93KG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGVkaXRTdHVkZW50RGF0YSA9IChpdGVtKSA9PiB7XHJcbiAgLy8gICAvLyBzZXRFZGl0Um93KHRydWUpO1xyXG4gIC8vICAgLy8gc2V0SXRlbVJvdyhpdGVtKTtcclxuICAvLyB9O1xyXG5cclxuICAvLyBjb25zdCBlZGl0R3JhZGVEYXRhID0gKGl0ZW0pID0+IHtcclxuICAvLyBzZXRFZGl0Um93KHRydWUpO1xyXG4gIC8vIHNldEl0ZW1Sb3coaXRlbSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgZHJvcGxpc3QgPSBpdGVtUm93ICYmIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbXQtMiBweS0yIHctNDggYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3cteGxcIj5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDFlcmUgU2VtZXN0cmVcclxuICAgICAgPC9hPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1pbmRpZ28tNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgMmVtZSBTZW1lc3RyZVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBjb25zdCBlZGl0VmlldyA9IGl0ZW1Sb3cgJiYgKFxyXG4gICAgPFN0dWRlbnRSb3dFZGl0XHJcbiAgICAgIGl0ZW09e2l0ZW1Sb3d9XHJcbiAgICAgIHNob3dNb2RhbD17KCkgPT4gc2V0RWRpdFJvdyhmYWxzZSl9XHJcbiAgICAgIG9uRGF0YUNoYW5nZT17c2V0SXRlbVJvd31cclxuICAgIC8+XHJcbiAgKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChpdGVtUm93ICYmIGl0ZW1Sb3cubW9kaWZpZWQpIHtcclxuICAvLyAgICAgLy9UT0RPOiBmb3IgQVBJXHJcbiAgLy8gICAgIGNvbnN0IHsgbW9kaWZpZWQsIC4uLmFsbFJlc3QgfSA9IGl0ZW1Sb3c7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiUm93IEl0ZW0gY2hhbmdlZDogXCIsIG5ldyBEYXRlKCkudG9TdHJpbmcoKSk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW1Sb3cpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhhbGxSZXN0KTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwianVzdCB2aWV3XCIpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtlZGl0Um93XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9eygpID0+IGNsb3NlRHJvcGxpc3QoKX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgYmctd2hpdGUgbWluLWgtNjQgc206dy0xLzIgbWQ6dy0xLzNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgdGV4dC1ncmF5LTYwMCBtYi0yIHRleHQtMnhsIGZvbnQtdGhpbiBweC00IHB0LTNcIj5cclxuICAgICAgICAgICAgRWxldmUvRXR1ZGlhbnRzXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTJcIj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgbS0xIHRleHQtYmx1ZS00MDBcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTE0LjcxIDE0SDE1LjVMMjAuNDkgMTlMMTkgMjAuNDlMMTQgMTUuNVYxNC43MUwxMy43MyAxNC40M0MxMi41OSAxNS40MSAxMS4xMSAxNiA5LjUgMTZDNS45MDk5NyAxNiAzIDEzLjA5IDMgOS41QzMgNS45MDk5NyA1LjkwOTk3IDMgOS41IDNDMTMuMDkgMyAxNiA1LjkwOTk3IDE2IDkuNUMxNiAxMS4xMSAxNS40MSAxMi41OSAxNC40MyAxMy43M0wxNC43MSAxNFpNNSA5LjVDNSAxMS45OSA3LjAxMDAxIDE0IDkuNSAxNEMxMS45OSAxNCAxNCAxMS45OSAxNCA5LjVDMTQgNy4wMTAwMSAxMS45OSA1IDkuNSA1QzcuMDEwMDEgNSA1IDcuMDEwMDEgNSA5LjVaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJibGFja1wiXHJcbiAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjU0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTggcC0xIGJnLWdyYXktMjAwIHctZnVsbCByb3VuZGVkIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0ZWFtcyBvciBtZW1iZXJzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHB4LTNcIj5cclxuICAgICAgICAgICAge3N0dWRlbnREYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC1ncm93IHB4LTIgcHktMiBob3ZlcjpiZy1ibHVlLTEwMCBob3Zlcjpyb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMiB0ZXh0LWdyYXktNTAwIG14LTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA4IDhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjRcIiBjeT1cIjRcIiByPVwiM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZmlyc3RuYW1lICsgXCIgXCIgKyBpdGVtLmxhc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1sLTUgdGV4dC1ncmF5LTUwMCB0ZXh0LWJhc2UgZm9udC10aGluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2xhc3N9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZm9udC1zZW1pYm9sZCBteC0yIHAtMiBib3JkZXIgcm91bmRlZC1tZCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtMjAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBlZGl0U3R1ZGVudERhdGEoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuMyAzLjdsNCA0TDQgMjBIMHYtNEwxMi4zIDMuN3ptMS40LTEuNEwxNiAwbDQgNC0yLjMgMi4zLTQtNHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIGZvbnQtc2VtaWJvbGQgcC0yIGJvcmRlciByb3VuZGVkLW1kIGhvdmVyOmJnLWdyZWVuLTIwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gZWRpdEdyYWRlRGF0YShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNSA5aC0zdjJoM3YzaDJ2LTNoM1Y5aC0zVjZoLTJ2M3pNMCAzaDEwdjJIMFYzem0wIDhoMTB2Mkgwdi0yem0wLTRoMTB2MkgwVjd6bTAgOGgxMHYySDB2LTJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyZWVuLTUwMCBmb250LXNlbWlib2xkIHAtMiBib3JkZXIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi0yMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dEcm9wbGlzdChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNSA5aC0zdjJoM3YzaDJ2LTNoM1Y5aC0zVjZoLTJ2M3pNMCAzaDEwdjJIMFYzem0wIDhoMTB2Mkgwdi0yem0wLTRoMTB2MkgwVjd6bTAgOGgxMHYySDB2LTJ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIGl0ZW0uaWQgPT09IGl0ZW1Sb3cuaWQgJiYgZHJvcGxpc3R9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgZmxleCBmbGV4LXJvdy1yZXZlcnNlIHB4LTIgcHktM1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHB5LTIgcHgtNCByb3VuZGVkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICBBY3R1YWxpc2VyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB5LTIgcHgtNCByb3VuZGVkIHRleHQtZ3JheS02MDBcIj5Bam91dGVyIEVsZXZlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Lyoge2VkaXRSb3cgJiYgZWRpdFZpZXd9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuey8qIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBiZy13aGl0ZSBtaW4taC02NCBzbTp3LTEvMiBtZDp3LTEvM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgPHNwYW4+Q291cnM8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5QcmVtaWVyZSA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Db3Vyczwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkNvdXJzPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudFJlYWRXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==