$(function (){
    let curr = 0;
    const arrlen = 3.75;
    const container = $(".container1");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -26.666%))`,
        });
    }

    $('#prevBtn1').on("click", () => {
        const newCurr = curr - 1.25;
        curr = newCurr < 0 ? arrlen - 1.25 : newCurr;
        updateUI();
    } );

    $('#nextBtn1').on("click", () => {
        curr = (curr + 1.25) % arrlen;
        updateUI();
    } );
});

$(function (){
    let curr = 0;
    const arrlen = 3.75;
    const container = $(".container2");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -26.666%))`,
        });
    }

    $('#prevBtn2').on("click", () => {
        const newCurr = curr - 1.25;
        curr = newCurr < 0 ? arrlen - 1.25 : newCurr;
        updateUI();
    } );

    $('#nextBtn2').on("click", () => {
        curr = (curr + 1.25) % arrlen;
        updateUI();
    } );
});

$(function (){
    let curr = 0;
    const arrlen = 3.75;
    const container = $(".container3");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -26.666%))`,
        });
    }

    $('#prevBtn3').on("click", () => {
        const newCurr = curr - 1.25;
        curr = newCurr < 0 ? arrlen - 1.25 : newCurr;
        updateUI();
    } );

    $('#nextBtn3').on("click", () => {
        curr = (curr + 1.25) % arrlen;
        updateUI();
    } );
});

$(function (){
    let curr = 0;
    const arrlen = 3.75;
    const container = $(".container4");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -26.666%))`,
        });
    }

    $('#prevBtn4').on("click", () => {
        const newCurr = curr - 1.25;
        curr = newCurr < 0 ? arrlen - 1.25 : newCurr;
        updateUI();
    } );

    $('#nextBtn4').on("click", () => {
        curr = (curr + 1.25) % arrlen;
        updateUI();
    } );
});

$(function (){
    let curr = 0;
    const arrlen = 3.75;
    const container = $(".container5");

    function updateUI(){
        container.css({
            transform: `translateX(calc(${curr} * -26.666%))`,
        });
    }

    $('#prevBtn5').on("click", () => {
        const newCurr = curr - 1.25;
        curr = newCurr < 0 ? arrlen - 1.25 : newCurr;
        updateUI();
    } );

    $('#nextBtn5').on("click", () => {
        curr = (curr + 1.25) % arrlen;
        updateUI();
    } );
});