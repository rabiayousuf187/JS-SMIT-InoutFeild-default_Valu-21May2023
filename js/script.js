// Chapter 49 Reading field values
console.log("Chapter 49 Reading field values");

function inpFeild(id){
    console.log("on Focus");
    document.getElementById(id).style.border = "3px solid red";
}

function outFeild(id){
    console.log("on Blur");
    document.getElementById(id).style.border = "1px solid black";

}

function submit(city,country){
    
    let cityVal = document.getElementById('city').value;
    let countryVal = document.getElementById('country').value;


    if(cityVal === "" )
   {
    alert("Some Feild left Empty");
    console.log("Some Feild left Empty");
    }
    else
    {
        alert("Date Submitted");
        console.log("Date Submitted");
        if(cityVal == "Karachi" || cityVal == "Hyderabad" || cityVal == "Lahore" || cityVal == "Islamabad" || cityVal == "Peshawar" || cityVal == "Multan")
        {
            document.getElementById('country').value = "Pakistan";
        }
        console.log(cityVal, countryVal);

    }

}