import React, {useState, useEffect} from "react";
import './CertificatesSection.css';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import certificates_data from "../../assets/data/certificates_data";

import { Document, Page, pdfjs } from 'react-pdf';
import ReactCardFlip from 'react-card-flip';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const CertificatesSection = () => {
    
    function sortCertificatesByDate(certificates) {
        return certificates.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return (
        <div id="certificates-section">
            <SectionHeading section_name="CERTIFICATES"/>
            <div id="certificates">
                {
                    sortCertificatesByDate(certificates_data).map((certificate) => 
                        <Certificate certificate={certificate}/>
                    )
                }
            </div>
        </div>
    );
}

const Certificate = ({certificate}) => {

    const [pdfFile, setPdfFile] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const loadPDF = async (certi) => {
            const module = await import(`../../assets/pdfs/${certi}`);
            setPdfFile(module.default);
        };

        loadPDF(certificate.file_name);
    }, [certificate.file_name]);
    
    return (
        <ReactCardFlip 
            flipDirection="horizontal" 
            isFlipped={isFlipped}
        >
            <CertificateFront 
                certificate={certificate} 
                pdfFile={pdfFile} 
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}/>
            <CertificateBack 
                certificate={certificate} 
                pdfFile={pdfFile} 
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}/>
        </ReactCardFlip>
    );

}

const CertificateFront = ({certificate, pdfFile, isFlipped, setIsFlipped}) => {
    
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    return (
        <div className="certificate-front">
            <div className="certificate-title">{certificate.name}</div>
            {pdfFile ? (
                <Document file={pdfFile}>
                    <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width="280"/>
                </Document>
            ) : (
                <div>Loading PDF...</div>
            )}
            <div className="certificate-date">
                {formatDate(certificate.date)}
            </div>
            <div className="certificate-icons">
                <FlipButton isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
            </div>
        </div>
    );
}

const CertificateBack = ({certificate, pdfFile, isFlipped, setIsFlipped}) => {
    
    const categories = certificate.cat;
    
    return (
        <div className="certificate-back">
            <div className='certificate-categories'>
                {categories.map(category => (
                    <span key={category} className='certificate-category'>{category}</span>
                ))}
            </div>
            <div className='certificate-issuing-auth'>
                Issued By: {certificate.issuing_auth.map(authority => (
                    <span key={authority}>{authority} </span>
                ))}
            </div>
            <div className="certificate-icons">
                <div className='open-button'>
                    <a href={pdfFile} target="_blank" rel="noreferrer">
                        Open 
                        {/* <img src={share} height='25px' width='25px' alt='' /> */}
                    </a>
                </div>
                <FlipButton isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
            </div>
        </div>
    );
}

const FlipButton = ({isFlipped, setIsFlipped}) => {
    return (
        <div className="flip-button">
            <div onClick={() => setIsFlipped(!isFlipped)}>
                {isFlipped? "Less": "More"} Details
            </div>
        </div>
    );
}

export default CertificatesSection;