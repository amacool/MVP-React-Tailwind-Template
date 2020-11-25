import React from "react";
import CustomTimePicker from "./components/CustomTimePicker";
import CustomButton from "./components/CustomButton";
import CustomButtonGroup from "./components/CustomButtonGroup";
import CustomSlider from "./components/CustomSlider";
import SimpleList from "./components/simpleList";
import NestedList from "./components/nestedList";
import FolderList from "./components/folderList";
import "./App.css";

import { listData } from './dataInfo';

function App() {
  return (
    <div className="w-full mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl grid grid-cols-2">
      <div className="ml-6 pt-1 col-span-1">
        <div className="mb-5">
          <CustomTimePicker label="Alarm clock" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButton label="Primary button" size="small" theme="primary" />
          <CustomButton label="Primary button" size="medium" theme="primary" />
          <CustomButton label="Primary button" size="large" theme="primary" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButton label="Secondary button" size="small" theme="secondary" />
          <CustomButton label="Secondary button" size="medium" theme="secondary" />
          <CustomButton label="Secondary button" size="large" theme="secondary" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButton label="Default button" size="small" theme="default" />
          <CustomButton label="Default button" size="medium" theme="default" />
          <CustomButton label="Default button" size="large" theme="default" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="small" theme="outlined" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="medium" theme="outlined" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="large" theme="outlined" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="small" theme="contained" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="medium" theme="contained" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="large" theme="contained" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="small" theme="text" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="medium" theme="text" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="large" theme="text" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomSlider defaultValue={30} />
        </div>
      </div>
      <div className="ml-6 pt-1 col-span-1">
        <h1 className="text-2xl text-blue-700 leading-tight text-center">
          Tailwind and Create React App
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row py-32 justify-center items-start bg-gray-100 col-span-2">
        <div className="mx-4 w-full md:w-1/4 my-6">
          <h1 className="text-2xl pb-4">Simple List</h1>
          <SimpleList simpleListData={listData.simpleListData} />
        </div>
        <div className="mx-4 w-full md:w-1/4 my-6">
          <h1 className="text-2xl pb-4">Nested List</h1>
          <NestedList nestedListData={listData.nestedListData} />
        </div>
        <div className="mx-4 w-full md:w-1/4 my-6">
          <h1 className="text-2xl pb-4">Folder List</h1>
          <FolderList folderListData={listData.folderListData} />
        </div>
      </div>

    </div>
  );
}

export default App;
