/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import StudentRowEdit from "./edit-student";

const StudentReadWrite = ({ studentData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editRow, setEditRow] = useState(false);
  const [itemRow, setItemRow] = useState(null);
  // const [itemRow, setItemRow] = useState(studentData);

  // useEffect(() => {
  //   setItemRow(studentData);
  // }, []);

  // if (!itemRow) {
  //   return <div>Loading...</div>;
  // }

  const showDroplist = (item) => {
    setIsOpen(true);
    setItemRow(item);
  };

  
  const closeDroplist = () => {
    if (isOpen) {
      setIsOpen(false);
      setItemRow(null);
    }
  };

  // const editStudentData = (item) => {
  //   // setEditRow(true);
  //   // setItemRow(item);
  // };

  // const editGradeData = (item) => {
  // setEditRow(true);
  // setItemRow(item);
  // };

  const droplist = itemRow && (
    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
      <a
        href="#"
        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        1ere Semestre
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        2eme Semestre
      </a>
    </div>
  );

  const editView = itemRow && (
    <StudentRowEdit
      item={itemRow}
      showModal={() => setEditRow(false)}
      onDataChange={setItemRow}
    />
  );

  // useEffect(() => {
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

  return (
    <div className="" onClick={() => closeDroplist()}>
      <div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 sm:w-1/2 md:w-1/3">
          <p className="px-2 text-gray-600 mb-2 text-2xl font-thin px-4 pt-3">
            Eleve/Etudiants
          </p>
          <div className="px-2">
            <svg
              className="absolute z-50 m-1 text-blue-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.71 14H15.5L20.49 19L19 20.49L14 15.5V14.71L13.73 14.43C12.59 15.41 11.11 16 9.5 16C5.90997 16 3 13.09 3 9.5C3 5.90997 5.90997 3 9.5 3C13.09 3 16 5.90997 16 9.5C16 11.11 15.41 12.59 14.43 13.73L14.71 14ZM5 9.5C5 11.99 7.01001 14 9.5 14C11.99 14 14 11.99 14 9.5C14 7.01001 11.99 5 9.5 5C7.01001 5 5 7.01001 5 9.5Z"
                fill="black"
                fill-opacity="0.54"
              />
            </svg>
            <input
              type="text"
              className="pl-8 p-1 bg-gray-200 w-full rounded relative"
              placeholder="Search teams or members"
            />
          </div>
          <div className="py-5 px-3">
            {studentData.map((item) => (
              <div key={item.id} className="flex justify-between px-2">
                <div className="flex flex-col flex-grow px-2 py-2 hover:bg-blue-100 hover:rounded">
                  <p className="flex text-gray-700">
                    <svg
                      className="w-2 text-gray-500 mx-2"
                      viewBox="0 0 8 8"
                      fill="currentColor"
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    {item.firstname + " " + item.lastname}
                  </p>
                  <p className="ml-5 text-gray-500 text-base font-thin">
                    {item.class}
                  </p>
                </div>
                <div className="flex items-center">
                  <span
                    className="text-gray-500 font-semibold mx-2 p-2 border rounded-md hover:text-white hover:bg-blue-200 cursor-pointer"
                    // onClick={() => editStudentData(item)}
                  >
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                    </svg>
                  </span>
                  {/* <span
                    className="text-green-500 font-semibold p-2 border rounded-md hover:bg-green-200 cursor-pointer"
                    // onClick={() => editGradeData(item)}
                  >
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z" />
                    </svg>
                  </span> */}
                  <span
                    className="block text-green-500 font-semibold p-2 border rounded-md hover:bg-green-200 cursor-pointer"
                    onClick={() => showDroplist(item)}
                  >
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z" />
                    </svg>
                  </span>
                  {isOpen && item.id === itemRow.id && droplist}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-300 flex flex-row-reverse px-2 py-3">
            <button className="bg-blue-500 py-2 px-4 rounded text-white">
              Actualiser
            </button>
            <button className="py-2 px-4 rounded text-gray-600">Ajouter Eleve</button>
          </div>
        </div>
        {/* {editRow && editView} */}
      </div>
{/* 
      <div className="rounded-lg overflow-hidden shadow-lg bg-white min-h-64 sm:w-1/2 md:w-1/3">
        <div className="flex">
          <span>Cours</span>
          <span>Premiere </span>
          <span>Cours</span>
          <span>Cours</span>
        </div>
      </div> */}
    </div>
  );
};

export default StudentReadWrite;
