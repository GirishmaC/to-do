let array = new Set();
let greesh;
let wrk = new Map;
let flag = false;
function modal() {
    document.getElementById("to-do").style.display = "block";
};
function add() {
    var cards = document.getElementById("unique").value;
    createObj(cards);
    closeModal();
}
function closeModal() {
    document.getElementById("to-do").style.display = "none";
}
function addList() {
    var todo_item = document.querySelector(".element-list").cloneNode(true);
    var card_item = document.getElementById('text-box').value;
    todo_item.innerText = card_item;
    todo_item.setAttribute('id', `${Date.now()}`);
    todo_item.style.display = "block";
    todo_item.setAttribute('value', `${Date.now()}`);
    todo_item.setAttribute('style', "margin-left: 10px;");
    var completed = document.createElement('button');
    completed.setAttribute('id', `check-done-${Date.now()}`);
    completed.setAttribute('class', 'mark-as-done-class');
    completed.setAttribute('value', `${Date.now()}`);
    completed.setAttribute('onclick', 'completedTask(this.value)');
    completed.innerText = 'Mark Done';
    completed.setAttribute('style', 'cursor:pointer; font-size:18px;  height:18px; border-radius:12px;')
    todo_item.appendChild(completed);
    todo_item.setAttribute('onClick', "completedTask(this.value)");
    for (obj of array) {
        for (prop in obj) {
            if (obj.id == greesh) {
                obj.wrk.set(`${card_item}`, `${Date.now()}`);
                break;
            }
        }
    }
    document.getElementById(`${greesh}`).getElementsByClassName('cards-adding')[0].appendChild(todo_item).appendChild(completed);
    close();
}
function createObj(title) {
    document.getElementById('no-items').style.display = 'none'
    var card_obj = {
        title: title,
        id: Date.now(),
        wrk
    };
    array.add(card_obj);
    cardCreation(card_obj.id);
};
function close() {
    document.getElementById("div-card").style.display = "none";
}
function addSubtask(val) {
    document.getElementById("div-card").style.display = "block";
    greesh = val;
};
function deleteCard(val) {
    var delete_div = document.getElementById(`${val}`);
    for (obj of array) {
        for (prop in obj) {
            if (obj.id == val)
                array.delete(obj);
            break;
        }
    }
    delete_div.parentNode.removeChild(delete_div);
    if (array.size == 0) {
        document.getElementById('no-items').style.display = 'block';
    }

};
function cardCreation() {
    var first_card = document.querySelector('.card').cloneNode(true);
    display(first_card);
};
function completedTask(value) {
    document.getElementById(`${value}`).style.textDecoration = 'line-through';
    document.getElementById(`${value}`).style.color = '#1557d1';
    document.getElementById(`check-done-${value}`).remove();
}
function display(card) {
    document.getElementById('no-items').style.display = 'none'
    array.forEach(element => {
        card.id = element.id;
        card.querySelector(".one").innerHTML = element.title;
        card.querySelector(".one").setAttribute('value', `${element.id}`);
        card.setAttribute("value", `${element.id}`);
        card.setAttribute("display", "block");
        card.setAttribute("min-height", "300px");
        card.querySelector(".delete-button").setAttribute("value", `${element.id}`);
        card.querySelector(".delete-button").setAttribute("onClick", "deleteCard(this.value)");
        card.querySelector(".adding-btn").setAttribute("value", `${element.id}`);
        card.querySelector(".adding-btn").setAttribute("onClick", "addSubtask(this.value)");
    });
    if (flag)
        card.style.display = 'none';
    else
        card.style.display = "block";
    document.getElementById("container").appendChild(card);
}
function Functionn(val) {
    var card_header;
    for (let lists of array) {
        for (let id in lists) {
            if (lists[id] == val) {
                card_header = lists.title;
                break;
            };
        };
    };
    document.querySelector("#girishma").style.display = 'none';
    document.querySelector("#add-texts").style.display = 'none';
    for (let lists of array) {
        if (lists.id == val) {
            document.getElementById(`${lists.id}`).style.display = 'block';
        }
        else {
            document.getElementById(`${lists.id}`).style.display = 'none';
        }
    };
    document.getElementById('box-card').innerText = `${card_header}`;
    document.getElementById('box-card').style.display = 'flex'
    document.getElementById('back-button').style.display = 'block'
    flag = true;
};
function displayAll() {
    flag = false;
    document.querySelector("#girishma").style.display = 'block';
    document.querySelector("#add-texts").style.display = 'inline-block';
    document.getElementById('back-button').style.display = 'none';
    for (let lists of array) {
        document.getElementById(`${lists.id}`).style.display = 'block';
    };
    document.getElementById('box-card').innerText = ``;
    document.getElementById('box-card').style.display = 'none';
}
