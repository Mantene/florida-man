const MAX_TIMES_TO_RUN = 5;
let counter = 1;

function makeReplacements() {
	if (counter >= MAX_TIMES_TO_RUN) return;

	const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, article, a, strong')
	for (let i=0; i<text.length; i++) {
        if (text[i].innerHTML.includes('Florida Governor DeSantis\’')) {
            text[i].innerHTML = text[i].innerHTML.replace('Florida Governor DeSantis\'', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('Florida Governor DeSantis\'')) {
            text[i].innerHTML = text[i].innerHTML.replace('Florida Governor DeSantis\'', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('Florida Governor DeSantis')) {
			text[i].innerHTML = text[i].innerHTML.replace('Florida Governor DeSantis', 'Florida Man')
		}


        if (text[i].innerHTML.includes('Florida Governor Ron DeSantis\’')) {
            text[i].innerHTML = text[i].innerHTML.replace('Florida Governor Ron DeSantis\'', 'Florida Man\'s')
		}

        if (text[i].innerHTML.includes('Florida Governor Ron DeSantis\'')) {
            text[i].innerHTML = text[i].innerHTML.replace('Florida Governor Ron DeSantis\'', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('Florida Governor Ron DeSantis')) {
            text[i].innerHTML = text[i].innerHTML.replace('Florida Governor Ron DeSantis', 'Florida Man')
        }

        if (text[i].innerHTML.includes('Governor DeSantis\'')) {
            text[i].innerHTML = text[i].innerHTML.replace('Governor DeSantis\'', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('Governor DeSantis\’')) {
            text[i].innerHTML = text[i].innerHTML.replace('Governor DeSantis\’', 'Florida Man\'s')
        }

		if (text[i].innerHTML.includes('Governor DeSantis')) {
			text[i].innerHTML = text[i].innerHTML.replace('Governor DeSantis', 'Florida Man')
		}

        if (text[i].innerHTML.includes('Governor Ron DeSantis\’')) {
            text[i].innerHTML = text[i].innerHTML.replace('Governor Ron DeSantis\’', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('Governor Ron DeSantis\'')) {
            text[i].innerHTML = text[i].innerHTML.replace('Governor Ron DeSantis\'', 'Florida Man\'s')
        }

		if (text[i].innerHTML.includes('Governor Ron DeSantis')) {
			text[i].innerHTML = text[i].innerHTML.replace('Governor Ron DeSantis', 'Florida Man')
		}

        if (text[i].innerHTML.includes('Ron DeSantis\’')) {
            text[i].innerHTML = text[i].innerHTML.replace('Ron DeSantis\’', 'Florida Man\'s')
		}

        if (text[i].innerHTML.includes('Ron DeSantis\'')) {
            text[i].innerHTML = text[i].innerHTML.replace('Ron DeSantis\'', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('Ron DeSantis')) {
            text[i].innerHTML = text[i].innerHTML.replace('Ron DeSantis', 'Florida Man')
        }

        if (text[i].innerHTML.includes('DeSantis\’')) {
			text[i].innerHTML = text[i].innerHTML.replaceAll('DeSantis\'', 'Florida Man\'s')
		}

        if (text[i].innerHTML.includes('DeSantis\'')) {
            text[i].innerHTML = text[i].innerHTML.replaceAll('DeSantis\’', 'Florida Man\'s')
        }

        if (text[i].innerHTML.includes('DeSantis')) {
            text[i].innerHTML = text[i].innerHTML.replaceAll('DeSantis', 'Florida Man')
        }
	}
	counter++;
}

(function() {
	setInterval(makeReplacements, 1000);
})();
