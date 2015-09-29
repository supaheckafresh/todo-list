var todoLiHTML = '<input type="checkbox"><li class="todo-item">%data%</li><br/>';
var todoList = [];

function todo() {
    var userTodo = prompt('What would you like to do?');

    if (typeof userTodo === 'string' && userTodo != '') {
        console.log(userTodo);
        if (todo.isNotInList(userTodo)) {
            todoList.push(userTodo.trim());
            alert('Added ' + userTodo.toUpperCase() + ' to your list!');
        } else {
            alert('That todo item is already in your list');
        }
    } else {
        alert('I\'m sorry, I didn\'t recognize your entry. Please try again');
    }

    if (!todo.isBlank(userTodo) && userTodo != null) {
        todo.displayNewItem(userTodo);
        console.log(todoList);
    }
}

todo.displayNewItem = function(todoItem) {
    var formattedTodoItem = todoLiHTML.replace("%data%", todoItem);
    $('#todoList').append(formattedTodoItem);
};

todo.isBlank = function(userEntry) {
    if (userEntry != null) {
        return userEntry.trim() === '';
    }
};

todo.isNotInList = function(userEntry) {
    return todoList.indexOf(userEntry) === -1
};

$(document).ready(function() {
    $('button').click(function() {
        todo();
    });
});
