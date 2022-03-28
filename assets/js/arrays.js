var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

var studentList = [];

saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var studentGrade = {
        student: student.value,
        grade: grade.value,
        comment: comment.value.trim()
    };

    studentList.push(studentGrade);

    localStorage.setItem("studentGrade", JSON.stringify(studentList));
    renderMessage();

});

function renderMessage() {
    var stuListFromStorage = JSON.parse(localStorage.getItem("studentGrade"));
    //   if (lastGrade !== null) {
    var allData = "";
    for (var i = 0; i < stuListFromStorage.length; i++) {
        console.log(stuListFromStorage[i]);
        allData += stuListFromStorage[i].student
    }
    document.querySelector(".message").innerHTML = allData;
    //   }
}