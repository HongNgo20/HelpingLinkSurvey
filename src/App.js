
import Tittle from "./components/Tittle";
import './App.css'

const Survey = () => {
  

  const questions = [
    {
      id: 1,
      text: "1) What type of device are you using (e.g. desktop, laptop, tablet, smartphone)?",
      type: "text",
    },
    {
      id: 2,
      text: "2) What is the operating system and browser version you are using?",
      type: "text",
    },
    {
      id: 3,
      text: "3) What is the main problem you are facing while using the website. Please provide a step-by-step description of how the problem occurs?",
      type: "text",
    },
    {
      id: 4,
      text: "4) Are there any specific pages or features on the website that you may have trouble with?",
      type: "text",
    },
    {
      id: 5,
      text: "5) How easy is it to navigate on our website?",
      type: "radio",
      options: [
        { id: 1, text: "Very Easy" },
        { id: 2, text: "Easy" },
        { id: 3, text: "Neutral" },
        { id: 4, text: "Not Easy"},
        { id: 5, text: "Very Difficult" },
      ],
    },
    {
      id: 6,
      text: "6) Do you think you had to click too much to get what you were looking for? Please list the subject that you had a hard time finding.",
      type: "text",
    },
    {
      id: 7,
      text: "7) Did the links take you to the relevant pages?",
      type: "text",
    },
    {
      id: 8,
      text: "8) Was the content presented in the right format?",
      type: "radio",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 9,
      text: "9) Were you able to differentiate links easily??",
      type: "radio",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 10,
      text: "10) On a scale of 1-10 how do you rate the clarity of the content?",
      type: "text",
    },
    {
      id: 11,
      text: "11) On a scale of 0-10, how would you rate the usability of our website?",
      type: "text",
    },
    {
      id: 12,
      text: "12) Did it take too long to fetch your details on our website?",
      type: "radio",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 13,
      text: "13) Did you find the images on the website useful & relevant?",
      type: "radio",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 14,
      text: "14) Did you like the design of the website?",
      type: "radio",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
      ],
    },
    {
      id: 15,
      text: "15) What do you like about our existing website?",
      type: "text",
    },
    {
      id: 16,
      text: "16) What would you like to change on our existing website?",
      type: "text",
    },
    {
      id: 17,
      text: "17) How likely are you to recommend us to a friend?",
      type: "radio",
      options: [
        { id: 1, text: "Very Likely" },
        { id: 2, text: "Likely" },
        { id: 3, text: "Neutral" },
        { id: 4, text: "Unlikely" },
        { id: 5, text: "Very Unlikely" },
      ],
    },
    {
      id: 18,
      text: "18) On a scale of 1-10, how would you rate the performance of our website??",
      type: "text",
    },
  ];

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
    console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answers);
  };

  return (
    <>
    <Tittle />
      
  
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          {question.type === "text" ? (
            <input
              type={question.type}
              name={question.id}
              onChange={handleChange}
            />
          ) : (
            question.options.map((option) => (
              <label key={option.id}>
                <input
                  type={question.type}
                  name={question.id}
                  value={option.id}
                  onChange={handleChange}
                />
                {option.text}
              </label>
            ))
          )}
        </div>
      ))}
         
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Survey;
  
