import React from 'react'

const Questions = ({ questions }) => {
  return (
    <div>
      <center><h1>Test Questions</h1></center>
      {questions.map((question) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{question.category}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{question.question}</h6>
            <p className="card-text">{question.correct_answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Questions