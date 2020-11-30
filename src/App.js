import React from "react";
import CustomTimePicker from "./components/CustomTimePicker";
import CustomDatePicker from "./components/CustomDatePicker";
import CustomButton from "./components/CustomButton";
import CustomButtonGroup from "./components/CustomButtonGroup";
import CustomSlider from "./components/CustomSlider";
import CustomSwitch from "./components/CustomSwitch";
import CustomTextField from "./components/CustomTextField";

import SimpleList from "./components/SimpleList";
import NestedList from "./components/NestedList";
import FolderList from "./components/FolderList";
import Avatar from "./components/Avatar";
import CheckBox from "./components/CheckBox";
import FloatingActionButton from "./components/FloatingActionButton";
import RadioGroup from "./components/RadioGroup";
import TransferList from "./components/TransferList";
import EnhancedTransferList from "./components/EnhancedTransferList";
import BottomNavigation from "./components/BottomNavigation";
import BottomNavigationWithNoLabel from "./components/BottomNavigationNoLabel";

import RemyAvatar from "./assets/images/avatars/Remy.jpg";
import TravisAvatar from "./assets/images/avatars/Travis.jpg";
import CindyAvatar from "./assets/images/avatars/Cindy.png";

import "./App.css";

import {
  listData,
  radioGroupData,
  transferListData,
  bottomNavigation,
  bottomNavigationWithNoLabel,
} from './dataInfo';

function App() {
  return (
    <div className="w-full mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl grid grid-cols-2">
      <div className="ml-6 pt-1 col-span-1">
        <div className="mb-5">
          <CustomTimePicker label="Alarm clock" />
        </div>
        <div className="mb-5">
          <CustomDatePicker label="Alarm clock" />
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
      </div>
      <div className="ml-6 pt-1 col-span-1">
        <h1 className="text-2xl text-blue-700 leading-tight text-center">
          Tailwind and Create React App
        </h1>
      </div>

      <div className="flex flex-col md:flex-row py-32 justify-center items-start bg-gray-100 col-span-2">
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

      <div className="col-span-2 flex flex-row justify-evenly items-start">
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
          <h1 className="text-2xl">Checkbox</h1>
          <div className="py-2 px-6 flex flex-row">
            <CheckBox theme="secondary" checked />
            <CheckBox theme="primary" checked />
            <CheckBox />
            <CheckBox status="disabled" checked />
            <CheckBox theme="default" checked />
          </div>
          <p className="text-2xl mt-12">Checkbox Sizes</p>
          <div className="py-2 px-6 flex flex-row">
            <div className="flex flex-col items-center justify-center mx-4">
              <p>Small</p>
              <CheckBox theme="secondary" size="small" checked />
            </div>
            <div className="flex flex-col items-center justify-center mx-4">
              <p>Medium</p>
              <CheckBox theme="secondary" size="medium" checked />
            </div>
            <div className="flex flex-col items-center justify-center mx-4">
              <p>Large</p>
              <CheckBox theme="secondary" size="large" checked />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Floating Action Buttons</h1>
          <div className="flex flex-row items-start">
            <FloatingActionButton color="primary" type="add" />
            <FloatingActionButton color="secondary" type="edit" />
            <FloatingActionButton type="extended" label="Extended" />
          </div>
          <div className="flex flex-row items-center">
            <FloatingActionButton size="small" color="primary" type="add" />
            <FloatingActionButton size="medium" color="primary" type="add" />
            <FloatingActionButton size="large" color="primary" type="add" />
          </div>
          <div className="flex flex-row items-center">
            <FloatingActionButton size="small" color="primary" type="extended" label="Extended" />
            <FloatingActionButton size="medium" color="primary" type="extended" label="Extended" />
            <FloatingActionButton size="large" color="primary" type="extended" label="Extended" />
          </div>
        </div>
      </div>

      <div className="col-span-2 flex flex-row justify-evenly items-start mt-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl">Radio Group</h1>
          <RadioGroup size="medium" color="secondary" radioGroupData={radioGroupData} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl pb-6">Simple Transfer List</h1>
          <TransferList transferListData={transferListData} />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl pb-6">Enhanced Transfer List</h1>
          <EnhancedTransferList transferListData={transferListData} />
        </div>
      </div>

      <div className="col-span-1 px-4 mt-12 flex flex-col items-center">
        <h1 className="text-2xl pb-6">Bottom Navigation</h1>
        <BottomNavigation bottomNavigationData={bottomNavigation} />
      </div>

      <div className="col-span-1 px-2 mt-12 flex flex-col items-center">
        <h1 className="text-2xl pb-6">Bottom Navigation with no label</h1>
        <BottomNavigationWithNoLabel navigationData={bottomNavigationWithNoLabel} />
      </div>
    </div>
  );
}

export default App;
