window.onload = function(){
    var contain = document.querySelector('.contain');
    var trans = [
        {'classname':'.newsbtn1',
        'translate':'0'},
        {'classname':'.newsbtn2',
        'translate':'-100'},
        {'classname':'.newsbtn3',
        'translate':'-200'},
        {'classname':'.newsbtn4',
        'translate':'-300'},
        {'classname':'.newsbtn5',
        'translate':'-400'}
    ]
    document.querySelector('.newsbtn1').addEventListener('click',function(){
        contain.style.transform = 'translate(0vw)'
        document.querySelector('.newsbtn1').style.backgroundColor = 'rgb(80, 80, 80)'
        document.querySelector('.newsbtn2').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn3').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn4').style.backgroundColor = 'rgb(216, 213, 213)' 
        document.querySelector('.newsbtn5').style.backgroundColor = 'rgb(216, 213, 213)'
    })
    document.querySelector('.newsbtn2').addEventListener('click',function(){
        contain.style.transform = 'translate(-100vw)'
        document.querySelector('.newsbtn1').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn2').style.backgroundColor = 'rgb(80, 80, 80)'
        document.querySelector('.newsbtn3').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn4').style.backgroundColor = 'rgb(216, 213, 213)' 
        document.querySelector('.newsbtn5').style.backgroundColor = 'rgb(216, 213, 213)'
    })
    document.querySelector('.newsbtn3').addEventListener('click',function(){
        contain.style.transform = 'translate(-200vw)'
        document.querySelector('.newsbtn1').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn2').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn3').style.backgroundColor = 'rgb(80, 80, 80)'
        document.querySelector('.newsbtn4').style.backgroundColor = 'rgb(216, 213, 213)' 
        document.querySelector('.newsbtn5').style.backgroundColor = 'rgb(216, 213, 213)'
    })
    document.querySelector('.newsbtn4').addEventListener('click',function(){
        contain.style.transform = 'translate(-300vw)'
        document.querySelector('.newsbtn1').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn2').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn3').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn4').style.backgroundColor = 'rgb(80, 80, 80)' 
        document.querySelector('.newsbtn5').style.backgroundColor = 'rgb(216, 213, 213)'
    })
    document.querySelector('.newsbtn5').addEventListener('click',function(){
        contain.style.transform = 'translate(-400vw)'
        document.querySelector('.newsbtn1').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn2').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn3').style.backgroundColor = 'rgb(216, 213, 213)'
        document.querySelector('.newsbtn4').style.backgroundColor = 'rgb(216, 213, 213)' 
        document.querySelector('.newsbtn5').style.backgroundColor = 'rgb(80, 80, 80)'
    })
        
}