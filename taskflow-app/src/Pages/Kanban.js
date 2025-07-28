import '../CSS/Kanban.css';

function Kanban() {
    return(
        <div className="kanban-container">
            <div className="kanban-headers">
                <h5 className="todo-header">To Do</h5>
                <h5 className="in-progress-header">In Progress</h5>     
                <h5 className="review-header">Review</h5>       
                <h5 className="complete-header">Complete</h5>
            </div>

        </div>
    )
};

export default Kanban;