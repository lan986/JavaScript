var courseNameInput =document.getElementById("courseName")
var courseCategoryInput =document.getElementById("courseCategory")
var coursePriceInput =document.getElementById("coursePrice")
var courseDescriptionInput =document.getElementById("courseDescription")
var btn_click=document.getElementById("click")
var array_course=[]
var data = document.getElementById("data")

//console.log(courseCategory,courseDescription,courseName,coursePrice)

btn_click.onclick=function(){
addCourse();
displayData();

}

    function addCourse(){ 
    var course={   // object for storing the values of inputs 
        name:courseNameInput.value,
        category:courseCategoryInput.value,
        price:coursePriceInput.value,
        description:courseDescriptionInput.value
    }
    array_course.push(course)
    }

    function displayData(){

    
   var result =" "

   for(var i=1;i<array_course.length;i++)
   result+="<tr> <td>"+i+" </td> <td>"+array_course[i].name+" </td>"+ "<td>"+array_course[i].category+" </td>"+ "<td>"+array_course[i].description+" </td>"+"<td>"+array_course[i].price+" </td>"+ "</tr>"
   //  console.log(result) "</tr>"
 //  console.log(result)

data.innerHTML=result

}