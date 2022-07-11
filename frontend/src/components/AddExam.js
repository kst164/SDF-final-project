import React from "react";
import { useEffect, useState } from "react";
import ShortTextIcon from "@material-ui/icons/ShortText";
import { IconButton, Typography } from "@material-ui/core";
// import { BsTrash, BsFillFilterSquareFill } from "react-icons/bs";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./AddExam.css";
import "./scrolly.css";

function AddExam() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Type Your question here",
      questionType: "radio",
      options: [
        { optionText: "Option1" },
        { optionText: "Option2" },
        { optionText: "Option3" },
        { optionText: "Option4" },
      ],
      answer:false,
      answerKey:"",
      points:0,
      open: true,
    },
  ]);
  const [hour,sethour]=useState("0");
  const [minute,setminute]=useState("0");
  function changeQuestion(text, i){
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion)
  }
  function changeOptionValue(text,i,j){
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion)
    console.log(optionsQuestion)
}

function removeOption(i, j){
  var RemoveOptionQuestion = [...questions];
  if(RemoveOptionQuestion[i].options.length > 1 ){
    RemoveOptionQuestion[i].options.splice(j,1);
    setQuestions(RemoveOptionQuestion)
    console.log(i + " " + j);
  }
  else
  {
    alert("Atleast one option is Needed")
  }
}

function addOption(i){
  var optionsOfQuestion = [...questions];
  if(optionsOfQuestion[i].options.length  < 5){
    optionsOfQuestion[i].options.push({optionText: "Option" + (optionsOfQuestion[i].options.length + 1)})
  }
  else {
alert("Only 4 Options are allowed");
  }
  setQuestions(optionsOfQuestion)
}


function deleteQuestion(i){
  let qs = [...questions];
if(questions.length > 1){
  qs.splice(i,1);
}
else
{
  alert("Atleast one question is needed")
}
setQuestions(qs);
}

function requiredQuestion(i){
var reqQuestion = [...questions];
reqQuestion[i].required = ! reqQuestion[i].required
console.log( reqQuestion[i].required[i])
setQuestions(reqQuestion)
}

function addMoreQuestionField(){
  //expandCloseAll();
setQuestions([...questions, {questionText: "Question", questionType:"radio", options : [{optionText:"option 1"}], open: true, required:false}]);
}

function expandCloseAll(){
  let qs = [...questions];
  for(let j = 0; j < qs.length ; j++){
    qs[j].open = false;
  }
  setQuestions(qs);
}

function handleExpand(i){
  let qs = [...questions];
  for(let j = 0; j < qs.length ; j++){
  if(i == j){
    qs[i].open = true;
  }
  else{
    qs[j].open = true;
  }
  }
  setQuestions(qs);
}


  function questionsUI() {
    return questions.map((ques, i) => (
<Accordion
        expanded={questions.open}
        // className={questions[i].open ? "add border" : ""}
        className="hover-shadow border-primary"
        onChange={()=>{handleExpand(i)}}
      >
        <AccordionSummary
          aria-controls="panella-content"
          id="panelia-header"
          elevation={1}
          className="border-primary"
          style={{ width: "100%" }}
        >
          {!questions[i].open ? (
            <div className="saved_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontweight: "400px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >
                {i+1}. {questions[i].questionText}
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto,Ariel,sans-serif",
                              fontSize: "13px",
                              fontweight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      ></FormControlLabel>
                    </div>
                  </div>
                ))}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>

        <div className="question_boxes">
          <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input
                type="text"
                className="question"
                placeholder="Question"
                value={ques.questionText}
                onChange={(e)=>{changeQuestion(e.target.value, i)}}
              ></input>
            </div>
            {ques.options.map((op, j) => (
              <div className="add_question_body" key={j}>
                {ques.questionType != "text" ? (
                  <input
                    type={ques.questionType}
                    style={{ marginRight: "10px" }}
                  />
                ) : (
                  <ShortTextIcon style={{ marginRight: "10px" }} />
                )}
                <div>
                  <input
                    type="text"
                    className="text_input"
                    placeholder="option"
                    value={ques.options[j].optionText}
                    onChange={(e)=>{changeOptionValue(e.target.value, i, j)}}
                  ></input>
                </div>
                <IconButton aria-label="delete">
                  <CloseIcon onClick={()=>removeOption(i, j)}  />
                </IconButton>
              </div>
            ))}

            {ques.options.length < 4 ? (
              <div className="add_question_body">
                <FormControlLabel
                  disabled
                  control={
                    ques.questionType != "text" ? (
                      <input
                        type={ques.questionType}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        disabled
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )
                  }
                  label={
                    <div>
                      <input
                        type="text"
                        className="text_input"
                        style={{ fontSize: "13px", width: "60px" }}
                        placeholder="Add option"
                      ></input>
                      <Button
                        size="small"
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                        onClick={()=>addOption(i)}>
                        Add option
                      </Button>
                    </div>
                  }
                />
              </div>
            ) : (
              ""
            )}

            <div className="add_footer">
              <div className="add_question_bottom_left">
               
                  
              </div>

              <div className="container  row">
              <div className="col">
                <button type="button" onClick={addMoreQuestionField} className="btn btn-outline-primary">Add a Question</button>
                </div>
                <div className="col">
                <button type="button" className="btn btn-outline-danger scam" onClick={()=>{deleteQuestion(i)}}>Delete Question</button>
                </div>
                
              </div>
            </div>
          </AccordionDetails>
        </div>
      </Accordion>

    ));
  }
 
  const timer=()=>
  {
    return (
      <>
      <div class="btn-group">
  <button type="button" class="btn btn-secondary">{hour} Hours</button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu"  role="menu">
  <li><a class="dropdown-item" href="#" onClick={()=>{sethour("0")}}>0</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("1")}}>1</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("2")}}>2</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("3")}}>3</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("4")}}>4</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("5")}}>5</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("6")}}>6</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("7")}}>7</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("8")}}>8</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("9")}}>9</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("10")}}>10</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("11")}}>11</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("12")}}>12</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("13")}}>13</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("14")}}>14</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("15")}}>15</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("16")}}>16</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("17")}}>17</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("18")}}>18</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("19")}}>19</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("20")}}>20</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("21")}}>21</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("22")}}>22</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("23")}}>23</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{sethour("24")}}>24</a></li>
  </ul>
