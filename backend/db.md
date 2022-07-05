# Tables
 - Students
 - Faculty
   - FacultyTopics
 - Admins

 - Topics
   - Subtopics
     - Lectures
       - Materials
     - Exams
     - Questions
       - QuestionOptions
       - Scores

## Students
 - name
 - email

## Faculty
 - name
 - email

## Admins
 - name
 - email

## Topics
 - name

## Subtopics
 - name
 - topic (Topics.id)

## FacultyTopics
 - faculty (Faculty.id)
 - topic (Topics.id)

## Lectures
 - subtopic (Subtopics.id)
 - lectureNumber (unique)
 - name
 - description
 - link

## Materials
 - lecture (Lectures.id)
 - link

## Exams
 - subtopic (Subtopics.id)
 - examNumber
 - description
 - timeLimit

## Questions
 - exam (Exams.id)
 - questionNumber
 - questionText
 - isMultiCorrect

## QuestionOptions
 - question (Questions.id)
 - optionNumber
 - optionText
 - isCorrect

## Scores
 - student (Students.id)
 - exam (Exams.id)
 - score
 - maxScore
