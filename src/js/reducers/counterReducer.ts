const counterReducer = (state = {
    color:["00", "00", "00"]
  }, action:{type:string, payload:Array<string>}) => {
  
    switch (action.type) {
      case "CHANGE":      
                    
        state = {
          color:[...action.payload],
        }   
                  
      break;
    }    
    return state;
  }

  export default counterReducer