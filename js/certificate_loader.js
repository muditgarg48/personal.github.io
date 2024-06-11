function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function displayCertificates (certificates) {
    const container = document.getElementById('certificates-container');

    certificates.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certificate';
        
        const certThumbnail = document.createElement('iframe');
        certThumbnail.className = 'certificate-thumbnail';
        certThumbnail.src = `../assets/certificates/${cert.file_name}`;
        certThumbnail.setAttribute('frameborder', '0');
        
        const certDetails = document.createElement('div');
        certDetails.className = 'certificate-details';

        const certTitle = document.createElement('div');
        certTitle.className = 'certificate-title';
        certTitle.textContent = cert.name;

        const certDate = document.createElement('div');
        certDate.className = 'certificate-date';
        const dt = formatDate(cert.date);
        certDate.textContent = `${dt}`;

        const certId = document.createElement('div');
        certId.className = 'certificate-id';
        certId.textContent = `ID: ${cert.cert_id}`;

        const certCat = document.createElement('ul');
        certCat.className = 'certificate-cats';
        for(let i=0;i<cert.cat.length;i++) {
            const currCat = document.createElement('li');
            currCat.className = 'individual-cat';
            currCat.textContent = `${cert.cat[i]}`;
            certCat.appendChild(currCat);
        }
        // certCat.textContent = `${cert.cat.join(', ')}`;

        const certIssuingAuth = document.createElement('div');
        certIssuingAuth.className = 'certificate-issuing-auth';
        certIssuingAuth.textContent = `${cert.issuing_auth.join(', ')}`;
        
        certDetails.appendChild(certTitle);
        certDetails.appendChild(certIssuingAuth);
        certDetails.appendChild(certDate);
        certDetails.appendChild(certId);
        certDetails.appendChild(certCat);
        
        certElement.appendChild(certThumbnail);
        certElement.appendChild(certDetails);
        container.appendChild(certElement);

        // Set the click event to open the PDF
        certTitle.addEventListener('click', () => {
            window.open(`../assets/certificates/${cert.file_name}`, '_blank');
        });

    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('./js/certificates.json')
        .then(response => response.json())
        .then(certificates => {
            displayCertificates(certificates);
        })
        .catch(error => console.error('Error loading certificates:', error));
});
