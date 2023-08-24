import {zodResolver} from "@hookform/resolvers/zod";
import {FieldValues, useForm} from "react-hook-form";
import {z} from 'zod';
import {categories} from "../App.tsx";

const schema = z.object({
    description: z.string().min(3, {message: "Description should be at least 3 characters."}),
    amount: z.number({invalid_type_error: "Amount is required."}),
    category: z.string().min(1, "you must select an option"),
})

type FormData = z.infer<typeof schema>;

export const ExpenseForm = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card mb-5 mb-xl-10">
                <div className="card-header cursor-pointer">
                    <div className="card-title m-0">
                        <h3 className="fw-bold m-0">Products React</h3>
                    </div>
                </div>
                <div className="row mb-5 p-3">

                    <div className="col-md-6">
                        <label htmlFor="description" className="required form-label">Description</label>
                        <input id="description" {...register('description')} className="form-control"/>
                        {errors.description && <p className="text-danger">{errors.description.message}</p>}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="amount" className="required form-label"> Amount</label>
                        <input id="amount" {...register('amount', {valueAsNumber: true})}
                               className="form-control" type="number"/>
                        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                    </div>


                    <div className="col-md-6">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select defaultValue="0" {...register("category")} id="category" className="form-select"
                                aria-label="Select">
                            <option value="">All</option>
                            {categories.map(category => <option key={category} value={category}>{category}</option>)}
                        </select>
                        {errors.category && <p className="text-danger">{errors.category.message}</p>}
                    </div>

                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary mt-4 form-control">Guardar</button>
                    </div>


                </div>
            </div>
        </form>
    )
}
