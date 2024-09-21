export type subjectType = {
  subject: string;
  code: string;
};

export type yearType = {
  first: subjectType[];
  second: subjectType[];
  third: subjectType[];
  fourth: subjectType[];
};

const noteStructure: yearType = {
  first: [
    {
      subject: "Engineering Maths-I",
      code: "RAS103",
    },
    {
      subject: "Engineering Physics-I",
      code: "RAS101",
    },
    {
      subject:
        "Basic Electrical Engineering/Elements of Mechanical Engineering",
      code: "REE101/RME101",
    },
    {
      subject: "Professional Communication/Computer System & Programming",
      code: "RAS104/RCS101",
    },
    {
      subject: "Basic Electronics/Engineering Chemistry",
      code: "REC101/RAS102",
    },
    {
      subject: "Engineering Physics Lab/Engineering Chemistry Lab",
      code: "RAS151/RAS152",
    },
    {
      subject: "Basic Electrical Engg Lab/Elements of Mechanical Engg Lab",
      code: "REE151/RME151",
    },
    {
      subject: "Professional Communication Lab/Computer Progm. Lab",
      code: "RAS154/RCS151",
    },
    {
      subject: "Workshop Practice/Computer Aided Engg. Graphics",
      code: "RME152/RCE151",
    },
    { subject: "Engineering Maths-II", code: "RAS203" },
    { subject: "Engineering Physics-II", code: "RAS201" },
    {
      subject: "Elements of Mechanical Engg/Basic Electrical Engg",
      code: "RME201/REE201",
    },
    {
      subject: "Computer System & Programming in C/Professional Communication",
      code: "RCS201/RAS204",
    },
    {
      subject: "Engineering Chemistry/Basic Electronics",
      code: "RAS202/REC201",
    },
    {
      subject: "Engg. Chemistry Lab/Engg. Physics Lab",
      code: "RAS252/RAS251",
    },
    {
      subject: "Elements of Mechanical Engg Lab/Basic Electrical Engg Lab",
      code: "RME251/REE251",
    },
    {
      subject: "Computer Progm. Lab/Professional Communication Lab",
      code: "RCS251/RAS254",
    },
    {
      subject: "Computer Aided Engg. Graphics/Workshop Practice",
      code: "RCE251/RME252",
    },
  ],
  second: [
    { subject: "Data Structure", code: "KCS301H" },
    { subject: "Computer Organization and Architecture", code: "KCS302H" },
    { subject: "Discrete Structures & Theory of Logic", code: "KCS303H" },
    { subject: "Data Structures Using C Lab", code: "KCS351H" },
    { subject: "Computer Organization Lab", code: "KCS352H" },
    { subject: "Discrete Structure & Logic Lab", code: "KCS353H" },
    {
      subject: "Computer System Security/Python Programming",
      code: "KNC301H/KNC302H",
    },
    {
      subject: "Maths IV",
      code: "KAS402H",
    },
    {
      subject: "Universal Human Values",
      code: "KVE401H",
    },
    {
      subject: "Technical Communication",
      code: "KAS401",
    },
    { subject: "Operating Systems", code: "KCS401H" },
    { subject: "Theory of Automata and Formal Languages", code: "KCS402H" },
    { subject: "Microprocessor", code: "KCS403H" },
    {
      subject: "Python Programming",
      code: "KNC402H",
    },
    {
      subject: "Computer System Security",
      code: "KNC401H",
    },
  ],

  third: [
    { subject: "Database Management System", code: "KCS501" },
    { subject: "Web Technology", code: "KIT501" },
    { subject: "Design and Analysis of Algorithm", code: "KCS503" },
    { subject: "Departmental Elective-I", code: "DepttElective-I" },
    { subject: "Departmental Elective-II", code: "Deptt.-Elective-II" },
    { subject: "Database Management System Lab", code: "KCS551" },
    { subject: "Web Technology Lab", code: "KIT551" },
    { subject: "Design and Analysis of Algorithm Lab", code: "KCS553" },
    { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
    { subject: "Software Engineering", code: "KCS601" },
    { subject: "Data Analytics", code: "KIT601" },
    { subject: "Computer Networks", code: "KCS603" },
    { subject: "Departmental Elective-III", code: "DepttElective-III" },
    { subject: "Open Elective-I", code: "Open Elective-I" },
    { subject: "Software Engineering Lab", code: "KCS651" },
    { subject: "Data Analytics Lab", code: "KIT651" },
    { subject: "Computer Networks Lab", code: "KCS653" },
    {
      subject: "Constitution of India",
      code: "KNC601/KNC602",
    },
  ],

  fourth: [
    { subject: "HSMC -1 / HSMC-2", code: "KHU701/KHU702" },
    { subject: "Departmental Elective-IV", code: "KCS07X" },
    { subject: "Departmental Elective-V", code: "KCS07X" },
    { subject: "Open Elective-II", code: "KOE07X" },
    {
      subject:
        "The Department may conduct one Lab of either of the two Electives (4 or 5) based on the elective chosen for the curriculum. The Department shall on its own prepare complete list of practical for the Lab and arrange for proper setup and conduct accordingly.",
      code: "KCS751A",
    },
    { subject: "Mini Project or Internship Assessment", code: "KCS752" },
    { subject: "Project", code: "KCS753" },
    { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
    { subject: "HSMC-2# / HSMC-1#", code: "KHU801/KHU802" },
    { subject: "Open Elective-III", code: "KOE08X" },
    { subject: "Open Elective-IV", code: "KOE08X" },
    { subject: "Project", code: "KCS851" },
  ],
};
export default noteStructure;
