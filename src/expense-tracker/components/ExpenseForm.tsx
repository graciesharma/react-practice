import { z } from "zod";
import { useForm } from "react-hook-form";
import { categories } from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
} 

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description is required" })
    .max(50),
  amount: z.number().min(0.01).max(100_000),
  categories: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({onSubmit}:Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}

          <div className="mb-3">
            <label htmlFor="categories" className="form-label">
              Category
            </label>
            <select {...register("categories")} className="form-select">
              <option value=""></option>
              {categories.map((categories) => (
                <option key={categories} value={categories}>
                  {categories}
                </option>
              ))}
            </select>
            {errors.categories && (
              <p className="text-danger">{errors.categories.message}</p>
            )}
          </div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
