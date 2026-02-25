import Profile from './components/Profile';

const persons = [
  {
    name: 'Geo',
    age: 20,
    hobbies: ['sports', 'music']
  },
  {
    name: 'Tom',
    age: 20,
    hobbies: ['movie', 'music']
  },
  {
    name: 'Lisa',
    age: 20,
    hobbies: ['sports', 'travel', 'game']
  }
]

const Example = () => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          <Profile {...person}/>
        </li>
      ))}
    </ul>
  );
};

export default Example;
