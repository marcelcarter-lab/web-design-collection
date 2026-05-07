// Variables
let input = document.querySelector("[type=text]");
let button = document.querySelector("[type=submit]");
let tasks = document.querySelector("[class=tasks]");
let item = "skills";

// localStorage.clear()

function removeElement(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function toLocalStorage() {
  if (localStorage.getItem(item) == null) {
    if (input.value) {
      let skillsList = [];
      skillsList.push(input.value);
      localStorage.setItem(item, JSON.stringify(skillsList));
    }
  } else {
    if (input.value) {
      let skillsList = JSON.parse(localStorage.getItem(item));
      skillsList.push(input.value);
      localStorage.setItem(item, JSON.stringify(skillsList));
    }
  }
}

function showSkills(element) {
  let skill = document.createElement("div");
  let content = document.createElement("div");
  let delete_ = document.createElement("input");

  skill.className = "skill";
  content.className = "content";
  delete_.className = "delete";
  tasks.appendChild(skill);
  skill.appendChild(content);
  skill.appendChild(delete_);
  skill.lastElementChild.setAttribute("type", "submit");
  skill.lastElementChild.setAttribute("value", "Delete");
  content.innerHTML = element;

  delete_.onclick = function () {
    let skillsList = JSON.parse(localStorage.getItem(item));
    for (a in skillsList) {
      if (skillsList[a] === content.innerHTML) {
        delete skillsList[a];
        localStorage.setItem(item, JSON.stringify(skillsList));
        break;
        // console.log(typeof skillsList);
      }
    }

    content.innerHTML = "";
    skill.style.display = "none";
    console.log(skillsList);
  };
}

function deleteskill() {}

function getSkills() {
  let skillsList = JSON.parse(localStorage.getItem(item));
  for (let b = 0; b < skillsList.length; b++) {
    if (skillsList[b] == null) {
      skillsList.splice(b, 1);
      localStorage.setItem(item, JSON.stringify(skillsList));
    }
  }
  for (let i = 0; i < skillsList.length; i++) {
    if (skillsList[i] !== null) {
      showSkills(skillsList[i]);
    }
  }
}

if (localStorage.getItem(item)) {
  getSkills();
}

button.onclick = function () {
  toLocalStorage();
  if (input.value) {
    showSkills(input.value);
    input.value = "";
  }
};
