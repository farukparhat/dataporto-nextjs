-- Sample data script for MySQL
-- Creates demo database and tables, then populates them with sample data

-- Create database (schema equivalent in MySQL)
CREATE DATABASE IF NOT EXISTS demo;
USE demo;

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    customer_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    product_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price_cents INTEGER NOT NULL,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    order_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    order_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    total_cents INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
    order_item_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT,
    product_id BIGINT,
    quantity INTEGER NOT NULL,
    unit_price_cents INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Insert sample customers
INSERT IGNORE INTO customers (name, email, created_at) VALUES
('Alice Smith', 'alice@example.com', CURRENT_TIMESTAMP),
('Bob Jones', 'bob@example.com', CURRENT_TIMESTAMP),
('Carol Lee', 'carol@example.com', CURRENT_TIMESTAMP),
('David Wilson', 'david@example.com', CURRENT_TIMESTAMP),
('Emma Brown', 'emma@example.com', CURRENT_TIMESTAMP);

-- Insert sample products
INSERT IGNORE INTO products (name, description, price_cents, category) VALUES
('Laptop Pro', 'High-performance laptop for professionals', 149999, 'Electronics'),
('Wireless Mouse', 'Ergonomic wireless mouse', 2999, 'Electronics'),
('Coffee Mug', 'Ceramic coffee mug with company logo', 1299, 'Office'),
('Notebook', 'Spiral-bound notebook, 200 pages', 899, 'Office'),
('USB Cable', 'USB-C to USB-A cable, 3 feet', 1599, 'Electronics');

-- Insert sample orders
INSERT IGNORE INTO orders (customer_id, order_date, status, total_cents, created_at) VALUES
(1, DATE_SUB(CURDATE(), INTERVAL 10 DAY), 'completed', 2599, CURRENT_TIMESTAMP),
(2, DATE_SUB(CURDATE(), INTERVAL 3 DAY), 'pending', 1899, CURRENT_TIMESTAMP),
(3, DATE_SUB(CURDATE(), INTERVAL 1 DAY), 'completed', 999, CURRENT_TIMESTAMP),
(1, DATE_SUB(CURDATE(), INTERVAL 5 DAY), 'completed', 3499, CURRENT_TIMESTAMP),
(4, DATE_SUB(CURDATE(), INTERVAL 2 DAY), 'shipped', 1299, CURRENT_TIMESTAMP),
(5, CURDATE(), 'processing', 2099, CURRENT_TIMESTAMP);

-- Insert sample order items
INSERT IGNORE INTO order_items (order_id, product_id, quantity, unit_price_cents) VALUES
(1, 1, 1, 149999),
(1, 2, 1, 2999),
(2, 3, 2, 1299),
(2, 4, 1, 899),
(3, 5, 1, 1599),
(4, 1, 1, 149999),
(4, 2, 2, 2999),
(4, 3, 1, 1299),
(5, 4, 3, 899),
(6, 1, 1, 149999),
(6, 5, 2, 1599);
