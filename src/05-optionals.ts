export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number //this is optional parameter
) => {
    return { 
        id, 
        stock: stock ?? 0, 
        isNew: isNew ?? true
    }
}

// 0 === false
// '' === false
// null === false
// undefined === false
// NaN === false
// false === false

const p1 = createProduct(1, true, 12)
console.log(p1)

const p2 = createProduct(1, true)
console.log(p2)

const p3 = createProduct(1, false, 0)
console.log(p3)

