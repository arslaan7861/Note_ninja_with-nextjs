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
    {
      subject: "Engineering Science Course/Maths IV",
      code: "KOE031H038H/KAS302H",
    },
    {
      subject: "Technical Communication/Universal Human values",
      code: "KAS301/KVE301H",
    },
    { subject: "Data Structure", code: "KCS301H" },
    { subject: "Computer Organization and Architecture", code: "KCS302H" },
    { subject: "Discrete Structures & Theory of Logic", code: "KCS303H" },
    { subject: "Data Structures Using C Lab", code: "KCS351H" },
    { subject: "Computer Organization Lab", code: "KCS352H" },
    { subject: "Discrete Structure & Logic Lab", code: "KCS353H" },
    { subject: "Mini Project or Internship Assessment", code: "KCS354H" },
    {
      subject: "Computer System Security/Python Programming",
      code: "KNC301H/KNC302H",
    },
    { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
    {
      subject: "Maths IV/Engg. Science Course",
      code: "KAS402H/KOE041H048H",
    },
    {
      subject: "Universal Human Values/Technical Communication",
      code: "KVE401H/KAS401",
    },
    { subject: "Operating Systems", code: "KCS401H" },
    { subject: "Theory of Automata and Formal Languages", code: "KCS402H" },
    { subject: "Microprocessor", code: "KCS403H" },
    { subject: "Operating Systems Lab", code: "KCS451H" },
    { subject: "Microprocessor Lab", code: "KCS452H" },
    { subject: "Python Language Programming Lab", code: "KCS453H" },
    {
      subject: "Python Programming/Computer System Security",
      code: "KNC402H/KNC401H",
    },
    { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
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
    // {
    //   subject:
    //     "Constitution of India, Law and Engineering/Indian Tradition, Culture and Society",
    //   code: "KNC601/KNC602",
    // },
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
// const noteStructure = {
//   first: [
//     {
//       branch: "common",
//       subjects: [
//         {
//           subject: "Engineering Maths-I",
//           code: "RAS103",
//         },
//         {
//           subject: "Engineering Physics-I",
//           code: "RAS101",
//         },
//         {
//           subject:
//             "Basic Electrical Engineering/Elements of Mechanical Engineering",
//           code: "REE101/RME101",
//         },
//         {
//           subject: "Professional Communication/Computer System & Programming",
//           code: "RAS104/RCS101",
//         },
//         {
//           subject: "Basic Electronics/Engineering Chemistry",
//           code: "REC101/RAS102",
//         },
//         {
//           subject: "Engineering Physics Lab/Engineering Chemistry Lab",
//           code: "RAS151/RAS152",
//         },
//         {
//           subject: "Basic Electrical Engg Lab/Elements of Mechanical Engg Lab",
//           code: "REE151/RME151",
//         },
//         {
//           subject: "Professional Communication Lab/Computer Progm. Lab",
//           code: "RAS154/RCS151",
//         },
//         {
//           subject: "Workshop Practice/Computer Aided Engg. Graphics",
//           code: "RME152/RCE151",
//         },
//         { subject: "Engineering Maths-II", code: "RAS203" },
//         { subject: "Engineering Physics-II", code: "RAS201" },
//         {
//           subject: "Elements of Mechanical Engg/Basic Electrical Engg",
//           code: "RME201/REE201",
//         },
//         {
//           subject:
//             "Computer System & Programming in C/Professional Communication",
//           code: "RCS201/RAS204",
//         },
//         {
//           subject: "Engineering Chemistry/Basic Electronics",
//           code: "RAS202/REC201",
//         },
//         {
//           subject: "Engg. Chemistry Lab/Engg. Physics Lab",
//           code: "RAS252/RAS251",
//         },
//         {
//           subject: "Elements of Mechanical Engg Lab/Basic Electrical Engg Lab",
//           code: "RME251/REE251",
//         },
//         {
//           subject: "Computer Progm. Lab/Professional Communication Lab",
//           code: "RCS251/RAS254",
//         },
//         {
//           subject: "Computer Aided Engg. Graphics/Workshop Practice",
//           code: "RCE251/RME252",
//         },
//       ],
//     },
//   ],
//   second: [
//     {
//       branch: "cse",
//       subjects: [
//         {
//           subject: "Engineering Science Course/Maths IV",
//           code: "KOE031H038H/KAS302H",
//         },
//         {
//           subject: "Technical Communication/Universal Human values",
//           code: "KAS301/KVE301H",
//         },
//         { subject: "Data Structure", code: "KCS301H" },
//         { subject: "Computer Organization and Architecture", code: "KCS302H" },
//         { subject: "Discrete Structures & Theory of Logic", code: "KCS303H" },
//         { subject: "Data Structures Using C Lab", code: "KCS351H" },
//         { subject: "Computer Organization Lab", code: "KCS352H" },
//         { subject: "Discrete Structure & Logic Lab", code: "KCS353H" },
//         { subject: "Mini Project or Internship Assessment", code: "KCS354H" },
//         {
//           subject: "Computer System Security/Python Programming",
//           code: "KNC301H/KNC302H",
//         },
//         { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
//         {
//           subject: "Maths IV/Engg. Science Course",
//           code: "KAS402H/KOE041H048H",
//         },
//         {
//           subject: "Universal Human Values/Technical Communication",
//           code: "KVE401H/KAS401",
//         },
//         { subject: "Operating Systems", code: "KCS401H" },
//         { subject: "Theory of Automata and Formal Languages", code: "KCS402H" },
//         { subject: "Microprocessor", code: "KCS403H" },
//         { subject: "Operating Systems Lab", code: "KCS451H" },
//         { subject: "Microprocessor Lab", code: "KCS452H" },
//         { subject: "Python Language Programming Lab", code: "KCS453H" },
//         {
//           subject: "Python Programming/Computer System Security",
//           code: "KNC402H/KNC401H",
//         },
//         { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
//       ],
//     },
//     {
//       branch: "mechanical",
//       subjects: [
//         { subject: "Engg. Science Course/Maths IV", code: "KOE031-38/KAS302" },
//         {
//           subject: "Technical Communication/Universal Human Values",
//           code: "KAS301/KVE301",
//         },
//         { subject: "Thermodynamics", code: "KME301" },
//         { subject: "Fluid Mechanics & Fluid Machines", code: "KME302" },
//         { subject: "Materials Engineering", code: "KME303" },
//         { subject: "Fluid Mechanics Lab", code: "KME351" },
//         { subject: "Material Testing Lab", code: "KME352" },
//         { subject: "Computer Aided Machine Drawing-I Lab", code: "KME353" },
//         { subject: "Mini Project or Internship Assessment", code: "KME354" },
//         {
//           subject: "Computer System Security/Python Programming",
//           code: "KNC301/KNC302",
//         },
//         { subject: "Maths IV/Engg. Science Course", code: "KAS402/KOE041-48" },
//         {
//           subject: "Universal Human Values/Technical Communication",
//           code: "KVE401/KAS401",
//         },
//         { subject: "Applied Thermodynamics", code: "KME401" },
//         { subject: "Engineering Mechanics", code: "KME402" },
//         { subject: "Manufacturing Processes", code: "KME403" },
//         { subject: "Applied Thermodynamics Lab", code: "KME451" },
//         { subject: "Manufacturing Processes Lab", code: "KME452" },
//         { subject: "Computer Aided Machine Drawing-II Lab", code: "KME453" },
//         {
//           subject: "Python Programming/Computer System Security",
//           code: "KNC402/KNC401",
//         },
//       ],
//     },
//     {
//       branch: "electrical",
//       subjects: [],
//     },
//     {
//       branch: "civil",
//       subjects: [
//         {
//           subject: "Engg Mathematics-III/Science Based Elective",
//           code: "NAS-301/NOE-031 to NOE-039",
//         },
//         { subject: "Fluid Mechanics", code: "NCE-301" },
//         { subject: "Building Materials & Construction", code: "NCE-302" },
//         { subject: "Mechanics of Solids", code: "NME-302" },
//         {
//           subject: "Industrial Psychology/Industrial Sociology",
//           code: "NHU-301/NHU-302",
//         },
//         { subject: "Surveying-I", code: "NCE-303" },
//         {
//           subject: "Human Value & Professional Ethics/Cyber Security",
//           code: "AUC-001/AUC-002",
//         },
//         {
//           subject: "Science Based Elective/Engg Mathematics-III",
//           code: "NOE-041 to NOE-049/NAS-401",
//         },
//         { subject: "Structural Analysis-I", code: "NCE-401" },
//         { subject: "Geo-informatics", code: "NCE-402" },
//         { subject: "Hydraulics & Hydraulic Machines", code: "NCE-403" },
//         {
//           subject: "Industrial Sociology/Industrial Psychology",
//           code: "NHU-402/NHU-401",
//         },
//         { subject: "Engineering Geology", code: "NCE-404" },
//         {
//           subject: "Cyber Security/Human Value & Professional Ethics",
//           code: "AUC-002/AUC-001",
//         },
//       ],
//     },
//   ],

//   third: [
//     {
//       branch: "cse",
//       subjects: [
//         { subject: "Database Management System", code: "KCS501" },
//         { subject: "Web Technology", code: "KIT501" },
//         { subject: "Design and Analysis of Algorithm", code: "KCS503" },
//         { subject: "Departmental Elective-I", code: "DepttElective-I" },
//         { subject: "Departmental Elective-II", code: "Deptt.-Elective-II" },
//         { subject: "Database Management System Lab", code: "KCS551" },
//         { subject: "Web Technology Lab", code: "KIT551" },
//         { subject: "Design and Analysis of Algorithm Lab", code: "KCS553" },
//         { subject: "Mini Project or Internship Assessment", code: "KCS554" },
//         {
//           subject:
//             "Constitution of India, Law and Engineering/Indian Tradition, Culture and Society",
//           code: "KNC501/KNC502",
//         },
//         { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
//         { subject: "Software Engineering", code: "KCS601" },
//         { subject: "Data Analytics", code: "KIT601" },
//         { subject: "Computer Networks", code: "KCS603" },
//         { subject: "Departmental Elective-III", code: "DepttElective-III" },
//         { subject: "Open Elective-I", code: "Open Elective-I" },
//         { subject: "Software Engineering Lab", code: "KCS651" },
//         { subject: "Data Analytics Lab", code: "KIT651" },
//         { subject: "Computer Networks Lab", code: "KCS653" },
//         {
//           subject:
//             "Constitution of India, Law and Engineering/Indian Tradition, Culture and Society",
//           code: "KNC601/KNC602",
//         },
//         { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
//       ],
//     },
//     {
//       branch: "mechanical",
//       subjects: [
//         { subject: "Managerial Economics", code: "RAS501" },
//         { subject: "Sociology / Cyber Security", code: "RAS502/RUC501" },
//         { subject: "Machine Design-I", code: "RME501" },
//         { subject: "Heat & Mass Transfer", code: "RME502" },
//         { subject: "Manufacturing Science & Technology-II", code: "RME503" },
//         { subject: "Deptt. Elective Course-1", code: "RME051-054" },
//         { subject: "Design and Simulation Lab I", code: "RME551" },
//         { subject: "Heat & Mass Transfer Lab", code: "RME552" },
//         { subject: "Manufacturing Technology-II Lab", code: "RME553" },
//         { subject: "Seminar-I", code: "RME559" },
//         { subject: "Industrial Management", code: "RAS601" },
//         { subject: "Cyber Security/Sociology", code: "RUC601/RAS602" },
//         { subject: "Fluid Machinery", code: "RME601" },
//         { subject: "Theory of Machines", code: "RME602" },
//         { subject: "Machine Design-II", code: "RME603" },
//         { subject: "Deptt. Elective Course-2", code: "RME061-064" },
//         { subject: "Fluid Machinery Lab", code: "RME651" },
//         { subject: "Theory of Machines Lab", code: "RME652" },
//         { subject: "Design and Simulation Lab II", code: "RME653" },
//         { subject: "Refrigeration & Airconditioning", code: "RME654" },
//       ],
//     },
//     {
//       branch: "electrical",
//       subjects: [],
//     },
//     {
//       branch: "civil",
//       subjects: [
//         { subject: "Geotechnical Engineering", code: "KCE 501" },
//         { subject: "Structural Analysis", code: "KCE 502" },
//         {
//           subject: "Quantity Estimation and Construction Management",
//           code: "KCE 503",
//         },
//         {
//           subject: "Departmental Elective-I",
//           code: "KCE 051/KCE 052/KCE 053/KCE 054",
//         },
//         {
//           subject: "Departmental Elective-II",
//           code: "KCE-055/KCE-056/KCE-057/KCE-058",
//         },
//         { subject: "CAD Lab", code: "KCE-551" },
//         { subject: "Geotechnical Engineering Lab", code: "KCE-552" },
//         { subject: "Quantity Estimation and Management Lab", code: "KCE-553" },
//         { subject: "Mini Project or Internship Assessment", code: "KCE-554" },
//         {
//           subject:
//             "Constitution of India/Essence of Indian Traditional Knowledge",
//           code: "N/A",
//         },
//         { subject: "Design of Concrete Structures", code: "KCE 601" },
//         { subject: "Transportation Engineering", code: "KCE 602" },
//         { subject: "Environmental Engineering", code: "KCE 603" },
//         {
//           subject: "Departmental Elective-III",
//           code: "KCE 061/KCE 062/KCE 063/KCE 064",
//         },
//         { subject: "Open Elective-I", code: "N/A" },
//         { subject: "Transportation Engineering Lab", code: "KCE 651" },
//         { subject: "Environmental Engineering Lab", code: "KCE 652" },
//         { subject: "Structural Detailing Lab", code: "KCE 653" },
//         {
//           subject:
//             "Essence of Indian Traditional Knowledge/Constitution of India",
//           code: "NC*",
//         },
//       ],
//     },
//   ],
//   fourth: [
//     {
//       branch: "cse",
//       subjects: [
//         { subject: "HSMC -1 / HSMC-2", code: "KHU701/KHU702" },
//         { subject: "Departmental Elective-IV", code: "KCS07X" },
//         { subject: "Departmental Elective-V", code: "KCS07X" },
//         { subject: "Open Elective-II", code: "KOE07X" },
//         {
//           subject:
//             "The Department may conduct one Lab of either of the two Electives (4 or 5) based on the elective chosen for the curriculum. The Department shall on its own prepare complete list of practical for the Lab and arrange for proper setup and conduct accordingly.",
//           code: "KCS751A",
//         },
//         { subject: "Mini Project or Internship Assessment", code: "KCS752" },
//         { subject: "Project", code: "KCS753" },
//         { subject: "MOOCs (Essential for Hons. Degree)", code: "Total" },
//         { subject: "HSMC-2# / HSMC-1#", code: "KHU801/KHU802" },
//         { subject: "Open Elective-III", code: "KOE08X" },
//         { subject: "Open Elective-IV", code: "KOE08X" },
//         { subject: "Project", code: "KCS851" },
//       ],
//     },
//     {
//       branch: "mechanical",
//       subjects: [
//         { subject: "HSMC-1/HSMC-2", code: "1" },
//         { subject: "Departmental Elective-IV", code: "2" },
//         { subject: "Departmental Elective-V", code: "3" },
//         { subject: "Open Elective-II", code: "4" },
//         { subject: "Measurement & Metrology Lab", code: "KME 751" },
//         { subject: "HSMC-2/HSMC-1", code: "1" },
//       ],
//     },
//     {
//       branch: "electrical",
//       subjects: [],
//     },
//     {
//       branch: "civil",
//       subjects: [{}],
//     },
//   ],
// };
