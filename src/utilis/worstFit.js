const worstFit = (partitionType, memory, processCart) => {
  let mem = [];
  let IF = 0;
  let EF = 0;
  let EFProcess = [];

  if (partitionType === "static") {
    let { noBlock, blocks } = memory;
    let track = new Array(noBlock).fill(0);
    let m = [];

    blocks.map((block) => {
      m.push({
        size: block,
        processId: -1,
      });
    });
    processCart.map((process, id) => {
      let size = process.size;
      let worstIdx = -1;
      let idx = 0;
      while (idx < noBlock) {
        let block = blocks[idx];

        if (block >= size && track[idx] !== 1) {
          if (worstIdx === -1 || block > blocks[worstIdx]) {
            worstIdx = idx;
          }
        }

        idx++;
      }

      if (worstIdx !== -1) {
        track[worstIdx] = 1;
        m[worstIdx].processId = id;
        IF = IF + blocks[worstIdx] - size;
      } else {
        EF += size;
        EFProcess.push(id);
      }
    });

    mem = m;
  } else if (partitionType === "dynamic") {
    let { noBlock, blocks } = memory;

    let m = [];

    blocks.map((block) => {
      m.push({
        size: block,
        remain: block,
        processId: [],
      });
    });

    processCart.map((process, id) => {
      let size = process.size;
      let worstIdx = -1;
      let idx = 0;
      while (idx < noBlock) {
        if (m[idx].remain >= size) {
          if (worstIdx === -1 || m[idx].remain > m[worstIdx].remain) {
            worstIdx = idx;
          }
        }

        idx++;
      }

      if (worstIdx !== -1) {
        m[worstIdx].processId.push(id);
        m[worstIdx].remain -= size;
      } else {
        EF += size;
        EFProcess.push(id);
      }
    });

    mem = m;
  }
  // Cal IF and External IF

  return { mem, IF, EF, EFProcess };
};

export default worstFit;
