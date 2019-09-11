window.insert = function (num) {
  document.form.textview.value = document.form.textview.value + num;
};

window.equal = function () {
  var exp = document.form.textview.value;

  if (exp) {
    document.form.textview.value = eval(exp);
  }
};

window.clean = function () {
  document.form.textview.value = "";
};

window.back = function () {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
};
