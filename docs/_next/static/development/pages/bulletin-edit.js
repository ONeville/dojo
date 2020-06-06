(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\bulletin-edit.js"],{

/***/ "./components/bulletin/bulletin-shared.js":
/*!************************************************!*\
  !*** ./components/bulletin/bulletin-shared.js ***!
  \************************************************/
/*! exports provided: groupBy, categoryMap, bulletinEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryMap", function() { return categoryMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulletinEntity", function() { return bulletinEntity; });
var groupBy = function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var categoryMap = function categoryMap(type) {
  switch (type) {
    case 1:
      return {
        label: "MAXIMA",
        max: 10,
        coef: 2
      };

    case 2:
      return {
        label: "MAXIMA",
        max: 20,
        coef: 11
      };

    case 3:
      return {
        label: "MAXIMA",
        max: 50,
        coef: 3
      };

    case 4:
      return {
        label: "MAXIMA",
        max: 100,
        coef: 1
      };

    default:
      break;
  }
};
var maximaList = [1, 2, 3, 4].map(function (x) {
  return categoryMap(x);
});
var bulletinEntity = function bulletinEntity(coursesData) {
  var bulletinGrouped = groupBy(coursesData, "category");
  var totalGrade = {
    periode1: coursesData.reduce(function (acc, curr) {
      return acc + curr.semester1.periode1;
    }, 0),
    periode2: coursesData.reduce(function (acc, curr) {
      return acc + curr.semester1.periode2;
    }, 0),
    exam1: coursesData.reduce(function (acc, curr) {
      return acc + curr.semester1.exam;
    }, 0),
    periode3: coursesData.reduce(function (acc, curr) {
      return acc + curr.semester2.periode1;
    }, 0),
    periode4: coursesData.reduce(function (acc, curr) {
      return acc + curr.semester2.periode2;
    }, 0),
    exam2: coursesData.reduce(function (acc, curr) {
      return acc + curr.semester2.exam;
    }, 0)
  };
  var maximaPeriod1 = maximaList.reduce(function (acc, curr) {
    return acc + curr.max * curr.coef;
  }, 0);
  var maximaPeriod2 = maximaList.reduce(function (acc, curr) {
    return acc + curr.max * curr.coef;
  }, 0);
  var maximaExam = maximaList.reduce(function (acc, curr) {
    return acc + curr.max * curr.coef * 2;
  }, 0) - 200;
  var totalGradePercentage = (totalGrade.periode1 + totalGrade.periode2 + totalGrade.exam1 + totalGrade.periode3 + totalGrade.periode4 + totalGrade.exam2) * 100 / ((maximaPeriod1 + maximaPeriod2 + maximaExam) * 2);
  return {
    bulletinGrouped: bulletinGrouped,
    totalGrade: totalGrade,
    totalGradePercentage: totalGradePercentage,
    maximaPeriod1: maximaPeriod1,
    maximaPeriod2: maximaPeriod2,
    maximaExam: maximaExam
  };
};

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

/***/ }),

/***/ "./components/bulletin/bulletin-write.js":
/*!***********************************************!*\
  !*** ./components/bulletin/bulletin-write.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _bulletin_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bulletin-shared */ "./components/bulletin/bulletin-shared.js");
/* harmony import */ var _edit_grade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-grade */ "./components/bulletin/edit-grade.js");


var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\components\\bulletin\\bulletin-write.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */





var BulletinReadWrite = function BulletinReadWrite(_ref) {
  _s();

  var coursesData = _ref.coursesData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editRow = _useState[0],
      setEditRow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      itemRow = _useState2[0],
      setItemRow = _useState2[1];

  var _bulletinEntity = Object(_bulletin_shared__WEBPACK_IMPORTED_MODULE_3__["bulletinEntity"])(coursesData),
      totalGrade = _bulletinEntity.totalGrade,
      bulletinGrouped = _bulletinEntity.bulletinGrouped,
      totalGradePercentage = _bulletinEntity.totalGradePercentage,
      maximaPeriod1 = _bulletinEntity.maximaPeriod1,
      maximaPeriod2 = _bulletinEntity.maximaPeriod2,
      maximaExam = _bulletinEntity.maximaExam;

  var gradeColor = totalGradePercentage < 50 ? "text-red-500" : "text-green-500";

  var strip = function strip(i) {
    return i % 2 !== 0 ? "bg-gray-300" : "";
  };

  if (!totalGrade || !bulletinGrouped) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "Loading...");
  }

  var editRowData = function editRowData(item) {
    setEditRow(true);
    setItemRow(item);
  };

  var editView = itemRow && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_edit_grade__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: itemRow,
    showModal: function showModal() {
      return setEditRow(false);
    },
    onDataChange: setItemRow,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (itemRow && itemRow.modified) {
      //TODO: for API
      var modified = itemRow.modified,
          allRest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(itemRow, ["modified"]);

      console.log("Row Item changed: ", new Date().toString());
      console.log(itemRow);
      console.log(allRest);
    } else {
      console.log("just view");
    }
  }, [editRow]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "flex flex-wrap justify-between border my-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "flex flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "flex items-center py-2 px-8 text-white bg-gray-600 text-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    className: "fill-current h-8 w-8",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
    d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "font-semibold ml-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "DIMPA DIAMOYO")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "py-2 px-8 font-semibold bg-gray-100 border-b text-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "1ere Secondaire"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "py-2 px-8 font-semibold bg-gray-100 text-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "ECAMO")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "flex flex-wrap justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "flex flex-col justify-center items-center border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "py-2 px-8 font-semibold text-white bg-gray-600 text-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "1ere Semestre"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "py-6 flex items-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "text-center text-4xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, ((totalGrade.periode1 + totalGrade.periode2 + totalGrade.exam1) * 100 / (maximaPeriod1 + maximaPeriod2 + maximaExam)).toFixed("2")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "text-lg font-semibold mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "%"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: " flex flex-col justify-center items-center border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "py-2 px-8 font-semibold text-white bg-gray-600 text-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "2ere Semestre"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "py-6 flex items-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "text-center text-4xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, ((totalGrade.periode3 + totalGrade.periode4 + totalGrade.exam2) * 100 / (maximaPeriod1 + maximaPeriod2 + maximaExam)).toFixed("2")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "text-lg font-semibold mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, "%"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: " flex flex-col justify-center items-center border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "py-2 px-10 font-semibold text-white bg-gray-600 text-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "GENERAL"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "py-6 flex items-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "text-center text-4xl font-bold " + gradeColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, totalGradePercentage.toFixed("2")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    className: "text-lg font-semibold mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "%"))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("table", {
    className: "table-auto w-full border-t-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2 border-r-4 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2 border-r-4 border-gray-600",
    colSpan: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, "PREMIERE SEMESTRE"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    colSpan: "6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "DEUXIEME SEMESTRE")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2 border-r-4 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "Cours"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, "1ere P"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "2eme P"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "EXAM"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2 border-r-4 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, "TOT"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "3eme P"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "4eme P"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "EXAM"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2 border-r-2 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "TOP"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "T.G"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("th", {
    className: "px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tbody", {
    className: "border-b-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }, [1, 2, 3, 4].map(function (x) {
    var maxima = Object(_bulletin_shared__WEBPACK_IMPORTED_MODULE_3__["categoryMap"])(x);
    var course = bulletinGrouped[x.toString()];
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: x.toString() + "Roller",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tr", {
      key: x.toString() + "maxima",
      className: "bg-indigo-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border font-bold px-4 py-2 border-r-4 border-gray-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, maxima.label), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }, maxima.max), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 19
      }
    }, maxima.max), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, maxima.max !== 100 ? maxima.max * 2 : ""), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-4 border-gray-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }, maxima.max * 4), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 19
      }
    }, maxima.max), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 19
      }
    }, maxima.max), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 19
      }
    }, maxima.max !== 100 ? maxima.max * 2 : ""), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-2 border-gray-600",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 19
      }
    }, maxima.max * 4), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 19
      }
    }, maxima.max * 8), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
      className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 19
      }
    })), course.map(function (item) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        key: item.id.toString() + item.course,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 19
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tr", {
        key: item.course,
        className: strip(item.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border pl-8 pr-4 py-2 border-r-4 border-gray-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 23
        }
      }, item.course), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 text-center font-semibold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 23
        }
      }, item.semester1.periode1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 text-center font-semibold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 23
        }
      }, item.semester1.periode2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 text-center font-semibold",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 23
        }
      }, item.semester1.exam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 text-center font-semibold border-r-4 border-gray-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 23
        }
      }, item.semester1.periode1 + item.semester1.periode2 + item.semester1.exam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 font-semibold text-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 23
        }
      }, item.semester2.periode1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 font-semibold text-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 23
        }
      }, item.semester2.periode2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 font-semibold text-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 23
        }
      }, item.semester2.exam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 font-semibold text-center border-r-2 border-gray-600",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 23
        }
      }, item.semester2.periode1 + item.semester2.periode2 + item.semester2.exam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border px-4 py-2 font-semibold text-center",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 23
        }
      }, item.semester1.periode1 + item.semester1.periode2 + item.semester1.exam + item.semester2.periode1 + item.semester2.periode2 + item.semester2.exam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
        className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 23
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
        className: "cursor-pointer",
        onClick: function onClick() {
          return editRowData(item);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
        className: "fill-current h-4 w-4",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 27
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        d: "M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 29
        }
      }))))));
    }));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tr", {
    className: "bg-indigo-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold px-4 py-2 border-r-4 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, "MAXIMA GENERAL"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, maximaPeriod1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, maximaPeriod2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  }, maximaExam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-4 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 13
    }
  }, maximaPeriod1 + maximaPeriod2 + maximaExam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, maximaPeriod1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }, maximaPeriod2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, maximaExam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-2 border-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }, maximaPeriod1 + maximaPeriod2 + maximaExam), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border text-indigo-500 font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, (maximaPeriod1 + maximaPeriod2 + maximaExam) * 2)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tr", {
    className: "bg-indigo-700 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, "TOTAUX"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, totalGrade.periode1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, totalGrade.periode2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }
  }, totalGrade.exam1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 13
    }
  }, totalGrade.periode1 + totalGrade.periode2 + totalGrade.exam1), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, totalGrade.periode3), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, totalGrade.periode4), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, totalGrade.exam2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }, totalGrade.periode3 + totalGrade.periode4 + totalGrade.exam2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("td", {
    className: "border font-bold text-lg text-center px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, totalGrade.periode1 + totalGrade.periode2 + totalGrade.exam1 + totalGrade.periode3 + totalGrade.periode4 + totalGrade.exam2)))), editRow && editView);
};

_s(BulletinReadWrite, "5ol+UJfPDkmsFAuJXhzX12Caao0=");

_c = BulletinReadWrite;
/* harmony default export */ __webpack_exports__["default"] = (BulletinReadWrite);

var _c;

$RefreshReg$(_c, "BulletinReadWrite");

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

/***/ }),

/***/ "./components/bulletin/edit-grade.js":
/*!*******************************************!*\
  !*** ./components/bulletin/edit-grade.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");


var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\components\\bulletin\\edit-grade.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var BulletinRowEdit = function BulletinRowEdit(_ref) {
  _s();

  var item = _ref.item,
      showModal = _ref.showModal,
      onDataChange = _ref.onDataChange;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(data) {
    var ediData = _objectSpread(_objectSpread({}, item), {}, {
      modified: true
    });

    ediData.semester1.periode1 = parseInt(data.period1.replace('_', ""));
    ediData.semester1.periode2 = parseInt(data.period2.replace("_", ""));
    ediData.semester1.exam = parseInt(data.exam1.replace("_", ""));
    ediData.semester2.periode1 = parseInt(data.period3.replace("_", ""));
    ediData.semester2.periode1 = parseInt(data.period4.replace("_", ""));
    ediData.semester2.exam = parseInt(data.exam2.replace("_", ""));
    onDataChange(ediData);
    showModal(false);
  };

  var Input = function Input(_ref2) {
    var label = _ref2.label,
        data = _ref2.data,
        register = _ref2.register,
        errors = _ref2.errors;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_input_mask__WEBPACK_IMPORTED_MODULE_2___default.a, {
      name: label,
      className: "border border-blue-300 w-8 text-center leading-tight focus:outline-none focus:shadow-outline",
      mask: "99",
      inputRef: register,
      defaultValue: data,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }), errors[label] && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, "Last name is required"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" // onClick={showModal}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "relative w-auto my-6 mx-auto max-w-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "font-medium mr-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Ajouter/Modifier:"), " ", __jsx("span", {
    className: "text-xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, item.course)), __jsx("button", {
    className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
    onClick: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "\xD7"))), __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative px-6 flex-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "flex flex-col border rounded-sm my-2 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-2 px-4 font-semibold bg-gray-200 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "1ere Semestre"), __jsx("div", {
    className: "flex justify-between w-auto px-4 py-1 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "1ere Periode"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(Input, {
    label: "period1",
    register: register,
    errors: errors,
    data: item.semester1.periode1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "flex justify-between w-auto px-4 py-1 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "2eme Periode"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(Input, {
    label: "period2",
    register: register,
    errors: errors,
    data: item.semester1.periode2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "flex justify-between w-auto px-4 py-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, "Examen"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx(Input, {
    label: "exam1",
    register: register,
    errors: errors,
    data: item.semester1.exam,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "flex flex-col border rounded-sm my-2 pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-2 px-4 font-semibold bg-gray-200 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, "2eme Semestre"), __jsx("div", {
    className: "flex justify-between w-auto py-1 px-4 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, "3eme Periode"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx(Input, {
    label: "period3",
    register: register,
    errors: errors,
    data: item.semester2.periode1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "flex justify-between w-auto py-1 px-4 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, "4eme Periode"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(Input, {
    label: "period4",
    register: register,
    errors: errors,
    data: item.semester2.periode2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "flex justify-between w-auto py-1 px-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Examen"), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx(Input, {
    label: "exam2",
    register: register,
    errors: errors,
    data: item.semester2.exam,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    className: "flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",
    type: "reset",
    style: {
      transition: "all .15s ease"
    },
    onClick: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "Annuler"), __jsx("button", {
    className: "bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1",
    type: "submit",
    style: {
      transition: "all .15s ease"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "Enregistrer")))))), __jsx("div", {
    className: "opacity-25 fixed inset-0 z-40 bg-black",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }));
};

_s(BulletinRowEdit, "+Nrz0BYUZDnkIuhmBbPsJSfSlWM=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"]];
});

_c = BulletinRowEdit;
/* harmony default export */ __webpack_exports__["default"] = (BulletinRowEdit);
/**
 *   {
    id: 1,
    category: 1,
    course: "Enseignement biblique",
    semester1: {
      periode1: 9,
      periode2: 7,
      exam: 14,
    },
    semester2: {
      periode1: 12,
      periode2: 6,
      exam: 18,
    },
  }
 * 
 */

var _c;

$RefreshReg$(_c, "BulletinRowEdit");

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

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\components\\header\\header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */


var _ref = false ? undefined : {
  name: "1eqz77c",
  styles: "top:0.5rem;left:0.8rem;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3Jrc3BhY2VcXHBsYXlncm91bmRcXFJFQUNUXFxidWxsZXRpbi1hcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IiLCJmaWxlIjoiRDpcXHdvcmtzcGFjZVxccGxheWdyb3VuZFxcUkVBQ1RcXGJ1bGxldGluLWFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc2NyZWVuIGgtYXV0byBiZy1tYWluXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcHQtMiBtZDpwdC0xIHBiLTEgcHgtMSBtdC0wIGgtYXV0byBmaXhlZCB3LWZ1bGwgei0yMCB0b3AtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1zaHJpbmsgbWQ6dy0xLzMganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBwbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJlbSBlbS1ncmlubmluZ1wiPjwvaT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgbWQ6dy0xLzMganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCB0ZXh0LXdoaXRlIHB4LTJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LXNtIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS03MDAgcm91bmRlZCBweS0xIHB4LTIgcGwtMTAgYXBwZWFyYW5jZS1ub25lIGxlYWRpbmctbm9ybWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNlYXJjaC1pY29uXCJcclxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtd2hpdGUgdy00IGgtNFwiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45IDE0LjMyYTggOCAwIDEgMSAxLjQxLTEuNDFsNS4zNSA1LjMzLTEuNDIgMS40Mi01LjMzLTUuMzR6TTggMTRBNiA2IDAgMSAwIDggMmE2IDYgMCAwIDAgMCAxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBwdC0yIGNvbnRlbnQtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1yZXNldCBmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LTEgbWQ6ZmxleC1ub25lIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6ZmxleC1ub25lIG1kOm1yLTNcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC13aGl0ZSBuby11bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSBtZDptci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1ncmF5LTYwMCBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTIwMCBob3Zlcjp0ZXh0LXVuZGVybGluZSBweS0yIHB4LTRcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2J1bGxldGluLWVkaXRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmUgbWQ6bXItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtOCB3LThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwek03IDZ2MmEzIDMgMCAxIDAgNiAwVjZhMyAzIDAgMSAwLTYgMHptLTMuNjUgOC40NGE4IDggMCAwIDAgMTMuMyAwIDE1Ljk0IDE1Ljk0IDAgMCAwLTEzLjMgMHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2YuIEthbmRvbG9cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMgZmlsbC1jdXJyZW50IGlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS4yOTMgMTIuOTVsLjcwNy43MDdMMTUuNjU3IDhsLTEuNDE0LTEuNDE0TDEwIDEwLjgyOCA1Ljc1NyA2LjU4NiA0LjM0MyA4elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJteURyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bmxpc3QgYWJzb2x1dGUgYmctZ3JheS05MDAgdGV4dC13aGl0ZSByaWdodC0wIG10LTMgcC0zIG92ZXJmbG93LWF1dG8gei0zMCBpbnZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wLXNlYXJjaCBwLTIgdGV4dC1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXlJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGhvdmVyOmJnLWdyYXktODAwIHRleHQtd2hpdGUgdGV4dC1zbSBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyIGZhLWZ3XCI+PC9pPiBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgaG92ZXI6YmctZ3JheS04MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1md1wiPjwvaT4gU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktODAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBob3ZlcjpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHRleHQtc20gbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSBibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdCBmYS1md1wiPjwvaT4gTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    className: "w-full max-w-screen h-auto bg-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    className: "bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "flex flex-wrap items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "flex flex-shrink md:w-1/3 justify-center md:justify-start text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "text-xl pl-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("i", {
    className: "em em-grinning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "relative w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "search",
    placeholder: "Search",
    className: "w-full bg-gray-800 text-sm text-white transition border border-transparent focus:outline-none focus:border-gray-700 rounded py-1 px-2 pl-10 appearance-none leading-normal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "absolute search-icon",
    css: _ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "fill-current pointer-events-none text-white w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    className: "list-reset flex justify-between flex-1 md:flex-none items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "flex-1 md:flex-none md:mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    className: "inline-block py-2 px-4 text-white no-underline",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Accueil")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "flex-1 md:flex-none md:mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "relative inline-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    className: "flex items-center text-white focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "pr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "fill-current h-8 w-8",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }))), "Prof. Kandolo", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "h-3 fill-current inline",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    id: "myDropdown",
    className: "dropdownlist absolute bg-gray-900 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "text",
    className: "drop-search p-2 text-gray-600",
    placeholder: "Search..",
    id: "myInput",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "#",
    className: "p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("i", {
    className: "fa fa-user fa-fw",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }), " Profile"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "#",
    className: "p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("i", {
    className: "fa fa-cog fa-fw",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }
  }), " Settings"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "border border-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "#",
    className: "p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("i", {
    className: "fas fa-sign-out-alt fa-fw",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }), " Log Out")))))))));
});

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

/***/ }),

/***/ "./components/header/side-menu.js":
/*!****************************************!*\
  !*** ./components/header/side-menu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\components\\header\\side-menu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


var SideMenu = function SideMenu() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    className: "list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "mr-3 flex-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "/",
    className: "flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "fill-current h-8 w-8 pr-0 md:pr-3 text-blue-600",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Accueil"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "mr-3 flex-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "/bulletin-edit",
    className: "flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "fill-current h-8 w-8 pr-0 md:pr-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Gestion de Notes"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "mr-3 flex-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "/student",
    className: "flex items-center py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", {
    className: "fill-current h-8 w-8 pr-0 md:pr-3",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    className: "pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "Eleves"))))));
};

_c = SideMenu;
/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

var _c;

$RefreshReg$(_c, "SideMenu");

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

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header */ "./components/header/header.js");
/* harmony import */ var _components_header_side_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/side-menu */ "./components/header/side-menu.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\components\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "This is the default title" : _ref$title,
      _ref$isHome = _ref.isHome,
      isHome = _ref$isHome === void 0 ? false : _ref$isHome;
  return __jsx("div", {
    className: "bg-gray-900 font-sans leading-normal tracking-normal mt-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, title), __jsx("meta", {
    charSet: "utf-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  })), __jsx(_header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isHome: isHome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("main", {
    className: "flex flex-col md:flex-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_header_side_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, children)));
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if ( true && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  if (true) {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: css, CacheProvider, ClassNames, Global, ThemeContext, jsx, keyframes, withEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"]; });










var EmotionCacheContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe


var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" + props.css + "`");
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|)jsx.*\n\s+at ([A-Z][A-Za-z$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  createElementArgArray[1] = newProps;

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global =
/* #__PURE__ */
withEmotionCache(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;

  if (typeof styles === 'function') {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles(theme)]);
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])([styles]);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_6__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(args, context.registered);

      {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(context, serialized, false);
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "development" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.browser.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if ( true && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.browser.esm.js ***!
  \***************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fbulletin-edit&absolutePagePath=D%3A%5Cworkspace%5Cplayground%5CREACT%5Cbulletin-app%5Cpages%5Cbulletin-edit.js!./":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fbulletin-edit&absolutePagePath=D%3A%5Cworkspace%5Cplayground%5CREACT%5Cbulletin-app%5Cpages%5Cbulletin-edit.js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/bulletin-edit",
      function () {
        return __webpack_require__(/*! ./pages/bulletin-edit.js */ "./pages/bulletin-edit.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext(null);

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return _react["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = (0, _sideEffect["default"])();
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/

function Head(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ampContext.AmpStateContext.Consumer, null, function (ampState) {
    return /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Consumer, null, function (updateHead) {
      return /*#__PURE__*/_react["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: (0, _amp.isInAmpMode)(ampState)
      }, children);
    });
  });
}

_c = Head;
Head.rewind = Effect.rewind;
var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = function _default() {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react$Component) {
    _inherits(_class, _react$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(_react.Component);
};

exports["default"] = _default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-hook-form/dist/react-hook-form.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-hook-form/dist/react-hook-form.es.js ***!
  \*****************************************************************/
/*! exports provided: Controller, ErrorMessage, FormContext, useFieldArray, useForm, useFormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isNullOrUndefined = (value) => value == null;

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

var isHTMLElement = (value) => isObject(value) && value.nodeType === Node.ELEMENT_NODE;

const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
};
const VALUE = 'value';
const UNDEFINED = 'undefined';
const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const SELECT = 'select';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};
const REGEX_IS_DEEP_PROP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const REGEX_IS_PLAIN_PROP = /^\w*$/;
const REGEX_PROP_NAME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const REGEX_ESCAPE_CHAR = /\\(\\)?/g;
const REGEX_ARRAY_FIELD_INDEX = /[\d+]/g;

function attachEventListeners({ field: { ref }, handleChange, isRadioOrCheckbox, }) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isKey = (value) => !isArray(value) &&
    (REGEX_IS_PLAIN_PROP.test(value) || !REGEX_IS_DEEP_PROP.test(value));

var stringToPath = (string) => {
    const result = [];
    string.replace(REGEX_PROP_NAME, (match, number, quote, string) => {
        result.push(quote ? string.replace(REGEX_ESCAPE_CHAR, '$1') : number || match);
    });
    return result;
};

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!isKey(key)) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    const result = path
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

var isRadioInput = (element) => element.type === 'radio';

var isCheckBoxInput = (element) => element.type === 'checkbox';

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
}
function baseGet(object, path) {
    const updatePath = isKey(path) ? [path] : castPath(path);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return index == length ? object : undefined;
}
function baseSlice(array, start, end) {
    let index = -1;
    let length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start;
    const result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
function parent(object, path) {
    return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function baseUnset(object, path) {
    const updatePath = isKey(path) ? [path] : castPath(path);
    const childObject = parent(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    const result = !(childObject != null) || delete childObject[key];
    let previousObjRef = undefined;
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index) {
                if ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (isArray(objectRef) &&
                        !objectRef.filter((data) => isObject(data) && !isEmptyObject(data))
                            .length)) {
                    previousObjRef ? delete previousObjRef[item] : delete object[item];
                }
            }
            previousObjRef = objectRef;
        }
    }
    return result;
}
function unset(object, paths) {
    paths.forEach((path) => {
        baseUnset(object, path);
    });
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
    const { ref, ref: { name, type }, mutationWatcher, } = field;
    const fieldValue = fields[name];
    if (!type) {
        delete fields[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldValue) {
        const { options } = fieldValue;
        if (isArray(options) && options.length) {
            options.filter(Boolean).forEach((option, index) => {
                const { ref, mutationWatcher } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    unset(options, [`[${index}]`]);
                }
            });
            if (options && !options.filter(Boolean).length) {
                delete fields[name];
            }
        }
        else {
            delete fields[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldValue, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fields[name];
    }
}

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

var isEmptyString = (value) => value === '';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || isEmptyString(value)
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fields, ref) {
    const { name, value } = ref;
    const field = fields[name];
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return field ? getRadioValue(field.options).value : '';
    }
    if (isMultipleSelect(ref)) {
        return getMultipleSelectValue(ref.options);
    }
    if (isCheckBoxInput(ref)) {
        return field ? getCheckboxValue(field.options).value : false;
    }
    return value;
}

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fields, search) => {
    const output = {};
    for (const name in fields) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : isArray(search)
                    ? search.find((data) => name.startsWith(data))
                    : search && search.nest)) {
            output[name] = getFieldValue(fields, fields[name].ref);
        }
    }
    return output;
};

var compareObject = (objectA = {}, objectB = {}) => {
    const objectAKeys = Object.keys(objectA);
    const objectBKeys = Object.keys(objectB);
    return (objectAKeys.length === objectBKeys.length &&
        objectAKeys.every((key) => objectB[key] && objectB[key] === objectA[key]));
};

var isSameError = (error, { type, types, message }) => isObject(error) &&
    error.type === type &&
    error.message === message &&
    compareObject(error.types, types);

function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isFieldValid = isEmptyObject(error);
    const isFormValid = isEmptyObject(errors);
    const currentFieldError = get(error, name);
    const existFieldError = get(errors, name);
    if ((isFieldValid && validFields.has(name)) ||
        (existFieldError && existFieldError.isManual)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => {
    const isValueMessage = (value) => isObject(value) && !isRegex(value);
    return isValueMessage(validationData)
        ? validationData
        : {
            value: validationData,
            message: '',
        };
};

var isFunction = (value) => typeof value === 'function';

var isBoolean = (value) => typeof value === 'boolean';

var isMessage = (value) => isString(value) || (isObject(value) && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value, name }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
    var _a;
    const fields = fieldsRef.current;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = isEmptyString(value);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
        if (!validateAllFieldCriteria) {
            return error;
        }
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox ? (_a = fields[name].options) === null || _a === void 0 ? void 0 : _a[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fields, ref);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const parseErrorSchema = (error, validateAllFieldCriteria) => isArray(error.inner)
    ? error.inner.reduce((previous, { path, message, type }) => (Object.assign(Object.assign({}, previous), (path
        ? previous[path] && validateAllFieldCriteria
            ? {
                [path]: appendErrors(path, validateAllFieldCriteria, previous, type, message),
            }
            : {
                [path]: previous[path] || Object.assign({ message,
                    type }, (validateAllFieldCriteria
                    ? {
                        types: { [type]: message || true },
                    }
                    : {})),
            }
        : {}))), {})
    : {
        [error.path]: { message: error.message, type: error.type },
    };
async function validateWithSchema(validationSchema, validateAllFieldCriteria, data, validationResolver, context) {
    if (validationResolver) {
        return validationResolver(data, context);
    }
    try {
        return {
            values: await validationSchema.validate(data, {
                abortEarly: false,
                context,
            }),
            errors: {},
        };
    }
    catch (e) {
        return {
            values: {},
            errors: transformToNestObject(parseErrorSchema(e, validateAllFieldCriteria)),
        };
    }
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

const getPath = (path, values) => {
    const getInnerPath = (value, key, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return isArray(values)
        ? values.map((value, key) => getInnerPath(value, key))
        : Object.entries(values).map(([key, value]) => getInnerPath(value, key, true));
};
var getPath$1 = (parentPath, value) => getPath(parentPath, value).flat(Infinity);

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else if (!isUndefined(fieldValues[fieldName])) {
        value = fieldValues[fieldName];
        watchFields.add(fieldName);
    }
    else {
        value = get(transformToNestObject(fieldValues), fieldName);
        if (!isUndefined(value)) {
            getPath$1(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnChange, hasError, isBlurEvent, isOnSubmit, isReValidateOnSubmit, isOnBlur, isReValidateOnBlur, isSubmitted, }) => (isOnChange && isBlurEvent) ||
    (isOnSubmit && isReValidateOnSubmit) ||
    (isOnSubmit && !isSubmitted) ||
    (isOnBlur && !isBlurEvent && !hasError) ||
    (isReValidateOnBlur && !isBlurEvent && hasError) ||
    (isReValidateOnSubmit && isSubmitted);

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

var getFieldValueByName = (fields, name) => {
    const results = transformToNestObject(getFieldsValues(fields));
    return name ? get(results, name, results) : results;
};

function getIsFieldsDifferent(referenceArray, differenceArray) {
    let isMatch = false;
    if (!isArray(referenceArray) ||
        !isArray(differenceArray) ||
        referenceArray.length !== differenceArray.length) {
        return true;
    }
    for (let i = 0; i < referenceArray.length; i++) {
        if (isMatch) {
            break;
        }
        const dataA = referenceArray[i];
        const dataB = differenceArray[i];
        if (isUndefined(dataB) ||
            Object.keys(dataA).length !== Object.keys(dataB).length) {
            isMatch = true;
            break;
        }
        for (const key in dataA) {
            if (dataA[key] !== dataB[key]) {
                isMatch = true;
                break;
            }
        }
    }
    return isMatch;
}

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(element, onDetachCallback) {
    const observer = new MutationObserver(() => {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, validationSchema, validationResolver, validationContext, defaultValues = {}, submitFocusError = true, validateCriteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const errorsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const touchedFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const dirtyFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const isValidRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const defaultValuesAtRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isSubmittedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isDirtyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const submitCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const isSubmittingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const validationContextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validationContext);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const [, render] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const { isOnBlur, isOnSubmit, isOnChange } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode)).current;
    const validateAllFieldCriteria = validateCriteriaMode === 'all';
    const isWindowUndefined = typeof window === UNDEFINED;
    const shouldValidateSchemaOrResolver = !!(validationSchema || validationResolver);
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        dirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode)).current;
    validationContextRef.current = validationContext;
    const reRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false) => {
        let shouldReRender = shouldRender ||
            shouldRenderBasedOnError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) ||
                shouldValidateSchemaOrResolver) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || get(errorsRef.current, name);
            }
            errorsRef.current = unset(errorsRef.current, [name]);
        }
        else {
            const previousError = get(errorsRef.current, name);
            validFieldsRef.current.delete(name);
            shouldReRender =
                shouldReRender ||
                    (previousError
                        ? !isSameError(previousError, error[name])
                        : true);
            set(errorsRef.current, name, error[name]);
        }
        if (shouldReRender && !isNullOrUndefined(shouldRender)) {
            reRender();
            return true;
        }
    }, [reRender, shouldValidateSchemaOrResolver]);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, rawValue) => {
        const { ref, options } = field;
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref)) {
            if (isString(value)) {
                ref.value = value;
            }
            else {
                ref.files = value;
            }
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, [isWeb]);
    const setDirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name) => {
        if (!fieldsRef.current[name] ||
            (!readFormStateRef.current.dirty && !readFormStateRef.current.dirtyFields)) {
            return false;
        }
        let isFieldDirty = defaultValuesAtRenderRef.current[name] !==
            getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const previousDirtyFieldsLength = dirtyFieldsRef.current.size;
        if (isFieldArray) {
            const fieldArrayName = getFieldArrayParentName(name);
            isFieldDirty = getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, fieldArrayName), get(defaultValuesRef.current, fieldArrayName));
        }
        const isDirtyChanged = (isFieldArray ? isDirtyRef.current : dirtyFieldsRef.current.has(name)) !==
            isFieldDirty;
        if (isFieldDirty) {
            dirtyFieldsRef.current.add(name);
        }
        else {
            dirtyFieldsRef.current.delete(name);
        }
        isDirtyRef.current = isFieldArray
            ? isFieldDirty
            : !!dirtyFieldsRef.current.size;
        return readFormStateRef.current.dirty
            ? isDirtyChanged
            : previousDirtyFieldsLength !== dirtyFieldsRef.current.size;
    }, []);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, parentFieldName) => {
        const isValueArray = isArray(value);
        for (const key in value) {
            const fieldName = `${parentFieldName || name}${isValueArray ? `[${key}]` : `.${key}`}`;
            const field = fieldsRef.current[fieldName];
            if (isObject(value[key])) {
                setInternalValues(name, value[key], fieldName);
            }
            if (field) {
                setFieldValue(field, value[key]);
                setDirty(fieldName);
            }
        }
    }, [setFieldValue, setDirty]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value) => {
        const field = fieldsRef.current[name];
        if (field) {
            setFieldValue(field, value);
            const output = setDirty(name);
            if (isBoolean(output)) {
                return output;
            }
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value);
        }
    }, [setDirty, setFieldValue, setInternalValues]);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        const field = fieldsRef.current[name];
        if (field) {
            const error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            shouldRenderBaseOnError(name, error, skipReRender ? null : false);
            return isEmptyObject(error);
        }
        return false;
    }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (payload) => {
        const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fieldsRef.current), validationResolver, validationContextRef.current);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isArray(payload)) {
            payload.forEach((name) => {
                const error = get(errors, name);
                if (error) {
                    set(errorsRef.current, name, error);
                }
                else {
                    unset(errorsRef.current, [name]);
                }
            });
            reRender();
        }
        else {
            const error = get(errors, payload);
            shouldRenderBaseOnError(payload, (error ? { [payload]: error } : {}), previousFormIsValid !== isValidRef.current);
        }
        return isEmptyObject(errorsRef.current);
    }, [
        reRender,
        shouldRenderBaseOnError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const triggerValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (payload) => {
        const fields = payload || Object.keys(fieldsRef.current);
        if (shouldValidateSchemaOrResolver) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [
        executeSchemaOrResolverValidation,
        executeValidation,
        reRender,
        shouldValidateSchemaOrResolver,
    ]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    function setValue(names, valueOrShouldValidate, shouldValidate) {
        let shouldRender = false;
        const isArrayValue = isArray(names);
        (isArrayValue
            ? names
            : [names]).forEach((name) => {
            const isStringFieldName = isString(name);
            shouldRender =
                setInternalValue(isStringFieldName ? name : Object.keys(name)[0], isStringFieldName
                    ? valueOrShouldValidate
                    : Object.values(name)[0]) || isArrayValue
                    ? true
                    : isFieldWatched(name);
        });
        if (shouldRender || isArrayValue) {
            reRender();
        }
        if (shouldValidate || (isArrayValue && valueOrShouldValidate)) {
            triggerValidation(isArrayValue ? undefined : names);
        }
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            const name = target ? target.name : '';
            const fields = fieldsRef.current;
            const errors = errorsRef.current;
            const field = fields[name];
            const currentError = get(errors, name);
            let error;
            if (!field) {
                return;
            }
            const isBlurEvent = type === EVENTS.BLUR;
            const shouldSkipValidation = skipValidation({
                hasError: !!currentError,
                isOnChange,
                isBlurEvent,
                isOnSubmit,
                isReValidateOnSubmit,
                isOnBlur,
                isReValidateOnBlur,
                isSubmitted: isSubmittedRef.current,
            });
            const shouldUpdateDirty = setDirty(name);
            let shouldRender = isFieldWatched(name) || shouldUpdateDirty;
            if (isBlurEvent &&
                !get(touchedFieldsRef.current, name) &&
                readFormStateRef.current.touched) {
                set(touchedFieldsRef.current, name, true);
                shouldRender = true;
            }
            if (shouldSkipValidation) {
                return shouldRender && reRender();
            }
            if (shouldValidateSchemaOrResolver) {
                const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fields), validationResolver, validationContextRef.current);
                const previousFormIsValid = isValidRef.current;
                isValidRef.current = isEmptyObject(errors);
                error = (get(errors, name)
                    ? { [name]: get(errors, name) }
                    : {});
                if (previousFormIsValid !== isValidRef.current) {
                    shouldRender = true;
                }
            }
            else {
                error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            }
            if (!shouldRenderBaseOnError(name, error) && shouldRender) {
                reRender();
            }
        };
    const validateSchemaOrResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((values = {}) => {
        const fieldValues = isEmptyObject(defaultValuesRef.current)
            ? getFieldsValues(fieldsRef.current)
            : defaultValuesRef.current;
        validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(Object.assign(Object.assign({}, fieldValues), values)), validationResolver, validationContextRef.current).then(({ errors }) => {
            const previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            if (previousFormIsValid !== isValidRef.current) {
                reRender();
            }
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reRender, validateAllFieldCriteria, validationResolver]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (handleChangeRef.current && field) {
            findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, forceDelete);
        }
    }, []);
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (!field ||
            (field &&
                isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) &&
                !forceDelete)) {
            return;
        }
        removeFieldEventListener(field, forceDelete);
        const { name } = field.ref;
        errorsRef.current = unset(errorsRef.current, [name]);
        touchedFieldsRef.current = unset(touchedFieldsRef.current, [name]);
        defaultValuesAtRenderRef.current = unset(defaultValuesAtRenderRef.current, [name]);
        [
            dirtyFieldsRef,
            fieldsWithValidationRef,
            validFieldsRef,
            watchFieldsRef,
        ].forEach((data) => data.current.delete(name));
        if (readFormStateRef.current.isValid ||
            readFormStateRef.current.touched) {
            reRender();
            if (shouldValidateSchemaOrResolver) {
                validateSchemaOrResolver();
            }
        }
    }, [
        reRender,
        shouldValidateSchemaOrResolver,
        validateSchemaOrResolver,
        removeFieldEventListener,
    ]);
    function clearError(name) {
        if (name) {
            unset(errorsRef.current, isArray(name) ? name : [name]);
        }
        else {
            errorsRef.current = {};
        }
        reRender();
    }
    const setInternalError = ({ name, type, types, message, shouldRender, }) => {
        const field = fieldsRef.current[name];
        if (!isSameError(get(errorsRef.current, name), {
            type,
            message,
            types,
        })) {
            set(errorsRef.current, name, {
                type,
                types,
                message,
                ref: field ? field.ref : {},
                isManual: true,
            });
            if (shouldRender) {
                reRender();
            }
        }
    };
    function setError(name, type = '', message) {
        if (isString(name)) {
            setInternalError(Object.assign(Object.assign({ name }, (isObject(type)
                ? {
                    types: type,
                    type: '',
                }
                : {
                    type,
                    message,
                })), { shouldRender: true }));
        }
        else if (isArray(name)) {
            name.forEach((error) => setInternalError(Object.assign({}, error)));
            reRender();
        }
    }
    function watch(fieldNames, defaultValue) {
        const watchFields = watchFieldsRef.current;
        const isDefaultValueUndefined = isUndefined(defaultValue);
        const combinedDefaultValues = isDefaultValueUndefined
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isDefaultValueUndefined
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = true;
        const result = (!isEmptyObject(fieldValues) && fieldValues) || combinedDefaultValues;
        return fieldNames && fieldNames.nest
            ? transformToNestObject(result)
            : result;
    }
    function unregister(name) {
        if (fieldsRef.current) {
            (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
        }
    }
    function registerFieldsRef(ref, validateOptions = {}) {
        if (!ref.name) {
            // eslint-disable-next-line no-console
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let isFieldArray;
        let defaultValue;
        if (isRadioOrCheckbox
            ? field &&
                isArray(field.options) &&
                field.options.filter(Boolean).find((option) => {
                    return value === option.ref.value && option.ref === ref;
                })
            : field && ref === field.ref) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(field));
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...((field && field.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldRefAndValidationOptions), { mutationWatcher });
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        if (!isEmptyObject(defaultValuesRef.current)) {
            defaultValue = get(defaultValuesRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(field, defaultValue);
            }
        }
        if (shouldValidateSchemaOrResolver &&
            !isFieldArray &&
            readFormStateRef.current.isValid) {
            validateSchemaOrResolver();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, validateAllFieldCriteria, field).then((error) => {
                    const previousFormIsValid = isValidRef.current;
                    isEmptyObject(error)
                        ? validFieldsRef.current.add(name)
                        : (isValidRef.current = false);
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue ? getFieldValue(fields, field.ref) : defaultValue;
        }
        if (type) {
            attachEventListeners({
                field: isRadioOrCheckbox && field.options
                    ? field.options[field.options.length - 1]
                    : field,
                isRadioOrCheckbox: isRadioOrCheckbox || isSelectInput(ref),
                handleChange: handleChangeRef.current,
            });
        }
    }
    function register(refOrValidationOptions, validationOptions) {
        if (isWindowUndefined) {
            return;
        }
        if (isString(refOrValidationOptions)) {
            registerFieldsRef({ name: refOrValidationOptions }, validationOptions);
            return;
        }
        if (isObject(refOrValidationOptions) && 'name' in refOrValidationOptions) {
            registerFieldsRef(refOrValidationOptions, validationOptions);
            return;
        }
        return (ref) => ref && registerFieldsRef(ref, refOrValidationOptions);
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((callback) => async (e) => {
        if (e) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        const fields = fieldsRef.current;
        let fieldValues = getFieldsValues(fields);
        if (readFormStateRef.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (shouldValidateSchemaOrResolver) {
                const { errors, values } = await validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(fieldValues), validationResolver, validationContextRef.current);
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fields)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, validateAllFieldCriteria, field);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            validFieldsRef.current.delete(name);
                        }
                        else {
                            if (fieldsWithValidationRef.current.has(name)) {
                                validFieldsRef.current.add(name);
                            }
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors)) {
                errorsRef.current = {};
                reRender();
                await callback(transformToNestObject(fieldValues), e);
            }
            else {
                errorsRef.current = fieldErrors;
                if (submitFocusError && isWeb) {
                    focusOnErrorField(fields, fieldErrors);
                }
            }
        }
        finally {
            isSubmittedRef.current = true;
            isSubmittingRef.current = false;
            submitCountRef.current = submitCountRef.current + 1;
            reRender();
        }
    }, [
        isWeb,
        reRender,
        shouldValidateSchemaOrResolver,
        submitFocusError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const resetRefs = ({ errors, dirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        fieldsRef.current = {};
        if (!errors) {
            errorsRef.current = {};
        }
        if (!touched) {
            touchedFieldsRef.current = {};
        }
        if (!isValid) {
            validFieldsRef.current = new Set();
            fieldsWithValidationRef.current = new Set();
            isValidRef.current = true;
        }
        if (!dirty) {
            isDirtyRef.current = false;
        }
        if (!dirtyFields) {
            dirtyFieldsRef.current = new Set();
        }
        if (!isSubmitted) {
            isSubmittedRef.current = false;
        }
        if (!submitCount) {
            submitCountRef.current = 0;
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValues.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        if (values) {
            defaultValuesRef.current = values;
        }
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
        reRender();
    };
    function getValues(payload) {
        if (isString(payload)) {
            return fieldsRef.current[payload]
                ? getFieldValue(fieldsRef.current, fieldsRef.current[payload].ref)
                : get(defaultValuesRef.current, payload);
        }
        const fieldValues = getFieldsValues(fieldsRef.current);
        const outputValues = isEmptyObject(fieldValues)
            ? defaultValuesRef.current
            : fieldValues;
        return payload && payload.nest
            ? transformToNestObject(outputValues)
            : outputValues;
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        isUnMount.current = true;
        fieldsRef.current &&
            "development" === 'production' &&
            Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, [removeFieldEventListenerAndRef]);
    if (!shouldValidateSchemaOrResolver) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    const formState = {
        dirty: isDirtyRef.current,
        dirtyFields: dirtyFieldsRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: touchedFieldsRef.current,
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isValidRef.current,
    };
    const commonProps = {
        triggerValidation,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [
            reRender,
            setInternalValue,
            triggerValidation,
        ]),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [
            defaultValuesRef.current,
            defaultValuesAtRenderRef.current,
        ]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = Object.assign(Object.assign(Object.assign({ removeFieldEventListener,
        reRender }, (shouldValidateSchemaOrResolver
        ? { validateSchemaIsValid: validateSchemaOrResolver }
        : {})), { mode: {
            isOnBlur,
            isOnSubmit,
            isOnChange,
        }, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnSubmit,
        }, errorsRef,
        touchedFieldsRef,
        fieldsRef,
        isWatchAllRef,
        watchFieldsRef,
        resetFieldArrayFunctionRef,
        fieldArrayDefaultValues,
        validFieldsRef,
        dirtyFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        isDirtyRef,
        readFormStateRef,
        defaultValuesRef }), commonProps);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearError, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: errorsRef.current }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormGlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function useFormContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormGlobalContext);
}
function FormContext(_a) {
    var { children, formState, errors } = _a, restMethods = __rest(_a, ["children", "formState", "errors"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormGlobalContext.Provider, { value: Object.assign(Object.assign({}, restMethods), { formState, errors }) }, children));
}

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const appendId = (value, keyName) => (Object.assign({ [keyName]: generateId() }, (isObject(value) ? value : { value })));
const mapIds = (data, keyName) => (isArray(data) ? data : []).map((value) => appendId(value, keyName));

var getSortRemovedItems = (indexes, removeIndexes, updatedIndexes = [], count = 0, notFoundIndexes = []) => {
    for (const removeIndex of removeIndexes) {
        if (indexes.indexOf(removeIndex) < 0) {
            notFoundIndexes.push(removeIndex);
        }
    }
    for (const index of indexes.sort()) {
        if (removeIndexes.indexOf(index) > -1) {
            updatedIndexes.push(-1);
            count++;
        }
        else {
            updatedIndexes.push(index -
                count -
                (notFoundIndexes.length
                    ? notFoundIndexes
                        .map((notFoundIndex) => notFoundIndex < index)
                        .filter(Boolean).length
                    : 0));
        }
    }
    return updatedIndexes;
};

const removeAt = (data, index) => [
    ...data.slice(0, index),
    ...data.slice(index + 1),
];
function removeAtIndexes(data, index) {
    let k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return data.filter(Boolean);
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : isArray(index)
        ? removeAtIndexes(data, index)
        : removeAt(data, index);

var moveArrayAt = (data, from, to) => isArray(data) ? data.splice(to, 0, data.splice(from, 1)[0]) : [];

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(isArray(value) ? value : [value || null]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(isArray(value) ? value : [value || null]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => isArray(value) ? Array(value.length).fill(null) : null;

const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    const { isWatchAllRef, resetFieldArrayFunctionRef, fieldArrayNamesRef, reRender, fieldsRef, getValues, defaultValuesRef, removeFieldEventListener, errorsRef, dirtyFieldsRef, isDirtyRef, touchedFieldsRef, readFormStateRef, watchFieldsRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValues, validateSchemaIsValid, } = control || methods.control;
    const getDefaultValues = () => [
        ...get(fieldArrayDefaultValues.current[getFieldArrayParentName(name)]
            ? fieldArrayDefaultValues.current
            : defaultValuesRef.current, name, []),
    ];
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getDefaultValues());
    const [fields, setField] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    const [isDeleted, setIsDeleted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const allFields = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fields);
    const isNameKey = isKey(name);
    allFields.current = fields;
    if (isNameKey) {
        fieldArrayDefaultValues.current[name] = memoizedDefaultValues.current;
    }
    const appendValueWithKey = (values) => values.map((value) => appendId(value, keyName));
    const setFieldAndValidState = (fieldsValues) => {
        setField(fieldsValues);
        if (readFormStateRef.current.isValid && validateSchemaIsValid) {
            validateSchemaIsValid({
                [name]: fieldsValues,
            });
        }
    };
    const modifyDirtyFields = ({ shouldRender, isRemove, isPrePend, index, value = {}, } = {}) => {
        let render = shouldRender;
        const values = isArray(value) ? value : [value];
        if (readFormStateRef.current.dirty) {
            const dirtyFieldIndexesAndValues = {};
            if (isPrePend || isRemove) {
                for (const dirtyField of [...dirtyFieldsRef.current].sort()) {
                    if (isMatchFieldArrayName(dirtyField, name)) {
                        const matchedIndexes = dirtyField.match(REGEX_ARRAY_FIELD_INDEX);
                        if (matchedIndexes) {
                            const matchIndex = +matchedIndexes[matchedIndexes.length - 1];
                            if (dirtyFieldIndexesAndValues[matchIndex]) {
                                dirtyFieldIndexesAndValues[matchIndex].push(dirtyField);
                            }
                            else {
                                dirtyFieldIndexesAndValues[matchIndex] = [dirtyField];
                            }
                        }
                        dirtyFieldsRef.current.delete(dirtyField);
                    }
                }
            }
            if (!isUndefined(index) || isPrePend) {
                const updatedDirtyFieldIndexes = isUndefined(index)
                    ? []
                    : getSortRemovedItems(Object.keys(dirtyFieldIndexesAndValues).map((i) => +i), isArray(index) ? index : [index]);
                Object.values(dirtyFieldIndexesAndValues).forEach((values, index) => {
                    const updateIndex = isPrePend ? 0 : updatedDirtyFieldIndexes[index];
                    if (updateIndex > -1) {
                        for (const value of values) {
                            const matchedIndexes = value.match(REGEX_ARRAY_FIELD_INDEX);
                            if (matchedIndexes) {
                                dirtyFieldsRef.current.add(value.replace(/[\d+]([^[\d+]+)$/, `${isPrePend
                                    ? +matchedIndexes[matchedIndexes.length - 1] +
                                        values.length
                                    : updateIndex}$1`));
                            }
                        }
                    }
                });
            }
            if (!isRemove) {
                values.forEach((fieldValue, index) => Object.keys(fieldValue).forEach((key) => dirtyFieldsRef.current.add(`${name}[${isPrePend ? index : allFields.current.length + index}].${key}`)));
                isDirtyRef.current = true;
            }
            render = true;
        }
        if (render && !isWatchAllRef.current) {
            reRender();
        }
    };
    const resetFields = (flagOrFields) => {
        if (readFormStateRef.current.dirty) {
            isDirtyRef.current = isUndefined(flagOrFields)
                ? true
                : getIsFieldsDifferent(flagOrFields, defaultValuesRef.current[name] || []);
        }
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                removeFieldEventListener(fieldsRef.current[key], true);
            }
        }
    };
    const mapCurrentFieldsValueWithState = () => {
        const currentFieldsValue = get(getValues({ nest: true }), name);
        if (isArray(currentFieldsValue)) {
            for (let i = 0; i < currentFieldsValue.length; i++) {
                allFields.current[i] = Object.assign(Object.assign({}, allFields.current[i]), currentFieldsValue[i]);
            }
        }
    };
    const append = (value) => {
        setFieldAndValidState([
            ...allFields.current,
            ...(isArray(value)
                ? appendValueWithKey(value)
                : [appendId(value, keyName)]),
        ]);
        modifyDirtyFields({ value });
    };
    const prepend$1 = (value) => {
        let shouldRender = false;
        resetFields();
        setFieldAndValidState(prepend(allFields.current, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = prepend(errorsRef.current[name], fillEmptyArray(value));
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = prepend(touchedFieldsRef.current[name], fillEmptyArray(value));
            shouldRender = true;
        }
        modifyDirtyFields({
            shouldRender,
            isPrePend: true,
            value,
        });
    };
    const remove = (index) => {
        let shouldRender = false;
        const isIndexUndefined = isUndefined(index);
        if (!isIndexUndefined) {
            mapCurrentFieldsValueWithState();
        }
        resetFields(removeArrayAt(getFieldValueByName(fieldsRef.current, name), index));
        setFieldAndValidState(removeArrayAt(allFields.current, index));
        setIsDeleted(true);
        if (errorsRef.current[name]) {
            errorsRef.current[name] = removeArrayAt(errorsRef.current[name], index);
            if (!errorsRef.current[name].filter(Boolean).length) {
                delete errorsRef.current[name];
            }
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
            shouldRender = true;
        }
        if (readFormStateRef.current.isValid && !validateSchemaIsValid) {
            let fieldIndex = -1;
            let isFound = false;
            const isIndexUndefined = isUndefined(index);
            while (fieldIndex++ < fields.length) {
                const isLast = fieldIndex === fields.length - 1;
                const isCurrentIndex = (isArray(index) ? index : [index]).indexOf(fieldIndex) >= 0;
                if (isCurrentIndex || isIndexUndefined) {
                    isFound = true;
                }
                if (!isFound) {
                    continue;
                }
                for (const key in fields[fieldIndex]) {
                    const currentFieldName = `${name}[${fieldIndex}].${key}`;
                    if (isCurrentIndex || isLast || isIndexUndefined) {
                        validFieldsRef.current.delete(currentFieldName);
                        fieldsWithValidationRef.current.delete(currentFieldName);
                    }
                    else {
                        const previousFieldName = `${name}[${fieldIndex - 1}].${key}`;
                        if (validFieldsRef.current.has(currentFieldName)) {
                            validFieldsRef.current.add(previousFieldName);
                        }
                        if (fieldsWithValidationRef.current.has(currentFieldName)) {
                            fieldsWithValidationRef.current.add(previousFieldName);
                        }
                    }
                }
            }
        }
        modifyDirtyFields({
            shouldRender,
            isRemove: true,
            index,
        });
    };
    const insert$1 = (index, value) => {
        mapCurrentFieldsValueWithState();
        resetFields(insert(getFieldValueByName(fieldsRef.current, name), index));
        setFieldAndValidState(insert(allFields.current, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = insert(errorsRef.current[name], index, fillEmptyArray(value));
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = insert(touchedFieldsRef.current[name], index, fillEmptyArray(value));
            reRender();
        }
    };
    const swap = (indexA, indexB) => {
        mapCurrentFieldsValueWithState();
        const fieldValues = getFieldValueByName(fieldsRef.current, name);
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields(fieldValues);
        swapArrayAt(allFields.current, indexA, indexB);
        setFieldAndValidState([...allFields.current]);
        if (errorsRef.current[name]) {
            swapArrayAt(errorsRef.current[name], indexA, indexB);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
            reRender();
        }
    };
    const move = (from, to) => {
        mapCurrentFieldsValueWithState();
        const fieldValues = getFieldValueByName(fieldsRef.current, name);
        moveArrayAt(fieldValues, from, to);
        resetFields(fieldValues);
        moveArrayAt(allFields.current, from, to);
        setFieldAndValidState([...allFields.current]);
        if (errorsRef.current[name]) {
            moveArrayAt(errorsRef.current[name], from, to);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            moveArrayAt(touchedFieldsRef.current[name], from, to);
            reRender();
        }
    };
    const reset = () => {
        resetFields();
        memoizedDefaultValues.current = getDefaultValues();
        setField(mapIds(memoizedDefaultValues.current, keyName));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (isNameKey &&
            isDeleted &&
            fieldArrayDefaultValues.current[name] &&
            fields.length < fieldArrayDefaultValues.current[name].length) {
            fieldArrayDefaultValues.current[name].pop();
        }
    }, [fields, name, fieldArrayDefaultValues, isDeleted, isNameKey]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (isWatchAllRef && isWatchAllRef.current) {
            reRender();
        }
        else if (watchFieldsRef) {
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    reRender();
                    break;
                }
            }
        }
    }, [fields, name, reRender, watchFieldsRef, isWatchAllRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        fieldArrayNames.add(name);
        resetFunctions[name] = reset;
        return () => {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [fields, name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

var getInputValue = (event, isCheckboxInput) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isCheckboxInput || isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

const Controller = (_a) => {
    var { name, rules, as: InnerComponent, onBlur, onChange, onChangeName = VALIDATION_MODE.onChange, onBlurName = VALIDATION_MODE.onBlur, valueName, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "onBlur", "onChange", "onChangeName", "onBlurName", "valueName", "defaultValue", "control", "onFocus"]);
    const methods = useFormContext();
    const { defaultValuesRef, setValue, register, unregister, errorsRef, removeFieldEventListener, triggerValidation, mode: { isOnSubmit, isOnBlur, isOnChange }, reValidateMode: { isReValidateOnBlur, isReValidateOnSubmit }, formState: { isSubmitted }, touchedFieldsRef, readFormStateRef, reRender, fieldsRef, fieldArrayNamesRef, } = control || methods.control;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isUndefined(defaultValue)
        ? get(defaultValuesRef.current, name)
        : defaultValue);
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const isCheckboxInput = isBoolean(value);
    const shouldReValidateOnBlur = isOnBlur || isReValidateOnBlur;
    const rulesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(rules);
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus);
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    rulesRef.current = rules;
    const shouldValidate = () => !skipValidation({
        hasError: !!get(errorsRef.current, name),
        isOnBlur,
        isOnSubmit,
        isOnChange,
        isReValidateOnBlur,
        isReValidateOnSubmit,
        isSubmitted,
    });
    const commonTask = (event) => {
        const data = getInputValue(event, isCheckboxInput);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    const eventWrapper = (event) => (...arg) => setValue(name, commonTask(event(arg)), shouldValidate());
    const handleChange = (event) => {
        const data = commonTask(event);
        setValue(name, data, shouldValidate());
    };
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (!isNotFieldArray) {
            removeFieldEventListener(fieldsRef.current[name], true);
        }
        register(Object.defineProperty({ name, focus: onFocusRef.current }, VALUE, {
            set(data) {
                setInputStateValue(data);
                valueRef.current = data;
            },
            get() {
                return valueRef.current;
            },
        }), rulesRef.current);
    }, [
        isNotFieldArray,
        fieldsRef,
        rulesRef,
        name,
        onFocusRef,
        register,
        removeFieldEventListener,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
    }, [unregister, name, fieldArrayNamesRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        registerField();
    }, [registerField]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(isUndefined(defaultValue)
                    ? get(defaultValuesRef.current, name)
                    : defaultValue);
            }
        }
    });
    const props = Object.assign(Object.assign(Object.assign(Object.assign({ name }, rest), (onChange
        ? { [onChangeName]: eventWrapper(onChange) }
        : { [onChangeName]: handleChange })), { [onBlurName]: (...args) => {
            if (onBlur) {
                onBlur(args);
            }
            if (readFormStateRef.current.touched &&
                !get(touchedFieldsRef.current, name)) {
                set(touchedFieldsRef.current, name, true);
                reRender();
            }
            if (shouldReValidateOnBlur) {
                triggerValidation(name);
            }
        } }), { [valueName || (isCheckboxInput ? 'checked' : VALUE)]: value });
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(InnerComponent)
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(InnerComponent, props)
        : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerComponent, props);
};

const ErrorMessage = (_a) => {
    var { as: InnerComponent, errors, name, message, children } = _a, rest = __rest(_a, ["as", "errors", "name", "message", "children"]);
    const methods = useFormContext();
    const error = get(errors || methods.errors, name);
    if (!error) {
        return null;
    }
    const { message: messageFromRegister, types } = error;
    const props = Object.assign(Object.assign({}, (InnerComponent ? rest : {})), { children: children
            ? children({ message: messageFromRegister || message, messages: types })
            : messageFromRegister || message });
    return InnerComponent ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(InnerComponent) ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(InnerComponent, props)) : (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerComponent, props))) : (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], Object.assign({}, props)));
};




/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : undefined;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : undefined : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : undefined : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : undefined;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/bulletin-edit.js":
/*!********************************!*\
  !*** ./pages/bulletin-edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/courses */ "./services/courses.js");
/* harmony import */ var _components_bulletin_bulletin_write__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/bulletin/bulletin-write */ "./components/bulletin/bulletin-write.js");
var _this = undefined,
    _jsxFileName = "D:\\workspace\\playground\\REACT\\bulletin-app\\pages\\bulletin-edit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Bulletin Grade",
    isHome: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "container px-2 md:px-32 my-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h1", {
    className: "text-4xl text-center md:text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Bulletin"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_bulletin_bulletin_write__WEBPACK_IMPORTED_MODULE_4__["default"], {
    coursesData: _services_courses__WEBPACK_IMPORTED_MODULE_3__["bulletin_row"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./services/courses.js":
/*!*****************************!*\
  !*** ./services/courses.js ***!
  \*****************************/
/*! exports provided: courses, bulletin_row, studentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courses", function() { return courses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bulletin_row", function() { return bulletin_row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentData", function() { return studentData; });
var courses = ["MAXIMA", "Enseignement biblique", "Ecm", "MAXIMA", "Anglais", "Chimie", "Connais. Des matériaux", "Résist. Des matériaux", "Actualités", "Graphostatique", "Mécanique", "Physique", "Technologie", "Topographie", "Voies de communication", "MAXIMA", "Français", "Mathématiques", "Dessin", "MAXIMA", "Pratique professionnelle", "MAXIMA GENERAUX"];
var bulletin_row = [{
  id: 1,
  category: 1,
  course: "Enseignement biblique",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 2,
  category: 1,
  course: "Education Civique Et Morale",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 13
  },
  semester2: {
    periode1: 7,
    periode2: 8,
    exam: 17
  }
}, {
  id: 3,
  category: 2,
  course: "Anglais",
  semester1: {
    periode1: 20,
    periode2: 20,
    exam: 37
  },
  semester2: {
    periode1: 17,
    periode2: 18,
    exam: 32
  }
}, {
  id: 4,
  category: 2,
  course: "Chimie",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 5,
  category: 2,
  course: "Connais. Des matériaux",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 6,
  category: 2,
  course: "Résist. Des matériaux",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 7,
  category: 2,
  course: "Actualités",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 8,
  category: 2,
  course: "Graphostatique",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 9,
  category: 2,
  course: "Mécanique",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 10,
  category: 2,
  course: "Physique",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 11,
  category: 2,
  course: "Technologie",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 12,
  category: 2,
  course: "Topographie",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 13,
  category: 2,
  course: "Voies de communication",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 14,
  category: 3,
  course: "Français",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 15,
  category: 3,
  course: "Mathématiques",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 16,
  category: 3,
  course: "Dessin",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}, {
  id: 17,
  category: 4,
  course: "Pratique professionnelle",
  semester1: {
    periode1: 9,
    periode2: 7,
    exam: 14
  },
  semester2: {
    periode1: 12,
    periode2: 6,
    exam: 18
  }
}];
var studentData = [{
  id: 1,
  firstname: "Eric",
  lastname: "Dimpa Dia Moyo",
  "class": "1er Secondaire"
}, {
  id: 2,
  firstname: "MArcelin",
  lastname: "Dillo",
  "class": "1er Secondaire"
}, {
  id: 3,
  firstname: "Beni-Dool",
  lastname: "Crews",
  "class": "1er Secondaire"
}, {
  id: 4,
  firstname: "Elizabeth Grace",
  lastname: "Tshima ma",
  "class": "1er Secondaire"
}, {
  id: 5,
  firstname: "Celine Hannah",
  lastname: "Dohi",
  "class": "1er Secondaire"
}, {
  id: 6,
  firstname: "Sylvian",
  lastname: "Lokoto Moka",
  "class": "1er Secondaire"
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fbulletin-edit&absolutePagePath=D%3A%5Cworkspace%5Cplayground%5CREACT%5Cbulletin-app%5Cpages%5Cbulletin-edit.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fbulletin-edit&absolutePagePath=D%3A%5Cworkspace%5Cplayground%5CREACT%5Cbulletin-app%5Cpages%5Cbulletin-edit.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fbulletin-edit&absolutePagePath=D%3A%5Cworkspace%5Cplayground%5CREACT%5Cbulletin-app%5Cpages%5Cbulletin-edit.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1bGxldGluL2J1bGxldGluLXNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1bGxldGluL2J1bGxldGluLXdyaXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnVsbGV0aW4vZWRpdC1ncmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvc2lkZS1tZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NhY2hlL2Rpc3QvY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2NvcmUvZGlzdC9jb3JlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jc3MvZGlzdC9jc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3Qvc2VyaWFsaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L3NoZWV0LmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvdXRpbHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3dlYWstbWVtb2l6ZS9kaXN0L3dlYWstbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzPzdkY2YiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2FtcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaG9vay1mb3JtL2Rpc3QvcmVhY3QtaG9vay1mb3JtLmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi9yZWFjdC1pbnB1dC1tYXNrLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2FybmluZy93YXJuaW5nLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2J1bGxldGluLWVkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvY291cnNlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIiJdLCJuYW1lcyI6WyJncm91cEJ5IiwieHMiLCJrZXkiLCJyZWR1Y2UiLCJydiIsIngiLCJwdXNoIiwiY2F0ZWdvcnlNYXAiLCJ0eXBlIiwibGFiZWwiLCJtYXgiLCJjb2VmIiwibWF4aW1hTGlzdCIsIm1hcCIsImJ1bGxldGluRW50aXR5IiwiY291cnNlc0RhdGEiLCJidWxsZXRpbkdyb3VwZWQiLCJ0b3RhbEdyYWRlIiwicGVyaW9kZTEiLCJhY2MiLCJjdXJyIiwic2VtZXN0ZXIxIiwicGVyaW9kZTIiLCJleGFtMSIsImV4YW0iLCJwZXJpb2RlMyIsInNlbWVzdGVyMiIsInBlcmlvZGU0IiwiZXhhbTIiLCJtYXhpbWFQZXJpb2QxIiwibWF4aW1hUGVyaW9kMiIsIm1heGltYUV4YW0iLCJ0b3RhbEdyYWRlUGVyY2VudGFnZSIsIkJ1bGxldGluUmVhZFdyaXRlIiwidXNlU3RhdGUiLCJlZGl0Um93Iiwic2V0RWRpdFJvdyIsIml0ZW1Sb3ciLCJzZXRJdGVtUm93IiwiZ3JhZGVDb2xvciIsInN0cmlwIiwiaSIsImVkaXRSb3dEYXRhIiwiaXRlbSIsImVkaXRWaWV3IiwidXNlRWZmZWN0IiwibW9kaWZpZWQiLCJhbGxSZXN0IiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJ0b1N0cmluZyIsInRvRml4ZWQiLCJtYXhpbWEiLCJjb3Vyc2UiLCJpZCIsIkJ1bGxldGluUm93RWRpdCIsInNob3dNb2RhbCIsIm9uRGF0YUNoYW5nZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIndhdGNoIiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwiZWRpRGF0YSIsInBhcnNlSW50IiwicGVyaW9kMSIsInJlcGxhY2UiLCJwZXJpb2QyIiwicGVyaW9kMyIsInBlcmlvZDQiLCJJbnB1dCIsInRyYW5zaXRpb24iLCJTaWRlTWVudSIsImNoaWxkcmVuIiwidGl0bGUiLCJpc0hvbWUiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsInVuaXF1ZSIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsImhlYWRFbGVtZW50IiwiZGVmYXVsdEhlYWQiLCJwcm9wcyIsImMiLCJFZmZlY3QiLCJhbXBTdGF0ZSIsInVwZGF0ZUhlYWQiLCJIZWFkIiwiaXNTZXJ2ZXIiLCJtb3VudGVkSW5zdGFuY2VzIiwic3RhdGUiLCJjb21wb25lbnQiLCJyZWNvcmRlZFN0YXRlIiwiY29uc3RydWN0b3IiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIkNvbXBvbmVudCIsImJ1bGxldGluX3JvdyIsImNvdXJzZXMiLCJzdHVkZW50RGF0YSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxFQUFELEVBQUtDLEdBQUwsRUFBYTtBQUNsQyxTQUFPRCxFQUFFLENBQUNFLE1BQUgsQ0FBVSxVQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUMxQixLQUFDRCxFQUFFLENBQUNDLENBQUMsQ0FBQ0gsR0FBRCxDQUFGLENBQUYsR0FBYUUsRUFBRSxDQUFDQyxDQUFDLENBQUNILEdBQUQsQ0FBRixDQUFGLElBQWMsRUFBNUIsRUFBZ0NJLElBQWhDLENBQXFDRCxDQUFyQztBQUNBLFdBQU9ELEVBQVA7QUFDRCxHQUhNLEVBR0osRUFISSxDQUFQO0FBSUQsQ0FMTTtBQU9BLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUNuQyxVQUFRQSxJQUFSO0FBQ0UsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUNMQyxhQUFLLEVBQUUsUUFERjtBQUVMQyxXQUFHLEVBQUUsRUFGQTtBQUdMQyxZQUFJLEVBQUU7QUFIRCxPQUFQOztBQUtGLFNBQUssQ0FBTDtBQUNFLGFBQU87QUFDTEYsYUFBSyxFQUFFLFFBREY7QUFFTEMsV0FBRyxFQUFFLEVBRkE7QUFHTEMsWUFBSSxFQUFFO0FBSEQsT0FBUDs7QUFLRixTQUFLLENBQUw7QUFDRSxhQUFPO0FBQ0xGLGFBQUssRUFBRSxRQURGO0FBRUxDLFdBQUcsRUFBRSxFQUZBO0FBR0xDLFlBQUksRUFBRTtBQUhELE9BQVA7O0FBS0YsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUNMRixhQUFLLEVBQUUsUUFERjtBQUVMQyxXQUFHLEVBQUUsR0FGQTtBQUdMQyxZQUFJLEVBQUU7QUFIRCxPQUFQOztBQUtGO0FBQ0U7QUExQko7QUE0QkQsQ0E3Qk07QUErQk4sSUFBTUMsVUFBVSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhQyxHQUFiLENBQWlCLFVBQUNSLENBQUQ7QUFBQSxTQUFPRSxXQUFXLENBQUNGLENBQUQsQ0FBbEI7QUFBQSxDQUFqQixDQUFuQjtBQUdRLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsV0FBRCxFQUFpQjtBQUM1QyxNQUFNQyxlQUFlLEdBQUdoQixPQUFPLENBQUNlLFdBQUQsRUFBYyxVQUFkLENBQS9CO0FBRUEsTUFBTUUsVUFBVSxHQUFHO0FBQ2xCQyxZQUFRLEVBQUVILFdBQVcsQ0FBQ1osTUFBWixDQUNSLFVBQUNnQixHQUFELEVBQU1DLElBQU47QUFBQSxhQUFlRCxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxRQUFwQztBQUFBLEtBRFEsRUFFUixDQUZRLENBRFE7QUFLbEJJLFlBQVEsRUFBRVAsV0FBVyxDQUFDWixNQUFaLENBQ1IsVUFBQ2dCLEdBQUQsRUFBTUMsSUFBTjtBQUFBLGFBQWVELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVDLFFBQXBDO0FBQUEsS0FEUSxFQUVSLENBRlEsQ0FMUTtBQVNsQkMsU0FBSyxFQUFFUixXQUFXLENBQUNaLE1BQVosQ0FBbUIsVUFBQ2dCLEdBQUQsRUFBTUMsSUFBTjtBQUFBLGFBQWVELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVHLElBQXBDO0FBQUEsS0FBbkIsRUFBNkQsQ0FBN0QsQ0FUVztBQVVsQkMsWUFBUSxFQUFFVixXQUFXLENBQUNaLE1BQVosQ0FDUixVQUFDZ0IsR0FBRCxFQUFNQyxJQUFOO0FBQUEsYUFBZUQsR0FBRyxHQUFHQyxJQUFJLENBQUNNLFNBQUwsQ0FBZVIsUUFBcEM7QUFBQSxLQURRLEVBRVIsQ0FGUSxDQVZRO0FBY2xCUyxZQUFRLEVBQUVaLFdBQVcsQ0FBQ1osTUFBWixDQUNSLFVBQUNnQixHQUFELEVBQU1DLElBQU47QUFBQSxhQUFlRCxHQUFHLEdBQUdDLElBQUksQ0FBQ00sU0FBTCxDQUFlSixRQUFwQztBQUFBLEtBRFEsRUFFUixDQUZRLENBZFE7QUFrQmxCTSxTQUFLLEVBQUViLFdBQVcsQ0FBQ1osTUFBWixDQUFtQixVQUFDZ0IsR0FBRCxFQUFNQyxJQUFOO0FBQUEsYUFBZUQsR0FBRyxHQUFHQyxJQUFJLENBQUNNLFNBQUwsQ0FBZUYsSUFBcEM7QUFBQSxLQUFuQixFQUE2RCxDQUE3RDtBQWxCVyxHQUFuQjtBQXFCQSxNQUFNSyxhQUFhLEdBQUdqQixVQUFVLENBQUNULE1BQVgsQ0FDcEIsVUFBQ2dCLEdBQUQsRUFBTUMsSUFBTjtBQUFBLFdBQWVELEdBQUcsR0FBR0MsSUFBSSxDQUFDVixHQUFMLEdBQVdVLElBQUksQ0FBQ1QsSUFBckM7QUFBQSxHQURvQixFQUVwQixDQUZvQixDQUF0QjtBQUlBLE1BQU1tQixhQUFhLEdBQUdsQixVQUFVLENBQUNULE1BQVgsQ0FDcEIsVUFBQ2dCLEdBQUQsRUFBTUMsSUFBTjtBQUFBLFdBQWVELEdBQUcsR0FBR0MsSUFBSSxDQUFDVixHQUFMLEdBQVdVLElBQUksQ0FBQ1QsSUFBckM7QUFBQSxHQURvQixFQUVwQixDQUZvQixDQUF0QjtBQUlBLE1BQU1vQixVQUFVLEdBQ2RuQixVQUFVLENBQUNULE1BQVgsQ0FBa0IsVUFBQ2dCLEdBQUQsRUFBTUMsSUFBTjtBQUFBLFdBQWVELEdBQUcsR0FBR0MsSUFBSSxDQUFDVixHQUFMLEdBQVdVLElBQUksQ0FBQ1QsSUFBaEIsR0FBdUIsQ0FBNUM7QUFBQSxHQUFsQixFQUFpRSxDQUFqRSxJQUNBLEdBRkY7QUFJRCxNQUFNcUIsb0JBQW9CLEdBQ3ZCLENBQUNmLFVBQVUsQ0FBQ0MsUUFBWCxHQUNBRCxVQUFVLENBQUNLLFFBRFgsR0FFQUwsVUFBVSxDQUFDTSxLQUZYLEdBR0FOLFVBQVUsQ0FBQ1EsUUFIWCxHQUlBUixVQUFVLENBQUNVLFFBSlgsR0FLQVYsVUFBVSxDQUFDVyxLQUxaLElBTUMsR0FORixJQU9DLENBQUNDLGFBQWEsR0FBR0MsYUFBaEIsR0FBZ0NDLFVBQWpDLElBQStDLENBUGhELENBREY7QUFVQSxTQUFPO0FBQ0xmLG1CQUFlLEVBQWZBLGVBREs7QUFFTEMsY0FBVSxFQUFWQSxVQUZLO0FBR0xlLHdCQUFvQixFQUFwQkEsb0JBSEs7QUFJTEgsaUJBQWEsRUFBYkEsYUFKSztBQUlVQyxpQkFBYSxFQUFiQSxhQUpWO0FBSXlCQyxjQUFVLEVBQVZBO0FBSnpCLEdBQVA7QUFNRCxDQXBETTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFxQjtBQUFBOztBQUFBLE1BQWxCbEIsV0FBa0IsUUFBbEJBLFdBQWtCOztBQUFBLGtCQUNmbUIsc0RBQVEsQ0FBQyxLQUFELENBRE87QUFBQSxNQUN0Q0MsT0FEc0M7QUFBQSxNQUM3QkMsVUFENkI7O0FBQUEsbUJBRWZGLHNEQUFRLENBQUMsSUFBRCxDQUZPO0FBQUEsTUFFdENHLE9BRnNDO0FBQUEsTUFFN0JDLFVBRjZCOztBQUFBLHdCQVV4Q3hCLHVFQUFjLENBQUNDLFdBQUQsQ0FWMEI7QUFBQSxNQUkxQ0UsVUFKMEMsbUJBSTFDQSxVQUowQztBQUFBLE1BSzFDRCxlQUwwQyxtQkFLMUNBLGVBTDBDO0FBQUEsTUFNMUNnQixvQkFOMEMsbUJBTTFDQSxvQkFOMEM7QUFBQSxNQU8xQ0gsYUFQMEMsbUJBTzFDQSxhQVAwQztBQUFBLE1BUTFDQyxhQVIwQyxtQkFRMUNBLGFBUjBDO0FBQUEsTUFTMUNDLFVBVDBDLG1CQVMxQ0EsVUFUMEM7O0FBWTVDLE1BQU1RLFVBQVUsR0FDZFAsb0JBQW9CLEdBQUcsRUFBdkIsR0FBNEIsY0FBNUIsR0FBNkMsZ0JBRC9DOztBQUdBLE1BQU1RLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLENBQUQ7QUFBQSxXQUFRQSxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQVYsR0FBYyxhQUFkLEdBQThCLEVBQXRDO0FBQUEsR0FBZDs7QUFFQSxNQUFJLENBQUN4QixVQUFELElBQWUsQ0FBQ0QsZUFBcEIsRUFBcUM7QUFDbkMsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFQO0FBQ0Q7O0FBRUEsTUFBTTBCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBUztBQUMzQlAsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSxjQUFVLENBQUNLLElBQUQsQ0FBVjtBQUNELEdBSEQ7O0FBS0YsTUFBTUMsUUFBUSxHQUFHUCxPQUFPLElBQ3RCLDBEQUFDLG1EQUFEO0FBQ0UsUUFBSSxFQUFFQSxPQURSO0FBRUUsYUFBUyxFQUFFO0FBQUEsYUFBTUQsVUFBVSxDQUFDLEtBQUQsQ0FBaEI7QUFBQSxLQUZiO0FBR0UsZ0JBQVksRUFBRUUsVUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlSLE9BQU8sSUFBSUEsT0FBTyxDQUFDUyxRQUF2QixFQUFpQztBQUMvQjtBQUQrQixVQUV2QkEsUUFGdUIsR0FFRVQsT0FGRixDQUV2QlMsUUFGdUI7QUFBQSxVQUVWQyxPQUZVLHNHQUVFVixPQUZGOztBQUcvQlcsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0MsSUFBSUMsSUFBSixHQUFXQyxRQUFYLEVBQWxDO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZWixPQUFaO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0QsS0FORCxNQU1PO0FBQ0xDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRDtBQUNGLEdBVlEsRUFVTixDQUFDZCxPQUFELENBVk0sQ0FBVDtBQVlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsc0JBRFo7QUFFRSxTQUFLLEVBQUMsNEJBRlI7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBTSxLQUFDLEVBQUMsc0lBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsRUFRRTtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixDQURGLEVBV0U7QUFBTSxhQUFTLEVBQUMsaUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsRUFjRTtBQUFNLGFBQVMsRUFBQyx3REFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGLENBREYsRUFvQkU7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxtRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUlFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQ0UsQ0FBQ2xCLFVBQVUsQ0FBQ0MsUUFBWCxHQUNBRCxVQUFVLENBQUNLLFFBRFgsR0FFQUwsVUFBVSxDQUFDTSxLQUZaLElBR0MsR0FIRixJQUlDTSxhQUFhLEdBQUdDLGFBQWhCLEdBQWdDQyxVQUpqQyxDQURELEVBTUNxQixPQU5ELENBTVMsR0FOVCxDQURILENBREYsRUFVRTtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVZGLENBSkYsQ0FERixFQWtCRTtBQUFLLGFBQVMsRUFBQyxtREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsbUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUNFLENBQUNuQyxVQUFVLENBQUNRLFFBQVgsR0FDQVIsVUFBVSxDQUFDVSxRQURYLEdBRUFWLFVBQVUsQ0FBQ1csS0FGWixJQUdDLEdBSEYsSUFJQ0MsYUFBYSxHQUFHQyxhQUFoQixHQUFnQ0MsVUFKakMsQ0FERCxFQU1DcUIsT0FORCxDQU1TLEdBTlQsQ0FESCxDQURGLEVBVUU7QUFBTSxhQUFTLEVBQUMsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FWRixDQUpGLENBbEJGLEVBbUNFO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxvRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFLG9DQUFvQ2IsVUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUCxvQkFBb0IsQ0FBQ29CLE9BQXJCLENBQTZCLEdBQTdCLENBREgsQ0FERixFQUlFO0FBQU0sYUFBUyxFQUFDLDRCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSkYsQ0FKRixDQW5DRixDQXBCRixDQURGLEVBc0VFO0FBQU8sYUFBUyxFQUFDLDhCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxzQ0FBZDtBQUFxRCxXQUFPLEVBQUMsR0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixFQUtFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBMEIsV0FBTyxFQUFDLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsQ0FERixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBSUU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLRTtBQUFJLGFBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEYsRUFNRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixFQU9FO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBUUU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTRTtBQUFJLGFBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBVEYsRUFVRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FWRixFQVdFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBVkYsQ0FERixFQXlCRTtBQUFPLGFBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWF2QyxHQUFiLENBQWlCLFVBQUNSLENBQUQsRUFBTztBQUN2QixRQUFNZ0QsTUFBTSxHQUFHOUMsb0VBQVcsQ0FBQ0YsQ0FBRCxDQUExQjtBQUNBLFFBQU1pRCxNQUFNLEdBQUd0QyxlQUFlLENBQUNYLENBQUMsQ0FBQzhDLFFBQUYsRUFBRCxDQUE5QjtBQUNBLFdBQ0UsMERBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQWdCLFNBQUcsRUFBRTlDLENBQUMsQ0FBQzhDLFFBQUYsS0FBZSxRQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxTQUFHLEVBQUU5QyxDQUFDLENBQUM4QyxRQUFGLEtBQWUsUUFBeEI7QUFBa0MsZUFBUyxFQUFDLGVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyx1REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dFLE1BQU0sQ0FBQzVDLEtBRFYsQ0FERixFQUlFO0FBQUksZUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzRDLE1BQU0sQ0FBQzNDLEdBRFYsQ0FKRixFQU9FO0FBQUksZUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzJDLE1BQU0sQ0FBQzNDLEdBRFYsQ0FQRixFQVVFO0FBQUksZUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzJDLE1BQU0sQ0FBQzNDLEdBQVAsS0FBZSxHQUFmLEdBQXFCMkMsTUFBTSxDQUFDM0MsR0FBUCxHQUFhLENBQWxDLEdBQXNDLEVBRHpDLENBVkYsRUFhRTtBQUFJLGVBQVMsRUFBQywyRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0cyQyxNQUFNLENBQUMzQyxHQUFQLEdBQWEsQ0FEaEIsQ0FiRixFQWdCRTtBQUFJLGVBQVMsRUFBQyxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0cyQyxNQUFNLENBQUMzQyxHQURWLENBaEJGLEVBbUJFO0FBQUksZUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzJDLE1BQU0sQ0FBQzNDLEdBRFYsQ0FuQkYsRUFzQkU7QUFBSSxlQUFTLEVBQUMsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHMkMsTUFBTSxDQUFDM0MsR0FBUCxLQUFlLEdBQWYsR0FBcUIyQyxNQUFNLENBQUMzQyxHQUFQLEdBQWEsQ0FBbEMsR0FBc0MsRUFEekMsQ0F0QkYsRUF5QkU7QUFBSSxlQUFTLEVBQUMsMkZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHMkMsTUFBTSxDQUFDM0MsR0FBUCxHQUFhLENBRGhCLENBekJGLEVBNEJFO0FBQUksZUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzJDLE1BQU0sQ0FBQzNDLEdBQVAsR0FBYSxDQURoQixDQTVCRixFQStCRTtBQUFJLGVBQVMsRUFBQyxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BL0JGLENBREYsRUFrQ0c0QyxNQUFNLENBQUN6QyxHQUFQLENBQVcsVUFBQzhCLElBQUQ7QUFBQSxhQUNWLDBEQUFDLDRDQUFELENBQU8sUUFBUDtBQUFnQixXQUFHLEVBQUVBLElBQUksQ0FBQ1ksRUFBTCxDQUFRSixRQUFSLEtBQXFCUixJQUFJLENBQUNXLE1BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLFdBQUcsRUFBRVgsSUFBSSxDQUFDVyxNQUFkO0FBQXNCLGlCQUFTLEVBQUVkLEtBQUssQ0FBQ0csSUFBSSxDQUFDWSxFQUFOLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFJLGlCQUFTLEVBQUMsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHWixJQUFJLENBQUNXLE1BRFIsQ0FERixFQUlFO0FBQUksaUJBQVMsRUFBQyw0Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dYLElBQUksQ0FBQ3RCLFNBQUwsQ0FBZUgsUUFEbEIsQ0FKRixFQU9FO0FBQUksaUJBQVMsRUFBQyw0Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0d5QixJQUFJLENBQUN0QixTQUFMLENBQWVDLFFBRGxCLENBUEYsRUFVRTtBQUFJLGlCQUFTLEVBQUMsNENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHcUIsSUFBSSxDQUFDdEIsU0FBTCxDQUFlRyxJQURsQixDQVZGLEVBYUU7QUFBSSxpQkFBUyxFQUFDLHVFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR21CLElBQUksQ0FBQ3RCLFNBQUwsQ0FBZUgsUUFBZixHQUNDeUIsSUFBSSxDQUFDdEIsU0FBTCxDQUFlQyxRQURoQixHQUVDcUIsSUFBSSxDQUFDdEIsU0FBTCxDQUFlRyxJQUhuQixDQWJGLEVBa0JFO0FBQUksaUJBQVMsRUFBQyw0Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dtQixJQUFJLENBQUNqQixTQUFMLENBQWVSLFFBRGxCLENBbEJGLEVBcUJFO0FBQUksaUJBQVMsRUFBQyw0Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0d5QixJQUFJLENBQUNqQixTQUFMLENBQWVKLFFBRGxCLENBckJGLEVBd0JFO0FBQUksaUJBQVMsRUFBQyw0Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dxQixJQUFJLENBQUNqQixTQUFMLENBQWVGLElBRGxCLENBeEJGLEVBMkJFO0FBQUksaUJBQVMsRUFBQyx1RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dtQixJQUFJLENBQUNqQixTQUFMLENBQWVSLFFBQWYsR0FDQ3lCLElBQUksQ0FBQ2pCLFNBQUwsQ0FBZUosUUFEaEIsR0FFQ3FCLElBQUksQ0FBQ2pCLFNBQUwsQ0FBZUYsSUFIbkIsQ0EzQkYsRUFnQ0U7QUFBSSxpQkFBUyxFQUFDLDRDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR21CLElBQUksQ0FBQ3RCLFNBQUwsQ0FBZUgsUUFBZixHQUNDeUIsSUFBSSxDQUFDdEIsU0FBTCxDQUFlQyxRQURoQixHQUVDcUIsSUFBSSxDQUFDdEIsU0FBTCxDQUFlRyxJQUZoQixHQUdDbUIsSUFBSSxDQUFDakIsU0FBTCxDQUFlUixRQUhoQixHQUlDeUIsSUFBSSxDQUFDakIsU0FBTCxDQUFlSixRQUpoQixHQUtDcUIsSUFBSSxDQUFDakIsU0FBTCxDQUFlRixJQU5uQixDQWhDRixFQXdDRTtBQUFJLGlCQUFTLEVBQUMsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQyxnQkFEWjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNa0IsV0FBVyxDQUFDQyxJQUFELENBQWpCO0FBQUEsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUU7QUFDRSxpQkFBUyxFQUFDLHNCQURaO0FBRUUsYUFBSyxFQUFDLDRCQUZSO0FBR0UsZUFBTyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtFO0FBQU0sU0FBQyxFQUFDLGlFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQUpGLENBREYsQ0F4Q0YsQ0FERixDQURVO0FBQUEsS0FBWCxDQWxDSCxDQURGO0FBZ0dELEdBbkdBLENBREgsRUFxR0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUlFO0FBQUksYUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsYUFESCxDQUpGLEVBT0U7QUFBSSxhQUFTLEVBQUMsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxhQURILENBUEYsRUFVRTtBQUFJLGFBQVMsRUFBQyxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFVBREgsQ0FWRixFQWFFO0FBQUksYUFBUyxFQUFDLDJGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0YsYUFBYSxHQUFHQyxhQUFoQixHQUFnQ0MsVUFEbkMsQ0FiRixFQWdCRTtBQUFJLGFBQVMsRUFBQyxnRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLGFBREgsQ0FoQkYsRUFtQkU7QUFBSSxhQUFTLEVBQUMsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxhQURILENBbkJGLEVBc0JFO0FBQUksYUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsVUFESCxDQXRCRixFQXlCRTtBQUFJLGFBQVMsRUFBQywyRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLGFBQWEsR0FBR0MsYUFBaEIsR0FBZ0NDLFVBRG5DLENBekJGLEVBNEJFO0FBQUksYUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDRixhQUFhLEdBQUdDLGFBQWhCLEdBQWdDQyxVQUFqQyxJQUErQyxDQURsRCxDQTVCRixDQXJHRixFQXFJRTtBQUFJLGFBQVMsRUFBQywwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxVQUFVLENBQUNDLFFBRGQsQ0FGRixFQUtFO0FBQUksYUFBUyxFQUFDLGdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsVUFBVSxDQUFDSyxRQURkLENBTEYsRUFRRTtBQUFJLGFBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFVBQVUsQ0FBQ00sS0FEZCxDQVJGLEVBV0U7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixVQUFVLENBQUNDLFFBQVgsR0FBc0JELFVBQVUsQ0FBQ0ssUUFBakMsR0FBNENMLFVBQVUsQ0FBQ00sS0FEMUQsQ0FYRixFQWNFO0FBQUksYUFBUyxFQUFDLGdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sVUFBVSxDQUFDUSxRQURkLENBZEYsRUFpQkU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixVQUFVLENBQUNVLFFBRGQsQ0FqQkYsRUFvQkU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixVQUFVLENBQUNXLEtBRGQsQ0FwQkYsRUF1QkU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxVQUFVLENBQUNRLFFBQVgsR0FBc0JSLFVBQVUsQ0FBQ1UsUUFBakMsR0FBNENWLFVBQVUsQ0FBQ1csS0FEMUQsQ0F2QkYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsZ0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWCxVQUFVLENBQUNDLFFBQVgsR0FDQ0QsVUFBVSxDQUFDSyxRQURaLEdBRUNMLFVBQVUsQ0FBQ00sS0FGWixHQUdDTixVQUFVLENBQUNRLFFBSFosR0FJQ1IsVUFBVSxDQUFDVSxRQUpaLEdBS0NWLFVBQVUsQ0FBQ1csS0FOZixDQTFCRixDQXJJRixDQXpCRixDQXRFRixFQTBRR08sT0FBTyxJQUFJUyxRQTFRZCxDQURGO0FBOFFELENBNVREOztHQUFNWCxpQjs7S0FBQUEsaUI7QUE4VFNBLGdGQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BVQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXVCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ2IsSUFBb0MsUUFBcENBLElBQW9DO0FBQUEsTUFBOUJjLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsaUJBQ1hDLCtEQUFPLEVBREk7QUFBQSxNQUNyREMsUUFEcUQsWUFDckRBLFFBRHFEO0FBQUEsTUFDM0NDLFlBRDJDLFlBQzNDQSxZQUQyQztBQUFBLE1BQzdCQyxLQUQ2QixZQUM3QkEsS0FENkI7QUFBQSxNQUN0QkMsTUFEc0IsWUFDdEJBLE1BRHNCOztBQUU3RCxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDekIsUUFBTUMsT0FBTyxtQ0FBT3ZCLElBQVA7QUFBYUcsY0FBUSxFQUFFO0FBQXZCLE1BQWI7O0FBQ0FvQixXQUFPLENBQUM3QyxTQUFSLENBQWtCSCxRQUFsQixHQUE2QmlELFFBQVEsQ0FBQ0YsSUFBSSxDQUFDRyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsQ0FBRCxDQUFyQztBQUNBSCxXQUFPLENBQUM3QyxTQUFSLENBQWtCQyxRQUFsQixHQUE2QjZDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDSyxPQUFMLENBQWFELE9BQWIsQ0FBcUIsR0FBckIsRUFBMEIsRUFBMUIsQ0FBRCxDQUFyQztBQUNBSCxXQUFPLENBQUM3QyxTQUFSLENBQWtCRyxJQUFsQixHQUF5QjJDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDMUMsS0FBTCxDQUFXOEMsT0FBWCxDQUFtQixHQUFuQixFQUF3QixFQUF4QixDQUFELENBQWpDO0FBQ0FILFdBQU8sQ0FBQ3hDLFNBQVIsQ0FBa0JSLFFBQWxCLEdBQTZCaUQsUUFBUSxDQUFDRixJQUFJLENBQUNNLE9BQUwsQ0FBYUYsT0FBYixDQUFxQixHQUFyQixFQUEwQixFQUExQixDQUFELENBQXJDO0FBQ0FILFdBQU8sQ0FBQ3hDLFNBQVIsQ0FBa0JSLFFBQWxCLEdBQTZCaUQsUUFBUSxDQUFDRixJQUFJLENBQUNPLE9BQUwsQ0FBYUgsT0FBYixDQUFxQixHQUFyQixFQUEwQixFQUExQixDQUFELENBQXJDO0FBQ0FILFdBQU8sQ0FBQ3hDLFNBQVIsQ0FBa0JGLElBQWxCLEdBQXlCMkMsUUFBUSxDQUFDRixJQUFJLENBQUNyQyxLQUFMLENBQVd5QyxPQUFYLENBQW1CLEdBQW5CLEVBQXdCLEVBQXhCLENBQUQsQ0FBakM7QUFDQVgsZ0JBQVksQ0FBQ1EsT0FBRCxDQUFaO0FBQ0FULGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRCxHQVZEOztBQVdBLE1BQU1nQixLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFFBQUdoRSxLQUFILFNBQUdBLEtBQUg7QUFBQSxRQUFVd0QsSUFBVixTQUFVQSxJQUFWO0FBQUEsUUFBZ0JMLFFBQWhCLFNBQWdCQSxRQUFoQjtBQUFBLFFBQTBCRyxNQUExQixTQUEwQkEsTUFBMUI7QUFBQSxXQUNaLG1FQUNFLE1BQUMsdURBQUQ7QUFDRSxVQUFJLEVBQUV0RCxLQURSO0FBRUUsZUFBUyxFQUFDLDhGQUZaO0FBR0UsVUFBSSxFQUFDLElBSFA7QUFJRSxjQUFRLEVBQUVtRCxRQUpaO0FBS0Usa0JBQVksRUFBRUssSUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBUUdGLE1BQU0sQ0FBQ3RELEtBQUQsQ0FBTixJQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJwQixDQURZO0FBQUEsR0FBZDs7QUFjQSxTQUNFLG1FQUNFO0FBQ0UsYUFBUyxFQUFDLHVIQURaLENBRUU7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBQyxzRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFDMkQsR0FEM0QsRUFFRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCa0MsSUFBSSxDQUFDVyxNQUFoQyxDQUZGLENBREYsRUFLRTtBQUNFLGFBQVMsRUFBQywwSUFEWjtBQUVFLFdBQU8sRUFBRUcsU0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTSxhQUFTLEVBQUMsNEZBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixDQUxGLENBRkYsRUFpQkU7QUFBTSxZQUFRLEVBQUVJLFlBQVksQ0FBQ0csUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw4Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxZQUFRLEVBQUVKLFFBRlo7QUFHRSxVQUFNLEVBQUVHLE1BSFY7QUFJRSxRQUFJLEVBQUVwQixJQUFJLENBQUN0QixTQUFMLENBQWVILFFBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBSkYsRUFlRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFlBQVEsRUFBRTBDLFFBRlo7QUFHRSxVQUFNLEVBQUVHLE1BSFY7QUFJRSxRQUFJLEVBQUVwQixJQUFJLENBQUN0QixTQUFMLENBQWVDLFFBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBZkYsRUEwQkU7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLFlBQVEsRUFBRXNDLFFBRlo7QUFHRSxVQUFNLEVBQUVHLE1BSFY7QUFJRSxRQUFJLEVBQUVwQixJQUFJLENBQUN0QixTQUFMLENBQWVHLElBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBMUJGLENBREYsRUF3Q0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLDhDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFlBQVEsRUFBRW9DLFFBRlo7QUFHRSxVQUFNLEVBQUVHLE1BSFY7QUFJRSxRQUFJLEVBQUVwQixJQUFJLENBQUNqQixTQUFMLENBQWVSLFFBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBSkYsRUFlRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxTQUFLLEVBQUMsU0FEUjtBQUVFLFlBQVEsRUFBRTBDLFFBRlo7QUFHRSxVQUFNLEVBQUVHLE1BSFY7QUFJRSxRQUFJLEVBQUVwQixJQUFJLENBQUNqQixTQUFMLENBQWVKLFFBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBZkYsRUEwQkU7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFDRSxTQUFLLEVBQUMsT0FEUjtBQUVFLFlBQVEsRUFBRXNDLFFBRlo7QUFHRSxVQUFNLEVBQUVHLE1BSFY7QUFJRSxRQUFJLEVBQUVwQixJQUFJLENBQUNqQixTQUFMLENBQWVGLElBSnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBMUJGLENBeENGLENBREYsRUFpRkU7QUFBSyxhQUFTLEVBQUMsbUZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHFIQURaO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxTQUFLLEVBQUU7QUFBRWtELGdCQUFVLEVBQUU7QUFBZCxLQUhUO0FBSUUsV0FBTyxFQUFFakIsU0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFTRTtBQUNFLGFBQVMsRUFBQyw0SkFEWjtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUVpQixnQkFBVSxFQUFFO0FBQWQsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLENBakZGLENBakJGLENBREYsQ0FKRixDQURGLEVBNkhFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3SEYsQ0FERjtBQWlJRCxDQTVKRDs7R0FBTWxCLGU7VUFDOENHLHVEOzs7S0FEOUNILGU7QUE4SlNBLDhFQUFmO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUNBOzs7Ozs7Ozs7QUFFZSwyRUFBTTtBQUVuQixTQUNFO0FBQVEsYUFBUyxFQUFDLG9DQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLHNFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFXLEVBQUMsUUFGZDtBQUdFLGFBQVMsRUFBQyw0S0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRTtBQUNFLGFBQVMsRUFBQyxzQkFEWjtBQUVFLE9BQUcsTUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFDRSxhQUFTLEVBQUMscURBRFo7QUFFRSxTQUFLLEVBQUMsNEJBRlI7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBTSxLQUFDLEVBQUMsbUdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBUEYsQ0FORixDQURGLENBVEYsRUFrQ0U7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGtFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsZ0RBRFo7QUFFRSxRQUFJLEVBQUMsR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQWlCRTtBQUFJLGFBQVMsRUFBQyw2QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGlEQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQ0UsU0FBSyxFQUFDLDRCQURSO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQU0sS0FBQyxFQUFDLHNJQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBREYsbUJBVUU7QUFDRSxhQUFTLEVBQUMseUJBRFo7QUFFRSxTQUFLLEVBQUMsNEJBRlI7QUFHRSxXQUFPLEVBQUMsV0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0U7QUFBTSxLQUFDLEVBQUMsNEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBVkYsQ0FERixFQW1CRTtBQUNFLE1BQUUsRUFBQyxZQURMO0FBRUUsYUFBUyxFQUFDLDRGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLCtCQUZaO0FBR0UsZUFBVyxFQUFDLFVBSGQ7QUFJRSxNQUFFLEVBQUMsU0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFVRTtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsYUFBUyxFQUFDLGdGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFHLGFBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsYUFWRixFQWdCRTtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsYUFBUyxFQUFDLGdGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFHLGFBQVMsRUFBQyxpQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsY0FoQkYsRUFzQkU7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCRTtBQUNFLFFBQUksRUFBQyxHQURQO0FBRUUsYUFBUyxFQUFDLGdGQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFHLGFBQVMsRUFBQywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsYUF2QkYsQ0FuQkYsQ0FERixDQWpCRixDQURGLENBbENGLENBREYsQ0FERixDQURGO0FBaUhELENBbkhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7QUFFQSxJQUFNbUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixTQUNFO0FBQUssYUFBUyxFQUFDLDZGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3R0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseUZBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLEdBRFA7QUFFRSxhQUFTLEVBQUMsc0hBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQ0UsYUFBUyxFQUFDLGlEQURaO0FBRUUsU0FBSyxFQUFDLDRCQUZSO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQU0sS0FBQyxFQUFDLDhEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUpGLEVBV0U7QUFBTSxhQUFTLEVBQUMsa0ZBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixDQURGLENBREYsRUFrQkU7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsZ0JBRFA7QUFFRSxhQUFTLEVBQUMsNElBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQ0UsYUFBUyxFQUFDLG1DQURaO0FBRUUsU0FBSyxFQUFDLDRCQUZSO0FBR0UsV0FBTyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQU0sS0FBQyxFQUFDLDhGQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQUpGLEVBV0U7QUFBTSxhQUFTLEVBQUMsd0ZBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBWEYsQ0FERixDQWxCRixFQW1DRTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsYUFBUyxFQUFDLDhJQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRTtBQUNFLGFBQVMsRUFBQyxtQ0FEWjtBQUVFLFNBQUssRUFBQyw0QkFGUjtBQUdFLFdBQU8sRUFBQyxXQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFNLEtBQUMsRUFBQyxzSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FYRixFQWtCRTtBQUFNLGFBQVMsRUFBQyx3RkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRixDQURGLENBbkNGLENBREYsQ0FERixDQURGO0FBbUZELENBcEZEOztLQUFNQSxRO0FBc0ZTQSx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFFZTtBQUFBLE1BQ2JDLFFBRGEsUUFDYkEsUUFEYTtBQUFBLHdCQUViQyxLQUZhO0FBQUEsTUFFYkEsS0FGYSwyQkFFTCwyQkFGSztBQUFBLHlCQUdiQyxNQUhhO0FBQUEsTUFHYkEsTUFIYSw0QkFHSixLQUhJO0FBQUEsU0FLYjtBQUFLLGFBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRCxLQUFSLENBREYsRUFFRTtBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU9FLE1BQUMsc0RBQUQ7QUFBUSxVQUFNLEVBQUVDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sYUFBUyxFQUFDLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBREgsQ0FGRixDQVJGLENBTGE7QUFBQSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7OztBQ1ZBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUEwRTtBQUMzRDtBQUNmO0FBQ0EsZUFBZSw2RUFBNEI7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNQQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLDJCOzs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7O0FDSkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekMsNEJBQTRCLG1CQUFPLENBQUMsK0ZBQXlCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRDOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNUQSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJELHNCQUFzQixtQkFBTyxDQUFDLG1GQUFtQjs7QUFFakQsaUNBQWlDLG1CQUFPLENBQUMseUdBQThCOztBQUV2RSx3QkFBd0IsbUJBQU8sQ0FBQyx1RkFBcUI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLHVCQUF1QixtQkFBTyxDQUFDLHFGQUFvQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDUDtBQUNOOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1REFBTTs7QUFFekIsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx5REFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtFO0FBQ1U7QUFDbkM7QUFDMEI7QUFDZDtBQUNUO0FBQ2I7QUFDZTs7QUFFOUMsMEJBQTBCLDJEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOERBQVc7QUFDaEQsbUJBQW1CLDJEQUFhLEdBQUc7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0osU0FBUyx3REFBVTtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwwRUFBbUI7QUFDbkMsR0FBRztBQUNIO0FBQ0E7O0FBRUEsbUJBQW1CLDBFQUFlOztBQUVsQyxNQUFNLEtBQXFDO0FBQzNDOztBQUVBO0FBQ0EsbUJBQW1CLDBFQUFlLDRDQUE0QztBQUM5RTtBQUNBOztBQUVBLGNBQWMsbUVBQVk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixNQUFxQztBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksMkRBQWE7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQWE7QUFDeEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVELElBQUksSUFBcUM7QUFDekM7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLG1EQUFhO0FBQ3hCOztBQUVBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSxJQUFxQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0EsR0FBRzs7O0FBR0gsU0FBUyxtREFBYTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLDJEQUFhO0FBQ3hCLHVCQUF1QiwwRUFBZTtBQUN0QyxhQUFhLDJEQUFhO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBLG1CQUFtQiwwRUFBZTtBQUNsQyxTQUFTLDJEQUFhO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJFQUFjOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIseURBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQVk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsK0NBQVM7O0FBRVg7QUFDQSxtQkFBbUIsb0RBQUc7QUFDdEIsNENBQTRDOztBQUU1QztBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxTQUFTO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDBFQUFtQjs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDJEQUFhO0FBQ3RCOztBQUVBO0FBQ0EseUJBQXlCLGFBQW9CO0FBQzdDO0FBQ0E7O0FBRUEseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQSx1QkFBdUIsMEVBQWU7O0FBRXRDO0FBQ0EsUUFBUSxtRUFBWTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGFBQW9CO0FBQzdDO0FBQ0E7O0FBRUEsNEVBQTRFLGVBQWU7QUFDM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRTRGOzs7Ozs7Ozs7Ozs7O0FDeFg3RjtBQUFBO0FBQXFEOztBQUVyRDtBQUNBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUEsU0FBUywwRUFBZTtBQUN4Qjs7QUFFZSxrRUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVm5CO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdER2QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNFO0FBQ0Y7O0FBRXZDLGdSQUFnUix1Q0FBdUM7QUFDdlQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLGdFQUFPO0FBQzlCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsTUFBTSx5REFBUTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7O0FBRWhELGNBQWMsS0FBcUM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsSUFBcUM7QUFDeEQscVBBQXFQLFlBQVksa0lBQWtJLGFBQWE7QUFDaFo7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QiwwQkFBMEI7QUFDdkQsU0FBUztBQUNULHNGQUFzRjtBQUN0RjtBQUNBLE9BQU87QUFDUCxnREFBZ0QsYUFBb0I7QUFDcEU7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQTs7QUFFQSxtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLE9BQU87QUFDN0M7O0FBRUEsSUFBSSxJQUFxQztBQUN6QyxxRUFBcUU7QUFDckUsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSCxpQkFBaUIsaUJBQWlCO0FBQ2xDOztBQUVBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLDZEQUFVOztBQUV2QixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7OztBQ2pVM0I7QUFBQTtBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBUSxhQUFhOztBQUVyQixpQ0FBaUMsb0NBQW9DOztBQUVyRSx5QkFBeUIsdUJBQXVCLEVBQUU7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHQSxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxhQUFvQjtBQUN2RTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDdEl0QjtBQUFBO0FBQ0E7QUFDQSx5S0FBeUssT0FBTztBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQix5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlEO0FBQ2pEOztBQUVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSyxHQUFHLFdBQVcsSUFBSSxJQUFJO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsS0FBSyxHQUFHLGVBQWUsSUFBSSxJQUFJO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHVEQUFTO0FBQ2I7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVGQUF1RjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3Q0FBd0M7QUFDeEM7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sYUFBYTtBQUNwQjs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSwyQ0FBMkM7QUFDM0M7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztB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LEVBQUUsQ0FETjtBQUVFd0UsV0FBUyxFQUFFLFVBRmI7QUFHRUMsVUFBUSxFQUFFLE9BSFo7QUFJRSxXQUFPO0FBSlQsQ0FQa0IsRUFjbEI7QUFDRXpFLElBQUUsRUFBRSxDQUROO0FBRUV3RSxXQUFTLEVBQUUsV0FGYjtBQUdFQyxVQUFRLEVBQUUsT0FIWjtBQUlFLFdBQU87QUFKVCxDQWRrQixFQXFCbEI7QUFDRXpFLElBQUUsRUFBRSxDQUROO0FBRUV3RSxXQUFTLEVBQUUsaUJBRmI7QUFHRUMsVUFBUSxFQUFFLFdBSFo7QUFJRSxXQUFPO0FBSlQsQ0FyQmtCLEVBNEJsQjtBQUNFekUsSUFBRSxFQUFFLENBRE47QUFFRXdFLFdBQVMsRUFBRSxlQUZiO0FBR0VDLFVBQVEsRUFBRSxNQUhaO0FBSUUsV0FBTztBQUpULENBNUJrQixFQW1DbEI7QUFDRXpFLElBQUUsRUFBQyxDQURMO0FBRUV3RSxXQUFTLEVBQUUsU0FGYjtBQUdFQyxVQUFRLEVBQUUsYUFIWjtBQUlFLFdBQU87QUFKVCxDQW5Da0IsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1JQLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxidWxsZXRpbi1lZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdyb3VwQnkgPSAoeHMsIGtleSkgPT4ge1xyXG4gIHJldHVybiB4cy5yZWR1Y2UoKHJ2LCB4KSA9PiB7XHJcbiAgICAocnZbeFtrZXldXSA9IHJ2W3hba2V5XV0gfHwgW10pLnB1c2goeCk7XHJcbiAgICByZXR1cm4gcnY7XHJcbiAgfSwge30pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5TWFwID0gKHR5cGUpID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogXCJNQVhJTUFcIixcclxuICAgICAgICBtYXg6IDEwLFxyXG4gICAgICAgIGNvZWY6IDIsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIDI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IFwiTUFYSU1BXCIsXHJcbiAgICAgICAgbWF4OiAyMCxcclxuICAgICAgICBjb2VmOiAxMSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbDogXCJNQVhJTUFcIixcclxuICAgICAgICBtYXg6IDUwLFxyXG4gICAgICAgIGNvZWY6IDMsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFiZWw6IFwiTUFYSU1BXCIsXHJcbiAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgY29lZjogMSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufTtcclxuXHJcbiBjb25zdCBtYXhpbWFMaXN0ID0gWzEsIDIsIDMsIDRdLm1hcCgoeCkgPT4gY2F0ZWdvcnlNYXAoeCkpO1xyXG5cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGJ1bGxldGluRW50aXR5ID0gKGNvdXJzZXNEYXRhKSA9PiB7XHJcbiAgICAgY29uc3QgYnVsbGV0aW5Hcm91cGVkID0gZ3JvdXBCeShjb3Vyc2VzRGF0YSwgXCJjYXRlZ29yeVwiKTtcclxuXHJcbiAgICAgY29uc3QgdG90YWxHcmFkZSA9IHtcclxuICAgICAgcGVyaW9kZTE6IGNvdXJzZXNEYXRhLnJlZHVjZShcclxuICAgICAgICAoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnNlbWVzdGVyMS5wZXJpb2RlMSxcclxuICAgICAgICAwXHJcbiAgICAgICksXHJcbiAgICAgIHBlcmlvZGUyOiBjb3Vyc2VzRGF0YS5yZWR1Y2UoXHJcbiAgICAgICAgKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5zZW1lc3RlcjEucGVyaW9kZTIsXHJcbiAgICAgICAgMFxyXG4gICAgICApLFxyXG4gICAgICBleGFtMTogY291cnNlc0RhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIuc2VtZXN0ZXIxLmV4YW0sIDApLFxyXG4gICAgICBwZXJpb2RlMzogY291cnNlc0RhdGEucmVkdWNlKFxyXG4gICAgICAgIChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIuc2VtZXN0ZXIyLnBlcmlvZGUxLFxyXG4gICAgICAgIDBcclxuICAgICAgKSxcclxuICAgICAgcGVyaW9kZTQ6IGNvdXJzZXNEYXRhLnJlZHVjZShcclxuICAgICAgICAoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnNlbWVzdGVyMi5wZXJpb2RlMixcclxuICAgICAgICAwXHJcbiAgICAgICksXHJcbiAgICAgIGV4YW0yOiBjb3Vyc2VzRGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vyci5zZW1lc3RlcjIuZXhhbSwgMCksXHJcbiAgICB9O1xyXG5cclxuICAgICBjb25zdCBtYXhpbWFQZXJpb2QxID0gbWF4aW1hTGlzdC5yZWR1Y2UoXHJcbiAgICAgICAoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLm1heCAqIGN1cnIuY29lZixcclxuICAgICAgIDBcclxuICAgICApO1xyXG4gICAgIGNvbnN0IG1heGltYVBlcmlvZDIgPSBtYXhpbWFMaXN0LnJlZHVjZShcclxuICAgICAgIChhY2MsIGN1cnIpID0+IGFjYyArIGN1cnIubWF4ICogY3Vyci5jb2VmLFxyXG4gICAgICAgMFxyXG4gICAgICk7XHJcbiAgICAgY29uc3QgbWF4aW1hRXhhbSA9XHJcbiAgICAgICBtYXhpbWFMaXN0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLm1heCAqIGN1cnIuY29lZiAqIDIsIDApIC1cclxuICAgICAgIDIwMDtcclxuXHJcbiAgICBjb25zdCB0b3RhbEdyYWRlUGVyY2VudGFnZSA9XHJcbiAgICAgICgodG90YWxHcmFkZS5wZXJpb2RlMSArXHJcbiAgICAgICAgdG90YWxHcmFkZS5wZXJpb2RlMiArXHJcbiAgICAgICAgdG90YWxHcmFkZS5leGFtMSArXHJcbiAgICAgICAgdG90YWxHcmFkZS5wZXJpb2RlMyArXHJcbiAgICAgICAgdG90YWxHcmFkZS5wZXJpb2RlNCArXHJcbiAgICAgICAgdG90YWxHcmFkZS5leGFtMikgKlxyXG4gICAgICAgIDEwMCkgL1xyXG4gICAgICAoKG1heGltYVBlcmlvZDEgKyBtYXhpbWFQZXJpb2QyICsgbWF4aW1hRXhhbSkgKiAyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBidWxsZXRpbkdyb3VwZWQsXHJcbiAgICAgIHRvdGFsR3JhZGUsXHJcbiAgICAgIHRvdGFsR3JhZGVQZXJjZW50YWdlLFxyXG4gICAgICBtYXhpbWFQZXJpb2QxLCBtYXhpbWFQZXJpb2QyLCBtYXhpbWFFeGFtXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5pbXBvcnQgeyBjYXRlZ29yeU1hcCwgYnVsbGV0aW5FbnRpdHkgfSBmcm9tIFwiLi9idWxsZXRpbi1zaGFyZWRcIjtcclxuaW1wb3J0IEdyYWRlRWRpdCBmcm9tIFwiLi9lZGl0LWdyYWRlXCI7XHJcblxyXG5jb25zdCBCdWxsZXRpblJlYWRXcml0ZSA9ICh7IGNvdXJzZXNEYXRhIH0pID0+IHtcclxuICBjb25zdCBbZWRpdFJvdywgc2V0RWRpdFJvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2l0ZW1Sb3csIHNldEl0ZW1Sb3ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgIGNvbnN0IHtcclxuICAgICB0b3RhbEdyYWRlLFxyXG4gICAgIGJ1bGxldGluR3JvdXBlZCxcclxuICAgICB0b3RhbEdyYWRlUGVyY2VudGFnZSxcclxuICAgICBtYXhpbWFQZXJpb2QxLFxyXG4gICAgIG1heGltYVBlcmlvZDIsXHJcbiAgICAgbWF4aW1hRXhhbSxcclxuICAgfSA9IGJ1bGxldGluRW50aXR5KGNvdXJzZXNEYXRhKTtcclxuXHJcbiAgIGNvbnN0IGdyYWRlQ29sb3IgPVxyXG4gICAgIHRvdGFsR3JhZGVQZXJjZW50YWdlIDwgNTAgPyBcInRleHQtcmVkLTUwMFwiIDogXCJ0ZXh0LWdyZWVuLTUwMFwiO1xyXG5cclxuICAgY29uc3Qgc3RyaXAgPSAoaSkgPT4gKGkgJSAyICE9PSAwID8gXCJiZy1ncmF5LTMwMFwiIDogXCJcIik7XHJcblxyXG4gICBpZiAoIXRvdGFsR3JhZGUgfHwgIWJ1bGxldGluR3JvdXBlZCkge1xyXG4gICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0Um93RGF0YSA9IChpdGVtKSA9PntcclxuICAgICAgc2V0RWRpdFJvdyh0cnVlKTtcclxuICAgICAgc2V0SXRlbVJvdyhpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgY29uc3QgZWRpdFZpZXcgPSBpdGVtUm93ICYmIChcclxuICAgIDxHcmFkZUVkaXRcclxuICAgICAgaXRlbT17aXRlbVJvd31cclxuICAgICAgc2hvd01vZGFsPXsoKSA9PiBzZXRFZGl0Um93KGZhbHNlKX1cclxuICAgICAgb25EYXRhQ2hhbmdlPXtzZXRJdGVtUm93fVxyXG4gICAgLz5cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGl0ZW1Sb3cgJiYgaXRlbVJvdy5tb2RpZmllZCkge1xyXG4gICAgICAvL1RPRE86IGZvciBBUElcclxuICAgICAgY29uc3QgeyBtb2RpZmllZCwgLi4uYWxsUmVzdCB9ID0gaXRlbVJvdztcclxuICAgICAgY29uc29sZS5sb2coXCJSb3cgSXRlbSBjaGFuZ2VkOiBcIiwgbmV3IERhdGUoKS50b1N0cmluZygpKTtcclxuICAgICAgY29uc29sZS5sb2coaXRlbVJvdyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFJlc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJqdXN0IHZpZXdcIik7XHJcbiAgICB9XHJcbiAgfSwgW2VkaXRSb3ddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGJvcmRlciBteS02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTIgcHgtOCB0ZXh0LXdoaXRlIGJnLWdyYXktNjAwIHRleHQtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtOCB3LThcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6TTcgNnYyYTMgMyAwIDEgMCA2IDBWNmEzIDMgMCAxIDAtNiAwem0tMy42NSA4LjQ0YTggOCAwIDAgMCAxMy4zIDAgMTUuOTQgMTUuOTQgMCAwIDAtMTMuMyAwelwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG1sLTNcIj5ESU1QQSBESUFNT1lPPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0yIHB4LTggZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMCBib3JkZXItYiB0ZXh0LWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgMWVyZSBTZWNvbmRhaXJlXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0yIHB4LTggZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMCB0ZXh0LWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgRUNBTU9cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMiBweC04IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1ncmF5LTYwMCB0ZXh0LWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAxZXJlIFNlbWVzdHJlXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IGZsZXggaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgeyhcclxuICAgICAgICAgICAgICAgICAgKCh0b3RhbEdyYWRlLnBlcmlvZGUxICtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEdyYWRlLnBlcmlvZGUyICtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEdyYWRlLmV4YW0xKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwKSAvXHJcbiAgICAgICAgICAgICAgICAgIChtYXhpbWFQZXJpb2QxICsgbWF4aW1hUGVyaW9kMiArIG1heGltYUV4YW0pXHJcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoXCIyXCIpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtMlwiPiU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMiBweC04IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1ncmF5LTYwMCB0ZXh0LWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAyZXJlIFNlbWVzdHJlXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IGZsZXggaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgeyhcclxuICAgICAgICAgICAgICAgICAgKCh0b3RhbEdyYWRlLnBlcmlvZGUzICtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEdyYWRlLnBlcmlvZGU0ICtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEdyYWRlLmV4YW0yKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwKSAvXHJcbiAgICAgICAgICAgICAgICAgIChtYXhpbWFQZXJpb2QxICsgbWF4aW1hUGVyaW9kMiArIG1heGltYUV4YW0pXHJcbiAgICAgICAgICAgICAgICApLnRvRml4ZWQoXCIyXCIpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtMlwiPiU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBib3JkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMiBweC0xMCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgYmctZ3JheS02MDAgdGV4dC1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgR0VORVJBTFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBmbGV4IGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBcIiArIGdyYWRlQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAge3RvdGFsR3JhZGVQZXJjZW50YWdlLnRvRml4ZWQoXCIyXCIpfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbXQtMlwiPiU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWF1dG8gdy1mdWxsIGJvcmRlci10LTJcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyLXItNCBib3JkZXItZ3JheS02MDBcIj48L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlci1yLTQgYm9yZGVyLWdyYXktNjAwXCIgY29sU3Bhbj1cIjRcIj5cclxuICAgICAgICAgICAgICBQUkVNSUVSRSBTRU1FU1RSRVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCIgY29sU3Bhbj1cIjZcIj5cclxuICAgICAgICAgICAgICBERVVYSUVNRSBTRU1FU1RSRVxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXItci00IGJvcmRlci1ncmF5LTYwMFwiPkNvdXJzPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPjFlcmUgUDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj4yZW1lIFA8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+RVhBTTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyLXItNCBib3JkZXItZ3JheS02MDBcIj5UT1Q8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+M2VtZSBQPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPjRlbWUgUDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5FWEFNPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXItci0yIGJvcmRlci1ncmF5LTYwMFwiPlRPUDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5ULkc8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYm9yZGVyLWItMlwiPlxyXG4gICAgICAgICAge1sxLCAyLCAzLCA0XS5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF4aW1hID0gY2F0ZWdvcnlNYXAoeCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdXJzZSA9IGJ1bGxldGluR3JvdXBlZFt4LnRvU3RyaW5nKCldO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3gudG9TdHJpbmcoKSArIFwiUm9sbGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17eC50b1N0cmluZygpICsgXCJtYXhpbWFcIn0gY2xhc3NOYW1lPVwiYmctaW5kaWdvLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGZvbnQtYm9sZCBweC00IHB5LTIgYm9yZGVyLXItNCBib3JkZXItZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWF4aW1hLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtaW5kaWdvLTUwMCBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWF4aW1hLm1heH1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21heGltYS5tYXh9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXhpbWEubWF4ICE9PSAxMDAgPyBtYXhpbWEubWF4ICogMiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMiBib3JkZXItci00IGJvcmRlci1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXhpbWEubWF4ICogNH1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21heGltYS5tYXh9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXhpbWEubWF4fVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtaW5kaWdvLTUwMCBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWF4aW1hLm1heCAhPT0gMTAwID8gbWF4aW1hLm1heCAqIDIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtaW5kaWdvLTUwMCBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTIgYm9yZGVyLXItMiBib3JkZXItZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWF4aW1hLm1heCAqIDR9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttYXhpbWEubWF4ICogOH1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICB7Y291cnNlLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCkgKyBpdGVtLmNvdXJzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5jb3Vyc2V9IGNsYXNzTmFtZT17c3RyaXAoaXRlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBwbC04IHByLTQgcHktMiBib3JkZXItci00IGJvcmRlci1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb3Vyc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjEucGVyaW9kZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjEucGVyaW9kZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjEuZXhhbX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMiB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkIGJvcmRlci1yLTQgYm9yZGVyLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNlbWVzdGVyMS5wZXJpb2RlMSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZW1lc3RlcjEucGVyaW9kZTIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VtZXN0ZXIxLmV4YW19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjIucGVyaW9kZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjIucGVyaW9kZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjIuZXhhbX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMiBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIGJvcmRlci1yLTIgYm9yZGVyLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnNlbWVzdGVyMi5wZXJpb2RlMSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZW1lc3RlcjIucGVyaW9kZTIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VtZXN0ZXIyLmV4YW19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5zZW1lc3RlcjEucGVyaW9kZTEgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VtZXN0ZXIxLnBlcmlvZGUyICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbWVzdGVyMS5leGFtICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNlbWVzdGVyMi5wZXJpb2RlMSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zZW1lc3RlcjIucGVyaW9kZTIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VtZXN0ZXIyLmV4YW19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRSb3dEYXRhKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLjMgMy43bDQgNEw0IDIwSDB2LTRMMTIuMyAzLjd6bTEuNC0xLjRMMTYgMGw0IDQtMi4zIDIuMy00LTR6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWluZGlnby0xMDBcIj5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBmb250LWJvbGQgcHgtNCBweS0yIGJvcmRlci1yLTQgYm9yZGVyLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgTUFYSU1BIEdFTkVSQUxcclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge21heGltYVBlcmlvZDF9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHttYXhpbWFQZXJpb2QyfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtaW5kaWdvLTUwMCBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7bWF4aW1hRXhhbX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yIGJvcmRlci1yLTQgYm9yZGVyLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAge21heGltYVBlcmlvZDEgKyBtYXhpbWFQZXJpb2QyICsgbWF4aW1hRXhhbX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge21heGltYVBlcmlvZDF9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgdGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHttYXhpbWFQZXJpb2QyfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHRleHQtaW5kaWdvLTUwMCBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7bWF4aW1hRXhhbX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yIGJvcmRlci1yLTIgYm9yZGVyLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAge21heGltYVBlcmlvZDEgKyBtYXhpbWFQZXJpb2QyICsgbWF4aW1hRXhhbX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAgeyhtYXhpbWFQZXJpb2QxICsgbWF4aW1hUGVyaW9kMiArIG1heGltYUV4YW0pICogMn1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctaW5kaWdvLTcwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgZm9udC1ib2xkIHB4LTQgcHktMlwiPlRPVEFVWDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge3RvdGFsR3JhZGUucGVyaW9kZTF9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge3RvdGFsR3JhZGUucGVyaW9kZTJ9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge3RvdGFsR3JhZGUuZXhhbTF9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgZm9udC1ib2xkIHRleHQtbGcgdGV4dC1jZW50ZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge3RvdGFsR3JhZGUucGVyaW9kZTEgKyB0b3RhbEdyYWRlLnBlcmlvZGUyICsgdG90YWxHcmFkZS5leGFtMX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7dG90YWxHcmFkZS5wZXJpb2RlM31cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7dG90YWxHcmFkZS5wZXJpb2RlNH1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7dG90YWxHcmFkZS5leGFtMn1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBmb250LWJvbGQgdGV4dC1sZyB0ZXh0LWNlbnRlciBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICB7dG90YWxHcmFkZS5wZXJpb2RlMyArIHRvdGFsR3JhZGUucGVyaW9kZTQgKyB0b3RhbEdyYWRlLmV4YW0yfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIGZvbnQtYm9sZCB0ZXh0LWxnIHRleHQtY2VudGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHt0b3RhbEdyYWRlLnBlcmlvZGUxICtcclxuICAgICAgICAgICAgICAgIHRvdGFsR3JhZGUucGVyaW9kZTIgK1xyXG4gICAgICAgICAgICAgICAgdG90YWxHcmFkZS5leGFtMSArXHJcbiAgICAgICAgICAgICAgICB0b3RhbEdyYWRlLnBlcmlvZGUzICtcclxuICAgICAgICAgICAgICAgIHRvdGFsR3JhZGUucGVyaW9kZTQgK1xyXG4gICAgICAgICAgICAgICAgdG90YWxHcmFkZS5leGFtMn1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgIHtlZGl0Um93ICYmIGVkaXRWaWV3fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGxldGluUmVhZFdyaXRlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuY29uc3QgQnVsbGV0aW5Sb3dFZGl0ID0gKHsgaXRlbSwgc2hvd01vZGFsLCBvbkRhdGFDaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgd2F0Y2gsIGVycm9ycyB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGVkaURhdGEgPSB7Li4uaXRlbSwgbW9kaWZpZWQ6IHRydWV9O1xyXG4gICAgZWRpRGF0YS5zZW1lc3RlcjEucGVyaW9kZTEgPSBwYXJzZUludChkYXRhLnBlcmlvZDEucmVwbGFjZSgnXycsIFwiXCIpKTtcclxuICAgIGVkaURhdGEuc2VtZXN0ZXIxLnBlcmlvZGUyID0gcGFyc2VJbnQoZGF0YS5wZXJpb2QyLnJlcGxhY2UoXCJfXCIsIFwiXCIpKTtcclxuICAgIGVkaURhdGEuc2VtZXN0ZXIxLmV4YW0gPSBwYXJzZUludChkYXRhLmV4YW0xLnJlcGxhY2UoXCJfXCIsIFwiXCIpKTtcclxuICAgIGVkaURhdGEuc2VtZXN0ZXIyLnBlcmlvZGUxID0gcGFyc2VJbnQoZGF0YS5wZXJpb2QzLnJlcGxhY2UoXCJfXCIsIFwiXCIpKTtcclxuICAgIGVkaURhdGEuc2VtZXN0ZXIyLnBlcmlvZGUxID0gcGFyc2VJbnQoZGF0YS5wZXJpb2Q0LnJlcGxhY2UoXCJfXCIsIFwiXCIpKTtcclxuICAgIGVkaURhdGEuc2VtZXN0ZXIyLmV4YW0gPSBwYXJzZUludChkYXRhLmV4YW0yLnJlcGxhY2UoXCJfXCIsIFwiXCIpKTtcclxuICAgIG9uRGF0YUNoYW5nZShlZGlEYXRhKTtcclxuICAgIHNob3dNb2RhbChmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBJbnB1dCA9ICh7IGxhYmVsLCBkYXRhLCByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcclxuICAgIDw+XHJcbiAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICBuYW1lPXtsYWJlbH1cclxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsdWUtMzAwIHctOCB0ZXh0LWNlbnRlciBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgbWFzaz1cIjk5XCJcclxuICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkYXRhfVxyXG4gICAgICAvPlxyXG4gICAgICB7ZXJyb3JzW2xhYmVsXSAmJiA8c3Bhbj5MYXN0IG5hbWUgaXMgcmVxdWlyZWQ8L3NwYW4+fVxyXG4gICAgPC8+XHJcbiAgKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkIGluc2V0LTAgei01MCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAvLyBvbkNsaWNrPXtzaG93TW9kYWx9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXcteGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICB7LypoZWFkZXIqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG1yLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+QWpvdXRlci9Nb2RpZmllcjo8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bFwiPntpdGVtLmNvdXJzZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBvcGFjaXR5LTUgaC02IHctNiB0ZXh0LTJ4bCBibG9jayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgIMOXXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Lypib2R5Ki99XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTYgZmxleC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYm9yZGVyIHJvdW5kZWQtc20gbXktMiBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJweS0yIHB4LTQgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTIwMCBib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDFlcmUgU2VtZXN0cmVcclxuICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWF1dG8gcHgtNCBweS0xIGJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MWVyZSBQZXJpb2RlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicGVyaW9kMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW0uc2VtZXN0ZXIxLnBlcmlvZGUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctYXV0byBweC00IHB5LTEgYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yZW1lIFBlcmlvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJwZXJpb2QyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbS5zZW1lc3RlcjEucGVyaW9kZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1hdXRvIHB4LTQgcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkV4YW1lbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV4YW0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbS5zZW1lc3RlcjEuZXhhbX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBib3JkZXIgcm91bmRlZC1zbSBteS0yIHBiLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInB5LTIgcHgtNCBmb250LXNlbWlib2xkIGJnLWdyYXktMjAwIGJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgMmVtZSBTZW1lc3RyZVxyXG4gICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctYXV0byBweS0xIHB4LTQgYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4zZW1lIFBlcmlvZGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJwZXJpb2QzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlbS5zZW1lc3RlcjIucGVyaW9kZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1hdXRvIHB5LTEgcHgtNCBib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjRlbWUgUGVyaW9kZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInBlcmlvZDRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtLnNlbWVzdGVyMi5wZXJpb2RlMn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWF1dG8gcHktMSBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhhbWVuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZXhhbTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtLnNlbWVzdGVyMi5leGFtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qZm9vdGVyKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXQgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGJhY2tncm91bmQtdHJhbnNwYXJlbnQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQW5udWxlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1ncmVlbi02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJhbGwgLjE1cyBlYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRW5yZWdpc3RyZXJcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eS0yNSBmaXhlZCBpbnNldC0wIHotNDAgYmctYmxhY2tcIj48L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWxsZXRpblJvd0VkaXQ7XHJcblxyXG4vKipcclxuICogICB7XHJcbiAgICBpZDogMSxcclxuICAgIGNhdGVnb3J5OiAxLFxyXG4gICAgY291cnNlOiBcIkVuc2VpZ25lbWVudCBiaWJsaXF1ZVwiLFxyXG4gICAgc2VtZXN0ZXIxOiB7XHJcbiAgICAgIHBlcmlvZGUxOiA5LFxyXG4gICAgICBwZXJpb2RlMjogNyxcclxuICAgICAgZXhhbTogMTQsXHJcbiAgICB9LFxyXG4gICAgc2VtZXN0ZXIyOiB7XHJcbiAgICAgIHBlcmlvZGUxOiAxMixcclxuICAgICAgcGVyaW9kZTI6IDYsXHJcbiAgICAgIGV4YW06IDE4LFxyXG4gICAgfSxcclxuICB9XHJcbiAqIFxyXG4gKi8iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc2NyZWVuIGgtYXV0byBiZy1tYWluXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcHQtMiBtZDpwdC0xIHBiLTEgcHgtMSBtdC0wIGgtYXV0byBmaXhlZCB3LWZ1bGwgei0yMCB0b3AtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1zaHJpbmsgbWQ6dy0xLzMganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBwbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJlbSBlbS1ncmlubmluZ1wiPjwvaT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgbWQ6dy0xLzMganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCB0ZXh0LXdoaXRlIHB4LTJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LXNtIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItZ3JheS03MDAgcm91bmRlZCBweS0xIHB4LTIgcGwtMTAgYXBwZWFyYW5jZS1ub25lIGxlYWRpbmctbm9ybWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHNlYXJjaC1pY29uXCJcclxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtd2hpdGUgdy00IGgtNFwiXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi45IDE0LjMyYTggOCAwIDEgMSAxLjQxLTEuNDFsNS4zNSA1LjMzLTEuNDIgMS40Mi01LjMzLTUuMzR6TTggMTRBNiA2IDAgMSAwIDggMmE2IDYgMCAwIDAgMCAxMnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBwdC0yIGNvbnRlbnQtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1yZXNldCBmbGV4IGp1c3RpZnktYmV0d2VlbiBmbGV4LTEgbWQ6ZmxleC1ub25lIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4LTEgbWQ6ZmxleC1ub25lIG1kOm1yLTNcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweS0yIHB4LTQgdGV4dC13aGl0ZSBuby11bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiZmxleC0xIG1kOmZsZXgtbm9uZSBtZDptci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC1ncmF5LTYwMCBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC1ncmF5LTIwMCBob3Zlcjp0ZXh0LXVuZGVybGluZSBweS0yIHB4LTRcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2J1bGxldGluLWVkaXRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBsaW5rXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgtMSBtZDpmbGV4LW5vbmUgbWQ6bXItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtOCB3LThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwek03IDZ2MmEzIDMgMCAxIDAgNiAwVjZhMyAzIDAgMSAwLTYgMHptLTMuNjUgOC40NGE4IDggMCAwIDAgMTMuMyAwIDE1Ljk0IDE1Ljk0IDAgMCAwLTEzLjMgMHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2YuIEthbmRvbG9cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTMgZmlsbC1jdXJyZW50IGlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS4yOTMgMTIuOTVsLjcwNy43MDdMMTUuNjU3IDhsLTEuNDE0LTEuNDE0TDEwIDEwLjgyOCA1Ljc1NyA2LjU4NiA0LjM0MyA4elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJteURyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bmxpc3QgYWJzb2x1dGUgYmctZ3JheS05MDAgdGV4dC13aGl0ZSByaWdodC0wIG10LTMgcC0zIG92ZXJmbG93LWF1dG8gei0zMCBpbnZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wLXNlYXJjaCBwLTIgdGV4dC1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXlJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGhvdmVyOmJnLWdyYXktODAwIHRleHQtd2hpdGUgdGV4dC1zbSBuby11bmRlcmxpbmUgaG92ZXI6bm8tdW5kZXJsaW5lIGJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyIGZhLWZ3XCI+PC9pPiBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgaG92ZXI6YmctZ3JheS04MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIG5vLXVuZGVybGluZSBob3Zlcjpuby11bmRlcmxpbmUgYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1md1wiPjwvaT4gU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktODAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBob3ZlcjpiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIHRleHQtc20gbm8tdW5kZXJsaW5lIGhvdmVyOm5vLXVuZGVybGluZSBibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24tb3V0LWFsdCBmYS1md1wiPjwvaT4gTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcblxyXG5jb25zdCBTaWRlTWVudSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBzaGFkb3ctbGcgaC0xNiBmaXhlZCBib3R0b20tMCBtdC0xMiBtZDpyZWxhdGl2ZSBtZDpoLXNjcmVlbiB6LTEwIHctZnVsbCBtZDp3LTQ4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bXQtMTIgbWQ6dy00OCBtZDpmaXhlZCBtZDpsZWZ0LTAgbWQ6dG9wLTAgY29udGVudC1jZW50ZXIgbWQ6Y29udGVudC1zdGFydCB0ZXh0LWxlZnQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtcmVzZXQgZmxleCBmbGV4LXJvdyBtZDpmbGV4LWNvbCBweS0wIG1kOnB5LTMgcHgtMSBtZDpweC0yIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTMgZmxleC0xXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTEgbWQ6cHktMyBwbC0xIGFsaWduLW1pZGRsZSB0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1iLTIgYm9yZGVyLWJsdWUtNjAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTggdy04IHByLTAgbWQ6cHItMyB0ZXh0LWJsdWUtNjAwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xIDEwaDN2MTBIMVYxMHpNNiAwaDN2MjBINlYwem01IDhoM3YxMmgtM1Y4em01LTRoM3YxNmgtM1Y0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGItMSBtZDpwYi0wIHRleHQteHMgbWQ6dGV4dC1iYXNlIHRleHQtd2hpdGUgbWQ6dGV4dC13aGl0ZSBibG9jayBtZDppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMyBmbGV4LTFcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL2J1bGxldGluLWVkaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHB5LTEgbWQ6cHktMyBwbC0xIGFsaWduLW1pZGRsZSB0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktODAwIGhvdmVyOmJvcmRlci1waW5rLTUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC04IHctOCBwci0wIG1kOnByLTNcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1IDloLTN2MmgzdjNoMnYtM2gzVjloLTNWNmgtMnYzek0wIDNoMTB2MkgwVjN6bTAgOGgxMHYySDB2LTJ6bTAtNGgxMHYySDBWN3ptMCA4aDEwdjJIMHYtMnpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBiLTEgbWQ6cGItMCB0ZXh0LXhzIG1kOnRleHQtYmFzZSB0ZXh0LWdyYXktNjAwIG1kOnRleHQtZ3JheS00MDAgYmxvY2sgbWQ6aW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICBHZXN0aW9uIGRlIE5vdGVzXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTMgZmxleC0xXCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9zdHVkZW50XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0xIG1kOnB5LTMgcGwtMSBhbGlnbi1taWRkbGUgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXItYi0yIGJvcmRlci1ncmF5LTgwMCBob3Zlcjpib3JkZXItcHVycGxlLTUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtOCB3LTggcHItMCBtZDpwci0zXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xOCAyYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNGMwLTEuMS45LTIgMi0yaDE2em0tNC4zNyA5LjFMMjAgMTZ2LTJsLTUuMTItMy45TDIwIDZWNGwtMTAgOEwwIDR2Mmw1LjEyIDQuMUwwIDE0djJsNi4zNy00LjlMMTAgMTRsMy42My0yLjl6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz4gKi99XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtOCB3LTggcHItMCBtZDpwci0zXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6TTcgNnYyYTMgMyAwIDEgMCA2IDBWNmEzIDMgMCAxIDAtNiAwem0tMy42NSA4LjQ0YTggOCAwIDAgMCAxMy4zIDAgMTUuOTQgMTUuOTQgMCAwIDAtMTMuMyAwelwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGItMSBtZDpwYi0wIHRleHQteHMgbWQ6dGV4dC1iYXNlIHRleHQtZ3JheS02MDAgbWQ6dGV4dC1ncmF5LTQwMCBibG9jayBtZDppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIEVsZXZlc1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibXItMyBmbGV4LTFcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMSBtZDpweS0zIHBsLTAgbWQ6cGwtMSBhbGlnbi1taWRkbGUgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXItYi0yIGJvcmRlci1ncmF5LTgwMCBob3Zlcjpib3JkZXItcmVkLTUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC04IHctOCBwci0wIG1kOnByLTNcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgNGMwLTEuMS45LTIgMi0yaDE1YTEgMSAwIDAgMSAxIDF2MUgydjFoMTdhMSAxIDAgMCAxIDEgMXYxMGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY0em0xNi41IDlhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYi0xIG1kOnBiLTAgdGV4dC14cyBtZDp0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMCBtZDp0ZXh0LWdyYXktNDAwIGJsb2NrIG1kOmlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgUGF5bWVudHNcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL3NpZGUtbWVudVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuICBjaGlsZHJlbixcclxuICB0aXRsZSA9IFwiVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZVwiLFxyXG4gIGlzSG9tZSA9IGZhbHNlLFxyXG59KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMCBmb250LXNhbnMgbGVhZGluZy1ub3JtYWwgdHJhY2tpbmctbm9ybWFsIG10LTEyXCI+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPEhlYWRlciBpc0hvbWU9e2lzSG9tZX0gLz5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgPFNpZGVNZW51IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50IGZsZXgtMSBiZy1ncmF5LTEwMCBtdC0xMiBtZDptdC0yIHBiLTI0IG1kOnBiLTVcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICAgey8qIDxGb290ZXIgLz4gKi99XHJcbiAgPC9kaXY+XHJcbik7XHJcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzTG9vc2U7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgU3R5bGlzIGZyb20gJ0BlbW90aW9uL3N0eWxpcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aHlzdWx0YW4vc3R5bGlzLmpzL3RyZWUvbWFzdGVyL3BsdWdpbnMvcnVsZS1zaGVldFxuLy8gaW5saW5lZCB0byBhdm9pZCB1bWQgd3JhcHBlciBhbmQgcGVlckRlcCB3YXJuaW5ncy9pbnN0YWxsaW5nIHN0eWxpc1xuLy8gc2luY2Ugd2UgdXNlIHN0eWxpcyBhZnRlciBjbG9zdXJlIGNvbXBpbGVyXG52YXIgZGVsaW1pdGVyID0gJy8qfCovJztcbnZhciBuZWVkbGUgPSBkZWxpbWl0ZXIgKyAnfSc7XG5cbmZ1bmN0aW9uIHRvU2hlZXQoYmxvY2spIHtcbiAgaWYgKGJsb2NrKSB7XG4gICAgU2hlZXQuY3VycmVudC5pbnNlcnQoYmxvY2sgKyAnfScpO1xuICB9XG59XG5cbnZhciBTaGVldCA9IHtcbiAgY3VycmVudDogbnVsbFxufTtcbnZhciBydWxlU2hlZXQgPSBmdW5jdGlvbiBydWxlU2hlZXQoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzLCBwYXJlbnRzLCBsaW5lLCBjb2x1bW4sIGxlbmd0aCwgbnMsIGRlcHRoLCBhdCkge1xuICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAvLyBwcm9wZXJ0eVxuICAgIGNhc2UgMTpcbiAgICAgIHtcbiAgICAgICAgc3dpdGNoIChjb250ZW50LmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBAaW1wb3J0XG4gICAgICAgICAgICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KGNvbnRlbnQgKyAnOycpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gY2hhcmNvZGUgZm9yIGxcblxuICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBjaGFyY29kZSBmb3IgYlxuICAgICAgICAgICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgyKSA9PT0gOTgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIC8vIHNlbGVjdG9yXG5cbiAgICBjYXNlIDI6XG4gICAgICB7XG4gICAgICAgIGlmIChucyA9PT0gMCkgcmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIC8vIGF0LXJ1bGVcblxuICAgIGNhc2UgMzpcbiAgICAgIHtcbiAgICAgICAgc3dpdGNoIChucykge1xuICAgICAgICAgIC8vIEBmb250LWZhY2UsIEBwYWdlXG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFNoZWV0LmN1cnJlbnQuaW5zZXJ0KHNlbGVjdG9yc1swXSArIGNvbnRlbnQpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXR1cm4gY29udGVudCArIChhdCA9PT0gMCA/IGRlbGltaXRlciA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgY2FzZSAtMjpcbiAgICAgIHtcbiAgICAgICAgY29udGVudC5zcGxpdChuZWVkbGUpLmZvckVhY2godG9TaGVldCk7XG4gICAgICB9XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCkgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXkgfHwgJ2Nzcyc7XG4gIHZhciBzdHlsaXNPcHRpb25zO1xuXG4gIGlmIChvcHRpb25zLnByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3R5bGlzT3B0aW9ucyA9IHtcbiAgICAgIHByZWZpeDogb3B0aW9ucy5wcmVmaXhcbiAgICB9O1xuICB9XG5cbiAgdmFyIHN0eWxpcyA9IG5ldyBTdHlsaXMoc3R5bGlzT3B0aW9ucyk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGNvbnRhaW5lcjtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uLVwiICsga2V5ICsgXCJdXCIpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb24tXCIgKyBrZXkpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGF0dHJpYi5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGluc2VydGVkW2lkXSA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBfaW5zZXJ0O1xuXG4gIHtcbiAgICBzdHlsaXMudXNlKG9wdGlvbnMuc3R5bGlzUGx1Z2lucykocnVsZVNoZWV0KTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgdmFyIG5hbWUgPSBzZXJpYWxpemVkLm5hbWU7XG4gICAgICBTaGVldC5jdXJyZW50ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1hcCA9IHNlcmlhbGl6ZWQubWFwO1xuICAgICAgICBTaGVldC5jdXJyZW50ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgbWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN0eWxpcyhzZWxlY3Rvciwgc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbbmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmNzM3MWE0Y2Q3ZTYwMDllZjYxZDBhXG4gICAgdmFyIGNvbW1lbnRTdGFydCA9IC9cXC9cXCovZztcbiAgICB2YXIgY29tbWVudEVuZCA9IC9cXCpcXC8vZztcbiAgICBzdHlsaXMudXNlKGZ1bmN0aW9uIChjb250ZXh0LCBjb250ZW50KSB7XG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aGlsZSAoY29tbWVudFN0YXJ0LnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgY29tbWVudEVuZC5sYXN0SW5kZXggPSBjb21tZW50U3RhcnQubGFzdEluZGV4O1xuXG4gICAgICAgICAgICAgIGlmIChjb21tZW50RW5kLnRlc3QoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICBjb21tZW50U3RhcnQubGFzdEluZGV4ID0gY29tbWVudEVuZC5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgc3R5bGVzIGhhdmUgYW4gdW50ZXJtaW5hdGVkIGNvbW1lbnQgKFwiLypcIiB3aXRob3V0IGNvcnJlc3BvbmRpbmcgXCIqL1wiKS4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tbWVudFN0YXJ0Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3R5bGlzLnVzZShmdW5jdGlvbiAoY29udGV4dCwgY29udGVudCwgc2VsZWN0b3JzKSB7XG4gICAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xuICAgICAgICAgICAgdmFyIHVuc2FmZVBzZXVkb0NsYXNzZXMgPSBjb250ZW50Lm1hdGNoKC8oOmZpcnN0fDpudGh8Om50aC1sYXN0KS1jaGlsZC9nKTtcblxuICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzZXMgJiYgY2FjaGUuY29tcGF0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHVuc2FmZVBzZXVkb0NsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAodW5zYWZlUHNldWRvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWdub3JlUmVnRXhwID0gbmV3IFJlZ0V4cCh1bnNhZmVQc2V1ZG9DbGFzcyArIFwiLipcXFxcL1xcXFwqIFwiICsgZmxhZyArIFwiIFxcXFwqXFxcXC9cIik7XG4gICAgICAgICAgICAgICAgdmFyIGlnbm9yZSA9IGlnbm9yZVJlZ0V4cC50ZXN0KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVuc2FmZVBzZXVkb0NsYXNzICYmICFpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHNldWRvIGNsYXNzIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzICsgXCJcXFwiIGlzIHBvdGVudGlhbGx5IHVuc2FmZSB3aGVuIGRvaW5nIHNlcnZlci1zaWRlIHJlbmRlcmluZy4gVHJ5IGNoYW5naW5nIGl0IHRvIFxcXCJcIiArIHVuc2FmZVBzZXVkb0NsYXNzLnNwbGl0KCctY2hpbGQnKVswXSArIFwiLW9mLXR5cGVcXFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgY2FjaGUgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHlcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhY2hlO1xuIiwiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCc7XG5pbXBvcnQgY3NzIGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCggLy8gd2UncmUgZG9pbmcgdGhpcyB0byBhdm9pZCBwcmVjb25zdHJ1Y3QncyBkZWFkIGNvZGUgZWxpbWluYXRpb24gaW4gdGhpcyBvbmUgY2FzZVxuLy8gYmVjYXVzZSB0aGlzIG1vZHVsZSBpcyBwcmltYXJpbHkgaW50ZW5kZWQgZm9yIHRoZSBicm93c2VyIGFuZCBub2RlXG4vLyBidXQgaXQncyBhbHNvIHJlcXVpcmVkIGluIHJlYWN0IG5hdGl2ZSBhbmQgc2ltaWxhciBlbnZpcm9ubWVudHMgc29tZXRpbWVzXG4vLyBhbmQgd2UgY291bGQgaGF2ZSBhIHNwZWNpYWwgYnVpbGQganVzdCBmb3IgdGhhdFxuLy8gYnV0IHRoaXMgaXMgbXVjaCBlYXNpZXIgYW5kIHRoZSBuYXRpdmUgcGFja2FnZXNcbi8vIG1pZ2h0IHVzZSBhIGRpZmZlcmVudCB0aGVtZSBjb250ZXh0IGluIHRoZSBmdXR1cmUgYW55d2F5XG50eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnID8gY3JlYXRlQ2FjaGUoKSA6IG51bGwpO1xudmFyIFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xudmFyIENhY2hlUHJvdmlkZXIgPSBFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyO1xuXG52YXIgd2l0aEVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHdpdGhFbW90aW9uQ2FjaGUoZnVuYykge1xuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChFbW90aW9uQ2FjaGVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY2FjaGUpIHtcbiAgICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgICB9KTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGZvcndhcmRSZWYocmVuZGVyKTtcbn07XG5cbi8vIHRodXMgd2Ugb25seSBuZWVkIHRvIHJlcGxhY2Ugd2hhdCBpcyBhIHZhbGlkIGNoYXJhY3RlciBmb3IgSlMsIGJ1dCBub3QgZm9yIENTU1xuXG52YXIgc2FuaXRpemVJZGVudGlmaWVyID0gZnVuY3Rpb24gc2FuaXRpemVJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIucmVwbGFjZSgvXFwkL2csICctJyk7XG59O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGxhYmVsUHJvcE5hbWUgPSAnX19FTU9USU9OX0xBQkVMX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjYWNoZSwgcHJvcHMsIHRoZW1lLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSB0aGVtZSA9PT0gbnVsbCA/IHByb3BzLmNzcyA6IHByb3BzLmNzcyh0aGVtZSk7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciB0eXBlID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgdmFyIGxhYmVsRnJvbVN0YWNrID0gcHJvcHNbbGFiZWxQcm9wTmFtZV07XG5cbiAgICBpZiAobGFiZWxGcm9tU3RhY2spIHtcbiAgICAgIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3NlcmlhbGl6ZWQsICdsYWJlbDonICsgbGFiZWxGcm9tU3RhY2sgKyAnOyddKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcnVsZXMgPSBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyk7XG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsIGtleSkgJiYga2V5ICE9PSAnY3NzJyAmJiBrZXkgIT09IHR5cGVQcm9wTmFtZSAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCBrZXkgIT09IGxhYmVsUHJvcE5hbWUpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5yZWYgPSByZWY7XG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgdmFyIGVsZSA9IGNyZWF0ZUVsZW1lbnQodHlwZSwgbmV3UHJvcHMpO1xuXG4gIHJldHVybiBlbGU7XG59O1xuXG52YXIgRW1vdGlvbiA9XG4vKiAjX19QVVJFX18gKi9cbndpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSwgcmVmKSB7XG4gIC8vIHVzZSBDb250ZXh0LnJlYWQgZm9yIHRoZSB0aGVtZSB3aGVuIGl0J3Mgc3RhYmxlXG4gIGlmICh0eXBlb2YgcHJvcHMuY3NzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgIHJldHVybiByZW5kZXIoY2FjaGUsIHByb3BzLCB0aGVtZSwgcmVmKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXIoY2FjaGUsIHByb3BzLCBudWxsLCByZWYpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEVtb3Rpb24uZGlzcGxheU5hbWUgPSAnRW1vdGlvbkNzc1Byb3BJbnRlcm5hbCc7XG59IC8vICRGbG93Rml4TWVcblxuXG52YXIganN4ID0gZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gIGlmIChwcm9wcyA9PSBudWxsIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBwcm9wcy5jc3MgPT09ICdzdHJpbmcnICYmIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGEgY3NzIGRlY2xhcmF0aW9uXG4gIHByb3BzLmNzcy5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3RyaW5ncyBhcmUgbm90IGFsbG93ZWQgYXMgY3NzIHByb3AgdmFsdWVzLCBwbGVhc2Ugd3JhcCBpdCBpbiBhIGNzcyB0ZW1wbGF0ZSBsaXRlcmFsIGZyb20gJ0BlbW90aW9uL2NzcycgbGlrZSB0aGlzOiBjc3NgXCIgKyBwcm9wcy5jc3MgKyBcImBcIik7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmIChlcnJvci5zdGFjaykge1xuICAgICAgLy8gY2hyb21lXG4gICAgICB2YXIgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvYXQgKD86T2JqZWN0XFwufClqc3guKlxcblxccythdCAoW0EtWl1bQS1aYS16JF0rKSAvKTtcblxuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAvLyBzYWZhcmkgYW5kIGZpcmVmb3hcbiAgICAgICAgbWF0Y2ggPSBlcnJvci5zdGFjay5tYXRjaCgvLipcXG4oW0EtWl1bQS1aYS16JF0rKUAvKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG5ld1Byb3BzW2xhYmVsUHJvcE5hbWVdID0gc2FuaXRpemVJZGVudGlmaWVyKG1hdGNoWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBuZXdQcm9wcztcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbnZhciB3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgPSBmYWxzZTtcbnZhciBHbG9iYWwgPVxuLyogI19fUFVSRV9fICovXG53aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIXdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCAmJiAoIC8vIGNoZWNrIGZvciBjbGFzc05hbWUgYXMgd2VsbCBzaW5jZSB0aGUgdXNlciBpc1xuICAvLyBwcm9iYWJseSB1c2luZyB0aGUgY3VzdG9tIGNyZWF0ZUVsZW1lbnQgd2hpY2hcbiAgLy8gbWVhbnMgaXQgd2lsbCBiZSB0dXJuZWQgaW50byBhIGNsYXNzTmFtZSBwcm9wXG4gIC8vICRGbG93Rml4TWUgSSBkb24ndCByZWFsbHkgd2FudCB0byBhZGQgaXQgdG8gdGhlIHR5cGUgc2luY2UgaXQgc2hvdWxkbid0IGJlIHVzZWRcbiAgcHJvcHMuY2xhc3NOYW1lIHx8IHByb3BzLmNzcykpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGNzcyBwcm9wIG9uIEdsb2JhbCwgZGlkIHlvdSBtZWFuIHRvIHVzZSB0aGUgc3R5bGVzIHByb3AgaW5zdGVhZD9cIik7XG4gICAgd2FybmVkQWJvdXRDc3NQcm9wRm9yR2xvYmFsID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG5cbiAgaWYgKHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoW3N0eWxlcyh0aGVtZSldKTtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KElubmVyR2xvYmFsLCB7XG4gICAgICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgICAgIGNhY2hlOiBjYWNoZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KElubmVyR2xvYmFsLCB7XG4gICAgc2VyaWFsaXplZDogc2VyaWFsaXplZCxcbiAgICBjYWNoZTogY2FjaGVcbiAgfSk7XG59KTtcblxuLy8gbWFpbnRhaW4gcGxhY2Ugb3ZlciByZXJlbmRlcnMuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcbnZhciBJbm5lckdsb2JhbCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShJbm5lckdsb2JhbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5uZXJHbG9iYWwocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IElubmVyR2xvYmFsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoe1xuICAgICAga2V5OiB0aGlzLnByb3BzLmNhY2hlLmtleSArIFwiLWdsb2JhbFwiLFxuICAgICAgbm9uY2U6IHRoaXMucHJvcHMuY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IHRoaXMucHJvcHMuY2FjaGUuc2hlZXQuY29udGFpbmVyXG4gICAgfSk7IC8vICRGbG93Rml4TWVcblxuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbi1cIiArIHRoaXMucHJvcHMuY2FjaGUua2V5ICsgXCI9XFxcIlwiICsgdGhpcy5wcm9wcy5zZXJpYWxpemVkLm5hbWUgKyBcIlxcXCJdXCIpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2hlZXQudGFncy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNhY2hlLnNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNoZWV0LmJlZm9yZSA9IHRoaXMucHJvcHMuY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICB0aGlzLmluc2VydFN0eWxlcygpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5zZXJpYWxpemVkLm5hbWUgIT09IHRoaXMucHJvcHMuc2VyaWFsaXplZC5uYW1lKSB7XG4gICAgICB0aGlzLmluc2VydFN0eWxlcygpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0U3R5bGVzID0gZnVuY3Rpb24gaW5zZXJ0U3R5bGVzJDEoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyh0aGlzLnByb3BzLmNhY2hlLCB0aGlzLnByb3BzLnNlcmlhbGl6ZWQubmV4dCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMuc2hlZXQudGFnc1t0aGlzLnNoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgdGhpcy5zaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgdGhpcy5zaGVldC5mbHVzaCgpO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuY2FjaGUuaW5zZXJ0KFwiXCIsIHRoaXMucHJvcHMuc2VyaWFsaXplZCwgdGhpcy5zaGVldCwgZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc2hlZXQuZmx1c2goKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIElubmVyR2xvYmFsO1xufShDb21wb25lbnQpO1xuXG52YXIga2V5ZnJhbWVzID0gZnVuY3Rpb24ga2V5ZnJhbWVzKCkge1xuICB2YXIgaW5zZXJ0YWJsZSA9IGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIHZhciBuYW1lID0gXCJhbmltYXRpb24tXCIgKyBpbnNlcnRhYmxlLm5hbWU7IC8vICRGbG93Rml4TWVcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBcIkBrZXlmcmFtZXMgXCIgKyBuYW1lICsgXCJ7XCIgKyBpbnNlcnRhYmxlLnN0eWxlcyArIFwifVwiLFxuICAgIGFuaW06IDEsXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiX0VNT19cIiArIHRoaXMubmFtZSArIFwiX1wiICsgdGhpcy5zdHlsZXMgKyBcIl9FTU9fXCI7XG4gICAgfVxuICB9O1xufTtcblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvbiBjbGFzc25hbWVzKGFyZ3MpIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0FkZCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIGFyZykge1xuICAgICAgICAgICAgICBpZiAoYXJnW2tdICYmIGspIHtcbiAgICAgICAgICAgICAgICB0b0FkZCAmJiAodG9BZGQgKz0gJyAnKTtcbiAgICAgICAgICAgICAgICB0b0FkZCArPSBrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHRvQWRkID0gYXJnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvQWRkKSB7XG4gICAgICBjbHMgJiYgKGNscyArPSAnICcpO1xuICAgICAgY2xzICs9IHRvQWRkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbHM7XG59O1xuXG5mdW5jdGlvbiBtZXJnZShyZWdpc3RlcmVkLCBjc3MsIGNsYXNzTmFtZSkge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIENsYXNzTmFtZXMgPSB3aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY29udGV4dCkge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICAgIGlmIChoYXNSZW5kZXJlZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY29udGV4dC5yZWdpc3RlcmVkKTtcblxuICAgICAge1xuICAgICAgICBpbnNlcnRTdHlsZXMoY29udGV4dCwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGV4dC5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgICB9O1xuXG4gICAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2UoY29udGV4dC5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICAgIH07XG5cbiAgICB2YXIgY29udGVudCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgY3g6IGN4LFxuICAgICAgdGhlbWU6IHRoZW1lXG4gICAgfTtcbiAgICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gICAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGVsZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciwgQ2xhc3NOYW1lcywgR2xvYmFsLCBUaGVtZUNvbnRleHQsIGpzeCwga2V5ZnJhbWVzLCB3aXRoRW1vdGlvbkNhY2hlIH07XG4iLCJpbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuXG5mdW5jdGlvbiBjc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc2VyaWFsaXplU3R5bGVzKGFyZ3MpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXVybXVyMjtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjYWxjfGNvdW50ZXJzP3x1cmwpXFwoLztcbiAgdmFyIGNvbnRlbnRWYWx1ZXMgPSBbJ25vcm1hbCcsICdub25lJywgJ2NvdW50ZXInLCAnb3Blbi1xdW90ZScsICdjbG9zZS1xdW90ZScsICduby1vcGVuLXF1b3RlJywgJ25vLWNsb3NlLXF1b3RlJywgJ2luaXRpYWwnLCAnaW5oZXJpdCcsICd1bnNldCddO1xuICB2YXIgb2xkUHJvY2Vzc1N0eWxlVmFsdWUgPSBwcm9jZXNzU3R5bGVWYWx1ZTtcbiAgdmFyIG1zUGF0dGVybiA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcbiAgdmFyIGh5cGhlbmF0ZWRDYWNoZSA9IHt9O1xuXG4gIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY29udGVudFZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEgJiYgIWNvbnRlbnRWYWx1ZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpIHx8IHZhbHVlLmNoYXJBdCgwKSAhPT0gJ1wiJyAmJiB2YWx1ZS5jaGFyQXQoMCkgIT09IFwiJ1wiKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IHNlZW0gdG8gYmUgdXNpbmcgYSB2YWx1ZSBmb3IgJ2NvbnRlbnQnIHdpdGhvdXQgcXVvdGVzLCB0cnkgcmVwbGFjaW5nIGl0IHdpdGggYGNvbnRlbnQ6ICdcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIidgXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9jZXNzZWQgPSBvbGRQcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKTtcblxuICAgIGlmIChwcm9jZXNzZWQgIT09ICcnICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYga2V5LmluZGV4T2YoJy0nKSAhPT0gLTEgJiYgaHlwaGVuYXRlZENhY2hlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHlwaGVuYXRlZENhY2hlW2tleV0gPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihcIlVzaW5nIGtlYmFiLWNhc2UgZm9yIGNzcyBwcm9wZXJ0aWVzIGluIG9iamVjdHMgaXMgbm90IHN1cHBvcnRlZC4gRGlkIHlvdSBtZWFuIFwiICsga2V5LnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoc3RyLCBfY2hhcikge1xuICAgICAgICByZXR1cm4gX2NoYXIudG9VcHBlckNhc2UoKTtcbiAgICAgIH0pICsgXCI/XCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH07XG59XG5cbnZhciBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyA9IHRydWU7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24sIGNvdWxkQmVTZWxlY3RvckludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnRlcnBvbGF0aW9uLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGludGVycG9sYXRpb24udG9TdHJpbmcoKSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHNlbGVjdG9ycyBjYW4gb25seSBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYmFiZWwtcGx1Z2luLWVtb3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIGlmIChpbnRlcnBvbGF0aW9uLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBpbnRlcnBvbGF0aW9uLm5hbWUsXG4gICAgICAgICAgICBzdHlsZXM6IGludGVycG9sYXRpb24uc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGlvbi5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGludGVycG9sYXRpb24ubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBpbnRlcnBvbGF0aW9uLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgaW50ZXJwb2xhdGlvbi5tYXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3R5bGVzICs9IGludGVycG9sYXRpb24ubWFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0LCBjb3VsZEJlU2VsZWN0b3JJbnRlcnBvbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRnVuY3Rpb25zIHRoYXQgYXJlIGludGVycG9sYXRlZCBpbiBjc3MgY2FsbHMgd2lsbCBiZSBzdHJpbmdpZmllZC5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIGhhdmUgYSBjc3MgY2FsbCBiYXNlZCBvbiBwcm9wcywgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY3NzIGNhbGwgbGlrZSB0aGlzXFxuJyArICdsZXQgZHluYW1pY1N0eWxlID0gKHByb3BzKSA9PiBjc3NgY29sb3I6ICR7cHJvcHMuY29sb3J9YFxcbicgKyAnSXQgY2FuIGJlIGNhbGxlZCBkaXJlY3RseSB3aXRoIHByb3BzIG9yIGludGVycG9sYXRlZCBpbiBhIHN0eWxlZCBjYWxsIGxpa2UgdGhpc1xcbicgKyBcImxldCBTb21lQ29tcG9uZW50ID0gc3R5bGVkKCdkaXYnKWAke2R5bmFtaWNTdHlsZX1gXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICAgICAgdmFyIHJlcGxhY2VkID0gaW50ZXJwb2xhdGlvbi5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgIHZhciBmYWtlVmFyTmFtZSA9IFwiYW5pbWF0aW9uXCIgKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICBtYXRjaGVkLnB1c2goXCJjb25zdCBcIiArIGZha2VWYXJOYW1lICsgXCIgPSBrZXlmcmFtZXNgXCIgKyBwMi5yZXBsYWNlKC9eQGtleWZyYW1lcyBhbmltYXRpb24tXFx3Ky8sICcnKSArIFwiYFwiKTtcbiAgICAgICAgICByZXR1cm4gXCIke1wiICsgZmFrZVZhck5hbWUgKyBcIn1cIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignYGtleWZyYW1lc2Agb3V0cHV0IGdvdCBpbnRlcnBvbGF0ZWQgaW50byBwbGFpbiBzdHJpbmcsIHBsZWFzZSB3cmFwIGl0IHdpdGggYGNzc2AuXFxuXFxuJyArICdJbnN0ZWFkIG9mIGRvaW5nIHRoaXM6XFxuXFxuJyArIFtdLmNvbmNhdChtYXRjaGVkLCBbXCJgXCIgKyByZXBsYWNlZCArIFwiYFwiXSkuam9pbignXFxuJykgKyAnXFxuXFxuWW91IHNob3VsZCB3cmFwIGl0IHdpdGggYGNzc2AgbGlrZSB0aGlzOlxcblxcbicgKyAoXCJjc3NgXCIgKyByZXBsYWNlZCArIFwiYFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBpbnRlcnBvbGF0aW9uO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbaW50ZXJwb2xhdGlvbl07XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiAmJiBzaG91bGRXYXJuQWJvdXRJbnRlcnBvbGF0aW5nQ2xhc3NOYW1lRnJvbUNzcyAmJiBjYWNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCBpcyBub3QgcmVjb21tZW5kZWQgYW5kIHdpbGwgY2F1c2UgcHJvYmxlbXMgd2l0aCBjb21wb3NpdGlvbi5cXG4nICsgJ0ludGVycG9sYXRpbmcgYSBjbGFzc05hbWUgZnJvbSBjc3NgYCB3aWxsIGJlIGNvbXBsZXRlbHkgdW5zdXBwb3J0ZWQgaW4gYSBmdXR1cmUgbWFqb3IgdmVyc2lvbiBvZiBFbW90aW9uJyk7XG4gICAgc2hvdWxkV2FybkFib3V0SW50ZXJwb2xhdGluZ0NsYXNzTmFtZUZyb21Dc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZWQgIT09IHVuZGVmaW5lZCAmJiAhY291bGRCZVNlbGVjdG9ySW50ZXJwb2xhdGlvbiA/IGNhY2hlZCA6IGludGVycG9sYXRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBiYWJlbC1wbHVnaW4tZW1vdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoX2tleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKF9rZXksIHZhbHVlW19pXSkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGludGVycG9sYXRlZCA9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHZhbHVlLCBmYWxzZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKjsvZztcbnZhciBzb3VyY2VNYXBQYXR0ZXJuO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBzb3VyY2VNYXBQYXR0ZXJuID0gL1xcL1xcKiNcXHNzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb25cXC9qc29uO1xcUytcXHMrXFwqXFwvLztcbn0gLy8gdGhpcyBpcyB0aGUgY3Vyc29yIGZvciBrZXlmcmFtZXNcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbnZhciBzZXJpYWxpemVTdHlsZXMgPSBmdW5jdGlvbiBzZXJpYWxpemVTdHlsZXMoYXJncywgcmVnaXN0ZXJlZCwgbWVyZ2VkUHJvcHMpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmdzWzBdID09PSAnb2JqZWN0JyAmJiBhcmdzWzBdICE9PSBudWxsICYmIGFyZ3NbMF0uc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYXJnc1swXTtcbiAgfVxuXG4gIHZhciBzdHJpbmdNb2RlID0gdHJ1ZTtcbiAgdmFyIHN0eWxlcyA9ICcnO1xuICBjdXJzb3IgPSB1bmRlZmluZWQ7XG4gIHZhciBzdHJpbmdzID0gYXJnc1swXTtcblxuICBpZiAoc3RyaW5ncyA9PSBudWxsIHx8IHN0cmluZ3MucmF3ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpbmdNb2RlID0gZmFsc2U7XG4gICAgc3R5bGVzICs9IGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIHN0cmluZ3MsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgIH1cblxuICAgIHN0eWxlcyArPSBzdHJpbmdzWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldLCBzdHlsZXMuY2hhckNvZGVBdChzdHlsZXMubGVuZ3RoIC0gMSkgPT09IDQ2KTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBzdHJpbmdzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTExFR0FMX0VTQ0FQRV9TRVFVRU5DRV9FUlJPUik7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyArPSBzdHJpbmdzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzb3VyY2VNYXA7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMucmVwbGFjZShzb3VyY2VNYXBQYXR0ZXJuLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHNvdXJjZU1hcCA9IG1hdGNoO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICB9IC8vIHVzaW5nIGEgZ2xvYmFsIHJlZ2V4IHdpdGggLmV4ZWMgaXMgc3RhdGVmdWwgc28gbGFzdEluZGV4IGhhcyB0byBiZSByZXNldCBlYWNoIHRpbWVcblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIC8vICRGbG93Rml4TWUgd2Uga25vdyBpdCdzIG5vdCBudWxsXG4gICAgbWF0Y2hbMV07XG4gIH1cblxuICB2YXIgbmFtZSA9IGhhc2hTdHJpbmcoc3R5bGVzKSArIGlkZW50aWZpZXJOYW1lO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gJEZsb3dGaXhNZSBTZXJpYWxpemVkU3R5bGVzIHR5cGUgZG9lc24ndCBoYXZlIHRvU3RyaW5nIHByb3BlcnR5IChhbmQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgaXQpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgIG1hcDogc291cmNlTWFwLFxuICAgICAgbmV4dDogY3Vyc29yLFxuICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICBuZXh0OiBjdXJzb3JcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cbi8vICRGbG93Rml4TWVcbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHJldHVybiB0YWcuc2hlZXQ7XG4gIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICByZXR1cm4gZG9jdW1lbnQuc3R5bGVTaGVldHNbaV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5iZWZvcmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHZhciBfdGFnID0gY3JlYXRlU3R5bGVFbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAodGhpcy50YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBiZWZvcmUgPSB0aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShfdGFnLCBiZWZvcmUpO1xuICAgICAgdGhpcy50YWdzLnB1c2goX3RhZyk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyBhIHJlYWxseSBob3QgcGF0aFxuICAgICAgICAvLyB3ZSBjaGVjayB0aGUgc2Vjb25kIGNoYXJhY3RlciBmaXJzdCBiZWNhdXNlIGhhdmluZyBcImlcIlxuICAgICAgICAvLyBhcyB0aGUgc2Vjb25kIGNoYXJhY3RlciB3aWxsIGhhcHBlbiBsZXNzIG9mdGVuIHRoYW5cbiAgICAgICAgLy8gaGF2aW5nIFwiQFwiIGFzIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgxKSA9PT0gMTA1ICYmIHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQ7IC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIC8vIHdlIG5lZWQgdG8gaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYmVmb3JlIGFueXRoaW5nIGVsc2VcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZXJlIHdpbGwgYmUgYW4gZXJyb3JcbiAgICAgICAgLy8gdGVjaG5pY2FsbHkgdGhpcyBtZWFucyB0aGF0IHRoZSBAaW1wb3J0IHJ1bGVzIHdpbGxcbiAgICAgICAgLy8gX3VzdWFsbHlfKG5vdCBhbHdheXMgc2luY2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgc3R5bGUgdGFncylcbiAgICAgICAgLy8gYmUgdGhlIGZpcnN0IG9uZXMgaW4gcHJvZCBhbmQgZ2VuZXJhbGx5IGxhdGVyIGluIGRldlxuICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCByZWFsbHkgbWF0dGVyIGluIHRoZSByZWFsIHdvcmxkIHRob3VnaFxuICAgICAgICAvLyBAaW1wb3J0IGlzIGdlbmVyYWxseSBvbmx5IHVzZWQgZm9yIGZvbnQgZmFjZXMgZnJvbSBnb29nbGUgZm9udHMgYW5kIGV0Yy5cbiAgICAgICAgLy8gc28gd2hpbGUgdGhpcyBjb3VsZCBiZSB0ZWNobmljYWxseSBjb3JyZWN0IHRoZW4gaXQgd291bGQgYmUgc2xvd2VyIGFuZCBsYXJnZXJcbiAgICAgICAgLy8gZm9yIGEgdGlueSBiaXQgb2YgY29ycmVjdG5lc3MgdGhhdCB3b24ndCBtYXR0ZXIgaW4gdGhlIHJlYWwgd29ybGRcbiAgICAgICAgaXNJbXBvcnRSdWxlID8gMCA6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSBpbnNlcnRpbmcgdGhlIGZvbGxvd2luZyBydWxlOiBcXFwiXCIgKyBydWxlICsgXCJcXFwiXCIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgcmV0dXJuIHRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwidmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWVzKSB7XG4gIHZhciByYXdDbGFzc05hbWUgPSAnJztcbiAgY2xhc3NOYW1lcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmIChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVnaXN0ZXJlZFN0eWxlcy5wdXNoKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSAmJiBjYWNoZS5jb21wYXQgIT09IHVuZGVmaW5lZCkgJiYgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPSBzZXJpYWxpemVkLnN0eWxlcztcbiAgfVxuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICB2YXIgbWF5YmVTdHlsZXMgPSBjYWNoZS5pbnNlcnQoXCIuXCIgKyBjbGFzc05hbWUsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMgfTtcbiIsInZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIHdlYWtNZW1vaXplKGZ1bmMpIHtcbiAgLy8gJEZsb3dGaXhNZSBmbG93IGRvZXNuJ3QgaW5jbHVkZSBhbGwgbm9uLXByaW1pdGl2ZSB0eXBlcyBhcyBhbGxvd2VkIGZvciB3ZWFrbWFwc1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZS5oYXMoYXJnKSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGNhY2hlLmdldChhcmcpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBmdW5jKGFyZyk7XG4gICAgY2FjaGUuc2V0KGFyZywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2Vha01lbW9pemU7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2J1bGxldGluLWVkaXRcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJEOlxcXFx3b3Jrc3BhY2VcXFxccGxheWdyb3VuZFxcXFxSRUFDVFxcXFxidWxsZXRpbi1hcHBcXFxccGFnZXNcXFxcYnVsbGV0aW4tZWRpdC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKSB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhTaWRlRWZmZWN0IGZyb20gJy4vc2lkZS1lZmZlY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuaW1wb3J0IHsgSGVhZE1hbmFnZXJDb250ZXh0IH0gZnJvbSAnLi9oZWFkLW1hbmFnZXItY29udGV4dCdcbmltcG9ydCB7IGlzSW5BbXBNb2RlIH0gZnJvbSAnLi9hbXAnXG5cbnR5cGUgV2l0aEluQW1wTW9kZSA9IHtcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlID0gZmFsc2UpIHtcbiAgY29uc3QgaGVhZCA9IFs8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPl1cbiAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICBoZWFkLnB1c2goPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aFwiIC8+KVxuICB9XG4gIHJldHVybiBoZWFkXG59XG5cbmZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQoXG4gIGxpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbik6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB7XG4gIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgaWYgKGNoaWxkLnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKFxuICAgICAgICAoXG4gICAgICAgICAgZnJhZ21lbnRMaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgICAgICAgZnJhZ21lbnRDaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuICAgICAgICApOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdudW1iZXInXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpXG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKVxuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZClcbn1cblxuY29uc3QgTUVUQVRZUEVTID0gWyduYW1lJywgJ2h0dHBFcXVpdicsICdjaGFyU2V0JywgJ2l0ZW1Qcm9wJ11cblxuLypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovXG5mdW5jdGlvbiB1bmlxdWUoKSB7XG4gIGNvbnN0IGtleXMgPSBuZXcgU2V0KClcbiAgY29uc3QgdGFncyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YUNhdGVnb3JpZXM6IHsgW21ldGF0eXBlOiBzdHJpbmddOiBTZXQ8c3RyaW5nPiB9ID0ge31cblxuICByZXR1cm4gKGg6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgbGV0IHVuaXF1ZSA9IHRydWVcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICB1bmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgdW5pcXVlID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21ldGEnOlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV1cbiAgICAgICAgICBpZiAoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKSBjb250aW51ZVxuXG4gICAgICAgICAgaWYgKG1ldGF0eXBlID09PSAnY2hhclNldCcpIHtcbiAgICAgICAgICAgIGlmIChtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSkge1xuICAgICAgICAgICAgICB1bmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgdW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXF1ZVxuICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoXG4gIGhlYWRFbGVtZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBwcm9wczogV2l0aEluQW1wTW9kZVxuKSB7XG4gIHJldHVybiBoZWFkRWxlbWVudHNcbiAgICAucmVkdWNlKFxuICAgICAgKGxpc3Q6IFJlYWN0LlJlYWN0Q2hpbGRbXSwgaGVhZEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KFxuICAgICAgICAgIGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gICAgLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LCBbXSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKVxuICAgIC5maWx0ZXIodW5pcXVlKCkpXG4gICAgLnJldmVyc2UoKVxuICAgIC5tYXAoKGM6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGMua2V5IHx8IGlcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG5jb25zdCBFZmZlY3QgPSB3aXRoU2lkZUVmZmVjdCgpXG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxBbXBTdGF0ZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KGFtcFN0YXRlKSA9PiAoXG4gICAgICAgIDxIZWFkTWFuYWdlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgeyh1cGRhdGVIZWFkKSA9PiAoXG4gICAgICAgICAgICA8RWZmZWN0XG4gICAgICAgICAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgICAgICAgICBoYW5kbGVTdGF0ZUNoYW5nZT17dXBkYXRlSGVhZH1cbiAgICAgICAgICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvRWZmZWN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvSGVhZE1hbmFnZXJDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgKX1cbiAgICA8L0FtcFN0YXRlQ29udGV4dC5Db25zdW1lcj5cbiAgKVxufVxuXG5IZWFkLnJld2luZCA9IEVmZmVjdC5yZXdpbmRcblxuZXhwb3J0IGRlZmF1bHQgSGVhZFxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBtb3VudGVkSW5zdGFuY2VzOiBTZXQ8YW55PiA9IG5ldyBTZXQoKVxuICBsZXQgc3RhdGU6IFN0YXRlXG5cbiAgZnVuY3Rpb24gZW1pdENoYW5nZShjb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+KSB7XG4gICAgc3RhdGUgPSBjb21wb25lbnQucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICBbLi4ubW91bnRlZEluc3RhbmNlc10sXG4gICAgICBjb21wb25lbnQucHJvcHNcbiAgICApXG4gICAgaWYgKGNvbXBvbmVudC5wcm9wcy5oYW5kbGVTdGF0ZUNoYW5nZSkge1xuICAgICAgY29tcG9uZW50LnByb3BzLmhhbmRsZVN0YXRlQ2hhbmdlKHN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgICAvLyBVc2VkIHdoZW4gc2VydmVyIHJlbmRlcmluZ1xuICAgIHN0YXRpYyByZXdpbmQoKSB7XG4gICAgICBjb25zdCByZWNvcmRlZFN0YXRlID0gc3RhdGVcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkXG4gICAgICBtb3VudGVkSW5zdGFuY2VzLmNsZWFyKClcbiAgICAgIHJldHVybiByZWNvcmRlZFN0YXRlXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgICAgZW1pdENoYW5nZSh0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICBlbWl0Q2hhbmdlKHRoaXMpXG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIGVtaXRDaGFuZ2UodGhpcylcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBtb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgICAgZW1pdENoYW5nZSh0aGlzKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKTsiLCJpbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSA9PSBudWxsO1xuXG52YXIgaXNBcnJheSA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG5cbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxudmFyIGlzT2JqZWN0ID0gKHZhbHVlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdFR5cGUodmFsdWUpO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcblxuY29uc3QgVkFMSURBVElPTl9NT0RFID0ge1xyXG4gICAgb25CbHVyOiAnb25CbHVyJyxcclxuICAgIG9uQ2hhbmdlOiAnb25DaGFuZ2UnLFxyXG4gICAgb25TdWJtaXQ6ICdvblN1Ym1pdCcsXHJcbn07XHJcbmNvbnN0IFZBTFVFID0gJ3ZhbHVlJztcclxuY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IEVWRU5UUyA9IHtcclxuICAgIEJMVVI6ICdibHVyJyxcclxuICAgIENIQU5HRTogJ2NoYW5nZScsXHJcbiAgICBJTlBVVDogJ2lucHV0JyxcclxufTtcclxuY29uc3QgU0VMRUNUID0gJ3NlbGVjdCc7XHJcbmNvbnN0IElOUFVUX1ZBTElEQVRJT05fUlVMRVMgPSB7XHJcbiAgICBtYXg6ICdtYXgnLFxyXG4gICAgbWluOiAnbWluJyxcclxuICAgIG1heExlbmd0aDogJ21heExlbmd0aCcsXHJcbiAgICBtaW5MZW5ndGg6ICdtaW5MZW5ndGgnLFxyXG4gICAgcGF0dGVybjogJ3BhdHRlcm4nLFxyXG4gICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICB2YWxpZGF0ZTogJ3ZhbGlkYXRlJyxcclxufTtcclxuY29uc3QgUkVHRVhfSVNfREVFUF9QUk9QID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLztcclxuY29uc3QgUkVHRVhfSVNfUExBSU5fUFJPUCA9IC9eXFx3KiQvO1xyXG5jb25zdCBSRUdFWF9QUk9QX05BTUUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XHJcbmNvbnN0IFJFR0VYX0VTQ0FQRV9DSEFSID0gL1xcXFwoXFxcXCk/L2c7XHJcbmNvbnN0IFJFR0VYX0FSUkFZX0ZJRUxEX0lOREVYID0gL1tcXGQrXS9nO1xuXG5mdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVycyh7IGZpZWxkOiB7IHJlZiB9LCBoYW5kbGVDaGFuZ2UsIGlzUmFkaW9PckNoZWNrYm94LCB9KSB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKGlzUmFkaW9PckNoZWNrYm94ID8gRVZFTlRTLkNIQU5HRSA6IEVWRU5UUy5JTlBVVCwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgIH1cclxufVxuXG52YXIgaXNLZXkgPSAodmFsdWUpID0+ICFpc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgKFJFR0VYX0lTX1BMQUlOX1BST1AudGVzdCh2YWx1ZSkgfHwgIVJFR0VYX0lTX0RFRVBfUFJPUC50ZXN0KHZhbHVlKSk7XG5cbnZhciBzdHJpbmdUb1BhdGggPSAoc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIHN0cmluZy5yZXBsYWNlKFJFR0VYX1BST1BfTkFNRSwgKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKFJFR0VYX0VTQ0FQRV9DSEFSLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IHRlbXBQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0ZW1wUGF0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0ZW1wUGF0aFtpbmRleF07XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzQXJyYXkob2JqVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYmpWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogIWlzTmFOKCt0ZW1wUGF0aFtpbmRleCArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdFtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbnZhciB0cmFuc2Zvcm1Ub05lc3RPYmplY3QgPSAoZGF0YSkgPT4gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChwcmV2aW91cywgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICBpZiAoIWlzS2V5KGtleSkpIHtcclxuICAgICAgICBzZXQocHJldmlvdXMsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBwcmV2aW91cztcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzKSwgeyBba2V5XTogdmFsdWUgfSk7XHJcbn0sIHt9KTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGhcclxuICAgICAgICAuc3BsaXQoL1ssW1xcXS5dKz8vKVxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSksIG9iaik7XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQocmVzdWx0KSB8fCByZXN1bHQgPT09IG9ialxyXG4gICAgICAgID8gaXNVbmRlZmluZWQob2JqW3BhdGhdKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICA6IG9ialtwYXRoXVxyXG4gICAgICAgIDogcmVzdWx0O1xyXG59O1xuXG52YXIgZm9jdXNPbkVycm9yRmllbGQgPSAoZmllbGRzLCBmaWVsZEVycm9ycykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGdldChmaWVsZEVycm9ycywga2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZWYuZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZWYuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5vcHRpb25zWzBdLnJlZi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSAocmVmLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSkgPT4ge1xyXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQocmVmKSAmJiByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5JTlBVVCwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5DSEFOR0UsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKTtcclxuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgfVxyXG59O1xuXG52YXIgaXNSYWRpb0lucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJztcblxudmFyIGlzQ2hlY2tCb3hJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCc7XG5cbmZ1bmN0aW9uIGlzRGV0YWNoZWQoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRGV0YWNoZWQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxufVxuXG52YXIgaXNFbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBzdHJpbmdUb1BhdGgodmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIG9iamVjdCA9IGlzVW5kZWZpbmVkKG9iamVjdCkgPyBpbmRleCsrIDogb2JqZWN0W3VwZGF0ZVBhdGhbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09IGxlbmd0aCA/IG9iamVjdCA6IHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgbGV0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICAgIGlmIChzdGFydCA8IDApIHtcclxuICAgICAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiBsZW5ndGggKyBzdGFydDtcclxuICAgIH1cclxuICAgIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcclxuICAgIGlmIChlbmQgPCAwKSB7XHJcbiAgICAgICAgZW5kICs9IGxlbmd0aDtcclxuICAgIH1cclxuICAgIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6IGVuZCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBwYXJlbnQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCBiYXNlU2xpY2UocGF0aCwgMCwgLTEpKTtcclxufVxyXG5mdW5jdGlvbiBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGNoaWxkT2JqZWN0ID0gcGFyZW50KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCByZXN1bHQgPSAhKGNoaWxkT2JqZWN0ICE9IG51bGwpIHx8IGRlbGV0ZSBjaGlsZE9iamVjdFtrZXldO1xyXG4gICAgbGV0IHByZXZpb3VzT2JqUmVmID0gdW5kZWZpbmVkO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBvYmplY3RSZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtKGsgKyAxKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzTGVuZ3RoID0gY3VycmVudFBhdGhzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGsgPiAwKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGN1cnJlbnRQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgIG9iamVjdFJlZiA9IG9iamVjdFJlZiA/IG9iamVjdFJlZltpdGVtXSA6IG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoc0xlbmd0aCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoaXNPYmplY3Qob2JqZWN0UmVmKSAmJiBpc0VtcHR5T2JqZWN0KG9iamVjdFJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGlzQXJyYXkob2JqZWN0UmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhb2JqZWN0UmVmLmZpbHRlcigoZGF0YSkgPT4gaXNPYmplY3QoZGF0YSkgJiYgIWlzRW1wdHlPYmplY3QoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID8gZGVsZXRlIHByZXZpb3VzT2JqUmVmW2l0ZW1dIDogZGVsZXRlIG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdFJlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHVuc2V0KG9iamVjdCwgcGF0aHMpIHtcclxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgICBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5jb25zdCBpc1NhbWVSZWYgPSAoZmllbGRWYWx1ZSwgcmVmKSA9PiBmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUucmVmID09PSByZWY7XHJcbmZ1bmN0aW9uIGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHMsIGhhbmRsZUNoYW5nZSwgZmllbGQsIGZvcmNlRGVsZXRlKSB7XHJcbiAgICBjb25zdCB7IHJlZiwgcmVmOiB7IG5hbWUsIHR5cGUgfSwgbXV0YXRpb25XYXRjaGVyLCB9ID0gZmllbGQ7XHJcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGRzW25hbWVdO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkc1tuYW1lXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoKGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpKSAmJiBmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSBmaWVsZFZhbHVlO1xyXG4gICAgICAgIGlmIChpc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBtdXRhdGlvbldhdGNoZXIgfSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICgocmVmICYmIGlzRGV0YWNoZWQocmVmKSAmJiBpc1NhbWVSZWYob3B0aW9uLCByZWYpKSB8fCBmb3JjZURlbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHJlZiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb25XYXRjaGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uV2F0Y2hlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KG9wdGlvbnMsIFtgWyR7aW5kZXh9XWBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmICFvcHRpb25zLmZpbHRlcihCb29sZWFuKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGlzRGV0YWNoZWQocmVmKSAmJiBpc1NhbWVSZWYoZmllbGRWYWx1ZSwgcmVmKSkgfHwgZm9yY2VEZWxldGUpIHtcclxuICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhyZWYsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uV2F0Y2hlcikge1xyXG4gICAgICAgICAgICBtdXRhdGlvbldhdGNoZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgZmllbGRzW25hbWVdO1xyXG4gICAgfVxyXG59XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiAnJyxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnJlZi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxudmFyIGdldE11bHRpcGxlU2VsZWN0VmFsdWUgPSAob3B0aW9ucykgPT4gWy4uLm9wdGlvbnNdXHJcbiAgICAuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKVxyXG4gICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzTXVsdGlwbGVTZWxlY3QgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSBgJHtTRUxFQ1R9LW11bHRpcGxlYDtcblxudmFyIGlzRW1wdHlTdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlID09PSAnJztcblxuY29uc3QgZGVmYXVsdFJlc3VsdCA9IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG59O1xyXG5jb25zdCB2YWxpZFJlc3VsdCA9IHsgdmFsdWU6IHRydWUsIGlzVmFsaWQ6IHRydWUgfTtcclxudmFyIGdldENoZWNrYm94VmFsdWUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkob3B0aW9ucykpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgIC5tYXAoKHsgcmVmOiB7IHZhbHVlIH0gfSkgPT4gdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWVzLCBpc1ZhbGlkOiAhIXZhbHVlcy5sZW5ndGggfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBjaGVja2VkLCB2YWx1ZSwgYXR0cmlidXRlcyB9ID0gb3B0aW9uc1swXS5yZWY7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrZWRcclxuICAgICAgICAgICAgPyBhdHRyaWJ1dGVzICYmICFpc1VuZGVmaW5lZChhdHRyaWJ1dGVzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBpc1VuZGVmaW5lZCh2YWx1ZSkgfHwgaXNFbXB0eVN0cmluZyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiB2YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGZpZWxkcywgcmVmKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSByZWY7XHJcbiAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tuYW1lXTtcclxuICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZi5maWxlcztcclxuICAgIH1cclxuICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZCA/IGdldFJhZGlvVmFsdWUoZmllbGQub3B0aW9ucykudmFsdWUgOiAnJztcclxuICAgIH1cclxuICAgIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZShyZWYub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNDaGVja0JveElucHV0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQgPyBnZXRDaGVja2JveFZhbHVlKGZpZWxkLm9wdGlvbnMpLnZhbHVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cblxudmFyIGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG52YXIgZ2V0RmllbGRzVmFsdWVzID0gKGZpZWxkcywgc2VhcmNoKSA9PiB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmaWVsZHMpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoc2VhcmNoKSB8fFxyXG4gICAgICAgICAgICAoaXNTdHJpbmcoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgPyBuYW1lLnN0YXJ0c1dpdGgoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgOiBpc0FycmF5KHNlYXJjaClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlYXJjaC5maW5kKChkYXRhKSA9PiBuYW1lLnN0YXJ0c1dpdGgoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWFyY2ggJiYgc2VhcmNoLm5lc3QpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFtuYW1lXSA9IGdldEZpZWxkVmFsdWUoZmllbGRzLCBmaWVsZHNbbmFtZV0ucmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59O1xuXG52YXIgY29tcGFyZU9iamVjdCA9IChvYmplY3RBID0ge30sIG9iamVjdEIgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgb2JqZWN0QUtleXMgPSBPYmplY3Qua2V5cyhvYmplY3RBKTtcclxuICAgIGNvbnN0IG9iamVjdEJLZXlzID0gT2JqZWN0LmtleXMob2JqZWN0Qik7XHJcbiAgICByZXR1cm4gKG9iamVjdEFLZXlzLmxlbmd0aCA9PT0gb2JqZWN0QktleXMubGVuZ3RoICYmXHJcbiAgICAgICAgb2JqZWN0QUtleXMuZXZlcnkoKGtleSkgPT4gb2JqZWN0QltrZXldICYmIG9iamVjdEJba2V5XSA9PT0gb2JqZWN0QVtrZXldKSk7XHJcbn07XG5cbnZhciBpc1NhbWVFcnJvciA9IChlcnJvciwgeyB0eXBlLCB0eXBlcywgbWVzc2FnZSB9KSA9PiBpc09iamVjdChlcnJvcikgJiZcclxuICAgIGVycm9yLnR5cGUgPT09IHR5cGUgJiZcclxuICAgIGVycm9yLm1lc3NhZ2UgPT09IG1lc3NhZ2UgJiZcclxuICAgIGNvbXBhcmVPYmplY3QoZXJyb3IudHlwZXMsIHR5cGVzKTtcblxuZnVuY3Rpb24gc2hvdWxkUmVuZGVyQmFzZWRPbkVycm9yKHsgZXJyb3JzLCBuYW1lLCBlcnJvciwgdmFsaWRGaWVsZHMsIGZpZWxkc1dpdGhWYWxpZGF0aW9uLCB9KSB7XHJcbiAgICBjb25zdCBpc0ZpZWxkVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9yKTtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgY29uc3QgY3VycmVudEZpZWxkRXJyb3IgPSBnZXQoZXJyb3IsIG5hbWUpO1xyXG4gICAgY29uc3QgZXhpc3RGaWVsZEVycm9yID0gZ2V0KGVycm9ycywgbmFtZSk7XHJcbiAgICBpZiAoKGlzRmllbGRWYWxpZCAmJiB2YWxpZEZpZWxkcy5oYXMobmFtZSkpIHx8XHJcbiAgICAgICAgKGV4aXN0RmllbGRFcnJvciAmJiBleGlzdEZpZWxkRXJyb3IuaXNNYW51YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9ybVZhbGlkICE9PSBpc0ZpZWxkVmFsaWQgfHxcclxuICAgICAgICAoIWlzRm9ybVZhbGlkICYmICFleGlzdEZpZWxkRXJyb3IpIHx8XHJcbiAgICAgICAgKGlzRmllbGRWYWxpZCAmJiBmaWVsZHNXaXRoVmFsaWRhdGlvbi5oYXMobmFtZSkgJiYgIXZhbGlkRmllbGRzLmhhcyhuYW1lKSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXJyZW50RmllbGRFcnJvciAmJiAhaXNTYW1lRXJyb3IoZXhpc3RGaWVsZEVycm9yLCBjdXJyZW50RmllbGRFcnJvcik7XHJcbn1cblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbHVlTWVzc2FnZSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFpc1JlZ2V4KHZhbHVlKTtcclxuICAgIHJldHVybiBpc1ZhbHVlTWVzc2FnZSh2YWxpZGF0aW9uRGF0YSlcclxuICAgICAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxpZGF0aW9uRGF0YSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxufTtcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG5cbnZhciBpc01lc3NhZ2UgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSB8fCAoaXNPYmplY3QodmFsdWUpICYmIGlzVmFsaWRFbGVtZW50KHZhbHVlKSk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCByZWYsIHR5cGUgPSAndmFsaWRhdGUnKSB7XHJcbiAgICBpZiAoaXNNZXNzYWdlKHJlc3VsdCkgfHwgKGlzQm9vbGVhbihyZXN1bHQpICYmICFyZXN1bHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogaXNNZXNzYWdlKHJlc3VsdCkgPyByZXN1bHQgOiAnJyxcclxuICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cblxudmFyIGFwcGVuZEVycm9ycyA9IChuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9ycywgdHlwZSwgbWVzc2FnZSkgPT4ge1xyXG4gICAgaWYgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JzW25hbWVdO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yKSwgeyB0eXBlczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZXJyb3IgJiYgZXJyb3IudHlwZXMgPyBlcnJvci50eXBlcyA6IHt9KSksIHsgW3R5cGVdOiBtZXNzYWdlIHx8IHRydWUgfSkgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn07XG5cbnZhciB2YWxpZGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkc1JlZiwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCB7IHJlZiwgcmVmOiB7IHR5cGUsIHZhbHVlLCBuYW1lIH0sIG9wdGlvbnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCwgbWluLCBtYXgsIHBhdHRlcm4sIHZhbGlkYXRlLCB9KSA9PiB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBmaWVsZHNSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBjb25zdCBpc1JhZGlvID0gaXNSYWRpb0lucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc0NoZWNrQm94ID0gaXNDaGVja0JveElucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW8gfHwgaXNDaGVja0JveDtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSBpc0VtcHR5U3RyaW5nKHZhbHVlKTtcclxuICAgIGNvbnN0IGFwcGVuZEVycm9yc0N1cnJ5ID0gYXBwZW5kRXJyb3JzLmJpbmQobnVsbCwgbmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcik7XHJcbiAgICBjb25zdCBnZXRNaW5NYXhNZXNzYWdlID0gKGV4Y2VlZE1heCwgbWF4TGVuZ3RoTWVzc2FnZSwgbWluTGVuZ3RoTWVzc2FnZSwgbWF4VHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWF4TGVuZ3RoLCBtaW5UeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW5MZW5ndGgpID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXhjZWVkTWF4ID8gbWF4TGVuZ3RoTWVzc2FnZSA6IG1pbkxlbmd0aE1lc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogZXhjZWVkTWF4ID8gbWF4VHlwZSA6IG1pblR5cGUsIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHJlZiB9LCAoZXhjZWVkTWF4XHJcbiAgICAgICAgICAgID8gYXBwZW5kRXJyb3JzQ3VycnkobWF4VHlwZSwgbWVzc2FnZSlcclxuICAgICAgICAgICAgOiBhcHBlbmRFcnJvcnNDdXJyeShtaW5UeXBlLCBtZXNzYWdlKSkpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpbyAmJiAhaXNDaGVja0JveCAmJiAoaXNFbXB0eSB8fCBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKHZhbHVlKSAmJiAhdmFsdWUpIHx8XHJcbiAgICAgICAgICAgIChpc0NoZWNrQm94ICYmICFnZXRDaGVja2JveFZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvICYmICFnZXRSYWRpb1ZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHJlcXVpcmVkVmFsdWUsIG1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSB9ID0gaXNNZXNzYWdlKHJlcXVpcmVkKVxyXG4gICAgICAgICAgICA/IHsgdmFsdWU6ICEhcmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkIH1cclxuICAgICAgICAgICAgOiBnZXRWYWx1ZUFuZE1lc3NhZ2UocmVxdWlyZWQpO1xyXG4gICAgICAgIGlmIChyZXF1aXJlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSwgcmVmOiBpc1JhZGlvT3JDaGVja2JveCA/IChfYSA9IGZpZWxkc1tuYW1lXS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0ucmVmIDogcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIHJlcXVpcmVkTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtaW4pIHx8ICFpc051bGxPclVuZGVmaW5lZChtYXgpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG1heFZhbHVlLCBtZXNzYWdlOiBtYXhNZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4KTtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBtaW5WYWx1ZSwgbWVzc2FnZTogbWluTWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbik7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdudW1iZXInIHx8ICghdHlwZSAmJiAhaXNOYU4odmFsdWUpKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZU51bWJlciA9IHJlZi52YWx1ZUFzTnVtYmVyIHx8IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1heFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVOdW1iZXIgPiBtYXhWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVOdW1iZXIgPCBtaW5WYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlID0gcmVmLnZhbHVlQXNEYXRlIHx8IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1heFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVEYXRlID4gbmV3IERhdGUobWF4VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlRGF0ZSA8IG5ldyBEYXRlKG1pblZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKCEhZXhjZWVkTWF4LCBtYXhNZXNzYWdlLCBtaW5NZXNzYWdlLCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heCwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW4pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNFbXB0eSAmJiAobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBtYXhMZW5ndGhWYWx1ZSwgbWVzc2FnZTogbWF4TGVuZ3RoTWVzc2FnZSwgfSA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG1pbkxlbmd0aFZhbHVlLCBtZXNzYWdlOiBtaW5MZW5ndGhNZXNzYWdlLCB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSB2YWx1ZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoVmFsdWUpICYmIGlucHV0TGVuZ3RoID4gbWF4TGVuZ3RoVmFsdWU7XHJcbiAgICAgICAgY29uc3QgZXhjZWVkTWluID0gIWlzTnVsbE9yVW5kZWZpbmVkKG1pbkxlbmd0aFZhbHVlKSAmJiBpbnB1dExlbmd0aCA8IG1pbkxlbmd0aFZhbHVlO1xyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoISFleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdHRlcm4gJiYgIWlzRW1wdHkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBwYXR0ZXJuVmFsdWUsIG1lc3NhZ2U6IHBhdHRlcm5NZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UocGF0dGVybik7XHJcbiAgICAgICAgaWYgKGlzUmVnZXgocGF0dGVyblZhbHVlKSAmJiAhcGF0dGVyblZhbHVlLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZTogcGF0dGVybk1lc3NhZ2UsIHJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIHBhdHRlcm5NZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZHMsIHJlZik7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVSZWYgPSBpc1JhZGlvT3JDaGVja2JveCAmJiBvcHRpb25zID8gb3B0aW9uc1swXS5yZWYgOiByZWY7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlKGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIHZhbGlkYXRlUmVmKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy52YWxpZGF0ZSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdCh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxpZGF0ZUZ1bmN0aW9uXSBvZiBPYmplY3QuZW50cmllcyh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSAmJiAhdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZVJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlRnVuY3Rpb24oZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcih2YWxpZGF0ZVJlc3VsdCwgdmFsaWRhdGVSZWYsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShrZXksIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSB2YWxpZGF0aW9uUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHJlZjogdmFsaWRhdGVSZWYgfSwgdmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufTtcblxuY29uc3QgcGFyc2VFcnJvclNjaGVtYSA9IChlcnJvciwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSA9PiBpc0FycmF5KGVycm9yLmlubmVyKVxyXG4gICAgPyBlcnJvci5pbm5lci5yZWR1Y2UoKHByZXZpb3VzLCB7IHBhdGgsIG1lc3NhZ2UsIHR5cGUgfSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCAocGF0aFxyXG4gICAgICAgID8gcHJldmlvdXNbcGF0aF0gJiYgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgW3BhdGhdOiBhcHBlbmRFcnJvcnMocGF0aCwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBwcmV2aW91cywgdHlwZSwgbWVzc2FnZSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBbcGF0aF06IHByZXZpb3VzW3BhdGhdIHx8IE9iamVjdC5hc3NpZ24oeyBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgfSwgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlczogeyBbdHlwZV06IG1lc3NhZ2UgfHwgdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHt9KSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA6IHt9KSkpLCB7fSlcclxuICAgIDoge1xyXG4gICAgICAgIFtlcnJvci5wYXRoXTogeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLCB0eXBlOiBlcnJvci50eXBlIH0sXHJcbiAgICB9O1xyXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVdpdGhTY2hlbWEodmFsaWRhdGlvblNjaGVtYSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBkYXRhLCB2YWxpZGF0aW9uUmVzb2x2ZXIsIGNvbnRleHQpIHtcclxuICAgIGlmICh2YWxpZGF0aW9uUmVzb2x2ZXIpIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblJlc29sdmVyKGRhdGEsIGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZXM6IGF3YWl0IHZhbGlkYXRpb25TY2hlbWEudmFsaWRhdGUoZGF0YSwge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcnM6IHRyYW5zZm9ybVRvTmVzdE9iamVjdChwYXJzZUVycm9yU2NoZW1hKGUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmNvbnN0IGdldFBhdGggPSAocGF0aCwgdmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBnZXRJbm5lclBhdGggPSAodmFsdWUsIGtleSwgaXNPYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoV2l0aEluZGV4ID0gaXNPYmplY3QgPyBgJHtwYXRofS4ke2tleX1gIDogYCR7cGF0aH1bJHtrZXl9XWA7XHJcbiAgICAgICAgcmV0dXJuIGlzUHJpbWl0aXZlKHZhbHVlKSA/IHBhdGhXaXRoSW5kZXggOiBnZXRQYXRoKHBhdGhXaXRoSW5kZXgsIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZXMpXHJcbiAgICAgICAgPyB2YWx1ZXMubWFwKCh2YWx1ZSwga2V5KSA9PiBnZXRJbm5lclBhdGgodmFsdWUsIGtleSkpXHJcbiAgICAgICAgOiBPYmplY3QuZW50cmllcyh2YWx1ZXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBnZXRJbm5lclBhdGgodmFsdWUsIGtleSwgdHJ1ZSkpO1xyXG59O1xyXG52YXIgZ2V0UGF0aCQxID0gKHBhcmVudFBhdGgsIHZhbHVlKSA9PiBnZXRQYXRoKHBhcmVudFBhdGgsIHZhbHVlKS5mbGF0KEluZmluaXR5KTtcblxudmFyIGFzc2lnbldhdGNoRmllbGRzID0gKGZpZWxkVmFsdWVzLCBmaWVsZE5hbWUsIHdhdGNoRmllbGRzLCBpbnB1dFZhbHVlLCBpc1NpbmdsZUZpZWxkKSA9PiB7XHJcbiAgICBsZXQgdmFsdWU7XHJcbiAgICB3YXRjaEZpZWxkcy5hZGQoZmllbGROYW1lKTtcclxuICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSkge1xyXG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWlzVW5kZWZpbmVkKGZpZWxkVmFsdWVzW2ZpZWxkTmFtZV0pKSB7XHJcbiAgICAgICAgdmFsdWUgPSBmaWVsZFZhbHVlc1tmaWVsZE5hbWVdO1xyXG4gICAgICAgIHdhdGNoRmllbGRzLmFkZChmaWVsZE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFsdWUgPSBnZXQodHJhbnNmb3JtVG9OZXN0T2JqZWN0KGZpZWxkVmFsdWVzKSwgZmllbGROYW1lKTtcclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBnZXRQYXRoJDEoZmllbGROYW1lLCB2YWx1ZSkuZm9yRWFjaCgobmFtZSkgPT4gd2F0Y2hGaWVsZHMuYWRkKG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsdWUpXHJcbiAgICAgICAgPyBpc1NpbmdsZUZpZWxkXHJcbiAgICAgICAgICAgID8gaW5wdXRWYWx1ZVxyXG4gICAgICAgICAgICA6IGdldChpbnB1dFZhbHVlLCBmaWVsZE5hbWUpXHJcbiAgICAgICAgOiB2YWx1ZTtcclxufTtcblxudmFyIHNraXBWYWxpZGF0aW9uID0gKHsgaXNPbkNoYW5nZSwgaGFzRXJyb3IsIGlzQmx1ckV2ZW50LCBpc09uU3VibWl0LCBpc1JlVmFsaWRhdGVPblN1Ym1pdCwgaXNPbkJsdXIsIGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNTdWJtaXR0ZWQsIH0pID0+IChpc09uQ2hhbmdlICYmIGlzQmx1ckV2ZW50KSB8fFxyXG4gICAgKGlzT25TdWJtaXQgJiYgaXNSZVZhbGlkYXRlT25TdWJtaXQpIHx8XHJcbiAgICAoaXNPblN1Ym1pdCAmJiAhaXNTdWJtaXR0ZWQpIHx8XHJcbiAgICAoaXNPbkJsdXIgJiYgIWlzQmx1ckV2ZW50ICYmICFoYXNFcnJvcikgfHxcclxuICAgIChpc1JlVmFsaWRhdGVPbkJsdXIgJiYgIWlzQmx1ckV2ZW50ICYmIGhhc0Vycm9yKSB8fFxyXG4gICAgKGlzUmVWYWxpZGF0ZU9uU3VibWl0ICYmIGlzU3VibWl0dGVkKTtcblxudmFyIGdldEZpZWxkQXJyYXlQYXJlbnROYW1lID0gKG5hbWUpID0+IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUuaW5kZXhPZignWycpKTtcblxudmFyIGdldEZpZWxkVmFsdWVCeU5hbWUgPSAoZmllbGRzLCBuYW1lKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdHJhbnNmb3JtVG9OZXN0T2JqZWN0KGdldEZpZWxkc1ZhbHVlcyhmaWVsZHMpKTtcclxuICAgIHJldHVybiBuYW1lID8gZ2V0KHJlc3VsdHMsIG5hbWUsIHJlc3VsdHMpIDogcmVzdWx0cztcclxufTtcblxuZnVuY3Rpb24gZ2V0SXNGaWVsZHNEaWZmZXJlbnQocmVmZXJlbmNlQXJyYXksIGRpZmZlcmVuY2VBcnJheSkge1xyXG4gICAgbGV0IGlzTWF0Y2ggPSBmYWxzZTtcclxuICAgIGlmICghaXNBcnJheShyZWZlcmVuY2VBcnJheSkgfHxcclxuICAgICAgICAhaXNBcnJheShkaWZmZXJlbmNlQXJyYXkpIHx8XHJcbiAgICAgICAgcmVmZXJlbmNlQXJyYXkubGVuZ3RoICE9PSBkaWZmZXJlbmNlQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFBID0gcmVmZXJlbmNlQXJyYXlbaV07XHJcbiAgICAgICAgY29uc3QgZGF0YUIgPSBkaWZmZXJlbmNlQXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRhdGFCKSB8fFxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhQSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhkYXRhQikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YUEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFBW2tleV0gIT09IGRhdGFCW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNNYXRjaDtcclxufVxuXG5jb25zdCBpc01hdGNoRmllbGRBcnJheU5hbWUgPSAobmFtZSwgc2VhcmNoTmFtZSkgPT4gUmVnRXhwKGBeJHtzZWFyY2hOYW1lfVtcXFxcZCtdYC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJykucmVwbGFjZSgvXFxdL2csICdcXFxcXScpKS50ZXN0KG5hbWUpO1xyXG52YXIgaXNOYW1lSW5GaWVsZEFycmF5ID0gKG5hbWVzLCBuYW1lKSA9PiBbLi4ubmFtZXNdLnNvbWUoKGN1cnJlbnQpID0+IGlzTWF0Y2hGaWVsZEFycmF5TmFtZShuYW1lLCBjdXJyZW50KSk7XG5cbnZhciBpc1NlbGVjdElucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYCR7U0VMRUNUfS1vbmVgO1xuXG5mdW5jdGlvbiBvbkRvbVJlbW92ZShlbGVtZW50LCBvbkRldGFjaENhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICBpZiAoaXNEZXRhY2hlZChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIG9uRGV0YWNoQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUod2luZG93LmRvY3VtZW50LCB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYnNlcnZlcjtcclxufVxuXG52YXIgbW9kZUNoZWNrZXIgPSAobW9kZSkgPT4gKHtcclxuICAgIGlzT25TdWJtaXQ6ICFtb2RlIHx8IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCxcclxuICAgIGlzT25CbHVyOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25CbHVyLFxyXG4gICAgaXNPbkNoYW5nZTogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG59KTtcblxudmFyIGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24gPSAocmVmKSA9PiBpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKTtcblxuZnVuY3Rpb24gdXNlRm9ybSh7IG1vZGUgPSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsIHJlVmFsaWRhdGVNb2RlID0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLCB2YWxpZGF0aW9uU2NoZW1hLCB2YWxpZGF0aW9uUmVzb2x2ZXIsIHZhbGlkYXRpb25Db250ZXh0LCBkZWZhdWx0VmFsdWVzID0ge30sIHN1Ym1pdEZvY3VzRXJyb3IgPSB0cnVlLCB2YWxpZGF0ZUNyaXRlcmlhTW9kZSwgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBmaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZXJyb3JzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHRvdWNoZWRGaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3Qgd2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IGRpcnR5RmllbGRzUmVmID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICBjb25zdCBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZiA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgdmFsaWRGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IGlzVmFsaWRSZWYgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVzUmVmID0gdXNlUmVmKGRlZmF1bHRWYWx1ZXMpO1xyXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGlzVW5Nb3VudCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBpc1dhdGNoQWxsUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzU3VibWl0dGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRGlydHlSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3Qgc3VibWl0Q291bnRSZWYgPSB1c2VSZWYoMCk7XHJcbiAgICBjb25zdCBpc1N1Ym1pdHRpbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uQ29udGV4dFJlZiA9IHVzZVJlZih2YWxpZGF0aW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5TmFtZXNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IFssIHJlbmRlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgeyBpc09uQmx1ciwgaXNPblN1Ym1pdCwgaXNPbkNoYW5nZSB9ID0gdXNlUmVmKG1vZGVDaGVja2VyKG1vZGUpKS5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhID0gdmFsaWRhdGVDcml0ZXJpYU1vZGUgPT09ICdhbGwnO1xyXG4gICAgY29uc3QgaXNXaW5kb3dVbmRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQ7XHJcbiAgICBjb25zdCBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIgPSAhISh2YWxpZGF0aW9uU2NoZW1hIHx8IHZhbGlkYXRpb25SZXNvbHZlcik7XHJcbiAgICBjb25zdCBpc1dlYiA9IHR5cGVvZiBkb2N1bWVudCAhPT0gVU5ERUZJTkVEICYmXHJcbiAgICAgICAgIWlzV2luZG93VW5kZWZpbmVkICYmXHJcbiAgICAgICAgIWlzVW5kZWZpbmVkKHdpbmRvdy5IVE1MRWxlbWVudCk7XHJcbiAgICBjb25zdCBpc1Byb3h5RW5hYmxlZCA9IGlzV2ViID8gJ1Byb3h5JyBpbiB3aW5kb3cgOiB0eXBlb2YgUHJveHkgIT09IFVOREVGSU5FRDtcclxuICAgIGNvbnN0IHJlYWRGb3JtU3RhdGVSZWYgPSB1c2VSZWYoe1xyXG4gICAgICAgIGRpcnR5OiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogaXNPblN1Ym1pdCxcclxuICAgICAgICBzdWJtaXRDb3VudDogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIHRvdWNoZWQ6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1N1Ym1pdHRpbmc6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1ZhbGlkOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgaXNPbkJsdXI6IGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNPblN1Ym1pdDogaXNSZVZhbGlkYXRlT25TdWJtaXQsIH0gPSB1c2VSZWYobW9kZUNoZWNrZXIocmVWYWxpZGF0ZU1vZGUpKS5jdXJyZW50O1xyXG4gICAgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCA9IHZhbGlkYXRpb25Db250ZXh0O1xyXG4gICAgY29uc3QgcmVSZW5kZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1VuTW91bnQuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZW5kZXIoe30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHNob3VsZFJlbmRlckJhc2VPbkVycm9yID0gdXNlQ2FsbGJhY2soKG5hbWUsIGVycm9yLCBzaG91bGRSZW5kZXIgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlbmRlciB8fFxyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlZE9uRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzOiB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb246IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGVycm9yKSkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudC5oYXMobmFtZSkgfHxcclxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlcikge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRGaWVsZHNSZWYuY3VycmVudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlUmVuZGVyIHx8IGdldChlcnJvcnNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXJyb3JzUmVmLmN1cnJlbnQgPSB1bnNldChlcnJvcnNSZWYuY3VycmVudCwgW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZXJyb3JzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgPVxyXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICAocHJldmlvdXNFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICFpc1NhbWVFcnJvcihwcmV2aW91c0Vycm9yLCBlcnJvcltuYW1lXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlKTtcclxuICAgICAgICAgICAgc2V0KGVycm9yc1JlZi5jdXJyZW50LCBuYW1lLCBlcnJvcltuYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRSZVJlbmRlciAmJiAhaXNOdWxsT3JVbmRlZmluZWQoc2hvdWxkUmVuZGVyKSkge1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVSZW5kZXIsIHNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlcl0pO1xyXG4gICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IHVzZUNhbGxiYWNrKChmaWVsZCwgcmF3VmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlZiwgb3B0aW9ucyB9ID0gZmllbGQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc1dlYiAmJiBpc0hUTUxFbGVtZW50KHJlZikgJiYgaXNOdWxsT3JVbmRlZmluZWQocmF3VmFsdWUpXHJcbiAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgOiByYXdWYWx1ZTtcclxuICAgICAgICBpZiAoaXNSYWRpb0lucHV0KHJlZikgJiYgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKHsgcmVmOiByYWRpb1JlZiB9KSA9PiAocmFkaW9SZWYuY2hlY2tlZCA9IHJhZGlvUmVmLnZhbHVlID09PSB2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVmLmZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNdWx0aXBsZVNlbGVjdChyZWYpKSB7XHJcbiAgICAgICAgICAgIFsuLi5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gdmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSAmJiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmZvckVhY2goKHsgcmVmOiBjaGVja2JveFJlZiB9KSA9PiAoY2hlY2tib3hSZWYuY2hlY2tlZCA9IHZhbHVlLmluY2x1ZGVzKGNoZWNrYm94UmVmLnZhbHVlKSkpXHJcbiAgICAgICAgICAgICAgICA6IChvcHRpb25zWzBdLnJlZi5jaGVja2VkID0gISF2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNXZWJdKTtcclxuICAgIGNvbnN0IHNldERpcnR5ID0gdXNlQ2FsbGJhY2soKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkc1JlZi5jdXJyZW50W25hbWVdIHx8XHJcbiAgICAgICAgICAgICghcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5ICYmICFyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzRmllbGREaXJ0eSA9IGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50W25hbWVdICE9PVxyXG4gICAgICAgICAgICBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZHNSZWYuY3VycmVudFtuYW1lXS5yZWYpO1xyXG4gICAgICAgIGNvbnN0IGlzRmllbGRBcnJheSA9IGlzTmFtZUluRmllbGRBcnJheShmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNEaXJ0eUZpZWxkc0xlbmd0aCA9IGRpcnR5RmllbGRzUmVmLmN1cnJlbnQuc2l6ZTtcclxuICAgICAgICBpZiAoaXNGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQXJyYXlOYW1lID0gZ2V0RmllbGRBcnJheVBhcmVudE5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eSA9IGdldElzRmllbGRzRGlmZmVyZW50KGdldEZpZWxkVmFsdWVCeU5hbWUoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlOYW1lKSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNEaXJ0eUNoYW5nZWQgPSAoaXNGaWVsZEFycmF5ID8gaXNEaXJ0eVJlZi5jdXJyZW50IDogZGlydHlGaWVsZHNSZWYuY3VycmVudC5oYXMobmFtZSkpICE9PVxyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHk7XHJcbiAgICAgICAgaWYgKGlzRmllbGREaXJ0eSkge1xyXG4gICAgICAgICAgICBkaXJ0eUZpZWxkc1JlZi5jdXJyZW50LmFkZChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzUmVmLmN1cnJlbnQuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0RpcnR5UmVmLmN1cnJlbnQgPSBpc0ZpZWxkQXJyYXlcclxuICAgICAgICAgICAgPyBpc0ZpZWxkRGlydHlcclxuICAgICAgICAgICAgOiAhIWRpcnR5RmllbGRzUmVmLmN1cnJlbnQuc2l6ZTtcclxuICAgICAgICByZXR1cm4gcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5XHJcbiAgICAgICAgICAgID8gaXNEaXJ0eUNoYW5nZWRcclxuICAgICAgICAgICAgOiBwcmV2aW91c0RpcnR5RmllbGRzTGVuZ3RoICE9PSBkaXJ0eUZpZWxkc1JlZi5jdXJyZW50LnNpemU7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlcyA9IHVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgcGFyZW50RmllbGROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNWYWx1ZUFycmF5ID0gaXNBcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7cGFyZW50RmllbGROYW1lIHx8IG5hbWV9JHtpc1ZhbHVlQXJyYXkgPyBgWyR7a2V5fV1gIDogYC4ke2tleX1gfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXTtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnRlcm5hbFZhbHVlcyhuYW1lLCB2YWx1ZVtrZXldLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgdmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBzZXREaXJ0eShmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldEZpZWxkVmFsdWUsIHNldERpcnR5XSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBzZXREaXJ0eShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzQm9vbGVhbihvdXRwdXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZXMobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXREaXJ0eSwgc2V0RmllbGRWYWx1ZSwgc2V0SW50ZXJuYWxWYWx1ZXNdKTtcclxuICAgIGNvbnN0IGV4ZWN1dGVWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5hbWUsIHNraXBSZVJlbmRlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihuYW1lLCBlcnJvciwgc2tpcFJlUmVuZGVyID8gbnVsbCA6IGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYV0pO1xyXG4gICAgY29uc3QgZXhlY3V0ZVNjaGVtYU9yUmVzb2x2ZXJWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgdmFsaWRhdGVXaXRoU2NoZW1hKHZhbGlkYXRpb25TY2hlbWEsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZ2V0RmllbGRWYWx1ZUJ5TmFtZShmaWVsZHNSZWYuY3VycmVudCksIHZhbGlkYXRpb25SZXNvbHZlciwgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGlzVmFsaWRSZWYuY3VycmVudDtcclxuICAgICAgICBpc1ZhbGlkUmVmLmN1cnJlbnQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KGVycm9yc1JlZi5jdXJyZW50LCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChlcnJvcnNSZWYuY3VycmVudCwgW25hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihwYXlsb2FkLCAoZXJyb3IgPyB7IFtwYXlsb2FkXTogZXJyb3IgfSA6IHt9KSwgcHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNWYWxpZFJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoZXJyb3JzUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW1xyXG4gICAgICAgIHJlUmVuZGVyLFxyXG4gICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yLFxyXG4gICAgICAgIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSxcclxuICAgICAgICB2YWxpZGF0aW9uUmVzb2x2ZXIsXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgdHJpZ2dlclZhbGlkYXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHBheWxvYWQgfHwgT2JqZWN0LmtleXMoZmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBcnJheShmaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKGZpZWxkcy5tYXAoYXN5bmMgKGRhdGEpID0+IGF3YWl0IGV4ZWN1dGVWYWxpZGF0aW9uKGRhdGEsIHRydWUpKSk7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgfSwgW1xyXG4gICAgICAgIGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbixcclxuICAgICAgICBleGVjdXRlVmFsaWRhdGlvbixcclxuICAgICAgICByZVJlbmRlcixcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIsXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGlzRmllbGRXYXRjaGVkID0gKG5hbWUpID0+IGlzV2F0Y2hBbGxSZWYuY3VycmVudCB8fFxyXG4gICAgICAgIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQuaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudC5oYXMoKG5hbWUubWF0Y2goL1xcdysvKSB8fCBbXSlbMF0pO1xyXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUobmFtZXMsIHZhbHVlT3JTaG91bGRWYWxpZGF0ZSwgc2hvdWxkVmFsaWRhdGUpIHtcclxuICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXNBcnJheVZhbHVlID0gaXNBcnJheShuYW1lcyk7XHJcbiAgICAgICAgKGlzQXJyYXlWYWx1ZVxyXG4gICAgICAgICAgICA/IG5hbWVzXHJcbiAgICAgICAgICAgIDogW25hbWVzXSkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1N0cmluZ0ZpZWxkTmFtZSA9IGlzU3RyaW5nKG5hbWUpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXIgPVxyXG4gICAgICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShpc1N0cmluZ0ZpZWxkTmFtZSA/IG5hbWUgOiBPYmplY3Qua2V5cyhuYW1lKVswXSwgaXNTdHJpbmdGaWVsZE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbHVlT3JTaG91bGRWYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhuYW1lKVswXSkgfHwgaXNBcnJheVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0ZpZWxkV2F0Y2hlZChuYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2hvdWxkUmVuZGVyIHx8IGlzQXJyYXlWYWx1ZSkge1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGUgfHwgKGlzQXJyYXlWYWx1ZSAmJiB2YWx1ZU9yU2hvdWxkVmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJWYWxpZGF0aW9uKGlzQXJyYXlWYWx1ZSA/IHVuZGVmaW5lZCA6IG5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCA9IGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50XHJcbiAgICAgICAgPyBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgIDogYXN5bmMgKHsgdHlwZSwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldCA/IHRhcmdldC5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGZpZWxkc1JlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvcnNSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgZXJyb3I7XHJcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpc0JsdXJFdmVudCA9IHR5cGUgPT09IEVWRU5UUy5CTFVSO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwVmFsaWRhdGlvbiA9IHNraXBWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yOiAhIWN1cnJlbnRFcnJvcixcclxuICAgICAgICAgICAgICAgIGlzT25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBpc0JsdXJFdmVudCxcclxuICAgICAgICAgICAgICAgIGlzT25TdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBpc1JlVmFsaWRhdGVPblN1Ym1pdCxcclxuICAgICAgICAgICAgICAgIGlzT25CbHVyLFxyXG4gICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGlzU3VibWl0dGVkUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVEaXJ0eSA9IHNldERpcnR5KG5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gaXNGaWVsZFdhdGNoZWQobmFtZSkgfHwgc2hvdWxkVXBkYXRlRGlydHk7XHJcbiAgICAgICAgICAgIGlmIChpc0JsdXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICAgIWdldCh0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0KHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRTa2lwVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3VsZFJlbmRlciAmJiByZVJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCB2YWxpZGF0ZVdpdGhTY2hlbWEodmFsaWRhdGlvblNjaGVtYSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBnZXRGaWVsZFZhbHVlQnlOYW1lKGZpZWxkcyksIHZhbGlkYXRpb25SZXNvbHZlciwgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gaXNWYWxpZFJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZFJlZi5jdXJyZW50ID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoZ2V0KGVycm9ycywgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICA/IHsgW25hbWVdOiBnZXQoZXJyb3JzLCBuYW1lKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNWYWxpZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IobmFtZSwgZXJyb3IpICYmIHNob3VsZFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdCB2YWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIgPSB1c2VDYWxsYmFjaygodmFsdWVzID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGlzRW1wdHlPYmplY3QoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICA/IGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgdmFsaWRhdGVXaXRoU2NoZW1hKHZhbGlkYXRpb25TY2hlbWEsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgdHJhbnNmb3JtVG9OZXN0T2JqZWN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGRWYWx1ZXMpLCB2YWx1ZXMpKSwgdmFsaWRhdGlvblJlc29sdmVyLCB2YWxpZGF0aW9uQ29udGV4dFJlZi5jdXJyZW50KS50aGVuKCh7IGVycm9ycyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRm9ybUlzVmFsaWQgPSBpc1ZhbGlkUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGlzVmFsaWRSZWYuY3VycmVudCA9IGlzRW1wdHlPYmplY3QoZXJyb3JzKTtcclxuICAgICAgICAgICAgaWYgKHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzVmFsaWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICBbcmVSZW5kZXIsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgdmFsaWRhdGlvblJlc29sdmVyXSk7XHJcbiAgICBjb25zdCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZmllbGQsIGZvcmNlRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50ICYmIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudCwgaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnQsIGZpZWxkLCBmb3JjZURlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmID0gdXNlQ2FsbGJhY2soKGZpZWxkLCBmb3JjZURlbGV0ZSkgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQgfHxcclxuICAgICAgICAgICAgKGZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICBpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIGZpZWxkLnJlZi5uYW1lKSAmJlxyXG4gICAgICAgICAgICAgICAgIWZvcmNlRGVsZXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZCwgZm9yY2VEZWxldGUpO1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZmllbGQucmVmO1xyXG4gICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0gdW5zZXQoZXJyb3JzUmVmLmN1cnJlbnQsIFtuYW1lXSk7XHJcbiAgICAgICAgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50ID0gdW5zZXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50LCBbbmFtZV0pO1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50ID0gdW5zZXQoZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmLmN1cnJlbnQsIFtuYW1lXSk7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBkaXJ0eUZpZWxkc1JlZixcclxuICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsXHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLFxyXG4gICAgICAgICAgICB3YXRjaEZpZWxkc1JlZixcclxuICAgICAgICBdLmZvckVhY2goKGRhdGEpID0+IGRhdGEuY3VycmVudC5kZWxldGUobmFtZSkpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCB8fFxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCkge1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGVTY2hlbWFPclJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICByZVJlbmRlcixcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIsXHJcbiAgICAgICAgdmFsaWRhdGVTY2hlbWFPclJlc29sdmVyLFxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcixcclxuICAgIF0pO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJFcnJvcihuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdW5zZXQoZXJyb3JzUmVmLmN1cnJlbnQsIGlzQXJyYXkobmFtZSkgPyBuYW1lIDogW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbEVycm9yID0gKHsgbmFtZSwgdHlwZSwgdHlwZXMsIG1lc3NhZ2UsIHNob3VsZFJlbmRlciwgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgaWYgKCFpc1NhbWVFcnJvcihnZXQoZXJyb3JzUmVmLmN1cnJlbnQsIG5hbWUpLCB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHR5cGVzLFxyXG4gICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgIHNldChlcnJvcnNSZWYuY3VycmVudCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgIHR5cGVzLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHJlZjogZmllbGQgPyBmaWVsZC5yZWYgOiB7fSxcclxuICAgICAgICAgICAgICAgIGlzTWFudWFsOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvcihuYW1lLCB0eXBlID0gJycsIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxFcnJvcihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBuYW1lIH0sIChpc09iamVjdCh0eXBlKVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KSksIHsgc2hvdWxkUmVuZGVyOiB0cnVlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuYW1lKSkge1xyXG4gICAgICAgICAgICBuYW1lLmZvckVhY2goKGVycm9yKSA9PiBzZXRJbnRlcm5hbEVycm9yKE9iamVjdC5hc3NpZ24oe30sIGVycm9yKSkpO1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoKGZpZWxkTmFtZXMsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoRmllbGRzID0gd2F0Y2hGaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBpc0RlZmF1bHRWYWx1ZVVuZGVmaW5lZCA9IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgY29tYmluZWREZWZhdWx0VmFsdWVzID0gaXNEZWZhdWx0VmFsdWVVbmRlZmluZWRcclxuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkTmFtZXMpO1xyXG4gICAgICAgIGlmIChpc1N0cmluZyhmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZXMsIHdhdGNoRmllbGRzLCBpc0RlZmF1bHRWYWx1ZVVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBnZXQoY29tYmluZWREZWZhdWx0VmFsdWVzLCBmaWVsZE5hbWVzKVxyXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBcnJheShmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGROYW1lcy5yZWR1Y2UoKHByZXZpb3VzLCBuYW1lKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91cyksIHsgW25hbWVdOiBhc3NpZ25XYXRjaEZpZWxkcyhmaWVsZFZhbHVlcywgbmFtZSwgd2F0Y2hGaWVsZHMsIGNvbWJpbmVkRGVmYXVsdFZhbHVlcykgfSkpLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzV2F0Y2hBbGxSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKCFpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSAmJiBmaWVsZFZhbHVlcykgfHwgY29tYmluZWREZWZhdWx0VmFsdWVzO1xyXG4gICAgICAgIHJldHVybiBmaWVsZE5hbWVzICYmIGZpZWxkTmFtZXMubmVzdFxyXG4gICAgICAgICAgICA/IHRyYW5zZm9ybVRvTmVzdE9iamVjdChyZXN1bHQpXHJcbiAgICAgICAgICAgIDogcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIChpc0FycmF5KG5hbWUpID8gbmFtZSA6IFtuYW1lXSkuZm9yRWFjaCgoZmllbGROYW1lKSA9PiByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRzUmVmKHJlZiwgdmFsaWRhdGVPcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIXJlZi5uYW1lKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ01pc3NpbmcgbmFtZSBAJywgcmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB0eXBlLCB2YWx1ZSB9ID0gcmVmO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgcmVmIH0sIHZhbGlkYXRlT3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gZmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uKHJlZik7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gZmllbGRzW25hbWVdO1xyXG4gICAgICAgIGxldCBpc0VtcHR5RGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgaXNGaWVsZEFycmF5O1xyXG4gICAgICAgIGxldCBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgID8gZmllbGQgJiZcclxuICAgICAgICAgICAgICAgIGlzQXJyYXkoZmllbGQub3B0aW9ucykgJiZcclxuICAgICAgICAgICAgICAgIGZpZWxkLm9wdGlvbnMuZmlsdGVyKEJvb2xlYW4pLmZpbmQoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3B0aW9uLnJlZi52YWx1ZSAmJiBvcHRpb24ucmVmID09PSByZWY7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGZpZWxkICYmIHJlZiA9PT0gZmllbGQucmVmKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc1tuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpLCB2YWxpZGF0ZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uV2F0Y2hlciA9IG9uRG9tUmVtb3ZlKHJlZiwgKCkgPT4gcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkKSk7XHJcbiAgICAgICAgICAgIGZpZWxkID0gaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7IG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKChmaWVsZCAmJiBmaWVsZC5vcHRpb25zKSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uV2F0Y2hlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLCByZWY6IHsgdHlwZSwgbmFtZSB9IH0sIHZhbGlkYXRlT3B0aW9ucykgOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnMpLCB7IG11dGF0aW9uV2F0Y2hlciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGRzW25hbWVdID0gZmllbGQ7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlzRW1wdHlEZWZhdWx0VmFsdWUgPSBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICBpc0ZpZWxkQXJyYXkgPSBpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzRW1wdHlEZWZhdWx0VmFsdWUgJiYgIWlzRmllbGRBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGVTY2hlbWFPclJlc29sdmVyICYmXHJcbiAgICAgICAgICAgICFpc0ZpZWxkQXJyYXkgJiZcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVTY2hlbWFPclJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRlT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghaXNPblN1Ym1pdCAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQpLnRoZW4oKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGlzVmFsaWRSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuYWRkKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGlzVmFsaWRSZWYuY3VycmVudCA9IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNWYWxpZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudFtuYW1lXSAmJlxyXG4gICAgICAgICAgICAhKGlzRmllbGRBcnJheSAmJiBpc0VtcHR5RGVmYXVsdFZhbHVlKSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudFtuYW1lXSA9IGlzRW1wdHlEZWZhdWx0VmFsdWUgPyBnZXRGaWVsZFZhbHVlKGZpZWxkcywgZmllbGQucmVmKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGlzUmFkaW9PckNoZWNrYm94ICYmIGZpZWxkLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm9wdGlvbnNbZmllbGQub3B0aW9ucy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmllbGQsXHJcbiAgICAgICAgICAgICAgICBpc1JhZGlvT3JDaGVja2JveDogaXNSYWRpb09yQ2hlY2tib3ggfHwgaXNTZWxlY3RJbnB1dChyZWYpLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIocmVmT3JWYWxpZGF0aW9uT3B0aW9ucywgdmFsaWRhdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNXaW5kb3dVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTdHJpbmcocmVmT3JWYWxpZGF0aW9uT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZHNSZWYoeyBuYW1lOiByZWZPclZhbGlkYXRpb25PcHRpb25zIH0sIHZhbGlkYXRpb25PcHRpb25zKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYmplY3QocmVmT3JWYWxpZGF0aW9uT3B0aW9ucykgJiYgJ25hbWUnIGluIHJlZk9yVmFsaWRhdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZHNSZWYocmVmT3JWYWxpZGF0aW9uT3B0aW9ucywgdmFsaWRhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAocmVmKSA9PiByZWYgJiYgcmVnaXN0ZXJGaWVsZHNSZWYocmVmLCByZWZPclZhbGlkYXRpb25PcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSB7fTtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBmaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGluZykge1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmdSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzLCB2YWx1ZXMgfSA9IGF3YWl0IHZhbGlkYXRlV2l0aFNjaGVtYSh2YWxpZGF0aW9uU2NoZW1hLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIHRyYW5zZm9ybVRvTmVzdE9iamVjdChmaWVsZFZhbHVlcyksIHZhbGlkYXRpb25SZXNvbHZlciwgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnNSZWYuY3VycmVudCA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC52YWx1ZXMoZmllbGRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlZjogeyBuYW1lIH0sIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldChmaWVsZEVycm9ycywgbmFtZSwgZmllbGRFcnJvcltuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuYWRkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkRXJyb3JzKSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjYWxsYmFjayh0cmFuc2Zvcm1Ub05lc3RPYmplY3QoZmllbGRWYWx1ZXMpLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0gZmllbGRFcnJvcnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VibWl0Rm9jdXNFcnJvciAmJiBpc1dlYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25FcnJvckZpZWxkKGZpZWxkcywgZmllbGRFcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3VibWl0Q291bnRSZWYuY3VycmVudCA9IHN1Ym1pdENvdW50UmVmLmN1cnJlbnQgKyAxO1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBpc1dlYixcclxuICAgICAgICByZVJlbmRlcixcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIsXHJcbiAgICAgICAgc3VibWl0Rm9jdXNFcnJvcixcclxuICAgICAgICB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsXHJcbiAgICAgICAgdmFsaWRhdGlvblJlc29sdmVyLFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IHJlc2V0UmVmcyA9ICh7IGVycm9ycywgZGlydHksIGlzU3VibWl0dGVkLCB0b3VjaGVkLCBpc1ZhbGlkLCBzdWJtaXRDb3VudCwgZGlydHlGaWVsZHMsIH0pID0+IHtcclxuICAgICAgICBmaWVsZHNSZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgIGlmICghZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG91Y2hlZCkge1xyXG4gICAgICAgICAgICB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGlzVmFsaWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlydHkpIHtcclxuICAgICAgICAgICAgaXNEaXJ0eVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgZGlydHlGaWVsZHNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1N1Ym1pdHRlZCkge1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3VibWl0Q291bnQpIHtcclxuICAgICAgICAgICAgc3VibWl0Q291bnRSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudCA9IHt9O1xyXG4gICAgICAgIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgaXNXYXRjaEFsbFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAodmFsdWVzLCBvbWl0UmVzZXRTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2ViKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKSAmJiBpc0FycmF5KG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9uc1swXS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiByZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoaW5wdXRSZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QudmFsdWVzKHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQpLmZvckVhY2goKHJlc2V0RmllbGRBcnJheSkgPT4gaXNGdW5jdGlvbihyZXNldEZpZWxkQXJyYXkpICYmIHJlc2V0RmllbGRBcnJheSgpKTtcclxuICAgICAgICByZXNldFJlZnMob21pdFJlc2V0U3RhdGUpO1xyXG4gICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVzKHBheWxvYWQpIHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkc1JlZi5jdXJyZW50W3BheWxvYWRdXHJcbiAgICAgICAgICAgICAgICA/IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkc1JlZi5jdXJyZW50W3BheWxvYWRdLnJlZilcclxuICAgICAgICAgICAgICAgIDogZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgcGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KTtcclxuICAgICAgICBjb25zdCBvdXRwdXRWYWx1ZXMgPSBpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudFxyXG4gICAgICAgICAgICA6IGZpZWxkVmFsdWVzO1xyXG4gICAgICAgIHJldHVybiBwYXlsb2FkICYmIHBheWxvYWQubmVzdFxyXG4gICAgICAgICAgICA/IHRyYW5zZm9ybVRvTmVzdE9iamVjdChvdXRwdXRWYWx1ZXMpXHJcbiAgICAgICAgICAgIDogb3V0cHV0VmFsdWVzO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcclxuICAgICAgICBpc1VuTW91bnQuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgZmllbGRzUmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KS5mb3JFYWNoKChmaWVsZCkgPT4gcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkLCB0cnVlKSk7XHJcbiAgICB9LCBbcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmXSk7XHJcbiAgICBpZiAoIXNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlcikge1xyXG4gICAgICAgIGlzVmFsaWRSZWYuY3VycmVudCA9XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuc2l6ZSA+PSBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LnNpemUgJiZcclxuICAgICAgICAgICAgICAgIGlzRW1wdHlPYmplY3QoZXJyb3JzUmVmLmN1cnJlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybVN0YXRlID0ge1xyXG4gICAgICAgIGRpcnR5OiBpc0RpcnR5UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGRpcnR5RmllbGRzUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGlzU3VibWl0dGVkUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IHN1Ym1pdENvdW50UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdG91Y2hlZDogdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogaXNTdWJtaXR0aW5nUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgaXNWYWxpZDogaXNPblN1Ym1pdFxyXG4gICAgICAgICAgICA/IGlzU3VibWl0dGVkUmVmLmN1cnJlbnQgJiYgaXNFbXB0eU9iamVjdChlcnJvcnNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgOiBpc1ZhbGlkUmVmLmN1cnJlbnQsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29tbW9uUHJvcHMgPSB7XHJcbiAgICAgICAgdHJpZ2dlclZhbGlkYXRpb24sXHJcbiAgICAgICAgc2V0VmFsdWU6IHVzZUNhbGxiYWNrKHNldFZhbHVlLCBbXHJcbiAgICAgICAgICAgIHJlUmVuZGVyLFxyXG4gICAgICAgICAgICBzZXRJbnRlcm5hbFZhbHVlLFxyXG4gICAgICAgICAgICB0cmlnZ2VyVmFsaWRhdGlvbixcclxuICAgICAgICBdKSxcclxuICAgICAgICByZWdpc3RlcjogdXNlQ2FsbGJhY2socmVnaXN0ZXIsIFtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudCxcclxuICAgICAgICBdKSxcclxuICAgICAgICB1bnJlZ2lzdGVyOiB1c2VDYWxsYmFjayh1bnJlZ2lzdGVyLCBbXSksXHJcbiAgICAgICAgZ2V0VmFsdWVzOiB1c2VDYWxsYmFjayhnZXRWYWx1ZXMsIFtdKSxcclxuICAgICAgICBmb3JtU3RhdGU6IGlzUHJveHlFbmFibGVkXHJcbiAgICAgICAgICAgID8gbmV3IFByb3h5KGZvcm1TdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudFtwcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGZvcm1TdGF0ZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBjb250cm9sID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgcmVSZW5kZXIgfSwgKHNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlclxyXG4gICAgICAgID8geyB2YWxpZGF0ZVNjaGVtYUlzVmFsaWQ6IHZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlciB9XHJcbiAgICAgICAgOiB7fSkpLCB7IG1vZGU6IHtcclxuICAgICAgICAgICAgaXNPbkJsdXIsXHJcbiAgICAgICAgICAgIGlzT25TdWJtaXQsXHJcbiAgICAgICAgICAgIGlzT25DaGFuZ2UsXHJcbiAgICAgICAgfSwgcmVWYWxpZGF0ZU1vZGU6IHtcclxuICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgICAgICBpc1JlVmFsaWRhdGVPblN1Ym1pdCxcclxuICAgICAgICB9LCBlcnJvcnNSZWYsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkc1JlZixcclxuICAgICAgICBmaWVsZHNSZWYsXHJcbiAgICAgICAgaXNXYXRjaEFsbFJlZixcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZixcclxuICAgICAgICByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZixcclxuICAgICAgICBmaWVsZEFycmF5RGVmYXVsdFZhbHVlcyxcclxuICAgICAgICB2YWxpZEZpZWxkc1JlZixcclxuICAgICAgICBkaXJ0eUZpZWxkc1JlZixcclxuICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZixcclxuICAgICAgICBmaWVsZEFycmF5TmFtZXNSZWYsXHJcbiAgICAgICAgaXNEaXJ0eVJlZixcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNSZWYgfSksIGNvbW1vblByb3BzKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgd2F0Y2gsXHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBoYW5kbGVTdWJtaXQsIHJlc2V0OiB1c2VDYWxsYmFjayhyZXNldCwgW10pLCBjbGVhckVycm9yOiB1c2VDYWxsYmFjayhjbGVhckVycm9yLCBbXSksIHNldEVycm9yOiB1c2VDYWxsYmFjayhzZXRFcnJvciwgW10pLCBlcnJvcnM6IGVycm9yc1JlZi5jdXJyZW50IH0sIGNvbW1vblByb3BzKTtcclxufVxuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XG5cbmNvbnN0IEZvcm1HbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZnVuY3Rpb24gdXNlRm9ybUNvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChGb3JtR2xvYmFsQ29udGV4dCk7XHJcbn1cclxuZnVuY3Rpb24gRm9ybUNvbnRleHQoX2EpIHtcclxuICAgIHZhciB7IGNoaWxkcmVuLCBmb3JtU3RhdGUsIGVycm9ycyB9ID0gX2EsIHJlc3RNZXRob2RzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImZvcm1TdGF0ZVwiLCBcImVycm9yc1wiXSk7XHJcbiAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoRm9ybUdsb2JhbENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzdE1ldGhvZHMpLCB7IGZvcm1TdGF0ZSwgZXJyb3JzIH0pIH0sIGNoaWxkcmVuKSk7XHJcbn1cblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBVTkRFRklORUQgPyBEYXRlLm5vdygpIDogcGVyZm9ybWFuY2Uubm93KCkgKiAxMDAwO1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNiArIGQpICUgMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufTtcblxuY29uc3QgYXBwZW5kSWQgPSAodmFsdWUsIGtleU5hbWUpID0+IChPYmplY3QuYXNzaWduKHsgW2tleU5hbWVdOiBnZW5lcmF0ZUlkKCkgfSwgKGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogeyB2YWx1ZSB9KSkpO1xyXG5jb25zdCBtYXBJZHMgPSAoZGF0YSwga2V5TmFtZSkgPT4gKGlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW10pLm1hcCgodmFsdWUpID0+IGFwcGVuZElkKHZhbHVlLCBrZXlOYW1lKSk7XG5cbnZhciBnZXRTb3J0UmVtb3ZlZEl0ZW1zID0gKGluZGV4ZXMsIHJlbW92ZUluZGV4ZXMsIHVwZGF0ZWRJbmRleGVzID0gW10sIGNvdW50ID0gMCwgbm90Rm91bmRJbmRleGVzID0gW10pID0+IHtcclxuICAgIGZvciAoY29uc3QgcmVtb3ZlSW5kZXggb2YgcmVtb3ZlSW5kZXhlcykge1xyXG4gICAgICAgIGlmIChpbmRleGVzLmluZGV4T2YocmVtb3ZlSW5kZXgpIDwgMCkge1xyXG4gICAgICAgICAgICBub3RGb3VuZEluZGV4ZXMucHVzaChyZW1vdmVJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzLnNvcnQoKSkge1xyXG4gICAgICAgIGlmIChyZW1vdmVJbmRleGVzLmluZGV4T2YoaW5kZXgpID4gLTEpIHtcclxuICAgICAgICAgICAgdXBkYXRlZEluZGV4ZXMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1cGRhdGVkSW5kZXhlcy5wdXNoKGluZGV4IC1cclxuICAgICAgICAgICAgICAgIGNvdW50IC1cclxuICAgICAgICAgICAgICAgIChub3RGb3VuZEluZGV4ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyBub3RGb3VuZEluZGV4ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobm90Rm91bmRJbmRleCkgPT4gbm90Rm91bmRJbmRleCA8IGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIDogMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cGRhdGVkSW5kZXhlcztcclxufTtcblxuY29uc3QgcmVtb3ZlQXQgPSAoZGF0YSwgaW5kZXgpID0+IFtcclxuICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uZGF0YS5zbGljZShpbmRleCArIDEpLFxyXG5dO1xyXG5mdW5jdGlvbiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgaW5kZXgpIHtcclxuICAgIGxldCBrID0gLTE7XHJcbiAgICB3aGlsZSAoKytrIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoaW5kZXguaW5kZXhPZihrKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhLmZpbHRlcihCb29sZWFuKTtcclxufVxyXG52YXIgcmVtb3ZlQXJyYXlBdCA9IChkYXRhLCBpbmRleCkgPT4gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICA/IFtdXHJcbiAgICA6IGlzQXJyYXkoaW5kZXgpXHJcbiAgICAgICAgPyByZW1vdmVBdEluZGV4ZXMoZGF0YSwgaW5kZXgpXHJcbiAgICAgICAgOiByZW1vdmVBdChkYXRhLCBpbmRleCk7XG5cbnZhciBtb3ZlQXJyYXlBdCA9IChkYXRhLCBmcm9tLCB0bykgPT4gaXNBcnJheShkYXRhKSA/IGRhdGEuc3BsaWNlKHRvLCAwLCBkYXRhLnNwbGljZShmcm9tLCAxKVswXSkgOiBbXTtcblxudmFyIHN3YXBBcnJheUF0ID0gKGRhdGEsIGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wID0gW2RhdGFbaW5kZXhCXSwgZGF0YVtpbmRleEFdXTtcclxuICAgIGRhdGFbaW5kZXhBXSA9IHRlbXBbMF07XHJcbiAgICBkYXRhW2luZGV4Ql0gPSB0ZW1wWzFdO1xyXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLihpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlIHx8IG51bGxdKSwgLi4uZGF0YV07XHJcbn1cblxuZnVuY3Rpb24gaW5zZXJ0KGRhdGEsIGluZGV4LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAuLi4oaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZSB8fCBudWxsXSksXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZShpbmRleCksXHJcbiAgICBdO1xyXG59XG5cbnZhciBmaWxsRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gaXNBcnJheSh2YWx1ZSkgPyBBcnJheSh2YWx1ZS5sZW5ndGgpLmZpbGwobnVsbCkgOiBudWxsO1xuXG5jb25zdCB1c2VGaWVsZEFycmF5ID0gKHsgY29udHJvbCwgbmFtZSwga2V5TmFtZSA9ICdpZCcsIH0pID0+IHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBpc1dhdGNoQWxsUmVmLCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiwgZmllbGRBcnJheU5hbWVzUmVmLCByZVJlbmRlciwgZmllbGRzUmVmLCBnZXRWYWx1ZXMsIGRlZmF1bHRWYWx1ZXNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lciwgZXJyb3JzUmVmLCBkaXJ0eUZpZWxkc1JlZiwgaXNEaXJ0eVJlZiwgdG91Y2hlZEZpZWxkc1JlZiwgcmVhZEZvcm1TdGF0ZVJlZiwgd2F0Y2hGaWVsZHNSZWYsIHZhbGlkRmllbGRzUmVmLCBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZiwgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMsIHZhbGlkYXRlU2NoZW1hSXNWYWxpZCwgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlcyA9ICgpID0+IFtcclxuICAgICAgICAuLi5nZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKV1cclxuICAgICAgICAgICAgPyBmaWVsZEFycmF5RGVmYXVsdFZhbHVlcy5jdXJyZW50XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgbWVtb2l6ZWREZWZhdWx0VmFsdWVzID0gdXNlUmVmKGdldERlZmF1bHRWYWx1ZXMoKSk7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZF0gPSB1c2VTdGF0ZShtYXBJZHMobWVtb2l6ZWREZWZhdWx0VmFsdWVzLmN1cnJlbnQsIGtleU5hbWUpKTtcclxuICAgIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSB1c2VSZWYoZmllbGRzKTtcclxuICAgIGNvbnN0IGlzTmFtZUtleSA9IGlzS2V5KG5hbWUpO1xyXG4gICAgYWxsRmllbGRzLmN1cnJlbnQgPSBmaWVsZHM7XHJcbiAgICBpZiAoaXNOYW1lS2V5KSB7XHJcbiAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXSA9IG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXBwZW5kVmFsdWVXaXRoS2V5ID0gKHZhbHVlcykgPT4gdmFsdWVzLm1hcCgodmFsdWUpID0+IGFwcGVuZElkKHZhbHVlLCBrZXlOYW1lKSk7XHJcbiAgICBjb25zdCBzZXRGaWVsZEFuZFZhbGlkU3RhdGUgPSAoZmllbGRzVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGQoZmllbGRzVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdmFsaWRhdGVTY2hlbWFJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlU2NoZW1hSXNWYWxpZCh7XHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IGZpZWxkc1ZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vZGlmeURpcnR5RmllbGRzID0gKHsgc2hvdWxkUmVuZGVyLCBpc1JlbW92ZSwgaXNQcmVQZW5kLCBpbmRleCwgdmFsdWUgPSB7fSwgfSA9IHt9KSA9PiB7XHJcbiAgICAgICAgbGV0IHJlbmRlciA9IHNob3VsZFJlbmRlcjtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcnR5RmllbGRJbmRleGVzQW5kVmFsdWVzID0ge307XHJcbiAgICAgICAgICAgIGlmIChpc1ByZVBlbmQgfHwgaXNSZW1vdmUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGlydHlGaWVsZCBvZiBbLi4uZGlydHlGaWVsZHNSZWYuY3VycmVudF0uc29ydCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2hGaWVsZEFycmF5TmFtZShkaXJ0eUZpZWxkLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkSW5kZXhlcyA9IGRpcnR5RmllbGQubWF0Y2goUkVHRVhfQVJSQVlfRklFTERfSU5ERVgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEluZGV4ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoSW5kZXggPSArbWF0Y2hlZEluZGV4ZXNbbWF0Y2hlZEluZGV4ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlydHlGaWVsZEluZGV4ZXNBbmRWYWx1ZXNbbWF0Y2hJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkSW5kZXhlc0FuZFZhbHVlc1ttYXRjaEluZGV4XS5wdXNoKGRpcnR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZEluZGV4ZXNBbmRWYWx1ZXNbbWF0Y2hJbmRleF0gPSBbZGlydHlGaWVsZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZHNSZWYuY3VycmVudC5kZWxldGUoZGlydHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaW5kZXgpIHx8IGlzUHJlUGVuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERpcnR5RmllbGRJbmRleGVzID0gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbXVxyXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0U29ydFJlbW92ZWRJdGVtcyhPYmplY3Qua2V5cyhkaXJ0eUZpZWxkSW5kZXhlc0FuZFZhbHVlcykubWFwKChpKSA9PiAraSksIGlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZGlydHlGaWVsZEluZGV4ZXNBbmRWYWx1ZXMpLmZvckVhY2goKHZhbHVlcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVJbmRleCA9IGlzUHJlUGVuZCA/IDAgOiB1cGRhdGVkRGlydHlGaWVsZEluZGV4ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkSW5kZXhlcyA9IHZhbHVlLm1hdGNoKFJFR0VYX0FSUkFZX0ZJRUxEX0lOREVYKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkSW5kZXhlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzUmVmLmN1cnJlbnQuYWRkKHZhbHVlLnJlcGxhY2UoL1tcXGQrXShbXltcXGQrXSspJC8sIGAke2lzUHJlUGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICttYXRjaGVkSW5kZXhlc1ttYXRjaGVkSW5kZXhlcy5sZW5ndGggLSAxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXBkYXRlSW5kZXh9JDFgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoZmllbGRWYWx1ZSwgaW5kZXgpID0+IE9iamVjdC5rZXlzKGZpZWxkVmFsdWUpLmZvckVhY2goKGtleSkgPT4gZGlydHlGaWVsZHNSZWYuY3VycmVudC5hZGQoYCR7bmFtZX1bJHtpc1ByZVBlbmQgPyBpbmRleCA6IGFsbEZpZWxkcy5jdXJyZW50Lmxlbmd0aCArIGluZGV4fV0uJHtrZXl9YCkpKTtcclxuICAgICAgICAgICAgICAgIGlzRGlydHlSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbmRlciAmJiAhaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRzID0gKGZsYWdPckZpZWxkcykgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHkpIHtcclxuICAgICAgICAgICAgaXNEaXJ0eVJlZi5jdXJyZW50ID0gaXNVbmRlZmluZWQoZmxhZ09yRmllbGRzKVxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGdldElzRmllbGRzRGlmZmVyZW50KGZsYWdPckZpZWxkcywgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50W25hbWVdIHx8IFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2hGaWVsZEFycmF5TmFtZShrZXksIG5hbWUpICYmIGZpZWxkc1JlZi5jdXJyZW50W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudFtrZXldLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEZpZWxkc1ZhbHVlID0gZ2V0KGdldFZhbHVlcyh7IG5lc3Q6IHRydWUgfSksIG5hbWUpO1xyXG4gICAgICAgIGlmIChpc0FycmF5KGN1cnJlbnRGaWVsZHNWYWx1ZSkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50RmllbGRzVmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFsbEZpZWxkcy5jdXJyZW50W2ldID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhbGxGaWVsZHMuY3VycmVudFtpXSksIGN1cnJlbnRGaWVsZHNWYWx1ZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBwZW5kID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKFtcclxuICAgICAgICAgICAgLi4uYWxsRmllbGRzLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIC4uLihpc0FycmF5KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBhcHBlbmRWYWx1ZVdpdGhLZXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IFthcHBlbmRJZCh2YWx1ZSwga2V5TmFtZSldKSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBtb2RpZnlEaXJ0eUZpZWxkcyh7IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByZXBlbmQkMSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShwcmVwZW5kKGFsbEZpZWxkcy5jdXJyZW50LCBpc0FycmF5KHZhbHVlKSA/IGFwcGVuZFZhbHVlV2l0aEtleSh2YWx1ZSkgOiBbYXBwZW5kSWQodmFsdWUsIGtleU5hbWUpXSkpO1xyXG4gICAgICAgIGlmIChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBlcnJvcnNSZWYuY3VycmVudFtuYW1lXSA9IHByZXBlbmQoZXJyb3JzUmVmLmN1cnJlbnRbbmFtZV0sIGZpbGxFbXB0eUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJiB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdID0gcHJlcGVuZCh0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0sIGZpbGxFbXB0eUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vZGlmeURpcnR5RmllbGRzKHtcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyLFxyXG4gICAgICAgICAgICBpc1ByZVBlbmQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpc0luZGV4VW5kZWZpbmVkID0gaXNVbmRlZmluZWQoaW5kZXgpO1xyXG4gICAgICAgIGlmICghaXNJbmRleFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXRGaWVsZHMocmVtb3ZlQXJyYXlBdChnZXRGaWVsZFZhbHVlQnlOYW1lKGZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKSwgaW5kZXgpKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUocmVtb3ZlQXJyYXlBdChhbGxGaWVsZHMuY3VycmVudCwgaW5kZXgpKTtcclxuICAgICAgICBzZXRJc0RlbGV0ZWQodHJ1ZSk7XHJcbiAgICAgICAgaWYgKGVycm9yc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50W25hbWVdID0gcmVtb3ZlQXJyYXlBdChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIWVycm9yc1JlZi5jdXJyZW50W25hbWVdLmZpbHRlcihCb29sZWFuKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlcnJvcnNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiYgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudFtuYW1lXSA9IHJlbW92ZUFycmF5QXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiAhdmFsaWRhdGVTY2hlbWFJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5kZXhVbmRlZmluZWQgPSBpc1VuZGVmaW5lZChpbmRleCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChmaWVsZEluZGV4KysgPCBmaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBmaWVsZEluZGV4ID09PSBmaWVsZHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudEluZGV4ID0gKGlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKS5pbmRleE9mKGZpZWxkSW5kZXgpID49IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50SW5kZXggfHwgaXNJbmRleFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHNbZmllbGRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RmllbGROYW1lID0gYCR7bmFtZX1bJHtmaWVsZEluZGV4fV0uJHtrZXl9YDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50SW5kZXggfHwgaXNMYXN0IHx8IGlzSW5kZXhVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRGaWVsZHNSZWYuY3VycmVudC5kZWxldGUoY3VycmVudEZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQuZGVsZXRlKGN1cnJlbnRGaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGaWVsZE5hbWUgPSBgJHtuYW1lfVske2ZpZWxkSW5kZXggLSAxfV0uJHtrZXl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuaGFzKGN1cnJlbnRGaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LmFkZChwcmV2aW91c0ZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQuaGFzKGN1cnJlbnRGaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LmFkZChwcmV2aW91c0ZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kaWZ5RGlydHlGaWVsZHMoe1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXIsXHJcbiAgICAgICAgICAgIGlzUmVtb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnNlcnQkMSA9IChpbmRleCwgdmFsdWUpID0+IHtcclxuICAgICAgICBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUoKTtcclxuICAgICAgICByZXNldEZpZWxkcyhpbnNlcnQoZ2V0RmllbGRWYWx1ZUJ5TmFtZShmaWVsZHNSZWYuY3VycmVudCwgbmFtZSksIGluZGV4KSk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKGluc2VydChhbGxGaWVsZHMuY3VycmVudCwgaW5kZXgsIGlzQXJyYXkodmFsdWUpID8gYXBwZW5kVmFsdWVXaXRoS2V5KHZhbHVlKSA6IFthcHBlbmRJZCh2YWx1ZSwga2V5TmFtZSldKSk7XHJcbiAgICAgICAgaWYgKGVycm9yc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50W25hbWVdID0gaW5zZXJ0KGVycm9yc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleCwgZmlsbEVtcHR5QXJyYXkodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkICYmIHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0gPSBpbnNlcnQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleCwgZmlsbEVtcHR5QXJyYXkodmFsdWUpKTtcclxuICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3dhcCA9IChpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgICAgIG1hcEN1cnJlbnRGaWVsZHNWYWx1ZVdpdGhTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRWYWx1ZUJ5TmFtZShmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICByZXNldEZpZWxkcyhmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoYWxsRmllbGRzLmN1cnJlbnQsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUoWy4uLmFsbEZpZWxkcy5jdXJyZW50XSk7XHJcbiAgICAgICAgaWYgKGVycm9yc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHN3YXBBcnJheUF0KGVycm9yc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJiB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgc3dhcEFycmF5QXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vdmUgPSAoZnJvbSwgdG8pID0+IHtcclxuICAgICAgICBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUoKTtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEZpZWxkVmFsdWVCeU5hbWUoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBmcm9tLCB0byk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoZmllbGRWYWx1ZXMpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGFsbEZpZWxkcy5jdXJyZW50LCBmcm9tLCB0byk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKFsuLi5hbGxGaWVsZHMuY3VycmVudF0pO1xyXG4gICAgICAgIGlmIChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBtb3ZlQXJyYXlBdChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSwgZnJvbSwgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiYgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIG1vdmVBcnJheUF0KHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgZnJvbSwgdG8pO1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50ID0gZ2V0RGVmYXVsdFZhbHVlcygpO1xyXG4gICAgICAgIHNldEZpZWxkKG1hcElkcyhtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCwga2V5TmFtZSkpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFtZUtleSAmJlxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQgJiZcclxuICAgICAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXSAmJlxyXG4gICAgICAgICAgICBmaWVsZHMubGVuZ3RoIDwgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXS5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmllbGRzLCBuYW1lLCBmaWVsZEFycmF5RGVmYXVsdFZhbHVlcywgaXNEZWxldGVkLCBpc05hbWVLZXldKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2F0Y2hBbGxSZWYgJiYgaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdhdGNoRmllbGRzUmVmKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd2F0Y2hGaWVsZCBvZiB3YXRjaEZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2F0Y2hGaWVsZC5zdGFydHNXaXRoKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtmaWVsZHMsIG5hbWUsIHJlUmVuZGVyLCB3YXRjaEZpZWxkc1JlZiwgaXNXYXRjaEFsbFJlZl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNldEZ1bmN0aW9ucyA9IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgZmllbGRBcnJheU5hbWVzID0gZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgZmllbGRBcnJheU5hbWVzLmFkZChuYW1lKTtcclxuICAgICAgICByZXNldEZ1bmN0aW9uc1tuYW1lXSA9IHJlc2V0O1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXNldEZ1bmN0aW9uc1tuYW1lXTtcclxuICAgICAgICAgICAgZmllbGRBcnJheU5hbWVzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3dhcDogdXNlQ2FsbGJhY2soc3dhcCwgW25hbWVdKSxcclxuICAgICAgICBtb3ZlOiB1c2VDYWxsYmFjayhtb3ZlLCBbbmFtZV0pLFxyXG4gICAgICAgIHByZXBlbmQ6IHVzZUNhbGxiYWNrKHByZXBlbmQkMSwgW25hbWVdKSxcclxuICAgICAgICBhcHBlbmQ6IHVzZUNhbGxiYWNrKGFwcGVuZCwgW25hbWVdKSxcclxuICAgICAgICByZW1vdmU6IHVzZUNhbGxiYWNrKHJlbW92ZSwgW2ZpZWxkcywgbmFtZV0pLFxyXG4gICAgICAgIGluc2VydDogdXNlQ2FsbGJhY2soaW5zZXJ0JDEsIFtuYW1lXSksXHJcbiAgICAgICAgZmllbGRzLFxyXG4gICAgfTtcclxufTtcblxudmFyIGdldElucHV0VmFsdWUgPSAoZXZlbnQsIGlzQ2hlY2tib3hJbnB1dCkgPT4gaXNQcmltaXRpdmUoZXZlbnQpIHx8XHJcbiAgICAhaXNPYmplY3QoZXZlbnQudGFyZ2V0KSB8fFxyXG4gICAgKGlzT2JqZWN0KGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnR5cGUpXHJcbiAgICA/IGV2ZW50XHJcbiAgICA6IGlzQ2hlY2tib3hJbnB1dCB8fCBpc1VuZGVmaW5lZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG5jb25zdCBDb250cm9sbGVyID0gKF9hKSA9PiB7XHJcbiAgICB2YXIgeyBuYW1lLCBydWxlcywgYXM6IElubmVyQ29tcG9uZW50LCBvbkJsdXIsIG9uQ2hhbmdlLCBvbkNoYW5nZU5hbWUgPSBWQUxJREFUSU9OX01PREUub25DaGFuZ2UsIG9uQmx1ck5hbWUgPSBWQUxJREFUSU9OX01PREUub25CbHVyLCB2YWx1ZU5hbWUsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgb25Gb2N1cyB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcIm5hbWVcIiwgXCJydWxlc1wiLCBcImFzXCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VcIiwgXCJvbkNoYW5nZU5hbWVcIiwgXCJvbkJsdXJOYW1lXCIsIFwidmFsdWVOYW1lXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiY29udHJvbFwiLCBcIm9uRm9jdXNcIl0pO1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXNSZWYsIHNldFZhbHVlLCByZWdpc3RlciwgdW5yZWdpc3RlciwgZXJyb3JzUmVmLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsIHRyaWdnZXJWYWxpZGF0aW9uLCBtb2RlOiB7IGlzT25TdWJtaXQsIGlzT25CbHVyLCBpc09uQ2hhbmdlIH0sIHJlVmFsaWRhdGVNb2RlOiB7IGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNSZVZhbGlkYXRlT25TdWJtaXQgfSwgZm9ybVN0YXRlOiB7IGlzU3VibWl0dGVkIH0sIHRvdWNoZWRGaWVsZHNSZWYsIHJlYWRGb3JtU3RhdGVSZWYsIHJlUmVuZGVyLCBmaWVsZHNSZWYsIGZpZWxkQXJyYXlOYW1lc1JlZiwgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRJbnB1dFN0YXRlVmFsdWVdID0gdXNlU3RhdGUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XHJcbiAgICBjb25zdCBpc0NoZWNrYm94SW5wdXQgPSBpc0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgY29uc3Qgc2hvdWxkUmVWYWxpZGF0ZU9uQmx1ciA9IGlzT25CbHVyIHx8IGlzUmVWYWxpZGF0ZU9uQmx1cjtcclxuICAgIGNvbnN0IHJ1bGVzUmVmID0gdXNlUmVmKHJ1bGVzKTtcclxuICAgIGNvbnN0IG9uRm9jdXNSZWYgPSB1c2VSZWYob25Gb2N1cyk7XHJcbiAgICBjb25zdCBpc05vdEZpZWxkQXJyYXkgPSAhaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgIHJ1bGVzUmVmLmN1cnJlbnQgPSBydWxlcztcclxuICAgIGNvbnN0IHNob3VsZFZhbGlkYXRlID0gKCkgPT4gIXNraXBWYWxpZGF0aW9uKHtcclxuICAgICAgICBoYXNFcnJvcjogISFnZXQoZXJyb3JzUmVmLmN1cnJlbnQsIG5hbWUpLFxyXG4gICAgICAgIGlzT25CbHVyLFxyXG4gICAgICAgIGlzT25TdWJtaXQsXHJcbiAgICAgICAgaXNPbkNoYW5nZSxcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25TdWJtaXQsXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbW1vblRhc2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZ2V0SW5wdXRWYWx1ZShldmVudCwgaXNDaGVja2JveElucHV0KTtcclxuICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXZlbnRXcmFwcGVyID0gKGV2ZW50KSA9PiAoLi4uYXJnKSA9PiBzZXRWYWx1ZShuYW1lLCBjb21tb25UYXNrKGV2ZW50KGFyZykpLCBzaG91bGRWYWxpZGF0ZSgpKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjb21tb25UYXNrKGV2ZW50KTtcclxuICAgICAgICBzZXRWYWx1ZShuYW1lLCBkYXRhLCBzaG91bGRWYWxpZGF0ZSgpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlckZpZWxkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOb3RGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZ2lzdGVyKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7IG5hbWUsIGZvY3VzOiBvbkZvY3VzUmVmLmN1cnJlbnQgfSwgVkFMVUUsIHtcclxuICAgICAgICAgICAgc2V0KGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSwgcnVsZXNSZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXHJcbiAgICAgICAgaXNOb3RGaWVsZEFycmF5LFxyXG4gICAgICAgIGZpZWxkc1JlZixcclxuICAgICAgICBydWxlc1JlZixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG9uRm9jdXNSZWYsXHJcbiAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLFxyXG4gICAgXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgICFpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpICYmIHVucmVnaXN0ZXIobmFtZSk7XHJcbiAgICB9LCBbdW5yZWdpc3RlciwgbmFtZSwgZmllbGRBcnJheU5hbWVzUmVmXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZ2lzdGVyRmllbGQoKTtcclxuICAgIH0sIFtyZWdpc3RlckZpZWxkXSk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNOb3RGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG5hbWUgfSwgcmVzdCksIChvbkNoYW5nZVxyXG4gICAgICAgID8geyBbb25DaGFuZ2VOYW1lXTogZXZlbnRXcmFwcGVyKG9uQ2hhbmdlKSB9XHJcbiAgICAgICAgOiB7IFtvbkNoYW5nZU5hbWVdOiBoYW5kbGVDaGFuZ2UgfSkpLCB7IFtvbkJsdXJOYW1lXTogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uQmx1cikge1xyXG4gICAgICAgICAgICAgICAgb25CbHVyKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJlxyXG4gICAgICAgICAgICAgICAgIWdldCh0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFJlVmFsaWRhdGVPbkJsdXIpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJWYWxpZGF0aW9uKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB9KSwgeyBbdmFsdWVOYW1lIHx8IChpc0NoZWNrYm94SW5wdXQgPyAnY2hlY2tlZCcgOiBWQUxVRSldOiB2YWx1ZSB9KTtcclxuICAgIHJldHVybiBpc1ZhbGlkRWxlbWVudChJbm5lckNvbXBvbmVudClcclxuICAgICAgICA/IGNsb25lRWxlbWVudChJbm5lckNvbXBvbmVudCwgcHJvcHMpXHJcbiAgICAgICAgOiBjcmVhdGVFbGVtZW50KElubmVyQ29tcG9uZW50LCBwcm9wcyk7XHJcbn07XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IChfYSkgPT4ge1xyXG4gICAgdmFyIHsgYXM6IElubmVyQ29tcG9uZW50LCBlcnJvcnMsIG5hbWUsIG1lc3NhZ2UsIGNoaWxkcmVuIH0gPSBfYSwgcmVzdCA9IF9fcmVzdChfYSwgW1wiYXNcIiwgXCJlcnJvcnNcIiwgXCJuYW1lXCIsIFwibWVzc2FnZVwiLCBcImNoaWxkcmVuXCJdKTtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzIHx8IG1ldGhvZHMuZXJyb3JzLCBuYW1lKTtcclxuICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbWVzc2FnZTogbWVzc2FnZUZyb21SZWdpc3RlciwgdHlwZXMgfSA9IGVycm9yO1xyXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChJbm5lckNvbXBvbmVudCA/IHJlc3QgOiB7fSkpLCB7IGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgICAgICA/IGNoaWxkcmVuKHsgbWVzc2FnZTogbWVzc2FnZUZyb21SZWdpc3RlciB8fCBtZXNzYWdlLCBtZXNzYWdlczogdHlwZXMgfSlcclxuICAgICAgICAgICAgOiBtZXNzYWdlRnJvbVJlZ2lzdGVyIHx8IG1lc3NhZ2UgfSk7XHJcbiAgICByZXR1cm4gSW5uZXJDb21wb25lbnQgPyAoaXNWYWxpZEVsZW1lbnQoSW5uZXJDb21wb25lbnQpID8gKGNsb25lRWxlbWVudChJbm5lckNvbXBvbmVudCwgcHJvcHMpKSA6IChjcmVhdGVFbGVtZW50KElubmVyQ29tcG9uZW50LCBwcm9wcykpKSA6IChjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKTtcclxufTtcblxuZXhwb3J0IHsgQ29udHJvbGxlciwgRXJyb3JNZXNzYWdlLCBGb3JtQ29udGV4dCwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQgfTtcbiIsImlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmVhY3QtaW5wdXQtbWFzay5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9yZWFjdC1pbnB1dC1tYXNrLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncmVhY3QnKSk7XG52YXIgcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBpbnZhcmlhbnQgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnaW52YXJpYW50JykpO1xudmFyIHdhcm5pbmcgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnd2FybmluZycpKTtcblxuZnVuY3Rpb24gX2RlZmF1bHRzMihvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuXG4gIF9kZWZhdWx0czIoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRTZWxlY3Rpb24oaW5wdXQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gaW5wdXQgJiYgJ3NlbGVjdGlvbkVuZCcgaW4gaW5wdXQpIHtcbiAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0O1xuICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmFuZ2UgPSBpbnB1dC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICByYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIHN0YXJ0KTtcbiAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBlbmQgLSBzdGFydCk7XG4gICAgcmFuZ2Uuc2VsZWN0KCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldElucHV0U2VsZWN0aW9uKGlucHV0KSB7XG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAwO1xuXG4gIGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIGlucHV0ICYmICdzZWxlY3Rpb25FbmQnIGluIGlucHV0KSB7XG4gICAgc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG5cbiAgICBpZiAocmFuZ2UucGFyZW50RWxlbWVudCgpID09PSBpbnB1dCkge1xuICAgICAgc3RhcnQgPSAtcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgIGVuZCA9IC1yYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBlbmQ6IGVuZCxcbiAgICBsZW5ndGg6IGVuZCAtIHN0YXJ0XG4gIH07XG59XG5cbnZhciBkZWZhdWx0Rm9ybWF0Q2hhcnMgPSB7XG4gICc5JzogJ1swLTldJyxcbiAgJ2EnOiAnW0EtWmEtel0nLFxuICAnKic6ICdbQS1aYS16MC05XSdcbn07XG52YXIgZGVmYXVsdE1hc2tDaGFyID0gJ18nO1xuXG5mdW5jdGlvbiBwYXJzZU1hc2sgKG1hc2ssIG1hc2tDaGFyLCBmb3JtYXRDaGFycykge1xuICB2YXIgcGFyc2VkTWFza1N0cmluZyA9ICcnO1xuICB2YXIgcHJlZml4ID0gJyc7XG4gIHZhciBsYXN0RWRpdGFibGVQb3NpdGlvbiA9IG51bGw7XG4gIHZhciBwZXJtYW5lbnRzID0gW107XG5cbiAgaWYgKG1hc2tDaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICBtYXNrQ2hhciA9IGRlZmF1bHRNYXNrQ2hhcjtcbiAgfVxuXG4gIGlmIChmb3JtYXRDaGFycyA9PSBudWxsKSB7XG4gICAgZm9ybWF0Q2hhcnMgPSBkZWZhdWx0Rm9ybWF0Q2hhcnM7XG4gIH1cblxuICBpZiAoIW1hc2sgfHwgdHlwZW9mIG1hc2sgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hc2tDaGFyOiBtYXNrQ2hhcixcbiAgICAgIGZvcm1hdENoYXJzOiBmb3JtYXRDaGFycyxcbiAgICAgIG1hc2s6IG51bGwsXG4gICAgICBwcmVmaXg6IG51bGwsXG4gICAgICBsYXN0RWRpdGFibGVQb3NpdGlvbjogbnVsbCxcbiAgICAgIHBlcm1hbmVudHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc1Blcm1hbmVudCA9IGZhbHNlO1xuICBtYXNrLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcbiAgICBpZiAoIWlzUGVybWFuZW50ICYmIGNoYXJhY3RlciA9PT0gJ1xcXFwnKSB7XG4gICAgICBpc1Blcm1hbmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1Blcm1hbmVudCB8fCAhZm9ybWF0Q2hhcnNbY2hhcmFjdGVyXSkge1xuICAgICAgICBwZXJtYW5lbnRzLnB1c2gocGFyc2VkTWFza1N0cmluZy5sZW5ndGgpO1xuXG4gICAgICAgIGlmIChwYXJzZWRNYXNrU3RyaW5nLmxlbmd0aCA9PT0gcGVybWFuZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcHJlZml4ICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdEVkaXRhYmxlUG9zaXRpb24gPSBwYXJzZWRNYXNrU3RyaW5nLmxlbmd0aCArIDE7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZE1hc2tTdHJpbmcgKz0gY2hhcmFjdGVyO1xuICAgICAgaXNQZXJtYW5lbnQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG1hc2tDaGFyOiBtYXNrQ2hhcixcbiAgICBmb3JtYXRDaGFyczogZm9ybWF0Q2hhcnMsXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgbWFzazogcGFyc2VkTWFza1N0cmluZyxcbiAgICBsYXN0RWRpdGFibGVQb3NpdGlvbjogbGFzdEVkaXRhYmxlUG9zaXRpb24sXG4gICAgcGVybWFuZW50czogcGVybWFuZW50c1xuICB9O1xufVxuXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IFtcImVycm9yXCIsIHsgZnVuY3Rpb25zOiBmYWxzZSB9XSAqL1xuZnVuY3Rpb24gaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHBvcykge1xuICByZXR1cm4gbWFza09wdGlvbnMucGVybWFuZW50cy5pbmRleE9mKHBvcykgIT09IC0xO1xufVxuZnVuY3Rpb24gaXNBbGxvd2VkQ2hhcmFjdGVyKG1hc2tPcHRpb25zLCBwb3MsIGNoYXJhY3Rlcikge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBmb3JtYXRDaGFycyA9IG1hc2tPcHRpb25zLmZvcm1hdENoYXJzO1xuXG4gIGlmICghY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBwb3MpKSB7XG4gICAgcmV0dXJuIG1hc2tbcG9zXSA9PT0gY2hhcmFjdGVyO1xuICB9XG5cbiAgdmFyIHJ1bGVDaGFyID0gbWFza1twb3NdO1xuICB2YXIgY2hhclJ1bGUgPSBmb3JtYXRDaGFyc1tydWxlQ2hhcl07XG4gIHJldHVybiBuZXcgUmVnRXhwKGNoYXJSdWxlKS50ZXN0KGNoYXJhY3Rlcik7XG59XG5mdW5jdGlvbiBpc0VtcHR5KG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoJycpLmV2ZXJ5KGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGkpIHtcbiAgICByZXR1cm4gaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGkpIHx8ICFpc0FsbG93ZWRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0RmlsbGVkTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICB2YXIgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA+IHByZWZpeC5sZW5ndGggJiYgaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHZhbHVlLmxlbmd0aCAtIDEpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICB2YXIgZmlsbGVkTGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gdmFsdWUubGVuZ3RoOyBpID49IHByZWZpeC5sZW5ndGg7IGktLSkge1xuICAgIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZVtpXTtcbiAgICB2YXIgaXNFbnRlcmVkQ2hhcmFjdGVyID0gIWlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpKSAmJiBpc0FsbG93ZWRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG5cbiAgICBpZiAoaXNFbnRlcmVkQ2hhcmFjdGVyKSB7XG4gICAgICBmaWxsZWRMZW5ndGggPSBpICsgMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWxsZWRMZW5ndGg7XG59XG5mdW5jdGlvbiBpc0ZpbGxlZChtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIGdldEZpbGxlZExlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUpID09PSBtYXNrT3B0aW9ucy5tYXNrLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICB2YXIgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG4gIGlmICghbWFza0NoYXIpIHtcbiAgICB2YWx1ZSA9IGluc2VydFN0cmluZyhtYXNrT3B0aW9ucywgJycsIHZhbHVlLCAwKTtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IHByZWZpeDtcbiAgICB9XG5cbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoIDwgbWFzay5sZW5ndGggJiYgaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHZhbHVlLmxlbmd0aCkpIHtcbiAgICAgIHZhbHVlICs9IG1hc2tbdmFsdWUubGVuZ3RoXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICB2YXIgZW1wdHlWYWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCAnJyk7XG4gICAgcmV0dXJuIGluc2VydFN0cmluZyhtYXNrT3B0aW9ucywgZW1wdHlWYWx1ZSwgdmFsdWUsIDApO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgdmFsdWUgKz0gbWFza1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gbWFza0NoYXI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY2xlYXJSYW5nZShtYXNrT3B0aW9ucywgdmFsdWUsIHN0YXJ0LCBsZW4pIHtcbiAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuO1xuICB2YXIgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuICB2YXIgYXJyYXlWYWx1ZSA9IHZhbHVlLnNwbGl0KCcnKTtcblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgLy8gcmVtb3ZlIGFueSBwZXJtYW5lbnQgY2hhcnMgYWZ0ZXIgY2xlYXIgcmFuZ2UsIHRoZXkgd2lsbCBiZSBhZGRlZCBiYWNrIGJ5IGZvcm1hdFZhbHVlXG4gICAgZm9yICh2YXIgaSA9IGVuZDsgaSA8IGFycmF5VmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgICAgYXJyYXlWYWx1ZVtpXSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0ID0gTWF0aC5tYXgocHJlZml4Lmxlbmd0aCwgc3RhcnQpO1xuICAgIGFycmF5VmFsdWUuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCk7XG4gICAgdmFsdWUgPSBhcnJheVZhbHVlLmpvaW4oJycpO1xuICAgIHJldHVybiBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5VmFsdWUubWFwKGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGkpIHtcbiAgICBpZiAoaSA8IHN0YXJ0IHx8IGkgPj0gZW5kKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGlmIChpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgIHJldHVybiBtYXNrW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBtYXNrQ2hhcjtcbiAgfSkuam9pbignJyk7XG59XG5mdW5jdGlvbiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIHZhbHVlLCBpbnNlcnRTdHIsIGluc2VydFBvc2l0aW9uKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG4gIHZhciBhcnJheUluc2VydFN0ciA9IGluc2VydFN0ci5zcGxpdCgnJyk7XG4gIHZhciBpc0lucHV0RmlsbGVkID0gaXNGaWxsZWQobWFza09wdGlvbnMsIHZhbHVlKTtcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBwb3MpIHx8IGNoYXJhY3RlciA9PT0gbWFza1twb3NdO1xuICB9O1xuXG4gIHZhciBpc1VzYWJsZUNoYXJhY3RlciA9IGZ1bmN0aW9uIGlzVXNhYmxlQ2hhcmFjdGVyKGNoYXJhY3RlciwgcG9zKSB7XG4gICAgcmV0dXJuICFtYXNrQ2hhciB8fCAhaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyICE9PSBtYXNrQ2hhcjtcbiAgfTtcblxuICBpZiAoIW1hc2tDaGFyICYmIGluc2VydFBvc2l0aW9uID4gdmFsdWUubGVuZ3RoKSB7XG4gICAgdmFsdWUgKz0gbWFzay5zbGljZSh2YWx1ZS5sZW5ndGgsIGluc2VydFBvc2l0aW9uKTtcbiAgfVxuXG4gIGFycmF5SW5zZXJ0U3RyLmV2ZXJ5KGZ1bmN0aW9uIChpbnNlcnRDaGFyYWN0ZXIpIHtcbiAgICB3aGlsZSAoIWlzVXNhYmxlUG9zaXRpb24oaW5zZXJ0UG9zaXRpb24sIGluc2VydENoYXJhY3RlcikpIHtcbiAgICAgIGlmIChpbnNlcnRQb3NpdGlvbiA+PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgKz0gbWFza1tpbnNlcnRQb3NpdGlvbl07XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNVc2FibGVDaGFyYWN0ZXIoaW5zZXJ0Q2hhcmFjdGVyLCBpbnNlcnRQb3NpdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc2VydFBvc2l0aW9uKys7IC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcblxuICAgICAgaWYgKGluc2VydFBvc2l0aW9uID49IG1hc2subGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaXNBbGxvd2VkID0gaXNBbGxvd2VkQ2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpbnNlcnRQb3NpdGlvbiwgaW5zZXJ0Q2hhcmFjdGVyKSB8fCBpbnNlcnRDaGFyYWN0ZXIgPT09IG1hc2tDaGFyO1xuXG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbnNlcnRQb3NpdGlvbiA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgaWYgKG1hc2tDaGFyIHx8IGlzSW5wdXRGaWxsZWQgfHwgaW5zZXJ0UG9zaXRpb24gPCBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5zZXJ0UG9zaXRpb24pICsgaW5zZXJ0Q2hhcmFjdGVyICsgdmFsdWUuc2xpY2UoaW5zZXJ0UG9zaXRpb24gKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5zZXJ0UG9zaXRpb24pICsgaW5zZXJ0Q2hhcmFjdGVyICsgdmFsdWUuc2xpY2UoaW5zZXJ0UG9zaXRpb24pO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghbWFza0NoYXIpIHtcbiAgICAgIHZhbHVlICs9IGluc2VydENoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBpbnNlcnRQb3NpdGlvbisrOyAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG5cbiAgICByZXR1cm4gaW5zZXJ0UG9zaXRpb24gPCBtYXNrLmxlbmd0aDtcbiAgfSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGdldEluc2VydFN0cmluZ0xlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUsIGluc2VydFN0ciwgaW5zZXJ0UG9zaXRpb24pIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcjtcbiAgdmFyIGFycmF5SW5zZXJ0U3RyID0gaW5zZXJ0U3RyLnNwbGl0KCcnKTtcbiAgdmFyIGluaXRpYWxJbnNlcnRQb3NpdGlvbiA9IGluc2VydFBvc2l0aW9uO1xuXG4gIHZhciBpc1VzYWJsZVBvc2l0aW9uID0gZnVuY3Rpb24gaXNVc2FibGVQb3NpdGlvbihwb3MsIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiAhaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyID09PSBtYXNrW3Bvc107XG4gIH07XG5cbiAgYXJyYXlJbnNlcnRTdHIuZXZlcnkoZnVuY3Rpb24gKGluc2VydENoYXJhY3Rlcikge1xuICAgIHdoaWxlICghaXNVc2FibGVQb3NpdGlvbihpbnNlcnRQb3NpdGlvbiwgaW5zZXJ0Q2hhcmFjdGVyKSkge1xuICAgICAgaW5zZXJ0UG9zaXRpb24rKzsgLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuXG4gICAgICBpZiAoaW5zZXJ0UG9zaXRpb24gPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0FsbG93ZWQgPSBpc0FsbG93ZWRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGluc2VydFBvc2l0aW9uLCBpbnNlcnRDaGFyYWN0ZXIpIHx8IGluc2VydENoYXJhY3RlciA9PT0gbWFza0NoYXI7XG5cbiAgICBpZiAoaXNBbGxvd2VkKSB7XG4gICAgICBpbnNlcnRQb3NpdGlvbisrO1xuICAgIH0gLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuXG5cbiAgICByZXR1cm4gaW5zZXJ0UG9zaXRpb24gPCBtYXNrLmxlbmd0aDtcbiAgfSk7XG4gIHJldHVybiBpbnNlcnRQb3NpdGlvbiAtIGluaXRpYWxJbnNlcnRQb3NpdGlvbjtcbn1cbmZ1bmN0aW9uIGdldExlZnRFZGl0YWJsZVBvc2l0aW9uKG1hc2tPcHRpb25zLCBwb3MpIHtcbiAgZm9yICh2YXIgaSA9IHBvczsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAoIWlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBnZXRSaWdodEVkaXRhYmxlUG9zaXRpb24obWFza09wdGlvbnMsIHBvcykge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2s7XG5cbiAgZm9yICh2YXIgaSA9IHBvczsgaSA8IG1hc2subGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoIWlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBnZXRTdHJpbmdWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlICYmIHZhbHVlICE9PSAwID8gJycgOiB2YWx1ZSArICcnO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2hhbmdlKG1hc2tPcHRpb25zLCB2YWx1ZSwgc2VsZWN0aW9uLCBwcmV2aW91c1ZhbHVlLCBwcmV2aW91c1NlbGVjdGlvbikge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXgsXG4gICAgICBsYXN0RWRpdGFibGVQb3NpdGlvbiA9IG1hc2tPcHRpb25zLmxhc3RFZGl0YWJsZVBvc2l0aW9uO1xuICB2YXIgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgdmFyIGVudGVyZWRTdHJpbmcgPSAnJztcbiAgdmFyIGZvcm1hdHRlZEVudGVyZWRTdHJpbmdMZW5ndGggPSAwO1xuICB2YXIgcmVtb3ZlZExlbmd0aCA9IDA7XG4gIHZhciBjdXJzb3JQb3NpdGlvbiA9IE1hdGgubWluKHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0LCBzZWxlY3Rpb24uc3RhcnQpO1xuXG4gIGlmIChzZWxlY3Rpb24uZW5kID4gcHJldmlvdXNTZWxlY3Rpb24uc3RhcnQpIHtcbiAgICBlbnRlcmVkU3RyaW5nID0gbmV3VmFsdWUuc2xpY2UocHJldmlvdXNTZWxlY3Rpb24uc3RhcnQsIHNlbGVjdGlvbi5lbmQpO1xuICAgIGZvcm1hdHRlZEVudGVyZWRTdHJpbmdMZW5ndGggPSBnZXRJbnNlcnRTdHJpbmdMZW5ndGgobWFza09wdGlvbnMsIHByZXZpb3VzVmFsdWUsIGVudGVyZWRTdHJpbmcsIGN1cnNvclBvc2l0aW9uKTtcblxuICAgIGlmICghZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCkge1xuICAgICAgcmVtb3ZlZExlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZWRMZW5ndGggPSBwcmV2aW91c1NlbGVjdGlvbi5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5ld1ZhbHVlLmxlbmd0aCA8IHByZXZpb3VzVmFsdWUubGVuZ3RoKSB7XG4gICAgcmVtb3ZlZExlbmd0aCA9IHByZXZpb3VzVmFsdWUubGVuZ3RoIC0gbmV3VmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlO1xuXG4gIGlmIChyZW1vdmVkTGVuZ3RoKSB7XG4gICAgaWYgKHJlbW92ZWRMZW5ndGggPT09IDEgJiYgIXByZXZpb3VzU2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgdmFyIGRlbGV0ZUZyb21SaWdodCA9IHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0ID09PSBzZWxlY3Rpb24uc3RhcnQ7XG4gICAgICBjdXJzb3JQb3NpdGlvbiA9IGRlbGV0ZUZyb21SaWdodCA/IGdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihtYXNrT3B0aW9ucywgc2VsZWN0aW9uLnN0YXJ0KSA6IGdldExlZnRFZGl0YWJsZVBvc2l0aW9uKG1hc2tPcHRpb25zLCBzZWxlY3Rpb24uc3RhcnQpO1xuICAgIH1cblxuICAgIG5ld1ZhbHVlID0gY2xlYXJSYW5nZShtYXNrT3B0aW9ucywgbmV3VmFsdWUsIGN1cnNvclBvc2l0aW9uLCByZW1vdmVkTGVuZ3RoKTtcbiAgfVxuXG4gIG5ld1ZhbHVlID0gaW5zZXJ0U3RyaW5nKG1hc2tPcHRpb25zLCBuZXdWYWx1ZSwgZW50ZXJlZFN0cmluZywgY3Vyc29yUG9zaXRpb24pO1xuICBjdXJzb3JQb3NpdGlvbiA9IGN1cnNvclBvc2l0aW9uICsgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aDtcblxuICBpZiAoY3Vyc29yUG9zaXRpb24gPj0gbWFzay5sZW5ndGgpIHtcbiAgICBjdXJzb3JQb3NpdGlvbiA9IG1hc2subGVuZ3RoO1xuICB9IGVsc2UgaWYgKGN1cnNvclBvc2l0aW9uIDwgcHJlZml4Lmxlbmd0aCAmJiAhZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCkge1xuICAgIGN1cnNvclBvc2l0aW9uID0gcHJlZml4Lmxlbmd0aDtcbiAgfSBlbHNlIGlmIChjdXJzb3JQb3NpdGlvbiA+PSBwcmVmaXgubGVuZ3RoICYmIGN1cnNvclBvc2l0aW9uIDwgbGFzdEVkaXRhYmxlUG9zaXRpb24gJiYgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCkge1xuICAgIGN1cnNvclBvc2l0aW9uID0gZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKG1hc2tPcHRpb25zLCBjdXJzb3JQb3NpdGlvbik7XG4gIH1cblxuICBuZXdWYWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCBuZXdWYWx1ZSk7XG5cbiAgaWYgKCFlbnRlcmVkU3RyaW5nKSB7XG4gICAgZW50ZXJlZFN0cmluZyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICBlbnRlcmVkU3RyaW5nOiBlbnRlcmVkU3RyaW5nLFxuICAgIHNlbGVjdGlvbjoge1xuICAgICAgc3RhcnQ6IGN1cnNvclBvc2l0aW9uLFxuICAgICAgZW5kOiBjdXJzb3JQb3NpdGlvblxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3dzUGhvbmVCcm93c2VyKCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgcGhvbmUgPSBuZXcgUmVnRXhwKCdwaG9uZScsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiB3aW5kb3dzLnRlc3QodWEpICYmIHBob25lLnRlc3QodWEpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRDYW5jZWxBbmltYXRpb25GcmFtZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKGZuKSB7XG4gIHZhciBoYXNDYW5jZWxBbmltYXRpb25GcmFtZSA9ICEhZ2V0Q2FuY2VsQW5pbWF0aW9uRnJhbWUoKTtcbiAgdmFyIGRlZmVyRm47XG5cbiAgaWYgKGhhc0NhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZGVmZXJGbiA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICB9IGVsc2Uge1xuICAgIGRlZmVyRm4gPSBmdW5jdGlvbiBkZWZlckZuKCkge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDEwMDAgLyA2MCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBkZWZlckZuKGZuKTtcbn1cbmZ1bmN0aW9uIGNhbmNlbERlZmVyKGRlZmVySWQpIHtcbiAgdmFyIGNhbmNlbEZuID0gZ2V0Q2FuY2VsQW5pbWF0aW9uRnJhbWUoKSB8fCBjbGVhclRpbWVvdXQ7XG4gIGNhbmNlbEZuKGRlZmVySWQpO1xufVxuXG52YXIgSW5wdXRFbGVtZW50ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKElucHV0RWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXRFbGVtZW50KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIF90aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICBfdGhpcy5wcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XG4gICAgX3RoaXMuc2VsZWN0aW9uRGVmZXJJZCA9IG51bGw7XG4gICAgX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3BEZWZlcklkID0gbnVsbDtcblxuICAgIF90aGlzLnNhdmVTZWxlY3Rpb25Mb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucHJldmlvdXNTZWxlY3Rpb24gPSBfdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIF90aGlzLnNhdmVTZWxlY3Rpb25Mb29wRGVmZXJJZCA9IGRlZmVyKF90aGlzLnNhdmVTZWxlY3Rpb25Mb29wKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucnVuU2F2ZVNlbGVjdGlvbkxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3BEZWZlcklkID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNhdmVTZWxlY3Rpb25Mb29wKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0b3BTYXZlU2VsZWN0aW9uTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zYXZlU2VsZWN0aW9uTG9vcERlZmVySWQgIT09IG51bGwpIHtcbiAgICAgICAgY2FuY2VsRGVmZXIoX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3BEZWZlcklkKTtcbiAgICAgICAgX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3BEZWZlcklkID0gbnVsbDtcbiAgICAgICAgX3RoaXMucHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRJbnB1dERPTU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnB1dCA9IHJlYWN0RG9tLmZpbmRET01Ob2RlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgIHZhciBpc0RPTU5vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dCBpbnN0YW5jZW9mIHdpbmRvdy5FbGVtZW50OyAvLyB3b3JrYXJvdW5kIGZvciByZWFjdC10ZXN0LXJlbmRlcmVyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xNDdcblxuICAgICAgaWYgKGlucHV0ICYmICFpc0RPTU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnB1dC5ub2RlTmFtZSAhPT0gJ0lOUFVUJykge1xuICAgICAgICBpbnB1dCA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWFjdC1pbnB1dC1tYXNrOiBpbnB1dENvbXBvbmVudCBkb2VzblxcJ3QgY29udGFpbiBpbnB1dCBub2RlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0RE9NTm9kZSgpO1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLnNldElucHV0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0RE9NTm9kZSgpO1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfTtcblxuICAgIF90aGlzLnNldEN1cnNvclRvRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZpbGxlZExlbmd0aCA9IGdldEZpbGxlZExlbmd0aChfdGhpcy5tYXNrT3B0aW9ucywgX3RoaXMudmFsdWUpO1xuICAgICAgdmFyIHBvcyA9IGdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihfdGhpcy5tYXNrT3B0aW9ucywgZmlsbGVkTGVuZ3RoKTtcblxuICAgICAgaWYgKHBvcyAhPT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zZXRDdXJzb3JQb3NpdGlvbihwb3MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zZXRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgb3B0aW9ucykge1xuICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0RE9NTm9kZSgpO1xuXG4gICAgICB2YXIgaXNGb2N1c2VkID0gX3RoaXMuaXNGb2N1c2VkKCk7IC8vIGRvbid0IGNoYW5nZSBzZWxlY3Rpb24gb24gdW5mb2N1c2VkIGlucHV0XG4gICAgICAvLyBiZWNhdXNlIFNhZmFyaSBzZXRzIGZvY3VzIG9uIHNlbGVjdGlvbiBjaGFuZ2UgKCMxNTQpXG5cblxuICAgICAgaWYgKCFpbnB1dCB8fCAhaXNGb2N1c2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgICBkZWZlcnJlZCA9IF9vcHRpb25zLmRlZmVycmVkO1xuXG4gICAgICBpZiAoIWRlZmVycmVkKSB7XG4gICAgICAgIHNldElucHV0U2VsZWN0aW9uKGlucHV0LCBzdGFydCwgZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnNlbGVjdGlvbkRlZmVySWQgIT09IG51bGwpIHtcbiAgICAgICAgY2FuY2VsRGVmZXIoX3RoaXMuc2VsZWN0aW9uRGVmZXJJZCk7XG4gICAgICB9IC8vIGRlZmVycmVkIHNlbGVjdGlvbiB1cGRhdGUgaXMgcmVxdWlyZWQgZm9yIHByZS1Mb2xsaXBvcCBBbmRyb2lkIGJyb3dzZXIsXG4gICAgICAvLyBidXQgZm9yIGNvbnNpc3RlbnQgYmVoYXZpb3Igd2UgZG8gaXQgZm9yIGFsbCBicm93c2Vyc1xuXG5cbiAgICAgIF90aGlzLnNlbGVjdGlvbkRlZmVySWQgPSBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNlbGVjdGlvbkRlZmVySWQgPSBudWxsO1xuICAgICAgICBzZXRJbnB1dFNlbGVjdGlvbihpbnB1dCwgc3RhcnQsIGVuZCk7XG4gICAgICB9KTtcbiAgICAgIF90aGlzLnByZXZpb3VzU2VsZWN0aW9uID0ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIGVuZDogZW5kLFxuICAgICAgICBsZW5ndGg6IE1hdGguYWJzKGVuZCAtIHN0YXJ0KVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCk7XG5cbiAgICAgIHJldHVybiBnZXRJbnB1dFNlbGVjdGlvbihpbnB1dCk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEN1cnNvclBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmdldFNlbGVjdGlvbigpLnN0YXJ0O1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRDdXJzb3JQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgIF90aGlzLnNldFNlbGVjdGlvbihwb3MsIHBvcyk7XG4gICAgfTtcblxuICAgIF90aGlzLmlzRm9jdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5mb2N1c2VkO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRCZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZUNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrT3B0aW9ucyA9IF90aGlzLm1hc2tPcHRpb25zLFxuICAgICAgICAgIG1hc2sgPSBfdGhpcyRtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgICAgIG1hc2tDaGFyID0gX3RoaXMkbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICAgICAgcGVybWFuZW50cyA9IF90aGlzJG1hc2tPcHRpb25zLnBlcm1hbmVudHMsXG4gICAgICAgICAgZm9ybWF0Q2hhcnMgPSBfdGhpcyRtYXNrT3B0aW9ucy5mb3JtYXRDaGFycztcbiAgICAgIHZhciBhbHdheXNTaG93TWFzayA9IF90aGlzLnByb3BzLmFsd2F5c1Nob3dNYXNrO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgbWFza0NoYXI6IG1hc2tDaGFyLFxuICAgICAgICBwZXJtYW5lbnRzOiBwZXJtYW5lbnRzLFxuICAgICAgICBhbHdheXNTaG93TWFzazogISFhbHdheXNTaG93TWFzayxcbiAgICAgICAgZm9ybWF0Q2hhcnM6IGZvcm1hdENoYXJzXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5pc0lucHV0QXV0b2ZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgc2VsZWN0aW9uLCBwcmV2aW91c1ZhbHVlLCBwcmV2aW91c1NlbGVjdGlvbikge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCk7IC8vIG9ubHkgY2hlY2sgZm9yIHBvc2l0aXZlIG1hdGNoIGJlY2F1c2UgaXQgd2lsbCBiZSBmYWxzZSBuZWdhdGl2ZVxuICAgICAgLy8gaW4gY2FzZSBvZiBhdXRvZmlsbCBzaW11bGF0aW9uIGluIHRlc3RzXG4gICAgICAvL1xuICAgICAgLy8gaW5wdXQubWF0Y2hlcyB0aHJvd3MgYW4gZXhjZXB0aW9uIGlmIHNlbGVjdG9yIGlzbid0IHN1cHBvcnRlZFxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaGVzKCc6LXdlYmtpdC1hdXRvZmlsbCcpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9IC8vIGlmIGlucHV0IGlzbid0IGZvY3VzZWQgdGhlbiBjaGFuZ2UgZXZlbnQgbXVzdCBoYXZlIGJlZW4gdHJpZ2dlcmVkXG4gICAgICAvLyBlaXRoZXIgYnkgYXV0b2ZpbGwgb3IgZXZlbnQgc2ltdWxhdGlvbiBpbiB0ZXN0c1xuXG5cbiAgICAgIGlmICghX3RoaXMuZm9jdXNlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gaWYgY3Vyc29yIGhhcyBtb3ZlZCB0byB0aGUgZW5kIHdoaWxlIHByZXZpb3VzU2VsZWN0aW9uIGZvcmJpZHMgaXRcbiAgICAgIC8vIHRoZW4gaXQgbXVzdCBiZSBhdXRvZmlsbFxuXG5cbiAgICAgIHJldHVybiBwcmV2aW91c1NlbGVjdGlvbi5lbmQgPCBwcmV2aW91c1ZhbHVlLmxlbmd0aCAmJiBzZWxlY3Rpb24uZW5kID09PSB2YWx1ZS5sZW5ndGg7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksXG4gICAgICAgICAgYmVmb3JlUGFzdGVTdGF0ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5iZWZvcmVQYXN0ZVN0YXRlO1xuXG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplMiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gX2Fzc2VydFRoaXNJbml0aWFsaXplMi5wcmV2aW91c1NlbGVjdGlvbjtcblxuICAgICAgdmFyIGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlID0gX3RoaXMucHJvcHMuYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2U7XG5cbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzLmdldElucHV0VmFsdWUoKTtcblxuICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSBfdGhpcy52YWx1ZTtcblxuICAgICAgdmFyIHNlbGVjdGlvbiA9IF90aGlzLmdldFNlbGVjdGlvbigpOyAvLyBhdXRvZmlsbCByZXBsYWNlcyBlbnRpcmUgdmFsdWUsIGlnbm9yZSBvbGQgb25lXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xMTNcblxuXG4gICAgICBpZiAoX3RoaXMuaXNJbnB1dEF1dG9maWxsZWQodmFsdWUsIHNlbGVjdGlvbiwgcHJldmlvdXNWYWx1ZSwgcHJldmlvdXNTZWxlY3Rpb24pKSB7XG4gICAgICAgIHByZXZpb3VzVmFsdWUgPSBmb3JtYXRWYWx1ZShfdGhpcy5tYXNrT3B0aW9ucywgJycpO1xuICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHtcbiAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgbGVuZ3RoOiAwXG4gICAgICAgIH07XG4gICAgICB9IC8vIHNldCB2YWx1ZSBhbmQgc2VsZWN0aW9uIGFzIGlmIHdlIGhhdmVuJ3RcbiAgICAgIC8vIGNsZWFyZWQgaW5wdXQgaW4gb25QYXN0ZSBoYW5kbGVyXG5cblxuICAgICAgaWYgKGJlZm9yZVBhc3RlU3RhdGUpIHtcbiAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBiZWZvcmVQYXN0ZVN0YXRlLnNlbGVjdGlvbjtcbiAgICAgICAgcHJldmlvdXNWYWx1ZSA9IGJlZm9yZVBhc3RlU3RhdGUudmFsdWU7XG4gICAgICAgIHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICBzdGFydDogcHJldmlvdXNTZWxlY3Rpb24uc3RhcnQgKyB2YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgZW5kOiBwcmV2aW91c1NlbGVjdGlvbi5zdGFydCArIHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfTtcbiAgICAgICAgdmFsdWUgPSBwcmV2aW91c1ZhbHVlLnNsaWNlKDAsIHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0KSArIHZhbHVlICsgcHJldmlvdXNWYWx1ZS5zbGljZShwcmV2aW91c1NlbGVjdGlvbi5lbmQpO1xuICAgICAgICBfdGhpcy5iZWZvcmVQYXN0ZVN0YXRlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZWRTdGF0ZSA9IHByb2Nlc3NDaGFuZ2UoX3RoaXMubWFza09wdGlvbnMsIHZhbHVlLCBzZWxlY3Rpb24sIHByZXZpb3VzVmFsdWUsIHByZXZpb3VzU2VsZWN0aW9uKTtcbiAgICAgIHZhciBlbnRlcmVkU3RyaW5nID0gY2hhbmdlZFN0YXRlLmVudGVyZWRTdHJpbmc7XG4gICAgICB2YXIgbmV3U2VsZWN0aW9uID0gY2hhbmdlZFN0YXRlLnNlbGVjdGlvbjtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGNoYW5nZWRTdGF0ZS52YWx1ZTtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24oYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UpKSB7XG4gICAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2Uoe1xuICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBzZWxlY3Rpb246IG5ld1NlbGVjdGlvblxuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZpb3VzVmFsdWUsXG4gICAgICAgICAgc2VsZWN0aW9uOiBwcmV2aW91c1NlbGVjdGlvblxuICAgICAgICB9LCBlbnRlcmVkU3RyaW5nLCBfdGhpcy5nZXRCZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZUNvbmZpZygpKTtcbiAgICAgICAgbmV3VmFsdWUgPSBtb2RpZmllZFZhbHVlLnZhbHVlO1xuICAgICAgICBuZXdTZWxlY3Rpb24gPSBtb2RpZmllZFZhbHVlLnNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKF90aGlzLnByb3BzLm9uQ2hhbmdlKSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5pc1dpbmRvd3NQaG9uZUJyb3dzZXIpIHtcbiAgICAgICAgX3RoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbi5zdGFydCwgbmV3U2VsZWN0aW9uLmVuZCwge1xuICAgICAgICAgIGRlZmVycmVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbi5zdGFydCwgbmV3U2VsZWN0aW9uLmVuZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSA9IF90aGlzLnByb3BzLmJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlO1xuICAgICAgdmFyIF90aGlzJG1hc2tPcHRpb25zMiA9IF90aGlzLm1hc2tPcHRpb25zLFxuICAgICAgICAgIG1hc2sgPSBfdGhpcyRtYXNrT3B0aW9uczIubWFzayxcbiAgICAgICAgICBwcmVmaXggPSBfdGhpcyRtYXNrT3B0aW9uczIucHJlZml4O1xuICAgICAgX3RoaXMuZm9jdXNlZCA9IHRydWU7IC8vIGlmIGF1dG9Gb2N1cyBpcyBzZXQsIG9uRm9jdXMgdHJpZ2dlcnMgYmVmb3JlIGNvbXBvbmVudERpZE1vdW50XG5cbiAgICAgIF90aGlzLm1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAobWFzaykge1xuICAgICAgICBpZiAoIV90aGlzLnZhbHVlKSB7XG4gICAgICAgICAgdmFyIGVtcHR5VmFsdWUgPSBmb3JtYXRWYWx1ZShfdGhpcy5tYXNrT3B0aW9ucywgcHJlZml4KTtcbiAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBmb3JtYXRWYWx1ZShfdGhpcy5tYXNrT3B0aW9ucywgZW1wdHlWYWx1ZSk7XG4gICAgICAgICAgdmFyIGZpbGxlZExlbmd0aCA9IGdldEZpbGxlZExlbmd0aChfdGhpcy5tYXNrT3B0aW9ucywgbmV3VmFsdWUpO1xuICAgICAgICAgIHZhciBjdXJzb3JQb3NpdGlvbiA9IGdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihfdGhpcy5tYXNrT3B0aW9ucywgZmlsbGVkTGVuZ3RoKTtcbiAgICAgICAgICB2YXIgbmV3U2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgc3RhcnQ6IGN1cnNvclBvc2l0aW9uLFxuICAgICAgICAgICAgZW5kOiBjdXJzb3JQb3NpdGlvblxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSkpIHtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2Uoe1xuICAgICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgIHNlbGVjdGlvbjogbmV3U2VsZWN0aW9uXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uOiBudWxsXG4gICAgICAgICAgICB9LCBudWxsLCBfdGhpcy5nZXRCZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZUNvbmZpZygpKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbW9kaWZpZWRWYWx1ZS52YWx1ZTtcbiAgICAgICAgICAgIG5ld1NlbGVjdGlvbiA9IG1vZGlmaWVkVmFsdWUuc2VsZWN0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpc0lucHV0VmFsdWVDaGFuZ2VkID0gbmV3VmFsdWUgIT09IF90aGlzLmdldElucHV0VmFsdWUoKTtcblxuICAgICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCAmJiBpc0Z1bmN0aW9uKF90aGlzLnByb3BzLm9uQ2hhbmdlKSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24uc3RhcnQsIG5ld1NlbGVjdGlvbi5lbmQpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEZpbGxlZExlbmd0aChfdGhpcy5tYXNrT3B0aW9ucywgX3RoaXMudmFsdWUpIDwgX3RoaXMubWFza09wdGlvbnMubWFzay5sZW5ndGgpIHtcbiAgICAgICAgICBfdGhpcy5zZXRDdXJzb3JUb0VuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucnVuU2F2ZVNlbGVjdGlvbkxvb3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24oX3RoaXMucHJvcHMub25Gb2N1cykpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlID0gX3RoaXMucHJvcHMuYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2U7XG4gICAgICB2YXIgbWFzayA9IF90aGlzLm1hc2tPcHRpb25zLm1hc2s7XG5cbiAgICAgIF90aGlzLnN0b3BTYXZlU2VsZWN0aW9uTG9vcCgpO1xuXG4gICAgICBfdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICAgIGlmIChtYXNrICYmICFfdGhpcy5wcm9wcy5hbHdheXNTaG93TWFzayAmJiBpc0VtcHR5KF90aGlzLm1hc2tPcHRpb25zLCBfdGhpcy52YWx1ZSkpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gJyc7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UpKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSh7XG4gICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBzZWxlY3Rpb246IG51bGxcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWx1ZTogX3RoaXMudmFsdWUsXG4gICAgICAgICAgICBzZWxlY3Rpb246IF90aGlzLnByZXZpb3VzU2VsZWN0aW9uXG4gICAgICAgICAgfSwgbnVsbCwgX3RoaXMuZ2V0QmVmb3JlTWFza2VkVmFsdWVDaGFuZ2VDb25maWcoKSk7XG4gICAgICAgICAgbmV3VmFsdWUgPSBtb2RpZmllZFZhbHVlLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlzSW5wdXRWYWx1ZUNoYW5nZWQgPSBuZXdWYWx1ZSAhPT0gX3RoaXMuZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgX3RoaXMuc2V0SW5wdXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCAmJiBpc0Z1bmN0aW9uKF90aGlzLnByb3BzLm9uQ2hhbmdlKSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihfdGhpcy5wcm9wcy5vbkJsdXIpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyB0aW55IHVuaW50ZW50aW9uYWwgbW91c2UgbW92ZW1lbnRzIGNhbiBicmVhayBjdXJzb3JcbiAgICAgIC8vIHBvc2l0aW9uIG9uIGZvY3VzLCBzbyB3ZSBoYXZlIHRvIHJlc3RvcmUgaXQgaW4gdGhhdCBjYXNlXG4gICAgICAvL1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Nhbm5pYXNzaW4vcmVhY3QtaW5wdXQtbWFzay9pc3N1ZXMvMTA4XG4gICAgICBpZiAoIV90aGlzLmZvY3VzZWQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBfdGhpcy5tb3VzZURvd25YID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgX3RoaXMubW91c2VEb3duWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgIF90aGlzLm1vdXNlRG93blRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICB2YXIgbW91c2VVcEhhbmRsZXIgPSBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihtb3VzZVVwRXZlbnQpIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgICAgICAgaWYgKCFfdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGRlbHRhWCA9IE1hdGguYWJzKG1vdXNlVXBFdmVudC5jbGllbnRYIC0gX3RoaXMubW91c2VEb3duWCk7XG4gICAgICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKG1vdXNlVXBFdmVudC5jbGllbnRZIC0gX3RoaXMubW91c2VEb3duWSk7XG4gICAgICAgICAgdmFyIGF4aXNEZWx0YSA9IE1hdGgubWF4KGRlbHRhWCwgZGVsdGFZKTtcblxuICAgICAgICAgIHZhciB0aW1lRGVsdGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF90aGlzLm1vdXNlRG93blRpbWU7XG5cbiAgICAgICAgICBpZiAoYXhpc0RlbHRhIDw9IDEwICYmIHRpbWVEZWx0YSA8PSAyMDAgfHwgYXhpc0RlbHRhIDw9IDUgJiYgdGltZURlbHRhIDw9IDMwMCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0Q3Vyc29yVG9FbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24oX3RoaXMucHJvcHMub25Nb3VzZURvd24pKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25QYXN0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oX3RoaXMucHJvcHMub25QYXN0ZSkpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25QYXN0ZShldmVudCk7XG4gICAgICB9IC8vIGV2ZW50LmNsaXBib2FyZERhdGEgbWlnaHQgbm90IHdvcmsgaW4gQW5kcm9pZCBicm93c2VyXG4gICAgICAvLyBjbGVhbmluZyBpbnB1dCB0byBnZXQgcmF3IHRleHQgaW5zaWRlIG9uQ2hhbmdlIGhhbmRsZXJcblxuXG4gICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgX3RoaXMuYmVmb3JlUGFzdGVTdGF0ZSA9IHtcbiAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0SW5wdXRWYWx1ZSgpLFxuICAgICAgICAgIHNlbGVjdGlvbjogX3RoaXMuZ2V0U2VsZWN0aW9uKClcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy5zZXRJbnB1dFZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmNoaWxkcmVuID09IG51bGwgJiYgaXNGdW5jdGlvbihfdGhpcy5wcm9wcy5pbnB1dFJlZikpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuaW5wdXRSZWYocmVmKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF9tYXNrID0gcHJvcHMubWFzayxcbiAgICAgICAgX21hc2tDaGFyID0gcHJvcHMubWFza0NoYXIsXG4gICAgICAgIF9mb3JtYXRDaGFycyA9IHByb3BzLmZvcm1hdENoYXJzLFxuICAgICAgICBfYWx3YXlzU2hvd01hc2sgPSBwcm9wcy5hbHdheXNTaG93TWFzayxcbiAgICAgICAgX2JlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlID0gcHJvcHMuYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2U7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgX3ZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgX3RoaXMubWFza09wdGlvbnMgPSBwYXJzZU1hc2soX21hc2ssIF9tYXNrQ2hhciwgX2Zvcm1hdENoYXJzKTtcblxuICAgIGlmIChkZWZhdWx0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKF92YWx1ZSA9PSBudWxsKSB7XG4gICAgICBfdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIF9uZXdWYWx1ZSA9IGdldFN0cmluZ1ZhbHVlKF92YWx1ZSk7XG5cbiAgICBpZiAoX3RoaXMubWFza09wdGlvbnMubWFzayAmJiAoX2Fsd2F5c1Nob3dNYXNrIHx8IF9uZXdWYWx1ZSkpIHtcbiAgICAgIF9uZXdWYWx1ZSA9IGZvcm1hdFZhbHVlKF90aGlzLm1hc2tPcHRpb25zLCBfbmV3VmFsdWUpO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihfYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UpKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHByb3BzLnZhbHVlO1xuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgb2xkVmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRWYWx1ZSA9IGdldFN0cmluZ1ZhbHVlKG9sZFZhbHVlKTtcblxuICAgICAgICB2YXIgbW9kaWZpZWRWYWx1ZSA9IF9iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSh7XG4gICAgICAgICAgdmFsdWU6IF9uZXdWYWx1ZSxcbiAgICAgICAgICBzZWxlY3Rpb246IG51bGxcbiAgICAgICAgfSwge1xuICAgICAgICAgIHZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3Rpb246IG51bGxcbiAgICAgICAgfSwgbnVsbCwgX3RoaXMuZ2V0QmVmb3JlTWFza2VkVmFsdWVDaGFuZ2VDb25maWcoKSk7XG5cbiAgICAgICAgX25ld1ZhbHVlID0gbW9kaWZpZWRWYWx1ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy52YWx1ZSA9IF9uZXdWYWx1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gSW5wdXRFbGVtZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlOyAvLyB3b3JrYXJvdW5kIGZvciByZWFjdC10ZXN0LXJlbmRlcmVyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Nhbm5pYXNzaW4vcmVhY3QtaW5wdXQtbWFzay9pc3N1ZXMvMTQ3XG5cbiAgICBpZiAoIXRoaXMuZ2V0SW5wdXRET01Ob2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzV2luZG93c1Bob25lQnJvd3NlciA9IGlzV2luZG93c1Bob25lQnJvd3NlcigpO1xuXG4gICAgaWYgKHRoaXMubWFza09wdGlvbnMubWFzayAmJiB0aGlzLmdldElucHV0VmFsdWUoKSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMucHJldmlvdXNTZWxlY3Rpb247XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UgPSBfdGhpcyRwcm9wcy5iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBfdGhpcyRwcm9wcy5hbHdheXNTaG93TWFzayxcbiAgICAgICAgbWFzayA9IF90aGlzJHByb3BzLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX3RoaXMkcHJvcHMubWFza0NoYXIsXG4gICAgICAgIGZvcm1hdENoYXJzID0gX3RoaXMkcHJvcHMuZm9ybWF0Q2hhcnM7XG4gICAgdmFyIHByZXZpb3VzTWFza09wdGlvbnMgPSB0aGlzLm1hc2tPcHRpb25zO1xuICAgIHZhciBzaG93RW1wdHkgPSBhbHdheXNTaG93TWFzayB8fCB0aGlzLmlzRm9jdXNlZCgpO1xuICAgIHZhciBoYXNWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgIT0gbnVsbDtcbiAgICB2YXIgbmV3VmFsdWUgPSBoYXNWYWx1ZSA/IGdldFN0cmluZ1ZhbHVlKHRoaXMucHJvcHMudmFsdWUpIDogdGhpcy52YWx1ZTtcbiAgICB2YXIgY3Vyc29yUG9zaXRpb24gPSBwcmV2aW91c1NlbGVjdGlvbiA/IHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0IDogbnVsbDtcbiAgICB0aGlzLm1hc2tPcHRpb25zID0gcGFyc2VNYXNrKG1hc2ssIG1hc2tDaGFyLCBmb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoIXRoaXMubWFza09wdGlvbnMubWFzaykge1xuICAgICAgaWYgKHByZXZpb3VzTWFza09wdGlvbnMubWFzaykge1xuICAgICAgICB0aGlzLnN0b3BTYXZlU2VsZWN0aW9uTG9vcCgpOyAvLyByZW5kZXIgZGVwZW5kcyBvbiB0aGlzLm1hc2tPcHRpb25zIGFuZCB0aGlzLnZhbHVlLFxuICAgICAgICAvLyBjYWxsIGZvcmNlVXBkYXRlIHRvIGtlZXAgaXQgaW4gc3luY1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIXByZXZpb3VzTWFza09wdGlvbnMubWFzayAmJiB0aGlzLmlzRm9jdXNlZCgpKSB7XG4gICAgICB0aGlzLnJ1blNhdmVTZWxlY3Rpb25Mb29wKCk7XG4gICAgfVxuXG4gICAgdmFyIGlzTWFza0NoYW5nZWQgPSB0aGlzLm1hc2tPcHRpb25zLm1hc2sgJiYgdGhpcy5tYXNrT3B0aW9ucy5tYXNrICE9PSBwcmV2aW91c01hc2tPcHRpb25zLm1hc2s7XG5cbiAgICBpZiAoIXByZXZpb3VzTWFza09wdGlvbnMubWFzayAmJiAhaGFzVmFsdWUpIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy5nZXRJbnB1dFZhbHVlKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTWFza0NoYW5nZWQgfHwgdGhpcy5tYXNrT3B0aW9ucy5tYXNrICYmIChuZXdWYWx1ZSB8fCBzaG93RW1wdHkpKSB7XG4gICAgICBuZXdWYWx1ZSA9IGZvcm1hdFZhbHVlKHRoaXMubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNNYXNrQ2hhbmdlZCkge1xuICAgICAgdmFyIGZpbGxlZExlbmd0aCA9IGdldEZpbGxlZExlbmd0aCh0aGlzLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChjdXJzb3JQb3NpdGlvbiA9PT0gbnVsbCB8fCBmaWxsZWRMZW5ndGggPCBjdXJzb3JQb3NpdGlvbikge1xuICAgICAgICBpZiAoaXNGaWxsZWQodGhpcy5tYXNrT3B0aW9ucywgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY3Vyc29yUG9zaXRpb24gPSBmaWxsZWRMZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3Vyc29yUG9zaXRpb24gPSBnZXRSaWdodEVkaXRhYmxlUG9zaXRpb24odGhpcy5tYXNrT3B0aW9ucywgZmlsbGVkTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLm1hc2tPcHRpb25zLm1hc2sgJiYgaXNFbXB0eSh0aGlzLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSkgJiYgIXNob3dFbXB0eSAmJiAoIWhhc1ZhbHVlIHx8ICF0aGlzLnByb3BzLnZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICB2YXIgbmV3U2VsZWN0aW9uID0ge1xuICAgICAgc3RhcnQ6IGN1cnNvclBvc2l0aW9uLFxuICAgICAgZW5kOiBjdXJzb3JQb3NpdGlvblxuICAgIH07XG5cbiAgICBpZiAoaXNGdW5jdGlvbihiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSkpIHtcbiAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2Uoe1xuICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICAgIHNlbGVjdGlvbjogbmV3U2VsZWN0aW9uXG4gICAgICB9LCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBzZWxlY3Rpb246IHRoaXMucHJldmlvdXNTZWxlY3Rpb25cbiAgICAgIH0sIG51bGwsIHRoaXMuZ2V0QmVmb3JlTWFza2VkVmFsdWVDaGFuZ2VDb25maWcoKSk7XG4gICAgICBuZXdWYWx1ZSA9IG1vZGlmaWVkVmFsdWUudmFsdWU7XG4gICAgICBuZXdTZWxlY3Rpb24gPSBtb2RpZmllZFZhbHVlLnNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgdmFyIGlzVmFsdWVDaGFuZ2VkID0gdGhpcy5nZXRJbnB1dFZhbHVlKCkgIT09IHRoaXMudmFsdWU7IC8vIHJlbmRlciBkZXBlbmRzIG9uIHRoaXMubWFza09wdGlvbnMgYW5kIHRoaXMudmFsdWUsXG4gICAgLy8gY2FsbCBmb3JjZVVwZGF0ZSB0byBrZWVwIGl0IGluIHN5bmNcblxuICAgIGlmIChpc1ZhbHVlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNNYXNrQ2hhbmdlZCkge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBpc1NlbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmIChuZXdTZWxlY3Rpb24uc3RhcnQgIT0gbnVsbCAmJiBuZXdTZWxlY3Rpb24uZW5kICE9IG51bGwpIHtcbiAgICAgIGlzU2VsZWN0aW9uQ2hhbmdlZCA9ICFwcmV2aW91c1NlbGVjdGlvbiB8fCBwcmV2aW91c1NlbGVjdGlvbi5zdGFydCAhPT0gbmV3U2VsZWN0aW9uLnN0YXJ0IHx8IHByZXZpb3VzU2VsZWN0aW9uLmVuZCAhPT0gbmV3U2VsZWN0aW9uLmVuZDtcbiAgICB9XG5cbiAgICBpZiAoaXNTZWxlY3Rpb25DaGFuZ2VkIHx8IGlzVmFsdWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGlvbihuZXdTZWxlY3Rpb24uc3RhcnQsIG5ld1NlbGVjdGlvbi5lbmQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbkRlZmVySWQgIT09IG51bGwpIHtcbiAgICAgIGNhbmNlbERlZmVyKHRoaXMuc2VsZWN0aW9uRGVmZXJJZCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wU2F2ZVNlbGVjdGlvbkxvb3AoKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBtYXNrID0gX3RoaXMkcHJvcHMyLm1hc2ssXG4gICAgICAgIGFsd2F5c1Nob3dNYXNrID0gX3RoaXMkcHJvcHMyLmFsd2F5c1Nob3dNYXNrLFxuICAgICAgICBtYXNrQ2hhciA9IF90aGlzJHByb3BzMi5tYXNrQ2hhcixcbiAgICAgICAgZm9ybWF0Q2hhcnMgPSBfdGhpcyRwcm9wczIuZm9ybWF0Q2hhcnMsXG4gICAgICAgIGlucHV0UmVmID0gX3RoaXMkcHJvcHMyLmlucHV0UmVmLFxuICAgICAgICBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSA9IF90aGlzJHByb3BzMi5iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzMiwgW1wibWFza1wiLCBcImFsd2F5c1Nob3dNYXNrXCIsIFwibWFza0NoYXJcIiwgXCJmb3JtYXRDaGFyc1wiLCBcImlucHV0UmVmXCIsIFwiYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2VcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgICB2YXIgaW5wdXRFbGVtZW50O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIC8vIHBhcnNlIG1hc2sgdG8gdGVzdCBhZ2FpbnN0IGFjdHVhbCBtYXNrIHByb3AgYXMgdGhpcy5tYXNrT3B0aW9uc1xuICAgIC8vIHdpbGwgYmUgdXBkYXRlZCBsYXRlciBpbiBjb21wb25lbnREaWRVcGRhdGVcbiAgICAhcmVzdFByb3BzLm1heExlbmd0aCB8fCAhcGFyc2VNYXNrKG1hc2ssIG1hc2tDaGFyLCBmb3JtYXRDaGFycykubWFzaywgJ3JlYWN0LWlucHV0LW1hc2s6IG1heExlbmd0aCBwcm9wZXJ0eSBzaG91bGRuXFwndCBiZSBwYXNzZWQgdG8gdGhlIG1hc2tlZCBpbnB1dC4gSXQgYnJlYWtzIG1hc2tpbmcgYW5kIHVubmVjZXNzYXJ5IGJlY2F1c2UgbGVuZ3RoIGlzIGxpbWl0ZWQgYnkgdGhlIG1hc2sgbGVuZ3RoLicpIDogdm9pZCAwO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAhaXNGdW5jdGlvbihjaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdyZWFjdC1pbnB1dC1tYXNrOiBjaGlsZHJlbiBtdXN0IGJlIGEgZnVuY3Rpb24nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgY29udHJvbGxlZFByb3BzID0gWydvbkNoYW5nZScsICdvblBhc3RlJywgJ29uTW91c2VEb3duJywgJ29uRm9jdXMnLCAnb25CbHVyJywgJ3ZhbHVlJywgJ2Rpc2FibGVkJywgJ3JlYWRPbmx5J107XG5cbiAgICAgIHZhciBjaGlsZHJlblByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcyk7XG5cbiAgICAgIGNvbnRyb2xsZWRQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wSWQpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBjaGlsZHJlblByb3BzW3Byb3BJZF07XG4gICAgICB9KTtcbiAgICAgIGlucHV0RWxlbWVudCA9IGNoaWxkcmVuKGNoaWxkcmVuUHJvcHMpO1xuICAgICAgdmFyIGNvbmZsaWN0UHJvcHMgPSBjb250cm9sbGVkUHJvcHMuZmlsdGVyKGZ1bmN0aW9uIChwcm9wSWQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0RWxlbWVudC5wcm9wc1twcm9wSWRdICE9IG51bGwgJiYgaW5wdXRFbGVtZW50LnByb3BzW3Byb3BJZF0gIT09IHJlc3RQcm9wc1twcm9wSWRdO1xuICAgICAgfSk7XG4gICAgICAhIWNvbmZsaWN0UHJvcHMubGVuZ3RoID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcInJlYWN0LWlucHV0LW1hc2s6IHRoZSBmb2xsb3dpbmcgcHJvcHMgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgcmVhY3QtaW5wdXQtbWFzaydzIGNvbXBvbmVudCBhbmQgc2hvdWxkIG5vdCBiZSBhbHRlcmVkIGluIGNoaWxkcmVuJ3MgZnVuY3Rpb246IFwiICsgY29uZmxpY3RQcm9wcy5qb2luKCcsICcpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFpbnB1dFJlZiwgJ3JlYWN0LWlucHV0LW1hc2s6IGlucHV0UmVmIGlzIGlnbm9yZWQgd2hlbiBjaGlsZHJlbiBpcyBwYXNzZWQsIGF0dGFjaCByZWYgdG8gdGhlIGNoaWxkcmVuIGluc3RlYWQnKSA6IHZvaWQgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZlxuICAgICAgfSwgcmVzdFByb3BzKSk7XG4gICAgfVxuXG4gICAgdmFyIGNoYW5nZWRQcm9wcyA9IHtcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Gb2N1cyxcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubWFza09wdGlvbnMubWFzaykge1xuICAgICAgaWYgKCFyZXN0UHJvcHMuZGlzYWJsZWQgJiYgIXJlc3RQcm9wcy5yZWFkT25seSkge1xuICAgICAgICBjaGFuZ2VkUHJvcHMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlO1xuICAgICAgICBjaGFuZ2VkUHJvcHMub25QYXN0ZSA9IHRoaXMub25QYXN0ZTtcbiAgICAgICAgY2hhbmdlZFByb3BzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3RQcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGNoYW5nZWRQcm9wcy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5wdXRFbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KGlucHV0RWxlbWVudCwgY2hhbmdlZFByb3BzKTtcbiAgICByZXR1cm4gaW5wdXRFbGVtZW50O1xuICB9O1xuXG4gIHJldHVybiBJbnB1dEVsZW1lbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgYnVsbGV0aW5fcm93IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvdXJzZXNcIjtcclxuaW1wb3J0IEJ1bGxldGluUmVhZFdyaXRlIGZyb20gXCIuLi9jb21wb25lbnRzL2J1bGxldGluL2J1bGxldGluLXdyaXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiQnVsbGV0aW4gR3JhZGVcIiBpc0hvbWU9e2ZhbHNlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtMiBtZDpweC0zMiBteS04XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPkJ1bGxldGluPC9oMT5cclxuICAgICAgICA8QnVsbGV0aW5SZWFkV3JpdGUgY291cnNlc0RhdGE9e2J1bGxldGluX3Jvd30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO307XHJcbiIsImV4cG9ydCBjb25zdCBjb3Vyc2VzID0gW1xyXG4gIFwiTUFYSU1BXCIsXHJcbiAgXCJFbnNlaWduZW1lbnQgYmlibGlxdWVcIixcclxuICBcIkVjbVwiLFxyXG4gIFwiTUFYSU1BXCIsXHJcbiAgXCJBbmdsYWlzXCIsXHJcbiAgXCJDaGltaWVcIixcclxuICBcIkNvbm5haXMuIERlcyBtYXTDqXJpYXV4XCIsXHJcbiAgXCJSw6lzaXN0LiBEZXMgbWF0w6lyaWF1eFwiLFxyXG4gIFwiQWN0dWFsaXTDqXNcIixcclxuICBcIkdyYXBob3N0YXRpcXVlXCIsXHJcbiAgXCJNw6ljYW5pcXVlXCIsXHJcbiAgXCJQaHlzaXF1ZVwiLFxyXG4gIFwiVGVjaG5vbG9naWVcIixcclxuICBcIlRvcG9ncmFwaGllXCIsXHJcbiAgXCJWb2llcyBkZSBjb21tdW5pY2F0aW9uXCIsXHJcbiAgXCJNQVhJTUFcIixcclxuICBcIkZyYW7Dp2Fpc1wiLFxyXG4gIFwiTWF0aMOpbWF0aXF1ZXNcIixcclxuICBcIkRlc3NpblwiLFxyXG4gIFwiTUFYSU1BXCIsXHJcbiAgXCJQcmF0aXF1ZSBwcm9mZXNzaW9ubmVsbGVcIixcclxuICBcIk1BWElNQSBHRU5FUkFVWFwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1bGxldGluX3JvdyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGNhdGVnb3J5OiAxLFxyXG4gICAgY291cnNlOiBcIkVuc2VpZ25lbWVudCBiaWJsaXF1ZVwiLFxyXG4gICAgc2VtZXN0ZXIxOiB7XHJcbiAgICAgIHBlcmlvZGUxOiA5LFxyXG4gICAgICBwZXJpb2RlMjogNyxcclxuICAgICAgZXhhbTogMTQsXHJcbiAgICB9LFxyXG4gICAgc2VtZXN0ZXIyOiB7XHJcbiAgICAgIHBlcmlvZGUxOiAxMixcclxuICAgICAgcGVyaW9kZTI6IDYsXHJcbiAgICAgIGV4YW06IDE4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgY2F0ZWdvcnk6IDEsXHJcbiAgICBjb3Vyc2U6IFwiRWR1Y2F0aW9uIENpdmlxdWUgRXQgTW9yYWxlXCIsXHJcbiAgICBzZW1lc3RlcjE6IHtcclxuICAgICAgcGVyaW9kZTE6IDksXHJcbiAgICAgIHBlcmlvZGUyOiA3LFxyXG4gICAgICBleGFtOiAxMyxcclxuICAgIH0sXHJcbiAgICBzZW1lc3RlcjI6IHtcclxuICAgICAgcGVyaW9kZTE6IDcsXHJcbiAgICAgIHBlcmlvZGUyOiA4LFxyXG4gICAgICBleGFtOiAxNyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgY291cnNlOiBcIkFuZ2xhaXNcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogMjAsXHJcbiAgICAgIHBlcmlvZGUyOiAyMCxcclxuICAgICAgZXhhbTogMzcsXHJcbiAgICB9LFxyXG4gICAgc2VtZXN0ZXIyOiB7XHJcbiAgICAgIHBlcmlvZGUxOiAxNyxcclxuICAgICAgcGVyaW9kZTI6IDE4LFxyXG4gICAgICBleGFtOiAzMixcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgY291cnNlOiBcIkNoaW1pZVwiLFxyXG4gICAgc2VtZXN0ZXIxOiB7XHJcbiAgICAgIHBlcmlvZGUxOiA5LFxyXG4gICAgICBwZXJpb2RlMjogNyxcclxuICAgICAgZXhhbTogMTQsXHJcbiAgICB9LFxyXG4gICAgc2VtZXN0ZXIyOiB7XHJcbiAgICAgIHBlcmlvZGUxOiAxMixcclxuICAgICAgcGVyaW9kZTI6IDYsXHJcbiAgICAgIGV4YW06IDE4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgY2F0ZWdvcnk6IDIsXHJcbiAgICBjb3Vyc2U6IFwiQ29ubmFpcy4gRGVzIG1hdMOpcmlhdXhcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgY291cnNlOiBcIlLDqXNpc3QuIERlcyBtYXTDqXJpYXV4XCIsXHJcbiAgICBzZW1lc3RlcjE6IHtcclxuICAgICAgcGVyaW9kZTE6IDksXHJcbiAgICAgIHBlcmlvZGUyOiA3LFxyXG4gICAgICBleGFtOiAxNCxcclxuICAgIH0sXHJcbiAgICBzZW1lc3RlcjI6IHtcclxuICAgICAgcGVyaW9kZTE6IDEyLFxyXG4gICAgICBwZXJpb2RlMjogNixcclxuICAgICAgZXhhbTogMTgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBjYXRlZ29yeTogMixcclxuICAgIGNvdXJzZTogXCJBY3R1YWxpdMOpc1wiLFxyXG4gICAgc2VtZXN0ZXIxOiB7XHJcbiAgICAgIHBlcmlvZGUxOiA5LFxyXG4gICAgICBwZXJpb2RlMjogNyxcclxuICAgICAgZXhhbTogMTQsXHJcbiAgICB9LFxyXG4gICAgc2VtZXN0ZXIyOiB7XHJcbiAgICAgIHBlcmlvZGUxOiAxMixcclxuICAgICAgcGVyaW9kZTI6IDYsXHJcbiAgICAgIGV4YW06IDE4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA4LFxyXG4gICAgY2F0ZWdvcnk6IDIsXHJcbiAgICBjb3Vyc2U6IFwiR3JhcGhvc3RhdGlxdWVcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgY291cnNlOiBcIk3DqWNhbmlxdWVcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBjYXRlZ29yeTogMixcclxuICAgIGNvdXJzZTogXCJQaHlzaXF1ZVwiLFxyXG4gICAgc2VtZXN0ZXIxOiB7XHJcbiAgICAgIHBlcmlvZGUxOiA5LFxyXG4gICAgICBwZXJpb2RlMjogNyxcclxuICAgICAgZXhhbTogMTQsXHJcbiAgICB9LFxyXG4gICAgc2VtZXN0ZXIyOiB7XHJcbiAgICAgIHBlcmlvZGUxOiAxMixcclxuICAgICAgcGVyaW9kZTI6IDYsXHJcbiAgICAgIGV4YW06IDE4LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAxMSxcclxuICAgIGNhdGVnb3J5OiAyLFxyXG4gICAgY291cnNlOiBcIlRlY2hub2xvZ2llXCIsXHJcbiAgICBzZW1lc3RlcjE6IHtcclxuICAgICAgcGVyaW9kZTE6IDksXHJcbiAgICAgIHBlcmlvZGUyOiA3LFxyXG4gICAgICBleGFtOiAxNCxcclxuICAgIH0sXHJcbiAgICBzZW1lc3RlcjI6IHtcclxuICAgICAgcGVyaW9kZTE6IDEyLFxyXG4gICAgICBwZXJpb2RlMjogNixcclxuICAgICAgZXhhbTogMTgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgY2F0ZWdvcnk6IDIsXHJcbiAgICBjb3Vyc2U6IFwiVG9wb2dyYXBoaWVcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTMsXHJcbiAgICBjYXRlZ29yeTogMixcclxuICAgIGNvdXJzZTogXCJWb2llcyBkZSBjb21tdW5pY2F0aW9uXCIsXHJcbiAgICBzZW1lc3RlcjE6IHtcclxuICAgICAgcGVyaW9kZTE6IDksXHJcbiAgICAgIHBlcmlvZGUyOiA3LFxyXG4gICAgICBleGFtOiAxNCxcclxuICAgIH0sXHJcbiAgICBzZW1lc3RlcjI6IHtcclxuICAgICAgcGVyaW9kZTE6IDEyLFxyXG4gICAgICBwZXJpb2RlMjogNixcclxuICAgICAgZXhhbTogMTgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE0LFxyXG4gICAgY2F0ZWdvcnk6IDMsXHJcbiAgICBjb3Vyc2U6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICBzZW1lc3RlcjE6IHtcclxuICAgICAgcGVyaW9kZTE6IDksXHJcbiAgICAgIHBlcmlvZGUyOiA3LFxyXG4gICAgICBleGFtOiAxNCxcclxuICAgIH0sXHJcbiAgICBzZW1lc3RlcjI6IHtcclxuICAgICAgcGVyaW9kZTE6IDEyLFxyXG4gICAgICBwZXJpb2RlMjogNixcclxuICAgICAgZXhhbTogMTgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDE1LFxyXG4gICAgY2F0ZWdvcnk6IDMsXHJcbiAgICBjb3Vyc2U6IFwiTWF0aMOpbWF0aXF1ZXNcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTYsXHJcbiAgICBjYXRlZ29yeTogMyxcclxuICAgIGNvdXJzZTogXCJEZXNzaW5cIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMTcsXHJcbiAgICBjYXRlZ29yeTogNCxcclxuICAgIGNvdXJzZTogXCJQcmF0aXF1ZSBwcm9mZXNzaW9ubmVsbGVcIixcclxuICAgIHNlbWVzdGVyMToge1xyXG4gICAgICBwZXJpb2RlMTogOSxcclxuICAgICAgcGVyaW9kZTI6IDcsXHJcbiAgICAgIGV4YW06IDE0LFxyXG4gICAgfSxcclxuICAgIHNlbWVzdGVyMjoge1xyXG4gICAgICBwZXJpb2RlMTogMTIsXHJcbiAgICAgIHBlcmlvZGUyOiA2LFxyXG4gICAgICBleGFtOiAxOCxcclxuICAgIH0sXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnREYXRhID0gW1xyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgZmlyc3RuYW1lOiBcIkVyaWNcIixcclxuICAgICAgICAgICBsYXN0bmFtZTogXCJEaW1wYSBEaWEgTW95b1wiLFxyXG4gICAgICAgICAgIGNsYXNzOiBcIjFlciBTZWNvbmRhaXJlXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICBmaXJzdG5hbWU6IFwiTUFyY2VsaW5cIixcclxuICAgICAgICAgICBsYXN0bmFtZTogXCJEaWxsb1wiLFxyXG4gICAgICAgICAgIGNsYXNzOiBcIjFlciBTZWNvbmRhaXJlXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgZmlyc3RuYW1lOiBcIkJlbmktRG9vbFwiLFxyXG4gICAgICAgICAgIGxhc3RuYW1lOiBcIkNyZXdzXCIsXHJcbiAgICAgICAgICAgY2xhc3M6IFwiMWVyIFNlY29uZGFpcmVcIixcclxuICAgICAgICAgfVxyXG4gICAgICAgICAsXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICBmaXJzdG5hbWU6IFwiRWxpemFiZXRoIEdyYWNlXCIsXHJcbiAgICAgICAgICAgbGFzdG5hbWU6IFwiVHNoaW1hIG1hXCIsXHJcbiAgICAgICAgICAgY2xhc3M6IFwiMWVyIFNlY29uZGFpcmVcIixcclxuICAgICAgICAgfSxcclxuICAgICAgICAgXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICBmaXJzdG5hbWU6IFwiQ2VsaW5lIEhhbm5haFwiLFxyXG4gICAgICAgICAgIGxhc3RuYW1lOiBcIkRvaGlcIixcclxuICAgICAgICAgICBjbGFzczogXCIxZXIgU2Vjb25kYWlyZVwiLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICBcclxuICAgICAgICAge1xyXG4gICAgICAgICAgIGlkOjYsXHJcbiAgICAgICAgICAgZmlyc3RuYW1lOiBcIlN5bHZpYW5cIixcclxuICAgICAgICAgICBsYXN0bmFtZTogXCJMb2tvdG8gTW9rYVwiLFxyXG4gICAgICAgICAgIGNsYXNzOiBcIjFlciBTZWNvbmRhaXJlXCIsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICBdOyIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=