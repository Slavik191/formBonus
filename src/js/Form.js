import FormStep from './FormStep'; 
import steps from './config/steps.config';
import colors from './config/colors.config';

class Form {
    constructor(){
        this.steps =  steps.map(step => new FormStep(step));
        this.positionFormStep = 0;
        this.positionInfoStepsSlider = 0;
        this.step = 0;
        this.stepsPassed = 0;
        this.maxSteps = this.steps.length;

        this.setEventButton();
    }

    setEventButton(){
        next.addEventListener('click', () => {
            let validStep = this.validStep(this.steps[this.step].data);
            this.changeStepForm(this.step + 1, validStep);
            this.changeSwitchStepForm();
        });
        document.querySelectorAll('.switchStep').forEach(button => {
            button.addEventListener('click', (event) => {
                let step = +event.target.innerHTML - 1;
                if(step <= this.stepsPassed && step !== this.step){
                    this.changeStepForm(step, true);
                    this.changeSwitchStepForm();                    
                }
                    
            });
        })
    }

    validStep(step){
        let valid = true;
        for(let key in step){
            if(!step[key].valid){
                document.getElementById(key).parentNode.classList.add('error');
                valid = false;
            }
        }
        return valid;
    }

    changeSwitchStepForm(){
        document.querySelectorAll('.switchStep').forEach((button, index) => {
            let color = colors[this.step];
            form.style.borderColor = color;
            next.className = `nextButton${this.step}`;           
            if(this.step === index){
                button.style.border = `2px solid ${color}`;
                button.style.borderBottom = `2px solid #fff`;
            } 
            else{
                button.style.border = `1px solid ${color}`;
                button.style.borderBottom = '0';
            }                       
        });
    }

    changeStepForm(step, validStep) {
        if(this.maxSteps >  step && validStep){
            if(step === this.maxSteps - 1){
                lastStepTextNumber.innerHTML =  this.steps[1].data.number.value;
                nextText.innerHTML = 'Присоединиться'; 
            }
            else{
                nextText.innerHTML = 'Продолжить';
            }
            this.step = step;
            this.stepsPassed = step > this.stepsPassed ? step : this.stepsPassed;
            formSteps.style.left =`-${form.getBoundingClientRect().width * this.step}px`;
            infoStepsSlider.style.top = `-${infoSteps.getBoundingClientRect().height * this.step}px`; 
        }
        else if(this.maxSteps ===  step && validStep){
            alert("Умница");
        }           
    }
}

export default Form;