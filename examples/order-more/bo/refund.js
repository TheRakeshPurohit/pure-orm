const Base = require('./base');
const Order = require('./order');
const Refunds = require('./refunds');

class Refund extends Base {
  get BoCollection() {
    return Refunds;
  }

  static get tableName() {
    return 'refund';
  }

  static get sqlColumnsData() {
    return [
      'id',
      { column: 'order_id', references: Order },
      'shopify_id',
      'created_date',
      'processed_date',
      'kujo_imported_date',
      'amount',
      'note',
      'restock'
    ];
  }
}
module.exports = Refund;
