import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchHabbits } from "../store/habbitSlice";
import { Habbit } from "./Habbit";

const HabbitStats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { habits, isLoading, error } = useSelector((state: RootState) => {
    return state.habbits;
  });

  useEffect(() => {
    dispatch(fetchHabbits());
  }, []);

  return (
    <div>
      <h2>Habbit Stats</h2>

      {isLoading && <p>Loading</p>}

      <div>
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </div>

      {habits.map((habbit) => {
        return <Habbit habbit={habbit} key={habbit.id} />;
      })}
    </div>
  );
};

export default HabbitStats;
