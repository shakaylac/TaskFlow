import '../CSS/Kanban.css';

function Kanban() {
    return(
        <div className="kanban-container">
            <div className="kanban-headers">
                     <div className="todo-column">
                        <h5 className="todo-header">To Do</h5>
                        <div className="todo-cards">
                            <div className="todo-card">Task 1</div>
                            <div className="todo-card">Task 2</div>
                            <div className="todo-card">Task 3</div>
                            <div className="todo-card">Task 4</div>
                        </div>
                    </div>
                        
                    <div className="in-progress-column">
                        <h5 className="in-progress-header">In Progress</h5> 
                    </div>    

                    <div className="review-column">
                        <h5 className="review-header">Review</h5> 
                    </div>      

                    <div className="complete-column">
                        <h5 className="complete-header">Complete</h5>
                    </div>
            </div>

        </div>
    )
};

export default Kanban;