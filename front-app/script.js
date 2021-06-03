const addNewTask = async function () {
    const input = document.getElementById("new-task");
    const btn = document.getElementById("add-task");
    btn.addEventListener("click", async function () {
        addTaskToTheDOM(input.value);
        postApiRequest({ name: input.value });
        // const elements = await GetApiRequest();
        // console.log(elements.resolve(value));

    });
}
addNewTask();

const addTaskToTheDOM = function (data) {
    const ul = document.getElementById("task-list");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.value = "Delete Task"
    checkbox.type = "checkbox";
    ul.append(li);
    li.append(checkbox, data, btnDelete);
}

const deleteTaskInTheDOM = function (i) {
    const li = Array.from(document.getElementsByTagName("li"));
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function () {
            li[i].remove();
        })
    }
}

const upDateTask = function () {
    const ul = document.getElementById("task-list");
    ul.addEventListener("click", function () {
        deleteTaskInTheDOM();
        putApiRequest(par, par);
    });
}

const deleteTask = async function () {
    const ul = document.getElementById("task-list");
    ul.addEventListener("click", async function (event) {
        if (event.target && event.target.value == "Delete Task") {
            deleteTaskInTheDOM(event.target);
            const tasks = await GetApiRequest();
            tasks.forEach(element => {
                console.log(element._id);
                console.log(element.name);
                if (element.name === event.target.value) {
                    // console.log(element._id);
                    deleteApiRequest(element._id);
                }
            });

            // console.log(event.target);
            // deleteApiRequest();
        };

    }, true);
}
deleteTask();










