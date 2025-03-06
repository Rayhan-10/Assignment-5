//date
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const today = new Date().toLocaleDateString('en-US', options);
document.getElementById("date").innerText = today;
const allBtn = document.querySelectorAll('.btn-card');
const completeTask = document.getElementById('Complete-task');
const body = document.getElementById('body');
const themeBtn = document.getElementById('theme-btn');
body.style.backgroundColor= '#d1d5db'
themeBtn.addEventListener('click', function(){
    const randomColor = getRandomHexColor();
    body.style.backgroundColor= randomColor;
})

let flag = 6;


document.getElementById('clear-history').addEventListener('click', function(){
    completeTask.innerHTML="";
    // for (const element of allBtn) {

    //     element.removeAttribute('disabled')
    // }
})

for (const element of allBtn) {
    element.addEventListener("click", function () {
        const title = element.parentElement.parentElement.querySelector('h2').innerText;
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        decrement('total-task')
        increment('Total-board');
        const format = ` <div class="bg-gray-300 p-2 rounded-sm text-sm text-black font-bold">
                    <p>You have Complete The Task ${title} at ${time}</p>
                </div>`;
        completeTask.innerHTML += format;
        element.setAttribute('disabled', true);
        flag--;
        alert('Board updated successfully');
        if(flag === 0)
            {
                alert('Congrats! you have completed all the current task.');
                return;
            }
    })
}

//go to blog page
document.getElementById('click-for-blog').addEventListener('click', function () {
    window.location.href = 'blogs.html'
});

