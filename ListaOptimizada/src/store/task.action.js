let nextTaskId = 5;
export const addTask = (value) => ({
  type: "ADD_TASK",
  id: nextTaskId++,
  value,
});

export const toggleTask = (item) => {
  return {
    type: "TOGGLE_TASK",
    item,
  };
};
