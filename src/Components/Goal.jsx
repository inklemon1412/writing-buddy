import React, {useState} from 'react';

const Goal = ({ goal, onDelete, toggleCompleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedNumber, setEditedNumber] = useState(goal.wantedNumbers, goal.wantedTime);
  
    const handleChange = () => {
     toggleCompleted(goal.id);
     alert("Congrats on reaching your goal! Consider adding another one!")
    };
  
  


    return (
        <div className="goal">
          <div className="goal-header">
            <h3>{goal.wantedTime}</h3>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
          </div>
            <p>Amount of words you've set: {goal.wantedNumbers}</p>
            <p>Finished?</p>
            <input 
            type="checkbox"
            checked={goal.completed}
            onChange={handleChange}
            />
        </div>
      );
    };

export default Goal;