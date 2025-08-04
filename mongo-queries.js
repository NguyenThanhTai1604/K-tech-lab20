// Yêu cầu 1
db.products.insertMany([
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Table", price: 150, category: "Furniture" }
])
// Yêu cầu 2:
db.orders.insertMany([
    {
        orderId: "ORD001",
        customerName: "John Doe",
        orderDate: new Date("2025-08-01"),
        totalAmount: 2000
    },
    {
        orderId: "ORD002",
        customerName: "Jane Smith",
        orderDate: new Date("2025-08-02"),
        totalAmount: 1200
    }
])
// Yêu cầu 3
db.users.insertMany([
    { name: "Alice", email: "alice@example.com", age: 30 },
    { name: "Bob", email: "bob@example.com", age: 18 },
    { name: "Charlie", email: "charlie@example.com", age: 27 },
    { name: "David", email: "david@example.com", age: 35 },
    { name: "Eva", email: "eva@example.com", age: 22 }
])
// Yêu cầu 4
db.users.find(
    { age: { $gt: 25 } },
    { _id: 0, name: 1, email: 1 }
)
// Yêu cầu 5
db.users.updateOne(
    { name: "Alice" },
    { $set: { age: 31 } }
)
// Yêu cầu 6
db.users.deleteMany({ age: { $lt: 20 } })
// Yêu cầu 7
db.users.aggregate([
    { $sort: { age: -1 } },
    { $limit: 3 }
])
// Yêu cầu 8
db.users.aggregate([
    { $sort: { age: -1 } },
    { $limit: 3 },
    {
        $project: {
            _id: 0,
            name: 1,
            age: 1
        }
    }
])
// Yêu cầu 9
db.users.aggregate({
    $group: { _id: "$age", total: { $sum: 1 } }
})
// Yêu cầu 10
db.users.aggregate([
    { $match: { age: { $gt: 25 } } },
    {
        $group: {
            _id: null,
            avgAge: { $avg: "$age" }
        }
    },
    {
        $project: {
            _id: 0,
            avgAge: 1
        }
    }
])

