import z from "zod";

export const billingSchema = z.object({
  card_name: z
    .string()
    .min(1, "This field is required")
    .min(3, "The card number cannot be less than 3 characters")
    .max(20, "The card number cannot contain more than 20 characters."),
  card_number: z.string().min(1, "This field is required"),
  exp_date: z.string().min(1, "This field is required"),
  cvv: z.string().min(1, "This field is required"),
});

export type IBilling = z.infer<typeof billingSchema>;
