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
  let response;
  const pathParam = parseInt(event.pathParameters.id);
  const foundTodo = todos.find((todo) => todo.id === pathParam);

  if (foundTodo) {
    foundTodo.done = !foundTodo.done;
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Successfully found",
        todoFound: foundTodo,
        todos: todos,
      }),
    };
  } else {
    response = {
      statusCode: 400,
      body: JSON.stringify({ message: "Todo not found" }),
    };
  }

  return response;
};
