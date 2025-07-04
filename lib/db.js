import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let dbInstance = null;

export async function getDBConnection() {
  if (dbInstance) return dbInstance;

  const db = await open({
    filename: path.join(process.cwd(), "data", "database.sqlite"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      slug TEXT UNIQUE,
      name TEXT,
      category TEXT,
      price REAL,
      description TEXT,
      features TEXT,
      is_new BOOLEAN
      );

    CREATE TABLE IF NOT EXISTS category_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      type TEXT NOT NULL,
      url TEXT NOT NULL,
      FOREIGN KEY(product_id) REFERENCES products(id)
      );
      
    CREATE TABLE IF NOT EXISTS includes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      item TEXT,
      quantity INTEGER,
      FOREIGN KEY(product_id) REFERENCES products(id)
      );

    CREATE TABLE IF NOT EXISTS product_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      type TEXT, 
      url TEXT,
      FOREIGN KEY(product_id) REFERENCES products(id)
      );

    CREATE TABLE IF NOT EXISTS gallery_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      position TEXT,
      type TEXT, 
      url TEXT,
      FOREIGN KEY(product_id) REFERENCES products(id)
      );

    CREATE TABLE IF NOT EXISTS related_products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      related_slug TEXT NOT NULL,
      related_name TEXT NOT NULL,
      FOREIGN KEY(product_id) REFERENCES products(id)
      );

    CREATE TABLE IF NOT EXISTS related_product_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      related_product_id INTEGER NOT NULL,
      type TEXT NOT NULL,
      url TEXT NOT NULL,
      FOREIGN KEY(related_product_id) REFERENCES related_products(id)
      );
    `);
  dbInstance = db;
  return db;
}
