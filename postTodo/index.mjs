const todos = [
  { id: 1, task: "Tämj en enhörning och rid den till jobbet", done: false },
  {
    id: 2,
    task: "Lär dig att prata med växter och få dem att svara",
    done: false,
  },
  {
    id: 3,
    task: "Bygg en tidsmaskin av en brödrost",
    done: false,
  },
  {
    id: 4,
    task: "Slå världsrekord i att hålla andan på Mars",
    done: false,
  },
  {
    id: 5,
    task: "Övertyga din spegelbild att göra dina sysslor åt dig",
    done: false,
  },
];

export const handler = async (event) => {
  const { task } = JSON.parse(event.body);
  let response;

  if (!task) {
    response = {
      statusCode: 400,
      body: JSON.stringify({ message: "Task is required" }),
    };
  } else {
    const addTodo = {
      id: todos[todos.length - 1].id + 1,
      task: task,
      done: false,
    };

    todos.push(addTodo);

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully added todo",
        addedTodo: addTodo,
        todos: todos,
      }),
    };
  }

  return response;
};
