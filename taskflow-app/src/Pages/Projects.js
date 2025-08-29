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
                                <div className="circle-1"></div>
                                <div className="circle-2"></div>
                                <div className="circle-3"></div>
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
                                    <div className="circle-1"></div>
                                    <div className="circle-2"></div>
                                    <div className="circle-3"></div>
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
                                <div className="circle-1"></div>
                                <div className="circle-2"></div>
                                <div className="circle-3"></div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="progress"></div>
                        </div>
                    </div>
                </div>

                <div className='project-stats'>
                    <div className='link-container'> 
                        <div className='link-header'></div>
                        <div className='link-body'></div>

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