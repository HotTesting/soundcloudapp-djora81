"use strict";

describe('Home page2', function () {
    it('test 1', function () {
        expect(browser.getTitle())
        .toBe('SoundCloud • Angular2 NgRx', 'Expecting title to be correct');
    
        // let title = element(by.css('.content-header__title'))
        let title = $('.content-header__title');

        expect(title.getText()).toBe('Featured Tracks',
        'Title on home page should be for Featured tracks');

        // let Link = element.all(by.css('.track-card__username').first();
        let linkToFirstSong = $$('a.track-card__username').first();
        let firstSongText = linkToFirstSong.getText()
        linkToFirstSong.click();

        let card_title = $('.user-card__title').getText();
        expect(firstSongText).toBe(card_title);
        browser.sleep(10000);

    });

    it('test 2', function () {
        expect(browser.getTitle())
        .toBe('SoundCloud • Angular2 NgRx', 'Expecting title to be correct');
    
        // let title = element(by.css('.content-header__title'))
        let title = $('.content-header__title');

        expect(title.getText()).toBe('Featured Tracks',
        'Title on home page should be for Featured tracks');

        // let Link = element.all(by.css('.track-card__username').first();
        let linkToFirstSong = $$('a.track-card__username').first();
        let firstSongText = linkToFirstSong.getText()
        linkToFirstSong.click();

        let card_title = $('.user-card__title').getText();
        expect(firstSongText).toBe(card_title);
        browser.sleep(10000);

    });

});
