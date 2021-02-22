console.log('hey there');

const detailsList = document.querySelectorAll('details');

detailsList.forEach((details) => {
    const summaryElement = details.querySelector('summary');
    summaryElement.addEventListener('click', expand)
})

function expand () {
    detailsList.forEach((details) => {
        console.log(details);
        details.removeAttribute('open');
    })
}