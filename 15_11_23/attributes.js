const firstDiv = document.body.firstElementChild;
console.log(firstDiv);
const firstDivAttributes = firstDiv.attributes; //get all attribute of any element
console.log(firstDivAttributes); //length=2, id and class attributes

Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name);
  console.log(attr.value);
});

console.log(firstDiv.getAttribute("id")); //return value of specified attribute 'id'
console.log(firstDiv.getAttribute("class"));
//return value of specified attribute 'name'

const firstAttribute = firstDivAttributes[0];
console.log(firstAttribute.ownerDocument);
console.log(firstAttribute.ownerElement);

//create a new attribute named "owner" with value "Umaporn"
firstDiv.setAttribute("owner", "Umaporn");

//creare a new <p> under div.courses
const neawPEle = document.createElement("p"); //<p><p>
neawPEle.innerText = "Client Web Programing II"; //<p>Client Web Programing II <p>
neawPEle.setAttribute("id", "int203"); // <p id ='int203'><p>
neawPEle.setAttribute("class", "couses"); // <p id ='int203' class = 'courses'><p>

const divCoursesParent = document.getElementById("bscit-courses");
// divCoursesParent.appendChild(neawPEle);

const refNode = divCoursesParent.lastElementChild;
// divCoursesParent.insertBefore(neawPEle, refNode);

divCoursesParent.replaceChild(neawPEle, refNode);

divCoursesParent.removeChild(neawPEle);
