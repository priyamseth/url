var notFound = 0;
var thisUrl = location.href;
var code = thisUrl.split('/'); // 4th one is giving the answer or say the second last one
var codef = code[code.length-2]
console.log(codef)

// Start here the if else ladder
if (codef === 'pnotes'){ location.href = 'https://pnotes.web.app' }
else if (codef === 'website') { location.href = 'https://signior-x.github.io' }
else if (codef === 'song') { location.href = 'https://la-musica.herokuapp.com' }
else if (codef === 'pwho') { location.href = 'https://pwho.herokuapp.com' }
else if (codef === 'pol') { location.href='https://quiziit.ml/politicalquiz/' }
else if (codef === 'quiz' { location.href='https://quiziit.ml' }
else {
    var notFound = 1;
}
