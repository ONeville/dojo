// export const groupBy = (xs, key) => {
//   return xs.reduce((rv, x) => {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// };

// export const categoryMap = (type) => {
//   switch (type) {
//     case 1:
//       return {
//         label: "MAXIMA",
//         max: 10,
//         coef: 2,
//       };
//     case 2:
//       return {
//         label: "MAXIMA",
//         max: 20,
//         coef: 11,
//       };
//     case 3:
//       return {
//         label: "MAXIMA",
//         max: 50,
//         coef: 3,
//       };
//     case 4:
//       return {
//         label: "MAXIMA",
//         max: 100,
//         coef: 1,
//       };
//     default:
//       break;
//   }
// };

//  const maximaList = [1, 2, 3, 4].map((x) => categoryMap(x));


//   export const bulletinEntity = (coursesData) => {
//      const bulletinGrouped = groupBy(coursesData, "category");

//      const totalGrade = {
//       periode1: coursesData.reduce(
//         (acc, curr) => acc + curr.semester1.periode1,
//         0
//       ),
//       periode2: coursesData.reduce(
//         (acc, curr) => acc + curr.semester1.periode2,
//         0
//       ),
//       exam1: coursesData.reduce((acc, curr) => acc + curr.semester1.exam, 0),
//       periode3: coursesData.reduce(
//         (acc, curr) => acc + curr.semester2.periode1,
//         0
//       ),
//       periode4: coursesData.reduce(
//         (acc, curr) => acc + curr.semester2.periode2,
//         0
//       ),
//       exam2: coursesData.reduce((acc, curr) => acc + curr.semester2.exam, 0),
//     };

//      const maximaPeriod1 = maximaList.reduce(
//        (acc, curr) => acc + curr.max * curr.coef,
//        0
//      );
//      const maximaPeriod2 = maximaList.reduce(
//        (acc, curr) => acc + curr.max * curr.coef,
//        0
//      );
//      const maximaExam =
//        maximaList.reduce((acc, curr) => acc + curr.max * curr.coef * 2, 0) -
//        200;

//     const totalGradePercentage =
//       ((totalGrade.periode1 +
//         totalGrade.periode2 +
//         totalGrade.exam1 +
//         totalGrade.periode3 +
//         totalGrade.periode4 +
//         totalGrade.exam2) *
//         100) /
//       ((maximaPeriod1 + maximaPeriod2 + maximaExam) * 2);

//     return {
//       bulletinGrouped,
//       totalGrade,
//       totalGradePercentage,
//       maximaPeriod1, maximaPeriod2, maximaExam
//     };
//   }

