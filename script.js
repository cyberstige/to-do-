function addTodo() {
    var inputValue = document.getElementById("todo-input").value;
    if (inputValue === '') {
      alert("Please enter a to-do!");
      return;
    }
    
    var li = document.createElement("li");
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
      if (this.checked) {
        li.style.textDecoration = "line-through";
      } else {
        li.style.textDecoration = "none";
      }
    };
    
    var textNode = document.createTextNode(inputValue + " - " + getCurrentTime());
    li.appendChild(checkbox);
    li.appendChild(textNode);
  
    li.onclick = function() {
      this.contentEditable = true;
    };
  
    li.onblur = function() {
      this.contentEditable = false;
    };
  
    document.getElementById("todo-list").appendChild(li);
    document.getElementById("todo-input").value = "";
  }
  
  function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }