import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl h-screen w-screen flex justify-center items-center font-bold text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
      <DennisComponent text={"Linus should have done this"} />
    </div>
  );
}

export default App;

type DennisComponentType = {
  text: string;
};
function DennisComponent({ text }: DennisComponentType) {
  return <p className="text-blue-600">{text}</p>;
}
