import React from "react";
import InfoBox from "./components/InfoBox";
import TeacherCard from "./components/TeacherCard";
import ChartData from "./components/ChartData";
import Table from "./components/Table";
import HeadingText from "./components/HeadingText";

import { infoBoxData } from "./infoBoxData";
import { chartData } from "./chartData";
import { teacherData } from "./teacherData";
import { studentsData } from "./studentsData";

function App() {
  return (
    <div className="mt-5 mx-5">
      <div className="flex flex-row flex-wrap justify-between">
        {infoBoxData.map((item) => (
          <InfoBox title={item.title} value={item.value} unit={item.unit} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-11 md:w-100">
        <div className="basis-1/2 ml-10">
          <HeadingText>Dnešní lektor</HeadingText>
          <TeacherCard
            name={teacherData.name}
            text={teacherData.text}
            imageUrl={teacherData.imageUrl}
          />
        </div>
        <div className="basis-1/3">
          <HeadingText>Průběžné hodnocení podle témat</HeadingText>
          <ChartData data={chartData} />
        </div>
      </div>
      <HeadingText>Studenti</HeadingText>
      <Table studentsData={studentsData}></Table>
    </div>
  );
}

export default App;
