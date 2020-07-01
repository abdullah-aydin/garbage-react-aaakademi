import React, { useState } from "react"; // @material-ui
import { Grid } from "@material-ui/core";
// Component
import Card from "../../../components/Homepage/Card/Card";
// Theme
// Data 
import {homePageCardData as DATA} from "../../../data/Data";


function Cards() {

  // SOLVED QUESTION SECTION
  const [solvedQuestions, setSolvedQuestions] = useState(DATA.solvedQuestions);
  const [targets, setTargets] = useState(DATA.targets);
  const [questionRecord, setQuestionRecord] = useState(DATA.questionRecord);
  const [bookRecord, setBookRecord] = useState(DATA.bookRecord);
  
  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            bgColor="#35d0ba"
            state1={solvedQuestions.total}
            state2={solvedQuestions.week}
            state3={solvedQuestions.date}
            state4={solvedQuestions.text}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            bgColor="#ffcd3c"
            state1={targets.booksTargets}
            state2={targets.questionsTargets}
            state3={targets.questionsOrBooks}
            state4={targets.text}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            bgColor="#ff9234"
            state1={questionRecord.record}
            state3={questionRecord.date}
            state4={questionRecord.text}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            bgColor="#d92027"
            state1={bookRecord.record}
            state3={bookRecord.date}
            state4={bookRecord.text}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Cards;
