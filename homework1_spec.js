"use strict";

describe('First test', function () {

    it('should click play button', function () {
        
        $$('.btn.btn--icon.btn--play').get(2).click();
        browser.sleep(2000);
        
        let openPlayer = $('.player-controls__title');
        expect(openPlayer.isDisplayed()).toBe(true);

    });
    
    it('detailed list second artist', function () {
        
        $$('.track-card__username').get(1).click();
        $$('.btn.btn--icon.btn--play').get(0).click();
        let openPlayer = $('.player-controls__title');
        expect(openPlayer.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

    it('should find the track text', function () {
   
        $('.btn.btn--icon.btn--search-alt').click();
        //browser.sleep(2000);
        let search = 'Paul van Dyk';
        $('.search-form__input').sendKeys(search).submit();
        
        let firstText = $$('.track-card__title').first().getText();
        expect(firstText).toMatch(search);
        let title = $('.content-header__title').getText();
        expect(title).toMatch(search);
        
    })
});