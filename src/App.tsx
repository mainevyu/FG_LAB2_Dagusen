import './App.css'

function App() {  
  const studentName = "Charmaine Dagusen";
  const course = "Information Technology";
  const isEnrolled = true;
  const subjects = 
  ["Introduction to Applications Development and Emerging Technologies",
  "Database Management and Web Systems", 
  "Object-Oriented Programming", 
  "Networking and Communication"];

return (
  <>
  <h1>{studentName}</h1>
  <p>{course}</p>
  <p>{isEnrolled ? "Student is enrolled" : "Student is not enrolled"}</p>
  <ul>
  {subjects.map((subject, index) => (
  <li key={index}>{subject}</li>
  ))}
  </ul>
</>
)

}

export default App
