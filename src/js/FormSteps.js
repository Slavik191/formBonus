class FormSteps {
    constructor(data){
        this.data = this.generationData(data);
    } 

    generationData(receivedData){
        let data = {};
        receivedData.forEach(input => {
            if(input.type === 'radio'){
                document.querySelectorAll('input[name="gender"]').forEach((radio,index) => {
                    radio.addEventListener('click', this.getValidateFields(input.validate).bind(this));
                    if(index === 0){
                        data[input.name] = {
                            value: 'мужчина',
                            valid: true
                        };
                    }
                });
            } 
            else if(input.type === 'checkBox'){
                document.getElementById(input.id).addEventListener('click', this.getValidateFields(input.validate).bind(this))            
                data[input.id] = {
                    value: '',
                    valid: false
                };
            }  
            else{
                document.getElementById(input.id).addEventListener('blur', this.getValidateFields(input.validate).bind(this))            
                data[input.id] = {
                    value: '',
                    valid: false
                };
            }         
        });
        return data;
    }

    getValidateFields(name){
        switch(name){
            case 'onlyLetters':
                return this.onlyLetters;
            case 'radio':
                return this.radio;
            case 'date':
                return this.date;
            case 'number':
                return this.number;
            case 'email':
                return this.email;
            case 'password':
                return this.password;            
            case 'repeatPassword':
                return this.repeatPassword
            case 'code':
                return this.code
            case 'checkBox':
                return this.checkBox

        }
    }

    setNewValue(name, value, valid = false){
        this.data[name].value = value;
        this.data[name].valid = valid;  
    }

    onlyLetters(event){
        let reg = /^[a-zа-яё]+$/i;
        let value = event.target.value;
        if(reg.test(value)){           
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        }
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            reg.test(value)
        )                
    }

    code(event){
        let reg = /^\d{1,4}$/;
        let value = event.target.value;
        if(reg.test(value)){           
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        }
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            reg.test(value)
        )                
    }

    radio(event){
        this.setNewValue(
            event.target.getAttribute('name'),
            event.target.value,
            true
        )
    }

    checkBox(event){
        if(event.target.checked)       
            event.target.parentNode.classList.remove('error');            
        this.setNewValue(
            event.target.getAttribute('id'),
            event.target.value,
            event.target.checked
        )
    }

    date(event){
        let reg = /([1-9]|[12][0-9]|3[01])[- /.]([1-9]|1[012])[- /.](19|20)\d\d/;
        let value = event.target.value;
        if(reg.test(value)){
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        }  
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            reg.test(value)
        );            
    }

    number(event){
        let reg = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        let value = event.target.value;
        if(reg.test(value)){
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        }  
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            reg.test(value)
        );             
    }

    email(event){
        let reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        let value = event.target.value;
        if(reg.test(value)){
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        }  
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            reg.test(value)
        );             
    }

    password(event){
        let reg = /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        let value = event.target.value;
        if(reg.test(value)){
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        }  
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            reg.test(value)
        );             
    }

    repeatPassword(event){
        let value = event.target.value;
        if(this.data.password.value === value){
            event.target.parentNode.classList.remove('error');            
        }
        else{
            event.target.parentNode.classList.add('error');
        } 
        this.setNewValue(
            event.target.getAttribute('id'),
            value,
            true
        )                
    }

}

export default FormSteps;