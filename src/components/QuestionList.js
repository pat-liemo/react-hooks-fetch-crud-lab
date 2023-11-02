import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, setQuestions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map(function(question) {
          return (
            <QuestionItem
            key={question.id}
            question={question}
            setQuestions={setQuestions}
            />
          )
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
