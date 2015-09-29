var todoLiHTML = '<input type="checkbox"><li class="todo-item" style="display: inline">%data%</li><br/>';
var todoList = [];

function todo() {
    var todoItem = prompt('What would you like to do?');

    if (typeof todoItem === 'string' && todoItem !== '') {
        if (todoList.indexOf(todoItem) === -1) {
            todoList.push(todoItem);
            alert('Added ' + todoItem + ' to your list!');
        } else {
            alert('That todo item is already in your list');
            todo();
        }
    } else {
        alert('I\'m sorry, I didn\'t recognize your entry. Please try again');
        todo();
    }
    console.log(todoList);
    todo.displayNewItem(todoItem);
}

todo.displayNewItem = function(todoItem) {
    var formattedTodoItem = todoLiHTML.replace("%data%", todoItem);
    $('#todoList').append(formattedTodoItem);
};

$(document).ready(function() {
    $('button').click(function() {
        todo();
    });
});
