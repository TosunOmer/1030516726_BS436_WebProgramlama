const React = require('react');
const {mount} = require('enzyme');
const {Game} = require('../src/client/game');

test('cardCount', () => {
    const driver = mount(<Game/>);
    const cards = driver.find('.kart')
    expect(cards.length).toBe(3);
})

test('clickable', () => {
    const driver = mount(<Game/>);
    for (let i = 0 ; i < 3 ; i++){
        let card = driver.find('.kart').at(i);
        card.simulate('click');
        card = driver.find('.kart').at(i);
        let source = card.find("img").prop("src")
        expect(source === 'images/boncuk.jpg' || source === 'images/kangal.jpg').toBeDefined();
    }
})
