
const bestFit = (partitionType, memory, processCart) =>{
    let mem = [];
    
    if(partitionType === 'static'){
        let {noBlock, blocks} = memory;
        let track = new Array(noBlock).fill(0);
        let m = [];
        let IF = 0;

        blocks.map((block)=>{
            m.push({
                size:block,
                processId:-1,
            })
        })
        processCart.map((process,id)=>{
            let size = process.size;
            let bestIdx = -1;
            let idx = 0;
            while(idx < noBlock){
                let block = blocks[idx];
                
                if(block >= size && track[idx] !== 1){
                    if(bestIdx === -1 || block < blocks[bestIdx]){
                        bestIdx = idx;
                    }
                }

                idx++;   
            }

            if(bestIdx !== -1){
                track[bestIdx] = 1;
                m[bestIdx].processId = id;  
                IF = IF + blocks[bestIdx] - size;
            }
        })
        
        mem = m;

    }else if(partitionType === 'dynamic'){
        let {noBlock,blocks} = memory;

        let m = [];
        let IF = 0;

        blocks.map((block)=>{
            m.push({
                size:block,
                remain:block,
                processId:[],
            })
        })

        processCart.map((process,id)=>{
            let size = process.size;
            let bestIdx = -1;
            let idx = 0;
            while(idx < noBlock){
                
                if(m[idx].remain >= size){
                    if(bestIdx === -1 || m[idx].remain < m[bestIdx].remain){
                        bestIdx = idx;
                    }
                }

                idx++;   
            }

            if(bestIdx !== -1){
                m[bestIdx].processId.push(id);
                m[bestIdx].remain -= size;  
            }
        })
        
        mem = m;
    }
    // Cal IF and External IF

    return mem;
}

export default bestFit