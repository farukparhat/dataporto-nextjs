-- Database: PostgreSQL

-- List all tables in the current schema
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'demo'
ORDER BY table_name;

-- Show all data in the customers table
SELECT * FROM demo.customers;

-- Show all data in the orders table
SELECT * FROM demo.orders;

-- Show all data in the customers and orders tables
SELECT * FROM demo.customers JOIN demo.orders ON demo.customers.customer_id = demo.orders.customer_id;