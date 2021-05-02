(function () {
  "use strict";

  // two way data binding (to UI)

  var vm = new Vue({
    el: "#app",
    data: {
      todos: ["task1", "task2", "task3"],
    },
  });
})();
