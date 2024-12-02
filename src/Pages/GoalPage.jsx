import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Goal from "../Components/Goal";
import useLocalStorage from "../Components/UseLocalStorage";



function GoalPage() {
   const [goals, setGoals] = useLocalStorage('items1',[]);
    const [newGoal, setNewGoal] = useState({ wantedNumbers: "", wantedTime: "", completed: false });

const addGoal = () => {
    if (newGoal.wantedNumbers && newGoal.wantedTime) {
        const newId = Date.now().toString();
        setGoals([...goals, {...newGoal, id: newId}]);
        setNewGoal({ wantedNumbers: "", wantedTime: "", completed: false});
    }
};

const deleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals); 
};

function toggleCompleted(id) {
    setGoals(goals.map(goal => {
        if (goal.id === id) {
            return {...goal, completed: !goal.completed};
        } else {
            return goal;
        }
    }));
}



return (
    <>
    <Navbar />
    <br />
    <br />
    <br />
    <div className="personal-top">
    <h1>Your goals</h1>
    </div>
    <br />
    <div className="goal-form">
      <input
        type="text"
        placeholder="Wanted numbers"
        value={newGoal.wantedNumbers}
        onChange={(e) => setNewGoal({ ...newGoal, wantedNumbers: e.target.value })}
      />
      <select onChange={(e) => setNewGoal({ ...newGoal, wantedTime: e.target.value })}>

      <option value="Day">Per day</option>
      <option value="Week">Per week</option>
      <option value="Month">Per month</option>
        
      </select>
      <button onClick={addGoal}>Add Goal</button>
    </div>
    <div className="note-list">
        {goals.map((goal) => (
      <Goal key={goal.id} goal={goal} onDelete={deleteGoal} toggleCompleted={toggleCompleted} />
    ))}
    </div>
</>
);


}

export default GoalPage;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    /*  const [goals, setGoals] = useState('');
    const [newGoal, setNewGoal] = useState({ number: "", finishedNumbers: "" });
    const [selectedValue, setSelectedValue] = useState('Option 1');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const addGoal = () => {
        if (newGoal.finishedNumbers && selectedValue) {
            const newId = Date.now().toString();
            setGoals([...goals, {...newGoal, id: newId}]);
            setNewGoal({ number: "", finishedNumbers: "" });
        }
    };
    const deleteGoal = (id) => {
        const updatedGoals = goals.filter((goal) => goal.id !== id);
        setGoals(updatedGoals); 
    };
    
    const editGoal = (id, newText) => {
        const updatedGoals = goals.map((goal) =>
            goal.id === id ? { ...goal, text: newText } : goal
          );
          setGoals(updatedGoals);
    
    };
    

    return (
        <>
        <Navbar />
        <div className="App">
            <br/>
            <br/>
            <br/>
            <div className="note-form">
        <input 
        type="text"
        inputmode="numeric"
        placeholder="How many words you wish to write?"
        value={newGoal.finishedNumbers}
        onChange={(e) => setNewGoal({ ...newGoal, finishedNumbers: e.target.value })}
        pattern="[0-9\s]"
        />
        <select value={selectedValue} onChange={handleChange}>
            <option value="Option 1">Per Day</option>
            <option value="Option 2">Per Week</option>
            <option value="Option 3">Per Month</option>
        </select>
        <button onClick={addGoal}>Add Goal</button>
        </div>
     <div className="note-list">
        {goals.map((goal) => (
      <Goal key={goal.id} goal={goal} onDelete={deleteGoal} onEdit={editGoal} />
    ))}
    </div>
  </div>
        </>
    );*/
