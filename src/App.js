import React from "react";
import CustomTimePicker from "./components/CustomTimePicker";
import CustomDatePicker from "./components/CustomDatePicker";
import CustomButton from "./components/CustomButton";
import CustomButtonGroup from "./components/CustomButtonGroup";
import CustomSlider from "./components/CustomSlider";
import CustomSwitch from "./components/CustomSwitch";
import SimpleList from "./components/SimpleList";
import NestedList from "./components/NestedList";
import FolderList from "./components/FolderList";
import CustomTextField from "./components/CustomTextField";
import CustomSelectBox from "./components/CustomSelectBox";
import LinearProgressBar from "./components/LinearProgressBar";
import CircularProgressBar from "./components/CircularProgressBar";
import SnackbarExample from "./components/SnackBarExample";
import "./App.css";

import { listData } from './dataInfo';

function App() {
  return (
    <div className="w-full mx-auto flex p-6 bg-gray-100 rounded-lg shadow-xl grid grid-cols-2">
      <div className="ml-6 pt-1 col-span-1">
        <div className="mb-5 flex">
          <CustomTimePicker label="Alarm clock" />
          <CustomDatePicker label="Date" defaultValue={new Date(2020, 0, 1)} color="secondary" />
        </div>

        <div className="mb-5">
          <LinearProgressBar defaultValue={30} color="primary" />
          <LinearProgressBar defaultValue={50} color="secondary" />
          <LinearProgressBar defaultValue={80} />
        </div>

        <div className="mb-5">
          <LinearProgressBar defaultValue={30} color="primary" withLabel />
          <LinearProgressBar defaultValue={50} color="secondary" withLabel />
          <LinearProgressBar defaultValue={80} withLabel />
        </div>

        <div className="mb-5 flex justify-around items-end">
          <CircularProgressBar defaultValue={80} radius={40} color="primary" withLabel />
          <CircularProgressBar defaultValue={50} radius={40} color="secondary" withLabel />
          <CircularProgressBar defaultValue={30} radius={40} withLabel />
        </div>

        <div className="mb-5 flex justify-around items-end">
          <CircularProgressBar defaultValue={80} radius={40} color="primary" />
          <CircularProgressBar defaultValue={50} radius={40} color="secondary" />
          <CircularProgressBar defaultValue={30} radius={40} />
        </div>

        <div className="mb-5 flex justify-between items-end">
          <CustomButton label="Primary button" size="small" color="primary" />
          <CustomButton label="Primary button" size="medium" color="primary" />
          <CustomButton label="Primary button" size="large" color="primary" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButton label="Secondary button" size="small" color="secondary" />
          <CustomButton label="Secondary button" size="medium" color="secondary" />
          <CustomButton label="Secondary button" size="large" color="secondary" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButton label="Default button" size="small" />
          <CustomButton label="Default button" size="medium" />
          <CustomButton label="Default button" size="large" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="small" variant="outlined" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="medium" variant="outlined" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="large" variant="outlined" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="small" variant="contained" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="medium" variant="contained" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="large" variant="contained" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="small" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="medium" />
          <CustomButtonGroup label={["ONE", "TWO", "THREE"]} size="large" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomSlider defaultValue={30} color="primary" />
          <CustomSlider defaultValue={50} color="secondary" />
          <CustomSlider defaultValue={70} />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomSwitch defaultValue={true} label="Switch with label" color="primary" />
          <CustomSwitch label="Switch with label" color="secondary" />
          <CustomSwitch defaultValue={true} />
        </div>

        <div className="mb-5 flex justify-between items-end">
          <CustomTextField defaultValue="hello, world" color="primary" variant="outlined" />
          <CustomTextField defaultValue="hello, world" color="secondary" variant="outlined" />
          <CustomTextField defaultValue="hello, world" variant="outlined" />
        </div>
        <div className="mb-5 flex justify-between items-end">
          <CustomTextField defaultValue="hello, world" color="primary" />
          <CustomTextField defaultValue="hello, world" color="secondary" />
          <CustomTextField defaultValue="hello, world" />
        </div>

        <div className="mb-5 flex justify-between items-end">
          <CustomSelectBox label="Assigned to" defaultValue="Arlene Mccoy" options={["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook", "Tanya Fox", "Hellen Schmidt", "Tailwind"]} color="primary" variant="outlined" />
          <CustomSelectBox label="Assigned to" defaultValue="Arlene Mccoy" options={["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook", "Tanya Fox", "Hellen Schmidt", "Tailwind"]} color="secondary" variant="outlined" />
          <CustomSelectBox label="Assigned to" defaultValue="Arlene Mccoy" options={["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook", "Tanya Fox", "Hellen Schmidt", "Tailwind"]} variant="outlined" />
        </div>

        <div className="mb-5 flex justify-between items-end">
          <CustomSelectBox label="Assigned to" defaultValue="Arlene Mccoy" options={["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook", "Tanya Fox", "Hellen Schmidt", "Tailwind"]} color="primary" />
          <CustomSelectBox label="Assigned to" defaultValue="Arlene Mccoy" options={["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook", "Tanya Fox", "Hellen Schmidt", "Tailwind"]} color="secondary" />
          <CustomSelectBox label="Assigned to" defaultValue="Arlene Mccoy" options={["Wade Cooper", "Arlene Mccoy", "Devon Webb", "Tom Cook", "Tanya Fox", "Hellen Schmidt", "Tailwind"]} />
        </div>

        <div className="mb-5">
          <p className="text-2xl">Positioned Snackbar</p>
          <SnackbarExample />
        </div>

      </div>
      <div className="ml-6 pt-1 col-span-1">
        <h1 className="text-2xl text-blue-700 leading-tight text-center">
          Tailwind and Create React App
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-start bg-gray-100 col-span-2">
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
