const typeMap = [
    {cType:"project",pType:"app"},
    {cType:"task",pType:"project"},
    {cType:"record",pType:"task"}
  ];

  export const getParentSet = (components,cType, strict) =>{
    const parentIds = components.items
            .map((x) => x.parentId);

    if (parentIds.length === 0 && cType === "project") {
        parentIds.push("app")
    }
    if (!strict) {
        parentIds.push("All")
    }

    return [... new Set(parentIds)];
    


  }
  
