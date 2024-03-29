function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    this.strOut = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      this.strOut += String.fromCharCode(this.bufferView[i]);
    }
    return this.strOut;
  }
}

export { getBuffer, ArrayBufferConverter };
