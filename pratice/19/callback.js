function express_callback(name, age, work){
    console.log('my name is', name);
    console.log ('I am ', age ,' years old');
    work();

}

function designation(){
    console.log('I am web Developer');
}

express_callback('Rony', 28, designation);

express_callback('Rifa', 20, designation);