import { useDispatch } from "react-redux";
import { Habit, removeHabit, toggleHabit } from "../store/habbitSlice";
import { AppDispatch } from "../store/store";

export const Habbit = ({ habbit }: { habbit: Habit }) => {
  const dispatch = useDispatch<AppDispatch>();
  const today = new Date().toISOString().split("T")[0];

  const handleComplete = () => {
    dispatch(
      toggleHabit({
        id: habbit.id,
        date: today,
      })
    );
  };

  const handleRemove = () => {
    dispatch(removeHabit({ id: habbit.id }));
  };

  return (
    <>
      <div className="habbit">
        <div>
          <p
            style={{
              textDecoration: habbit.completedDates.includes(today)
                ? "line-through"
                : "",
            }}
          >
            {habbit.name}
          </p>
          <p
            style={{
              textDecoration: habbit.completedDates.includes(today)
                ? "line-through"
                : "",
            }}
          >
            {habbit.frequency}
          </p>
        </div>

        <div className="habit-btn-container">
          <button type="button" onClick={handleComplete}>
            Mark complete
          </button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
