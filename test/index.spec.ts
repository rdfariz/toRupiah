import { toRupiah } from './../src'
import { expect } from 'chai'

describe('toRupiah', () => {
    it('Should return greetings', () => {
        expect(toRupiah(1)).equals('Rp. 1')
    })
})