import React, { useState } from "react";
import "./App.css";
import { Collapse, Space } from "antd";
import Userdetails from "./Form/userdetails";
import Educationaldetails from "./Form/Educationaldetails";
import Address from "./Form/Address";

const App = ({ selectedAccount, onClose }) => {
  const [formData, setFormData] = useState({
    declaration: false,
    agreeToTerms: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      for (var key in formData) {
        localStorage.setItem(key, formData[key]);
      }

      // console.log("Form data submitted:", formData);
      onClose();
    } catch (error) {
      console.error("Error submitting KYC form:", error);
    }
  };
  const handleSubmit = async (e) => {
    localStorage.clear();
    e.preventDefault();
    try {
      const response = await axios.post("/api/kyc", formData);

      // console.log("Form data submitted:", formData);
      onClose();
    } catch (error) {
      console.error("Error submitting KYC form:", error);
    }
  };
  return (
    <>
      <div className="collapse-content" >
        <Space direction="vertical" > 
          <Collapse
            collapsible="header"
            items={[
              {
                key: "1",
                label: "User Details ",
                children: <p>{<Userdetails />}</p>,
              },
            ]}
            style={{
              width: "1400px",
              backgroundColor: "rgb(20, 20, 27)",
              fontFamily:"Times New Roman",
            }}
          />
          <Collapse
            collapsible="header"
            items={[
              {
                key: "2",
                label: "Educational Details",
                children: <p>{<Educationaldetails />}</p>,
              },
            ]}
            style={{
              width: "1400px",
              margin: "auto",
              backgroundColor: "rgb(20, 20, 27)",
            }}
          />
          <Collapse
            collapsible="header"
            items={[
              {
                key: "3",
                label: "Address Details",
                children: <p>{<Address />}</p>,
              },
            ]}
            style={{
              width: "1400px",
              margin: "auto",
              backgroundColor: "rgb(20, 20, 27)",
            }}
          />
        </Space>
      </div>
      {/* Declaration */}
      <h3 className="text-lg font-bold mb-2">Declaration:</h3>
      <div className="mb-4">
        <label className="flex items-center text-gray-700 text-sm">
          <input
            type="checkbox"
            name="declaration"
            checked={
              localStorage.declaration
                ? localStorage.getItem("declaration")
                : formData.declaration
            }
            disabled={localStorage.getItem("declaration") !== null}
            onChange={handleChange}
            className="mr-2"
            required
          />
          I declare that all the information provided above is genuine and
          correct to the best of my knowledge.
        </label>
      </div>

      <div className="mb-6">
        <label className="flex items-center text-gray-700 text-sm">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={
              localStorage.agreeToTerms
                ? localStorage.getItem("agreeToTerms")
                : formData.agreeToTerms 
            }
            disabled={localStorage.getItem("agreeToTerms") !== null}
            onChange={handleChange}
            className="mr-2"
            required
          />
          I agree to the terms and conditions to be applied.
        </label>
      </div>

      <div className="flex gap-10"
      style={{
        display: "flex", 
         margin:"10px",
      }}
      >
        <button
          onClick={handleSave}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          style={{
            margin:"10px",
            width:"100px",
            height:"30px",
          }}
        >
          Save
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          style={{
            margin:"10px",
            width:"100px",
            height:"30px",
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default App;
