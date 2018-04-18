applyAges("age", "2000/07/06");
applyAges("unity-age", "2013/07/06");

function applyAges(spanName, dateString) {
    var spans = document.getElementsByClassName(spanName)
    var i = 0;
    for (i = 0; i < spans.length; i++) {
        while(spans[i].firstChild) {
            spans[i].removeChild(spans[i].firstChild);
        }
        var txt = document.createTextNode(getAge(dateString));
        spans[i].appendChild(txt);
    }
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}