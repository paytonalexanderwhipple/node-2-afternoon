UPDATE product
    SET name = $1
    WHERE product_id = $2;

SELECT * FROM product;

