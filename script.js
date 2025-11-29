const openFeatures = document.querySelector('.features-btn');
const openCompany = document.querySelector('.company-btn');
const hiddenFeatures = document.querySelector('.features-dropdown-menu-hidden');
const hiddenCompany = document.querySelector('.company-dropdown-menu-hidden');
const arrowUpFeatures = document.querySelector('.features-btn .icon-arrow-up');
const arrowDownFeatures = document.querySelector('.features-btn .icon-arrow-down');
const arrowUpCompany = document.querySelector('.company-btn .icon-arrow-up');
const arrowDownCompany = document.querySelector('.company-btn .icon-arrow-down');

openFeatures.addEventListener('click', () => {
    hiddenFeatures.classList.toggle('hidden')
    arrowDownFeatures.classList.toggle('hidden');
    arrowUpFeatures.classList.toggle('hidden');
    openFeatures.classList.toggle('active')
});

openCompany.addEventListener('click', () => {
    hiddenCompany.classList.toggle('hidden')
    arrowDownCompany.classList.toggle('hidden');
    arrowUpCompany.classList.toggle('hidden');
    openCompany.classList.toggle('active');
});

document.addEventListener('click', () => {
    const target = event.target;
    
    if (!openFeatures.contains(target) && !openCompany.contains(target)) {
        hiddenFeatures.classList.add('hidden');
        arrowDownFeatures.classList.remove('hidden');
        arrowUpFeatures.classList.add('hidden');
        openFeatures.classList.remove('active');
        hiddenCompany.classList.add('hidden');
        arrowDownCompany.classList.remove('hidden');
        arrowUpCompany.classList.add('hidden');
        openCompany.classList.remove('active');
    }
});