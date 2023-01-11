export const createTable = (size: number) => {
  const table = [];
  for (let i = 0; i < size; i++) {
    const part = [];
    for (let j = 0; j < size; j++) {
      part.push(false);
    }
    table.push(part);
  }
  return table;
};
