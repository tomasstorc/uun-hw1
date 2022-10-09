import React from "react";

interface Istudent {
  name: string;
  bio: string;
  rating: string;
}

interface studentsDataProps {
  studentsData: Istudent[];
}

const Table = ({ studentsData }: studentsDataProps) => {
  return (
    <div className="mt-5 ">
      <table className="table-auto text-left border border-black w-full ">
        <thead className="bg-gray-100 p-5">
          <tr>
            <th>Jméno</th>
            <th>Bio</th>
            <th>Průběžné hodnocení</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr className="border border-black">
              <td>{student.name}</td>
              <td>{student.bio}</td>
              <td>{student.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
