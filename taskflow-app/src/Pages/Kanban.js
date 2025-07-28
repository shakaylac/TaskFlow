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
        { id: 5, title: 'Task 1', color: 'red' },
        { id: 6, title: 'Task 2', color: 'orange' },
        { id: 7, title: 'Task 3', color: 'green' }
    ]);

    const [ reviewCards, setReviewCards ] = useState([
        { id: 8, title: 'Task 1', color: 'orange' },
        { id: 9, title: 'Task 2', color: 'green' }
    ]);

    const [ completeCards, setCompleteCards ] = useState([
        { id: 10, title: 'Task 1', color: 'blue' },
        { id: 11, title: 'Task 2', color: 'blue' },
        { id: 12, title: 'Task 3', color: 'blue' },
        { id: 13, title: 'Task 4', color: 'blue' },
        { id: 14, title: 'Task 5', color: 'blue' },
        { id: 15, title: 'Task 6', color: 'blue' },
        { id: 16, title: 'Task 7', color: 'blue' }
    ]);

    const [ dragCard, setDragCard ] = useState(null);   
    const handleDragStart = (e, card) => {
        setDragCard(card);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDrop = (e, column) => {
        e.preventDefault();
        if (dragCard) {
            switch (column) {
                case 'todo':
                    setTodoCards([...todoCards, dragCard]);
                    setInProgressCards(inProgressCards.filter(card => card.id !== dragCard.id));
                    setReviewCards(reviewCards.filter(card => card.id !== dragCard.id));
                    setCompleteCards(completeCards.filter(card => card.id !== dragCard.id));
                    break;
                case 'inProgress':
                    setInProgressCards([...inProgressCards, dragCard]);
                    setTodoCards(todoCards.filter(card => card.id !== dragCard.id));
                    setReviewCards(reviewCards.filter(card => card.id !== dragCard.id));
                    setCompleteCards(completeCards.filter(card => card.id !== dragCard.id));
                    break;
                case 'review':
                    setReviewCards([...reviewCards, dragCard]);
                    setTodoCards(todoCards.filter(card => card.id !== dragCard.id));
                    setInProgressCards(inProgressCards.filter(card => card.id !== dragCard.id));
                    setCompleteCards(completeCards.filter(card => card.id !== dragCard.id));
                    break;
                case 'complete':
                    setCompleteCards([...completeCards, dragCard]);
                    setTodoCards(todoCards.filter(card => card.id !== dragCard.id));
                    setInProgressCards(inProgressCards.filter(card => card.id !== dragCard.id));
                    setReviewCards(reviewCards.filter(card => card.id !== dragCard.id));
                    break;
                default:
                    break;
            }
            setDragCard(null);
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
  


    const handleNewCardChange = (e) => {
        setNewCard(e.target.value);
    };
    const handleAddCard = (column) => {
        if (newCard.trim() === '') return;

        const newCardObj = { id: Date.now(), title: newCard, color: 'green' };
        switch (column) {
            case 'todo':
                setTodoCards([...todoCards, newCardObj]);
                break;
            case 'inProgress':
                setInProgressCards([...inProgressCards, newCardObj]);
                break;
            case 'review':
                setReviewCards([...reviewCards, newCardObj]);
                break;
            case 'complete':
                setCompleteCards([...completeCards, newCardObj]);
                break;
            default:
                break;
        }
        setNewCard('');
    };

            

    return(
        <div className="kanban-container">
            <div className="kanban-headers">
                     <div className="todo-column">
                        <h5 className="todo-header">To Do</h5>
                        <div className="todo-cards">
                            {todoCards.map(card => (
                                <div key={card.id} className={`card ${card.color}-card`}
                                    style={{ borderLeft: `5px solid ${card.color}` }}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, card)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, 'todo')}
                                    onHandleNewCardChange={handleNewCardChange}
                                    onHandleAddCard={() => handleAddCard('todo')}>
                                    
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
                                    style={{ borderLeft: `5px solid ${card.color}` }}
                                     draggable
                                    onDragStart={(e) => handleDragStart(e, card)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, 'in-progress')}
                                    onHandleNewCardChange={handleNewCardChange}
                                    onHandleAddCard={() => handleAddCard('todo')}>
                                    
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
                                    style={{ borderLeft: `5px solid ${card.color}` }}
                                     draggable
                                    onDragStart={(e) => handleDragStart(e, card)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, 'review')}
                                    onHandleNewCardChange={handleNewCardChange}
                                    onHandleAddCard={() => handleAddCard('todo')}>
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
                                    style={{ borderLeft: `5px solid ${card.color}` }}
                                     draggable
                                    onDragStart={(e) => handleDragStart(e, card)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, 'complete')}
                                    onHandleNewCardChange={handleNewCardChange}
                                    onHandleAddCard={() => handleAddCard('todo')}>
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