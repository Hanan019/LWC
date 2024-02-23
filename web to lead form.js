 
function beforeSubmit() {
  let outputDate = document.querySelector(".outputDate");
  let inputDate = document.querySelector(".inputDate");
  console.log("Input Date", inputDate.value);//string ---> we have to convert it into date.-->date (en_PK) 
  
  let formattedDate = new Date(inputDate.value).toLocaleDateString("en-PK");//formatted date
  outputDate.value = formattedDate;// this will set to pass to org.

};