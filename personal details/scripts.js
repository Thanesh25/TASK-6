class Person {
    constructor(
      personName = "Thaneshwar",
      age = "21",
      email = "example@gmail.com",
      mobileNo = "9876543210",
      streetName = "kamaraj coloney",
      area = "t.nagar",
      city = "Chennai",
      district = "Tamil nadu",
      highestQualification = "B.com",
      schoolName = "RKM",
      sslcMark = "542/500",
      sslcYearOfCompletion = "2014",
      hscMark = "1090/1200",
      placeOfSchool = "chennai",
      hscYearOfCompletion = "2020",
      collegeName = "art College",
      department = "Computer Science",
      batch = "2020-2023",
      cgpa = "6.83",
      university = "Anna University",
      placeOfCollege = "Chennai",
      technicalSkills = "JavaScript",
      companyName = "IBM",
      job = "software Developer",
      workExperience = "0 years"
    ) {
      this.personName = personName;
      this.age = age;
      this.email = email;
      this.mobileNo = mobileNo;
      this.streetName = streetName;
      this.area = area;
      this.city = city;
      this.district = district;
      this.highestQualification = highestQualification;
      this.schoolName = schoolName;
      this.placeOfSchool = placeOfSchool;
      this.sslcMark = sslcMark;
      this.sslcYearOfCompletion = sslcYearOfCompletion;
      this.hscMark = hscMark;
      this.hscYearOfCompletion = hscYearOfCompletion;
      this.collegeName = collegeName;
      this.placeOfCollege = placeOfCollege;
      this.batch = batch;
      this.department = department;
      this.cgpa = cgpa;
      this.university = university;
      this.technicalSkills = technicalSkills;
      this.companyName = companyName;
      this.job = job;
      this.workExperience = workExperience;
    }
    displayPersonalInfo() {
      console.log(
        `:::::: PERSONAL DETAILS :::::
  
        Name => ${this.personName},
        Age => ${this.age},
        email => ${this.email},
        Mobile Number => ${this.mobileNo}.`
      );
      console.log(
        `      Address :
          Street Name => ${this.streetName},
           Area => ${this.area},
            City => ${this.city},
             District => ${this.district}.`
      );
    }
    displaySchoolDetails() {
      console.log(
        `::::::: SCHOOL DETAILS :::::::
  
        School Name => ${this.schoolName},
        City => ${this.placeOfSchool},
        10th MARK => ${this.sslcMark} ,
        10th year of Completion => ${this.sslcYearOfCompletion},
        12th MARK: ${this.hscMark} ,
        12th year of Completion: ${this.hscYearOfCompletion}.
        `
      );
    }
    displayCollegeDetails() {
      console.log(
        `:::::: COLLEGE DETAILS ::::::
        
        College Name => ${this.collegeName},
        city => ${this.placeOfCollege},
        Batch => ${this.batch},
        Department => ${this.department},
        CGPA or grade => ${this.cgpa},
        University => ${this.university}.
        `
      );
    }
    displayWorkDetails() {
      console.log(
        `:::::: WORK DETAILS ::::::
        
        Company Name => ${this.companyName},
        job => ${this.job},
        Working Experience => ${this.workExperience}.
        `
      );
    }
  }
  
  const person1Details = new Person(
    "Thaneshwar",
    "21",
    "Thaneshwar.js@gmail.com",
    "9898976767",
    "B.com",
    "Ramakrishna matriculation School",
    "542/500",
    "1123/1200",
    "College of art",
    "2020-2023",
    "Electronics and Instrumentation Engineering",
    "6.86",
    "HTML5,CSS3,JavaScript,nodejs",
    "MERN stack developer",
    "0 years"
  );
  
  // console.log(person1Details);
  // console.log(new Person());
  
  const person2details = new Person();
  // person2details.displaySchoolDetails();
  // person2details.displayPersonalInfo();
  // person2details.displayCollegeDetails();
  person2details.displayWorkDetails();