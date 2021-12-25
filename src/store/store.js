export const store = {
    state:{
        numbers:[1,2,3,4,5],
        clock:0
    },
    addNumber(newNumber) {
        this.state.numbers.push(newNumber)
    },
    autoClock(){
       this.state.clock += 1
        
    }

}