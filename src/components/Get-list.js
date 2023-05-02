import threeDots from '../assets/three-dots-vertical.svg';

export function Display(data) {
  const { description, completed, index } = data;
  return (
    <div>
      <input className="checkboxs" type="checkbox" value={completed} />
      <textarea id={index}>{description} </textarea>
    </div>
  );
}

export function Lists() {
  const localLists = [];
  if (localStorage.getItem('lists')) {
    localLists.push(...JSON.parse(localStorage.getItem('lists')));
  }
  return localLists.map(({ description, completed, index }) => {
    return (
      <li key={index} className="tasks">
        <div>
          <input className="checkboxs" type="checkbox" value={completed} />
          <textarea id={index} onChange={() => {}} value={description} />
          <img alt="three-dot" className="right-icons" src={threeDots} />
        </div>
      </li>
    );
  });
}
