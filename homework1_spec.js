"use strict";

describe('First test', function () {

    it('should click play buttom', function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');

        let playClick = $$('.btn.btn--icon.btn--play').get(2);
        playClick.click();
        browser.sleep(2000);

        let thirdTrack = $$('.track-card__title').get(2);
        let trackName = thirdTrack.getText();
        expect(trackName.getText()).toBe('Few Nolder – THUMP Guest Mix');

        let openPlayer = $('.player-controls');
        let title = $('.player-controls__title')
        expect(openPlayer.isDisplayed()).toBe(true);
        expect(title.getText()).toBe('Few Nolder – THUMP Guest Mix');
      
    });

});