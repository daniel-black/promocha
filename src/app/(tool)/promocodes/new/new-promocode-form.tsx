'use client';

import { NewPromocodeFormSchema, NewPromocodeFormSchemaType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function NewPromocodeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted }
  } = useForm<NewPromocodeFormSchemaType>({
    resolver: zodResolver(NewPromocodeFormSchema)
  });

  const onSubmit: SubmitHandler<NewPromocodeFormSchemaType> = async (data) => {
    console.log('hii')
    const parsedData = NewPromocodeFormSchema.parse(data);
    console.log(parsedData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-slate-900">
        <div>
          <label>Code</label>
          <input type="text" {...register('code')} />
        </div>
        <div>
          <label>Type</label>
          <input type="text" {...register('type')} />
        </div>
        <div>
          <label>Status</label>
          <input type="text" {...register('status')} />
        </div>
        <div>
          <label>Discount</label>
          <input type="number" {...register('discount')} />
        </div>
        <div>
          <label>Maximum Discount</label>
          <input type="number" {...register('maxDiscount')} />
        </div>
        <div>
          <label>Start</label>
          <input type="date" {...register('start')} />
        </div>
        <div>
          <label>End</label>
          <input type="date" {...register('end')} />
        </div>
        <div className="pt-6">
          <input
            type="submit"
            value={'SUBMIT'}
            disabled={isSubmitting}
            className="w-full text-lg bg-slate-800 text-slate-300 tracking-wider py-3 rounded cursor-pointer shadow hover:shadow-lg hover:bg-slate-900 hover:scale-105 duration-100 transition-all"
          />
        </div>
      </form>
    </div>
  );
}