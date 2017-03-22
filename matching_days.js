function myFunction() {
  var date1 = document.querySelector('#date1').value;
  var date2 = document.querySelector('#date2').value;

  var dates = new Date(date1);
  var dates2 = new Date(date2);
  var days = new Array();
  days[0] = document.querySelector("#Sunday");
  days[1] = document.querySelector("#Monday");
  days[2] = document.querySelector("#Tuesday");
  days[3] = document.querySelector("#Wednesday");
  days[4] = document.querySelector("#Thursday");
  days[5] = document.querySelector("#Friday");
  days[6] = document.querySelector("#Saturday");

  var s1 = days[dates.getDay()];
  var s2 = days[dates2.getDay()];

    for (var i = 0; i < days.length; i++) {
      days[i].classList.remove("highlight3", "highlight2", "highlight1")

}
      if (s1 === s2) {
      s1.classList.add('highlight3')
    }

    s1.classList.add('highlight1')
    s2.classList.add('highlight2')
}
