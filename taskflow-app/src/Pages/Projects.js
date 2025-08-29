import '../CSS/Project.css';


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
                            </div>
                            <div className='link-item'>
                                <a href="#">Brief_Mayden.pdf</a>
                            </div>
                            <div className='link-item'>
                                <a href="#">Presentation_Mayden.pdf</a>
                            </div>
                            

                    </div>

                    <div className='inbox-container'>

                    </div>
                
                </div>

            </div>

           
        </div>

        </>

    )
}

export default Projects;