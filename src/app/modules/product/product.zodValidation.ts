import { z } from 'zod';

const productValidationSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters long.' })
      .nonempty({ message: 'Name is required.' }),
    brand: z.string().nonempty({ message: 'Brand is required.' }),
    price: z
      .number()
      .nonnegative({ message: 'Price must be a positive number.' })
      .refine((price) => price !== undefined, {
        message: 'Price is required.',
      }),
    category: z.enum(
      [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      {
        errorMap: () => ({
          message:
            'Category must be one of Writing, Office Supplies, Art Supplies, Educational, or Technology.',
        }),
      },
    ),
    description: z
      .string()
      .nonempty({ message: 'Description is required.' })
      .max(500, { message: 'Description cannot exceed 500 characters.' }),
    quantity: z
      .number()
      .int()
      .min(1, { message: 'Quantity must be at least 1.' })
      .refine((quantity) => quantity !== undefined, {
        message: 'Quantity is required.',
      }),
    inStock: z.boolean().refine((inStock) => inStock !== undefined, {
      message: 'In-stock status is required.',
    }),
  })
  .refine(
    (data) => {
      // Custom validation: If quantity > 0, inStock must be true
      if (data.quantity > 0 && !data.inStock) {
        return false;
      }
      return true;
    },
    {
      message: 'In-stock status must be true if quantity is greater than 0.',
      path: ['inStock'], // This is the field associated with the error
    },
  );

export default productValidationSchema;

// Example product data
/*  {
  name: 'Smart Pen',
  brand: 'TrustedBrand',
  price: 120,
  category: 'Technology',
  description: 'A smart pen for digital writing.',
  quantity: 10,
  inStock: true,
} */
