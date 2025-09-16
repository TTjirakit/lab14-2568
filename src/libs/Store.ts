import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCupon: (
    plan: MarathonForm["plan"],
    haveCoupon: boolean,
    couponCode?: string
  ) => number;
  reset: () => void;
}
export type { MarathonFormState }