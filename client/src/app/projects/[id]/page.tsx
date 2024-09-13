"use client";

import React, { useState } from "react";
import ProjectHeader from "@/components/ProjectHeader";

// type Props = {
//   params: {
//     id: string;
//   };
// };

const Page = () => {
  // const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  // const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      {/* Modal New Tasks */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab === "Board" && <Board />} */}
    </div>
  );
};

export default Page;
