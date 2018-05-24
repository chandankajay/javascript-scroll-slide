this.scrollNext = slide => {
    this.slideOnePosition = $('.slide-section-one').height() + ($('.slide-section-one').height() / 4);    
    if (slide === 'slide1') {
        window.scroll({
            top: this.slideOnePosition,
            left: 0,
            behavior: 'smooth'
        });
    }
    if (slide === 'slide2') {
        this.slideTwoPosition = $('.slide-section-one').height() + ($('.slide-section-one').height() / 4) 
        + $('.slide-section-two').height() + ($('.slide-section-two').height() / 4);
        window.scroll({
            top: this.slideTwoPosition,
            left: 0,
            behavior: 'smooth'
        });
    }
    if (slide === 'slide3') {
        this.slideThreePosition = $('.slide-section-two').height() + ($('.slide-section-three').height() / 2);        
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}