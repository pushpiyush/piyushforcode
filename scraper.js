const targetQ = 75;
const allQuestions = [];
const abcd = ['A', 'B', 'C', 'D'];
let len, subject, qType, options, solution, answer;

async function scraper() {
	
	await new Promise(res => setTimeout(res, 2000));
	
    const qcNodes = document.querySelectorAll(".question-component");
    qcNodes.forEach((node) => {
        const question = node.querySelector('[class="question xl:text-lg px-4 py-2.5"]').innerHTML;
		const op = node.getElementsByClassName("options")[0].querySelectorAll(".grow.question");
		const ansButton = [...node.querySelectorAll('button')].find(el => el.innerText.includes('Check Answer'));
		ansButton.click();
		
        await new Promise(res => setTimeout(res, 1000));
		
		if (op.length==0) {
			qType = "numerical";
			options = null;
			const ansText = [...node.querySelectorAll('div')].find(el => el.innerText.includes('Correct answer is')).innerText;
			answer = ansText.match(/[\d.]+/)[0];
			solution = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Explanation'))?.nextElementSibling?.innerHTML:"N/A";
		} else {
			qType = "mcq";
			options = [];
			op.forEach((el) => options.push(el.innerText); );
			const ansText = [...node.getElementsByClassName("options")[0].querySelectorAll("div")].find(el => el.innerText.includes('Correct Answer'))?.innerText[0];
			answer = abcd.indexOf(ansText);
			solution = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Explanation'))?.nextElementSibling?.innerHTML:"N/A";
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
		
    });

	const nextButton = [...document.querySelectorAll('a')].find(el => el.innerText.includes('NEXT'));
    if (!nextButton) { console.log("No NEXT button found."); break; }
    nextButton.click();
}
