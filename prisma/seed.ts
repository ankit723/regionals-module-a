import prisma from "@/lib/prisma";

function main(){

    
    [
        { "id": 1, "name": "Red notebook", "category": "stationery" },
        { "id": 2, "name": "Blue marker", "category": "stationery" },
        { "id": 3, "name": "USB charger", "category": "electronics" },
        { "id": 4, "name": "Office chair", "category": "furniture" },
        { "id": 5, "name": "Laptop stand", "category": "electronics" },
        { "id": 6, "name": "Green folder", "category": "stationery" }
    ].map(i=>{
        prisma.product.create({
            data:{
                id : i.id.toString(),
                name :i.name,
                category: i.category
            }
        })
    })
}


main();