import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";

export const PRICES: Record<MarathonFormState["plan"], number> = {
  funrun: 500,
  mini: 800,
  half: 1200,
  full: 1500,
};

export const coupon_Code = "CMU2025";
const discount_Rate = 0.3;

export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้

  discountCupon: (plan, haveCoupon, couponCode) => {
    const base = PRICES[plan] ?? 0;
    const ok = haveCoupon && (couponCode?.trim() === coupon_Code);
    return ok ? Math.round(base * (1 - discount_Rate)) : base;
  },

  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
    }),
}));
