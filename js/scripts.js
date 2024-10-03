$(document).ready(function() {
  
    // Progress bar
    let containerA = document.getElementById("circleA")
    let circleA = new ProgressBar.Circle(containerA, {
        color: "#64DAF9",
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {     
            circle.path.setAttribute('stroke', state.color)          
            let value = Math.round(circle.value() * 60)
            circle.setText(value)
        }
    })
    let containerB = document.getElementById("circleB")
    let circleB = new ProgressBar.Circle(containerB, {
        color: "#64DAF9",
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {     
            circle.path.setAttribute('stroke', state.color)          
            let value = Math.round(circle.value() * 254)
            circle.setText(value)
        }
    })
    let containerC = document.getElementById("circleC")
    let circleC = new ProgressBar.Circle(containerC, {
        color: "#64DAF9",
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {     
            circle.path.setAttribute('stroke', state.color)          
            let value = Math.round(circle.value() * 32)
            circle.setText(value)
        }
    })
    let containerD = document.getElementById("circleD")
    let circleD = new ProgressBar.Circle(containerD, {
        color: "#64DAF9",
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) {     
            circle.path.setAttribute('stroke', state.color)          
            let value = Math.round(circle.value() * 5243)
            circle.setText(value)
        }
    })

    // Iniciando o loader qunato o usuario hega no elemento
    let dataAreaOffset = $('#data-area').offset()
    let stop = 0

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop()

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)
            stop++
        }
    })

    /// Parallax
    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'})
    }, 250)

    //filtro do portfólio

    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id')
        let boxes = $('.project-box')

        $('.main-btn').removeClass('active')
        $(this).addClass('active')

        switch(type) {
            case("dsg-btn"):
                eachBoxes('dsg',boxes)
                break
            case("dev-btn"):
                eachBoxes('dev',boxes)
                break
            case("seo-btn"):
                eachBoxes('seo',boxes)
                break
            case("all-btn"):
                eachBoxes('all',boxes)
                break
        }
     })
    function eachBoxes(type,boxes) {
        if(type == 'all') {
            $(boxes).fadeIn()
        } else {
            $(boxes).each(function () {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow')
                } else {
                    $(this).fadeIn()
                }
            })
        }
    }

    // Navegar no site
    let navBtn = $('.nav-item')

    let bannerSection = $('#mainSlider')
    let aboutSection = $('#about-area')
    let servicesSection = $('#services-area')
    let teamSection = $('#team-area')
    let portfolioSection = $('#portfolio-area')
    let contactSection = $('#contact-area')

    let scrollTo = ''

    $(navBtn).click(function() {
        let btnId = $(this).attr('id')
        
        switch(btnId) {
            case("about-menu"):
                scrollTo = aboutSection
                break
            case("services-menu"):
                scrollTo = servicesSection
                break
            case("team-menu"):
                scrollTo = teamSection
                break
            case("portfolio-menu"):
                scrollTo = portfolioSection
                break
            case("contact-menu"):
                scrollTo = contactSection
                break
            default:
                scrollTo = bannerSection
        }

        // Scroll Animation(ATENCAOcoloca dentro da function)
        $([document.documentElement, document.body]).animate({scrollTop: $(scrollTo).offset().top -70}, 1500)
    })
})