
export const getByCType = async (cType) => {
    const items =  JSON.parse(localStorage.getItem("components")) || [];

    const filtered = items.filter((c) => c._deleted == null)
        .filter((c) => c.type === cType)
        .sort((a, b) => {
            if (a.parentId > b.parentId) {
                return 1;
            }
        
            if (a.parentId < b.parentId) {
                return -1;
            }
        
            return 0;
        });
    return filtered;
}

export const getParentSet = async (cType, strict = false) => {
    const typeMap = [
        {cType:"project",pType:"app"},
        {cType:"task",pType:"project"},
        {cType:"record",pType:"task"}
    ];

    const pType = typeMap.find(x => x.cType === cType)?.pType || "";
    const allComponents = await getByCType(pType);
    const parentIds =   allComponents.map((x) => x.name);

    const parentIdSet = [... new Set(parentIds)];

    if (parentIdSet.length === 0 && cType === "project") {
        parentIdSet.push("app")
    }

    if (!strict) {
        parentIdSet.push("All")
    }

    return parentIdSet;
}


export const create = async (component) => {
    const input = {
        id: Math.floor(Math.random() * 100),
        parentId: component.parentId || "",
        type: component.type || "",
        name: component.name || "",
        startTime: component.startTime || new Date().getTime(),
        endTime: component.endTime || null,
        description: component.description || "",
    }

     const items =  JSON.parse(localStorage.getItem("components")) || [];
    items.push(input);
    localStorage.setItem("components",JSON.stringify(input))
    return input;
}


export const update = async (c) => {
    const items =  JSON.parse(localStorage.getItem("components")) || [];
    const input = items.filter(x =>  !(c.name === x.name && c.parentId === x.parentId))
    input.push(c)
    localStorage.setItem("components",JSON.stringify(input))

    return c;
}


export const deleteOne = async (c) => {
    const items =  JSON.parse(localStorage.getItem("components")) || [];
    const input = items.filter(x =>  !(c.name === x.name && c.parentId === x.parentId))
    localStorage.setItem("components",JSON.stringify(input))

    return c;

}

export const cancel = async (component) => {

}



