export default function Add(description) {
  const tasks = [];
  const localData = localStorage.getItem('lists');
  if (localData) {
    tasks.push(...JSON.parse(localStorage.getItem('lists')));
  }
  const descriptionData = description.value;
  const newIndex = tasks.length + 1;
  tasks.push({
    description: descriptionData,
    completed: false,
    index: newIndex,
  });
  document.getElementById('new-item').value = '';
  if (descriptionData !== '') {
    const dataTolocal = JSON.stringify(tasks);
    localStorage.setItem('lists', dataTolocal);
  }
  const addInput = document.querySelector('.add-input form');
  addInput.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  return tasks;
}
