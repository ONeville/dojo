/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import {
  categoryMap,
  bulletinEntity,
} from "./bulletin-shared";
const BulletinReadOnly = ({ coursesData }) => {
 const {
   totalGrade,
   bulletinGrouped,
   totalGradePercentage,
   maximaPeriod1,
   maximaPeriod2,
   maximaExam,
 } = bulletinEntity(coursesData);

 const gradeColor =
  totalGradePercentage < 50 ? "text-red-500" : "text-green-500";

 const strip = (i) => (i % 2 !== 0 ? "bg-gray-300" : "");

 if (!totalGrade || !bulletinGrouped) {
   return <div>Loading...</div>;
 }

  return (
    <div>
      <div className="flex flex-wrap justify-between border my-6">
        <div className="flex flex-col">
          <div className="flex items-center py-2 px-8 text-white bg-gray-600 text-center w-full">
            <svg
              className="fill-current h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
            </svg>
            <span className="font-semibold ml-3">DIMPA DIAMOYO</span>
          </div>
          <span className="py-2 px-8 font-semibold bg-gray-100 border-b text-center w-full">
            1ere Secondaire
          </span>
          <span className="py-2 px-8 font-semibold bg-gray-100 text-center w-full">
            ECAMO
          </span>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col justify-center items-center border">
            <span className="py-2 px-8 font-semibold text-white bg-gray-600 text-center w-full">
              1ere Semestre
            </span>
            <div className="py-6 flex items-start">
              <span className="text-center text-4xl">
                {(
                  ((totalGrade.periode1 +
                    totalGrade.periode2 +
                    totalGrade.exam1) *
                    100) /
                  (maximaPeriod1 + maximaPeriod2 + maximaExam)
                ).toFixed("2")}
              </span>
              <span className="text-lg font-semibold mt-2">%</span>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center border">
            <span className="py-2 px-8 font-semibold text-white bg-gray-600 text-center w-full">
              2ere Semestre
            </span>
            <div className="py-6 flex items-start">
              <span className="text-center text-4xl">
                {(
                  ((totalGrade.periode3 +
                    totalGrade.periode4 +
                    totalGrade.exam2) *
                    100) /
                  (maximaPeriod1 + maximaPeriod2 + maximaExam)
                ).toFixed("2")}
              </span>
              <span className="text-lg font-semibold mt-2">%</span>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center border">
            <span className="py-2 px-10 font-semibold text-white bg-gray-600 text-center w-full">
              GENERAL
            </span>
            <div className="py-6 flex items-start">
              <span className={"text-center text-4xl font-bold " + gradeColor}>
                {totalGradePercentage.toFixed("2")}
              </span>
              <span className="text-lg font-semibold mt-2">%</span>
            </div>
          </div>
        </div>
      </div>

      <table class="table-auto w-full border-t-2">
        <thead>
          <tr>
            <th class="px-4 py-2 border-r-4 border-gray-600"></th>
            <th class="px-4 py-2 border-r-4 border-gray-600" colSpan="4">
              PREMIERE SEMESTRE
            </th>
            <th class="px-4 py-2" colSpan="5">
              DEUXIEME SEMESTRE
            </th>
          </tr>
          <tr>
            <th class="px-4 py-2 border-r-4 border-gray-600">Cours</th>
            <th class="px-4 py-2">1ere P</th>
            <th class="px-4 py-2">2eme P</th>
            <th class="px-4 py-2">EXAM</th>
            <th class="px-4 py-2 border-r-4 border-gray-600">TOT</th>
            <th class="px-4 py-2">3eme P</th>
            <th class="px-4 py-2">4eme P</th>
            <th class="px-4 py-2">EXAM</th>
            <th class="px-4 py-2 border-r-2 border-gray-600">TOP</th>
            <th class="px-4 py-2">T.G</th>
          </tr>
        </thead>
        <tbody className="border-b-2">
          {[1, 2, 3, 4].map((x) => {
            const maxima = categoryMap(x);
            const course = bulletinGrouped[x.toString()];
            return (
              <React.Fragment>
                <tr key={x.toString() + "maxima"} className="bg-indigo-100">
                  <td class="border font-bold px-4 py-2 border-r-4 border-gray-600">
                    {maxima.label}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max !== 100 ? maxima.max * 2 : ""}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-4 border-gray-600">
                    {maxima.max * 4}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max !== 100 ? maxima.max * 2 : ""}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-2 border-gray-600">
                    {maxima.max * 4}
                  </td>
                  <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
                    {maxima.max * 8}
                  </td>
                </tr>
                {course.map((item) => (
                  <tr key={item.course} className={strip(item.id)}>
                    <td class="border pl-8 pr-4 py-2 border-r-4 border-gray-600">
                      {item.course}
                    </td>
                    <td class="border px-4 py-2 text-center font-semibold">
                      {item.semester1.periode1}
                    </td>
                    <td class="border px-4 py-2 text-center font-semibold">
                      {item.semester1.periode2}
                    </td>
                    <td class="border px-4 py-2 text-center font-semibold">
                      {item.semester1.exam}
                    </td>
                    <td class="border px-4 py-2 text-center font-semibold border-r-4 border-gray-600">
                      {item.semester1.periode1 +
                        item.semester1.periode2 +
                        item.semester1.exam}
                    </td>
                    <td class="border px-4 py-2 font-semibold text-center">
                      {item.semester2.periode1}
                    </td>
                    <td class="border px-4 py-2 font-semibold text-center">
                      {item.semester2.periode2}
                    </td>
                    <td class="border px-4 py-2 font-semibold text-center">
                      {item.semester2.exam}
                    </td>
                    <td class="border px-4 py-2 font-semibold text-center border-r-2 border-gray-600">
                      {item.semester2.periode1 +
                        item.semester2.periode2 +
                        item.semester2.exam}
                    </td>
                    <td class="border px-4 py-2 font-semibold text-center">
                      {item.semester1.periode1 +
                        item.semester1.periode2 +
                        item.semester1.exam +
                        item.semester2.periode1 +
                        item.semester2.periode2 +
                        item.semester2.exam}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            );
          })}
          <tr className="bg-indigo-100">
            <td class="border font-bold px-4 py-2 border-r-4 border-gray-600">
              MAXIMA GENERAL
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {maximaPeriod1}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {maximaPeriod2}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {maximaExam}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-4 border-gray-600">
              {maximaPeriod1 + maximaPeriod2 + maximaExam}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {maximaPeriod1}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {maximaPeriod2}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {maximaExam}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2 border-r-2 border-gray-600">
              {maximaPeriod1 + maximaPeriod2 + maximaExam}
            </td>
            <td class="border text-indigo-500 font-bold text-lg text-center px-4 py-2">
              {(maximaPeriod1 + maximaPeriod2 + maximaExam) * 2}
            </td>
          </tr>
          <tr className="bg-indigo-700 text-white">
            <td class="border font-bold px-4 py-2">TOTAUX</td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode1}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode2}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.exam1}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode1 + totalGrade.periode2 + totalGrade.exam1}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode3}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode4}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.exam2}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode3 + totalGrade.periode4 + totalGrade.exam2}
            </td>
            <td class="border font-bold text-lg text-center px-4 py-2">
              {totalGrade.periode1 +
                totalGrade.periode2 +
                totalGrade.exam1 +
                totalGrade.periode3 +
                totalGrade.periode4 +
                totalGrade.exam2}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BulletinReadOnly;