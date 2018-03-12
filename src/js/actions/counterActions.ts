export function change(color:Array<string>) {    
    return {
            type:"CHANGE",
            payload:color
    }
}

export function deleteTest(test:string) {
    return {
            type:"DELETE",
            payload:test
    }
}