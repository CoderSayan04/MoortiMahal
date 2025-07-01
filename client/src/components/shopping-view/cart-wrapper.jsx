import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";
import React from "react";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md flex flex-col">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      
      {/* Scrollable cart items area */}
      <div className="flex-1 overflow-y-auto py-4">
        {cartItems && cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <UserCartItemsContent 
                key={item._id || item.productId} 
                cartItem={item} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 h-full flex items-center justify-center">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        )}
      </div>
      
      {/* Fixed bottom section with totals and checkout button */}
      <div className="border-t pt-4 sticky bottom-0 bg-background">
        <div className="flex justify-between mb-4">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalCartAmount.toFixed(2)}</span>
        </div>
        <Button
          onClick={() => {
            navigate("/shop/checkout");
            setOpenCartSheet(false);
          }}
          className="w-full"
          disabled={!cartItems || cartItems.length === 0}
        >
          Checkout
        </Button>
      </div>
    </SheetContent>
  );
}

export default UserCartWrapper;