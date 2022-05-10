// import Foo from "./Foo";
import Foo from "./Foo";

export default function MyApp({ children }) {
  return (
    <div>
      App Client:
      {children}
      <Foo
        prop={() => {
          alert("Yoooo");
        }}
      />
    </div>
  );
}
