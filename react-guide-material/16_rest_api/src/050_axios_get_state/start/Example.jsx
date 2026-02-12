import axios from 'axios';
import { useEffect, useState } from "react";

const Example = () => {
  console.log('Exampleレンダリング');
  // mapを呼ぶため、初期値を配列にするか、optional chainingを使う
  const [ users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user')
      setUsers(res.data); // 状態更新をすると際レンダリングされ、useEffectが再実行される
    }
    getUser();
  }, []); // POINT 空の配列を渡すことで、最初の1回だけ実行される

  return (
    <div>
      {users.map( user => { // users?.mapを使う場合もある
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.age}歳</p>
            <p>{user.hobbies.join(',')}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Example;