</div>
{/* minutes chooser */}
<div class="btn-group mx-5">
  <button type="button" class="btn btn-secondary">{minute} Minutes</button>
  <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" role="menu">
  <li><a class="dropdown-item" href="#" onClick={()=>{setminute("0")}}>0</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("1")}}>1</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("2")}}>2</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("3")}}>3</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("4")}}>4</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("5")}}>5</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("6")}}>6</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("7")}}>7</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("8")}}>8</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("9")}}>9</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("10")}}>10</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("11")}}>11</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("12")}}>12</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("13")}}>13</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("14")}}>14</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("15")}}>15</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("16")}}>16</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("17")}}>17</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("18")}}>18</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("19")}}>19</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("20")}}>20</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("21")}}>21</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("22")}}>22</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("23")}}>23</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("24")}}>24</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("25")}}>25</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("26")}}>26</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("27")}}>27</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("28")}}>28</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("29")}}>29</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("30")}}>30</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("31")}}>31</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("32")}}>32</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("33")}}>33</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("34")}}>34</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("35")}}>35</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("36")}}>36</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("37")}}>37</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("38")}}>38</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("39")}}>39</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("40")}}>40</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("41")}}>41</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("42")}}>42</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("43")}}>43</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("44")}}>44</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("45")}}>45</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("46")}}>46</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("47")}}>47</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("48")}}>48</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("49")}}>49</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("50")}}>50</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("51")}}>51</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("52")}}>52</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("53")}}>53</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("54")}}>54</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("55")}}>55</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("56")}}>56</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("57")}}>57</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("58")}}>58</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("59")}}>59</a></li>
<li><a class="dropdown-item" href="#" onClick={()=>{setminute("60")}}>60</a></li>
  </ul>
</div>
{/* minutes chooser */}
      </>
    );
  }
  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
        <div className="card my-4 text-center tod hover-shadow border-primary" >
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">Create an Exam</p>
  </div>
</div>     
          {questionsUI()}
          <button type="button" className="btn btn-outline-success my-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">Upload Exam</button>
        </div>
      </div>
      {/*Modal Begins  */}
      <div class="modal fade deaf" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center deaf" id="staticBackdropLabel">Confirmation</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {/*matter start*/}
      <div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Subtopic Name</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="Calculus"/>
</div>
<div class="input-group mb-3 ">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Exam Number</h5></span>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" value="Exam 6"/>
</div>

<div class="input-group">
  <span class="input-group-text w-25"><h5 className='my-2'>Description</h5></span>
  <textarea class="form-control h-75" aria-label="With textarea" placeholder='A Brief Description'></textarea>
</div>
<div class="input-group mb-3 my-4">
  <span class="input-group-text w-25" id="basic-addon3"><h5 className='my-2'>Time limit</h5></span>
    {/* Insert here */}
    {timer()}
    {/* Insert here */}
</div>
{/*matter end*/}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
}
export default AddExam;