/*
  For this exercise, the function has been written for you and you need to write
  the tests.

  This function takes a trainee parameter that is an object. The object
  contains: name (which represents the trainee's name) and score (which
  represents the mark given to the trainee's coursework).

  It uses these to format a string that tells the user how much coursework the
  trainee has completed.
*/

function convertScoreToGrade() {
  let grade = null;

  if (score >= 80) {
    grade = "A";
  } else if (score >= 70) {
    grade = "B";
  } else if (score >= 60) {
    grade = "C";
  } else if (score >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  return grade;
}

function formatCourseworkResult(trainee) {
  if (!trainee.name) {
    return "Error: No trainee name!";
  }
  let traineeName = trainee.name;

  if (typeof trainee.score != "number") {
    return "Error: Coursework percent is not a number!";
  }
  let traineeGrade = convertScoreToGrade(trainee.score);

  return `${traineeName}'s coursework was marked as grade ${traineeGrade}.`;
}

/* ======= TESTS - FOR THIS EXERCISE YOU SHOULD MODIFY THEM! =====
- To run the tests for this exercise, run `npm test -- --testPathPattern 6-writing-tests-advanced.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Xin",
    score: 63
  }
*/
it("returns the expected string for a trainee with a score of 63", () => {
  const trainee = { name: "Xin", score: 63 };
  const expected = "Xin's coursework was marked as grade C.";
  const result = formatCourseworkResult(trainee);
  expect(result).toEqual(expected);
});
/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Mona",
    score: 78
  }
*/
it("returns the expected string for a trainee with a score of 78", () => {
  const trainee = { name: "Mona", score: 78 };
  const expected = "Mona's coursework was marked as grade B.";
  const result = formatCourseworkResult(trainee);
  expect(result).toEqual(expected);
});
/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Ali",
    score: 49,
    age: 33,
    subjects: ["JavaScript", "React", "CSS"]
  }
*/

it("returns an error message if the trainee's score is not a number", () => {
  const trainee = { name: "Ali", score: "49%", age: 33, subjects: ["JavaScript", "React", "CSS"] };
  const expected = "Error: Coursework percent is not a number!";
  const result = formatCourseworkResult(trainee);
  expect(result).toEqual(expected);
});

/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    score: 90,
    age: 29
  }
*/
it("returns an error message if the trainee's name is missing", () => {
  const trainee = { score: 90, age: 29 };
  const expected = "Error: No trainee name!";
  const result = formatCourseworkResult(trainee);
  expect(result).toEqual(expected);
});
/*
  Write a test that checks the output of formatCourseworkResult when passed the following trainee:
  {
    name: "Aman",
    subjects: ["HTML", "CSS", "Databases"]
  }
*/
it("returns an error message if the trainee's score is missing", () => {
  const trainee = { name: "Aman", subjects: ["HTML", "CSS", "Databases"] };
  const expected = "Error: Coursework percent is not a number!";
  const result = formatCourseworkResult(trainee);
  expect(result).toEqual(expected);
});