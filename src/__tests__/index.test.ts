import { abc } from '../index';
describe('Index', () => {
  it('Test function', () => {
    const x = abc(10);
    expect(x).toBe(10);
  });
});
