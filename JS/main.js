//date
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const today = new Date().toLocaleDateString('en-US', options);
document.getElementById("date").innerText = today;
//go to blog page
document.getElementById('click-for-blog').addEventListener('click', function() {
    window.location.href = 'blogs.html'
});
//back to desk
document.getElementById('btn-back-to-desk').addEventListener('click', function() {
    window.location.href = 'index.html'
});
//card 1
document.getElementById('ShopEase').addEventListener('click', function(){
    alert();
})