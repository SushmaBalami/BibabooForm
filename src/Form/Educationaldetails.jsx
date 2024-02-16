import React, {useState} from 'react'

const Educationaldetails = ({ selectedAccount, onClose }) => {
    const [formData, setFormData] = useState({
        highestEducation: "",
        faculty: "",
        boardUniversity: "",
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
     <h3  className="title"
          style={{marginLeft:"500px", width: "fit-content", fontSize: "20px" }}>Educational Detail:</h3>
     <form style={{
            display: "flex",
            fontFamily: "Times New Roman",
            fontSize: "20px",
            justifyContent:"space-between",
          }}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"style={{
            display: "flex",
            justifyContent:"space-between",
          margin:"10px",
            fontFamily: "Times New Roman",
            fontSize: "20px",
          }}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="highestEducation"
              style={{
                margin:"10px",
            }}
            >
              Highest Education:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              style={{
                margin:"10px",
              }}
              type="text"
              name="highestEducation"
              value={
                localStorage.highestEducation
                  ? localStorage.getItem("highestEducation")
                  : formData.highestEducation
              }
              disabled={localStorage.getItem("highestEducation") !== null}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="faculty"
              style={{
                margin:"10px",
              }}
            >
              Faculty:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              style={{
                margin:"10px",
              }}
              type="text"
              name="faculty"
              value={
                localStorage.faculty
                  ? localStorage.getItem("faculty")
                  : formData.faculty
              }
              disabled={localStorage.getItem("faculty") !== null}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="boardUniversity"
              style={{
                margin:"10px",
              }}
            >
              Board/University:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
              style={{
                margin:"10px",
              }}
              type="text"
              name="boardUniversity"
              value={
                localStorage.boardUniversity
                  ? localStorage.getItem("boardUniversity")
                  : formData.boardUniversity
              }
              disabled={localStorage.getItem("boardUniversity") !== null}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        </form>
        
        </div>
        
    
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
    </>
  )
}

export default Educationaldetails