const targetQ = 75;
let count = 1;

function scraper() {
    const qcNodes = node.querySelectorAll(".question-component");
    qcNodes.forEach((node) => {
        const ques = node.querySelector(.'question')?.innerHTML;
	const op = node.querySelectorAll(".grow .question");
	op.forEach((opt) => {
	});
    });
}
