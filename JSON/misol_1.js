
let toDoList = {
    list: new Map(),
    count: 1,
    addtask(task){
        this.list.set(this.count++ ,task)
    },

    removeTasks(index){
        this.list.delete(index)
    },

    printTasks(){
        console.log(this.list)
    }
}
toDoList.addtask('Erta turish')
toDoList.addtask('Nonushta qilish')
toDoList.addtask('Kitob oqish')
toDoList.addtask('Dars tayyorlash')

toDoList.printTasks()


