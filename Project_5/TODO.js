const add_todo = () => {
    let title = document.getElementById('title').value;
    let desc = document.getElementById("desc").value;

    // for storing data in localstorage
    //LocalStorage.setItem(todos,[{tle,desc},[{tle,desc}]]);

    let todos = [] //created an empty array.

    //it will be in string.
    let localTodos = localStorage.getItem("todos") //ehaan pe ham check kr rahe hai ki hamare pass data pehle se to available ni hai,agr hoga to vo string hoga.

    //posibility check kr rahe hai.
    if (localTodos != null) {
        todos = JSON.parse(localTodos); //JSON.parse will convert string to object typecasting.
    }

    //creatimg object to push in empty array todos..
    todoObject = {
        title: title,
        desc: desc,
        id: Math.trunc(Math.random() * 1000),
    };

    todos.push(todoObject);

    // pushing data in localstorage.

    localStorage.setItem("todos", JSON.stringify(todos));

    // using JSON.stringfy converting object to string.

    show_todo();



};

//for showing todo data
const show_todo = () => {
    let todoString = localStorage.getItem('todos');

    let content = "";

    if (todoString == null) {
        content += "<h3 class='text-white'> NO TODO TO SHOW</h3>";
    } else {
        let todos = JSON.parse(todoString);
        for (let todo of todos.reverse()) {

            content += `
            
             <div class='card mt-2'>

              <div class='card-body'>
                     
                    <h3>${todo.title}</h3>
                    <p>${todo.desc}</p>
                    
            </div>

                </div>
            `
        }
    }

    document.getElementById('content').innerHTML = content;
}

// when the js run it will show it.
show_todo();
