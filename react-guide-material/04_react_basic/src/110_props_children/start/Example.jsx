import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

/* POINT コンポーネントの子要素は props.children に渡る！
コンポーネントが子要素を持つ場合、props.children という特別なプロパティとして受け渡されます。
 */
const Example = () => {
  return (
    <div>
      {/* この中がchildren という特殊なpropsのプロパティとしてコンポーネントに渡される */}
      {/* childrenを利用すると、コンポーネントを他のコンポーネントに渡すことができる */}
      {/* <Container title="Childrenとは？" >
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container> */}
      <Container title="Childrenとは？"
        first={<Profile key={profile[0].name} {...profile[0]} />}
        second={<Profile key={profile[1].name} {...profile[1]} />}
      />
    </div>
  );
};

export default Example;

// 通常のプロパティの渡し方
{/* <Container title="Childrenとは？" /> */}

// propsに指定。非推奨
{/* <Container title="Childrenとは？" children={
  [
    <Profile key={profile[0].name} {...profile[0]} />,
    <Profile key={profile[1].name} {...profile[1]} />
  ]
}
first={<Profile key={profile[0].name} {...profile[0]} />}
second={<Profile key={profile[1].name} {...profile[1]} />}
/>
</div> */}