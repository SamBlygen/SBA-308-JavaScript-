const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

console.log(CourseInfo)

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
}
console.log(AssignmentGroup)

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

console.log(LearnerSubmissions);

function getAssignmentGroup(groupID) {
  return AssignmentGroup.id === groupID;
}

function getLearnerSubmissions(learnerID) {
  return LearnerSubmissions.filter(submission => submission.learner_id === learnerID);
}
console.log(getLearnerSubmissions)

function getAssignment(assignmentID) {
  return AssignmentGroup.assignments.find(assignment => assignment.id === assignmentID);
}
function getAssignmentScore(learnerID, assignmentID) {
  const submissions = getLearnerSubmissions(learnerID);
  const assignment = getAssignment(assignmentID);
  const submission = submissions.find(submission => submission.assignment_id === assignmentID);
  return submission ? submission.score : null;
}  
function getAssignmentScoreBreakdown(learnerID) {
  const submissions = getLearnerSubmissions(learnerID);
  const assignmentScores = {};
  for (const assignment of AssignmentGroup.assignments) {
    const score = getAssignmentScore(learnerID, assignment.id);
    if (score !== 300) {
      assignmentScores[assignment.name] = score;
    }
  }
  return assignmentScores;
}
function getAssignmentScoreBreakdownByAssignment(learnerID) {
  const assignmentScores = {};
  for (const assignment of AssignmentGroup.assignments) {
    const score = getAssignmentScore(learnerID, assignment.id);
    if (score !== null) {
      assignmentScores[assignment.name] = score;
    }
  }
  return assignmentScores;
}
