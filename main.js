const prompt = require("prompt-sync")();

const listarr = [];
const complete= [];

t = 1;

console.log("~Welcome to your Todo List~")

while(t==1){
    console.log(" Select [3] to exit program ")
    let select = Number(prompt("Select [1] to add an item, and [2] to complete an item: "));
    

if (select == 1){
    console.log("~Adding a task to your list~ ");
    task = prompt("Enter the task you would like to add to your list: ");
    listarr.push(task);
    complete.push(false);
}
else if (select == 2 && listarr.length > 0){
    console.log("You have " + listarr.length + " to complete. ")
    com = Number(prompt("Which task would you like to complete? "));
    c= 0;
if (com > c ){
    complete[com - 1] = true;
    }
}
else if (select == 2 && listarr == 0){
    console.log("Your todo list has no items, please return and add some. ");
}else if (select ==3){
    console.log("Exiting program! ");
    t= t + 1;
}
else(
    console.log("not a valid selection! ")
)
for (let i = 0; i <listarr.length; i++){
    x = i +1;
    if(complete[i] == true){
        console.log(x + "~[X]~" + listarr[i])
    }
    if (complete[i] == false){
        console.log(x + "~[ ]~" + listarr[i])
        }
    }
    
}
