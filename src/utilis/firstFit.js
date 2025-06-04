
const firstFit = (partitionType, memory, processCart) =>{
    let mem = [];
    
    if(partitionType === 'static'){
        let {noBlock, blocks} = memory;
        let track = new Array(noBlock).fill(0);
        let m = [];

        blocks.map((block)=>{
            m.push({
                size:block,
                processId:-1,
            })
        })
        processCart.map((process,id)=>{
            let size = process.size;
            let allocate = false;
            blocks.map((block,idd)=>{
                if(block >= size && track[idd] !== 1 && allocate === false){
                    track[idd] = 1;
                    m[idd].processId = id;  
                    allocate = true; 
                }
            })
        })
        
        mem = m;
    }else if(partitionType === 'dynamic'){
        console.log("::::::::::)))))))))))))))))))))")
    }
    // Cal IF and External IF
    return mem;
}

export default firstFit