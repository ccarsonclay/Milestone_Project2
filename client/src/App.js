import React, { useState } from "react";
import "./style.css";

export const App = () => {
	const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleCreateTask = (e) => {
	e.preventDefault();
	console.log(e.target.value);
    setTask(e.target.value);
  }

  const handleAddTask = () => {
	setTaskItems([...taskItems, task]);
	console.log(taskItems)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)


  }

  
  console.log(taskItems);
	return (
		<div>
		<h1>Task List 2023</h1>
		<form id="new-task-form">
			<input 
				type="text" 
				name="new-task-input" 
				id="new-task-input" 
				onChange={ e => handleCreateTask(e) }
				placeholder="What do you have planned?" />
			<input 
				type="button"
				id="new-task-submit" 
				value="submit"
				onClick={ () => handleAddTask() }
				/>
		</form>
	<main>
		<section className="task-list">
			<h2>Tasks</h2>

			<div id="tasks">
				<ul>
					{ taskItems.map(task => (
						<li>{ task }</li>
				))}

				</ul>

				 <div className="task">
					<div className="content">
						<input 
							type="text" 
							className="text" 
							defaultValue=""
							 />
					</div>
					<div className="actions">
						<button className="edit">Edit</button>
						<button className="delete">Delete</button>
					</div>
				</div> 

			</div>
		</section>
		
	</main>
	</div>
	)
}	