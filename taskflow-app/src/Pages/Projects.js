import '../CSS/Project.css';
import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';


function Projects() {
    return( 
        <>
        <div className='Projects'>
            <div className="projects-container">
                <div className='project-cards'>
                    <div id='cora-design' className='cora-design'> 
                        <div className="project-header">
                            <p>Cora Design </p>
                            <div className="members">
                                <div className="circle-1">
                                    <div className='initials'>JC</div>
                                </div>
                                <div className="circle-2">
                                    <div className='initials'>KT</div>
                                </div>
                                <div className="circle-3">
                                    <div className='initials'>RM</div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div id='cora-marketing' className='cora-marketing'> 
                            <div className="project-header">
                                <p>Cora Marketing</p>
                                <div className="members">
                                    <div className="circle-1">
                                        <div className='initials'>EP</div>
                                    </div>
                                    <div className="circle-2">
                                        <div className='initials'>MS</div>
                                    </div>
                                    <div className="circle-3">
                                        <div className='initials'>BS</div>
                                    </div>
                                </div>
                            </div>
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div id='cora-research' className='cora-research'> 
                        <div className="project-header">
                            <p>Cora Research</p>
                            <div className="members">
                                <div className="circle-1">
                                    <div className='initials'>AJ</div>
                                </div>
                                <div className="circle-2">
                                    <div className='initials'>KC</div>
                                </div>
                                <div className="circle-3">
                                    <div className='initials'>LM</div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </div>
                </div>

                <div className='project-stats'>
                    <div className='link-container'> 
                        <div className='link-header'>
                            <p>Documents</p>
                            <a href="#"> + Add</a>
                        </div>
                        <div className='link-body'></div>
                            <div className='link-item'>
                                <a href="#">StyleSheet_Mayden.pdf</a>
                                <button className='edit'><img src={editIcon} /></button>
                                <button className='delete'><img src={deleteIcon} /></button>
                            </div>
                            <div className='link-item'>
                                <a href="#">Brief_Mayden.pdf</a>
                                <button className='edit'><img src={editIcon} /></button>
                                <button className='delete'><img src={deleteIcon} /></button>
                            </div>
                            <div className='link-item'>
                                <a href="#">Presentation_Mayden.pdf</a>
                                <button className='edit'><img src={editIcon} /></button>
                                <button className='delete'><img src={deleteIcon} /></button>
                            </div>
                            

                    </div>

                    <div className='inbox-container'>
                        <div className='inbox-header'>
                            <p>Recent Conversations</p>
                            <button className="view-all-btn">View All</button>
                        </div>
                        <div className='inbox-body'>
                            <div className='inbox-item'>
                                <div className='inbox-message-header'>
                                    <div className='inbox-circle-blue'>RM</div>
                                    <p className='Title'> Brainstorm Session </p>
                                    <div className='inbox-number'>4</div>
                                </div>
                                <div className='inbox-text'>
                                     <span>2 hrs ago</span>
                                    <p className='message'>John Cattens: completed task "Design Landing Page"</p>
                                </div>
                            </div>
                            <div className='inbox-item'>
                                <div className='inbox-message-header'>
                                    <div className='inbox-circle-yellow'>BS</div>
                                    <p className='Title'> Marketing Sync </p>
                                    <div className='inbox-number'>2</div>
                                </div>
                                <div className='inbox-text'>
                                    <span>5 hrs ago</span>
                                    <p className='message'>Edgar Poe: commented on task "Market Research"</p>
                                </div>
                            </div>
                            <div className='inbox-item'>
                                <div className='inbox-message-header'>
                                    <div className='inbox-circle-purple'>AJ</div>
                                    <p className='Title'> Survey Findings </p>
                                    <div className='inbox-number'>9</div>
                                </div>
                                <div className='inbox-text'>
                                    <span>1 day ago</span>
                                    <p className='message'>Alexis Jenkins: added you to project "Cora Research"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>

            </div>

           
        </div>

        </>

    )
}

export default Projects;