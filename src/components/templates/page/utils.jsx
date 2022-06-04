
const typeMap = [
    {cType:"project",pType:"app"},
    {cType:"task",pType:"project"},
    {cType:"record",pType:"task"}
  ];

  export const getParentType = (cType) => {
    return typeMap.find(x => x.cType === cType).pType;
  }

  export const getParentSet = (components,cType, strict) =>{
    const parentIds = components
            .map((x) => x.parentId);

    if (parentIds.length === 0 && cType === "project") {
        parentIds.push("app")
    }
    if (!strict) {
        parentIds.push("All")
    }

    return [... new Set(parentIds)];
  }
  
