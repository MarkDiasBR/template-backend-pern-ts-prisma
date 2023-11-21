import prisma from "../src/database";

async function main() {
    await prisma.message.createMany({
        skipDuplicates: true,
        data: [
            {
                text: "Message!" 
            }
        ]
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });