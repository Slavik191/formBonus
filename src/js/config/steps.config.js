let steps = [
    [
        {
            id: 'name',
            validate: 'onlyLetters',
            type: 'text'
        },
        {
            id: 'surname',
            validate: 'onlyLetters',
            type: 'text'
        },
        {
            id: 'patronymic',
            validate: 'onlyLetters',
            type: 'text'
        },
        {
            name: 'gender',
            validate: 'radio',
            type: 'radio'
        },
        {
            id: 'dateBirth',
            validate: 'date',
            type: 'text'
        },
        {
            id: 'licenseAgreement',
            validate: 'checkBox',
            type: 'checkBox'
        }
    ],
    [
        {
            id: 'number',
            validate: 'number',
            type: 'text'
        },
        {
            id: 'email',
            validate: 'email',
            type: 'text'
        },
        {
            id: 'password',
            validate: 'password',
            type: 'password'
        },
        {
            id: 'repeatPassword',
            validate: 'repeatPassword',
            type: 'password'
        }
    ],
    [
        {
            id: 'code',
            validate: 'code',
            type: 'text'
        }        
    ]
];

export default steps;