import {Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
     const {name, address, pincode, foodType, email, password, ownerName, phone} = <CreateVendorInput>req.body;
     
     const existingVendor = await Vendor.findOne({email: email})

     if(existingVendor !== null) {
      return res.json({"message": "There is an existing vendor with this email ID"})
     }

     const salt = await GenerateSalt()
     const encryptPassword = await GeneratePassword(password, salt)

     const createdVendor = await Vendor.create({
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: encryptPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
     })

     return res.json(createdVendor)
}

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const GetVendorsById = async (req: Request, res: Response, next: NextFunction) => {
    
}