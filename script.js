var con = document.querySelector("#container");
var love = document.querySelector("i");

con.addEventListener("dblclick", function() {
    // Make the heart appear by scaling up
    love.style.transform = 'translate(-50%, -50%) scale(1.5)';
    love.style.opacity = 0.8;

    // Fade out after 1 second
    setTimeout(function() {
        love.style.opacity = 0;
        love.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
});

