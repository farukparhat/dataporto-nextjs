create schema if not exists demo;

create table if not exists demo.customers (
  customer_id   bigserial primary key,
  name          text not null,
  email         text unique not null,
  created_at    timestamptz default now()
);

create table if not exists demo.orders (
  order_id      bigserial primary key,
  customer_id   bigint references demo.customers(customer_id),
  order_date    date not null,
  status        text not null,
  total_cents   integer not null
);

insert into demo.customers (name, email) values
('Alice Smith','alice@example.com'),
('Bob Jones','bob@example.com'),
('Carol Lee','carol@example.com');

insert into demo.orders (customer_id, order_date, status, total_cents) values
(1, current_date - 10, 'completed', 2599),
(2, current_date - 3,  'pending',   1899),
(3, current_date - 1,  'completed', 999);