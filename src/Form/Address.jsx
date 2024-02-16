import React, { useState } from "react";

const Address = ({ selectedAccount, onClose }) => {
  const ProvinceObject = {
    option1: "Province No.1",
    option2: "Madhesh Pradesh",
    option3: "Bagmati Pradesh",
    option4: "Gandaki Pradesh",
    option5: "Lumbini Pradesh",
    option6: "Karnali Pradesh",
    option7: "Sudurpashchim",
  };
  const DistrictObject = {
    option1: "District 1",
    option2: "District 2",
    option3: "District 3",
    option4: "District 4",
    option5: "District 5", 
    option6: "District 6",
    option7: "District 7",
    option8: "District 8",
    option9: "District 9",
  };
  const [formData, setFormData] = useState({
    province: "",
    district: "",
    localBody: "",
    wardNo: "",
    toleStreetName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  
  const handleSave = () => {
    console.log("Form Data:", formData);
  };
  return (
    <>
      <div className="main-container">
        <div
          className="form-container"
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(225, 231, 212)",
            width: "100%",
          }}
        >
          <h3
            className="text-lg font-bold mb-4"
            style={{
              marginLeft: "500px",
              width: "fit-content",
              fontSize: "20px",
            }}
          >
            Provide Address Detail:
          </h3>
          <form
            style={{
              display: "flex",
              fontFamily: "Times New Roman",
              fontSize: "20px",
            }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
                fontFamily: "Times New Roman",
                fontSize: "20px",
              }}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="province"
                  style={{
                    margin: "10px",
                  }}
                >
                  Province:
                  </label>
                <select
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  style={{
                    margin: "10px",
                   width:"200px",
                   height:"25px",
                  }}
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Province
                  </option>
                  {Object.keys(ProvinceObject).map((key) => (
                    <option key={key} value={key}>
                      {ProvinceObject[key]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="district"
                  style={{
                    margin: "10px",
                  }}
                >
                  District:
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  style={{
                    margin: "10px",
                    width:"200px",
                    height:"25px",
                  }}
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                   <option value="" disabled>
                    Select District
                  </option>
                  {Object.keys(DistrictObject).map((key) => (
                    <option key={key} value={key}>
                      {DistrictObject[key]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="localBody"
                  style={{
                    margin: "10px",
                  }}
                >
                 Rural/Municipality
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  style={{
                    margin: "10px",
                  }}
                  type="text"
                  name="localBody"
                  value={
                    localStorage.localBody
                      ? localStorage.getItem("localBody")
                      : formData.localBody
                  }
                  disabled={localStorage.getItem("localBody") !== null}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="wardNo"
                  style={{
                    margin: "10px",
                  }}
                >
                  Ward No.:
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  style={{
                    margin: "10px",
                  }}
                  type="text"
                  name="wardNo"
                  value={
                    localStorage.wardNo
                      ? localStorage.getItem("wardNo")
                      : formData.wardNo
                  }
                  disabled={localStorage.getItem("wardNo") !== null}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="toleStreetName"
                  style={{
                    margin: "10px",
                  }}
                >
                  Tole/Street Name:
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                  style={{
                    margin: "10px",
                  }}
                  type="text"
                  name="toleStreetName"
                  value={
                    localStorage.toleStreetName
                      ? localStorage.getItem("toleStreetName")
                      : formData.toleStreetName
                  }
                  disabled={localStorage.getItem("toleStreetName") !== null}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="button-link"
        type="button"
        onClick={handleSave}
        style={{
          width: "15%",
          height: "30px",
          margin: "10px",
          borderRadius: "1px",
        }}
      >
        Save
      </button>
    </>
  );
};

export default Address;
