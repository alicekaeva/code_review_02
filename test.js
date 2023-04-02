describe('Positive cases', ()=> {
    it('Test #1', ()=> {
        assert.equal(sum('apple123orange50.12tomato500.99apple54.473cat0.67iphone13.435'), 68582.78)
    })
    it('Test #2', ()=> {
        assert.equal(sum('apple123orange50.12tomato500.99apple54.473cat0.67iphone13.435car344.545.433'), 413128.213)
    })
    it('Test #3', ()=> {
        assert.equal(sum('apple123.66orange50.124tomato0.99'), 50248.65)
    })
})
describe('Negative cases', ()=> {
    it('Test #1', ()=> {
        assert.equal(sum('apple123orange50.12tomato5990.99apple54.473cat0.67iphone13.435'), 'Ошибка в чеке. Товар с ценой 5990.99')
    })
    it('Test #2', ()=> {
        assert.equal(sum('toothpaste1.5coffee2.2apple0.3'), 'Ошибка в чеке. Товар с ценой 1.5')
    })
    it('Test #3', ()=> {
        assert.equal(sum('apple.123orange50.12tomato500.99apple54.473cat0.67iphone13.435'), 'Ошибка в чеке. Товар с ценой .123')
    })
    it('Test #4', ()=> {
        assert.equal(sum('apple3.56.3.2456orange50.12tomato500.99apple54.473cat0.67iphone13.435'), 'Ошибка в чеке. Товар с ценой 3.56.3.2456')
    })
})