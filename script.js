const extendHex = (shortHex) => {
  // write your code here
	shortHex = shortHex.replace('#', '');
	let l1=shortHex[0];
	let l2=shortHex[1];
	let l3=shortHex[2];
	let fullhex="#"+l1+l1+l2+l2+l3+l3;
	return fullhex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
