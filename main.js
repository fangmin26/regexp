const str = `
010-1234-1234
themain@mail.com
https://www.naver.com
The buick brown fox jumps over the lazy dog
aaabbbccddd
http://localhost:1234
`;

//1개이상 모든 문자,숫자중 @ 앞쪽일치
/*console.log(str.match(/.{1,}(?=@)/g) */
//1개이상 모든 문자,숫자중 @ 뒤쪽일치
console.log(str.match(/(?<=@).{1,}/g));
