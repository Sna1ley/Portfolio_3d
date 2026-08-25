function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

document.addEventListener('click', function(event) {
    const trigger = event.target.closest('.open-modal');
    if (trigger) {
        const targetId = trigger.dataset.target;
        const dialog = document.getElementById(targetId);
        if (dialog) dialog.showModal();
    }
});

document.addEventListener('click', function(event) {
    const closeBtn = event.target.closest('.close-btn');
    if (closeBtn) {
        const dialog = closeBtn.closest('.modal');
        if (dialog) {
            dialog.close()
            delay(1000)
            const content = dialog.querySelector('.modal-content');
            if (content) content.scrollTop = 0;
        };
    }
});

const closeDialogOutside = ( () => {
    const dialogs = document.querySelectorAll('.modal');
    for (const dialog of dialogs) {
        dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close()
            delay(1000)
            const content = dialog.querySelector('.modal-content');
            if (content) content.scrollTop = 0;
        }
        });
    }
})();

// hide email from scrapers
const obfEmail = "lpmpnjfut/tfshfz/nbjmAhnbjm/dpn"; 

function deobfuscate(obfString) {
    return [...obfString].map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('');
}

const showEmail = document.getElementById('email')

showEmail.addEventListener('click', function(event) {
    showEmail.classList.remove("clickable")
    const email = deobfuscate(obfEmail);
    showEmail.textContent = "Email: " + email;
}, {once:true});