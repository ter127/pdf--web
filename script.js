window.onload = function () {
    var mb1 = document.getElementById('mb1')
    var mb2 = document.getElementById('mb2')
    var mb3 = document.getElementById('mb3')
    var mb4 = document.getElementById('mb4')
    var a = 0

    mb1.addEventListener('mouseover', function () {
        mb1.style.color = "rgb(137, 137, 209)";
        mb1.style.fontSize = "17px";
        mb1.addEventListener('mouseout', function () {
            mb1.style.color = "white";
            mb1.style.fontSize = "15px";
        });
        mb2.addEventListener('mouseover', function () {
            mb2.style.color = "rgb(137, 137, 209)";
            mb2.style.fontSize = "17px";
        });
        mb2.addEventListener('mouseout', function () {
            mb2.style.color = "white";
            mb2.style.fontSize = "15px";
        });
        mb3.addEventListener('mouseover', function () {
            mb3.style.color = "rgb(137, 137, 209)";
            mb3.style.fontSize = "17px";
        });
        mb3.addEventListener('mouseout', function () {
            mb3.style.color = "white";
            mb3.style.fontSize = "15px";
        });
        mb4.addEventListener('mouseover', function () {
            mb4.style.color = "rgb(137, 137, 209)";
            mb4.style.fontSize = "17px";
        });
        mb4.addEventListener('mouseout', function () {
            mb4.style.color = "white";
            mb4.style.fontSize = "15px";
        });
    });
    var contain = document.querySelector('.contain');
    document.querySelector('.newsbtn1').addEventListener('click', function () {
        contain.style.transform = 'translate(0)'
    })
    document.querySelector('.newsbtn2').addEventListener('click', function () {
        contain.style.transform = 'translate(-1300px)'
    })
    document.querySelector('.newsbtn3').addEventListener('click', function () {
        contain.style.transform = 'translate(-2600px)'
    })
    document.querySelector('.newsbtn4').addEventListener('click', function () {
        contain.style.transform = 'translate(-3900px)'
    })
    document.querySelector('.newsbtn5').addEventListener('click', function () {
        contain.style.transform = 'translate(-5200px)'
    })
    document.getElementById("mb1").addEventListener('click', function () {
        window.scrollTo(0, 870);
    })
    document.getElementById("mb2").addEventListener('click', function () {
        window.scrollTo(0, 2660);
    })
    document.getElementById("mb3").addEventListener('click', function () {
        window.scrollTo(0, 4600);
    })
    document.getElementById("mb4").addEventListener('click', function () {
        window.scrollTo(0, 7600);
    })
    setInterval(function () {
        if (-5200 < a) {
            a = a - 1300
            contain.style.transform = 'translate(' + a + 'px)'
        }
    }, 5000)
    function ani(id) {
        document.querySelector(id).classList.add('text-animation')
    }
    function graph(id,ani){
        document.getElementById(id).style.animation = ani
        document.getElementById(id).style.animationFillMode = 'forwards'
    }
    window.addEventListener('scroll', function () {
        var nowScroll = document.documentElement.scrollTop;
        document.querySelector('.testbtn').innerHTML = nowScroll;
        if (nowScroll > 3000) { document.querySelector('#test').classList.add('trt') }
        if (nowScroll > 190) {ani('#inter1')}
        if (nowScroll > 470) {ani('#inter2')}
        if (nowScroll > 750) {ani('#inter3')}
        if (nowScroll > 1650) {ani('#f1')}
        if (nowScroll > 2020) {ani('#f2')}
        if (nowScroll > 2580) {ani('#r1')}
        if (nowScroll > 3825) {ani('#w1')}
        if (nowScroll > 4300) {ani('#w2')}
        if (nowScroll > 4760) {ani('#w3')}
        if (nowScroll > 5240) {ani('#w4')}
        if (nowScroll > 5700) {ani('#w5')}
        if (nowScroll > 5800) {ani('#w6')}
        if (nowScroll > 6250) {ani('#w7')}
        if (nowScroll > 6360) {ani('#w8')}
        if (nowScroll > 6870) {ani('#w9')}
        if (nowScroll > 6950) {ani('#w10')}
        if (nowScroll > 1000) {ani('#graph')}
        if (nowScroll > 1120) {
            graph('deafGraphBackground','deafch 2s 1')
            graph('undeafGraphBackground','undeafch 0.5s 1')
            graph('fail','failch 0.5s 1')
            graph('donotknow','knowch 2s 1')
            graph('gitar','gitarch 0.5s')
        }
    })
}
