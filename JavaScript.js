function EmptyFieldCheck()
{
    let Nameformate= /^[A-Za-z]+$/;
    let Numberformate = /^[0-9]*$/;
    let Fname= document.getElementById("StdFirstName").value;
    let Lname= document.getElementById("StdLastName").value;
    let RegNumber= document.getElementById("RegNumber").value;
    let RegCourse= document.getElementById("RegCourse").value;
    let About= document.getElementById("CommentBox").value;
    let Startday= document.getElementById("StartDay").value;
    let Startmonth= document.getElementById("StartMonth").value;
    let Startyear= document.getElementById("StartYear").value;
    let Endday= document.getElementById("EndDay").value;
    let Endmonth= document.getElementById("EndMonth").value;
    let Endyear= document.getElementById("EndYear").value;
    if(Fname== "")
    {
        alert("Enter Student First Name.");
    }
    else if(Lname == "")
    {
        alert("Enter Student Last Name.");
    }
    else if(RegNumber == "")
    {
        alert("Enter Student Registration Number.");
    }
    else if(RegCourse == "")
    {
        alert("Enter Student Registred Course.");
    }
    else if(Startday== "Select Day Here")
    {
        alert("Select Start Exam Day ");
    }
    else if(Startmonth== "Select Month Here")
    {
        alert("Select start Exam Month ");
        return false;
    }
    else if(Startyear== "Select Year Here")
    {
        alert("Select  Start Exam Year ");
    }
    else if(Endday== "Select Day Here")
    {
        alert("Select End Exam Day ");
    }
    else if(Endmonth== "Select Month Here")
    {
        alert("Select End Exam Month ");
    }
    else if(Endyear== "Select Year Here")
    {
        alert("Select  End Exam Year ");
    }
    else if(Fname.match(Numberformate) || Lname.match(Numberformate) || RegCourse.match(Numberformate) || RegNumber.match(Nameformate))
    {
        alert("You entered Wrong Value.\n\n"+"Please, Enter only Alphabetic Value for Names Like Student Name and course name" +"\nAnd Enter  only Numeric Value for Number Like Registratuion Number");
    }
    else if(About.length== 0)
    {
        alert("Write Something About Student.")
    }
    else{
        alert("Student Information: \n\n" + "Student Name:  "+Fname+ " "+Lname+"\nStudent Registration Number:  "+RegNumber+"\nRegistred Course: "+RegCourse+"\nExam Start Date: "+Startday+" - "+Startmonth+" - "+Startyear+"\nExam End Date: "+Endday+" - "+Endmonth+" - "+Endyear+"\n\nAbout Student: \n"+About);
    }
}