import { getDBConnection } from "../lib/db.js";
import { products } from "../data/products.js";
import { includes } from "../data/includes.js";
import { productImages } from "../data/productImages.js";
import { galleryImages } from "../data/gallaryImages.js";
import { relatedProducts } from "../data/relatedProducts.js";
import { relatedProductImages } from "../data/relatedProductImages.js";
import { categoryImages } from "../data/categoryImages.js";

async function seed() {
  const db = await getDBConnection();
  try {
    await db.exec("DELETE FROM related_product_images");
    await db.exec("DELETE FROM related_products");
    await db.exec("DELETE FROM gallery_images");
    await db.exec("DELETE FROM includes");
    await db.exec("DELETE FROM product_images");
    await db.exec("DELETE FROM category_images");
    await db.exec("DELETE FROM products");
    await db.exec("DELETE FROM sqlite_sequence;");

    for (const product of products) {
      await db.run(
        "INSERT INTO products (id, slug, name, category, price, description, features, is_new) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          product.id,
          product.slug,
          product.name,
          product.category,
          product.price,
          product.description,
          product.features,
          product.is_new,
        ]
      );
    }

    for (const image of categoryImages) {
      await db.run(
        "INSERT INTO category_images (product_id, type, url) VALUES (?, ?, ?)",
        [image.product_id, image.type, image.url]
      );
    }

    for (const image of productImages) {
      await db.run(
        "INSERT INTO product_images (product_id, type, url) VALUES (?, ?, ?)",
        [image.product_id, image.type, image.url]
      );
    }

    for (const item of includes) {
      await db.run(
        "INSERT INTO includes (product_id, item, quantity) VALUES (?, ?, ?)",
        [item.product_id, item.item, item.quantity]
      );
    }

    for (const gallery of galleryImages) {
      await db.run(
        "INSERT INTO gallery_images (product_id, position, type, url) VALUES (?, ?, ?, ?)",
        [gallery.product_id, gallery.position, gallery.type, gallery.url]
      );
    }

    for (const related of relatedProducts) {
      await db.run(
        "INSERT INTO related_products (product_id, related_slug, related_name) VALUES (?, ?, ?)",
        [related.product_id, related.related_slug, related.related_name]
      );
    }

    for (const image of relatedProductImages) {
      await db.run(
        "INSERT INTO related_product_images (related_product_id, type, url) VALUES (?, ?, ?)",
        [image.related_product_id, image.type, image.url]
      );
    }

    console.log("Seeding complete!");
  } catch (err) {
    console.log(err);
  } finally {
    await db.close();
  }
}

seed();
