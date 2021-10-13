$(function (){
    let curr = 0;
    const arrlen = 3.75;
    const container = $(".bodyLowContainer");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -26.666%))`,
        });
    }

    $('#prevBtn').on("click", () => {
        const newCurr = curr - 1.25;
        curr = newCurr < 0 ? arrlen - 1.25 : newCurr;
        updateUI();
    } );

    $('#nextBtn').on("click", () => {
        curr = (curr + 1.25) % arrlen;
        updateUI();
    } );
});