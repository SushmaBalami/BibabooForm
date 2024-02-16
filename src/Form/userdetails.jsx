import React, { useState } from "react";


const Userdetails = ({ selectedAccount, onClose }) => {
  const [formData, setFormData] = useState({
    accountType: "",
    salutation: "",
    gender: "",
    contactNumber: "",
    fullName: "",
    dateOfBirth: "",
    emailAddress: "",
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
      <div className="form-container" 
        style={{
            display:"flex",
            flexDirection:"column",
            backgroundColor:"rgb(225, 231, 212)",
            width:"100%",
      
        }}>
        <h2
          className="title"
          style={{marginLeft:"500px", width: "fit-content", fontSize: "20px" }}
        >
          Provide your Personal Details
        </h2>
      
        <form
          style={{
            display: "flex",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"  style={{
            display: "flex",
            justifyContent:"space-between",
          margin:"10px",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}>

            <div className="mb-4" >
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="salutation"
                style={{
                    margin:"10px",
                }}
              >
                Salutation:
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                style={{
                    width:"150px",
                    height:"30px",
                    borderRadius:"2px"

            }}
                name="salutation"
                value={
                  localStorage.salutation
                    ? localStorage.getItem("salutation")
                    : formData.salutation
                }
                disabled={localStorage.getItem("salutation") !== null}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="gender"
                style={{
                    margin:"10px",
                }}
              >
                Gender:
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                style={{
                    width:"150px",
                    height:"30px",
                    borderRadius:"2px"

            }}
                name="gender"
                value={
                  localStorage.gender
                    ? localStorage.getItem("gender")
                    : formData.gender
                }
                disabled={localStorage.getItem("gender") !== null}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-4" 
          style={{
            margin:"10px",
          }}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="contactNumber"
            >
              Contact No:
            </label>
            <div className="flex items-center">
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="tel"
                name="contactNumber"
              
                value={
                  localStorage.contactNumber
                    ? localStorage.getItem("contactNumber")
                    : formData.contactNumber
                }
                disabled={localStorage.getItem("contactNumber") !== null}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4"
          style={{
            margin:"10px", 
          }}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              type="text"
              name="fullName"
              value={
                localStorage.fullName
                  ? localStorage.getItem("fullName")
                  : formData.fullName
              }
              disabled={localStorage.getItem("fullName") !== null}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4"
           style={{
            margin:"10px", 
           
          }}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateOfBirth"
            >
              Date of Birth:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              type="date"
              name="dateOfBirth"
              value={
                localStorage.dateOfBirth
                  ? localStorage.getItem("dateOfBirth")
                  : formData.dateOfBirth
              }
              disabled={localStorage.getItem("dateofBirth") !== null}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4"
           style={{
            margin:"10px", 
          }}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="emailAddress"
            >
              Email Address:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              type="email"
              name="emailAddress"
              value={
                localStorage.emailAddress
                  ? localStorage.getItem("emailAddress")
                  : formData.emailAddress
              }
              disabled={localStorage.getItem("emailAddress") !== null}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        </div>
      
      <button className="button-link"
       type="button"
       onClick={handleSave}
      
      style={{
        width:"15%",
        height:"30px",
        margin:"10px",
        borderRadius:"1px",
      }}
      >Save</button>
  
      </div>
    </>
  );
};

export default Userdetails;
