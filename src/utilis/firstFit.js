const firstFit = (partitionType, memory, processCart) => {
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
      let allocate = false;
      blocks.map((block, idd) => {
        if (block >= size && track[idd] !== 1 && allocate === false) {
          track[idd] = 1;
          m[idd].processId = id;
          allocate = true;
          IF = IF + block - size;
        }
      });
      if (allocate === false) {
        EF += size;
        EFProcess.push(id);
      }
    });

    mem = m;
  } else if (partitionType === "dynamic") {
    let { blocks } = memory;
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
      let allocate = false;
      m.map((block, idd) => {
        if (block.remain >= size && allocate === false) {
          m[idd].processId.push(id);
          block.remain -= size;
          allocate = true;
        }
      });

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

export default firstFit;
