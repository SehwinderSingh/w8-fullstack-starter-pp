const WorkoutListing = ({workout}) => {
  return (
    <div className="workout-preview">
      <h2>{workout.title}</h2>
      <p>Difficulty: {workout.difficulty}</p>
      <p>Price: ${workout.price}</p>
    </div>
  );
};

export default WorkoutListing;
