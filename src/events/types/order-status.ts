export enum OrderStatus {
  /**
   * 1. When the order has been created but the associated
   *    ticket has not been reserved
   */
  Created = "created",

  /**
   * 1. Associated ticket is already reserved
   * 2. User cancelled the order
   * 3. Order expires before payment
   */
  Cancelled = "cancelled",

  /**
   * 1. Associated ticket reserved successfully
   */
  AwaitingPayment = "awaiting:payment",

  /**
   * 1. Associated ticket reserved and the payment done successfully
   */
  Complete = "complete"
}
