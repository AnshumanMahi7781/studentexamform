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
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Student First name is required...";
        document.getElementById("StdFirstName").focus();
    }
    else if(Lname == "")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Student Last name is required...";
        document.getElementById("StdLastName").focus();
    }
    else if(RegNumber == "")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Student Registration Number is required...";
        document.getElementById("RegNumber").focus();
    }
    else if(RegCourse == "")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Registred Course Name is required...";
        RegCourse= document.getElementById("RegCourse").focus();
    }
    else if(Startday== "Select Day Here")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Select exam start Day...";
        RegCourse= document.getElementById("StartDay").focus();
    }
    else if(Startmonth== "Select Month Here")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Select exam start Month...";
        RegCourse= document.getElementById("StartMonth").focus();
    }
    else if(Startyear== "Select Year Here")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Select exam start Year...";
        RegCourse= document.getElementById("StartYear").focus();
    }
    else if(Endday== "Select Day Here")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Select exam End Day...";
        document.getElementById("EndDay").focus();
    }
    else if(Endmonth== "Select Month Here")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Select exam End Month...";
        document.getElementById("EndMonth").focus();

    }
    else if(Endyear== "Select Year Here")
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Select exam End Year...";
        document.getElementById("EndYear").focus();

    }
    else  if(Fname.match(Numberformate))
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Student Name does not contain any numeric value...";
        document.getElementById("StdFirstName").focus();
    }
    else if(Lname.match(Numberformate))
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Student Name does not contain any numeric value...";
        document.getElementById("StdLastName").focus();
    }
    else if(RegCourse.match(Numberformate))
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Course Name does not contain any numeric value...";
        document.getElementById("RegCourse").focus();

    }
    else if(RegNumber.match(Nameformate))
    {
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML = "Registration Number does not contain any alphabate...";
        document.getElementById("RegNumber").focus();

    }
    else if(About.length== 0)
    {
        
        let error= document.getElementById("ErroSection");
        error.style.visibility = "visible";
        error.innerHTML ="Write Something About Student.";
        document.getElementById("CommentBox").focus();

    }
    else{
        console.log("Student Information: \n\n" + "Student Name:  "+Fname+ " "+Lname+"\nStudent Registration Number:  "+RegNumber+"\nRegistred Course: "+RegCourse+"\nExam Start Date: "+Startday+" - "+Startmonth+" - "+Startyear+"\nExam End Date: "+Endday+" - "+Endmonth+" - "+Endyear+"\n\nAbout Student: \n"+About);
       
    }
}
function HideErrorSection()
{
    let error= document.getElementById("ErroSection");
    error.style.visibility = "hidden";
}