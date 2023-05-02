import { useState } from 'react';
import Add from './Add';
import arrowReapeat from '../assets/arrow-repeat.svg';
import { Lists } from './Get-list';

export default function Header() {
  const localLists = [];
  if (localStorage.getItem('lists')) {
    localLists.push(...JSON.parse(localStorage.getItem('lists')));
  }
  const [, setlists] = useState(localLists);
  return (
    <>
      <li key={343} className="li-header">
        <h2>Today&apos;s To Do </h2>
        <img className="right-icons-h" alt="to do lists" src={arrowReapeat} />
      </li>
      <li key={344} className="add-input">
        <form>
          <input
            id="new-item"
            className="new-item"
            placeholder="Add to your list..."
            type="text"
          />
          <input
            id="submit-new-item"
            type="submit"
            value=""
            onClick={() => {
              setlists(() => Add(document.getElementById('new-item')));
            }}
            title="click this or press enter to submit"
            className="icon-return"
          />
        </form>
      </li>
      <Lists />
    </>
  );
}
