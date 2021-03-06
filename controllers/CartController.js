const { CartService } = require('../services')
const { errorGenerator } = require('../utils')

const getCartItems = async (req, res, next) => {
  try {
    const { id: userId } = req.foundUser
    const cartItems = await CartService.findCartItems(userId)

    if (!cartItems.length) return res.status(400).json({ message: 'not found cart', cartItems })

    const convertedCartItems = await CartService.convertCartItems(cartItems)

    return res.status(200).json({ message: 'success', cartItems: convertedCartItems })
  } catch (err) {
    next(err)
  }
}

const createOrAddCartItem = async (req, res, next) => {
  try {
    const { id: userId } = req.foundUser
    const { productId, quantity, groundId } = req.body
    const cartItems = await CartService.findCartItems(userId)

    if (!productId || !groundId || !quantity)
      errorGenerator({ statusCode: 400, message: 'invalid key error' })

    if (cartItems.length) {
      const [{ id: orderId }] = cartItems
      const addedProductCart = await CartService.addProductCart({
        orderId: orderId,
        productId,
        quantity,
        groundId,
      })

      return res.status(200).json({ message: 'success', cartItem: addedProductCart })
    }

    const createdProductCart = await CartService.createProductCart({
      userId,
      productId,
      quantity,
      groundId,
    })

    return res.status(200).json({ message: 'success', cartItem: createdProductCart })
  } catch (err) {
    next(err)
  }
}

const deleteCartItem = async (req, res, next) => {
  try {
    const { id: userId } = req.foundUser
    const { productId, groundId } = req.body
    const cartItems = await CartService.findCartItems(userId)

    if (!productId || !groundId) errorGenerator({ statusCode: 400, message: 'invalid key error' })

    if (!cartItems.length) return res.status(400).json({ message: 'not found cart', cartItems })

    const [{ id: orderId }] = cartItems
    const deletedProductCart = await CartService.deleteProductCart({
      orderId: orderId,
      userId,
      productId,
      groundId,
    })

    if (!deletedProductCart) return res.status(400).json({ message: 'not found product' })

    return res.status(200).json({ message: 'success', product: deletedProductCart })
  } catch (err) {
    next(err)
  }
}

const increaseAndDecreaseProductQuantity = async (req, res, next) => {
  try {
    const { id: userId } = req.foundUser
    const { productId, groundId, quantity, action } = req.body
    const cartItems = await CartService.findCartItems(userId)

    if (!productId || !groundId || !quantity || !action)
      errorGenerator({ statusCode: 400, message: 'invalid key error' })

    if (!cartItems.length) return res.status(400).json({ message: 'not found cart', cartItems })

    if (quantity === 1 && action === 'decrement')
      errorGenerator({ statusCode: 400, message: 'Less than the minimum quantity' })

    if (quantity === 999 && action === 'increment')
      errorGenerator({ statusCode: 400, message: 'Less than the maximum quantity' })

    const [{ id: orderId }] = cartItems
    const product = await CartService.productQuantityHandler({
      orderId: orderId,
      productId,
      groundId,
      action,
    })

    const { count } = product
    if (!count) return res.status(400).json({ message: 'not found product' })

    return res.status(200).json({ message: 'success', product })
  } catch (err) {
    next(err)
  }
}

const changeToPurchaseOrderStatus = async (req, res, next) => {
  try {
    const { id: userId } = req.foundUser
    const cartItems = await CartService.findCartItems(userId)

    if (!cartItems.length) return res.status(400).json({ message: 'not found cart', cartItems })

    const [{ id: orderId }] = cartItems
    const order = await CartService.changeToPurchaseOrderStatus(orderId)

    return res.status(200).json({ message: 'success', order })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getCartItems,
  createOrAddCartItem,
  deleteCartItem,
  increaseAndDecreaseProductQuantity,
  changeToPurchaseOrderStatus,
}
