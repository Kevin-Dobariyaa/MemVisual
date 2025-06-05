const nextFit = (partitionType, memory, processCart) => {
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
    let idx = 0;
    processCart.map((process, id) => {
      let size = process.size;
      let allocate = false;
      let cnt = 0;
      while (cnt < noBlock) {
        let block = blocks[idx];
        if (block >= size && track[idx] !== 1 && allocate === false) {
          track[idx] = 1;
          m[idx].processId = id;
          allocate = true;
          IF = IF + block - size;
          break;
        }
        idx = (idx + 1) % noBlock;
        cnt++;
      }
      if (allocate === false) {
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
    let idx = 0;

    processCart.map((process, id) => {
      let size = process.size;
      let allocate = false;
      let cnt = 0;
      while (cnt < noBlock) {
        if (m[idx].remain >= size && allocate === false) {
          m[idx].processId.push(id);
          m[idx].remain -= size;
          allocate = true;
          break;
        }
        idx = (idx + 1) % noBlock;
        cnt++;
      }
      if (allocate === false) {
        EF += size;
        EFProcess.push(id);
      }
    });

    mem = m;
  }
  // Cal IF and External IF

  return { mem, IF, EF, EFProcess };
};

export default nextFit;
