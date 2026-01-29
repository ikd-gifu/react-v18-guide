// POINT 型エイリアスについて学ぼう
// TypeScriptでは、type文を用いて型に別名を付けることができる。これを 型エイリアス(type alias) と呼ぶ

const Example = () => {
  // 型エイリアスを定義する際はパスカルケースを用いるのが一般的
  type User = {
    name: string,
    age: number
  }
  const user: User = { name: 'Taro', age: 10 }

  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "women" | "others";

  type UserProfile = {
    name: UserName,
    age: UserAge,
    gender: UserGender,
  }

  const UserProfile: UserProfile = {
    name: 'Hanako',
    age: 21,
    gender: "women"
  };
};

export default Example;
