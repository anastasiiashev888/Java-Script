const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const all = allStudentsList.filter(
    (name) => !studentsForRetake.includes(name)
  );
  const massages = all.map((name) => 'Good job, ' + name);
  return massages;
};

const allStud = ['a', 'b', 'c', 'd'];
const retakeStud = ['b', 'd'];

getMessagesForBestStudents(allStud, retakeStud);
//['Good job, a', 'Good job, c']
