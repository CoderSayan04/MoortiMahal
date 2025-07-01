import { useEffect, useState } from "react";
import CommonForm from "../common/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  addNewAddress,
  deleteAddress,
  editaAddress,
  fetchAllAddresses,
} from "@/store/shop/address-slice";
import AddressCard from "./address-card";
import { toast } from "sonner";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};

function Address({ setCurrentSelectedAddress, selectedId }) {
  const [formData, setFormData] = useState(initialAddressFormData);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.shopAddress);

  function handleManageAddress(event) {
    event.preventDefault();

    if (addressList.length >= 3 && currentEditedId === null) {
      setFormData(initialAddressFormData);
      toast.error("You can add max 3 addresses");
      return;
    }

    const action = currentEditedId !== null
      ? dispatch(
          editaAddress({
            userId: user?.id,
            addressId: currentEditedId,
            formData,
          })
        )
      : dispatch(
          addNewAddress({
            ...formData,
            userId: user?.id,
          })
        );

    toast.promise(action, {
      loading: currentEditedId !== null 
        ? "Updating address..." 
        : "Adding new address...",
      success: (data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllAddresses(user?.id));
          if (currentEditedId !== null) {
            setCurrentEditedId(null);
          }
          setFormData(initialAddressFormData);
          return currentEditedId !== null 
            ? "Address updated successfully" 
            : "Address added successfully";
        }
        throw new Error(data?.payload?.message || "Operation failed");
      },
      error: (error) => {
        return error.message || "Something went wrong";
      }
    });
  }

  function handleDeleteAddress(getCurrentAddress) {
    toast.promise(
      dispatch(
        deleteAddress({ userId: user?.id, addressId: getCurrentAddress._id })
      ),
      {
        loading: "Deleting address...",
        success: (data) => {
          if (data?.payload?.success) {
            dispatch(fetchAllAddresses(user?.id));
            return "Address deleted successfully";
          }
          throw new Error(data?.payload?.message || "Failed to delete address");
        },
        error: (error) => {
          return error.message || "Failed to delete address";
        }
      }
    );
  }

  function handleEditAddress(getCurrentAddress) {
    setCurrentEditedId(getCurrentAddress?._id);
    setFormData({
      ...formData,
      address: getCurrentAddress?.address,
      city: getCurrentAddress?.city,
      phone: getCurrentAddress?.phone,
      pincode: getCurrentAddress?.pincode,
      notes: getCurrentAddress?.notes,
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key].trim() !== "")
      .every((item) => item);
  }

  useEffect(() => {
    dispatch(fetchAllAddresses(user?.id));
  }, [dispatch, user?.id]);

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {addressList?.map((singleAddressItem) => (
          <AddressCard
            key={singleAddressItem._id}
            selectedId={selectedId}
            handleDeleteAddress={handleDeleteAddress}
            addressInfo={singleAddressItem}
            handleEditAddress={handleEditAddress}
            setCurrentSelectedAddress={setCurrentSelectedAddress}
          />
        ))}
      </div>
      <CardHeader>
        <CardTitle>
          {currentEditedId !== null ? "Edit Address" : "Add New Address"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText={currentEditedId !== null ? "Edit" : "Add"}
          onSubmit={handleManageAddress}
          isBtnDisabled={!isFormValid()}
        />
      </CardContent>
    </Card>
  );
}

export default Address;