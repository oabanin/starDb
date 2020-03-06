const compose = (...functions) => (comp) => {
    return functions.reduceRight((prevFunc, currentFunc)=>{return currentFunc(prevFunc)}, comp); 
}

export default compose;