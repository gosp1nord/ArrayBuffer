import { getBuffer, ArrayBufferConverter } from '../index';

test('create converter', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
