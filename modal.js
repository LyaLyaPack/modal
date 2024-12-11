document.addEventListener('DOMContentLoaded', function() {
    fetch('config.json')
        .then(response => response.json())
        .then(config => {
            const modalConfig = config.modal;
            const modalContainer = document.getElementById('modalContainer');
            const openModalBtn = document.getElementById('openModalBtn');

            const modal = document.createElement('div');
            modal.style.display = 'none';
            modal.style.position = 'fixed';
            modal.style.zIndex = '1';
            modal.style.left = '0';
            modal.style.top = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.overflow = 'auto';
            modal.style.backgroundColor = modalConfig.overlayColor;
            modal.style.paddingTop = '60px';

            const modalContent = document.createElement('div');
            modalContent.style.backgroundColor = modalConfig.backgroundColor;
            modalContent.style.margin = '5% auto';
            modalContent.style.padding = '20px';
            if (modalConfig.borderEnabled) {
                modalContent.style.border = `${modalConfig.border.width}px ${modalConfig.border.style} ${modalConfig.border.color}`;
            } else {
                modalContent.style.border = 'none';
            }
            modalContent.style.width = `${modalConfig.width}px`;
            modalContent.style.height = `${modalConfig.height}px`;
            modalContent.style.display = 'flex';
            modalContent.style.flexDirection = 'column';
            modalContent.style.alignItems = 'center';
            modalContent.style.justifyContent = 'space-between';
            modalContent.style.borderRadius = `${modalConfig.borderRadius}px`;

            const modalHeader = document.createElement('div');
            modalHeader.style.width = '100%';
            modalHeader.style.textAlign = 'center';
            modalHeader.style.backgroundColor = modalConfig.backgroundColor;
            modalHeader.style.color = modalConfig.textColor;

            const modalTitle = document.createElement('h2');
            modalTitle.textContent = modalConfig.title;
            modalTitle.style.color = modalConfig.textColor;
            modalTitle.style.fontSize = `${modalConfig.titleFontSize}px`;

            const modalBody = document.createElement('div');
            modalBody.style.width = '100%';
            modalBody.style.padding = '20px';
            modalBody.style.color = modalConfig.textColor;
            modalBody.style.textAlign = 'center';
            modalBody.style.fontSize = `${modalConfig.contentFontSize}px`;
            modalBody.textContent = modalConfig.content;

            const closeButton = document.createElement('button');
            closeButton.textContent = modalConfig.closeButtonText;
            closeButton.style.color = modalConfig.closeButton.textColor;
            closeButton.style.backgroundColor = modalConfig.closeButton.backgroundColor;
            if (modalConfig.closeButton.borderEnabled) {
                closeButton.style.border = `${modalConfig.closeButton.border.width}px ${modalConfig.closeButton.border.style} ${modalConfig.closeButton.border.color}`;
            } else {
                closeButton.style.border = 'none';
            }
            closeButton.style.padding = `${modalConfig.closeButton.padding}px`;
            closeButton.style.fontSize = `${modalConfig.closeButton.fontSize}px`;
            closeButton.style.cursor = 'pointer';
            closeButton.style.marginTop = '20px';
            closeButton.style.borderRadius = `${modalConfig.closeButton.borderRadius}px`;

            closeButton.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            modalHeader.appendChild(modalTitle);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modalContent.appendChild(closeButton);
            modal.appendChild(modalContent);
            modalContainer.appendChild(modal);

            openModalBtn.addEventListener('click', function() {
                modal.style.display = 'block';
            });
        })
        .catch(error => console.error('Error loading config:', error));
});
