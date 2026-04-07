import { useState } from 'react';
import './Achievements.css'
import achievements from './Achievements.json'

function Pagination({total, pageSize, current, onChange}) {
    const totalPages = Math.ceil(total / pageSize);

    return (
        <>
            <div className="pagination">
                <button onClick={() => onChange(current - 1)} disabled={current === 1}>
                    Prev
                </button>

                {Array.from({length: totalPages}, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => onChange(i + 1)}
                        className={current === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}

                <button onClick={() => onChange(current + 1)} disabled={current === totalPages} >
                    Next
                </button>
            </div>
        </>
    );
}

function Modal({cert, onClose}) {
    if(!cert) {
        return null;
    }
    return (
        <>
            <div className="modal-background" onClick={onClose}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <h3>{cert.name}</h3>
                    <div className='modal-body'>
                        <div className='image-container'>
                            {cert.location? (
                                <img src={cert.location} alt=""/>
                            ) : (
                                <div className='image'>
                                    <p>Badge image not available.</p>
                                    <a href="https://www.hackerrank.com/profile/jakkojuvikranth" target="_blank" rel="noreferrer">View on Profile</a>
                                </div>
                            )}
                        </div>
                        <div className='modal-description'>
                            <h4 style={{ fontWeight: 'normal' }}><b>Platform:</b> {cert.platform}</h4>
                            {cert.description && (
                                <p><b>About achievement: </b>{cert.description}</p>
                            )}
                            <p style={{color: 'grey'}}>Please visit my profile on the platform to verify the authenticity of this achievement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Achievements() {
    const [selectedAchi, setSelectedAchi] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 7;

    const paginated = achievements.slice(
        (page - 1) * pageSize,
        page * pageSize
    );

    return (
        <>
            <section id='Achievements' className='section'>
                <h1>Achievements</h1>
                <nav>
                    <ul>
                        {paginated.map(item => 
                            <li key={item.name} onClick={() => setSelectedAchi(item)}>{item.name}</li>
                        )}
                        <Pagination
                            total={achievements.length}
                            pageSize={pageSize}
                            current={page}
                            onChange={setPage}
                        />
                    </ul>
                </nav>
                <Modal
                    cert={selectedAchi}
                    onClose={() => setSelectedAchi(null)}
                />
            </section>
        </>
    );
}

export default Achievements