import Foo from "./Foo.client";

export default function MyApp({ children }) {
  return (
    <div>
      App Client:
      {children}
      <Foo
        handleClick={() => {
          alert("Test");
        }}
      />
    </div>
  );
}
