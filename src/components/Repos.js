import React from 'react';
function Repos({ repos }) {
    return (
        <React.Fragment>
            {repos.map(repo => (
                <div className="card mb-3" key={repo.id}>
                    <div className="card-body">
                        <h5>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                style={{color: "#2B4F60"}}
                            >
                                {repo.name}</a>
                        </h5>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default Repos;