// import { useSelector } from "react-redux";
import AddHabbit from "./components/add-habbit";
import "./index.css";
// import { RootState } from "./store/store";
// import { Habbit } from "./components/Habbit";
import HabbitStats from "./components/HabbitStats";

const App = () => {
  // const { habbits } = useSelector((state: RootState) => {
  //   return { habbits: state.habbits };
  // });

  return (
    <>
      <h2>Habbits</h2>

      <HabbitStats />

      {/* <div>
        {habbits.habits.map((habbit) => {
          return <Habbit habbit={habbit} key={habbit.id} />;
        })}
      </div> */}

      <AddHabbit></AddHabbit>
    </>
  );
};

export default App;
