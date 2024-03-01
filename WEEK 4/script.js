function print5() {
    
    alert('1');
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
}

print5();
print5();

function myLoadFunction() {

    var element = document.getElementById('headingId')
    element.firstChild.nodeValue = 'New Heading';

    var element2 = document.getElementById('paraId');
    element2.firstChild.nodeValue = 'New Paragraph';
}

document.addEventListener('click', myLoadFunction)
