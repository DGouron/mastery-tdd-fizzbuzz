class Diamond {
    of(letter: string) {
        const result = [this.lineOf(letter)];
    
        for (
          let pads = 1, code = letter.charCodeAt(0) - 1;
          code >= 'A'.charCodeAt(0);
          pads++, code--
        ) {
          result.unshift(this.pad(pads) + this.lineOf(String.fromCharCode(code)) + this.pad(pads));
          result.push(this.pad(pads) + this.lineOf(String.fromCharCode(code)) + this.pad(pads))
        }
    
        return result;
      }
    lineOf(letter: string){
        if(letter === 'A') return 'A';
        const delta = this.adjustDelta(letter.charCodeAt(0) - 'A'.charCodeAt(0) - 1);
        return `${letter}${this.pad(delta)}${letter}`;
    };
    private pad(number: number){
        return ' '.repeat(number);
    }
    private adjustDelta(delta: number){
        return delta * 2 + 1;
    }
};

test('diamond of A', () => {
    expect(new Diamond().of('A')).toEqual(['A']);
});

test('line of A', () => {
    expect(new Diamond().lineOf('A')).toBe('A');
});

test('line of B', () => {
    expect(new Diamond().lineOf('B')).toBe('B B');
});

test('line of C', () => {
    expect(new Diamond().lineOf('C')).toBe('C   C');
});

test('line of D', () => {
        expect(new Diamond().lineOf('D')).toBe('D     D');
});

test('diamond of B', () => {
    expect(new Diamond().of('B')).toEqual([
        ' A ', 
        'B B', 
        ' A '
    ]);
});

test('diamond of C', () => {
    expect(new Diamond().of('C')).toEqual([
        '  A  ', 
        ' B B ', 
        'C   C', 
        ' B B ', 
        '  A  '
    ]);
});
/* 
    
      A
     B B
    C   C
     B B
      A
*/