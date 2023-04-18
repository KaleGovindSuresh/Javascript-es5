// throw-keyword  :-
// it is used to pass an error object in the call stack

function encrypt(plaintext) {
    if (!plaintext) throw new Error("plaintext cannot be empty");

    return plaintext + "sjdjhiushdhicznbweua";    
}

function pass() {
    encrypt();
}

pass();