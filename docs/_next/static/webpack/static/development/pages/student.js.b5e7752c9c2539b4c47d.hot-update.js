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
  }, "Ajouter ")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC13cml0ZS5qcyJdLCJuYW1lcyI6WyJTdHVkZW50UmVhZFdyaXRlIiwic3R1ZGVudERhdGEiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImVkaXRSb3ciLCJzZXRFZGl0Um93IiwiaXRlbVJvdyIsInNldEl0ZW1Sb3ciLCJzaG93RHJvcGxpc3QiLCJpdGVtIiwiY2xvc2VEcm9wbGlzdCIsImRyb3BsaXN0IiwiZWRpdFZpZXciLCJtYXAiLCJpZCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsS0FBRCxDQURRO0FBQUEsTUFDckNDLE1BRHFDO0FBQUEsTUFDN0JDLFNBRDZCOztBQUFBLG1CQUVkRixzREFBUSxDQUFDLEtBQUQsQ0FGTTtBQUFBLE1BRXJDRyxPQUZxQztBQUFBLE1BRTVCQyxVQUY0Qjs7QUFBQSxtQkFHZEosc0RBQVEsQ0FBQyxJQUFELENBSE07QUFBQSxNQUdyQ0ssT0FIcUM7QUFBQSxNQUc1QkMsVUFINEIsa0JBSTVDO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDN0JOLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUksY0FBVSxDQUFDRSxJQUFELENBQVY7QUFDRCxHQUhEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixRQUFJUixNQUFKLEVBQVk7QUFDVkMsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSSxnQkFBVSxDQUFDLElBQUQsQ0FB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Q0FESCxDQXpCRixFQXFGRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsMENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUlFO0FBQVEsYUFBUyxFQUFDLGlDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBckZGLENBREYsQ0FERixDQURGO0FBNEdELENBdExEOztHQUFNWixnQjs7S0FBQUEsZ0I7QUF3TFNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdHVkZW50LmpzLmI1ZTc3NTJjOWMyNTM5YjRjNDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsganN4IH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuaW1wb3J0IFN0dWRlbnRSb3dFZGl0IGZyb20gXCIuL2VkaXQtc3R1ZGVudFwiO1xyXG5cclxuY29uc3QgU3R1ZGVudFJlYWRXcml0ZSA9ICh7IHN0dWRlbnREYXRhIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0Um93LCBzZXRFZGl0Um93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXRlbVJvdywgc2V0SXRlbVJvd10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBjb25zdCBbaXRlbVJvdywgc2V0SXRlbVJvd10gPSB1c2VTdGF0ZShzdHVkZW50RGF0YSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBzZXRJdGVtUm93KHN0dWRlbnREYXRhKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIC8vIGlmICghaXRlbVJvdykge1xyXG4gIC8vICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IHNob3dEcm9wbGlzdCA9IChpdGVtKSA9PiB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICBzZXRJdGVtUm93KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIGNvbnN0IGNsb3NlRHJvcGxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgIHNldEl0ZW1Sb3cobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgZWRpdFN0dWRlbnREYXRhID0gKGl0ZW0pID0+IHtcclxuICAvLyAgIC8vIHNldEVkaXRSb3codHJ1ZSk7XHJcbiAgLy8gICAvLyBzZXRJdGVtUm93KGl0ZW0pO1xyXG4gIC8vIH07XHJcblxyXG4gIC8vIGNvbnN0IGVkaXRHcmFkZURhdGEgPSAoaXRlbSkgPT4ge1xyXG4gIC8vIHNldEVkaXRSb3codHJ1ZSk7XHJcbiAgLy8gc2V0SXRlbVJvdyhpdGVtKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBkcm9wbGlzdCA9IGl0ZW1Sb3cgJiYgKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtdC0yIHB5LTIgdy00OCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy14bFwiPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1pbmRpZ28tNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgMWVyZSBTZW1lc3RyZVxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWluZGlnby01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICAyZW1lIFNlbWVzdHJlXHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGVkaXRWaWV3ID0gaXRlbVJvdyAmJiAoXHJcbiAgICA8U3R1ZGVudFJvd0VkaXRcclxuICAgICAgaXRlbT17aXRlbVJvd31cclxuICAgICAgc2hvd01vZGFsPXsoKSA9PiBzZXRFZGl0Um93KGZhbHNlKX1cclxuICAgICAgb25EYXRhQ2hhbmdlPXtzZXRJdGVtUm93fVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKGl0ZW1Sb3cgJiYgaXRlbVJvdy5tb2RpZmllZCkge1xyXG4gIC8vICAgICAvL1RPRE86IGZvciBBUElcclxuICAvLyAgICAgY29uc3QgeyBtb2RpZmllZCwgLi4uYWxsUmVzdCB9ID0gaXRlbVJvdztcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJSb3cgSXRlbSBjaGFuZ2VkOiBcIiwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcclxuICAvLyAgICAgY29uc29sZS5sb2coaXRlbVJvdyk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKGFsbFJlc3QpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJqdXN0IHZpZXdcIik7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW2VkaXRSb3ddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgb25DbGljaz17KCkgPT4gY2xvc2VEcm9wbGlzdCgpfT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBiZy13aGl0ZSBtaW4taC02NCBzbTp3LTEvMiBtZDp3LTEvM1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHgtMiB0ZXh0LWdyYXktNjAwIG1iLTIgdGV4dC0yeGwgZm9udC10aGluIHB4LTQgcHQtM1wiPlxyXG4gICAgICAgICAgICBFbGV2ZS9FdHVkaWFudHNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMlwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCBtLTEgdGV4dC1ibHVlLTQwMFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTQuNzEgMTRIMTUuNUwyMC40OSAxOUwxOSAyMC40OUwxNCAxNS41VjE0LjcxTDEzLjczIDE0LjQzQzEyLjU5IDE1LjQxIDExLjExIDE2IDkuNSAxNkM1LjkwOTk3IDE2IDMgMTMuMDkgMyA5LjVDMyA1LjkwOTk3IDUuOTA5OTcgMyA5LjUgM0MxMy4wOSAzIDE2IDUuOTA5OTcgMTYgOS41QzE2IDExLjExIDE1LjQxIDEyLjU5IDE0LjQzIDEzLjczTDE0LjcxIDE0Wk01IDkuNUM1IDExLjk5IDcuMDEwMDEgMTQgOS41IDE0QzExLjk5IDE0IDE0IDExLjk5IDE0IDkuNUMxNCA3LjAxMDAxIDExLjk5IDUgOS41IDVDNy4wMTAwMSA1IDUgNy4wMTAwMSA1IDkuNVpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImJsYWNrXCJcclxuICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuNTRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOCBwLTEgYmctZ3JheS0yMDAgdy1mdWxsIHJvdW5kZWQgcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRlYW1zIG9yIG1lbWJlcnNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgcHgtM1wiPlxyXG4gICAgICAgICAgICB7c3R1ZGVudERhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgcHgtMiBweS0yIGhvdmVyOmJnLWJsdWUtMTAwIGhvdmVyOnJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yIHRleHQtZ3JheS01MDAgbXgtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDggOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNFwiIGN5PVwiNFwiIHI9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5maXJzdG5hbWUgKyBcIiBcIiArIGl0ZW0ubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWwtNSB0ZXh0LWdyYXktNTAwIHRleHQtYmFzZSBmb250LXRoaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5jbGFzc31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmb250LXNlbWlib2xkIG14LTIgcC0yIGJvcmRlciByb3VuZGVkLW1kIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS0yMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IGVkaXRTdHVkZW50RGF0YShpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi4zIDMuN2w0IDRMNCAyMEgwdi00TDEyLjMgMy43em0xLjQtMS40TDE2IDBsNCA0LTIuMyAyLjMtNC00elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgZm9udC1zZW1pYm9sZCBwLTIgYm9yZGVyIHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JlZW4tMjAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBlZGl0R3JhZGVEYXRhKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1IDloLTN2MmgzdjNoMnYtM2gzVjloLTNWNmgtMnYzek0wIDNoMTB2MkgwVjN6bTAgOGgxMHYySDB2LTJ6bTAtNGgxMHYySDBWN3ptMCA4aDEwdjJIMHYtMnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JlZW4tNTAwIGZvbnQtc2VtaWJvbGQgcC0yIGJvcmRlciByb3VuZGVkLW1kIGhvdmVyOmJnLWdyZWVuLTIwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0Ryb3BsaXN0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1IDloLTN2MmgzdjNoMnYtM2gzVjloLTNWNmgtMnYzek0wIDNoMTB2MkgwVjN6bTAgOGgxMHYySDB2LTJ6bTAtNGgxMHYySDBWN3ptMCA4aDEwdjJIMHYtMnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgaXRlbS5pZCA9PT0gaXRlbVJvdy5pZCAmJiBkcm9wbGlzdH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCBmbGV4IGZsZXgtcm93LXJldmVyc2UgcHgtMiBweS0zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcHktMiBweC00IHJvdW5kZWQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIEludml0ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweS0yIHB4LTQgcm91bmRlZCB0ZXh0LWdyYXktNjAwXCI+QWpvdXRlciA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiB7ZWRpdFJvdyAmJiBlZGl0Vmlld30gKi99XHJcbiAgICAgIDwvZGl2PlxyXG57LyogXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIGJnLXdoaXRlIG1pbi1oLTY0IHNtOnctMS8yIG1kOnctMS8zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICA8c3Bhbj5Db3Vyczwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPlByZW1pZXJlIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPkNvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+Q291cnM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UmVhZFdyaXRlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9