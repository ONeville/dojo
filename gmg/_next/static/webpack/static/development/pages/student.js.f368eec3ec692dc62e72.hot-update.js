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
  }, "Invite"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: "py-2 px-4 rounded text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "A")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC13cml0ZS5qcyJdLCJuYW1lcyI6WyJTdHVkZW50UmVhZFdyaXRlIiwic3R1ZGVudERhdGEiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImVkaXRSb3ciLCJzZXRFZGl0Um93IiwiaXRlbVJvdyIsInNldEl0ZW1Sb3ciLCJzaG93RHJvcGxpc3QiLCJpdGVtIiwiY2xvc2VEcm9wbGlzdCIsImRyb3BsaXN0IiwiZWRpdFZpZXciLCJtYXAiLCJpZCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsS0FBRCxDQURRO0FBQUEsTUFDckNDLE1BRHFDO0FBQUEsTUFDN0JDLFNBRDZCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLEtBQUQsQ0FGTTtBQUFBLE1BRXJDRyxPQUZxQztBQUFBLE1BRTVCQyxVQUY0Qjs7QUFBQSxtQkFHZEosc0RBQVEsQ0FBQyxJQUFELENBSE07QUFBQSxNQUdyQ0ssT0FIcUM7QUFBQSxNQUc1QkMsVUFINEIsa0JBSTVDO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDN0JOLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUksY0FBVSxDQUFDRSxJQUFELENBQVY7QUFDRCxHQUhEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJUixNQUFKLEVBQVk7QUFDVkMsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSSxnQkFBVSxDQUFDLElBQUQsQ0FB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Q0FESCxDQXpCRixFQXFGRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsMENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFO0FBQVEsYUFBUyxFQUFDLGlDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkYsQ0FyRkYsQ0FERixDQURGLENBREY7QUE0R0QsQ0F0TEQ7O0dBQU1aLGdCOztLQUFBQSxnQjtBQXdMU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHN0dWRlbnQuanMuZjM2OGVlYzNlYzY5MmRjNjJlNzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgU3R1ZGVudFJvd0VkaXQgZnJvbSBcIi4vZWRpdC1zdHVkZW50XCI7XHJcblxyXG5jb25zdCBTdHVkZW50UmVhZFdyaXRlID0gKHsgc3R1ZGVudERhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRSb3csIHNldEVkaXRSb3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpdGVtUm93LCBzZXRJdGVtUm93XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGNvbnN0IFtpdGVtUm93LCBzZXRJdGVtUm93XSA9IHVzZVN0YXRlKHN0dWRlbnREYXRhKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldEl0ZW1Sb3coc3R1ZGVudERhdGEpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gaWYgKCFpdGVtUm93KSB7XHJcbiAgLy8gICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIC8vIH1cclxuXHJcbiAgY29uc3Qgc2hvd0Ryb3BsaXN0ID0gKGl0ZW0pID0+IHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICAgIHNldEl0ZW1Sb3coaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgXHJcbiAgY29uc3QgY2xvc2VEcm9wbGlzdCA9ICgpID0+IHtcclxuICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgc2V0SXRlbVJvdyhudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBlZGl0U3R1ZGVudERhdGEgPSAoaXRlbSkgPT4ge1xyXG4gIC8vICAgLy8gc2V0RWRpdFJvdyh0cnVlKTtcclxuICAvLyAgIC8vIHNldEl0ZW1Sb3coaXRlbSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgZWRpdEdyYWRlRGF0YSA9IChpdGVtKSA9PiB7XHJcbiAgLy8gc2V0RWRpdFJvdyh0cnVlKTtcclxuICAvLyBzZXRJdGVtUm93KGl0ZW0pO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGRyb3BsaXN0ID0gaXRlbVJvdyAmJiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIG10LTIgcHktMiB3LTQ4IGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LXhsXCI+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICAxZXJlIFNlbWVzdHJlXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctaW5kaWdvLTUwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDJlbWUgU2VtZXN0cmVcclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZWRpdFZpZXcgPSBpdGVtUm93ICYmIChcclxuICAgIDxTdHVkZW50Um93RWRpdFxyXG4gICAgICBpdGVtPXtpdGVtUm93fVxyXG4gICAgICBzaG93TW9kYWw9eygpID0+IHNldEVkaXRSb3coZmFsc2UpfVxyXG4gICAgICBvbkRhdGFDaGFuZ2U9e3NldEl0ZW1Sb3d9XHJcbiAgICAvPlxyXG4gICk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoaXRlbVJvdyAmJiBpdGVtUm93Lm1vZGlmaWVkKSB7XHJcbiAgLy8gICAgIC8vVE9ETzogZm9yIEFQSVxyXG4gIC8vICAgICBjb25zdCB7IG1vZGlmaWVkLCAuLi5hbGxSZXN0IH0gPSBpdGVtUm93O1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIlJvdyBJdGVtIGNoYW5nZWQ6IFwiLCBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhpdGVtUm93KTtcclxuICAvLyAgICAgY29uc29sZS5sb2coYWxsUmVzdCk7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImp1c3Qgdmlld1wiKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbZWRpdFJvd10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZURyb3BsaXN0KCl9PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIGJnLXdoaXRlIG1pbi1oLTY0IHNtOnctMS8yIG1kOnctMS8zXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC0yIHRleHQtZ3JheS02MDAgbWItMiB0ZXh0LTJ4bCBmb250LXRoaW4gcHgtNCBwdC0zXCI+XHJcbiAgICAgICAgICAgIEVsZXZlL0V0dWRpYW50c1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIG0tMSB0ZXh0LWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjI0XCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNC43MSAxNEgxNS41TDIwLjQ5IDE5TDE5IDIwLjQ5TDE0IDE1LjVWMTQuNzFMMTMuNzMgMTQuNDNDMTIuNTkgMTUuNDEgMTEuMTEgMTYgOS41IDE2QzUuOTA5OTcgMTYgMyAxMy4wOSAzIDkuNUMzIDUuOTA5OTcgNS45MDk5NyAzIDkuNSAzQzEzLjA5IDMgMTYgNS45MDk5NyAxNiA5LjVDMTYgMTEuMTEgMTUuNDEgMTIuNTkgMTQuNDMgMTMuNzNMMTQuNzEgMTRaTTUgOS41QzUgMTEuOTkgNy4wMTAwMSAxNCA5LjUgMTRDMTEuOTkgMTQgMTQgMTEuOTkgMTQgOS41QzE0IDcuMDEwMDEgMTEuOTkgNSA5LjUgNUM3LjAxMDAxIDUgNSA3LjAxMDAxIDUgOS41WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC41NFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC04IHAtMSBiZy1ncmF5LTIwMCB3LWZ1bGwgcm91bmRlZCByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGVhbXMgb3IgbWVtYmVyc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNSBweC0zXCI+XHJcbiAgICAgICAgICAgIHtzdHVkZW50RGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBweC0yIHB5LTIgaG92ZXI6YmctYmx1ZS0xMDAgaG92ZXI6cm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTIgdGV4dC1ncmF5LTUwMCBteC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOCA4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI0XCIgY3k9XCI0XCIgcj1cIjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmZpcnN0bmFtZSArIFwiIFwiICsgaXRlbS5sYXN0bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC01IHRleHQtZ3JheS01MDAgdGV4dC1iYXNlIGZvbnQtdGhpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNsYXNzfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQtc2VtaWJvbGQgbXgtMiBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTIwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gZWRpdFN0dWRlbnREYXRhKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjMgMy43bDQgNEw0IDIwSDB2LTRMMTIuMyAzLjd6bTEuNC0xLjRMMTYgMGw0IDQtMi4zIDIuMy00LTR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBmb250LXNlbWlib2xkIHAtMiBib3JkZXIgcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi0yMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IGVkaXRHcmFkZURhdGEoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUgOWgtM3YyaDN2M2gydi0zaDNWOWgtM1Y2aC0ydjN6TTAgM2gxMHYySDBWM3ptMCA4aDEwdjJIMHYtMnptMC00aDEwdjJIMFY3em0wIDhoMTB2Mkgwdi0yelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmVlbi01MDAgZm9udC1zZW1pYm9sZCBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JlZW4tMjAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93RHJvcGxpc3QoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUgOWgtM3YyaDN2M2gydi0zaDNWOWgtM1Y2aC0ydjN6TTAgM2gxMHYySDBWM3ptMCA4aDEwdjJIMHYtMnptMC00aDEwdjJIMFY3em0wIDhoMTB2Mkgwdi0yelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiBpdGVtLmlkID09PSBpdGVtUm93LmlkICYmIGRyb3BsaXN0fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIGZsZXggZmxleC1yb3ctcmV2ZXJzZSBweC0yIHB5LTNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBweS0yIHB4LTQgcm91bmRlZCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgSW52aXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB5LTIgcHgtNCByb3VuZGVkIHRleHQtZ3JheS02MDBcIj5BPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Lyoge2VkaXRSb3cgJiYgZWRpdFZpZXd9ICovfVxyXG4gICAgICA8L2Rpdj5cclxuey8qIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBiZy13aGl0ZSBtaW4taC02NCBzbTp3LTEvMiBtZDp3LTEvM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgPHNwYW4+Q291cnM8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5QcmVtaWVyZSA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Db3Vyczwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkNvdXJzPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudFJlYWRXcml0ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==