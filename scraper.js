const targetQ = 75;
const allQuestions = [];
const abcd = ['A', 'B', 'C', 'D'];
let len, subject, qType, options, solution, answer, ansText;

async function startScraping() {
    while (allQuestions.length < targetQ) {
        console.log(`Scraping page... Current count: ${allQuestions.length}`);
        await scraper();
        
        const nextButton = [...document.querySelectorAll('a')].find(el => el.innerText.includes('NEXT'));
        if (!nextButton || allQuestions.length >= targetQ) break;
        
        nextButton.click();
        await new Promise(res => setTimeout(res, 3000)); // Wait for page load
    }
    console.log("Finished!", allQuestions);

	// Download as JSON
    const blob = new Blob([JSON.stringify(allQuestions, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jm2026080402.json';
    a.click();
    URL.revokeObjectURL(url);

    console.log(`Done! ${allQuestions.length} questions downloaded.`);

}


async function scraper() {
	
	//await new Promise(res => setTimeout(res, 500));
	
    const qcNodes = document.querySelectorAll(".question-component");
    for (const node of qcNodes) {
        const question = node.querySelector('[class="question xl:text-lg px-4 py-2.5"]').innerHTML;
		const ops = node.getElementsByClassName("options");
		const ansButton = [...node.querySelectorAll('button')].find(el => el.innerText.includes('Check Answer'));
		ansButton.click();
		
        await new Promise(res => setTimeout(res, 1000));
		
		if (ops.length === 0) {
			qType = "numerical";
			options = null;
			ansText = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Answer'))?.nextElementSibling?.innerText || "N/A";
			answer = ansText.match(/[\d.]+/)?.[0] || `ansText: ${ansText} and answer: ${answer}. anserror`;
			solution = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Explanation'))?.nextElementSibling?.innerHTML || "N/A";
		} else {
			const op = ops[0].querySelectorAll(".grow.question");
			qType = "mcq";
			options = [];
			op.forEach((el) => options.push(el.innerHTML));
			ansText = [...node.getElementsByClassName("options")[0].querySelectorAll("div")].find(el => el.innerText.includes('Correct Answer'))?.innerText[0];
			answer = abcd.indexOf(ansText);
			if (answer == -1) {answer = `ansText: ${ansText} and answer: ${answer}. anserror`};
			solution = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Explanation'))?.nextElementSibling?.innerHTML || "N/A";
		}

		len = allQuestions.length;

		if (len < 26) {
    		subject = "chemistry";
		} else if (len > 50) {
    		subject = "mathematics";
		} else {
    		subject = "physics";
		}
				
		allQuestions.push({
			"id": len + 1,
			"subject": subject,
			"type": qType,
			"question": question,
			"options": options,
			"answer": answer,
			"solution": solution
		});
		
    }
}
