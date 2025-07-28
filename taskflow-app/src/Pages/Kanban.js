import '../CSS/Kanban.css';
import React, { useState } from 'react';

function Kanban() {
    const [ newCard, setNewCard] = useState ('');

    const [ todoCards, setTodoCards ] = useState([
        { id: 1, title: 'Task 1', color: 'red' },
        { id: 2, title: 'Task 2', color: 'orange' },
        { id: 3, title: 'Task 3', color: 'green' },
        { id: 4, title: 'Task 4', color: 'orange' }
    ]);

    const [ inProgressCards, setInProgressCards ] = useState([
        { id: 1, title: 'Task 1', color: 'red' },
        { id: 2, title: 'Task 2', color: 'orange' },
        { id: 3, title: 'Task 3', color: 'green' }
    ]);

    const [ reviewCards, setReviewCards ] = useState([
        { id: 1, title: 'Task 1', color: 'orange' },
        { id: 2, title: 'Task 2', color: 'green' }
    ]);

    const [ completeCards, setCompleteCards ] = useState([
        { id: 1, title: 'Task 1', color: 'blue' },
        { id: 2, title: 'Task 2', color: 'blue' },
        { id: 3, title: 'Task 3', color: 'blue' },
        { id: 4, title: 'Task 4', color: 'blue' },
        { id: 5, title: 'Task 5', color: 'blue' },
        { id: 6, title: 'Task 6', color: 'blue' },
        { id: 7, title: 'Task 7', color: 'blue' }
    ]);


    return(
        <div className="kanban-container">
            <div className="kanban-headers">
                     <div className="todo-column">
                        <h5 className="todo-header">To Do</h5>
                        <div className="todo-cards">
                            {todoCards.map(card => (
                                <div key={card.id} className={`card ${card.color}-card`}
                                    style={{ borderLeft: `5px solid ${card.color}` }}>
                                    {card.title}
                                </div>
                            ))}
                        </div>
                        
                            
                    </div>
                        
                    <div className="in-progress-column">
                        <h5 className="in-progress-header">In Progress</h5> 
                        <div className="in-progress-cards">
                            {inProgressCards.map(card => (
                                <div key={card.id} className={`card ${card.color}-card`}
                                    style={{ borderLeft: `5px solid ${card.color}` }}>
                                    {card.title}
                                </div>
                            ))}
                            
                        </div>
                    </div>    

                    <div className="review-column">
                        <h5 className="review-header">Review</h5> 
                        <div className="review-cards">
                             {reviewCards.map(card => (
                                <div key={card.id} className={`card ${card.color}-card`}
                                    style={{ borderLeft: `5px solid ${card.color}` }}>
                                    {card.title}
                                </div>
                            ))}
                            
                        </div>
                    </div>      

                    <div className="complete-column">
                        <h5 className="complete-header">Complete</h5>
                        <div className="complete-cards">
                             {completeCards.map(card => (
                                <div key={card.id} className={`card ${card.color}-card`}
                                    style={{ borderLeft: `5px solid ${card.color}` }}>
                                    {card.title}
                                </div>
                            ))}
                           
                        </div>
                    </div>
            </div>

        </div>

    )
};

export default Kanban;