function hoverAndPageJQ($wrapper,timer) {
    $wrapper.hover(() => {
        clearInterval(timer)
    }, () => {
        timer = autoPlay()
    })
    $(document).on('visibilitychange', () => {
        console.log(document.hidden)
        if (document.hidden) {
            clearInterval(timer)
        } else {
            timer = autoPlay()
        }
    })
}

function hoverAndPageJS(parentNode, timer) {
    parentNode.addEventListener('mouseenter', () => {
        clearInterval(timer)
    })
    parentNode.addEventListener('mouseleave', () => {
        timer = autoPlay()
    })
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(timer)
        } else {
            timer = autoPlay()
        }
    })
}