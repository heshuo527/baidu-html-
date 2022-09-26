var inp = document.querySelector('.span-input')
//输入框滑动效果
inp.addEventListener('mouseenter', function() {
    console.log('输入框被点击了');
    //获取到需要添加class的元素
    var c = document.querySelector('.span-input')
    //用toggleClass来开关这个元素的class
    toggleClass(c, 'gua-height')
})

inp.addEventListener('mouseleave', () => {
    console.log('鼠标离开了');
    var c = document.querySelector('.span-input')
    //用toggleClass来开关这个元素的class
    toggleClass(c, 'gua-height')
})

//开关一个元素的class
var toggleClass = function(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

