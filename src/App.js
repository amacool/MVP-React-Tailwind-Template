import React from "react";
import CustomTimePicker from "./components/CustomTimePicker";
import CustomButton from "./components/CustomButton";
import CustomButtonGroup from "./components/CustomButtonGroup";
import CustomSlider from "./components/CustomSlider";
import SimpleList from "./components/SimpleList";
import NestedList from "./components/NestedList";
import FolderList from "./components/FolderList";
import Avatar from "./components/Avatar";
import CheckBox from "./components/CheckBox";

import RemyAvatar from "./assets/images/avatars/Remy.jpg";
import TravisAvatar from "./assets/images/avatars/Travis.jpg";
import CindyAvatar from "./assets/images/avatars/Cindy.png";

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

      <div className="flex flex-col items-start">
        <h1 className="text-2xl pb-10">Avatars</h1>
        <p className="text-xl">Image Avatars</p>
        <div className="flex flex-row items-start">
          <Avatar altName="Remy Sharp" size="small" imageURL={RemyAvatar} />
          <Avatar altName="Travis Howard" size="medium" imageURL={TravisAvatar} />
          <Avatar altName="Cindy Baker" size="large" imageURL={CindyAvatar} />
        </div>
        <p className="text-xl">Letter Avatars</p>
        <div className="flex flex-row items-start">
          <Avatar avatarLabel="H" size="small" bgColor="bg-gray-400" />
          <Avatar avatarLabel="N" size="medium" bgColor="bg-yellow-600" />
          <Avatar avatarLabel="OP" size="large" bgColor="bg-purple-700" />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center">
        <p className="text-2xl">CheckBox</p>
        <div className="py-2 px-6 border border-gray-200 rounded bg-white flex flex-row">
          <CheckBox checked={true} />
          <CheckBox checked={true} theme="primary" />
        </div>
      </div>
    </div>
  );
}

export default App;
