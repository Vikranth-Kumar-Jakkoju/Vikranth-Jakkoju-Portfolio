import { useState } from "react";
import './Certifications.css'
import certificates from './Certifications.json'

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
                    <div>
                        <img src={cert.location} alt="" style={{width: '100%', height: 'auto'}} />
                    </div>
                    <p>{cert.cid? `Credential ID: ${cert.cid}` : ''}</p>
                    <p>{cert.description? `About certificate: ${cert.description}` : ''}</p>
                    {cert.clink && (
                        <p>
                            Link to certificate: <a href={cert.clink} target="_blank" rel="noreferrer">Click here</a>
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [page, setPage] = useState(1);
    const pageSize = 7;

    const paginated = certificates.slice(
        (page - 1) * pageSize,
        page * pageSize
    );
    
    return (
        <>
            <section id='Certifications' className='section'>
                <h1>Certifications</h1>
                <p>The list of certifications I have done</p>
                <nav>
                    <ul>
                        {paginated.map(item => 
                            <li key={item.name} onClick={() => setSelectedCert(item)}>{item.name}</li>
                        )}
                        <Pagination
                            total={certificates.length}
                            pageSize={pageSize}
                            current={page}
                            onChange={setPage}
                        />
                    </ul>
                </nav>
                <Modal
                    cert={selectedCert}
                    onClose={() => setSelectedCert(null)}
                />

            </section>
        </>
    );
}

export default Certifications