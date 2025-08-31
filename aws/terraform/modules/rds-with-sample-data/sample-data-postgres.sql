-- Sample data script for PostgreSQL
-- Creates demo schema and tables, then populates them with sample data

-- Create schema
CREATE SCHEMA IF NOT EXISTS demo;

-- Create customers table
CREATE TABLE IF NOT EXISTS demo.customers (
    customer_id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS demo.products (
    product_id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price_cents INTEGER NOT NULL,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS demo.orders (
    order_id BIGSERIAL PRIMARY KEY,
    customer_id BIGINT REFERENCES demo.customers(customer_id),
    order_date DATE NOT NULL,
    status TEXT NOT NULL,
    total_cents INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS demo.order_items (
    order_item_id BIGSERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES demo.orders(order_id),
    product_id BIGINT REFERENCES demo.products(product_id),
    quantity INTEGER NOT NULL,
    unit_price_cents INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert sample customers
INSERT INTO demo.customers (name, email) VALUES
('Alice Smith', 'alice@example.com'),
('Bob Jones', 'bob@example.com'),
('Carol Lee', 'carol@example.com'),
('David Wilson', 'david@example.com'),
('Emma Brown', 'emma@example.com')
ON CONFLICT (email) DO NOTHING;

-- Insert sample products
INSERT INTO demo.products (name, description, price_cents, category) VALUES
('Laptop Pro', 'High-performance laptop for professionals', 149999, 'Electronics'),
('Wireless Mouse', 'Ergonomic wireless mouse', 2999, 'Electronics'),
('Coffee Mug', 'Ceramic coffee mug with company logo', 1299, 'Office'),
('Notebook', 'Spiral-bound notebook, 200 pages', 899, 'Office'),
('USB Cable', 'USB-C to USB-A cable, 3 feet', 1599, 'Electronics');

-- Insert sample orders
INSERT INTO demo.orders (customer_id, order_date, status, total_cents) VALUES
(1, CURRENT_DATE - INTERVAL '10 days', 'completed', 2599),
(2, CURRENT_DATE - INTERVAL '3 days', 'pending', 1899),
(3, CURRENT_DATE - INTERVAL '1 day', 'completed', 999),
(1, CURRENT_DATE - INTERVAL '5 days', 'completed', 3499),
(4, CURRENT_DATE - INTERVAL '2 days', 'shipped', 1299),
(5, CURRENT_DATE, 'processing', 2099);

-- Insert sample order items
INSERT INTO demo.order_items (order_id, product_id, quantity, unit_price_cents) VALUES
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
