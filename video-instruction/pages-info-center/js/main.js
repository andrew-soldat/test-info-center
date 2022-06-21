class ProgressSteps {
    constructor(idSteps, idContents, idPrevStepBtn, idNextStepBtn) {
        this.currentStep = 1;
        this.steps = document.querySelector(idSteps);
        this.contents = document.querySelector(idContents);
        this.prevStepBtn = document.querySelector(idPrevStepBtn);
        this.nextStepBtn = document.querySelector(idNextStepBtn);
        this.totalSteps = this.steps.querySelectorAll("button").length;

        this.steps.querySelectorAll("button").forEach((step, index) => {
            step.addEventListener("click", () => {
                if (index + 1 > this.currentStep) {
                    this.currentStep = index + 1;
                } else if ((index + 1) === this.currentStep) {
                    this.currentStep = this.currentStep;
                } else {
                    this.currentStep = index + 1;
                }

                this.updateSteps()
                this.updateButtons()
                this.updateContent()
            });
        });

        this.nextStepBtn.addEventListener("click", () => {
            this.currentStep++;
            this.updateSteps();
            this.updateButtons()
            this.updateContent()
        });

        this.prevStepBtn.addEventListener("click", () => {
            this.currentStep--;
            this.updateSteps();
            this.updateButtons()
            this.updateContent()
        });
    }

    updateButtons() {
        if (this.currentStep === 1) {
            this.prevStepBtn.disabled = true;
            this.nextStepBtn.disabled = false;
        } else if (this.currentStep === this.totalSteps) {
            this.prevStepBtn.disabled = false;
            this.nextStepBtn.disabled = true;
        } else {
            this.prevStepBtn.disabled = false;
            this.nextStepBtn.disabled = false;
        }
    }

    updateSteps() {
        this.steps.querySelectorAll("button").forEach((step, index) => {
            if (index < this.currentStep) {
                step.classList.add("_active");
            } else {
                step.classList.remove("_active");
            }
        });
        const activesStep = this.steps.querySelectorAll("._active");
        this.steps.querySelector(".progress-steps__line").style.width = (activesStep.length - 1) / (this.totalSteps - 1) * 100 + '%';
    }

    updateContent() {
        this.contents
            .querySelectorAll(".item-content-progress-steps")
            .forEach((content) => content.classList.remove("_show"));

        this.contents
            .querySelector(`.item-content-progress-steps[data-step="${this.currentStep}"]`)
            .classList.add("_show");
    }
}