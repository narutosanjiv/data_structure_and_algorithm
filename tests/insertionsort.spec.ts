import { InsertionSort } from '../SortingAlgorithm/Insertion'

test('Sort number array ', () => {
    let a = [4, 1, 24, 5, -8]
    expect(new InsertionSort(a).run()).toStrictEqual([-8, 1, 4, 5, 24])
})