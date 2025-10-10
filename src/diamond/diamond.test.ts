class Diamond {
    of(letter: string) {
        if(letter ==='B'){
            return [
                ' A ', 
                'B B', 
                ' A '
            ]
        }
        return [letter]
    };
    lineof(letter: string){
        if(letter === 'B') return `${letter}${this.pad(1)}${letter}`
        else if (letter === 'C') return `${letter}${this.pad(3)}${letter}`;
        return 'A';
    };
    private pad(number: number){
        return ' '.repeat(number);
    }
};

test('diamond of A', () => {
    expect(new Diamond().of('A')).toEqual(['A']);
});

test('line of A', () => {
    expect(new Diamond().lineof('A')).toBe('A');
});

test('line of B', () => {
    expect(new Diamond().lineof('B')).toBe('B B');
});

test('line of C', () => {
    expect(new Diamond().lineof('C')).toBe('C   C');
});

test('diamong of B', () => {
    expect(new Diamond().of('B')).toEqual([
        ' A ', 
        'B B', 
        ' A '
    ]);
});
/* 
    
      A
     B B
    C   C
     B B
      A
*/