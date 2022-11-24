function receivesAFunction(callback) {
    return callback()
}
function returnsANamedFunction(){
    return (function swim() {
        
    })
}
function returnsAnAnonymousFunction(){
    return (function () {})
}