import {add} from '../src/add';

it('Simple test', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(0, 0)).toBe(1);
    expect(add(1, 1)).toBe(1);
});
