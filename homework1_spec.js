"use strict";

describe('First test', function () {

    it('should click play button', function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');

        let playClick = $$('.btn.btn--icon.btn--play').get(2).click();
        browser.sleep(2000);
        
        let openPlayer = $('.player-controls__title');
        expect(openPlayer.isDisplayed()).toBe(true);

    });
    
    it('detailed list second artist', function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');

        let openList = $$('.track-card__username').get(1).click();
        let trackPlay = $$('.btn.btn--icon.btn--play').get(0).click();
        let openPlayer = $('.player-controls__title');
        expect(openPlayer.isDisplayed()).toBe(true);
        browser.sleep(2000);
    });

    it('should find the track text', function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');

        let openSearch = $$('.btn.btn--icon.btn--search-alt').click();
        let findTrack = $$('.search-form__input.ng-pristine.ng-invalid.ng-touched').sendKeys('paul van dyk');
        findTrack.submit();

        let firstText = $$('.track-card__title').getText();
        expect(firstText).toBe('paul van dyk');
        let title = $$('.content-header__title').getText();
        expect(title).toBe('paul van dyk');
        
    })
});