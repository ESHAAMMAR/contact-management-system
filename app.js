// Import Bootstrap
import './bootstrap';

// Custom JavaScript for Contact Management System
document.addEventListener('DOMContentLoaded', () => {
    const viewContactsBtn = document.getElementById('viewContacts');
    const addContactBtn = document.getElementById('addContact');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    if (viewContactsBtn && addContactBtn) {
        viewContactsBtn.addEventListener('click', () => {
            welcomeMessage.classList.add('hidden');
            contactList.classList.remove('hidden');
        });

        addContactBtn.addEventListener('click', () => {
            welcomeMessage.classList.add('hidden');
            contactForm.classList.remove('hidden');
        });
    }
});

