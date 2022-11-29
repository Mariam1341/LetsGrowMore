import React from 'react';
import FormInput from './Componants/FormInput';
import { useState } from 'react';
import './App.css';


const App = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    website:'',
    image:'',
    gender:'',
    skills:[],
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Full Name should be 3-100 characters and shouldn't include any special character!",
      label: "Full Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a  valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "website",
      type: "text",
      placeholder: "Website",
      errorMessage: "It should be a  valid website!",
      label: "Website",
      required: true,
    },
    {
      id: 4,
      name: "image",
      type: "text",
      placeholder: "Image",
      label: "Image",
      required: false,
    },
  ];
  const [students, setStudents] = useState([])
  let obj = {
    id :'',
    name :'',
    email:'',
    website:'',
    image:'./imgs/img1.jpg',
    gender:'',
    skills:[],
  }
  

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    obj.id = students.length
    obj.name = e.target.fullName.value
    obj.email = e.target.email.value
    obj.website = e.target.website.value
    obj.image = e.target.image.value
    
    let checkboxes= document.querySelectorAll('input[name="skill"]:checked');
    let output= [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    if(document.getElementById('male').checked) {
      obj.gender = 'Male'
    }else if(document.getElementById('female').checked) {
      obj.gender = 'Female'
    }
    obj.skills = output
    const tempArray = [...students]
    tempArray.push(obj)
    setStudents(tempArray)
  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <label>Gender</label>
        <div className='Gender'>
          <div> 
          <input type="radio" value="Female" id="female"/>
          <label for="html" className='g'>Female</label><br></br>
          </div>
          <div>
          <input type="radio" value="Male" id ="male"/>
          <label for="css" className='g'>Male</label><br></br>
          </div>
        </div>
        <label>Skills</label>
        <div className='skills'>
          <div>
          <input type="checkbox" id="Java" name="skill" value="Java"/>
          <label for="Java" className='g'> Java</label><br></br>
          </div>
            <div>
          <input type="checkbox" id="HTML" name="skill" value="HTML"/>
          <label for="HTML" className='g'> HTML</label><br></br>
            </div>
              <div>
          <input type="checkbox" id="CSS" name="skill" value="CSS"/>
          <label for="CSS"className='g'> CSS</label>
              </div>
        </div>
        <button className='submit'>Enroll Student</button>
      </form>
      {/* <h1 className='head'>Student Enrollment</h1> */}
      <div className="stuData">
          {students.map(student => {
            return <div key={student.id} className="stuCard">
              <div className="stuDescription">
                <p><b>Name:</b> {student.name}</p>
                <p><b>Gender:</b> {student.gender}</p>
                <p><b>Email:</b> {student.email}</p>
                <p><b>Website:</b> {student.website}</p>
                <p><b>Skills:</b> {student.skills.toString()}</p>
              </div>
              <div className='line'></div>
              <div className="stuImg">
                <img src={student.image} alt={student.name} onError={({target}) => {
                    target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACLCAMAAAB8+3pDAAAAP1BMVEWhoaHu7u7x8fGenp6bm5utra3r6+vn5+f09PSwsLCnp6fi4uLDw8O8vLze3t6kpKTR0dHX19e2trbJycmTk5Nn+Zp7AAAEPklEQVR4nO3ai5ajIAwGYAiI4hXbff9nXbTdGZ1azZ/C2LOneYCerwGCBJR+j1BnA+7xcazj41jHx7GO1xwU41wHOdKu6cdx7PumdGc5qhDGS22sKS5dG8bGVdVrmRE5qLyYwRo1hzE2hvFt6F0ltkgc1NR3wyKMMaq+hFLLKBKHU4+MO8aarhclReCoumeMG6XoBRDUQa4J9Q5jkqgWh2AOcu1g7T4jhi0cKsEcV7M3JIuU1A0IgRzdwFLMELC0IY5YNbgOZYpsDroez4wFpINGBnCUgGKCjAiE76AWSUeMIZOjwBjKBgDCdzgPOlQBrBlkXPirBU9IxnGJCcnhKNlF7Dv4Ox7bQT06LHHp8jc8vmPEHarO4AgCh2WvGL7jKnGwa2peB3+CZHZc3sXB/fm881T59A7JulWeu2Cy1rEc+RDVdZPBoQ+OLZuO9OtFV16wwbA/UoF9X7BwzTWDYwS/T2PYnvvr+b7XZ0f6fS4GcIy6hcmw72uqAjowpmV3ZYD60eELpii4E5VfTz0+TaduFXOG8PMhUEwQ5qcy3yFJR3Rw/yXbIdnmYkGtEjtIsM1Nw8L8eb4Drh5TsI+4eb/Hcuy3on0//fc62Ja6RYbzi9YNPjC24f444HB44wGoknwH7fbVt4I/TSEH/CFk+A0hqJ8MT5CS/dOIowI7ZOyiDjp0g9T2aGavFtBBgXHp8S/8nzz90xlS9tyUDBq6qYPvxZhFhN9xkDn2L+cWDvYJSubgFhELXkjB4+J4+Rj4S1bm4H0PmTa7g9ePAUqHzKGrggHxee9Np+A0yvjfP3IH47yNXlbKHHR43kaLRzYHPCwix2EpM+itejYH/KN5xuV3HIcHGW6z4TXH8ZZrAljVZQ7GDtOiD1Hw/UV3h4q5kuX+/nj6WGoNqctc7y5mBvtMFyH5HMjbC1MgkxU7N0BPQIwHJityvnXgQdvUwXFfP7Idlb5uvCo8CFtzn/nxHKT7zsoal1a1PSMpDAeRC575gG2TonzQR5RDB1VNq2S95EVShqPxOXBQGeoXUrGk1KHcoew4YiqbLo1ijjhpm6fD89QRx+Nay+bm0zDWB7dd3bYdMRPXIl0mFhKjtpPy6CCi5upfnZo7FOXHx834p4OoTz4cD5JYU34mZe0gN3revv4qRRXjavdZOohCkW04HiS2bstqy0Fh+DXFndJ95eTLQchr22SSofnhoB7fTZNAypVD8oggDaReOmSPbtJAbldW93ycMii3uHUWZwf+xDVh3C5pZkd5IkPdenrq7HTcr0cmh+TiLSnkno/mXMbcXVSyi9mkYbo5H5w+Qt6o3ewQvWRIGbaZHMwbhJyOQEqT4L48ccSVq87b4haOy+SQPPhNHJ7ew1FMjnOr+rcDfsaQx6HfxXF6Of04Nh2C98//tePkr7F3cviPYxnzfvtxfBzPHN3HsXK0b+J4n3z8BWj4ORQloy1HAAAAAElFTkSuQmCC"
                    target.onerror = null
                  }
                }/>
              </div>
            </div>
          })}
        </div>
      </div>
  );
};

 
export default App;

// take data from user 
//show data 
// make hspital mangment project

// make it zero if there is no content in the array
// make margin bottom to the card
// make slider if it is be more than the page
// change font and design 
// make media for the project