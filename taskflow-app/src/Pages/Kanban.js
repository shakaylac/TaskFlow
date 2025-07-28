import '../CSS/Kanban.css';

function Kanban() {
    return(
        <div className="kanban-container">
            <div className="kanban-headers">
                     <div className="todo-column">
                        <h5 className="todo-header">To Do</h5>
                        <div className="todo-cards">
                            <div className="red-card">Task 1</div>
                            <div className="orange-card">Task 2</div>
                            <div className="green-card">Task 3</div>
                            <div className="orange-card">Task 4</div>
                        </div>
                    </div>
                        
                    <div className="in-progress-column">
                        <h5 className="in-progress-header">In Progress</h5> 
                        <div className="in-progress-cards">
                            <div className="red-card">Task 1</div>
                            <div className="orange-card">Task 2</div>
                            <div className="green-card">Task 3</div>
                        </div>
                    </div>    

                    <div className="review-column">
                        <h5 className="review-header">Review</h5> 
                        <div className="review-cards">
                            <div className="orange-card">Task 1</div>
                            <div className="green-card">Task 2</div>
                        </div>
                    </div>      

                    <div className="complete-column">
                        <h5 className="complete-header">Complete</h5>
                        <div className="complete-cards">
                            <div className="complete-card">Task 1</div>
                            <div className="complete-card">Task 2</div>
                            <div className="complete-card">Task 3</div>
                            <div className="complete-card">Task 4</div>
                            <div className="complete-card">Task 5</div>
                            <div className="complete-card">Task 6</div>
                            <div className="complete-card">Task 7</div>
                        </div>
                    </div>
            </div>

        </div>
    )
};

export default Kanban;