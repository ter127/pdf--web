window.onload = function () {
    var mb1 = document.getElementById('mb1')
    var mb2 = document.getElementById('mb2')
    var mb3 = document.getElementById('mb3')
    var mb4 = document.getElementById('mb4')
    mb1.addEventListener('mouseover', function () {
        mb1.style.color = "red";
        mb1.style.fontSize = "17px";
    });
    mb1.addEventListener('mouseout', function () {
        mb1.style.color = "white";
        mb1.style.fontSize = "15px";
    });
    mb2.addEventListener('mouseover', function () {
        mb2.style.color = "red";
        mb2.style.fontSize = "17px";
    });
    mb2.addEventListener('mouseout', function () {
        mb2.style.color = "white";
        mb2.style.fontSize = "15px";
    });
    mb3.addEventListener('mouseover', function () {
        mb3.style.color = "red";
        mb3.style.fontSize = "17px";
    });
    mb3.addEventListener('mouseout', function () {
        mb3.style.color = "white";
        mb3.style.fontSize = "15px";
    });
    mb4.addEventListener('mouseover', function () {
        mb4.style.color = "red";
        mb4.style.fontSize = "17px";
    });
    mb4.addEventListener('mouseout', function () {
        mb4.style.color = "white";
        mb4.style.fontSize = "15px";
    });


    var contain = document.querySelector('.contain');
    var trans = [
        {
            'classname': 'newsbtn1',
            'translate': '0'
        },
        {
            'classname': 'newsbtn2',
            'translate': '-100'
        },
        {
            'classname': 'newsbtn3',
            'translate': '-200'
        },
        {
            'classname': 'newsbtn4',
            'translate': '-300'
        },
        {
            'classname': 'newsbtn5',
            'translate': '-400'
        }
    ]
    var a = 0
    function slid() {
        if (a < 0) {
            a = a - 100
            contain.style.transform = 'translate(' + a + 'vw)'
        }
        if (a == -400) {
            contain.style.transform = 'translate(100vw)'
        }
    }
    setTimeout(slid, 5000)

    for (var index in trans) {
        var paragraph = document.createElement("div");
        document.getElementById("btnbox").appendChild(paragraph);
        paragraph.classList.add('newsbtn')
        paragraph.classList.add(trans[index]['classname'])
        paragraph.addEventListener('click', function () {
            contain.style.transform = 'translate(' + trans[index]['translate'] + 'vw)'
        })
    }

    // 스크롤 이동
    // function moonsang() {
    //     window.scrollTo(0, 100);
    // }
    // function moonjung() {
    //     window.scrollTo(0, 400);
    // }
    // function moongum() {
    //     window.scrollTo(0, 700);
    // }
    // function teamso() {
    //     window.scrollTo(0, 1000);
    // }

    document.querySelector(".moonsang").addEventListener('click', function () {
        window.scrollTo(0, 1000);
    })
}