export const Catalog = (food) => {
    const container = document.querySelector(".container")
    let html = `
        <table>
            <thead>
                <tr>
                    <th scope="col">Food</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Icon</th>
                </tr>
            </thead>
            <tbody class="Table">
            </tbody>
        </table>
    `

    container.innerHTML = html

    let tableData = []

    for (let item of food) {
        if (tableData.length !== 0) {
            let temp = tableData.findIndex((obj) => {
                return obj.type === item.type
            })
            if (tableData[temp]) {
            tableData[temp].amount += 1
            } else {
                tableData.push({type: item.type, amount: 1, icon: item.icon})
            }

        } else {
            tableData.push({type: item.type, amount: 1, icon: item.icon})
        }
    }

    //ChatGPT version
//     let tableData = [];

// for (let item of food) {
//     let existing = tableData.find(obj => obj.type === item.type);
//     if (existing) {
//         existing.amount += 1;
//     } else {
//         tableData.push({ type: item.type, amount: 1 });
//     }
// }



    let tr = ""

    tableData.map((item) => {
        tr += `
            <tr>
                <td>${item.type}</td>
                <td>${item.amount}</td>
                <td>${item.icon}</td>
            </tr>
        `
    })
    container.innerHTML = html
    const tableBody = document.querySelector(".Table")

    tableBody.innerHTML = tr
}