/* eslint-disable max-len */
const orm = require('../examples/order/orm');

test('orm.tables', () => {
  expect(Object.keys(orm.tables).length).toEqual(5);
  expect(orm.tables.utmSource).toEqual('"utm_source".id as "utm_source#id", "utm_source".value as "utm_source#value", "utm_source".label as "utm_source#label", "utm_source".internal as "utm_source#internal"');
  expect(orm.tables.order).toEqual('"order".id as "order#id", "order".email as "order#email", "order".browser_ip as "order#browser_ip", "order".browser_user_agent as "order#browser_user_agent", "order".kujo_imported_date as "order#kujo_imported_date", "order".created_date as "order#created_date", "order".cancel_reason as "order#cancel_reason", "order".cancelled_date as "order#cancelled_date", "order".closed_date as "order#closed_date", "order".processed_date as "order#processed_date", "order".updated_date as "order#updated_date", "order".note as "order#note", "order".subtotal_price as "order#subtotal_price", "order".taxes_included as "order#taxes_included", "order".total_discounts as "order#total_discounts", "order".total_price as "order#total_price", "order".total_tax as "order#total_tax", "order".total_weight as "order#total_weight", "order".order_status_url as "order#order_status_url", "order".utm_source_id as "order#utm_source_id", "order".utm_medium_id as "order#utm_medium_id", "order".utm_campaign as "order#utm_campaign", "order".utm_content as "order#utm_content", "order".utm_term as "order#utm_term"');
  expect(orm.tables.lineItem).toEqual('"line_item".id as "line_item#id", "line_item".product_variant_id as "line_item#product_variant_id", "line_item".order_id as "line_item#order_id", "line_item".fulfillment_status_id as "line_item#fulfillment_status_id", "line_item".fulfillable_quantity as "line_item#fulfillable_quantity", "line_item".fulfillment_service as "line_item#fulfillment_service", "line_item".grams as "line_item#grams", "line_item".price as "line_item#price", "line_item".quantity as "line_item#quantity", "line_item".requires_shipping as "line_item#requires_shipping", "line_item".taxable as "line_item#taxable", "line_item".total_discount as "line_item#total_discount"');
  expect(orm.tables.productVariant).toEqual('"product_variant".id as "product_variant#id", "product_variant".product_id as "product_variant#product_id", "product_variant".actual_product_variant_id as "product_variant#actual_product_variant_id", "product_variant".color_id as "product_variant#color_id", "product_variant".gender_id as "product_variant#gender_id", "product_variant".size_id as "product_variant#size_id", "product_variant".barcode as "product_variant#barcode", "product_variant".price as "product_variant#price", "product_variant".compare_at_price as "product_variant#compare_at_price", "product_variant".created_date as "product_variant#created_date", "product_variant".updated_date as "product_variant#updated_date", "product_variant".grams as "product_variant#grams", "product_variant".requires_shipping as "product_variant#requires_shipping"');
  expect(orm.tables.product).toEqual('"product".id as "product#id", "product".vendor_id as "product#vendor_id", "product".value as "product#value", "product".label as "product#label", "product".product_type as "product#product_type", "product".created_date as "product#created_date", "product".updated_date as "product#updated_date", "product".published_date as "product#published_date", "product".category as "product#category"');
});
