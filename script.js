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
    document.getElementById("logo").addEventListener('click', function () {
        window.scrollTo(0, 0);
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
}
