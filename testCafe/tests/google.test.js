import { Selector } from 'testcafe'

fixture `TestCafé automatizando testes`.page `https://www.google.com.br`

test('Busca o Training Center no Google', async t => {
  await t
    .typeText('.gLFyf', 'training center')
    .takeScreenshot()

    // .click('#hplogo')

    // .click('input[name=btnK]')
    // .takeScreenshot()

    // .expect( Selector('h3.r').nth(0).innerText ).eql('Training Center · GitHub')
    // .takeScreenshot()
})