import Order from '../models/order.js';

// Get all orders for a specific farmer
export const getOrdersByFarmer = async (req, res) => {
  try {
    const orders = await Order.find({ farmerId: req.params.farmerId }).populate('contractId');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new order
export const createOrder = async (req, res) => {
  const { farmerId, contractId, stages } = req.body;

  const newOrder = new Order({
    farmerId,
    contractId,
    stages,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update the stages of an order
export const updateStage = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const stageIndex = req.body.stageIndex;
    if (order.stages[stageIndex]) {
      order.stages[stageIndex].completed = true;
      order.stages[stageIndex].dateCompleted = new Date().toLocaleDateString();
      await order.save();
      res.status(200).json(order);
    } else {
      res.status(400).json({ message: "Invalid stage index" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    await order.remove();
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
