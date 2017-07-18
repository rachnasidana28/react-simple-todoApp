export const ADD_TODO="add_todo";
export const DEL_TODO="del_todo";


export function addTodo(todo){
  return{
    type:"ADD_TODO",
    todo
  };

}

export function deleteTodo(index){
  return{
    type:"DEL_TODO",
    index
  };
}
