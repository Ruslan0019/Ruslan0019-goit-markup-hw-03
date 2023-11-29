function makeTask(data) {
  // const completed = false;
  // const category = "General";
  // const priority = "Normal";
  // Change code below this line

  const qwerty = {
    completed: "false",
    category: "General",
    priority: "Normal",
  }
  const qwe = { ...qwerty, ...data };
  return qwe;
  // Change code above this line
  console.log(qwe);
}
