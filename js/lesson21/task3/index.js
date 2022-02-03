export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(Array.from(elementsList));
  return Array.from(elementsList);
};

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
};
getItemsArray();
getItemsList();
