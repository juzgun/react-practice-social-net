export const updateObjInArray = (items, userId, objPropName, newObjProps) => {
    return items.map(u => {
            if (u[objPropName] === userId) {
                return { ...u, ...newObjProps}
            }
            return u;
        })
}